import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLanguage } from '../../../../context/LanguageContext';
const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();
    return (_jsxs("div", { style: { margin: '20px 0' }, children: [_jsx("button", { onClick: () => changeLanguage('en'), disabled: language === 'en', style: { marginRight: '10px' }, children: "English" }), _jsx("button", { onClick: () => changeLanguage('ru'), disabled: language === 'ru', children: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" })] }));
};
export default LanguageSwitcher;
