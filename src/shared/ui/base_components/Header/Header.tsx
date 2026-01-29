import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

interface HeaderProps {
  /** Заголовок страницы, отображается рядом с логотипом */
  title: string;
  /** Дополнительный класс для кастомизации */
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, className }) => {
  const { t } = useTranslation();

  return (
  <header className={`${styles.header} ${className || ''} `}>
    <div className={styles.logoWrapper}>
      <Logo text="MYBRAND" />
    </div>
    <h1 className={styles.title}>{t(title)}</h1>
    <ThemeToggle />
    <LanguageSwitcher />
    
  </header>
)};

export default Header;
