import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Header from './shared/ui/base_components/Header/Header';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routing } from './components/Routing';
import { Navigation } from './components/Navigation/Navigation';
function App() {
    return (_jsx(_Fragment, { children: _jsx(BrowserRouter, { children: _jsxs("div", { children: [_jsx(Header, { title: "shop", children: _jsx(Navigation, {}) }), _jsx("main", { children: _jsx(Routing, {}) })] }) }) }));
}
export default App;
