import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// components/Cart.tsx
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, loadCart } from '../features/cart/cartSlice';
import styles from '../pages_css/сart.module.css';
export function Cart() {
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);
    const allCartItems = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    // Загружаем корзину при авторизации и при смене пользователя
    useEffect(() => {
        if (isAuthenticated && user?.id) {
            dispatch(loadCart(user.id));
        }
    }, [isAuthenticated, user?.id, dispatch]);
    // Безопасное получение корзины текущего пользователя
    const userCart = user?.id && allCartItems[user.id] ? allCartItems[user.id] : { items: [], total: 0 };
    const cartItems = userCart.items || [];
    const totalPrice = userCart.total || 0;
    const handleRemoveFromCart = (productId) => {
        if (user?.id) {
            dispatch(removeFromCart({ userId: user.id, productId }));
        }
    };
    // Если пользователь не авторизован
    if (!isAuthenticated) {
        return (_jsxs("div", { className: styles.cart, children: [_jsx("h2", { className: styles.cartTitle, children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430" }), _jsx("p", { className: styles.emptyCart, children: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443" })] }));
    }
    // Проверка, что cartItems существует и является массивом
    if (!cartItems || !Array.isArray(cartItems)) {
        return (_jsxs("div", { className: styles.cart, children: [_jsx("h2", { className: styles.cartTitle, children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430" }), _jsx("p", { className: styles.emptyCart, children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u044B..." })] }));
    }
    return (_jsxs("div", { className: styles.cart, children: [_jsx("h2", { className: styles.cartTitle, children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430" }), cartItems.length === 0 ? (_jsx("p", { className: styles.emptyCart, children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430" })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.cartItems, children: cartItems.map((item) => (_jsxs("div", { className: styles.cartItem, children: [_jsx("img", { src: item.image, alt: item.title, className: styles.itemImage }), _jsxs("div", { className: styles.itemDetails, children: [_jsx("h4", { className: styles.itemTitle, children: item.title }), _jsxs("p", { className: styles.itemPrice, children: ["$", item.price.toFixed(2)] })] }), _jsx("button", { onClick: () => handleRemoveFromCart(item.id), className: styles.removeBtn, children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" })] }, item.id))) }), _jsx("div", { className: styles.cartTotal, children: _jsxs("strong", { className: styles.totalAmount, children: ["\u0418\u0442\u043E\u0433\u043E: $", totalPrice.toFixed(2)] }) })] }))] }));
}
