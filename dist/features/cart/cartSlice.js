// features/cart/cartSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../../features/auth/authSlice';
const initialState = {};
// Вспомогательная функция для расчета общей суммы
const calculateTotal = (items) => {
    if (!items || !Array.isArray(items))
        return 0;
    return items.reduce((sum, item) => sum + (item?.price || 0), 0);
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Добавление товара в корзину пользователя
        addToCart: (state, action) => {
            const { userId, product } = action.payload;
            if (!userId || !product)
                return;
            // Если у пользователя еще нет корзины, создаем
            if (!state[userId]) {
                state[userId] = { items: [], total: 0 };
            }
            // Добавляем товар
            state[userId].items.push(product);
            // Пересчитываем общую сумму
            state[userId].total = calculateTotal(state[userId].items);
            // Сохраняем в localStorage
            localStorage.setItem(`cart_${userId}`, JSON.stringify(state[userId]));
        },
        // Удаление товара из корзины пользователя
        removeFromCart: (state, action) => {
            const { userId, productId } = action.payload;
            if (!userId || !productId)
                return;
            if (state[userId]) {
                state[userId].items = state[userId].items.filter(item => item.id !== productId);
                state[userId].total = calculateTotal(state[userId].items);
                // Если корзина пуста, удаляем запись о пользователе
                if (state[userId].items.length === 0) {
                    delete state[userId];
                    localStorage.removeItem(`cart_${userId}`);
                }
                else {
                    localStorage.setItem(`cart_${userId}`, JSON.stringify(state[userId]));
                }
            }
        },
        // Обновление товара в корзине
        updateProduct: (state, action) => {
            const { userId, product } = action.payload;
            if (!userId || !product)
                return;
            if (state[userId]) {
                const index = state[userId].items.findIndex(item => item.id === product.id);
                if (index !== -1) {
                    state[userId].items[index] = product;
                    state[userId].total = calculateTotal(state[userId].items);
                    localStorage.setItem(`cart_${userId}`, JSON.stringify(state[userId]));
                }
            }
        },
        // Очистка всей корзины пользователя
        clearCart: (state, action) => {
            const userId = action.payload;
            if (userId) {
                delete state[userId];
                localStorage.removeItem(`cart_${userId}`);
            }
        },
        // Загрузка корзины пользователя
        loadCart: (state, action) => {
            const userId = action.payload;
            if (!userId)
                return;
            const savedCart = localStorage.getItem(`cart_${userId}`);
            if (savedCart) {
                try {
                    const parsedCart = JSON.parse(savedCart);
                    // Проверяем, что parsedCart имеет правильную структуру
                    if (parsedCart && Array.isArray(parsedCart.items)) {
                        state[userId] = {
                            items: parsedCart.items,
                            total: calculateTotal(parsedCart.items)
                        };
                    }
                    else {
                        state[userId] = { items: [], total: 0 };
                    }
                }
                catch (error) {
                    console.error('Failed to parse cart:', error);
                    state[userId] = { items: [], total: 0 };
                }
            }
            else if (!state[userId]) {
                state[userId] = { items: [], total: 0 };
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logout, (state) => {
            // При выходе не удаляем данные
        });
    },
});
export const { addToCart, removeFromCart, updateProduct, clearCart, loadCart } = cartSlice.actions;
export default cartSlice.reducer;
