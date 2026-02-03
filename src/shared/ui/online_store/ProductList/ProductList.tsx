import React, { useEffect, useState, useRef } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import type { ProductCardProps } from '../ProductCard/ProductCard';
import { generateRandomProduct } from '../../../../utils/generateRandomProduct';

interface ProductListProps {
  initialProducts?: ProductCardProps[];
  itemsPerLoad?: number;
}

const ProductList: React.FC<ProductListProps> = ({
  initialProducts = [],
  itemsPerLoad = 5,
}) => {
  const [products, setProducts] = useState<ProductCardProps[]>(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const loadMoreProducts = () => {
    setIsLoading(true);
    const newProducts = Array.from({ length: itemsPerLoad }, generateRandomProduct);
    setProducts((prev) => [...prev, ...newProducts]);
    setIsLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMoreProducts();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isLoading]);

  return (
    <div className="product-list">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Элемент для наблюдения */}
      <div ref={observerRef} style={{ height: '1px' }} />

      {isLoading && (
        <div className="loading">
          Загружаем товары...
        </div>
      )}
    </div>
  );
};

export default ProductList;
