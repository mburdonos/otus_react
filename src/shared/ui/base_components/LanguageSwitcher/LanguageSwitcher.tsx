import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div style={{ margin: '20px 0' }}>
      <button
        onClick={() => changeLanguage('en')}
        disabled={language === 'en'}
        style={{ marginRight: '10px' }}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        disabled={language === 'ru'}
      >
        Русский
      </button>
    </div>
  );
};

export default LanguageSwitcher;
