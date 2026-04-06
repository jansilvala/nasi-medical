import React, { useState } from 'react';
import './App.css';
import scenarios from './scenarios';

// ============================================================
// COMPONENT: HomePage
// ============================================================
function HomePage({ onSelectScenario }) {
  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-brand">Näsi Medical</h1>
        <p className="home-tagline">Kliinisen dokumentaation työkalu</p>
      </div>

      <div className="home-content">
        <h2 className="home-section-title">Valitse kliininen skenaario</h2>
        <div className="scenario-grid">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              className="scenario-card"
              onClick={() => onSelectScenario(scenario.id)}
            >
              <div className="scenario-icon">{scenario.icon}</div>
              <h3 className="scenario-title">{scenario.title}</h3>
              <p className="scenario-description">{scenario.description}</p>
            </button>
          ))}
        </div>
      </div>

      <footer className="home-footer">
        <p>Näsi Medical — kliinisen dokumentaation työkalu</p>
      </footer>
    </div>
  );
}

// ============================================================
// COMPONENT: QuestionRenderer
// ============================================================
function QuestionRenderer({ question, answers, onAnswer, depth = 0 }) {
  const currentValue = answers[question.id];

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
        {/* Multi-select sub-questions: render for each selected option */}
        {question.multiSubQuestions && selectedValues.map((selectedOption) => {
          const subQs = question.multiSubQuestions[selectedOption];
          if (!subQs) return null;
          return (
            <div key={selectedOption} className="sub-questions">
              {subQs.map((subQ) => (
                <QuestionRenderer
                  key={`${selectedOption}-${subQ.id}`}
                  question={subQ}
                  answers={answers}
                  onAnswer={onAnswer}
                  depth={depth + 1}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  return null;
}

// ============================================================
// FUNCTION: generateNoteForQuestion
// ============================================================
function generateNoteForQuestion(question, answers) {
  const value = answers[question.id];

  let noteText = '';

  // Custom note generator takes precedence
  if (question.customNote) {
    const custom = question.customNote(answers);
    if (custom) noteText = custom;
  }

  if (!noteText) {
    if (value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) {
      // No value and no custom note = nothing
    }
    else if (question.noteMap && question.noteMap[value]) {
      noteText = question.noteMap[value];
    }
    else if (question.noteTemplate && typeof value === 'string') {
      noteText = question.noteTemplate.replace('{value}', value);
    }
    else if (question.noteTemplate && Array.isArray(value)) {
      const displayValues = value.map((v) => {
        if (question.noteValues && question.noteValues[v]) {
          return question.noteValues[v];
        }
        return v;
      });
      noteText = question.noteTemplate.replace('{value}', displayValues.join(', '));
    }
  }

  // Handle single-choice sub-questions
  if (question.subQuestions && typeof value === 'string' && question.subQuestions[value]) {
    question.subQuestions[value].forEach((subQ) => {
      const subNote = generateNoteForQuestion(subQ, answers);
      if (subNote) {
        noteText += ' ' + subNote;
      }
    });
  }

  // Handle multi-choice sub-questions
  if (question.multiSubQuestions && Array.isArray(value)) {
    value.forEach((selectedOption) => {
      const subQs = question.multiSubQuestions[selectedOption];
      if (subQs) {
        subQs.forEach((subQ) => {
          const subNote = generateNoteForQuestion(subQ, answers);
          if (subNote) {
            noteText += ' ' + subNote;
          }
        });
      }
    });
  }

  return noteText.trim();
}

// ============================================================
// FUNCTION: flattenQuestions
// Recursively collects all questions including sub-questions
// ============================================================
function flattenQuestions(questions) {
  const result = [];
  questions.forEach((q) => {
    result.push(q);
    if (q.subQuestions) {
      Object.values(q.subQuestions).forEach((subQs) => {
        result.push(...flattenQuestions(subQs));
      });
    }
    if (q.multiSubQuestions) {
      Object.values(q.multiSubQuestions).forEach((subQs) => {
        result.push(...flattenQuestions(subQs));
      });
    }
  });
  return result;
}

// ============================================================
// FUNCTION: calculateSTarTScore (for lower back pain app)
// ============================================================
function calculateSTarTScore(questions, answers) {
  let totalScore = 0;
  let psychosocialScore = 0;
  let answeredCount = 0;

  questions.forEach((q) => {
    const value = answers[q.id];
    if (value !== undefined && q.points) {
      answeredCount += 1;
      const points = q.points[value] || 0;
      totalScore += points;
      if (q.psychosocialItem) {
        psychosocialScore += points;
      }
    }
  });

  let riskLevel = '';
  if (answeredCount === 0) {
    // no answers yet -> don't produce a risk level
  } else if (totalScore <= 3) {
    riskLevel = 'matala riski';
  } else if (totalScore >= 4 && psychosocialScore <= 3) {
    riskLevel = 'kohtalainen riski';
  } else if (totalScore >= 4 && psychosocialScore >= 4) {
    riskLevel = 'korkea riski';
  }

  return { totalScore, psychosocialScore, riskLevel };
}

// ============================================================
// FUNCTION: calculateQuestionnaireScores
// Generic scoring for questions with `scoring` field
// ============================================================
function calculateQuestionnaireScores(clinicalData, answers) {
  // Collect all questions from all sections recursively
  const allQuestions = [];
  clinicalData.sections.forEach((section) => {
    if (section.questions) {
      allQuestions.push(...flattenQuestions(section.questions));
    }
    if (section.subSections) {
      section.subSections.forEach((sub) => {
        if (sub.questions) allQuestions.push(...flattenQuestions(sub.questions));
      });
    }
  });

  // Build raw score data per questionnaire
  const rawData = {}; // { questionnaireId: { pairs: {1: {A: 2, B: 3}}, directSum: 0, categorySums: {} } }

  allQuestions.forEach((q) => {
    if (!q.scoring) return;
    const value = answers[q.id];
    if (value === undefined) return;

    q.scoring.forEach((entry) => {
      const qId = entry.questionnaire;
      if (!rawData[qId]) {
        rawData[qId] = { pairs: {}, directSum: 0, categorySums: {}, hasAnyAnswer: false };
      }
      const points = entry.points[value];
      if (points === undefined) return;

      rawData[qId].hasAnyAnswer = true;

      if (entry.pair) {
        // DAN-PSS-1 style: pair-based
        if (!rawData[qId].pairs[entry.pair]) {
          rawData[qId].pairs[entry.pair] = { A: null, B: null, category: entry.category };
        }
        rawData[qId].pairs[entry.pair][entry.pairRole] = points;
      } else {
        // Simple sum
        rawData[qId].directSum += points;
      }
    });
  });

  // Compute final scores
  const scores = {};
  Object.entries(rawData).forEach(([qId, data]) => {
    let total = 0;
    const categorySums = {};

    if (Object.keys(data.pairs).length > 0) {
      // Pair-product scoring (DAN-PSS-1)
      Object.values(data.pairs).forEach((pair) => {
        const a = pair.A !== null ? pair.A : 0;
        const b = pair.B !== null ? pair.B : 0;
        const pairScore = a * b;
        total += pairScore;
        if (pair.category) {
          categorySums[pair.category] = (categorySums[pair.category] || 0) + pairScore;
        }
      });
    } else {
      total = data.directSum;
    }

    scores[qId] = {
      total,
      categorySums,
      hasAnyAnswer: data.hasAnyAnswer,
    };
  });

  return scores;
}

// ============================================================
// FUNCTION: buildQuestionnaireNoteText
// ============================================================
function buildQuestionnaireNoteText(questionnaireConfig, scoreData) {
  if (!scoreData || !scoreData.hasAnyAnswer) return '';

  const total = scoreData.total;
  const threshold = questionnaireConfig.thresholds.find(
    (t) => total >= t.min && total <= t.max
  );
  if (!threshold) return '';

  let text = questionnaireConfig.noteTemplate;
  text = text.replace('{label}', threshold.label);
  text = text.replace('{total}', total);
  Object.entries(scoreData.categorySums).forEach(([cat, sum]) => {
    text = text.replace(`{${cat}}`, sum);
  });
  return text;
}

// ============================================================
// COMPONENT: QuestionnaireScoreBox
// ============================================================
function QuestionnaireScoreBox({ config, scoreData }) {
  if (!scoreData || !scoreData.hasAnyAnswer) {
    return (
      <div className="questionnaire-box">
        <h3>{config.name}</h3>
        <p className="questionnaire-desc">{config.description}</p>
        <p className="questionnaire-placeholder">Ei vielä vastauksia. Vastaa kysymyksiin anamneesissa nähdäksesi pisteet.</p>
      </div>
    );
  }

  const total = scoreData.total;
  const threshold = config.thresholds.find((t) => total >= t.min && total <= t.max);
  const label = threshold ? threshold.label : '';

  return (
    <div className="questionnaire-box">
      <h3>{config.name}</h3>
      <p className="questionnaire-desc">{config.description}</p>
      <div className="questionnaire-score">
        <div className="score-main">
          <span className="score-value">{total}</span>
          <span className="score-label">{label}</span>
        </div>
        {Object.keys(scoreData.categorySums).length > 0 && (
          <div className="score-breakdown">
            {Object.entries(scoreData.categorySums).map(([cat, sum]) => (
              <div key={cat} className="breakdown-item">
                <span className="breakdown-label">{cat}:</span> <strong>{sum}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
      <p className="questionnaire-info">{config.info}</p>
    </div>
  );
}

// ============================================================
// COMPONENT: ScenarioApp
// ============================================================
function ScenarioApp({ scenario, onBackToHome }) {
  const clinicalData = scenario.data;
  const [answers, setAnswers] = useState({});
  const [activeSection, setActiveSection] = useState(clinicalData.sections[0].id);
  const [copied, setCopied] = useState(false);

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // Find questionnaire config (if any)
  const questionnaireConfigs = (() => {
    const kyselyt = clinicalData.sections.find((s) => s.isQuestionnaireDisplay);
    return kyselyt ? kyselyt.questionnaires : [];
  })();

  const questionnaireScores = calculateQuestionnaireScores(clinicalData, answers);

  const generateFullNote = () => {
    const noteParts = [];

    clinicalData.sections.forEach((section) => {
      const sectionNotes = [];

      // STarT questionnaire - legacy special handling (for lower back pain)
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

      // Questionnaire display section (urinary difficulties)
      if (section.isQuestionnaireDisplay && section.questionnaires) {
        section.questionnaires.forEach((config) => {
          const scoreData = questionnaireScores[config.id];
          const noteText = buildQuestionnaireNoteText(config, scoreData);
          if (noteText) sectionNotes.push(noteText);
        });
      }

      if (section.questions && !section.isQuestionnaireDisplay) {
        let currentParagraph = [];
        section.questions.forEach((q) => {
          if (!section.isScored) {
            const note = generateNoteForQuestion(q, answers);
            if (note) {
              if (q.paragraphBreak && currentParagraph.length > 0) {
                sectionNotes.push(currentParagraph.join(' '));
                currentParagraph = [];
              }
              currentParagraph.push(note);
            }
          }
        });
        if (currentParagraph.length > 0) {
          sectionNotes.push(currentParagraph.join(' '));
        }
      }

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
          paragraphs: sectionNotes,
        });
      }
    });

    return noteParts;
  };

  const noteParts = generateFullNote();
  const fullNoteText = noteParts
    .map((part) => `${part.title}\n${part.paragraphs.join('\n\n')}`)
    .join('\n\n');

  const copyNote = () => {
    navigator.clipboard.writeText(fullNoteText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setAnswers({});
  };

  const countAnswered = () => {
    return Object.keys(answers).length;
  };

  const renderLeftPanel = () => {
    const section = clinicalData.sections.find((s) => s.id === activeSection);
    if (!section) return null;

    // Questionnaire display section
    if (section.isQuestionnaireDisplay) {
      return (
        <div className="left-panel-content">
          <div className="section-header-card">
            <h2 className="section-title">{section.title}</h2>
            <p className="section-description">
              Pisteet lasketaan automaattisesti anamneesissa annettujen vastausten perusteella.
            </p>
          </div>
          {section.questionnaires.map((config) => (
            <div key={config.id} className="question-card">
              <QuestionnaireScoreBox
                config={config}
                scoreData={questionnaireScores[config.id]}
              />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="left-panel-content">
        <div className="section-header-card">
          <h2 className="section-title">{section.title}</h2>
          {section.description && (
            <p className="section-description">{section.description}</p>
          )}
        </div>

        {section.questions && section.questions.map((q) => (
          <div key={q.id} className="question-card">
            <QuestionRenderer
              question={q}
              answers={answers}
              onAnswer={handleAnswer}
            />
          </div>
        ))}

        {/* STarT score display (legacy) */}
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

        {/* Show questionnaire scores at bottom of anamneesi for urinary difficulties */}
        {section.showQuestionnaireScores && questionnaireConfigs.length > 0 && (
          <div className="questionnaire-scores-inline">
            {questionnaireConfigs.map((config) => (
              <QuestionnaireScoreBox
                key={config.id}
                config={config}
                scoreData={questionnaireScores[config.id]}
              />
            ))}
          </div>
        )}

        {section.subSections && section.subSections.map((subSection) => (
          <div key={subSection.id} className="sub-section-card">
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
    <div className="app-wrapper">
      <div className="app-container">
        <header className="top-bar">
          <div className="top-bar-left">
            <button className="back-button" onClick={onBackToHome}>
              ← Etusivu
            </button>
            <span className="brand-divider"></span>
            <span className="brand-name">Näsi Medical</span>
            <span className="brand-divider"></span>
            <span className="brand-context">{scenario.title}</span>
          </div>
          <div className="top-bar-right">
            <span className="answer-count">{countAnswered()} vastausta</span>
          </div>
        </header>

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

        <div className="main-content">
          <div className="left-panel">
            {renderLeftPanel()}
          </div>

          <div className="right-panel">
            <div className="note-panel-header">
              <h2>Potilasasiakirjamerkintä</h2>
            </div>

            <div className="note-panel-body">
              <div className="note-actions">
                <button className="action-button copy-button" onClick={copyNote}>
                  {copied ? '✓ Kopioitu!' : 'Kopioi teksti'}
                </button>
                <button className="action-button clear-button" onClick={clearAll}>
                  Tyhjennä kaikki
                </button>
              </div>

              <div className="note-content">
                {noteParts.length === 0 ? (
                  <div className="note-placeholder">
                    <p>Valintoja ei ole vielä tehty.</p>
                    <p className="placeholder-hint">Aloita vastaamalla vasemman puolen kysymyksiin — teksti muodostuu automaattisesti.</p>
                  </div>
                ) : (
                  noteParts.map((part, index) => (
                    <div key={index} className="note-section">
                      <h3 className="note-section-title">{part.title}</h3>
                      {part.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="note-text">{paragraph}</p>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN APP COMPONENT
// ============================================================
function App() {
  const [currentScenarioId, setCurrentScenarioId] = useState(null);

  const currentScenario = scenarios.find((s) => s.id === currentScenarioId);

  if (currentScenario) {
    return (
      <ScenarioApp
        scenario={currentScenario}
        onBackToHome={() => setCurrentScenarioId(null)}
      />
    );
  }

  return (
    <HomePage onSelectScenario={(id) => setCurrentScenarioId(id)} />
  );
}

export default App;
