import React from 'react';
import styles from '../pages_css/ProtectedPage.module.css';

export function ProtectedPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Защищённая страница</h1>
      <div className={styles.content}>
        <p>Вы успешно авторизованы!</p>
        <p>Здесь отображается конфиденциальная информация.</p>
      </div>
    </div>
  );
};
