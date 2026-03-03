import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import type { FormikHandlers } from 'formik/dist/types';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../FormItem/FormItem';
import { getValidates } from '../../../../../utils/validation';
import type { ProfileFormProps } from '../types';
import styles from './NameField.module.css'; // Импортируем CSS‑модуль

export type NameFieldProps = Pick<ProfileFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched?: boolean;
  errors?: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const NameField = memo<NameFieldProps>(
  ({ className, onChange, onBlur, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    // Определяем дополнительный класс на основе статуса валидации
    const validationClass = validateStatus ? styles[validateStatus] : '';

    return (
      <FormItem
        className={cn(
          styles.root,      // Основные стили из модуля
          validationClass,    // Условный класс для статуса валидации
          className         // Дополнительные классы из пропсов
        )}
        title='Имя: '
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus={false}
          name="name"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`Введите имя пользователя`)}
        />
      </FormItem>
    );
  }
);

NameField.displayName = 'NameField';
