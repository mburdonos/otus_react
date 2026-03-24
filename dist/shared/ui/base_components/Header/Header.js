import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Logo from '../Logo/Logo';
import styles from './Header.module.css';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { useTranslation } from 'react-i18next';
const Header = ({ title, className, children }) => {
    const { t } = useTranslation();
    return (_jsxs("header", { className: `${styles.header} ${className || ''} `, children: [_jsxs("div", { className: styles.information, children: [_jsx("div", { className: styles.logoWrapper, children: _jsx(Logo, { text: title }) }), _jsx("div", { className: styles.navigation, children: children })] }), _jsxs("div", { className: styles.other_components, children: [_jsx("button", {}), _jsx(ThemeToggle, {})] })] }));
};
export default Header;
