// src/components/ProductOperationForm/ProductOperationForm.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductOperationForm } from './ProductOperationForm'; // Обычный импорт компонента
import type { ProductOperationData } from './ProductOperationForm'; // Type‑only импорт типа

const meta: Meta<typeof ProductOperationForm> = {
  title: 'Forms/ProductOperationForm',
  component: ProductOperationForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isEditing: {
      control: 'boolean',
      description: 'Режим редактирования (иначе — создание)',
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS‑классы',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductOperationForm>;

// Остальные stories остаются без изменений
export const CreateProduct: Story = {
  args: {
    isEditing: false,
    onSubmit: (data) => console.log('Form submitted:', data),
  },
};

// ... остальные stories
