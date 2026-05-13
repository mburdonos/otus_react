import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, className, children }) => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.information}>
        <div className={styles.logoWrapper}>
          <Logo text={title} />
        </div>
        <div className={styles.navigation}>{children}</div>
      </div>
    </header>
  );
};

export default Header;