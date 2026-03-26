import React from 'react';
import { Product } from '../feature/cart/cartSlice';

interface ProductEditFormProps {
  product: Product | null;
  onChange: (field: keyof Product, value: string | number) => void;
  onSave: () => void;
  onCancel: () => void;
}

export const ProductEditForm: React.FC<ProductEditFormProps> = ({
  product,
  onChange,
  onSave,
  onCancel
}) => {
  if (!product) return null;

  const handleChange = (field: keyof Product, value: string | number) => {
    onChange(field, value);
  };

  return (
    <div className="product-edit-form">
      <div className="form-group">
        <label htmlFor="edit-title">Название:</label>
        <input
          id="edit-title"
          type="text"
          value={product.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="edit-price">Цена:</label>
        <input
          id="edit-price"
          type="number"
          step="0.01"
          value={product.price}
          onChange={(e) => handleChange('price', parseFloat(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label htmlFor="edit-image">Изображение (URL):</label>
        <input
          id="edit-image"
          type="text"
          value={product.image}
          onChange={(e) => handleChange('image', e.target.value)}
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={onSave} className="btn-save">
          Сохранить
        </button>
        <button type="button" onClick={onCancel} className="btn-cancel">
          Отмена
        </button>
      </div>
    </div>
  );
};
