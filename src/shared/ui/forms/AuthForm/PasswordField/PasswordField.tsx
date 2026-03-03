import React, { memo } from 'react';
import cn from 'clsx';
import Input from 'antd/lib/input';
import type { FormikHandlers } from 'formik/dist/types';
import { LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import type { AuthFormProps } from '..';
import { FormItem } from '../../FormItem/FormItem';
import { getValidates } from '../../../../../utils/validation';
import styles from './PasswordField.module.css'; // Импортируем CSS‑модуль

export type PasswordFieldProps = Pick<AuthFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onPressEnter: () => void;
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <LockOutlined className="site-form-item-icon" />;

export const PasswordField = memo<PasswordFieldProps>(
  ({ className, onChange, onBlur, onPressEnter, touched, value, errors, disabled, submitCount }) => {
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
        title='Пароль: '
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input.Password
          prefix={prefix}
          onPressEnter={onPressEnter}
          disabled={disabled}
          data-cy="input"
          name="password"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder='Введите пароль'
        />
      </FormItem>
    );
  }
);

PasswordField.displayName = 'PasswordField';
