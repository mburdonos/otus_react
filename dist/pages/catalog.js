import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// pages/Catalog.tsx (исправленный с проверками)
import { useState, useEffect, useRef } from 'react';
import styles from '../pages_css/catalog.module.css';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, updateProduct } from '../features/cart/cartSlice';
import { staticProducts } from './products_data';
import { createPortal } from 'react-dom';
import EditProductModal from '../components/EditProductModal';
import Modal from '../shared/ui/base_components/Modal/Modal';
export function Catalog() {
    const [products, setProducts] = useState(staticProducts || []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingProduct(null);
    };
    const portalRoot = useRef(null);
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
    // Функция добавления в корзину с проверкой авторизации
    const handleAddToCart = (product) => {
        if (!isAuthenticated) {
            alert('Пожалуйста, войдите в систему, чтобы добавить товары в корзину');
            return;
        }
        if (user?.id && product) {
            dispatch(addToCart({ userId: user.id, product }));
            alert(`${product.title} добавлен в корзину!`);
        }
    };
    const handleEdit = (product) => {
        if (product) {
            setEditingProduct(product);
            setIsModalOpen(true);
        }
    };
    const handleSaveEdit = (updatedProduct) => {
        if (!updatedProduct)
            return;
        console.log('Saving:', updatedProduct);
        // Обновляем товар в каталоге
        setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
        // Если пользователь авторизован, обновляем товар в корзине
        if (isAuthenticated && user?.id && updatedProduct) {
            dispatch(updateProduct({ userId: user.id, product: updatedProduct }));
        }
        handleCloseModal();
    };
    // Проверка, что products существует и является массивом
    if (!products || !Array.isArray(products)) {
        return _jsx("div", { className: styles.error, children: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432" });
    }
    if (loading) {
        return _jsx("div", { className: styles.loading, children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432..." });
    }
    if (error) {
        return _jsxs("div", { className: styles.error, children: ["\u041E\u0448\u0438\u0431\u043A\u0430: ", error] });
    }
    return (_jsxs("div", { className: styles.container, children: [_jsx("h1", { className: styles.title, children: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432" }), _jsx("div", { className: styles.productsGrid, children: products.map((product) => (_jsxs("div", { className: styles.productCard, children: [_jsx("img", { src: product.image, alt: product.title, className: styles.productImage }), _jsxs("div", { className: styles.productInfo, children: [_jsx("h3", { className: styles.productTitle, children: product.title }), _jsxs("p", { className: styles.productPrice, children: ["$", product.price.toFixed(2)] }), _jsxs("p", { className: styles.productCategory, children: [_jsx("strong", { children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:" }), " ", product.category] })] }), _jsxs("div", { className: styles.buttonGroup, children: [_jsx("button", { onClick: () => handleAddToCart(product), className: styles.addToCartBtn, children: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" }), _jsx("button", { onClick: () => handleEdit(product), className: styles.editBtn, children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C" })] })] }, product.id))) }), isModalOpen && portalRoot.current && editingProduct && createPortal(_jsx(Modal, { visible: true, handleCloseModal: handleCloseModal, children: _jsx(EditProductModal, { product: editingProduct, onSave: handleSaveEdit, onClose: handleCloseModal }) }), portalRoot.current)] }));
}
