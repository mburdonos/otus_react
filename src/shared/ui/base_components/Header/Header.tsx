import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

interface HeaderProps {
  /** Заголовок страницы, отображается рядом с логотипом */
  title: string;
  children?: React.ReactNode;
  /** Дополнительный класс для кастомизации */
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, className, children }) => {
  const { t } = useTranslation();

  return (
  <header className={`${styles.header} ${className || ''} `}>
    <div className={styles.information}>
    <div className={styles.logoWrapper}>
      <Logo text={title} />
    </div>
    <div className={ styles.navigation }>{ children }</div>
    </div>
    <div className={styles.other_components}>
      <button></button>
    <ThemeToggle />
    </div>
    
  </header>
)};

export default Header;
