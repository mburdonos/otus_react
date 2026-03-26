import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { generateRandomProduct } from '../../../../utils/generateRandomProduct';
const ProductList = ({ initialProducts = [], itemsPerLoad = 5, }) => {
    const [products, setProducts] = useState(initialProducts);
    const [isLoading, setIsLoading] = useState(false);
    const observerRef = useRef(null);
    // Загрузка новых товаров
    const loadMoreProducts = () => {
        if (isLoading)
            return;
        setIsLoading(true);
        const newProducts = Array.from({ length: itemsPerLoad }, generateRandomProduct);
        setProducts((prev) => [...prev, ...newProducts]);
        setIsLoading(false);
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoading) {
                loadMoreProducts();
            }
        }, { threshold: 0.1 });
        if (observerRef.current) {
            observer.observe(observerRef.current);
        }
        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [loadMoreProducts]);
    return (_jsxs("div", { className: "product-list", children: [_jsx("div", { className: "products-grid", children: products.map((product) => (_jsx(ProductCard, { ...product }, product.id))) }), _jsx("div", { ref: observerRef, style: { height: '1px' } }), isLoading && (_jsx("div", { className: "loading", children: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0442\u043E\u0432\u0430\u0440\u044B..." }))] }));
};
export default ProductList;
