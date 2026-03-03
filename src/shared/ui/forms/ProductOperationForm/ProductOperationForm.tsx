// src/components/ProductOperationForm/ProductOperationForm.tsx
import React, { memo } from 'react';
import cn from 'clsx';
import { Input, Select, Checkbox, Button, Form, message } from 'antd';
import { InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './ProductOperationForm.module.css';

const { Option } = Select;

export type ProductOperationFormProps = {
  className?: string;
  initialValues?: Partial<ProductOperationData>;
  isEditing?: boolean;
  onSubmit: (data: ProductOperationData) => void;
  onCancel?: () => void;
};

export interface ProductOperationData {
  name: string;
  type: 'product' | 'operation';
  category: string;
  price: number;
  quantity: number;
  isActive: boolean;
  description?: string;
}

export const ProductOperationForm = memo<ProductOperationFormProps>(
  ({ className, initialValues, isEditing = false, onSubmit, onCancel }) => {
    const { t } = useTranslation();

    const handleSubmit = (values: ProductOperationData) => {
      onSubmit(values);
      message.success(
        isEditing
          ? 'Обновление'
          : 'Создание')
    };

    return (
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={initialValues}
        className={cn(styles.root, className)}
      >
        <Form.Item
          name="name"
          label='Название'
          rules={[{ required: true, message: 'Название с ошибкой' }]}
        >
          <Input
            placeholder='Введите название'
          />
        </Form.Item>

        <Form.Item
          name="type"
          label='Тип продукта'
          rules={[{ required: true }]}
        >
          <Select placeholder='Введите тип продукта'>
            <Option value="product">
              Продукт
            </Option>
            <Option value="operation">
              Услуга
            </Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="category"
          label='Категория'
          rules={[{ required: true }]}
        >
          <Select placeholder='Введите категорию'>
            <Option value="electronics">
              Электоринка
            </Option>
            <Option value="services">
              Услуги
            </Option>
            <Option value="clothing">
              Одежда
            </Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="price"
          label='Стоимость'
          rules={[
            { required: true },
            { type: 'number', min: 0, message: 'Стоимость введена неправильно' }
          ]}
        >
          <InputNumber
            placeholder='Стоимость'
          />
        </Form.Item>

        <Form.Item
          name="quantity"
          label='Количество'
          rules={[
            { required: true },
            { type: 'number', min: 0 }
          ]}
        >
          <InputNumber
            placeholder='Введите количество'
          />
        </Form.Item>

        <Form.Item
          name="description"
          label='Описание'
        >
          <Input.TextArea
            rows={3}
            placeholder='Описание'
          />
        </Form.Item>

        <div className={styles.actions}>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submitButton}
          >
            {isEditing
              ? 'Обновить'
              : 'Создать'}
          </Button>
          {onCancel && (
            <Button onClick={onCancel} className={styles.cancelButton}>
              Отмена
            </Button>
          )}
        </div>
      </Form>
    );
  }
);

ProductOperationForm.displayName = 'ProductOperationForm';
