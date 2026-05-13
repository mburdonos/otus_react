import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../i18n';
const LanguageContext = createContext({
    language: 'en',
    changeLanguage: () => { },
});
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(i18n.language);
    // Синхронизация с i18n при изменении состояния
    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);
    const changeLanguage = (lang) => {
        setLanguage(lang);
    };
    return (_jsx(LanguageContext.Provider, { value: { language, changeLanguage }, children: children }));
};
export const useLanguage = () => useContext(LanguageContext);
