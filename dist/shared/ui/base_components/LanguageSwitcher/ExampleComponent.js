import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
const ExampleComponent = () => {
    const { t } = useTranslation(); // Получаем функцию перевода
    return (_jsxs("div", { children: [_jsx(LanguageSwitcher, {}), _jsx("h1", { children: t('greeting') }), _jsx("p", { children: t('welcome') })] }));
};
export default ExampleComponent;
