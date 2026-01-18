import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'UI/base_components/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок страницы, передаётся в компонент Header',
    },
    children: {
      control: 'text',
      description: 'Основной контент страницы',
    },
    className: {
      control: 'text',
      description: 'Дополнительный класс для кастомизации',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    title: 'Главная страница',
    children: (
      <div>
        <h2>Добро пожаловать!</h2>
        <p>
          Это основной контент страницы. Здесь может быть текст, изображения, 
          формы и другие компоненты.
        </p>
      </div>
    ),
  },
};

export const WithLongContent: Story = {
  args: {
    title: 'Статья',
    children: (
      <div>
        <h2>Длинная статья</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li>Пункт списка 1</li>
          <li>Пункт списка 2</li>
          <li>Пункт списка 3</li>
        </ul>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    title: '',
    children: <p>Пустой контент.</p>,
  },
};
