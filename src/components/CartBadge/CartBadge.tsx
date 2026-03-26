import React from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './CartBadge.module.css';

export const CartBadge: React.FC = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const itemCount = cartItems.length;

  if (itemCount === 0) return null;

  return (
    <span className={styles.badge}>
      +{itemCount}
    </span>
  );
};
