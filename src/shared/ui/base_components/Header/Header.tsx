import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

interface HeaderProps {
  /** Заголовок страницы, отображается рядом с логотипом */
  title: string;
  /** Дополнительный класс для кастомизации */
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, className }) => {
  return (
  <header className={`${styles.header} ${className || ''} `}>
    <div className={styles.logoWrapper}>
      <Logo text="MYBRAND" />
    </div>
    <h1 className={styles.title}>{title}</h1>
    
  </header>
)};

export default Header;
