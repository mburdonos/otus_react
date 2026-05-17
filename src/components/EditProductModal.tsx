import React, { useState, useEffect } from 'react';
import { Product } from '../features/cart/cartSlice';

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
  console.log('EditProductModal rendered with props:', {
    hasProduct: !!product,
    productId: product?.id,
    hasOnSave: typeof onSave === 'function',
    hasOnClose: typeof onClose === 'function'
  });

  const [editedProduct, setEditedProduct] = useState<Product | null>(product);
  const [errors, setErrors] = useState<{ title?: string }>({});

  useEffect(() => {
    console.log('useEffect: updating editedProduct to', product);
    setEditedProduct(product);
    setErrors({});
  }, [product]);

  if (!editedProduct) {
    console.log('EditProductModal: editedProduct is null, rendering nothing');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('handleChange triggered:', { name, value });

    if (name === 'price') {
      // Обработка цены: если пусто, временно ставим 0
      const priceValue = value === '' ? 0 : parseFloat(value);
      if (!isNaN(priceValue)) {
        setEditedProduct(prev => {
          if (!prev) return null;
          return { ...prev, price: priceValue };
        });
      }
    } else {
      setEditedProduct(prev => {
        if (!prev) return null;
        return { ...prev, [name]: value };
      });
    }
  };

  const handleSave = () => {
    if (!editedProduct) return;
    
    // Проверка названия
    if (!editedProduct.title || editedProduct.title.trim() === '') {
      setErrors({ title: 'Название не может быть пустым' });
      return;
    }
    
    const productToSave = { ...editedProduct };
    productToSave.title = productToSave.title.trim();
    
    // Убеждаемся, что цена - число
    if (isNaN(productToSave.price)) {
      productToSave.price = 0;
    }
    
    onSave(productToSave);
    onClose();
  };

  // Обработчик клика по оверлею (закрытие)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Закрываем только если кликнули именно по оверлею, а не по контенту
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <style>{`
        .error-input {
          border: 2px solid #ff4444 !important;
          background-color: rgba(255, 68, 68, 0.1);
        }

        .error-message {
          color: #ff4444;
          font-size: 12px;
          margin-top: 4px;
          display: block;
        }
      `}</style>
      
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal" style={{color: 'white'}}>
          <h2>Редактирование товара</h2>
          <div className="modal-form">
            <div>
              <label>Название:</label>
              <input
                type="text"
                name="title"
                value={editedProduct.title || ''}
                onChange={handleChange}
                className={errors.title ? 'error-input' : ''}
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>
            <div>
              <label>Цена:</label>
              <input
                type="number"
                name="price"
                step="0.01"
                value={editedProduct.price || ''}
                onChange={handleChange}
                placeholder="0.00"
              />
              <small style={{opacity: 0.7, display: 'block', marginTop: '4px'}}>
                Если поле пустое, будет установлено значение 0
              </small>
            </div>
            <div>
              <label>Изображение (URL):</label>
              <input
                type="text"
                name="image"
                value={editedProduct.image || ''}
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
    </>
  );
};

export default EditProductModal;