import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from '../pages_css/catalog.module.css';
import { useAppDispatch } from '../store/hooks';
import { addToCart, updateProduct } from '../store/cartSlice';
import { staticProducts } from './products_data';
import EditProductModal from '../components/EditProductModal';
export function Catalog() {
    // получаю статические данные продкутов, тк проблемы с блокировкой интернета
    const [products, setProducts] = useState(staticProducts);
    // если поулчать данные удалено изменить на true
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useAppDispatch();
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
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        // alert(`${product.title} добавлен в корзину!`);
    };
    const handleEdit = (product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };
    const handleSaveEdit = (updatedProduct) => {
        // Обновляем в каталоге (статический массив)
        // В реальном приложении здесь был бы API‑запрос
        dispatch(updateProduct(updatedProduct));
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingProduct(null);
    };
    if (loading) {
        return _jsx("div", { className: styles.loading, children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432..." });
    }
    if (error) {
        return _jsxs("div", { className: styles.error, children: ["\u041E\u0448\u0438\u0431\u043A\u0430: ", error] });
    }
    return (_jsxs("div", { className: styles.container, children: [_jsx("h1", { className: styles.title, children: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432" }), _jsx("div", { className: styles.productsGrid, children: products.map((product) => (_jsxs("div", { className: styles.productCard, children: [_jsx("img", { src: product.image, alt: product.title, className: styles.productImage }), _jsxs("div", { className: styles.productInfo, children: [_jsx("h3", { className: styles.productTitle, children: product.title }), _jsxs("p", { className: styles.productPrice, children: ["$", product.price.toFixed(2)] }), _jsxs("p", { className: styles.productCategory, children: [_jsx("strong", { children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:" }), " ", product.category] })] }), _jsx("div", { children: _jsx("button", { onClick: () => handleAddToCart(product), children: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" }) }), _jsx("div", { children: _jsx("button", { onClick: () => handleEdit(product), children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C" }) })] }, product.id))) }), _jsx("div", { children: _jsx(EditProductModal, { isOpen: isModalOpen, onClose: handleCloseModal, product: editingProduct, onSave: handleSaveEdit }) })] }));
}
