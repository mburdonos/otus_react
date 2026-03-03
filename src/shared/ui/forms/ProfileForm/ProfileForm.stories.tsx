// src/components/ProfileForm/ProfileForm.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProfileForm } from './ProfileForm';
import type { ProfileFormProps } from './types';
import type { FormikContextType } from 'formik';

// Макет formManager для Storybook
const mockFormManager: FormikContextType<{ name: string; about: string }> = {
  values: {
    name: 'Иван Иванов',
    about: 'Разработчик с 5‑летним опытом',
  },
  touched: {
    name: false,
    about: false,
  },
  errors: {
    name: '',
    about: '',
  },
  submitCount: 0,
  isSubmitting: false,
  isValidating: false,
  handleBlur: (event?: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event) console.log('Blur event:', event.target.name);
  },
  handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
      console.log('Form submitted');
    }
  },
handleChange: (event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  if (event) {
    const { name, value } = event.target;
    console.log('Change event:', name, value);
    // Обновляем values в макете
    mockFormManager.values = {
      ...mockFormManager.values,
      [name]: value
    };
  }
},
  setFieldValue: async (field: string, value: any) => {
    console.log(`Setting field ${field} to ${value}`);
  },
  setTouched: async (fields: any) => {
    console.log('Setting touched fields:', fields);
  },
  resetForm: async () => {
    console.log('Resetting form');
  },
  validateForm: async (values?: { name: string; about: string }) => {
    console.log('Validating form with values:', values);
    return {};
  },
  setErrors: async (errors: any) => {
    console.log('Setting errors:', errors);
  },
  setStatus: async (status: any) => {
    console.log('Setting status:', status);
  },
  setValues: async (
    values: React.SetStateAction<{ name: string; about: string }>,
    shouldValidate?: boolean
  ) => {
    let newValues: { name: string; about: string };
    if (typeof values === 'function') {
      newValues = values(mockFormManager.values);
    } else {
      newValues = values;
    }
    console.log('Setting values:', newValues, 'shouldValidate:', shouldValidate);
  },
  setFieldError: async (field: string, message: string | undefined) => {
    console.log(`Setting error for ${field}: ${message}`);
  },
  setFieldTouched: async (field: string, isTouched?: boolean, shouldValidate?: boolean) => {
    console.log(`Setting touched for ${field}: ${isTouched}, shouldValidate: ${shouldValidate}`);
  },
  submitForm: async () => {
    console.log('Submitting form programmatically');
  },
  validateField: async (field: string) => {
    console.log('Validating field:', field);
  },
  setSubmitting: async (isSubmitting: boolean) => {
    console.log('Setting submitting state:', isSubmitting);
  },
  setFormikState: (
    f: any,
    cb?: (() => void) | undefined
  ) => {
    console.log('Updating formik state:', f, 'callback:', cb);
    if (cb) cb();
  },
};

const meta: Meta<typeof ProfileForm> = {
  title: 'UI/forms/ProfileForm',
  component: ProfileForm,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Отключает все поля формы',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileForm>;

// Сценарий 1: Форма с заполненными полями
export const Filled: Story = {
  args: {
    formManager: mockFormManager,
  },
};

// Сценарий 2: Форма с ошибками валидации
export const WithErrors: Story = {
  args: {
    formManager: {
      ...mockFormManager,
      values: {
        name: '',
        about: ''
      },
      errors: {
        name: 'Имя обязательно для заполнения',
        about: 'Описание слишком короткое',
      },
      touched: {
        name: true,
        about: true,
      },
    },
  },
};

// Сценарий 3: Отключённая форма
export const Disabled: Story = {
  args: {
    formManager: mockFormManager,
    disabled: true,
  },
};
