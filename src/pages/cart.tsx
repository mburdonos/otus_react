// components/Cart.tsx
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, loadCart } from '../features/cart/cartSlice';
import type { Product } from '../features/cart/cartSlice';
import styles from '../pages_css/сart.module.css'

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

  const handleRemoveFromCart = (productId: number) => {
    if (user?.id) {
      dispatch(removeFromCart({ userId: user.id, productId }));
    }
  };

  // Если пользователь не авторизован
  if (!isAuthenticated) {
    return (
      <div className={styles.cart}>
        <h2 className={styles.cartTitle}>Корзина</h2>
        <p className={styles.emptyCart}>Войдите в систему, чтобы просмотреть корзину</p>
      </div>
    );
  }

  // Проверка, что cartItems существует и является массивом
  if (!cartItems || !Array.isArray(cartItems)) {
    return (
      <div className={styles.cart}>
        <h2 className={styles.cartTitle}>Корзина</h2>
        <p className={styles.emptyCart}>Загрузка корзины...</p>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h2 className={styles.cartTitle}>Корзина</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>Корзина пуста</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className={styles.removeBtn}
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
          <div className={styles.cartTotal}>
            <strong className={styles.totalAmount}>
              Итого: ${totalPrice.toFixed(2)}
            </strong>
          </div>
        </>
      )}
    </div>
  );
}