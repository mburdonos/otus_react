import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.css';
import { CartBadge } from '../CartBadge/CartBadge';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { logout } from '../../features/auth/authSlice';
export function Navigation() {
    const { isAuthenticated, user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };
    return (_jsxs("nav", { className: styles.navigation, children: [_jsxs("div", { className: styles.leftSection, children: [_jsx(NavLink, { to: "/otus_react/", className: ({ isActive }) => isActive ? styles['active-link'] : styles['nav-link'], children: "home" }), isAuthenticated && (_jsxs(_Fragment, { children: [_jsx(NavLink, { to: "/otus_react/catalog", className: ({ isActive }) => isActive ? styles['active-link'] : styles['nav-link'], children: "catalog" }), _jsx(NavLink, { to: "/otus_react/cart", className: ({ isActive }) => isActive ? styles['active-link'] : styles['nav-link'], children: _jsxs("span", { className: styles.cartLink, children: ["cart", _jsx(CartBadge, {})] }) })] }))] }), _jsx("div", { className: styles.rightSection, children: isAuthenticated ? (_jsxs(_Fragment, { children: [_jsxs("span", { className: styles.userInfo, children: ["Welcome, ", user?.name] }), _jsx("button", { onClick: handleLogout, className: styles.logoutButton, children: "Logout" })] })) : (_jsxs(_Fragment, { children: [_jsx(NavLink, { to: "/login", className: styles.link, children: "Login" }), _jsx(NavLink, { to: "/signup", className: styles.link, children: "Sign Up" })] })) })] }));
}
