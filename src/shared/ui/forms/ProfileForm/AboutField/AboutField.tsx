import React, { memo } from 'react';
import cn from 'clsx';
import Input from 'antd/lib/input';
import type { FormikHandlers } from 'formik/dist/types';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../FormItem/FormItem';
import { getValidates } from '../../../../../utils/validation';
import type { ProfileFormProps } from '../types';
import styles from './AboutField.module.css'; // Импортируем CSS‑модуль

export type AboutFieldProps = Pick<ProfileFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched?: boolean;
  errors?: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const AboutField = memo<AboutFieldProps>(
  ({ className, onChange, onBlur, touched, value, errors, disabled, submitCount }) => {
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
        title='Описание: '
        validateStatus={validateStatus}
        help={help}
      >
        <Input.TextArea
          disabled={disabled}
          name="about"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`Введите описание`)}
        />
      </FormItem>
    );
  }
);

AboutField.displayName = 'AboutField';
