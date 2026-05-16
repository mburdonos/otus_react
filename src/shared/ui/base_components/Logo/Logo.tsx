// Logo.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

interface LogoProps {
  /** Текст внутри логотипа (например, название бренда) */
  text?: string;
  /** Дополнительный класс для кастомной стилизации */
  className?: string;
  /** Ссылка при клике на логотип */
  to?: string;
}

const Logo: React.FC<LogoProps> = ({ text = 'Shop', className, to = '/' }) => (
  <Link to={to} className={`${styles.logo} ${className || ''}`} aria-label="Логотип сайта">
    <span className={styles.logoText}>{text}</span>
  </Link>
);

export default Logo;