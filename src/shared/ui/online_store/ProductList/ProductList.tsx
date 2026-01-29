import React from 'react';
import styles from './ProductList.module.css';
import { Product } from './types';

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return <p className={styles.noItems}>Нет товаров для отображения</p>;
  }

  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <li key={product.id} className={styles.item}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.price}>₽{product.price.toFixed(2)}</p>
          {product.description && (
            <p className={styles.description}>{product.description}</p>
          )}
          <p
            className={
              product.inStock
                ? styles.inStock
                : styles.outOfStock
            }
          >
            {product.inStock ? 'В наличии' : 'Нет в наличии'}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
