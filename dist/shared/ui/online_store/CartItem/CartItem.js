import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './CartItem.module.css';
export const CartItem = ({ title, price, imageUrl, onRemove, }) => {
    return (_jsxs("div", { className: styles.item, children: [_jsx("img", { src: imageUrl ? imageUrl : 'not_found.jpg', alt: title, className: styles.image }), _jsxs("div", { className: styles.content, children: [_jsx("h3", { className: styles.title, children: title }), _jsxs("p", { className: styles.price, children: ["\u20BD", price.toLocaleString()] })] }), _jsx("button", { type: "button", className: styles.removeButton, onClick: onRemove, "aria-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B", children: "\u00D7" })] }));
};
CartItem.displayName = 'CartItem';
