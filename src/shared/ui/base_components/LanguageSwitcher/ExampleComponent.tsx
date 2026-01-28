import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const ExampleComponent = () => {
  const { t } = useTranslation(); // Получаем функцию перевода

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t('greeting')}</h1>
      <p>{t('welcome')}</p>
    </div>
  );
};

export default ExampleComponent;
