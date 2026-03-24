import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import AccountService from '../../../services/account/account.service';
import { UserType, ProductType } from '../../../types/account_types';
import styles from './accountService.module.css';
const accountService = new AccountService();
export default {
    title: 'UI/services/AccountService',
    parameters: { layout: 'centered' }
};
// Упрощённый калькулятор скидок
export const InteractiveCalculator = () => {
    const [user, setUser] = React.useState(UserType.Standard);
    const [product, setProduct] = React.useState(ProductType.Car);
    const base = accountService.getDiscountForUser(user);
    const productDisc = accountService.getProductDiscountForUser(user, product);
    const total = accountService.calculateTotalDiscount(user, product);
    return (_jsxs("div", { className: styles.calculator, children: [_jsx("h3", { className: styles.title, children: "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0441\u043A\u0438\u0434\u043E\u043A" }), _jsxs("div", { style: { marginBottom: '15px' }, children: [_jsx("label", { className: styles.label, children: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C:" }), _jsx("select", { value: user, onChange: e => setUser(e.target.value), className: styles.select, children: Object.values(UserType).map(u => _jsx("option", { value: u, children: u }, u)) })] }), _jsxs("div", { style: { marginBottom: '15px' }, children: [_jsx("label", { className: styles.label, children: "\u0422\u043E\u0432\u0430\u0440:" }), _jsx("select", { value: product, onChange: e => setProduct(e.target.value), className: styles.select, children: Object.values(ProductType).map(p => _jsx("option", { value: p, children: p }, p)) })] }), _jsxs("div", { className: styles.result, children: [_jsxs("p", { children: ["\u0411\u0430\u0437\u043E\u0432\u0430\u044F: ", _jsxs("strong", { children: [base * 100, "%"] })] }), _jsxs("p", { children: ["\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u043D\u0430\u044F: ", _jsxs("strong", { children: [productDisc * 100, "%"] })] }), _jsx("p", { children: _jsxs("strong", { children: ["\u0418\u0442\u043E\u0433\u043E: ", total * 100, "%"] }) })] })] }));
};
