import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useContext, useEffect } from 'react';
// Создаём контекст с дефолтным значением
const ThemeContext = createContext(undefined);
// Хук для использования контекста темы
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
// Провайдер темы
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    // Синхронизация с DOM при изменении темы
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: children }));
};
