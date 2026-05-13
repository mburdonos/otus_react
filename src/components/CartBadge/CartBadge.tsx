// components/CartBadge.tsx (с иконкой корзины)
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Link } from 'react-router-dom';
import styles from './CartBadge.module.css';

export function CartBadge() {
      // TODO раскоментировать когда будет готова авторизация
  //   const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  // TODO удалить после реализации авторизации
  const user = {
  id: "1",
  email: "test@gmail.com",
  name: "test",
  commandId: "bmp"
};
const isAuthenticated = true;


  const allCartItems = useAppSelector(state => state.cart);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Безопасное получение количества товаров в корзине
    if (isAuthenticated && user?.id) {
      const userCart = allCartItems[user.id];
      if (userCart && userCart.items && Array.isArray(userCart.items)) {
        setItemCount(userCart.items.length);
      } else {
        setItemCount(0);
      }
    } else {
      setItemCount(0);
    }
  }, [isAuthenticated, user?.id, allCartItems]);

  // Если пользователь не авторизован, показываем только иконку без бейджа
  if (!isAuthenticated) {
    return (
      <Link to="/login" className={styles.cartLink}>
        <span className={styles.cartIcon}>🛒</span>
      </Link>
    );
  }

  return (
    <Link to="/cart" className={styles.cartLink}>
      <div className={styles.cartWrapper}>
        <span className={styles.cartIcon}>🛒</span>
        {itemCount > 0 && (
          <span className={styles.badgeCount}>{itemCount}</span>
        )}
      </div>
    </Link>
  );
}