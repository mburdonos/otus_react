import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import type { FormikHandlers } from 'formik/dist/types';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import type { AuthFormProps } from '..';
import { FormItem } from '../../FormItem/FormItem';
import { getValidates } from '../../../../../utils/validation';
import styles from './EmailField.module.css'; // Импортируем CSS‑модуль

export type EmailFieldProps = Pick<AuthFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onPressEnter: () => void;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const EmailField = memo<EmailFieldProps>(
  ({ className, onChange, onBlur, onPressEnter, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    // Определяем дополнительный класс на основе статуса валидации
    const validationClass = validateStatus ? styles[validateStatus] : '';

    return (
      <FormItem
        className={cn(
          styles.root,           // Основные стили из модуля
          validationClass,         // Условный класс для статуса валидации
          className              // Дополнительные классы из пропсов
        )}
        title='Почта: '
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          onPressEnter={onPressEnter}
          data-cy="input"
          autoFocus
          type="email"
          name="email"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder='Введите название почты'
        />
      </FormItem>
    );
  }
);

EmailField.displayName = 'EmailField';
