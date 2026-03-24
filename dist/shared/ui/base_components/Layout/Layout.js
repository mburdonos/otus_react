import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../Header/Header';
import styles from './Layout.module.css';
const Layout = ({ title, children, className }) => (_jsxs("div", { className: `${styles.layout} ${className || ''}`, children: [_jsx(Header, { title: title }), _jsx("main", { className: styles.main, children: children })] }));
export default Layout;
