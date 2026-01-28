import React, { createContext, useState, useContext, useEffect } from 'react';


export type Theme = 'light' | 'dark';


export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Создаём контекст с дефолтным значением
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


// Хук для использования контекста темы
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Провайдер темы
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');


// Синхронизация с DOM при изменении темы
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
