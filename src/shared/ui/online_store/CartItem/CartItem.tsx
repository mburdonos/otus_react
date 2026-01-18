import React from 'react';
import styles from './CartItem.module.css';

interface CartItemProps {
  title: string;
  price: number;
  imageUrl: string;
  onRemove: () => void; // Обработчик кнопки удаления
}

export const CartItem: React.FC<CartItemProps> = ({
  title,
  price,
  imageUrl,
  onRemove,
}) => {
  return (
    <div className={styles.item}>
      <img
        src={imageUrl ? imageUrl : 'not_found.jpg'}
        alt={title}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>₽{price.toLocaleString()}</p>
      </div>
      <button
        type="button"
        className={styles.removeButton}
        onClick={onRemove}
        aria-label="Удалить товар из корзины"
      >
        ×
      </button>
    </div>
  );
};

CartItem.displayName = 'CartItem';
