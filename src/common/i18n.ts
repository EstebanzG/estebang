// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languages from './languages';

i18n.use(initReactI18next).init({
    resources: {
        fr: {
            translation: languages.fr,
        },
        en: {
            translation: languages.en,
        },
    },
    lng: 'en',
    fallbackLng: 'fr',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
