// src/components/ProfileForm/ProfileForm.tsx
import React, { memo } from 'react';
import cn from 'clsx';
import type { ProfileFormProps } from './types.ts';
import { NameField } from './NameField';
import { AboutField } from './AboutField';
import styles from './ProfileForm.module.css';

export const ProfileForm = memo<ProfileFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;

    return (
      <form
        ref={formElement}
        onSubmit={handleSubmit}
        className={cn(
          styles.root,
          disabled && styles.disabled,
          className
        )}
      >
        <NameField
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          errors={errors.name}
          submitCount={submitCount}
          touched={touched.name}
          disabled={disabled}
        />
        <AboutField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.about}
          errors={errors.about}
          submitCount={submitCount}
          touched={touched.about}
          disabled={disabled}
        />
      </form>
    );
  }
);

ProfileForm.displayName = 'ProfileForm';
