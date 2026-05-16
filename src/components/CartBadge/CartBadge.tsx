// components/CartBadge.tsx (с иконкой корзины)
import React, { useEffect, useState } from 'react';
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
      } else {
        setItemCount(0);
      }
    } else {
      setItemCount(0);
    }
  }, [isAuthenticated, user?.id, allCartItems]);

  if (!isAuthenticated) {
    return (
      <Link to="/login" className={styles.cartLink}>
      </Link>
    );
  }

  return (
    <Link to="/cart" className={styles.cartLink}>
      <div className={styles.cartWrapper}>
        {itemCount > 0 && (
          <span className={styles.badgeCount}>{itemCount}</span>
        )}
      </div>
    </Link>
  );
}