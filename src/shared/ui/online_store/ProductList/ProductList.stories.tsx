import type { Meta, StoryObj } from '@storybook/react';
import ProductList from './ProductList';
import { Product } from './types';

type Story = StoryObj<typeof ProductList>;

const meta: Meta<typeof ProductList> = {
  title: 'UI/online_store/ProductList',
  component: ProductList,
  tags: ['autodocs'],
  argTypes: {
    products: {
      control: { type: 'object' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    products: [
      {
        id: '1',
        name: 'Ноутбук Lenovo IdeaPad',
        price: 49990,
        description: '15.6", Intel Core i5, 8GB RAM, 256GB SSD',
        inStock: true,
      },
      {
        id: '2',
        name: 'Мышь Logitech G502',
        price: 3990,
        description: 'Игровая, 11 кнопок, RGB-подсветка',
        inStock: false,
      },
      {
        id: '3',
        name: 'Клавиатура Razer BlackWidow',
        price: 8990,
        inStock: true,
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    products: [],
  },
};
