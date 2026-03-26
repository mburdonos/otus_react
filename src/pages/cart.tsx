import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart } from '../features/cart/cartSlice';
import type { Product } from '../features/cart/cartSlice';
import styles from '../pages_css/сart.module.css';

export function Cart() {
  const cartItems = useAppSelector(state => state.cart.items);
  const dispatch = useAppDispatch();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={styles.cart}>
      <h2 className={styles.cartTitle}>Корзина</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>Корзина пуста</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map(item => (
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
};
