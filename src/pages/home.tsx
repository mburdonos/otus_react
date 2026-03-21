// components/home.tsx
import React from 'react';
import styles from '../pages_css/home.module.css';

export function Home() {
  return (
    <div className={styles['home_block']}>
      <div className={styles['home-container']}>
        <h1>Добро пожаловать в наш магазин!</h1>
        <p className={styles['tagline']}>Качественные товары по выгодным ценам</p>
      </div>
      <div className={styles['home-content']}>
        <section className={styles['about-section']}>
          <h2>О нас</h2>
          <p>
            Мы — современный интернет‑магазин, предлагающий широкий ассортимент товаров
            для дома, работы и отдыха. Наша миссия — делать покупки удобными и
            выгодными для каждого клиента.
          </p>
        </section>

        <section className={styles['values-section']}>
          <h2>Наши преимущества</h2>
          <ul className={styles['advantages-list']}>
            <li>Широкий выбор товаров в наличии</li>
            <li>Гарантия качества на всю продукцию</li>
            <li>Быстрая доставка по всей стране</li>
            <li>Удобный возврат в течение 14 дней</li>
            <li>Профессиональная поддержка 24/7</li>
          </ul>
        </section>

        <section className={styles['call-to-action']}>
          <h2>Начните покупки прямо сейчас!</h2>
          <p>
            Ознакомьтесь с нашим каталогом и найдите то, что нужно именно вам.
            У нас вы найдёте товары на любой вкус и бюджет.
          </p>
          <button className={styles['cta-button']}>Перейти в каталог</button>
        </section>
      </div>
    </div>
  );
}
