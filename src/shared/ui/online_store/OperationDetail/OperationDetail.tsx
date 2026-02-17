import React from 'react';
import styles from './OperationDetail.module.css';

interface OperationDetailProps {
  title: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
  discount: boolean;
}

export const OperationDetail: React.FC<OperationDetailProps> = ({
  title,
  category,
  description,
  price,
  imageUrl,
  discount = false
}) => {
  price = discount ? price * 0.9 : price
  return (
    <div className={styles.container}>
      <img
        src={imageUrl ? imageUrl : 'not_found.jpg'}
        alt={title}
        className={styles.image}
      />
      <p className={styles.category}>{category}</p>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description}>{description}</div>
      <p className={styles.price}>₽{discount ? (<><del>{price.toLocaleString('ru-RU')}</del><div>₽{(price*0.9).toLocaleString('ru-RU')}</div></>) : price.toLocaleString('ru-RU')}</p>
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
