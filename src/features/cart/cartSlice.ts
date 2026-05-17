// features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logout } from '../../features/auth/authSlice';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: any;
}

interface UserCart {
  items: Product[];
  total: number;
}

interface CartState {
  [userId: string]: UserCart;
}

const initialState: CartState = {};

// Вспомогательная функция для расчета общей суммы
const calculateTotal = (items: Product[]): number => {
  if (!items || !Array.isArray(items)) return 0;
  return items.reduce((sum, item) => sum + (item?.price || 0), 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Добавление товара в корзину пользователя
    addToCart: (state, action: PayloadAction<{ userId: string; product: Product }>) => {
      const { userId, product } = action.payload;
      
      if (!userId || !product) return;
      
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
    removeFromCart: (state, action: PayloadAction<{ userId: string; productId: number }>) => {
  const { userId, productId } = action.payload;
  
  if (!userId || !productId) return;
  
  if (state[userId] && state[userId].items.length > 0) {
    // Находим индекс первого товара с таким id
    const index = state[userId].items.findIndex(item => item.id === productId);
    
    // Если товар найден, удаляем только один экземпляр
    if (index !== -1) {
      state[userId].items.splice(index, 1);
      state[userId].total = calculateTotal(state[userId].items);
      
      // Если корзина пуста, удаляем запись о пользователе
      if (state[userId].items.length === 0) {
        delete state[userId];
        localStorage.removeItem(`cart_${userId}`);
      } else {
        localStorage.setItem(`cart_${userId}`, JSON.stringify(state[userId]));
      }
    }
  }
},
    
    // Обновление товара в корзине
updateProduct: (state, action: PayloadAction<{ userId: string; product: Product }>) => {
  const { userId, product } = action.payload;
  
  if (!userId || !product) return;
  
  if (state[userId] && state[userId].items.length > 0) {
    // Обновляем ВСЕ экземпляры товара с таким id
    let updated = false;
    state[userId].items = state[userId].items.map(item => {
      if (item.id === product.id) {
        updated = true;
        return { ...product }; // Возвращаем обновленный товар
      }
      return item;
    });
    
    if (updated) {
      state[userId].total = calculateTotal(state[userId].items);
      localStorage.setItem(`cart_${userId}`, JSON.stringify(state[userId]));
    }
  }
},
    
    // Очистка всей корзины пользователя
    clearCart: (state, action: PayloadAction<string>) => {
      const userId = action.payload;
      if (userId) {
        delete state[userId];
        localStorage.removeItem(`cart_${userId}`);
      }
    },
    
    // Загрузка корзины пользователя
    loadCart: (state, action: PayloadAction<string>) => {
      const userId = action.payload;
      if (!userId) return;
      
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
          } else {
            state[userId] = { items: [], total: 0 };
          }
        } catch (error) {
          console.error('Failed to parse cart:', error);
          state[userId] = { items: [], total: 0 };
        }
      } else if (!state[userId]) {
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

export const { 
  addToCart, 
  removeFromCart, 
  updateProduct, 
  clearCart, 
  loadCart 
} = cartSlice.actions;
export default cartSlice.reducer;