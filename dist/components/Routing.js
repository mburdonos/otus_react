import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Catalog } from '../pages/catalog';
import { Cart } from '../pages/cart';
export function Routing() {
    return (_jsx(_Fragment, { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/otus_react/', element: _jsx(Home, {}) }), _jsx(Route, { path: '/otus_react/catalog', element: _jsx(Catalog, {}) }), _jsx(Route, { path: '/otus_react/cart', element: _jsx(Cart, {}) })] }) }));
}
