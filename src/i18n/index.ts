import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем переводы (пример для en и ru)
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
};

i18n
  .use(initReactI18next) // Проходим инстанс в React
  .init({
    resources,
    lng: 'en', // Язык по умолчанию
    fallbackLng: 'en', // Резервный язык
    interpolation: {
      escapeValue: false, // React уже экранирует
    },
    react: {
      useSuspense: false, // Отключаем Suspense для простоты
    },
  });

export default i18n;
