import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ShortOperation from './ShortOperation';
import './ShortOperation.module.css';

type Story = StoryObj<typeof ShortOperation>;

export default {
  title: 'UI/income_expenses/ShortOperation',
  component: ShortOperation,
  argTypes: {
    sum_operation: {
      control: 'number',
      description: 'Сумма операции',
    },
    category: {
      control: 'text',
      description: 'Категория операции',
    },
    description: {
      control: 'text',
      description: 'Описание операции',
    },
    size: {
      control: 'radio',
      options: ['small', 'big'],
      description: 'Размер компонента',
    },
    length_description: {
      control: 'range',
      min: 10,
      max: 100,
      step: 5,
      description: 'Максимальная длина описания (с обрезкой)',
    },
  },
} as Meta<typeof ShortOperation>;

export const Default: Story = {
  args: {
    sum_operation: 1500,
    category: 'Продукты',
    description: 'Покупка в супермаркете на сумму 1500 рублей',
    size: 'small',
    length_description: 30,
  },
};

export const BigSize: Story = {
  args: {
    ...Default.args,
    size: 'big',
  },
};

export const LongDescription: Story = {
  args: {
    ...Default.args,
    description:
      'Очень длинное описание, которое будет обрезано до указанной длины с добавлением многоточия...',
    length_description: 20,
  },
};

export const EmptyValues: Story = {
  args: {
    sum_operation: 0,
    category: '',
    description: '',
    size: 'small',
    length_description: 30,
  },
};
