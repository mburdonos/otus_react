import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Logo.module.css';
const Logo = ({ text = 'LOGO', className }) => (_jsx("div", { className: `${styles.logo} ${className || ''}`, "aria-label": "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0441\u0430\u0439\u0442\u0430", children: _jsx("span", { className: styles.logoText, children: text }) }));
export default Logo;
