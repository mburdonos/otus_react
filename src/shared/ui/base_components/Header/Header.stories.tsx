import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'UI/base_components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок страницы, отображается справа от логотипа',
    },
    className: {
      control: 'text',
      description: 'Дополнительный класс для кастомизации',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'Главная страница',
  },
};

export const WithLongTitle: Story = {
  args: {
    title: 'Очень длинный заголовок страницы, который может переноситься',
  },
};

export const Compact: Story = {
  args: {
    title: 'Кратко',
    className: 'compact-header',
  },
  parameters: {
    css: `
      .compact-header {
        padding: 8px 16px;
        gap: 10px;
      }
    `,
  },
};
