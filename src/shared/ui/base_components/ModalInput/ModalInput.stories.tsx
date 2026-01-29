import type { Meta, StoryObj } from '@storybook/react';
import { ModalInput } from './ModalInput';

const meta: Meta<typeof ModalInput> = {
  title: 'UI/base_components/ModalInput',
  component: ModalInput,
  tags: ['autodocs'],
  argTypes: {
    initialText: {
      control: 'text',
      description: 'Начальный текст в инпуте',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalInput>;

export const Default: Story = {
  args: {
    initialText: '',
  },
};

export const WithInitialText: Story = {
  args: {
    initialText: 'Привет из Storybook!',
  },
};
