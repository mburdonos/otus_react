import React, { memo } from 'react';
import cn from 'clsx';
import type { AuthFormProps } from './types';
import { PasswordField } from './PasswordField/PasswordField';
import { EmailField } from './EmailField/EmailField';
import styles from './AuthForm.module.css'; // Импортируем CSS‑модуль

export const AuthForm = memo<AuthFormProps>(({ className, formManager, formElement, autoFocusElement, disabled }) => {
  const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange, submitForm } = formManager;

  return (
    <form
      ref={formElement}
      onSubmit={handleSubmit}
      className={cn(
        styles.root,           // Основные стили из модуля
        disabled && styles.disabled, // Условное применение класса для отключённого состояния
        className              // Дополнительные классы из пропсов
      )}
    >
      <EmailField
        onPressEnter={submitForm}
        autoFocusElement={autoFocusElement}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        errors={errors.email}
        submitCount={submitCount}
        touched={touched.email}
        disabled={disabled}
      />
      <PasswordField
        onPressEnter={submitForm}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        disabled={disabled}
      />
    </form>
  );
});

AuthForm.displayName = 'AuthForm';
