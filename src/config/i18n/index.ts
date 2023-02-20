import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import translateEN from './translate/english.json';
import translateSP from './translate/spanish.json';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'english',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      english: {
        translation: translateEN,
      },
      spanish: {
        translation: translateSP,
      },
    },
  });

export default i18n;
