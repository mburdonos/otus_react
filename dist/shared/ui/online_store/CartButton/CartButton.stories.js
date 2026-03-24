import { CartButton } from './CartButton';
const meta = {
    title: 'ui/online_store/CartButton',
    component: CartButton,
    tags: ['autodocs'],
    argTypes: {
        count: {
            control: 'number',
            description: 'Количество товара в корзине',
            defaultValue: 0,
        },
    },
};
export default meta;
export const Empty = {
    args: {
        count: 0,
    },
};
export const WithCount = {
    args: {
        count: 3,
    },
};
