import ProductList from './ProductList';
export default {
    title: 'UI/online_store/ProductList',
    component: ProductList,
    args: {
        itemsPerLoad: 3,
    },
};
export const Default = {
    args: {
        initialProducts: [
            {
                id: 1,
                title: 'Тестовый товар 1',
                description: 'Описание тестового товара 1',
                price: 1000,
                imageUrl: '/iphone_15.jpg',
            },
            {
                id: 2,
                title: 'Тестовый товар 2',
                description: 'Описание тестового товара 2',
                price: 2000,
                imageUrl: '/lenovo.png',
            },
        ],
    }
};
export const Empty = {
    args: {
        initialProducts: [],
    }
};
