import React from 'react';
import styles from './OperationDetail.module.css';

interface OperationDetailProps {
  title: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const OperationDetail: React.FC<OperationDetailProps> = ({
  title,
  category,
  description,
  price,
  imageUrl,
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageUrl}
        alt={title}
        className={styles.image}
      />
      <p className={styles.category}>{category}</p>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description}>{description}</div>
      <p className={styles.price}>₽{price.toLocaleString('ru-RU')}</p>
      <button
        type="button"
        className={styles.addToCart}
        aria-label="Добавить в корзину"
      >
        В корзину
      </button>
    </div>
  );
};

OperationDetail.displayName = 'OperationDetail';
