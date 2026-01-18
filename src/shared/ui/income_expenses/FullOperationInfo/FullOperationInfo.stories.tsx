import type { Meta, StoryObj } from '@storybook/react';
import FullOperationInfo from './FullOperationInfo';
import './FullOperationInfo.module.css';

type Story = StoryObj<typeof FullOperationInfo>;

export default {
  title: 'UI/income_expenses/FullOperationInfo',
  component: FullOperationInfo,
  tags: ['autodocs'],
  argTypes: {
    sum_operation: {
      control: 'number',
      description: 'Сумма операции (число)',
      defaultValue: 1500,
    },
    category: { 
      control: 'text',
      description: 'Категория операции',
      defaultValue: 'Продукты',
    },
    description: {
      control: 'text',
      description: 'Подробное описание операции',
      defaultValue: 'Покупка в супермаркете',
    },
    date_time: {
      control: {
        type: 'date',
      },
      description: 'Дата и время операции',
      defaultValue: new Date('2026-01-15T10:30:00'),
    },
  },
} as Meta<typeof FullOperationInfo>;

export const Default: Story = {
  args: {
    sum_operation: 2500,
    category: 'Развлечения',
    description: 'Билет в кино и попкорн',
    date_time: new Date('2026-01-14T19:45:00'),
  },
};

export const WithLongDescription: Story = {
  args: {
    ...Default.args,
    description:
      'Очень подробное описание операции, которое занимает несколько строк и демонстрирует, как компонент обрабатывает длинный текст.',
  },
};

export const MinimalValues: Story = {
  args: {
    sum_operation: 0,
    category: '',
    description: '',
    date_time: new Date(),
  },
};

export const FutureDate: Story = {
  args: {
    ...Default.args,
    date_time: new Date('2026-12-31T23:59:00'),
  },
};
