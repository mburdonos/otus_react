import { CartItem } from './CartItem';
const meta = {
    title: 'ui/online_store/CartItem',
    component: CartItem,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'Название товара',
        },
        price: {
            control: 'number',
            description: 'Цена в рублях',
        },
        imageUrl: {
            control: 'text',
            description: 'URL изображения товара',
        },
        onRemove: {
            action: 'removed', // Для демонстрации в Storybook
            description: 'Обработчик нажатия кнопки удаления',
        },
    },
};
export default meta;
export const Default = {
    args: {
        title: 'Ноутбук Lenovo IdeaPad',
        price: 49990,
        imageUrl: 'https://via.placeholder.com/80x80?text=Laptop',
        onRemove: () => alert('Товар удалён!'),
    },
};
export const WithLongTitle = {
    args: {
        title: 'Очень длинное название товара, которое может переноситься на следующую строку',
        price: 1290,
        imageUrl: 'https://via.placeholder.com/80x80?text=Book',
        onRemove: () => console.log('Товар удалён'),
    },
};
export const NoImage = {
    args: {
        title: 'Книга "JavaScript для начинающих"',
        price: 1290,
        imageUrl: '', // Пустой URL
        onRemove: () => { },
    },
};
