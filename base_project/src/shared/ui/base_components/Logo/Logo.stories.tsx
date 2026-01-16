import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'UI/base_components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Текст внутри логотипа (по умолчанию "LOGO")',
    },
    className: {
      control: 'text',
      description: 'Дополнительный класс для кастомной стилизации',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    text: 'MYBRAND',
  },
};

export const WithCustomText: Story = {
  args: {
    text: 'APP',
  },
};

export const Small: Story = {
  args: {
    text: 'SM',
    className: 'small-logo',
  },
  parameters: {
    css: `
      .small-logo {
        width: 40px;
        height: 40px;
        font-size: 0.8rem;
      }
    `,
  },
};

export const Large: Story = {
  args: {
    text: 'BIG',
    className: 'large-logo',
  },
  parameters: {
    css: `
      .large-logo {
        width: 80px;
        height: 80px;
        font-size: 1.2rem;
      }
    `,
  },
};
