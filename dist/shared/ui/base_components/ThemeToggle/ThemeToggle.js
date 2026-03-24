import { jsxs as _jsxs, Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../../../context/ThemeProvider';
import styles from './ThemeToggle.module.css';
export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (_jsx(_Fragment, { children: _jsxs("button", { className: styles.toggleButton, "data-theme": theme, onClick: toggleTheme, children: [" ", `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`] }) }));
};
