import React from 'react';
import type { Meta } from '@storybook/react';
import AccountService from '../../../services/account/account.service';
import { UserType, ProductType } from '../../../types/account_types';
import styles from './accountService.module.css';

const accountService = new AccountService();

export default {
  title: 'UI/services/AccountService',
  parameters: { layout: 'centered' }
} as Meta;

// Упрощённый калькулятор скидок
export const InteractiveCalculator = () => {
  const [user, setUser] = React.useState<UserType>(UserType.Standard);
  const [product, setProduct] = React.useState<ProductType>(ProductType.Car);

  const base = accountService.getDiscountForUser(user);
  const productDisc = accountService.getProductDiscountForUser(user, product);
  const total = accountService.calculateTotalDiscount(user, product);

  return (
    <div className={styles.calculator}>
      <h3 className={styles.title}>Калькулятор скидок</h3>

      <div style={{ marginBottom: '15px' }}>
        <label className={styles.label}>Пользователь:</label>
        <select value={user} onChange={e => setUser(e.target.value as UserType)} className={styles.select}>
          {Object.values(UserType).map(u => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label className={styles.label}>Товар:</label>
        <select value={product} onChange={e => setProduct(e.target.value as ProductType)} className={styles.select}>
          {Object.values(ProductType).map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className={styles.result}>
        <p>Базовая: <strong>{base * 100}%</strong></p>
        <p>Специфичная: <strong>{productDisc * 100}%</strong></p>
        <p><strong>Итого: {total * 100}%</strong></p>
      </div>
    </div>
  );
};
