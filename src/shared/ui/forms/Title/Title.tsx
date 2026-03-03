import React, { FC } from 'react';
import cn from 'clsx';
import styles from './Title.module.css'; // Импортируем CSS‑модуль

export type TitleProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactElement | React.ReactNode;
  required?: boolean;
};

export const Title: FC<TitleProps> = ({ className, required, ...props }) => (
  <div
    {...props}
    className={cn(
      styles.root,           // Основные стили из модуля
      required && styles.required, // Условное применение класса для обязательного поля
      className              // Дополнительные классы из пропсов
    )}
  />
);

Title.displayName = 'Title';
