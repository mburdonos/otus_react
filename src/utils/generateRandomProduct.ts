import type { ProductCardProps } from '../shared/ui/online_store/ProductCard/ProductCard';

export const generateRandomProduct = (): ProductCardProps => {
  const titles = [
    'Смартфон X10',
    'Ноутбук ProBook',
    'Наушники Wireless',
    'Планшет AirTab',
    'Умные часы Watch+',
  ];
  
  const descriptions = [
    'Современный гаджет с мощным процессором и OLED‑дисплеем.',
    'Производительный ноутбук для работы и творчества.',
    'Беспроводные наушники с активным шумоподавлением.',
    'Лёгкий планшет с высоким разрешением экрана.',
    'Часы с мониторингом здоровья и GPS.',
  ];

  const images = [
    '/iphone_15.jpg',
    '/lenovo.png',
    '/not_found.jpg',
    '/note.jpg',
    '/samsung_a23.jpeg',
    '/vite.svg',
  ]

  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
  const randomPrice = Math.floor(Math.random() * 50000) + 5000;
  const randomImages = images[Math.floor(Math.random() * images.length)];
  const randomId = Date.now() + Math.floor(Math.random() * 3);

  return {
    id: randomId,
    title: randomTitle,
    description: randomDescription,
    price: randomPrice,
    imageUrl: randomImages,
  };
};
