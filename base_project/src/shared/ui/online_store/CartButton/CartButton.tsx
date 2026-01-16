import React from 'react';
import styles from './CartButton.module.css';

interface CartButtonProps {
  count: number;
}

export const CartButton: React.FC<CartButtonProps> = ({ count }) => {
  if (count === 0) {
    return (
      <button
        type="button"
        className={styles.cartButton + ' ' + styles.addButton}
        aria-label="Добавить в корзину"
      >
        В корзину
      </button>
    );
  }

  return (
    <div className={styles.buttonGroup}>
      <button
        type="button"
        className={styles.cartButton + ' ' + styles.minusButton}
        aria-label="Уменьшить количество"
      >
        −
      </button>
      <input
        type="number"
        value={count}
        readOnly
        className={styles.inputField}
        aria-label="Количество товара"
      />
      <button
        type="button"
        className={styles.cartButton + ' ' + styles.plusButton}
        aria-label="Увеличить количество"
      >
        +
      </button>
    </div>
  );
};

CartButton.displayName = 'CartButton';
