import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './CartButton.module.css';
export const CartButton = ({ count }) => {
    if (count === 0) {
        return (_jsx("button", { type: "button", className: styles.cartButton + ' ' + styles.addButton, "aria-label": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443", children: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" }));
    }
    return (_jsxs("div", { className: styles.buttonGroup, children: [_jsx("button", { type: "button", className: styles.cartButton + ' ' + styles.minusButton, "aria-label": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E", children: "\u2212" }), _jsx("input", { type: "number", value: count, readOnly: true, className: styles.inputField, "aria-label": "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u0430" }), _jsx("button", { type: "button", className: styles.cartButton + ' ' + styles.plusButton, "aria-label": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E", children: "+" })] }));
};
CartButton.displayName = 'CartButton';
