import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AuthForm } from './AuthForm';
import { Formik, Form } from 'formik';

// Моковые данные для тестирования
const mockFormManager = {
  values: {
    email: '',
    password: '',
  },
  touched: {
    email: false,
    password: false,
  },
  errors: {
    email: '',
    password: '',
  },
  submitCount: 0,
  handleBlur: (e: React.FocusEvent) => {
    console.log('Blur event:', e.target.name);
  },
  handleSubmit: (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  },
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Change event:', e.target.name, e.target.value);
  },
  submitForm: () => {
    console.log('Submit form via Enter');
  },
};

const meta: Meta<typeof AuthForm> = {
  title: 'Forms/AuthForm',
  component: AuthForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Отключает все поля формы',
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS‑классы',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AuthForm>;

// Базовый сценарий — пустая форма
export const Default: Story = {
  render: (args) => (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={() => {}}
    >
      {({ handleSubmit }) => (
        <AuthForm
          {...args}
          formManager={{
            ...mockFormManager,
            handleSubmit,
          }}
        />
      )}
    </Formik>
  ),
  args: {
    disabled: false,
  },
};

//Сценарий с заполненными полями
export const Filled: Story = {
  render: (args) => (
    <Formik
      initialValues={{
        email: 'user@example.com',
        password: 'securepassword123',
      }}
      onSubmit={() => {}}
    >
      {({ handleSubmit }) => (
        <AuthForm
          {...args}
          formManager={{
            ...mockFormManager,
            values: {
              email: 'user@example.com',
              password: 'securepassword123',
            },
            handleSubmit,
          }}
        />
      )}
    </Formik>
  ),
  args: {
    disabled: false,
  },
};

//Сценарий с ошибками валидации
export const WithErrors: Story = {
  render: (args) => (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={() => {}}
    >
      {({ handleSubmit }) => (
        <AuthForm
          {...args}
          formManager={{
            ...mockFormManager,
            errors: {
              email: 'Email обязателен для заполнения',
              password: 'Пароль должен содержать минимум 8 символов',
            },
            touched: {
              email: true,
              password: true,
            },
            submitCount: 1,
            handleSubmit,
          }}
        />
      )}
    </Formik>
  ),
  args: {
    disabled: false,
  },
};

//Сценарий с частично заполненными данными и одной ошибкой
export const PartialWithError: Story = {
  render: (args) => (
    <Formik
      initialValues={{ email: 'test@example.com', password: '' }}
      onSubmit={() => {}}
    >
      {({ handleSubmit }) => (
        <AuthForm
          {...args}
          formManager={{
            ...mockFormManager,
            values: {
              email: 'test@example.com',
              password: '',
            },
            errors: {
              password: 'Пароль обязателен для заполнения',
            },
            touched: {
              email: true,
              password: true,
            },
            submitCount: 1,
            handleSubmit,
          }}
        />
      )}
    </Formik>
  ),
  args: {
    disabled: false,
  },
};

//Отключённая форма
export const Disabled: Story = {
  render: (args) => (
    <Formik
      initialValues={{ email: 'user@example.com', password: 'password' }}
      onSubmit={() => {}}
    >
      {({ handleSubmit }) => (
        <AuthForm
          {...args}
          formManager={{
            ...mockFormManager,
            values: {
              email: 'user@example.com',
              password: 'password',
            },
            handleSubmit,
          }}
        />
      )}
    </Formik>
  ),
  args: {
    disabled: true,
  },
};

//Форма с дополнительными классами
export const WithCustomClass: Story = {
  render: (args) => (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={() => {}}
    >
      {({ handleSubmit }) => (
        <AuthForm
          {...args}
          formManager={{
            ...mockFormManager,
            handleSubmit,
          }}
        />
      )}
    </Formik>
  ),
  args: {
    disabled: false,
    className: 'custom-auth-form',
  },
};

//Интерактивный сценарий для тестирования
export const Interactive: Story = {
  render: (args) => (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        alert(`Form submitted with:\nEmail: ${values.email}\nPassword: ${values.password.length} characters`);
      }}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <div style={{ padding: '20px' }}>
          <AuthForm
            {...args}
            formManager={{
              values,
              touched: { email: true, password: true },
              errors: {},
              submitCount: 0,
              handleBlur: () => {},
              handleSubmit,
              handleChange: (e) => setFieldValue(e.target.name, e.target.value),
              submitForm: handleSubmit,
            }}
          />
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            <strong>Текущие значения:</strong>
            <br />
            Email: {values.email || 'не заполнен'}
            <br />
            Password: {values.password ? 'заполнен' : 'не заполнен'}
          </div>
        </div>
      )}
    </Formik>
  ),
  args: {
    disabled: false,
  },
};
