export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  inStock?: boolean;
}

import React from 'react';
import ProductList from './components/ProductList/ProductList';
import { Product } from './components/ProductList/types';

const App: React.FC = () => {
  const products: Product[] = [
    { id: '1', name: 'Товар 1', price: 1000, inStock: true },
    { id: '2', name: 'Товар 2', price: 2000, inStock: false },
  ];

  return (
    <div>
      <h1>Список товаров</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;

