import type { Meta, StoryObj } from '@storybook/react';
import { OperationDetail } from './OperationDetail';

const meta: Meta<typeof OperationDetail> = {
  title: 'ui/online_store/OperationDetail',
  component: OperationDetail,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Название товара/операции',
    },
    category: {
      control: 'text',
      description: 'Категория товара',
    },
    description: {
      control: 'text',
      description: 'Полное описание товара',
    },
    price: {
      control: 'number',
      description: 'Цена в рублях',
    },
    imageUrl: {
      control: 'text',
      description: 'URL изображения',
    },
  },
};

export default meta;

type Story = StoryObj<typeof OperationDetail>;

export const Default: Story = {
  args: {
    title: 'Смартфон Apple iPhone 15 Pro Max',
    category: 'Смартфоны',
    description:
      'Флагманский смартфон с титановым корпусом, дисплеем Super Retina XDR и камерой 48 МП. ' +
      'Процессор A17 Pro, 6 ГБ ОЗУ, 256 ГБ памяти. Поддержка USB-C, Dynamic Island, iOS 17. ' +
      'Время работы батареи до 29 часов. Доступен в цветах: Natural Titanium, White Titanium, Blue Titanium.',
    price: 199990,
    imageUrl: 'iphone_15.jpg',
  },
};

export const NoImage: Story = {
  args: {
    title: 'Курс по React и TypeScript',
    category: 'Онлайн-образование',
    description:
      'Полный курс по разработке на React с использованием TypeScript. ' +
      'Изучите компоненты, хуки, маршрутизацию, работу с API и тестирование. ' +
      '30 видеоуроков, домашние задания, поддержка наставника. Доступ навсегда.',
    price: 9990,
    imageUrl: '',
  },
};

export const LowPrice: Story = {
  args: {
    title: 'Блокнот A5 на пружине',
    category: 'Офисные товары',
    description:
      'Удобный блокнот формата A5 с белой бумагой и твёрдой обложкой. ' +
      '100 листов, пружинный механизм, подходит для записей и эскизов.',
    price: 199,
    imageUrl: 'note.jpg',
  },
};
