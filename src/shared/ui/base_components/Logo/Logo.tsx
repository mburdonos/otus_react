import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  /** Текст внутри логотипа (например, название бренда) */
  text?: string;
  /** Дополнительный класс для кастомной стилизации */
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ text = 'LOGO', className }) => (
  <div className={`${styles.logo} ${className || ''}`} aria-label="Логотип сайта">
    <span className={styles.logoText}>{text}</span>
  </div>
);

export default Logo;
