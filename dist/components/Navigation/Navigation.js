import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
export function Navigation() {
    return (_jsxs("nav", { className: styles.navigation, children: [_jsx(NavLink, { to: "/otus_react/", className: ({ isActive }) => isActive ? styles['active-link'] : styles['nav-link'], children: "home" }), _jsx(NavLink, { to: "/otus_react/catalog", className: ({ isActive }) => isActive ? styles['active-link'] : styles['nav-link'], children: "catalog" }), _jsx(NavLink, { to: "/otus_react/cart", className: ({ isActive }) => isActive ? styles['active-link'] : styles['nav-link'], children: "cart" })] }));
}
