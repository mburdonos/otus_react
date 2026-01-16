import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'UI/base_components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Видимость модального окна',
    },
    children: {
      control: 'text',
      description: 'Содержимое модального окна',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    visible: true,
    children: 'Это содержимое модального окна.',
  },
};

export const Hidden: Story = {
  args: {
    visible: false,
    children: 'Это содержимое не будет видно, так как visible=false.',
  },
};

export const WithLongContent: Story = {
  args: {
    visible: true,
    children: (
      <div>
        <p>Длинный текст внутри модального окна.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
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
