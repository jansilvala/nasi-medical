// urinaryDifficultiesData.js
// Miehen ei-akuutti virtsaamisvaikeus - kliininen dokumentaatio
// Sisältää anamneesin, statuksen ja kyselyt (DAN-PSS-1 ja EROTTELUPISTELOMAKE)

const urinaryDifficultiesData = {
  sections: [
    // ============================================================
    // ANAMNEESI
    // ============================================================
    {
      id: 'anamneesi',
      title: 'Anamneesi',
      showQuestionnaireScores: true, // näytä kyselypisteet tämän osion alla
      questions: [
        // ---- DAN-PSS-1 KYSYMYSPARI 1 ----
        {
          id: 'odottaminen_1a',
          label: 'Täytyykö virtsaamisen alkamista odottaa?',
          type: 'single',
          options: ['ei koskaan', 'harvoin', 'usein', 'aina'],
          noteMap: {
            'ei koskaan': 'Virtsaamisen alkamista ei koskaan tarvitse odottaa.',
            'harvoin': 'Virtsaamisen alkamista tarvitsee harvoin odottaa.',
            'usein': 'Virtsaamisen alkamista tarvitsee usein odottaa.',
            'aina': 'Virtsaamisen alkamista tarvitsee aina odottaa.',
          },
          scoring: [
            {
              questionnaire: 'DAN-PSS-1',
              points: { 'ei koskaan': 0, 'harvoin': 1, 'usein': 2, 'aina': 3 },
              pair: '1', pairRole: 'A', category: 'tyhjenemisoireet',
            },
          ],
          subQuestions: {
            'harvoin': [
              {
                id: 'odottaminen_1b',
                label: 'Mikäli joudutte odottamaan virtsaamisen alkamista, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Virtsaamisen alkamisen odottelusta ei ole lainkaan haittaa.',
                  'vähän': 'Virtsaamisen alkamisen odottelusta on vähän haittaa.',
                  'kohtalaisesti': 'Virtsaamisen alkamisen odottelusta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Virtsaamisen alkamisen odottelusta on hyvin paljon haittaa.',
                },
                scoring: [
                  {
                    questionnaire: 'DAN-PSS-1',
                    points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 },
                    pair: '1', pairRole: 'B', category: 'tyhjenemisoireet',
                  },
                ],
              },
            ],
            'usein': [
              {
                id: 'odottaminen_1b',
                label: 'Mikäli joudutte odottamaan virtsaamisen alkamista, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Virtsaamisen alkamisen odottelusta ei ole lainkaan haittaa.',
                  'vähän': 'Virtsaamisen alkamisen odottelusta on vähän haittaa.',
                  'kohtalaisesti': 'Virtsaamisen alkamisen odottelusta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Virtsaamisen alkamisen odottelusta on hyvin paljon haittaa.',
                },
                scoring: [
                  {
                    questionnaire: 'DAN-PSS-1',
                    points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 },
                    pair: '1', pairRole: 'B', category: 'tyhjenemisoireet',
                  },
                ],
              },
            ],
            'aina': [
              {
                id: 'odottaminen_1b',
                label: 'Mikäli joudutte odottamaan virtsaamisen alkamista, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Virtsaamisen alkamisen odottelusta ei ole lainkaan haittaa.',
                  'vähän': 'Virtsaamisen alkamisen odottelusta on vähän haittaa.',
                  'kohtalaisesti': 'Virtsaamisen alkamisen odottelusta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Virtsaamisen alkamisen odottelusta on hyvin paljon haittaa.',
                },
                scoring: [
                  {
                    questionnaire: 'DAN-PSS-1',
                    points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 },
                    pair: '1', pairRole: 'B', category: 'tyhjenemisoireet',
                  },
                ],
              },
            ],
          },
        },

        // ---- DAN-PSS-1 KYSYMYSPARI 2 ----
        {
          id: 'tuleminen_2a',
          label: 'Tuleeko virtsa omasta mielestänne?',
          type: 'single',
          options: ['normaalisti', 'heikosti', 'hyvin heikosti', 'tipoittain'],
          noteTemplate: 'Potilaan mielestä virtsa tulee {value}.',
          scoring: [
            {
              questionnaire: 'DAN-PSS-1',
              points: { 'normaalisti': 0, 'heikosti': 1, 'hyvin heikosti': 2, 'tipoittain': 3 },
              pair: '2', pairRole: 'A', category: 'tyhjenemisoireet',
            },
          ],
          subQuestions: {
            'heikosti': [
              {
                id: 'tuleminen_2b',
                label: 'Mikäli virtsa tulee heikosti, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Virtsan heikentyneestä tulemisesta ei ole lainkaan haittaa.',
                  'vähän': 'Virtsan heikentyneestä tulemisesta on vähän haittaa.',
                  'kohtalaisesti': 'Virtsan heikentyneestä tulemisesta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Virtsan heikentyneestä tulemisesta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '2', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
            'hyvin heikosti': [
              {
                id: 'tuleminen_2b',
                label: 'Mikäli virtsa tulee heikosti, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Virtsan heikentyneestä tulemisesta ei ole lainkaan haittaa.',
                  'vähän': 'Virtsan heikentyneestä tulemisesta on vähän haittaa.',
                  'kohtalaisesti': 'Virtsan heikentyneestä tulemisesta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Virtsan heikentyneestä tulemisesta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '2', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
            'tipoittain': [
              {
                id: 'tuleminen_2b',
                label: 'Mikäli virtsa tulee heikosti, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Virtsan heikentyneestä tulemisesta ei ole lainkaan haittaa.',
                  'vähän': 'Virtsan heikentyneestä tulemisesta on vähän haittaa.',
                  'kohtalaisesti': 'Virtsan heikentyneestä tulemisesta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Virtsan heikentyneestä tulemisesta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '2', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
          },
        },

        // ---- DAN-PSS-1 KYSYMYSPARI 3 (myös EROTTELUPISTELOMAKE) ----
        {
          id: 'rakko_3a',
          label: 'Tuntuuko, että virtsatessanne rakko tyhjenee täysin?',
          type: 'single',
          options: ['aina', 'usein', 'harvoin', 'ei koskaan'],
          noteMap: {
            'aina': 'Virtsatessa rakko tyhjenee aina täysin.',
            'usein': 'Virtsatessa rakko tyhjenee usein täysin.',
            'harvoin': 'Virtsatessa rakko tyhjenee harvoin täysin.',
            'ei koskaan': 'Virtsatessa rakko ei tyhjene koskaan täysin.',
          },
          scoring: [
            { questionnaire: 'DAN-PSS-1', points: { 'aina': 0, 'usein': 1, 'harvoin': 2, 'ei koskaan': 3 }, pair: '3', pairRole: 'A', category: 'tyhjenemisoireet' },
            { questionnaire: 'EROTTELUPISTELOMAKE', points: { 'ei koskaan': 2, 'harvoin': 2, 'usein': 1, 'aina': 0 } },
          ],
          subQuestions: {
            'usein': [
              {
                id: 'rakko_3b',
                label: 'Mikäli tuntuu, ettei rakko tyhjene täysin, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Rakon vaillinaisesta tyhjenemisestä ei ole lainkaan haittaa.',
                  'vähän': 'Rakon vaillinaisesta tyhjenemisestä on vähän haittaa.',
                  'kohtalaisesti': 'Rakon vaillinaisesta tyhjenemisestä on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Rakon vaillinaisesta tyhjenemisestä on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '3', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
            'harvoin': [
              {
                id: 'rakko_3b',
                label: 'Mikäli tuntuu, ettei rakko tyhjene täysin, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Rakon vaillinaisesta tyhjenemisestä ei ole lainkaan haittaa.',
                  'vähän': 'Rakon vaillinaisesta tyhjenemisestä on vähän haittaa.',
                  'kohtalaisesti': 'Rakon vaillinaisesta tyhjenemisestä on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Rakon vaillinaisesta tyhjenemisestä on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '3', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
            'ei koskaan': [
              {
                id: 'rakko_3b',
                label: 'Mikäli tuntuu, ettei rakko tyhjene täysin, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Rakon vaillinaisesta tyhjenemisestä ei ole lainkaan haittaa.',
                  'vähän': 'Rakon vaillinaisesta tyhjenemisestä on vähän haittaa.',
                  'kohtalaisesti': 'Rakon vaillinaisesta tyhjenemisestä on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Rakon vaillinaisesta tyhjenemisestä on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '3', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
          },
        },

        // ---- DAN-PSS-1 KYSYMYSPARI 4 ----
        {
          id: 'ponnistelu_4a',
          label: 'Joudutteko ponnistamaan virtsaamisen aloittamiseksi ja/tai jatkamiseksi?',
          type: 'single',
          options: ['ei koskaan', 'harvoin', 'usein', 'aina'],
          noteMap: {
            'ei koskaan': 'Ei joudu koskaan ponnistamaan virtsaamisen aloittamiseksi/jatkamiseksi.',
            'harvoin': 'Joutuu harvoin ponnistamaan virtsaamisen aloittamiseksi/jatkamiseksi.',
            'usein': 'Joutuu usein ponnistamaan virtsaamisen aloittamiseksi/jatkamiseksi.',
            'aina': 'Joutuu aina ponnistamaan virtsaamisen aloittamiseksi/jatkamiseksi.',
          },
          scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei koskaan': 0, 'harvoin': 1, 'usein': 2, 'aina': 3 }, pair: '4', pairRole: 'A', category: 'tyhjenemisoireet' }],
          subQuestions: {
            'harvoin': [
              {
                id: 'ponnistelu_4b',
                label: 'Mikäli joudutte ponnistelemaan, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Ponnistelemisesta ei ole lainkaan haittaa.',
                  'vähän': 'Ponnistelemisesta on vähän haittaa.',
                  'kohtalaisesti': 'Ponnistelemisesta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Ponnistelemisesta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '4', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
            'usein': [
              {
                id: 'ponnistelu_4b',
                label: 'Mikäli joudutte ponnistelemaan, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Ponnistelemisesta ei ole lainkaan haittaa.',
                  'vähän': 'Ponnistelemisesta on vähän haittaa.',
                  'kohtalaisesti': 'Ponnistelemisesta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Ponnistelemisesta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '4', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
            'aina': [
              {
                id: 'ponnistelu_4b',
                label: 'Mikäli joudutte ponnistelemaan, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Ponnistelemisesta ei ole lainkaan haittaa.',
                  'vähän': 'Ponnistelemisesta on vähän haittaa.',
                  'kohtalaisesti': 'Ponnistelemisesta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Ponnistelemisesta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '4', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
          },
        },

        // ---- DAN-PSS-1 KYSYMYSPARI 5 ----
        {
          id: 'tiputtelu_5a',
          label: 'Tippuuko virtsaa vielä, vaikka luulitte virtsaamisen loppuneen (jälkitiputtelu)?',
          type: 'single',
          options: ['ei koskaan', 'kyllä WC:ssä', 'hieman alushousuihin', 'runsaasti alushousuihin'],
          noteMap: {
            'ei koskaan': 'Virtsaa ei koskaan tipu virtsaamisen jälkeen.',
            'kyllä WC:ssä': 'Virtsaa tippuu loppumisen jälkeen WC:ssä.',
            'hieman alushousuihin': 'Virtsaa tippuu virtsaamisen jälkeen hieman alushousuihin.',
            'runsaasti alushousuihin': 'Virtsaa tippuu virtsaamisen jälkeen runsaasti alushousuihin.',
          },
          scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei koskaan': 0, 'kyllä WC:ssä': 1, 'hieman alushousuihin': 2, 'runsaasti alushousuihin': 3 }, pair: '5', pairRole: 'A', category: 'tyhjenemisoireet' }],
          subQuestions: {
            'kyllä WC:ssä': [
              {
                id: 'tiputtelu_5b',
                label: 'Mikäli jälkitippumista esiintyy, vaikka luulitte virtsaamisen loppuneen, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Jälkitiputtelusta ei ole lainkaan haittaa.',
                  'vähän': 'Jälkitiputtelusta on vähän haittaa.',
                  'kohtalaisesti': 'Jälkitiputtelusta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Jälkitiputtelusta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '5', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
            'hieman alushousuihin': [
              {
                id: 'tiputtelu_5b',
                label: 'Mikäli jälkitippumista esiintyy, vaikka luulitte virtsaamisen loppuneen, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Jälkitiputtelusta ei ole lainkaan haittaa.',
                  'vähän': 'Jälkitiputtelusta on vähän haittaa.',
                  'kohtalaisesti': 'Jälkitiputtelusta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Jälkitiputtelusta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '5', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
            'runsaasti alushousuihin': [
              {
                id: 'tiputtelu_5b',
                label: 'Mikäli jälkitippumista esiintyy, vaikka luulitte virtsaamisen loppuneen, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Jälkitiputtelusta ei ole lainkaan haittaa.',
                  'vähän': 'Jälkitiputtelusta on vähän haittaa.',
                  'kohtalaisesti': 'Jälkitiputtelusta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Jälkitiputtelusta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '5', pairRole: 'B', category: 'tyhjenemisoireet' }],
              },
            ],
          },
        },

        // ---- Virtsaamisen katkeaminen ----
        {
          id: 'katkeaminen',
          label: 'Katkeileeko virtsaaminen kesken?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Virtsaaminen ei katkeile kesken.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'katkeaminen_ala',
                label: 'Kuinka usein virtsaaminen katkeaa kesken?',
                type: 'single',
                options: ['harvoin', 'usein'],
                noteTemplate: 'Virtsaaminen katkeilee {value} kesken.',
              },
            ],
          },
        },

        // ---- Virtsasuihkun keskeyttäminen (EROTTELUPISTELOMAKE) ----
        {
          id: 'keskeyttaminen',
          label: 'Pystyttekö virtsatessanne keskeyttämään virtsasuihkun?',
          type: 'single',
          options: ['kyllä', 'aika hyvin', 'ei onnistu'],
          noteMap: {
            'kyllä': 'Potilas pystyy keskeyttämään virtsasuihkun virtsaamisen aikana.',
            'aika hyvin': 'Potilas pystyy aika hyvin keskeyttämään virtsasuihkun virtsaamisen aikana.',
            'ei onnistu': 'Potilas ei pysty keskeyttämään virtsasuihkua virtsaamisen aikana.',
          },
          scoring: [{ questionnaire: 'EROTTELUPISTELOMAKE', points: { 'kyllä': 0, 'aika hyvin': 1, 'ei onnistu': 2 } }],
        },

        // ---- Retentio ----
        {
          id: 'retentio',
          label: 'Onko tullut tilannetta, jossa ette ole pystynyt virtsaamaan lainkaan?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Ei ole ilmennyt virtsaumpi-tilanteita.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'retentio_milloin',
                label: 'Milloin?',
                type: 'text',
                noteTemplate: 'Potilaalla on ilmennyt virtsaumpi-tilanne noin {value}.',
                
              },
            ],
          },
        
        },

        // ---- DAN-PSS-1 KYSYMYSPARI 6 ----
        {
          id: 'tihentyminen_6a',
          label: 'Mikä on pisin aika kahden virtsaamisen välillä noustuanne aamulla ylös ja ennen kuin menette illalla nukkumaan?',
          type: 'single',
          options: ['yli 3 h', '2-3 h', '1-2 h', 'alle 1 h'],
          noteTemplate: 'Pisin aika kahden virtsaamisen välillä on {value}.',
          scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'yli 3 h': 0, '2-3 h': 1, '1-2 h': 2, 'alle 1 h': 3 }, pair: '6', pairRole: 'A', category: 'kertymisoireet' }],
          subQuestions: {
            '2-3 h': [
              {
                id: 'tihentyminen_6b',
                label: 'Mikäli joudutte virtsaamaan usein, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Usein virtsaamisesta ei ole lainkaan haittaa.',
                  'vähän': 'Usein virtsaamisesta on vähän haittaa.',
                  'kohtalaisesti': 'Usein virtsaamisesta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Usein virtsaamisesta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '6', pairRole: 'B', category: 'kertymisoireet' }],
              }, 
            ],
            '1-2 h': [
              {
                id: 'tihentyminen_6b',
                label: 'Mikäli joudutte virtsaamaan usein, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Usein virtsaamisesta ei ole lainkaan haittaa.',
                  'vähän': 'Usein virtsaamisesta on vähän haittaa.',
                  'kohtalaisesti': 'Usein virtsaamisesta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Usein virtsaamisesta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '6', pairRole: 'B', category: 'kertymisoireet' }],
              },
            ],
            'alle 1 h': [
              {
                id: 'tihentyminen_6b',
                label: 'Mikäli joudutte virtsaamaan usein, kuinka paljon siitä on teille haittaa?',
                type: 'single',
                options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
                noteMap: {
                  'ei lainkaan': 'Usein virtsaamisesta ei ole lainkaan haittaa.',
                  'vähän': 'Usein virtsaamisesta on vähän haittaa.',
                  'kohtalaisesti': 'Usein virtsaamisesta on kohtalaisesti haittaa.',
                  'hyvin paljon': 'Usein virtsaamisesta on hyvin paljon haittaa.',
                },
                scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '6', pairRole: 'B', category: 'kertymisoireet' }],
                
              },
            ],
          },
          paragraphBreak: true,
        },

        // ---- Virtsaamiskerrat päivässä (EROTTELUPISTELOMAKE) ----
        {
          id: 'kerrat',
          label: 'Montako kertaa käytte virtsalla päivittäin?',
          type: 'single',
          options: ['5-7 kertaa', '8-10 kertaa', 'yli 10 kertaa'],
          noteTemplate: 'Potilas käy päivittäin virtsalla {value}.',
          scoring: [{ questionnaire: 'EROTTELUPISTELOMAKE', points: { '5-7 kertaa': 0, '8-10 kertaa': 1, 'yli 10 kertaa': 2 } }],
        },

        // ---- DAN-PSS-1 KYSYMYSPARI 7 (myös EROTTELUPISTELOMAKE) ----
        {
          id: 'yovirtsaisuus_7a',
          label: 'Kuinka monta kertaa joudutte virtsaamaan yön aikana?',
          type: 'single',
          options: ['0 kertaa', '1 kerran', '2 kertaa', '3 kertaa', '4 kertaa', '5 kertaa tai useammin'],
          noteMap: {
            '0 kertaa': 'Ei yövirtsaisuutta.',
            '1 kerran': 'Potilas joutuu käymään öisin virtsaamassa 1 kerran.',
            '2 kertaa': 'Potilas joutuu käymään öisin virtsaamassa 2 kertaa.',
            '3 kertaa': 'Potilas joutuu käymään öisin virtsaamassa 3 kertaa.',
            '4 kertaa': 'Potilas joutuu käymään öisin virtsaamassa 4 kertaa.',
            '5 kertaa tai useammin': 'Potilas joutuu käymään öisin virtsaamassa 5 kertaa tai useammin.',
          },
          scoring: [
            { questionnaire: 'DAN-PSS-1', points: { '0 kertaa': 0, '1 kerran': 1, '2 kertaa': 1, '3 kertaa': 2, '4 kertaa': 2, '5 kertaa tai useammin': 3 }, pair: '7', pairRole: 'A', category: 'kertymisoireet' },
            { questionnaire: 'EROTTELUPISTELOMAKE', points: { '0 kertaa': 0, '1 kerran': 0, '2 kertaa': 1, '3 kertaa': 1, '4 kertaa': 2, '5 kertaa tai useammin': 2 } },
          ],
          subQuestions: {
            '1 kerran': [
              { id: 'yovirtsaisuus_7b', label: 'Mikäli joudutte virtsaamaan yön aikana, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Yövirtsaisuudesta ei ole lainkaan haittaa.', 'vähän': 'Yövirtsaisuudesta on vähän haittaa.', 'kohtalaisesti': 'Yövirtsaisuudesta on kohtalaisesti haittaa.', 'hyvin paljon': 'Yövirtsaisuudesta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '7', pairRole: 'B', category: 'kertymisoireet' }] },
            ],
            '2 kertaa': [
              { id: 'yovirtsaisuus_7b', label: 'Mikäli joudutte virtsaamaan yön aikana, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Yövirtsaisuudesta ei ole lainkaan haittaa.', 'vähän': 'Yövirtsaisuudesta on vähän haittaa.', 'kohtalaisesti': 'Yövirtsaisuudesta on kohtalaisesti haittaa.', 'hyvin paljon': 'Yövirtsaisuudesta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '7', pairRole: 'B', category: 'kertymisoireet' }] },
            ],
            '3 kertaa': [
              { id: 'yovirtsaisuus_7b', label: 'Mikäli joudutte virtsaamaan yön aikana, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Yövirtsaisuudesta ei ole lainkaan haittaa.', 'vähän': 'Yövirtsaisuudesta on vähän haittaa.', 'kohtalaisesti': 'Yövirtsaisuudesta on kohtalaisesti haittaa.', 'hyvin paljon': 'Yövirtsaisuudesta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '7', pairRole: 'B', category: 'kertymisoireet' }] },
            ],
            '4 kertaa': [
              { id: 'yovirtsaisuus_7b', label: 'Mikäli joudutte virtsaamaan yön aikana, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Yövirtsaisuudesta ei ole lainkaan haittaa.', 'vähän': 'Yövirtsaisuudesta on vähän haittaa.', 'kohtalaisesti': 'Yövirtsaisuudesta on kohtalaisesti haittaa.', 'hyvin paljon': 'Yövirtsaisuudesta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '7', pairRole: 'B', category: 'kertymisoireet' }] },
            ],
            '5 kertaa tai useammin': [
              { id: 'yovirtsaisuus_7b', label: 'Mikäli joudutte virtsaamaan yön aikana, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Yövirtsaisuudesta ei ole lainkaan haittaa.', 'vähän': 'Yövirtsaisuudesta on vähän haittaa.', 'kohtalaisesti': 'Yövirtsaisuudesta on kohtalaisesti haittaa.', 'hyvin paljon': 'Yövirtsaisuudesta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '7', pairRole: 'B', category: 'kertymisoireet' }] },
            ],
          },
        },

        // ---- DAN-PSS-1 KYSYMYSPARI 8 ----
        {
          id: 'urge_8a',
          label: 'Tuleeko teille äkillinen virtsaamistarve?',
          type: 'single',
          options: ['ei koskaan', 'harvoin', 'usein', 'aina'],
          noteMap: {
            'ei koskaan': 'Ei urge-oiretta.',
            'harvoin': 'Urge-oiretta ilmenee harvoin.',
            'usein': 'Urge-oiretta ilmenee usein.',
            'aina': 'Urge-oiretta ilmenee koko ajan.',
          },
          scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei koskaan': 0, 'harvoin': 1, 'usein': 2, 'aina': 3 }, pair: '8', pairRole: 'A', category: 'kertymisoireet' }],
          subQuestions: {
            'harvoin': [{ id: 'urge_8b', label: 'Mikäli teille tulee äkillinen virtsaamistarve, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Urge-oireesta ei ole lainkaan haittaa.', 'vähän': 'Urge-oireesta on vähän haittaa.', 'kohtalaisesti': 'Urge-oireesta on kohtalaisesti haittaa.', 'hyvin paljon': 'Urge-oireesta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '8', pairRole: 'B', category: 'kertymisoireet' }] }],
            'usein': [{ id: 'urge_8b', label: 'Mikäli teille tulee äkillinen virtsaamistarve, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Urge-oireesta ei ole lainkaan haittaa.', 'vähän': 'Urge-oireesta on vähän haittaa.', 'kohtalaisesti': 'Urge-oireesta on kohtalaisesti haittaa.', 'hyvin paljon': 'Urge-oireesta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '8', pairRole: 'B', category: 'kertymisoireet' }] }],
            'aina': [{ id: 'urge_8b', label: 'Mikäli teille tulee äkillinen virtsaamistarve, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Urge-oireesta ei ole lainkaan haittaa.', 'vähän': 'Urge-oireesta on vähän haittaa.', 'kohtalaisesti': 'Urge-oireesta on kohtalaisesti haittaa.', 'hyvin paljon': 'Urge-oireesta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '8', pairRole: 'B', category: 'kertymisoireet' }] }],
          },
        },

        // ---- Kiire (EROTTELUPISTELOMAKE) ----
        {
          id: 'kiire',
          label: 'Aiheuttaako kiire tai jännitys teille virtsaamispakkoa?',
          type: 'single',
          options: ['ei', 'lievästi', 'voimakkaasti'],
          noteMap: {
            'ei': 'Kiire ei aiheuta potilaalle urge-oiretta.',
            'lievästi': 'Kiire aiheuttaa potilaalle lievää urge-oiretta.',
            'voimakkaasti': 'Kiire aiheuttaa potilaalle voimakasta urge-oiretta.',
          },
          scoring: [{ questionnaire: 'EROTTELUPISTELOMAKE', points: { 'ei': 0, 'lievästi': 1, 'voimakkaasti': 2 } }],
        },

        // ---- DAN-PSS-1 KYSYMYSPARI 9 ----
        {
          id: 'urgeinko_9a',
          label: 'Tuleeko teille virtsaamistarve niin voimakkaana, että virtsa karkaa ennen kuin ehditte WC:hen?',
          type: 'single',
          options: ['ei koskaan', 'harvoin', 'usein', 'aina'],
          noteMap: {
            'ei koskaan': 'Ei urge-inkontinenssia.',
            'harvoin': 'Urge-inkontinenssia ilmenee harvoin.',
            'usein': 'Urge-inkontinenssia ilmenee usein.',
            'aina': 'Urge-inkontinenssia ilmenee koko ajan.',
          },
          scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei koskaan': 0, 'harvoin': 1, 'usein': 2, 'aina': 3 }, pair: '9', pairRole: 'A', category: 'kertymisoireet' }],
          subQuestions: {
            'harvoin': [{ id: 'urgeinko_9b', label: 'Mikäli ette pysty pidättelemään virtsaa kunnes ehditte WC:hen, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Urge-inkontinenssista ei ole lainkaan haittaa.', 'vähän': 'Urge-inkontinenssista on vähän haittaa.', 'kohtalaisesti': 'Urge-inkontinenssista on kohtalaisesti haittaa.', 'hyvin paljon': 'Urge-inkontinenssista on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '9', pairRole: 'B', category: 'kertymisoireet' }] }],
            'usein': [{ id: 'urgeinko_9b', label: 'Mikäli ette pysty pidättelemään virtsaa kunnes ehditte WC:hen, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Urge-inkontinenssista ei ole lainkaan haittaa.', 'vähän': 'Urge-inkontinenssista on vähän haittaa.', 'kohtalaisesti': 'Urge-inkontinenssista on kohtalaisesti haittaa.', 'hyvin paljon': 'Urge-inkontinenssista on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '9', pairRole: 'B', category: 'kertymisoireet' }] }],
            'aina': [{ id: 'urgeinko_9b', label: 'Mikäli ette pysty pidättelemään virtsaa kunnes ehditte WC:hen, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Urge-inkontinenssista ei ole lainkaan haittaa.', 'vähän': 'Urge-inkontinenssista on vähän haittaa.', 'kohtalaisesti': 'Urge-inkontinenssista on kohtalaisesti haittaa.', 'hyvin paljon': 'Urge-inkontinenssista on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '9', pairRole: 'B', category: 'kertymisoireet' }] }],
          },
        },

        // ---- Tunne ennen karkaamista (EROTTELUPISTELOMAKE) ----
        {
          id: 'tunne',
          label: 'Tunnetteko virtsaamistarvetta ennen virtsan karkaamista?',
          type: 'single',
          options: ['ei', 'joskus', 'usein'],
          noteMap: {
            'ei': 'Potilas ei tunne virtsaamistarvetta ennen virtsan karkaamista.',
            'joskus': 'Potilas tuntee joskus virtsaamistarvetta ennen virtsan karkaamista.',
            'usein': 'Potilas tuntee usein virtsaamistarvetta ennen virtsan karkaamista.',
          },
          scoring: [{ questionnaire: 'EROTTELUPISTELOMAKE', points: { 'ei': 0, 'joskus': 1, 'usein': 2 } }],
        },

        // ---- DAN-PSS-1 KYSYMYSPARI 10 ----
        {
          id: 'kipu_10a',
          label: 'Tuntuuko virtsatessa kipua tai poltetta?',
          type: 'single',
          options: ['ei koskaan', 'harvoin', 'usein', 'aina'],
          noteMap: {
            'ei koskaan': 'Ei virtsaamiseen liittyvää kipua tai poltetta.',
            'harvoin': 'Virtsaamiseen liittyvää kipua tai poltetta ilmenee harvoin.',
            'usein': 'Virtsaamiseen liittyvää kipua tai poltetta ilmenee usein.',
            'aina': 'Virtsaamiseen liittyvää kipua tai poltetta ilmenee aina.',
          },
          scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei koskaan': 0, 'harvoin': 1, 'usein': 2, 'aina': 3 }, pair: '10', pairRole: 'A', category: 'kertymisoireet' }],
          subQuestions: {
            'harvoin': [{ id: 'kipu_10b', label: 'Mikäli virtsatessa tuntuu kipua tai poltetta, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Virtsaamiskivusta tai -poltteesta ei ole lainkaan haittaa.', 'vähän': 'Virtsaamiskivusta tai -poltteesta on vähän haittaa.', 'kohtalaisesti': 'Virtsaamiskivusta tai -poltteesta on kohtalaisesti haittaa.', 'hyvin paljon': 'Virtsaamiskivusta tai -poltteesta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '10', pairRole: 'B', category: 'kertymisoireet' }] }],
            'usein': [{ id: 'kipu_10b', label: 'Mikäli virtsatessa tuntuu kipua tai poltetta, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Virtsaamiskivusta tai -poltteesta ei ole lainkaan haittaa.', 'vähän': 'Virtsaamiskivusta tai -poltteesta on vähän haittaa.', 'kohtalaisesti': 'Virtsaamiskivusta tai -poltteesta on kohtalaisesti haittaa.', 'hyvin paljon': 'Virtsaamiskivusta tai -poltteesta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '10', pairRole: 'B', category: 'kertymisoireet' }] }],
            'aina': [{ id: 'kipu_10b', label: 'Mikäli virtsatessa tuntuu kipua tai poltetta, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Virtsaamiskivusta tai -poltteesta ei ole lainkaan haittaa.', 'vähän': 'Virtsaamiskivusta tai -poltteesta on vähän haittaa.', 'kohtalaisesti': 'Virtsaamiskivusta tai -poltteesta on kohtalaisesti haittaa.', 'hyvin paljon': 'Virtsaamiskivusta tai -poltteesta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '10', pairRole: 'B', category: 'kertymisoireet' }] }],
          },
        },

        // ---- DAN-PSS-1 KYSYMYSPARI 11 ----
        {
          id: 'ponnistusinko_11a',
          label: 'Karkaako virtsaa fyysisen ponnistuksen aikana (esim. yskiessä, aivastaessa, nostaessanne jotain)?',
          type: 'single',
          options: ['ei koskaan', 'harvoin', 'usein', 'aina'],
          noteMap: {
            'ei koskaan': 'Ei ponnistus-inkontinenssia.',
            'harvoin': 'Ponnistus-inkontinenssia ilmenee harvoin.',
            'usein': 'Ponnistus-inkontinenssia ilmenee usein.',
            'aina': 'Ponnistus-inkontinenssia ilmenee jokaisella virtsaamiskerralla.',
          },
          scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei koskaan': 0, 'harvoin': 1, 'usein': 2, 'aina': 3 }, pair: '11', pairRole: 'A', category: 'kertymisoireet' }],
          subQuestions: {
            'harvoin': [{ id: 'ponnistusinko_11b', label: 'Mikäli virtsaa karkaa fyysisen ponnistuksen aikana, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Ponnistus-inkontinenssista ei ole lainkaan haittaa.', 'vähän': 'Ponnistus-inkontinenssista on vähän haittaa.', 'kohtalaisesti': 'Ponnistus-inkontinenssista on kohtalaisesti haittaa.', 'hyvin paljon': 'Ponnistus-inkontinenssista on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '11', pairRole: 'B', category: 'kertymisoireet' }] }],
            'usein': [{ id: 'ponnistusinko_11b', label: 'Mikäli virtsaa karkaa fyysisen ponnistuksen aikana, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Ponnistus-inkontinenssista ei ole lainkaan haittaa.', 'vähän': 'Ponnistus-inkontinenssista on vähän haittaa.', 'kohtalaisesti': 'Ponnistus-inkontinenssista on kohtalaisesti haittaa.', 'hyvin paljon': 'Ponnistus-inkontinenssista on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '11', pairRole: 'B', category: 'kertymisoireet' }] }],
            'aina': [{ id: 'ponnistusinko_11b', label: 'Mikäli virtsaa karkaa fyysisen ponnistuksen aikana, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Ponnistus-inkontinenssista ei ole lainkaan haittaa.', 'vähän': 'Ponnistus-inkontinenssista on vähän haittaa.', 'kohtalaisesti': 'Ponnistus-inkontinenssista on kohtalaisesti haittaa.', 'hyvin paljon': 'Ponnistus-inkontinenssista on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '11', pairRole: 'B', category: 'kertymisoireet' }] }],
          },
        },

        // ---- Karkaako vain ponnistamistilanteissa (EROTTELUPISTELOMAKE) ----
        {
          id: 'ponnistusinko_11c',
          label: 'Karkaako virtsaa pelkästään ponnistamistilanteissa?',
          type: 'single',
          options: ['kyllä', 'joskus', 'ajoittain muulloinkin'],
          noteMap: {
            'kyllä': 'Virtsaa karkaa pelkästään ponnistamistilanteissa.',
            'joskus': 'Virtsaa karkaa joskus ponnistamistilanteissa.',
            'ajoittain muulloinkin': 'Virtsaa karkaa ajoittain muulloinkin kuin ponnistamistilanteissa.',
          },
          scoring: [{ questionnaire: 'EROTTELUPISTELOMAKE', points: { 'kyllä': 0, 'joskus': 1, 'ajoittain muulloinkin': 2 } }],
        },

        // ---- Karkaako välittömästi ponnistustilanteissa (EROTTELUPISTELOMAKE) ----
        {
          id: 'ponnistusinko_11d',
          label: 'Karkaako virtsa välittömästi em. ponnistamistilanteissa?',
          type: 'single',
          options: ['kyllä', 'en osaa sanoa', 'vasta ponnistuksen jälkeen'],
          noteMap: {
            'kyllä': 'Virtsaa karkaa välittömästi ponnistamistilanteissa.',
            'en osaa sanoa': 'Potilas ei osaa sanoa karkaako virtsa välittömästi ponnistamistilanteissa.',
            'vasta ponnistuksen jälkeen': 'Virtsaa karkaa vasta ponnistamistilanteen jälkeen.',
          },
          scoring: [{ questionnaire: 'EROTTELUPISTELOMAKE', points: { 'kyllä': 0, 'en osaa sanoa': 1, 'vasta ponnistuksen jälkeen': 2 } }],
        },

        // ---- DAN-PSS-1 KYSYMYSPARI 12 ----
        {
          id: 'karkailu_12a',
          label: 'Karkaako virtsaa ilman fyysistä ponnistusta ja ilman virtsaustarvetta?',
          type: 'single',
          options: ['ei koskaan', 'harvoin', 'usein', 'aina'],
          noteMap: {
            'ei koskaan': 'Ei virtsankarkailua.',
            'harvoin': 'Virtsankarkailua ilmenee harvoin.',
            'usein': 'Virtsankarkailua ilmenee usein.',
            'aina': 'Virtsankarkailua ilmenee aina.',
          },
          scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei koskaan': 0, 'harvoin': 1, 'usein': 2, 'aina': 3 }, pair: '12', pairRole: 'A', category: 'kertymisoireet' }],
          subQuestions: {
            'harvoin': [{ id: 'karkailu_12b', label: 'Mikäli virtsaa karkaa ilman virtsaustarvetta ja fyysistä ponnistusta, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Virtsankarkailusta ei ole lainkaan haittaa.', 'vähän': 'Virtsankarkailusta on vähän haittaa.', 'kohtalaisesti': 'Virtsankarkailusta on kohtalaisesti haittaa.', 'hyvin paljon': 'Virtsankarkailusta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '12', pairRole: 'B', category: 'kertymisoireet' }] }],
            'usein': [{ id: 'karkailu_12b', label: 'Mikäli virtsaa karkaa ilman virtsaustarvetta ja fyysistä ponnistusta, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Virtsankarkailusta ei ole lainkaan haittaa.', 'vähän': 'Virtsankarkailusta on vähän haittaa.', 'kohtalaisesti': 'Virtsankarkailusta on kohtalaisesti haittaa.', 'hyvin paljon': 'Virtsankarkailusta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '12', pairRole: 'B', category: 'kertymisoireet' }] }],
            'aina': [{ id: 'karkailu_12b', label: 'Mikäli virtsaa karkaa ilman virtsaustarvetta ja fyysistä ponnistusta, kuinka paljon siitä on teille haittaa?', type: 'single', options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'], noteMap: { 'ei lainkaan': 'Virtsankarkailusta ei ole lainkaan haittaa.', 'vähän': 'Virtsankarkailusta on vähän haittaa.', 'kohtalaisesti': 'Virtsankarkailusta on kohtalaisesti haittaa.', 'hyvin paljon': 'Virtsankarkailusta on hyvin paljon haittaa.' }, scoring: [{ questionnaire: 'DAN-PSS-1', points: { 'ei lainkaan': 0, 'vähän': 1, 'kohtalaisesti': 2, 'hyvin paljon': 3 }, pair: '12', pairRole: 'B', category: 'kertymisoireet' }] }],
          },
        },

        // ---- Karkailun määrä (EROTTELUPISTELOMAKE) ----
        {
          id: 'karkailu_maara',
          label: 'Mikäli virtsaa karkaa (missä tahansa tilanteessa), niin paljonko sitä karkaa kerrallaan?',
          type: 'single',
          options: ['tippoja', 'liraus', 'virtsa alkaa valua'],
          noteMap: {
            'tippoja': 'Kun virtsaa karkaa, niin sitä karkaa tippoja.',
            'liraus': 'Kun virtsaa karkaa, niin sitä karkaa liraus.',
            'virtsa alkaa valua': 'Kun virtsaa karkaa, niin se alkaa valua.',
          },
          scoring: [{ questionnaire: 'EROTTELUPISTELOMAKE', points: { 'tippoja': 0, 'liraus': 1, 'virtsa alkaa valua': 2 } }],
         
        },

        // ---- Oireiden alkaminen ----
        { id: 'alkaminen', label: 'Milloin oireet alkoivat?', type: 'text', noteTemplate: 'Oireet alkoivat noin {value}.', 
        paragraphBreak: true,
        },
        { id: 'miten', label: 'Alkoivatko oireet äkillisesti vai vähitellen?', type: 'single', options: ['äkillisesti', 'vähitellen'], noteTemplate: 'Oireet alkoivat {value}.' },
        { id: 'vaihtelu', label: 'Ovatko oireet pysyneet koko ajan samanlaisina vai vaihdelleet kausittain?', type: 'single', options: ['pysyneet samanlaisina', 'vaihdelleet kausittain'], noteTemplate: 'Oireet ovat {value}.' },

        // ---- Hankalin oire ----
        {
          id: 'vaikea',
          label: 'Mikä oire on sinulle hankalin?',
          type: 'text',
          noteTemplate: 'Potilas kokee hankalimpana oireena {value}.',
        },
        {
          id: 'haitta_1',
          label: 'Kuinka paljon hankalimmasta oireesta on teille haittaa?',
          type: 'single',
          options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
          noteMap: {
            'ei lainkaan': 'Hankalimmasta oireesta ei ole lainkaan haittaa.',
            'vähän': 'Hankalimmasta oireesta on vähän haittaa.',
            'kohtalaisesti': 'Hankalimmasta oireesta on kohtalaisesti haittaa.',
            'hyvin paljon': 'Hankalimmasta oireesta on hyvin paljon haittaa.',
          },
        },
        {
          id: 'haitta_2',
          label: 'Kuinka paljon oireet haittaavat arkea / töiden tekemistä / ulkoilua / matkailua?',
          type: 'single',
          options: ['ei lainkaan', 'vähän', 'kohtalaisesti', 'hyvin paljon'],
          noteMap: {
            'ei lainkaan': 'Potilas ei koe oireista olevan lainkaan elämänlaadullista haittaa.',
            'vähän': 'Potilas kokee oireista vähän elämänlaadullista haittaa.',
            'kohtalaisesti': 'Potilas kokee oireista kohtalaista elämänlaadullista haittaa.',
            'hyvin paljon': 'Potilas kokee oireista hyvin paljon elämänlaadullista haittaa.',
          },
        },

        // ---- Oireiden paheneminen ----
        {
          id: 'paheneminen',
          label: 'Onko oireissa ollut selvää pahenemista viime viikkoina/kuukausina?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Oireissa ei selvää pahenemista viime aikoina.' },
          subQuestions: {
            'kyllä': [
              {
                id: 'paheneminen_milloin',
                label: 'Millä aikavälillä oireet ovat selvästi pahentuneet?',
                type: 'single',
                options: ['viikko sitten', '2 viikkoa sitten', '3 viikkoa sitten', 'kuukausi sitten', '2 kuukautta sitten', '3 kuukautta sitten', 'yli 3 kuukautta sitten'],
                noteTemplate: 'Oireet ovat pahentuneet selvästi {value}.',
              },
              { id: 'paheneminen_millaista', label: 'Millaista?', type: 'text', noteTemplate: 'Oireet ovat pahentuneet esimerkiksi {value}.' },
            ],
          },
        },

        // ---- Lääkitys ----
        {
          id: 'laakitys',
          label: 'Onko viime aikoina aloitettu tai uudistettu lääkitys, jonka jälkeen oireet alkoivat/pahenivat?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Oireiden alkamisen tai pahenemisen taustalla ei muutoksia lääkityksessä.' },
          subQuestions: {
            'kyllä': [
              { id: 'laakitys_mika', label: 'Mikä lääkitys aloitettiin tai muutettiin?', type: 'text' },
              { id: 'laakitys_milloin', label: 'Milloin lääkitys aloitettiin tai muutettiin?', type: 'text' },
            ],
          },
          customNote: (answers) => {
            if (answers.laakitys !== 'kyllä') return '';
            const mika = answers.laakitys_mika || '...';
            const milloin = answers.laakitys_milloin || '...';
            return `Potilas kokee, että oireiden alkamisen tai pahenemisen taustalla voi olla ${mika} noin ${milloin} sitten.`;
          },
        
        },

        // ---- Red flag oireet ----
        {
          id: 'redflag',
          label: 'Onko teillä ollut kuumeilua, selittämätöntä laihtumista tai yleisvoinnin laskua viime aikoina?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Ei kuumetta, selittämätöntä laihtumista tai yleisvoinnin laskua.' },
            paragraphBreak: true,
          subQuestions: {
            'kyllä': [
              {
                id: 'redflag_2',
                label: 'Mitä niistä teillä on ilmennyt?',
                type: 'multi',
                options: ['kuumeilua', 'selittämätöntä laihtumista', 'yleisvoinnin laskua'],
                noteTemplate: 'Potilaalla on oireisiin liittyen ilmennyt {value}.',
                multiSubQuestions: {
                  'selittämätöntä laihtumista': [
                    { id: 'laihtuminen_aika', label: 'Missä ajassa laihtuminen on tapahtunut?', type: 'text', noteTemplate: 'Laihtumista on tapahtunut noin {value} aikana.' },
                    { id: 'laihtuminen_maara', label: 'Paljonko olette laihtuneet em. ajassa?', type: 'text', noteTemplate: 'Potilas on laihtunut noin {value} em. ajassa.' },
                  ],
                },
              },
            ],
          },

        },

        // ---- Hematuria ----
        {
          id: 'hematuria',
          label: 'Onko virtsassanne koskaan näkynyt verta?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Potilaalla ei ole ilmennyt makroskooppista hematuriaa.' },
          subQuestions: {
            'kyllä': [
              {
                id: 'hematuria_2',
                label: 'Kuinka usein?',
                type: 'single',
                options: ['kerran', 'harvoin', 'usein', 'joka päivä'],
                noteMap: {
                  'kerran': 'Potilaalla ilmennyt kertaalleen makroskooppista hematuriaa.',
                  'harvoin': 'Makroskooppista hematuriaa ilmenee harvoin.',
                  'usein': 'Makroskooppista hematuriaa ilmenee usein.',
                  'joka päivä': 'Makroskooppista hematuriaa ilmenee joka päivä.',
                },
              },
            ],
          },
        },

        // ---- Kipu alavatsa/nivus/kylki/selkä ----
        {
          id: 'kylkikipu',
          label: 'Liittyykö oireisiin alavatsa-, nivus-, kylki- tai selkäkipua?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Potilaan oireisiin ei liity alavatsa-, nivus-, kylki- tai selkäkipua.' },
          subQuestions: {
            'kyllä': [
              {
                id: 'kylkikipu_2',
                label: 'Mitä niistä teillä on ilmennyt?',
                type: 'multi',
                options: ['alavatsakipua', 'nivuskipua', 'kylkikipua', 'selkäkipua'],
                noteTemplate: 'Potilaalla on oireisiin liittyen ilmennyt {value}.',
              },
            ],
          },
         
        },

        // ---- Juominen ----
        { id: 'juomamaara', label: 'Kuinka paljon juot arviolta vuorokaudessa (litroina)?', type: 'text', noteTemplate: 'Potilas arvioi juovansa vuorokaudessa noin {value} litraa.',  paragraphBreak: true, }, 
        
        {
          id: 'yojuominen',
          label: 'Koetko juovasi paljon illalla ennen nukkumaanmenoa?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Potilas ei koe juovansa paljoa ennen nukkumaanmenoa.',
            'kyllä': 'Potilas kokee juovansa paljon ennen nukkumaanmenoa.',
          },
        },
        {
          id: 'juominen_pahentaa',
          label: 'Oletko huomannut, että jokin juoma pahentaa oireita?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Mikään tietty juoma ei vaikuta pahentavan oireita.' },
          subQuestions: {
            'kyllä': [{ id: 'pahentaa_mika', label: 'Mikä juoma?', type: 'text', noteTemplate: 'Potilas kokee, että {value} pahentaa oireita.' }],
          },
        },

        // ---- Alkoholi ----
        {
          id: 'alkoholi',
          label: 'Käytätkö alkoholia?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Potilas ei käytä alkoholia ollenkaan.' },
          subQuestions: {
            'kyllä': [{ id: 'alkoholi_2', label: 'Kuinka paljon käytät alkoholia kuukaudessa?', type: 'text', noteTemplate: 'Potilas käyttää alkoholia noin {value} kuukaudessa.' }],
          },
        },

        // ---- Kofeiini ----
        {
          id: 'kofeiini',
          label: 'Käytätkö kofeiinia?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Potilas ei käytä kofeiinia ollenkaan.' },
          subQuestions: {
            'kyllä': [
              { id: 'kofeiini_2', label: 'Mitä kofeiinia?', type: 'text' },
              { id: 'kofeiini_3', label: 'Kuinka paljon käytät em. kofeiinia päivässä?', type: 'text' },
            ],
          },
          customNote: (answers) => {
            if (answers.kofeiini !== 'kyllä') return '';
            const mika = answers.kofeiini_2 || '...';
            const maara = answers.kofeiini_3 || '...';
            return `Potilas käyttää ${mika} noin ${maara} päivässä.`;
          },
        },

        // ---- Nikotiini ----
        {
          id: 'nikotiini',
          label: 'Käytätkö nikotiinia?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Potilas ei käytä nikotiinia ollenkaan.' },
          subQuestions: {
            'kyllä': [
              { id: 'nikotiini_2', label: 'Mitä nikotiinia?', type: 'text' },
              { id: 'nikotiini_3', label: 'Kuinka paljon käytät em. nikotiinia päivässä?', type: 'text' },
            ],
          },
          customNote: (answers) => {
            if (answers.nikotiini !== 'kyllä') return '';
            const mika = answers.nikotiini_2 || '...';
            const maara = answers.nikotiini_3 || '...';
            return `Potilas käyttää ${mika} noin ${maara} päivässä.`;
          },
          
        },

        // ---- Aiemmat tutkimukset ja sairaudet ----
        {
          id: 'psa',
          label: 'Onko teillä aiemmin seurattu PSA:ta?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Potilaalla ei ole aiemmin seurattu PSA:ta.' },
          subQuestions: {
            'kyllä': [{ id: 'psa_2', label: 'Milloin viimeksi?', type: 'text', noteTemplate: 'PSA:ta on seurattu viimeksi noin {value} sitten.' }],
          },
          paragraphBreak: true,
        },
        {
          id: 'vti',
          label: 'Onko teillä hoidettuja virtsatietulehduksia viimeisten kahden vuoden aikana?',
          type: 'single',
          options: ['ei', '1-2', 'yli 2 tai kroonisesti'],
          noteMap: {
            'ei': 'Potilaalla ei hoidettuja VTI:tä viimeisen 2 v aikana.',
            '1-2': 'Potilaalla 1-2 hoidettua VTI:tä viimeisen 2 v aikana.',
            'yli 2 tai kroonisesti': 'Potilaalla yli 2 tai kroonisesti hoidettuja VTI:tä viimeisen 2 v aikana.',
          },
          scoring: [{ questionnaire: 'EROTTELUPISTELOMAKE', points: { 'ei': 0, '1-2': 1, 'yli 2 tai kroonisesti': 2 } }],
        },
        {
          id: 'prostatiitti',
          label: 'Onko teillä ollut aikaisemmin eturauhastulehduksia?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Potilaalla ei aikaisempia prostatiitteja.' },
          subQuestions: {
            'kyllä': [{ id: 'prostatiitti_2', label: 'Milloin viimeksi?', type: 'text', noteTemplate: 'Potilaalla ollut prostatiitti viimeksi noin {value} sitten.' }],
          },
        },
        {
          id: 'virtsakivi',
          label: 'Onko teillä ollut aikaisemmin virtsakiviä?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Potilaalla ei aikaisempia virtsakiviä.' },
          subQuestions: {
            'kyllä': [{ id: 'virtsakivi_2', label: 'Milloin viimeksi?', type: 'text', noteTemplate: 'Potilaalla ollut virtsakiviä viimeksi noin {value} sitten.' }],
          },
        },
        {
          id: 'toimenpide',
          label: 'Onko teille tehty aikaisemmin urologisia toimenpiteitä (kystoskopia, virtsaputken laajennus, eturauhasen operaatio, virtsarakon operaatio)?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Potilaalla ei aikaisempia urologisia toimenpiteitä.' },
          subQuestions: {
            'kyllä': [
              { id: 'toimenpide_2', label: 'Mikä toimenpide?', type: 'text' },
              { id: 'toimenpide_3', label: 'Milloin viimeksi?', type: 'text' },
            ],
          },
          customNote: (answers) => {
            if (answers.toimenpide !== 'kyllä') return '';
            const mika = answers.toimenpide_2 || '...';
            const milloin = answers.toimenpide_3 || '...';
            return `Potilaalle tehty ${mika} noin ${milloin} sitten.`;
          },
        },
        {
          id: 'sadehoito',
          label: 'Oletteko koskaan saaneet sädehoitoa lantion alueelle?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Potilas ei ole koskaan saanut sädehoitoa lantion alueelle.' },
          subQuestions: {
            'kyllä': [
              { id: 'sadehoito_2', label: 'Minkä vuoksi?', type: 'text' },
              { id: 'sadehoito_3', label: 'Milloin?', type: 'text' },
            ],
          },
          customNote: (answers) => {
            if (answers.sadehoito !== 'kyllä') return '';
            const miksi = answers.sadehoito_2 || '...';
            const milloin = answers.sadehoito_3 || '...';
            return `Potilas saanut sädehoitoa noin ${milloin} sitten ${miksi} vuoksi.`;
          },
          
        },

        // ---- Seksuaaliterveys ----
        { id: 'erektio', label: 'Onko teillä ollut ongelmia erektion kanssa?', type: 'single', options: ['ei', 'kyllä'], noteMap: { 'ei': 'Potilaalla ei ongelmia erektion kanssa.', 'kyllä': 'Potilaalla on ollut ongelmia erektion kanssa.' }, paragraphBreak: true, },
        { id: 'ejakulaatio', label: 'Onko teillä ollut ongelmia ejakulaation kanssa?', type: 'single', options: ['ei', 'kyllä'], noteMap: { 'ei': 'Potilaalla ei ongelmia ejakulaation kanssa.', 'kyllä': 'Potilaalla on ollut ongelmia ejakulaation kanssa.' } },
        { id: 'yhdyntakivut', label: 'Onko teillä ollut kipuja yhdynnän yhteydessä?', type: 'single', options: ['ei', 'kyllä'], noteMap: { 'ei': 'Potilaalla ei yhdyntään liittyviä kipuja.', 'kyllä': 'Potilaalla on ollut yhdyntään liittyviä kipuja.' } },
        { id: 'lantionpohja', label: 'Onko teillä ollut lantionpohjan kipuoireita?', type: 'single', options: ['ei', 'kyllä'], noteMap: { 'ei': 'Potilaalla ei lantionpohjan kipuoireita.', 'kyllä': 'Potilaalla on ilmennyt lantionpohjan kipuoireita.' } },
        {
          id: 'std',
          label: 'Oletteko sairastaneet sukupuolitauteja viimeisen kahden vuoden aikana?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: { 'ei': 'Potilaalla ei sairastettuja sukupuolitauteja viimeisen 2 v aikana.' },
          subQuestions: {
            'kyllä': [
              { id: 'std_2', label: 'Mikä/mitkä sukupuolitaudit?', type: 'text' },
              { id: 'std_3', label: 'Milloin?', type: 'text' },
            ],
          },
          customNote: (answers) => {
            if (answers.std !== 'kyllä') return '';
            const mika = answers.std_2 || '...';
            const milloin = answers.std_3 || '...';
            return `Potilas sairastanut ${mika} noin ${milloin} sitten.`;
          },
        },
      ],
    },

    // ============================================================
    // STATUS
    // ============================================================
    {
      id: 'status',
      title: 'Status',
      subSections: [
        // --- Yleistila ---
        {
          id: 'yleistila',
          title: 'Yleistila',
          questions: [
            { id: 'yleistila_arvio', label: 'Yleistila?', type: 'single', options: ['hyvä', 'kohtalainen', 'huono'], noteTemplate: 'Yleistila {value}.' },
            { id: 'habitus', label: 'Habitus?', type: 'single', options: ['siisti', 'epäsiisti'], noteTemplate: 'Habitus {value}.' },
            {
              id: 'vartalo',
              label: 'Vartalon malli?',
              type: 'single',
              options: ['hoikka', 'normaali', 'keskivartalo-obesiteettia'],
              noteMap: {
                'hoikka': 'Potilas vartaloltaan hoikka.',
                'normaali': 'Potilas vartaloltaan normaali.',
                'keskivartalo-obesiteettia': 'Potilaalla keskivartalo-obesiteettia.',
              },
            },
          ],
        },
        // --- Vatsan palpaatio ---
        {
          id: 'palpaatio',
          title: 'Vatsan palpaatio',
          questions: [
            {
              id: 'vatsan_palpaatio',
              label: 'Vatsan palpaatio?',
              type: 'single',
              options: ['normaali', 'poikkeava'],
              noteMap: { 'normaali': 'Vatsa palpoiden pehmeä ja myötäävä, ei poikkeavia resistenssejä tai aristuksia.' },
              subQuestions: {
                'poikkeava': [
                  {
                    id: 'vatsan_palpaatio2',
                    label: 'Millä tavalla poikkeava?',
                    type: 'multi',
                    options: ['pinkeä', 'resistenssi', 'aristus'],
                    multiSubQuestions: {
                      'pinkeä': [
                        { id: 'pinkea_mihin', label: 'Kauttaaltaan vai rakon kohdalta?', type: 'single', options: ['kauttaaltaan', 'rakon kohdalta'], noteTemplate: 'Vatsa palpoiden pinkeä {value}.' },
                      ],
                      'resistenssi': [
                        { id: 'resistenssi_2', label: 'Missä resistenssi tuntuu?', type: 'multi', options: ['oikealla ylävatsalla', 'vasemmalla ylävatsalla', 'oikealla alavatsalla', 'vasemmalla alavatsalla'] },
                        { id: 'resistenssi_3', label: 'Minkälaiselta resistenssi tuntuu konsistenssiltaan?', type: 'multi', options: ['pehmeältä', 'kovalta', 'kimmoisalta', 'mobiililta', 'paikalleen kiinnittyneeltä'] },
                      ],
                      'aristus': [
                        { id: 'aristus_2', label: 'Missä aristus tuntuu?', type: 'multi', options: ['oikealla ylävatsalla', 'vasemmalla ylävatsalla', 'oikealla alavatsalla', 'vasemmalla alavatsalla'] },
                        { id: 'aristus_3', label: 'Onko aristus defanttista?', type: 'single', options: ['ei ole defanttista', 'on defanttista'] },
                      ],
                    },
                  },
                ],
              },
              customNote: (answers) => {
                if (answers.vatsan_palpaatio !== 'poikkeava') return '';
                const parts = [];
                const abnormal = answers.vatsan_palpaatio2 || [];
                if (abnormal.includes('resistenssi')) {
                  const loc = (answers.resistenssi_2 || []).join(', ');
                  const cons = (answers.resistenssi_3 || []).join(', ');
                  if (loc && cons) parts.push(`Potilaan vatsalta palpoiden todetaan resistenssiä ${loc}, joka konsistenssiltaan tuntuu ${cons}.`);
                }
                if (abnormal.includes('aristus')) {
                  const loc = (answers.aristus_2 || []).join(', ');
                  const def = answers.aristus_3 || '';
                  if (loc && def) parts.push(`Potilaan vatsalta palpoiden aristusta ${loc}, joka ${def}.`);
                }
                return parts.join(' ');
              },
            },
          ],
        },
        // --- TPR (tuseeraus per rectum) ---
        {
          id: 'tpr',
          title: 'TPR',
          questions: [
            {
              id: 'tuseeraus',
              label: 'TPR?',
              type: 'single',
              options: ['normaali', 'poikkeava'],
              noteMap: { 'normaali': 'Tuseeraten todetaan kooltaan normaalikokoinen ja konsistenssiltaan normaali eturauhanen, jossa ei epäsymmetriaa, kyhmyjä tai aristusta.' },
              subQuestions: {
                'poikkeava': [
                  {
                    id: 'tuseeraus_2',
                    label: 'Millä tavalla poikkeava?',
                    type: 'multi',
                    options: ['koko', 'epäsymmetria', 'konsistenssi', 'kyhmyisyys', 'aristus'],
                    multiSubQuestions: {
                      'epäsymmetria': [
                        { id: 'epasymmetria_puoli', label: 'Kumpi lohko suurentunut?', type: 'single', options: ['oikea', 'vasen'], noteMap: { 'oikea': 'Eturauhasen oikea lohko suurentunut.', 'vasen': 'Eturauhasen vasen lohko suurempi.' } },
                        { id: 'kylki', label: 'Kummalla kyljellä potilas tutkittu?', type: 'single', options: ['oikealla', 'vasemmalla'], noteTemplate: 'Potilas tutkittu {value} kyljellä.' },
                      ],
                      'konsistenssi': [
                        { id: 'konsistenssi_kuvaus', label: 'Millainen eturauhanen on konsistenssiltaan?', type: 'single', options: ['kimmoisa', 'kova'], noteTemplate: 'Eturauhanen palpoiden konsistenssiltaan {value}.' },
                      ],
                      'kyhmyisyys': [
                        { id: 'kyhmyisyys_3', label: 'Missä kellotaululla?', type: 'single', options: ['klo 12', 'klo 1', 'klo 2', 'klo 3', 'klo 4', 'klo 5', 'klo 6', 'klo 7', 'klo 8', 'klo 9', 'klo 10', 'klo 11'], noteTemplate: 'Palpoiden eturauhasessa todetaan kyhmy {value} kohdalla.' },
                      ],
                    },
                  },
                ],
              },
              customNote: (answers) => {
                if (answers.tuseeraus !== 'poikkeava') return '';
                const parts = [];
                const abnormal = answers.tuseeraus_2 || [];
                if (abnormal.includes('koko')) {
                  parts.push('Eturauhanen kooltaan suurentunut.');
                }
                if (abnormal.includes('aristus')) {
                  parts.push('Eturauhanen palpoiden aristaa.');
                }
                return parts.join(' ');
              },
            },
            { id: 'sfinkter', label: 'Sfinktertonus?', type: 'single', options: ['napakka', 'löysä'], noteTemplate: 'Sfinktertonus {value}.' },
            {
              id: 'ampulla',
              label: 'Ampulla?',
              type: 'single',
              options: ['tyhjä', 'ei tyhjä'],
              noteMap: { 'tyhjä': 'Ampulla tyhjä.' },
              subQuestions: {
                'ei tyhjä': [
                  { id: 'ampulla_2', label: 'Ulosteen väri?', type: 'single', options: ['vaaleaa', 'ruskeaa', 'tummaa', 'mustaa'], noteTemplate: 'Ampullassa ulostetta, hanskaan jää väriltään {value} ulostetta.' },
                ],
              },
            },
          ],
        },
      ],
    },

    // ============================================================
    // KYSELYT (vain pisteiden näyttö)
    // ============================================================
    {
      id: 'kyselyt',
      title: 'Kyselyt',
      isQuestionnaireDisplay: true,
      questionnaires: [
        {
          id: 'DAN-PSS-1',
          name: 'DAN-PSS-1',
          description: 'Oirekysely eturauhasen hyvänlaatuisen liikakasvun aiheuttamien oireiden arvioimiseksi.',
          info: 'Kysely koostuu 12 kysymysparista (A- ja B-kysymys). Pisteet lasketaan A × B. Kysymysparit 1–5 = tyhjenemisoireet, 6–12 = kertymisoireet.',
          scoringType: 'pairProduct',
          thresholds: [
            { min: 0, max: 7, label: 'lievät oireet' },
            { min: 8, max: 18, label: 'keskivaikeat oireet' },
            { min: 19, max: 999, label: 'vaikeat oireet' },
          ],
          noteTemplate: 'DAN-PSS-1-kyselyn perusteella potilaalla on {label}. Yhteensä pisteitä {total}, tyhjenemisoireita {tyhjenemisoireet}, kertymisoireita {kertymisoireet}.',
        },
        {
          id: 'EROTTELUPISTELOMAKE',
          name: 'Erottelupistelomake',
          description: 'Oirekysely virtsainkontinenssin alustavaan erotusdiagnostiikkaan.',
          info: 'Kysely koostuu 10 kysymyksestä. Pisteet 0–20. Alle 7 pistettä viittaa ponnistusinkontinenssiin, 7 pistettä tai yli pakko- tai sekamuotoiseen inkontinenssiin.',
          scoringType: 'sum',
          thresholds: [
            { min: 0, max: 6, label: 'ponnistusinkontinenssiin' },
            { min: 7, max: 999, label: 'pakko- tai sekamuotoiseen inkontinenssiin' },
          ],
          noteTemplate: 'Erottelupistelomakkeen perusteella potilaan oireisto viittaa virtsankarkailun suhteen {label}. Yhteensä pisteitä {total}.',
        },
      ],
    },
  ],
};

export default urinaryDifficultiesData;
