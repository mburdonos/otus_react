// ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../../../../context/ThemeProvider';
import styles from './ThemeToggle.module.css';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
    <button
      className={styles.toggleButton}
      data-theme={theme}
      onClick={toggleTheme}
    > {`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    </button>
    </>
  );
};
