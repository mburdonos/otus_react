// components/home.tsx
import React from 'react';

export function Home () {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Добро пожаловать в наш магазин!</h1>
        <p className="tagline">Качественные товары по выгодным ценам</p>
      </header>

      <main className="home-content">
        <section className="about-section">
          <h2>О нас</h2>
          <p>
            Мы — современный интернет‑магазин, предлагающий широкий ассортимент товаров
            для дома, работы и отдыха. Наша миссия — делать покупки удобными и
            выгодными для каждого клиента.
          </p>
        </section>

        <section className="values-section">
          <h2>Наши преимущества</h2>
          <ul className="advantages-list">
            <li>Широкий выбор товаров в наличии</li>
            <li>Гарантия качества на всю продукцию</li>
            <li>Быстрая доставка по всей стране</li>
            <li>Удобный возврат в течение 14 дней</li>
            <li>Профессиональная поддержка 24/7</li>
          </ul>
        </section>

        <section className="call-to-action">
          <h2>Начните покупки прямо сейчас!</h2>
          <p>
            Ознакомьтесь с нашим каталогом и найдите то, что нужно именно вам.
            У нас вы найдёте товары на любой вкус и бюджет.
          </p>
          <button className="cta-button">Перейти в каталог</button>
        </section>
      </main>

      <footer className="home-footer">
        <p>
          Остались вопросы? Свяжитесь с нами:
          {' '}
          <a href="mailto:info@example.com">info@example.com</a>
        </p>
      </footer>
    </div>
  );
};
