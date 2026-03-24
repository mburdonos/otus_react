import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './OperationDetail.module.css';
export const OperationDetail = ({ title, category, description, price, imageUrl, discount = false }) => {
    price = discount ? price * 0.9 : price;
    return (_jsxs("div", { className: styles.container, children: [_jsx("img", { src: imageUrl ? imageUrl : 'not_found.jpg', alt: title, className: styles.image }), _jsx("p", { className: styles.category, children: category }), _jsx("h1", { className: styles.title, children: title }), _jsx("div", { className: styles.description, children: description }), _jsxs("p", { className: styles.price, children: ["\u20BD", discount ? (_jsxs(_Fragment, { children: [_jsx("del", { children: price.toLocaleString('ru-RU') }), _jsxs("div", { children: ["\u20BD", (price * 0.9).toLocaleString('ru-RU')] })] })) : price.toLocaleString('ru-RU')] }), _jsx("button", { type: "button", className: styles.addToCart, "aria-label": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443", children: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" })] }));
};
OperationDetail.displayName = 'OperationDetail';
