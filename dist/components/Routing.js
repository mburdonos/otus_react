import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { hydrateAuth } from '../features/auth/authSlice';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Catalog } from '../pages/catalog';
import { Cart } from '../pages/cart';
import LoginForm from './LoginForm/LoginForm';
import ProtectedRoute from './ProtectRoute';
import Signup from '../pages/Signup';
export function Routing() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(hydrateAuth());
    }, [dispatch]);
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/otus_react", element: _jsx(Home, {}) }), _jsx(Route, { path: "/login", element: _jsx(LoginForm, {}) }), _jsx(Route, { path: "/signup", element: _jsx(Signup, {}) }), _jsxs(Route, { element: _jsx(ProtectedRoute, {}), children: [_jsx(Route, { path: "/otus_react/catalog", element: _jsx(Catalog, {}) }), _jsx(Route, { path: "/otus_react/cart", element: _jsx(Cart, {}) })] })] }));
}
