import React, { useState } from 'react';
import './App.css';
import clinicalData from './clinicalData';

// ============================================================
// COMPONENT: QuestionRenderer
// Renders a single question based on its type, handles sub-questions
// ============================================================
function QuestionRenderer({ question, answers, onAnswer, depth = 0 }) {
  const currentValue = answers[question.id];

  // --- Text input ---
  if (question.type === 'text') {
    return (
      <div className={`question-block depth-${depth}`}>
        <label className="question-label">{question.label}</label>
        <input
          type="text"
          className="text-input"
          value={currentValue || ''}
          onChange={(e) => onAnswer(question.id, e.target.value)}
          placeholder="Kirjoita tähän..."
        />
      </div>
    );
  }

  // --- Single choice ---
  if (question.type === 'single') {
    return (
      <div className={`question-block depth-${depth}`}>
        <label className="question-label">{question.label}</label>
        <div className="options-container">
          {question.options.map((option) => (
            <button
              key={option}
              className={`option-button ${currentValue === option ? 'selected' : ''}`}
              onClick={() => onAnswer(question.id, option)}
            >
              {option}
              {question.points && (
                <span className="points-badge">{question.points[option]} p</span>
              )}
            </button>
          ))}
        </div>
        {/* Render sub-questions if the selected option triggers them */}
        {currentValue && question.subQuestions && question.subQuestions[currentValue] && (
          <div className="sub-questions">
            {question.subQuestions[currentValue].map((subQ) => (
              <QuestionRenderer
                key={subQ.id}
                question={subQ}
                answers={answers}
                onAnswer={onAnswer}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // --- Multi choice ---
  if (question.type === 'multi') {
    const selectedValues = currentValue || [];
    const toggleOption = (option) => {
      if (selectedValues.includes(option)) {
        onAnswer(question.id, selectedValues.filter((v) => v !== option));
      } else {
        onAnswer(question.id, [...selectedValues, option]);
      }
    };

    return (
      <div className={`question-block depth-${depth}`}>
        <label className="question-label">{question.label}</label>
        <div className="options-container">
          {question.options.map((option) => (
            <button
              key={option}
              className={`option-button multi ${selectedValues.includes(option) ? 'selected' : ''}`}
              onClick={() => toggleOption(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

// ============================================================
// FUNCTION: generateNoteForQuestion
// Generates the clinical note text for a single question
// ============================================================
function generateNoteForQuestion(question, answers) {
  const value = answers[question.id];
  if (value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) {
    return '';
  }

  let noteText = '';

  // Check for custom note generator (e.g. trauma question)
  if (question.customNote && value === 'kyllä') {
    noteText = question.customNote(answers);
  }
  // noteMap: direct mapping from option to text
  else if (question.noteMap && question.noteMap[value]) {
    noteText = question.noteMap[value];
  }
  // noteTemplate with {value} placeholder for single choice
  else if (question.noteTemplate && typeof value === 'string') {
    noteText = question.noteTemplate.replace('{value}', value);
  }
  // noteTemplate with {value} placeholder for multi choice (join with comma)
  else if (question.noteTemplate && Array.isArray(value)) {
    noteText = question.noteTemplate.replace('{value}', value.join(', '));
  }

  // Now handle sub-questions recursively
  if (question.subQuestions && question.subQuestions[value]) {
    question.subQuestions[value].forEach((subQ) => {
      const subNote = generateNoteForQuestion(subQ, answers);
      if (subNote) {
        noteText += ' ' + subNote;
      }
    });
  }

  return noteText.trim();
}

// ============================================================
// FUNCTION: calculateSTarTScore
// Calculates the STarT Back Screening Tool score
// ============================================================
function calculateSTarTScore(questions, answers) {
  let totalScore = 0;
  let psychosocialScore = 0;

  questions.forEach((q) => {
    const value = answers[q.id];
    if (value !== undefined && q.points) {
      const points = q.points[value] || 0;
      totalScore += points;
      if (q.psychosocialItem) {
        psychosocialScore += points;
      }
    }
  });

  let riskLevel = '';
  if (totalScore <= 3) {
    riskLevel = 'matala riski';
  } else if (totalScore >= 4 && psychosocialScore <= 3) {
    riskLevel = 'kohtalainen riski';
  } else if (totalScore >= 4 && psychosocialScore >= 4) {
    riskLevel = 'korkea riski';
  }

  return { totalScore, psychosocialScore, riskLevel };
}

// ============================================================
// MAIN APP COMPONENT
// ============================================================
function App() {
  const [answers, setAnswers] = useState({});
  const [activeSection, setActiveSection] = useState('anamneesi');
  const [copied, setCopied] = useState(false);

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // --- Generate the full clinical note ---
  const generateFullNote = () => {
    const noteParts = [];

    clinicalData.sections.forEach((section) => {
      const sectionNotes = [];

      // STarT questionnaire - special handling
      if (section.isScored) {
        const { totalScore, psychosocialScore, riskLevel } = calculateSTarTScore(
          section.questions,
          answers
        );
        if (riskLevel) {
          sectionNotes.push(
            `STarT-selkäkyselyn perusteella potilaalla on ${riskLevel} haittaavan selkäkivun kehittymiselle (kokonaispistemäärä ${totalScore}/9, psykososiaalinen osio ${psychosocialScore}/5).`
          );
        }
      }

      // Regular sections with questions
      if (section.questions) {
        section.questions.forEach((q) => {
          if (!section.isScored) {
            const note = generateNoteForQuestion(q, answers);
            if (note) sectionNotes.push(note);
          }
        });
      }

      // Sections with subSections (STATUS)
      if (section.subSections) {
        section.subSections.forEach((subSection) => {
          const subNotes = [];
          subSection.questions.forEach((q) => {
            const note = generateNoteForQuestion(q, answers);
            if (note) subNotes.push(note);
          });
          if (subNotes.length > 0) {
            sectionNotes.push(subNotes.join(' '));
          }
        });
      }

      if (sectionNotes.length > 0) {
        noteParts.push({
          title: section.title,
          text: sectionNotes.join(' '),
        });
      }
    });

    return noteParts;
  };

  const noteParts = generateFullNote();
  const fullNoteText = noteParts
    .map((part) => `${part.title}\n${part.text}`)
    .join('\n\n');

  const copyNote = () => {
    navigator.clipboard.writeText(fullNoteText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setAnswers({});
  };

  // --- Find the currently active section data ---
  const renderLeftPanel = () => {
    const section = clinicalData.sections.find((s) => s.id === activeSection);
    if (!section) return null;

    return (
      <div>
        <h2 className="section-title">{section.title}</h2>
        {section.description && (
          <p className="section-description">{section.description}</p>
        )}

        {/* Regular questions (ANAMNEESI, RED FLAGS, STarT) */}
        {section.questions && section.questions.map((q) => (
          <QuestionRenderer
            key={q.id}
            question={q}
            answers={answers}
            onAnswer={handleAnswer}
          />
        ))}

        {/* STarT score display */}
        {section.isScored && (
          <div className="start-score-display">
            {(() => {
              const { totalScore, psychosocialScore, riskLevel } = calculateSTarTScore(
                section.questions,
                answers
              );
              const answeredCount = section.questions.filter((q) => answers[q.id] !== undefined).length;
              if (answeredCount === 0) return null;
              return (
                <div className={`score-box risk-${riskLevel.split(' ')[0]}`}>
                  <h3>STarT-pisteet</h3>
                  <p>Kokonaispisteet: <strong>{totalScore}/9</strong></p>
                  <p>Psykososiaalinen osio (kysymykset 5–9): <strong>{psychosocialScore}/5</strong></p>
                  {riskLevel && (
                    <p className="risk-level">
                      Riskitaso: <strong>{riskLevel}</strong>
                    </p>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* SubSections (STATUS) */}
        {section.subSections && section.subSections.map((subSection) => (
          <div key={subSection.id} className="sub-section">
            <h3 className="sub-section-title">{subSection.title}</h3>
            {subSection.questions.map((q) => (
              <QuestionRenderer
                key={q.id}
                question={q}
                answers={answers}
                onAnswer={handleAnswer}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="app-header">
        <h1>Nasi-Medical</h1>
        <p className="app-subtitle">Alaselkäkivun kliininen dokumentaatio</p>
      </header>

      {/* NAVIGATION TABS */}
      <nav className="section-nav">
        {clinicalData.sections.map((section) => (
          <button
            key={section.id}
            className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.title}
          </button>
        ))}
      </nav>

      {/* MAIN CONTENT */}
      <div className="main-content">
        {/* LEFT PANEL - Questions */}
        <div className="left-panel">
          {renderLeftPanel()}
        </div>

        {/* RIGHT PANEL - Clinical Note */}
        <div className="right-panel">
          <div className="note-header">
            <h2>Kliininen teksti</h2>
            <div className="note-actions">
              <button className="action-button copy-button" onClick={copyNote}>
                {copied ? '✓ Kopioitu!' : 'Kopioi teksti'}
              </button>
              <button className="action-button clear-button" onClick={clearAll}>
                Tyhjennä kaikki
              </button>
            </div>
          </div>

          <div className="note-content">
            {noteParts.length === 0 ? (
              <p className="note-placeholder">
                Valintoja ei ole vielä tehty. Aloita vastaamalla vasemman puolen kysymyksiin.
              </p>
            ) : (
              noteParts.map((part, index) => (
                <div key={index} className="note-section">
                  <h3 className="note-section-title">{part.title}</h3>
                  <p className="note-text">{part.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
