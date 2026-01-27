// ThemeToggle.tsx
import React from 'react';
import { useTheme, ThemeProvider } from './ThemeProvider';
import styles from './ThemeToggle.module.css';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
    {/* <ThemeProvider>
    <div className={styles.content} data-theme={theme}>Текущая тема: {theme}</div>
    </ThemeProvider> */}
    <button
      className={styles.toggleButton}
      data-theme={theme}
      onClick={toggleTheme}
    > {`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    </button>
    </>
  );
};
