import React from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.css';

interface LayoutProps {
  /** Заголовок страницы, передаётся в Header */
  title: string;
  /** Основной контент страницы */
  children: React.ReactNode;
  /** Дополнительный класс для кастомизации */
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children, className }) => (
  <div className={`${styles.layout} ${className || ''}`}>
    <Header title={title} />
    <main className={styles.main}>{children}</main>
  </div>
);

export default Layout;
