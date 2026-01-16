import type { Meta, StoryObj } from '@storybook/react';
import { CartButton } from './CartButton';


const meta: Meta<typeof CartButton> = {
  title: 'ui/online_store/CartButton',
  component: CartButton,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'Количество товара в корзине',
      defaultValue: 0,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CartButton>;

export const Empty: Story = {
  args: {
    count: 0,
  },
};

export const WithCount: Story = {
  args: {
    count: 3,
  },
};
