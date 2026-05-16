// pages/Catalog.tsx (исправленный с проверками)
import React, { useState, useEffect, useRef } from 'react';
import styles from '../pages_css/catalog.module.css';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, updateProduct, Product } from '../features/cart/cartSlice';
import { staticProducts } from './products_data';
import { createPortal } from 'react-dom';
import EditProductModal from '../components/EditProductModal';
import Modal from '../shared/ui/base_components/Modal/Modal';

export function Catalog() {
  // staticProducts || 
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
      const fetchProducts = async () => {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: Product[] = await response.json();
          setProducts(data);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      };
      fetchProducts();
    }, []);
  
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);




  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const portalRoot = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const div = document.createElement('div');
    div.id = 'modal-portal';
    document.body.appendChild(div);
    portalRoot.current = div;

    return () => {
      if (portalRoot.current && document.body.contains(portalRoot.current)) {
        document.body.removeChild(portalRoot.current);
      }
    };
  }, []);

  const handleAddToCart = (product: Product) => {
    if (!isAuthenticated) {
      alert('Пожалуйста, войдите в систему, чтобы добавить товары в корзину');
      return;
    }
    
    if (user?.id && product) {
      dispatch(addToCart({ userId: user.id, product }));
      alert(`${product.title} добавлен в корзину!`);
    }
  };

  const handleEdit = (product: Product) => {
    if (product) {
      setEditingProduct(product);
      setIsModalOpen(true);
    }
  };

  const handleSaveEdit = (updatedProduct: Product) => {
    if (!updatedProduct) return;
    
    console.log('Saving:', updatedProduct);
    
    setProducts(prev =>
      prev.map(p => p.id === updatedProduct.id ? updatedProduct : p)
    );
    
    // Если пользователь авторизован, обновляем товар в корзине
    if (isAuthenticated && user?.id && updatedProduct) {
      dispatch(updateProduct({ userId: user.id, product: updatedProduct }));
    }
    
    handleCloseModal();
  };

  // Проверка, что products существует и является массивом
  if (!products || !Array.isArray(products)) {
    return <div className={styles.error}>Ошибка загрузки товаров</div>;
  }

  if (loading) {
    return <div className={styles.loading}>Загрузка продуктов...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Каталог товаров</h1>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
          <div className={styles.imageWrapper}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <p className={styles.productCategory}>
                <strong>Категория:</strong> {product.category}
              </p>
            </div>
            <div className={styles.buttonGroup}>
              <button 
                onClick={() => handleAddToCart(product)} 
                className={styles.addToCartBtn}
              >
                В корзину
              </button>
              <button 
                onClick={() => handleEdit(product)} 
                className={styles.editBtn}
              >
                Редактировать
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && portalRoot.current && editingProduct && createPortal(
        <Modal
          visible={true}
          handleCloseModal={handleCloseModal}
        >
          <EditProductModal
            product={editingProduct}
            onSave={handleSaveEdit}
            onClose={handleCloseModal}
          />
        </Modal>,
        portalRoot.current
      )}
    </div>
  );
}