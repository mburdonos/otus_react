import React, { useState, useEffect } from 'react';
import { Product } from '../store/cartSlice';

interface EditProductModalProps {
  onClose: () => void;
  product: Product | null;
  onSave: (updatedProduct: Product) => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  onClose,
  product,
  onSave
}) => {
  // Отладка пропсов
  console.log('EditProductModal rendered with props:', {
    hasProduct: !!product,
    productId: product?.id,
    hasOnSave: typeof onSave === 'function',
    hasOnClose: typeof onClose === 'function'
  });

  const [editedProduct, setEditedProduct] = useState<Product | null>(product);

  useEffect(() => {
    console.log('useEffect: updating editedProduct to', product);
    setEditedProduct(product);
  }, [product]);

  if (!editedProduct) {
    console.log('EditProductModal: editedProduct is null, rendering nothing');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('handleChange triggered:', { name, value });

    setEditedProduct(prev => {
      if (!prev) {
        console.log('handleChange: prev is null');
        return null;
      }
      const newValue = name === 'price' ? parseFloat(value) : value;
      console.log('handleChange: updating field', name, 'to', newValue);
      return {
        ...prev,
        [name]: newValue
      };
    });
  };

  const handleSave = () => {
    console.log('handleSave called');
    if (editedProduct) {
      console.log('Saving product:', editedProduct);
      onSave(editedProduct);
      onClose();
    } else {
      console.log('handleSave: editedProduct is null');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal" style={{color: 'white'}}>
        <h2>Редактирование товара</h2>
        <div className="modal-form">
          <div>
            <label>Название:</label>
            <input
              type="text"
              name="title"
              value={editedProduct.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Цена:</label>
            <input
              type="number"
              name="price"
              step="0.01"
              value={editedProduct.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Изображение (URL):</label>
            <input
              type="text"
              name="image"
              value={editedProduct.image}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modal-actions">
          <button type="button" onClick={handleSave} className="save-btn">
            Сохранить
          </button>
          <button type="button" onClick={onClose} className="cancel-btn">
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
