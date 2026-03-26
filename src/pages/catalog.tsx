import React, { useState, useEffect, useRef } from 'react';
import styles from '../pages_css/catalog.module.css';
import axios from 'axios';
import { useAppDispatch } from '../store/hooks';
import { addToCart, updateProduct } from '../feature/cart/cartSlice';
import { Product } from '../feature/cart/cartSlice';
import { staticProducts } from './products_data';
import { createPortal } from 'react-dom';
import EditProductModal from '../components/EditProductModal';
import Modal from '../shared/ui/base_components/Modal/Modal';

export function Catalog() {

  // получаю статические данные продкутов, тк проблемы с блокировкой интернета
  const [products, setProducts] = useState<Product[]>(staticProducts);
  // если поулчать данные удалено изменить на true
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();


  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
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

        useEffect(() => {
      setProducts(products)
    }, [products]);


  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       setLoading(true);
  //       setError(null);

  //       const response = await fetch('https://fakestoreapi.com/products');

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const data: Product[] = await response.json();
  //       setProducts(data);
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         setError(err.message);
  //       } else {
  //         setError('An unknown error occurred');
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    // alert(`${product.title} добавлен в корзину!`);
  };

  const handleEdit = (product: Product) => {
      setEditingProduct(product);
      setIsModalOpen(true);
    };

const handleSaveEdit = (updatedProduct: Product) => {
    console.log('Saving:', updatedProduct);
    dispatch(updateProduct(updatedProduct));
    setProducts(prev =>
      prev.map(p => p.id === updatedProduct.id ? updatedProduct : p)
    );
    handleCloseModal();
  };
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setEditingProduct(null);
  // };  


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
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <p className={styles.productCategory}>
                <strong>Категория:</strong> {product.category}
              </p>
            </div>
            <div>
            <button onClick={() => handleAddToCart(product)}>В корзину</button>
            </div>
            <div>
            <button onClick={() => handleEdit(product)}>Редактировать</button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && portalRoot.current && createPortal(
        <div className={styles.container}>
          <Modal
            visible={true}
            handleCloseModal={handleCloseModal}
            children={
          <EditProductModal
            product={editingProduct}
            onSave={handleSaveEdit}
            onClose={handleCloseModal}
          />
        }
          />
        </div>,
        portalRoot.current
      )}
    </div>

  );
}
