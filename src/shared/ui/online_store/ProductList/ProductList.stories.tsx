import React from 'react';
import ProductList from './ProductList';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'UI/online_store/ProductList',
  component: ProductList,
  args: {
    itemsPerLoad: 3,
  },
} as Meta<typeof ProductList>;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
args : {
  initialProducts: [
    {
      id: 1,
      title: 'Тестовый товар 1',
      description: 'Описание тестового товара 1',
      price: 1000,
      imageUrl: '/iphone_15.jpg',
    },
    {
      id: 2,
      title: 'Тестовый товар 2',
      description: 'Описание тестового товара 2',
      price: 2000,
      imageUrl: '/lenovo.png',
    },
  ],
}
};

export const Empty: Story = {
args : {
  initialProducts: [],
}
};
