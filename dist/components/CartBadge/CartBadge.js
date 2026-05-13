import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/CartBadge.tsx (с иконкой корзины)
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Link } from 'react-router-dom';
import styles from './CartBadge.module.css';
export function CartBadge() {
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);
    const allCartItems = useAppSelector(state => state.cart);
    const [itemCount, setItemCount] = useState(0);
    useEffect(() => {
        // Безопасное получение количества товаров в корзине
        if (isAuthenticated && user?.id) {
            const userCart = allCartItems[user.id];
            if (userCart && userCart.items && Array.isArray(userCart.items)) {
                setItemCount(userCart.items.length);
            }
            else {
                setItemCount(0);
            }
        }
        else {
            setItemCount(0);
        }
    }, [isAuthenticated, user?.id, allCartItems]);
    // Если пользователь не авторизован, показываем только иконку без бейджа
    if (!isAuthenticated) {
        return (_jsx(Link, { to: "/login", className: styles.cartLink, children: _jsx("span", { className: styles.cartIcon, children: "\uD83D\uDED2" }) }));
    }
    return (_jsx(Link, { to: "/cart", className: styles.cartLink, children: _jsxs("div", { className: styles.cartWrapper, children: [_jsx("span", { className: styles.cartIcon, children: "\uD83D\uDED2" }), itemCount > 0 && (_jsx("span", { className: styles.badgeCount, children: itemCount }))] }) }));
}
