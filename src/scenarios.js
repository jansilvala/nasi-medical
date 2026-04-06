// scenarios.js
// Rekisteri kaikista sovelluksen kliinisistä skenaarioista.
// Lisää uudet skenaariot tähän tiedostoon.

import lowerBackPainData from './lowerBackPainData';
import urinaryDifficultiesData from './urinaryDifficultiesData';

const scenarios = [
  {
    id: 'lower_back_pain',
    title: 'Alaselkäkipu',

    data: lowerBackPainData,
  },
  {
    id: 'urinary_difficulties',
    title: 'Miesten ei-akuutti virtsaamisvaikeus',

    data: urinaryDifficultiesData,
  },
];

export default scenarios;
