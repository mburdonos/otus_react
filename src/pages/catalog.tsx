// pages/Catalog.tsx (исправленный с проверками)
import React, { useState, useEffect, useRef } from 'react';
import styles from '../pages_css/catalog.module.css';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, removeFromCart, updateProduct, Product } from '../features/cart/cartSlice';
import { staticProducts } from './products_data';
import { createPortal } from 'react-dom';
import EditProductModal from '../components/EditProductModal';
import Modal from '../shared/ui/base_components/Modal/Modal';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>(staticProducts || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Закоментировал, тк долго отдает данные
  // useEffect(() => {
  //     const fetchProducts = async () => {
  //       try {
  //         setLoading(true);
  //         setError(null);
  //         const response = await fetch('https://fakestoreapi.com/products');
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! status: ${response.status}`);
  //         }
  //         const data: Product[] = await response.json();
  //         setProducts(data);
  //       } catch (err) {
  //         if (err instanceof Error) {
  //           setError(err.message);
  //         } else {
  //           setError('An unknown error occurred');
  //         }
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchProducts();
  //   }, []);
  
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

const userCart = useAppSelector((state) => 
    user?.id ? state.cart[user.id] : null
  );

  // Функция для подсчета количества каждого товара в корзине
  const getProductQuantity = (productId: number): number => {
    if (!userCart || !userCart.items) return 0;
    return userCart.items.filter(item => item.id === productId).length;
  };

  // Проверка, есть ли товар в корзине
  const isInCart = (productId: number): boolean => {
    return getProductQuantity(productId) > 0;
  };

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

  // Добавление в корзину
  const handleAddToCart = (product: Product) => {
    if (!isAuthenticated) {
      alert('Пожалуйста, войдите в систему, чтобы добавить товары в корзину');
      return;
    }
    
    if (user?.id && product) {
      dispatch(addToCart({ userId: user.id, product }));
    }
  };

  // Увеличение количества (добавляем еще один такой же товар)
  const handleIncreaseQuantity = (product: Product) => {
    if (!isAuthenticated) {
      alert('Пожалуйста, войдите в систему');
      return;
    }
    
    if (user?.id && product) {
      dispatch(addToCart({ userId: user.id, product }));
    }
  };

  // Уменьшение количества (удаляем один экземпляр товара)
  const handleDecreaseQuantity = (product: Product) => {
    if (!isAuthenticated) {
      alert('Пожалуйста, войдите в систему');
      return;
    }
    
    if (user?.id && product) {
      dispatch(removeFromCart({ userId: user.id, productId: product.id }));
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
        {products.map((product) => {
          const quantity = getProductQuantity(product.id);
          
          return (
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
                {isInCart(product.id) ? (
                  // Показываем контролы +/-, если товар в корзине
                  <div className={styles.quantityControls}>
                    <button 
                      onClick={() => handleDecreaseQuantity(product)} 
                      className={styles.quantityBtn}
                    >
                      -
                    </button>
                    <span className={styles.quantity}>{quantity}</span>
                    <button 
                      onClick={() => handleIncreaseQuantity(product)} 
                      className={styles.quantityBtn}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  // Показываем кнопку "В корзину", если товара нет в корзине
                  <button 
                    onClick={() => handleAddToCart(product)} 
                    className={styles.addToCartBtn}
                  >
                    В корзину
                  </button>
                )}
                <button 
                  onClick={() => handleEdit(product)} 
                  className={styles.editBtn}
                >
                  Редактировать
                </button>
              </div>
            </div>
          );
        })}
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