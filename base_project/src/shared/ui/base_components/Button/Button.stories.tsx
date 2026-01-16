import React from 'react';
import Button from './Button';

// Метаданные истории
export default {
  title: 'ui/base_components/Button',           // Путь в дереве Storybook
  component: Button,           // Компонент для демонстрации
  argTypes: {                 // Типы и контролы для пропсов
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

// Базовая история (стандартная кнопка)
export const Primary = () => <Button>Primary</Button>;

// Кнопка с вариантом 'secondary'
export const Secondary = () => (
  <Button variant="secondary">Secondary</Button>
);

// Кнопка с вариантом 'danger'
export const Danger = () => <Button variant="danger">Danger</Button>;

// Блокированная кнопка
export const Disabled = () => (
  <Button disabled>Disabled</Button>
);

// Кнопка с обработчиком клика
export const WithClick = () => (
  <Button onClick={() => alert('Clicked!')}>Click me</Button>
);
