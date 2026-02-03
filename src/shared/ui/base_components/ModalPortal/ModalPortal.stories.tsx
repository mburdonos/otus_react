import type { Meta, StoryObj } from '@storybook/react';
import { ModalPortal } from './ModalPortal';

const meta: Meta<typeof ModalPortal> = {
  title: 'UI/base_components/ModalPortal',
  component: ModalPortal,
  tags: ['autodocs'],
  argTypes: {
    initialText: {
      control: 'text',
      description: 'Начальный текст в инпуте',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalPortal>;

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
