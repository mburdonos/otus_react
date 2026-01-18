import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <img
        src={imageUrl ? imageUrl : 'not_found.jpg'}
        alt={title}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>₽{price.toLocaleString()}</p>
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

ProductCard.displayName = 'ProductCard';
