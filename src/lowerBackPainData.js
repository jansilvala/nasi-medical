// clinicalData.js
// Alaselkäkivun kliininen dokumentaatio - kysymykset ja vastaukset

const clinicalData = {
  sections: [
    // ============================================================
    // ANAMNEESI
    // ============================================================
    {
      id: 'anamneesi',
      title: 'Anamneesi',
      questions: [
        {
          id: 'onset',
          label: 'Milloin kipu alkoi?',
          type: 'text',
          noteTemplate: 'Potilaan mukaan kipu on alkanut noin {value}.',
        },
        {
          id: 'onset_type',
          label: 'Alkoiko kipu äkillisesti vai hiipien?',
          type: 'single',
          options: ['äkillisesti', 'pikku hiljaa'],
          noteMap: {
            'äkillisesti': 'Kipu alkoi äkillisesti.',
            'pikku hiljaa': 'Kipu alkoi pikku hiljaa.',
          },
        },
        {
          id: 'trauma',
          label: 'Onko taustalla tapaturmaa?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Ei traumaa taustalla.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'trauma_when',
                label: 'Milloin?',
                type: 'text',
                noteTemplate: '',
              },
              {
                id: 'trauma_what',
                label: 'Millainen?',
                type: 'text',
                noteTemplate: '',
              },
            ],
          },
          // Custom note generation for 'kyllä' with sub-question values
customNote: (answers) => {
  if (answers.trauma !== 'kyllä') return '';
  const when = answers['trauma_when'] || '...';
  const what = answers['trauma_what'] || '...';
  return `Taustalla on selän trauma noin ${when} sitten, jolloin potilas ${what}.`;
},
        },
        {
          id: 'pain_location',
          label: 'Kivun sijainti?',
          type: 'multi',
          options: [
            'alaselkäranka',
            'alaselkä pehmytkudos vasen',
            'alaselkä pehmytkudos oikea',
            'pakaran yläosa vasen',
            'pakaran yläosa oikea',
            'vasen lonkka',
            'oikea lonkka',
            'vasen nivunen',
            'oikea nivunen',
            'vasen reisi',
            'oikea reisi',
          ],
          // MUOKKAA TÄSSÄ: taivutusmuodot kliiniseen tekstiin
          noteValues: {
            'alaselkäranka': 'alaselkärangassa',
            'alaselkä pehmytkudos vasen': 'alaselän pehmytkudoksessa vasemmalla',
            'alaselkä pehmytkudos oikea': 'alaselän pehmytkudoksessa oikealla',
            'pakaran yläosa vasen': 'pakaran yläosassa vasemmalla',
            'pakaran yläosa oikea': 'pakaran yläosassa oikealla',
            'vasen lonkka': 'vasemmassa lonkassa',
            'oikea lonkka': 'oikeassa lonkassa',
            'vasen nivunen': 'vasemmassa nivusessa',
            'oikea nivunen': 'oikeassa nivusessa',
            'vasen reisi': 'vasemmassa reidessä',
            'oikea reisi': 'oikeassa reidessä',
          },
          noteTemplate: 'Kipua ilmenee {value}.',
        },
        {
          id: 'pain_intensity',
          label: 'Kivun voimakkuus?',
          type: 'single',
          options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          noteTemplate: 'Kipu on voimakkuudeltaan NRS-asteikolla noin {value}/10.',
        },
        {
          id: 'pain_character',
          label: 'Kivun luonne?',
          type: 'multi',
          options: ['särky', 'polttelu', 'jomotus', 'pistävä', 'sähköiskumainen'],
          // MUOKKAA TÄSSÄ: taivutusmuodot kliiniseen tekstiin
          noteValues: {
            'särky': 'särkevää',
            'polttelu': 'polttavaa',
            'jomotus': 'jomottavaa',
            'pistävä': 'pistävää',
            'sähköiskumainen': 'sähköiskumaista',
          },
          noteTemplate: 'Kipu on luonteeltaan {value}.',
        },
        {
          id: 'radiation',
          label: 'Säteileekö kipu jonnekin?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Kipu ei säteile.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'radiation_location',
                label: 'Minne?',
                type: 'multi',
                options: [
                  'vasen pakara', 'oikea pakara',
                  'vasen reisi', 'oikea reisi',
                  'vasen sääri', 'oikea sääri',
                  'vasen jalkaterä', 'oikea jalkaterä',
                ],
                // MUOKKAA TÄSSÄ: taivutusmuodot kliiniseen tekstiin
                noteValues: {
                  'vasen pakara': 'vasempaan pakaraan',
                  'oikea pakara': 'oikeaan pakaraan',
                  'vasen reisi': 'vasempaan reiteen',
                  'oikea reisi': 'oikeaan reiteen',
                  'vasen sääri': 'vasempaan sääreen',
                  'oikea sääri': 'oikeaan sääreen',
                  'vasen jalkaterä': 'vasempaan jalkaterään',
                  'oikea jalkaterä': 'oikeaan jalkaterään',
                },
                noteTemplate: 'Kipu säteilee {value}.',
              },
            ],
          },
        },
        {
          id: 'numbness',
          label: 'Onko turruutta/pistelyä alaraajoissa?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Turruutta tai pistelyä ei ole ilmennyt alaraajoissa.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'numbness_location',
                label: 'Sijainti?',
                type: 'multi',
                options: [
                  'vasen pakara', 'oikea pakara',
                  'vasen reisi', 'oikea reisi',
                  'vasen sääri', 'oikea sääri',
                  'vasen jalkaterä', 'oikea jalkaterä',
                ],
                // MUOKKAA TÄSSÄ: taivutusmuodot kliiniseen tekstiin
                noteValues: {
                  'vasen pakara': 'vasemmassa pakarassa',
                  'oikea pakara': 'oikeassa pakarassa',
                  'vasen reisi': 'vasemmassa reidessä',
                  'oikea reisi': 'oikeassa reidessä',
                  'vasen sääri': 'vasemmassa sääressä',
                  'oikea sääri': 'oikeassa sääressä',
                  'vasen jalkaterä': 'vasemmassa jalkaterässä',
                  'oikea jalkaterä': 'oikeassa jalkaterässä',
                },
                noteTemplate: 'Turruutta tai pistelyä ilmenee {value}.',
              },
            ],
          },
        },
        {
          id: 'sensation_changes',
          label: 'Onko tuntomuutoksia alaraajoissa?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Tuntomuutoksia ei ole ilmennyt alaraajoissa.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'sensation_location',
                label: 'Sijainti?',
                type: 'multi',
                options: [
                  'vasen pakara', 'oikea pakara',
                  'vasen reisi', 'oikea reisi',
                  'vasen sääri', 'oikea sääri',
                  'vasen jalkaterä', 'oikea jalkaterä',
                ],
                // MUOKKAA TÄSSÄ: taivutusmuodot kliiniseen tekstiin
                noteValues: {
                  'vasen pakara': 'vasemmassa pakarassa',
                  'oikea pakara': 'oikeassa pakarassa',
                  'vasen reisi': 'vasemmassa reidessä',
                  'oikea reisi': 'oikeassa reidessä',
                  'vasen sääri': 'vasemmassa sääressä',
                  'oikea sääri': 'oikeassa sääressä',
                  'vasen jalkaterä': 'vasemmassa jalkaterässä',
                  'oikea jalkaterä': 'oikeassa jalkaterässä',
                },
                noteTemplate: 'Tunnonmuutoksia ilmenee {value}.',
              },
            ],
          },
        },
        {
          id: 'aggravating',
          label: 'Mitkä tekijät pahentavat kipua?',
          type: 'text',
          noteTemplate: '{value} pahentavat kipua.',
        },
        {
          id: 'relieving',
          label: 'Mitkä tekijät helpottavat kipua?',
          type: 'text',
          noteTemplate: '{value} helpottavat kipua.',
          
        },
        {
          id: 'morning_pain',
          label: 'Onko aamukipua?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Ei aamukipua.',
            'kyllä': 'Aamukipua esiintyy.',
            
          },
         paragraphBreak: true, 
        },
        {
          id: 'night_pain',
          label: 'Onko yökipua?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Ei yökipua.',
            'kyllä': 'Yökipua esiintyy.',
          },
        },
        {
          id: 'forward_bend',
          label: 'Pahentaako eteentaivutus kipua?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Eteentaivutus ei pahenna kipua.',
            'kyllä': 'Eteentaivutus pahentaa kipua.',
          },
        },
        {
          id: 'backward_bend',
          label: 'Pahentaako taaksetaivutus kipua?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Taaksetaivutus ei pahenna kipua.',
            'kyllä': 'Taaksetaivutus pahentaa kipua.',
          },
        },
        {
          id: 'medication',
          label: 'Oletko käyttänyt kivun hoidossa jotakin lääkitystä?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Potilas ei ole käyttänyt kivun hoidossa lääkitystä.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'medication_type',
                label: 'Mitä lääkitystä?',
                type: 'multi',
                options: ['Burana', 'Panadol', 'Opiaatti', 'Gabapentinoidi', 'Trisyklinen masennuslääke'],
                // MUOKKAA TÄSSÄ: taivutusmuodot kliiniseen tekstiin
                noteValues: {
                  'Burana': 'Buranaa',
                  'Panadol': 'Panadolia',
                  'Opiaatti': 'opiaattia',
                  'Gabapentinoidi': 'gabapentinoidia',
                  'Trisyklinen masennuslääke': 'trisyklistä masennuslääkettä',
                },
                noteTemplate: 'Potilas käyttänyt kivun hoidossa {value}.',
              },
              {
                id: 'medication_response',
                label: 'Onko kipulääkityksestä ollut vastetta?',
                type: 'single',
                options: ['ei', 'kyllä'],
                noteMap: {
                  'ei': 'Kipulääkityksestä ei ole ollut vastetta.',
                },
                subQuestions: {
                  'kyllä': [
                    {
                      id: 'medication_response_amount',
                      label: 'Paljonko vastetta?',
                      type: 'single',
                      options: ['vähän', 'kohtalaisesti', 'paljon'],
                      noteTemplate: 'Kipulääkityksestä ollut vastetta {value}.',
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: 'sitting',
          label: 'Onko istuminen rajoittunut?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Kipu ei rajoita istumista.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'sitting_duration',
                label: 'Kauanko pystyt istumaan kerrallaan?',
                type: 'text',
                noteTemplate: 'Potilas pystyy istumaan noin {value} kerrallaan.',
              },
            ],
          },
        },
        {
          id: 'standing',
          label: 'Onko seisominen rajoittunut?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Kipu ei rajoita seisomista.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'standing_duration',
                label: 'Kauanko pystyt seisomaan kerrallaan?',
                type: 'text',
                noteTemplate: 'Seisominen on rajoittunut noin {value} kerrallaan.',
              },
            ],
          },
        },
        {
          id: 'walking',
          label: 'Onko kävelymatka rajoittunut?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Kävelymatkat eivät ole rajoittuneet.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'walking_distance',
                label: 'Kuinka pitkän matkan kykenet kävelemään?',
                type: 'text',
                noteTemplate: 'Potilas pystyy kävelemään noin {value}.',
              },
              {
                id: 'walking_stop_helps',
                label: 'Helpottaako pysähtyminen?',
                type: 'single',
                options: ['ei', 'kyllä'],
                noteMap: {
                  'ei': 'Pysähtyminen ei helpota kipua.',
                  'kyllä': 'Pysähtyminen helpottaa kipua.',
                },
              },
              {
                id: 'walking_flexion_helps',
                label: 'Helpottaako selän koukistus?',
                type: 'single',
                options: ['ei', 'kyllä'],
                noteMap: {
                  'ei': 'Selän koukistus ei helpota kipua.',
                  'kyllä': 'Selän koukistus helpottaa kipua kävelyn yhteydessä.',
                },
              },
            ],
          },
        },
        {
          id: 'work_limitation',
          label: 'Rajoittaako kipu työskentelyä?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Kipu ei rajoita potilaan työskentelyä.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'work_how',
                label: 'Miten?',
                type: 'text',
                noteTemplate: 'Kipu rajoittaa potilaan työskentelyä esimerkiksi {value}.',
              },
            ],
          },
        },
        {
          id: 'chores_limitation',
          label: 'Rajoittaako kipu kotiaskareita?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Kipu ei rajoita potilaan kotiaskareita.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'chores_how',
                label: 'Miten?',
                type: 'text',
                noteTemplate: 'Kipu rajoittaa potilaan kotiaskareita esimerkiksi {value}.',
              },
            ],
          },
        },
        {
          id: 'hobbies_limitation',
          label: 'Rajoittaako kipu harrastuksia?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Kipu ei rajoita potilaan harrastuksia.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'hobbies_how',
                label: 'Miten?',
                type: 'text',
                noteTemplate: 'Kipu rajoittaa potilaan harrastuksia esimerkiksi {value}.',
              },
            ],
          },
        },
      ],
    },
    // ============================================================
    // RED FLAG -OIREET
    // ============================================================
    {
      id: 'red_flags',
      title: 'Red flag -oireet',
      questions: [
        {
          id: 'fever',
          label: 'Onko ollut kuumetta?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Ei kuumetta.',
            'kyllä': 'Selkäkipuun liittyy kuumetta.',
          },
        },
        {
          id: 'general_condition',
          label: 'Onko ilmennyt yleisvoinnin laskua?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Ei yleisvoinnin laskua.',
            'kyllä': 'Selkäkipuun liittyy yleisvoinnin laskua.',
          },
        },
        {
          id: 'weight_loss',
          label: 'Onko ilmennyt selittämätöntä laihtumista?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Ei selittämätöntä laihtumista.',
            'kyllä': 'Selkäkipuun liittyy selittämätöntä laihtumista.',
          },
        },
        {
          id: 'worst_at_night',
          label: 'Onko kipu pahinta öisin?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Kipu ei ole pahinta öisin.',
            'kyllä': 'Kipu on pahinta öisin.',
          },
        },
        {
          id: 'worst_at_rest',
          label: 'Onko kipu pahinta levossa?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Kipu ei ole pahinta levossa.',
            'kyllä': 'Kipu on pahinta levossa.',
          },
        },
        {
          id: 'osteoporosis',
          label: 'Onko sinulla todettu osteoporoosi?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Potilaalla ei todettua osteoporoosia.',
            'kyllä': 'Potilaalla todettu osteoporoosi.',
          },
        },
        {
          id: 'cancer',
          label: 'Oletko sairastanut syöpää?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Potilaalla ei syöpähistoriaa.',
          },
          subQuestions: {
            'kyllä': [
              {
                id: 'cancer_active',
                label: 'Onko syöpä tällä hetkellä aktiivinen vai ei?',
                type: 'single',
                options: ['aktiivinen', 'ei-aktiivinen'],
                subQuestions: {
                  'aktiivinen': [
                    {
                      id: 'cancer_active_type',
                      label: 'Mikä syöpä?',
                      type: 'text',
                      noteTemplate: 'Potilas sairastaa aktiivista {value}.',
                    },
                  ],
                  'ei-aktiivinen': [
                    {
                      id: 'cancer_inactive_type',
                      label: 'Mikä syöpä?',
                      type: 'text',
                      noteTemplate: 'Potilas sairastanut {value}.',
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: 'immunosuppressants',
          label: 'Onko sinulla tällä hetkellä käytössä immunosuppressiivisia lääkkeitä?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Potilaalla ei käytössä immunosuppressiivisia lääkkeitä.',
            'kyllä': 'Potilaalla käytössä immunosuppressiivisia lääkkeitä.',
          },
        },
        {
          id: 'urinary_difficulty',
          label: 'Onko sinulla ollut virtsaamisen vaikeutta tai virtsaumpea?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Ei virtsaamisen vaikeutta tai virtsaumpea.',
            'kyllä': 'Virtsaamisvaikeutta tai virtsaumpea ilmennyt.',
          },
        },
        {
          id: 'fecal_incontinence',
          label: 'Onko sinulla ollut ulosteen karkailua?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Ei ulosteen karkailua.',
            'kyllä': 'Ulosteen karkailua ilmennyt.',
          },
        },
        {
          id: 'perineal_numbness',
          label: 'Onko sinulla ollut tuntopuutoksia välilihan, peräaukon tai sukuelinten seudulla?',
          type: 'single',
          options: ['ei', 'kyllä'],
          noteMap: {
            'ei': 'Ei ratsupaikka-anestesiaa.',
            'kyllä': 'Ratsupaikka-anestesiaa ilmennyt.',
          },
        },
      ],
    },
    // ============================================================
    // STarT-SELKÄKYSELY
    // ============================================================
    {
      id: 'start_questionnaire',
      title: 'STarT-selkäkysely',
      isScored: true,
      description: 'Haittaavan epäspesifisen selkäkivun kehittymisen riskitekijöiden kartoitus',
      questions: [
        {
          id: 'start_1',
          label: '1. Selkäkipuni on säteillyt alaraajaani (-raajoihini) jossakin vaiheessa viimeksi kuluneen kahden viikon aikana?',
          type: 'single',
          options: ['eri mieltä', 'samaa mieltä'],
          points: { 'eri mieltä': 0, 'samaa mieltä': 1 },
          psychosocialItem: false,
        },
        {
          id: 'start_2',
          label: '2. Minulla on ollut niska- tai hartiakipua jossakin vaiheessa viimeksi kuluneen kahden viikon aikana?',
          type: 'single',
          options: ['eri mieltä', 'samaa mieltä'],
          points: { 'eri mieltä': 0, 'samaa mieltä': 1 },
          psychosocialItem: false,
        },
        {
          id: 'start_3',
          label: '3. Olen kävellyt ainoastaan lyhyitä matkoja selkäkipuni vuoksi?',
          type: 'single',
          options: ['eri mieltä', 'samaa mieltä'],
          points: { 'eri mieltä': 0, 'samaa mieltä': 1 },
          psychosocialItem: false,
        },
        {
          id: 'start_4',
          label: '4. Viimeksi kuluneen kahden viikon aikana pukeutumiseni on ollut tavallista hitaampaa selkäkivun vuoksi?',
          type: 'single',
          options: ['eri mieltä', 'samaa mieltä'],
          points: { 'eri mieltä': 0, 'samaa mieltä': 1 },
          psychosocialItem: false,
        },
        {
          id: 'start_5',
          label: '5. Tällaisessa kunnossa olevan henkilön ei ole oikeastaan turvallista olla fyysisesti aktiivinen?',
          type: 'single',
          options: ['eri mieltä', 'samaa mieltä'],
          points: { 'eri mieltä': 0, 'samaa mieltä': 1 },
          psychosocialItem: true,
        },
        {
          id: 'start_6',
          label: '6. Olen ollut usein huolestunut tilanteestani?',
          type: 'single',
          options: ['eri mieltä', 'samaa mieltä'],
          points: { 'eri mieltä': 0, 'samaa mieltä': 1 },
          psychosocialItem: true,
        },
        {
          id: 'start_7',
          label: '7. Minusta tuntuu, että selkäkipuni on erittäin vaikea eikä se tule koskaan paremmaksi?',
          type: 'single',
          options: ['eri mieltä', 'samaa mieltä'],
          points: { 'eri mieltä': 0, 'samaa mieltä': 1 },
          psychosocialItem: true,
        },
        {
          id: 'start_8',
          label: '8. Yleisesti ottaen en ole nauttinut kaikista niistä asioista, joista ennen nautin?',
          type: 'single',
          options: ['eri mieltä', 'samaa mieltä'],
          points: { 'eri mieltä': 0, 'samaa mieltä': 1 },
          psychosocialItem: true,
        },
        {
          id: 'start_9',
          label: '9. Kuinka haittaavaa selkäkipusi on ollut viimeksi kuluneen kahden viikon aikana?',
          type: 'single',
          options: ['ei lainkaan', 'hieman', 'kohtalaisesti', 'paljon', 'erittäin paljon'],
          points: {
            'ei lainkaan': 0,
            'hieman': 0,
            'kohtalaisesti': 0,
            'paljon': 1,
            'erittäin paljon': 1,
          },
          psychosocialItem: true,
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
            {
              id: 'general_status',
              label: 'Yleistila?',
              type: 'single',
              options: ['hyvä', 'kohtalainen', 'huono'],
              noteMap: {
                'hyvä': 'Yleistila hyvä.',
                'kohtalainen': 'Yleistila kohtalainen.',
                'huono': 'Yleistila huono.',
              },
            },
          ],
        },
        // --- Inspektio ---
        {
          id: 'inspektio',
          title: 'Inspektio',
          questions: [
            {
              id: 'walking_obs',
              label: 'Kävely?',
              type: 'single',
              options: ['kivuliasta', 'onnistuu ongelmitta'],
              noteMap: {
                'kivuliasta': 'Potilas kävelee kivuliaan oloisesti vastaanottohuoneeseen.',
                'onnistuu ongelmitta': 'Potilas kävelee ongelmitta vastaanottohuoneeseen.',
              },
            },
            {
              id: 'transfers',
              label: 'Siirtymiset?',
              type: 'single',
              options: ['kivuliaat', 'onnistuvat ongelmitta'],
              noteMap: {
                'kivuliaat': 'Siirtymiset vastaanoton ja tutkimusten aikana kivuliaan oloiset.',
                'onnistuvat ongelmitta': 'Siirtymiset vastaanoton ja tutkimusten aikana onnistuvat ongelmitta.',
              },
            
            },
            {
              id: 'squat',
              label: 'Kyykkyyn ja ylös?',
              type: 'single',
              options: ['ei onnistu', 'onnistuu ongelmitta'],
              noteMap: {
                'ei onnistu': 'Kyykkyyn ja ylös ei onnistu.',
                'onnistuu ongelmitta': 'Kyykkyyn ja ylös onnistuu ongelmitta.',
              },
            },
            {
              id: 'toe_walk',
              label: 'Varvaskävely (S1)?',
              type: 'single',
              options: ['ei onnistu vasemmalla', 'ei onnistu oikealla', 'onnistuu ongelmitta'],
              noteMap: {
                'ei onnistu vasemmalla': 'Varvaskävely (S1) ei onnistu vasemmalla.',
                'ei onnistu oikealla': 'Varvaskävely (S1) ei onnistu oikealla.',
                'onnistuu ongelmitta': 'Varvaskävely onnistuu ongelmitta.',
              },
            },
            {
              id: 'heel_walk',
              label: 'Kantakävely (L5)?',
              type: 'single',
              options: ['ei onnistu vasemmalla', 'ei onnistu oikealla', 'onnistuu ongelmitta'],
              noteMap: {
                'ei onnistu vasemmalla': 'Kantakävely (L5) ei onnistu vasemmalla.',
                'ei onnistu oikealla': 'Kantakävely (L5) ei onnistu oikealla.',
                'onnistuu ongelmitta': 'Kantakävely onnistuu ongelmitta.',
              },
            },
          ],
        },
        // --- Selän liikkeet ---
        {
          id: 'selan_liikkeet',
          title: 'Selän liikkeet',
          questions: [
            {
              id: 'forward_flexion',
              label: 'Eteentaivutus / sormet lattiaan?',
              type: 'single',
              options: ['rajoittunut', 'liikelaajuudeltaan normaali'],
              noteMap: {
                'liikelaajuudeltaan normaali': 'Selän eteentaivutus liikelaajuudeltaan normaali.',
                'rajoittunut': 'Selän eteentaivutus liikelaajuudeltaan rajoittunut.',
              },
              subQuestions: {
                'rajoittunut': [
                  {
                    id: 'forward_flexion_fingers',
                    label: 'Mihin asti sormet yltävät?',
                    type: 'single',
                    options: ['polvi', 'sääri', 'nilkka', 'lattia'],
                    noteMap: {
                      'polvi': 'Sormet yltävät polviin asti.',
                      'sääri': 'Sormet yltävät sääriin asti.',
                      'nilkka': 'Sormet yltävät nilkkoihin asti.',
                      'lattia': 'Sormet yltävät lattiaan asti.',
                    },
                  },
                  {
                    id: 'forward_flexion_pain',
                    label: 'Provosoituuko kipua jonnekin taivutuksessa?',
                    type: 'single',
                    options: ['ei', 'kyllä'],
                    noteMap: {
                      'ei': 'Eteentaivutus ei provosoi kipua.',
                    },
                    subQuestions: {
                      'kyllä': [
                        {
                          id: 'forward_flexion_pain_location',
                          label: 'Minne kipua provosoituu?',
                          type: 'multi',
                          options: [
                            'vasen alaselkä', 'oikea alaselkä',
                            'vasen pakara', 'oikea pakara',
                            'vasen reisi', 'oikea reisi',
                            'vasen sääri', 'oikea sääri',
                            'vasen jalkaterä', 'oikea jalkaterä',
                          ],
                          // MUOKKAA TÄSSÄ: taivutusmuodot kliiniseen tekstiin
                          noteValues: {
                            'vasen alaselkä': 'vasempaan alaselkään',
                            'oikea alaselkä': 'oikeaan alaselkään',
                            'vasen pakara': 'vasempaan pakaraan',
                            'oikea pakara': 'oikeaan pakaraan',
                            'vasen reisi': 'vasempaan reiteen',
                            'oikea reisi': 'oikeaan reiteen',
                            'vasen sääri': 'vasempaan sääreen',
                            'oikea sääri': 'oikeaan sääreen',
                            'vasen jalkaterä': 'vasempaan jalkaterään',
                            'oikea jalkaterä': 'oikeaan jalkaterään',
                          },
                          noteTemplate: 'Kipua provosoituu {value}.',
                        },
                      ],
                    },
                  },
                  {
                    id: 'forward_flexion_tingling',
                    label: 'Provosoituuko pistelyä tai turruutta alaraajoihin taivutuksessa?',
                    type: 'single',
                    options: ['ei', 'kyllä'],
                    noteMap: {
                      'ei': 'Ei turruutta tai pistelyä alaraajoissa eteentaivutuksen yhteydessä.',
                    },
                    subQuestions: {
                      'kyllä': [
                        {
                          id: 'forward_flexion_tingling_location',
                          label: 'Mihin pistelyä tai turruutta provosoituu?',
                          type: 'multi',
                          options: [
                            'vasen alaselkä', 'oikea alaselkä',
                            'vasen pakara', 'oikea pakara',
                            'vasen reisi', 'oikea reisi',
                            'vasen sääri', 'oikea sääri',
                            'vasen jalkaterä', 'oikea jalkaterä',
                          ],
                          // MUOKKAA TÄSSÄ: taivutusmuodot kliiniseen tekstiin
                          noteValues: {
                            'vasen alaselkä': 'vasempaan alaselkään',
                            'oikea alaselkä': 'oikeaan alaselkään',
                            'vasen pakara': 'vasempaan pakaraan',
                            'oikea pakara': 'oikeaan pakaraan',
                            'vasen reisi': 'vasempaan reiteen',
                            'oikea reisi': 'oikeaan reiteen',
                            'vasen sääri': 'vasempaan sääreen',
                            'oikea sääri': 'oikeaan sääreen',
                            'vasen jalkaterä': 'vasempaan jalkaterään',
                            'oikea jalkaterä': 'oikeaan jalkaterään',
                          },
                          noteTemplate: 'Turruutta tai pistelyä provosoituu {value} eteentaivutuksen yhteydessä.',
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              id: 'backward_extension',
              label: 'Taaksetaivutus?',
              type: 'single',
              options: ['rajoittunut', 'liikelaajuudeltaan normaali'],
              noteMap: {
                'rajoittunut': 'Selän taaksetaivutus liikelaajuudeltaan rajoittunut.',
                'liikelaajuudeltaan normaali': 'Selän taaksetaivutus liikelaajuudeltaan normaali.',
              },
            },
            {
              id: 'lateral_right',
              label: 'Taivutus oikealle?',
              type: 'single',
              options: ['rajoittunut', 'liikelaajuudeltaan normaali'],
              noteMap: {
                'rajoittunut': 'Selän taivutus oikealle liikelaajuudeltaan rajoittunut.',
                'liikelaajuudeltaan normaali': 'Selän taivutus oikealle liikelaajuudeltaan normaali.',
              },
            },
            {
              id: 'lateral_left',
              label: 'Taivutus vasemmalle?',
              type: 'single',
              options: ['rajoittunut', 'liikelaajuudeltaan normaali'],
              noteMap: {
                'rajoittunut': 'Selän taivutus vasemmalle liikelaajuudeltaan rajoittunut.',
                'liikelaajuudeltaan normaali': 'Selän taivutus vasemmalle liikelaajuudeltaan normaali.',
              
              },
            },
          ],
        },
        // --- Palpaatio / koputtelu ---
        {
          id: 'palpaatio',
          title: 'Palpaatio / koputtelu',
          questions: [
            {
              id: 'palpation_tenderness',
              label: 'Palpaatio- tai koputteluarkuutta lannerangassa?',
              type: 'single',
              options: ['ei', 'kyllä'],
              noteMap: {
                'ei': 'Ei palpaatio- / koputteluarkuutta lannerangan seudussa.',
              },
              subQuestions: {
                'kyllä': [
                  {
                    id: 'palpation_level',
                    label: 'Minkä nikaman tasolla?',
                    type: 'multi',
                    options: ['L1-nikaman', 'L2-nikaman', 'L3-nikaman', 'L4-nikaman', 'L5-nikaman'],
                    noteTemplate: 'Palpaatio- ja koputteluarkuutta {value} tasolla.',
                  },
                ],
              },
            },
            {
              id: 'paraspinal_tenderness',
              label: 'Paraspinaalinen palpaatioarkuus (arkuus rangan viereisissä pehmytkudoksissa)?',
              type: 'single',
              options: ['ei', 'kyllä'],
              noteMap: {
                'ei': 'Ei paraspinaalista palpaatio- / koputteluarkuutta lannerangan seudussa.',
                'kyllä': 'Paraspinaalista palpaatio- / koputteluarkuutta lannerangan seudussa.',
              
              },
            },
          ],
        },
        // --- Lihasvoimat vastustettuna ---
        {
          id: 'lihasvoimat',
          title: 'Lihasvoimat vastustettuna',
          questions: [
            {
              id: 'hip_flexion',
              label: 'Lonkan fleksiovoimat (L2-3)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'voimat symmetriset'],
              noteMap: {
                'heikentynyt vasemmalla': 'Lonkan fleksiovoima (L2-3) heikentynyt vasemmalla.',
                'heikentynyt oikealla': 'Lonkan fleksiovoima (L2-3) heikentynyt oikealla.',
                'voimat symmetriset': 'Lonkkien fleksiovoimat symmetriset.',
              },
            },
            {
              id: 'hip_extension',
              label: 'Lonkan ekstensio (L4-5)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'voimat symmetriset'],
              noteMap: {
                'heikentynyt vasemmalla': 'Lonkan ekstensiovoima (L4-5) heikentynyt vasemmalla.',
                'heikentynyt oikealla': 'Lonkan ekstensiovoima (L4-5) heikentynyt oikealla.',
                'voimat symmetriset': 'Lonkkien ekstensiovoimat symmetriset.',
              },
            },
            {
              id: 'knee_flexion',
              label: 'Polven fleksio (L3)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'voimat symmetriset'],
              noteMap: {
                'heikentynyt vasemmalla': 'Polven fleksiovoima (L3) heikentynyt vasemmalla.',
                'heikentynyt oikealla': 'Polven fleksiovoima (L3) heikentynyt oikealla.',
                'voimat symmetriset': 'Polvien fleksiovoimat symmetriset.',
              },
            },
            {
              id: 'knee_extension',
              label: 'Polven ekstensio (L4)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'voimat symmetriset'],
              noteMap: {
                'heikentynyt vasemmalla': 'Polven ekstensiovoima (L4) heikentynyt vasemmalla.',
                'heikentynyt oikealla': 'Polven ekstensiovoima (L4) heikentynyt oikealla.',
                'voimat symmetriset': 'Polvien ekstensiovoimat symmetriset.',
              },
            },
            {
              id: 'ankle_dorsiflexion',
              label: 'Nilkan dorsifleksio (L5)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'voimat symmetriset'],
              noteMap: {
                'heikentynyt vasemmalla': 'Nilkan dorsifleksiovoima (L5) heikentynyt vasemmalla.',
                'heikentynyt oikealla': 'Nilkan dorsifleksiovoima (L5) heikentynyt oikealla.',
                'voimat symmetriset': 'Nilkkojen dorsifleksiovoimat symmetriset.',
              },
            },
            {
              id: 'ankle_plantarflexion',
              label: 'Nilkan plantaarifleksio (S1)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'voimat symmetriset'],
              noteMap: {
                'heikentynyt vasemmalla': 'Nilkan plantaarifleksiovoima (S1) heikentynyt vasemmalla.',
                'heikentynyt oikealla': 'Nilkan plantaarifleksiovoima (S1) heikentynyt oikealla.',
                'voimat symmetriset': 'Nilkkojen plantaarifleksiovoimat symmetriset.',
              },
            },
            {
              id: 'bigtoe_dorsiflexion',
              label: 'Isovarpaan dorsifleksio (L5)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'voimat symmetriset'],
              noteMap: {
                'heikentynyt vasemmalla': 'Isovarpaan dorsifleksiovoima (L5) heikentynyt vasemmalla.',
                'heikentynyt oikealla': 'Isovarpaan dorsifleksiovoima (L5) heikentynyt oikealla.',
                'voimat symmetriset': 'Isovarpaiden dorsifleksiovoimat symmetriset.',
              },
            },
            {
              id: 'bigtoe_plantarflexion',
              label: 'Isovarpaan plantaarifleksio (S1)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'voimat symmetriset'],
              noteMap: {
                'heikentynyt vasemmalla': 'Isovarpaan plantaarifleksiovoima (S1) heikentynyt vasemmalla.',
                'heikentynyt oikealla': 'Isovarpaan plantaarifleksiovoima (S1) heikentynyt oikealla.',
                'voimat symmetriset': 'Isovarpaiden plantaarifleksiovoimat symmetriset.',
              
              },
            },
          ],
        },
        // --- Heijasteet ---
        {
          id: 'heijasteet',
          title: 'Heijasteet',
          questions: [
            {
              id: 'patella_reflex',
              label: 'Patella (L4)?',
              type: 'single',
              options: ['negatiivinen vasemmalla', 'negatiivinen oikealla', 'positiivinen kummassakin jalassa'],
              noteMap: {
                'negatiivinen vasemmalla': 'Patellaheijasteet -/+.',
                'negatiivinen oikealla': 'Patellaheijasteet +/-.',
                'positiivinen kummassakin jalassa': 'Patellaheijasteet +/+.',
              },
            },
            {
              id: 'achilles_reflex',
              label: 'Akilles (S1)?',
              type: 'single',
              options: ['negatiivinen vasemmalla', 'negatiivinen oikealla', 'positiivinen kummassakin jalassa'],
              noteMap: {
                'negatiivinen vasemmalla': 'Akillesheijasteet -/+.',
                'negatiivinen oikealla': 'Akillesheijasteet +/-.',
                'positiivinen kummassakin jalassa': 'Akillesheijasteet +/+.',
              },
            },
            {
              id: 'babinski',
              label: 'Babinski (ylempi motoneuroni)?',
              type: 'single',
              options: ['positiivinen vasemmalla', 'positiivinen oikealla', 'negatiivinen kummassakin jalassa'],
              noteMap: {
                'positiivinen vasemmalla': 'Babinski +/-.',
                'positiivinen oikealla': 'Babinski -/+.',
                'negatiivinen kummassakin jalassa': 'Babinski -/-.',
              
              },
            },
          ],
        },
        // --- Tunnot dermatomitasoittain ---
        {
          id: 'tunnot',
          title: 'Tunnot dermatomitasoittain',
          questions: [
            {
              id: 'sensation_l3',
              label: 'Etu- ja sisäreisi (L3)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'symmetriset kummassakin jalassa'],
              noteMap: {
                'heikentynyt vasemmalla': 'Ihotunto heikentynyt etu- ja sisäreiden alueella (L3) vasemmassa jalassa.',
                'heikentynyt oikealla': 'Ihotunto heikentynyt etu- ja sisäreiden alueella (L3) oikeassa jalassa.',
                'symmetriset kummassakin jalassa': 'Ihotunnot kummankin jalan etu- ja sisäreisien alueella symmetriset.',
              },
            },
            {
              id: 'sensation_l4',
              label: 'Polven alamediaalinen alue (L4)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'symmetriset kummassakin jalassa'],
              noteMap: {
                'heikentynyt vasemmalla': 'Ihotunto heikentynyt polven alamediaalisessa alueella (L4) vasemmassa jalassa.',
                'heikentynyt oikealla': 'Ihotunto heikentynyt polven alamediaalisessa alueella (L4) oikeassa jalassa.',
                'symmetriset kummassakin jalassa': 'Ihotunnot kummankin jalan polven alamediaalialueilla symmetriset.',
              },
            },
            {
              id: 'sensation_l5_leg',
              label: 'Säären ulkosyrjä (L5)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'symmetriset kummassakin jalassa'],
              noteMap: {
                'heikentynyt vasemmalla': 'Ihotunto heikentynyt säären ulkosyrjällä (L5) vasemmassa jalassa.',
                'heikentynyt oikealla': 'Ihotunto heikentynyt säären ulkosyrjällä (L5) oikeassa jalassa.',
                'symmetriset kummassakin jalassa': 'Ihotunnot kummankin jalan säärien ulkosyrjillä symmetriset.',
              },
            },
            {
              id: 'sensation_l5_foot',
              label: 'Jalkaterän mediaali- ja dorsaaliosa (L5)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'symmetriset kummassakin jalassa'],
              noteMap: {
                'heikentynyt vasemmalla': 'Ihotunto heikentynyt jalkaterän mediaali- ja dorsaaliosassa (L5) vasenta jalkaa.',
                'heikentynyt oikealla': 'Ihotunto heikentynyt jalkaterän mediaali- ja dorsaaliosassa (L5) oikeaa jalkaa.',
                'symmetriset kummassakin jalassa': 'Ihotunnot kummankin jalkaterän mediaali- ja dorsaaliosissa symmetriset.',
              },
            },
            {
              id: 'sensation_s1',
              label: 'Jalkaterän lateraaliosa (S1)?',
              type: 'single',
              options: ['heikentynyt vasemmalla', 'heikentynyt oikealla', 'symmetriset kummassakin jalassa'],
              noteMap: {
                'heikentynyt vasemmalla': 'Ihotunto heikentynyt jalkaterän lateraaliosassa (S1) vasemmassa jalassa.',
                'heikentynyt oikealla': 'Ihotunto heikentynyt jalkaterän lateraaliosassa (S1) oikeassa jalassa.',
                'symmetriset kummassakin jalassa': 'Ihotunnot kummankin jalan lateraaliosassa symmetriset.',
              },
            },
          ],
        },
      // --- Hermojuuritesti ---
        {
          id: 'hermojuuritesti',
          title: 'Hermojuuritesti',
          questions: [
            {
              id: 'slr_test',
              label: 'SLR-testi?',
              type: 'single',
              options: ['negatiivinen kummassakin jalassa', 'positiivinen vasemmalla', 'positiivinen oikealla'],
              noteMap: {
                'negatiivinen kummassakin jalassa': 'SLR-testi -/-.',
              },
              subQuestions: {
                'positiivinen vasemmalla': [
                  {
                    id: 'slr_left_radiation',
                    label: 'Mihin provosoituu säteilyä?',
                    type: 'multi',
                    options: [
                      'etu- ja sisäreisi (L3)',
                      'polven alamediaalinen alue (L4)',
                      'säären ulkosyrjä (L5)',
                      'jalkaterän mediaali- ja dorsaaliosa (L5)',
                      'jalkaterän lateraaliosa (S1)',
                    ],
                    // MUOKKAA TÄSSÄ: taivutusmuodot kliiniseen tekstiin
                    noteValues: {
                      'etu- ja sisäreisi (L3)': 'etu- ja sisäreiteen (L3)',
                      'polven alamediaalinen alue (L4)': 'polven alamediaaliselle alueelle (L4)',
                      'säären ulkosyrjä (L5)': 'säären ulkosyrjälle (L5)',
                      'jalkaterän mediaali- ja dorsaaliosa (L5)': 'jalkaterän mediaali- ja dorsaaliosaan (L5)',
                      'jalkaterän lateraaliosa (S1)': 'jalkaterän lateraaliosaan (S1)',
                    },
                    noteTemplate: 'SLR-testi + vasemmalla, säteilyä provosoituu {value}.',
                  },
                ],
                'positiivinen oikealla': [
                  {
                    id: 'slr_right_radiation',
                    label: 'Mihin provosoituu säteilyä?',
                    type: 'multi',
                    options: [
                      'etu- ja sisäreisi (L3)',
                      'polven alamediaalinen alue (L4)',
                      'säären ulkosyrjä (L5)',
                      'jalkaterän mediaali- ja dorsaaliosa (L5)',
                      'jalkaterän lateraaliosa (S1)',
                    ],
                    // MUOKKAA TÄSSÄ: taivutusmuodot kliiniseen tekstiin
                    noteValues: {
                      'etu- ja sisäreisi (L3)': 'etu- ja sisäreiteen (L3)',
                      'polven alamediaalinen alue (L4)': 'polven alamediaaliselle alueelle (L4)',
                      'säären ulkosyrjä (L5)': 'säären ulkosyrjälle (L5)',
                      'jalkaterän mediaali- ja dorsaaliosa (L5)': 'jalkaterän mediaali- ja dorsaaliosaan (L5)',
                      'jalkaterän lateraaliosa (S1)': 'jalkaterän lateraaliosaan (S1)',
                    },
                    noteTemplate: 'SLR-testi + oikealla, säteilyä provosoituu {value}.',
                  
                  },
                ],
              },
            },
          ],
        },

        
        // --- Cauda equina ---
        {
          id: 'cauda_equina',
          title: 'Cauda equina',
          questions: [
            {
              id: 'sphincter_tone',
              label: 'Peräaukon sulkijalihaksen tonus?',
              type: 'single',
              options: ['alentunut', 'normaali'],
              noteMap: {
                'alentunut': 'Sfinktertonus alentunut.',
                'normaali': 'Sfinktertonus napakka.',
              },
            },
            {
              id: 'perineum_sensation',
              label: 'Perineumin tunto / ratsupaikka-anestesia?',
              type: 'single',
              options: ['alentunut', 'normaali'],
              noteMap: {
                'alentunut': 'Perineumin tunto alentunut.',
                'normaali': 'Perineumin tunto normaali.',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default clinicalData;
