import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'ui/online_store/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
        id: {
      control: 'text',
      description: 'Идентификатор товара',
    },
    title: {
      control: 'text',
      description: 'Название товара',
    },
    description: {
      control: 'text',
      description: 'Описание товара (обрезается до 3 строк)',
    },
    price: {
      control: 'number',
      description: 'Цена в рублях',
    },
    imageUrl: {
      control: 'text',
      description: 'URL изображения товара',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    id: 1,
    title: 'Ноутбук Lenovo IdeaPad',
    description:
      'Мощный ноутбук для работы и учёбы. Процессор Intel Core i5, 8 ГБ ОЗУ, SSD 256 ГБ. Лёгкий и компактный.',
    price: 49990,
    imageUrl: '/lenovo.png',
  },
};

export const WithLongDescription: Story = {
  args: {
    id: 2,
    title: 'Смартфон Samsung Galaxy S23',
    description:
      'Флагманский смартфон с камерой 50 МП, процессором Snapdragon 8 Gen 2, 8 ГБ ОЗУ и 256 ГБ памяти. Поддержка 5G, защита IP68, экран 120 Гц. Идеально для фото и игр. Долговечная батарея, быстрая зарядка. Стильный дизайн, несколько цветовых вариантов.',
    price: 69990,
    imageUrl: 'samsung_a23.jpeg',
  },
};

export const NoImage: Story = {
  args: {
    id: 3,
    title: 'Книга "JavaScript для начинающих"',
    description: 'Подробное руководство по JavaScript для новичков. От основ до продвинутых тем.',
    price: 1290,
    imageUrl: '', // Пустой URL — можно обработать в компоненте
  },
};
