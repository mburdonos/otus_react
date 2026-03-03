import React, { memo } from 'react';
import cn from 'clsx';
import { Form } from 'antd';
import { Title } from '../Title';
import styles from './FormItem.module.css'; // Импортируем CSS‑модуль

export type Help = null | React.ReactNode;
export type ValidateStatus = 'error' | '';

export type FormItemProps = {
  className?: string;
  title: React.ReactNode | React.ReactNode[];
  children: React.ReactNode | React.ReactNode[];
  validateStatus: ValidateStatus;
  help: Help;
  required?: boolean;
};

export const FormItem = memo<FormItemProps>(({ validateStatus, required, help, className, title, children }) => {
  // Определяем дополнительный класс на основе статуса валидации
  const validationClass = validateStatus ? styles[validateStatus] : '';

  return (
    <div
      className={cn(
        styles.root,           // Основные стили из модуля
        validationClass,         // Условный класс для статуса валидации
        className              // Дополнительные классы из пропсов
      )}
    >
      <Title required={required}>{title}</Title>
      <Form.Item validateStatus={validateStatus} help={help}>
        {children}
      </Form.Item>
    </div>
  );
});

FormItem.displayName = 'FormItem';
