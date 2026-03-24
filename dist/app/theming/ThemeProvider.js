import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useInsertionEffect, useState, useMemo } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import vars from 'src/app/styles/common.scss';
import { Theme } from './types';
import s from './ThemeProvider.sass';
const ThemeContext = createContext({});
export const useThemeContext = () => useContext(ThemeContext);
const KEY = 'theme';
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem(KEY) || Theme.light);
    useInsertionEffect(() => {
        localStorage.setItem(KEY, theme);
        const html = document.body.parentElement;
        html?.classList.add(theme);
        return () => html?.classList.remove(theme);
    }, [theme]);
    const toggleTheme = useCallback(() => setTheme((v) => (v === Theme.light ? Theme.dark : Theme.light)), []);
    const isLight = theme === Theme.light;
    const colorPrimary = isLight ? vars.light_accent : vars.dark_accent;
    const algorithm = isLight ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm;
    const config = {
        token: {
            colorPrimary,
        },
        algorithm,
    };
    const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);
    return (_jsx(ThemeContext.Provider, { value: value, children: _jsx(ConfigProvider, { theme: config, children: _jsx("div", { className: s.root, children: children }) }) }));
};
