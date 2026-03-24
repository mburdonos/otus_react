import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import styles from './ProductCard.module.css';
const ProductCard = React.memo(({ id, title, description, price, imageUrl, }) => {
    return (_jsxs("div", { className: styles.card, children: [_jsx("img", { src: imageUrl ? imageUrl : 'not_found.jpg', alt: title, className: styles.image }), _jsx("h3", { className: styles.title, children: title }), _jsx("p", { className: styles.description, children: description }), _jsxs("p", { className: styles.price, children: ["\u20BD", price.toLocaleString()] }), _jsx("button", { type: "button", className: styles.addToCart, "aria-label": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443", children: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" })] }));
});
ProductCard.displayName = 'ProductCard';
export default ProductCard;
