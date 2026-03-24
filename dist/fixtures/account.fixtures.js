import { UserType, ProductType } from '../types/account_types';
export const DISCOUNT_TEST_CASES = [
    {
        id: 'premium-food',
        userType: UserType.Premium,
        productType: ProductType.Food,
        description: 'Premium пользователь + еда: базовая 20 % + специфичная 10 %'
    },
    {
        id: 'gold-car',
        userType: UserType.Gold,
        productType: ProductType.Car,
        description: 'Gold пользователь + машина: базовая 30 % + специфичная 15 %'
    },
    {
        id: 'free-toy',
        userType: UserType.Free,
        productType: ProductType.Toy,
        description: 'Free пользователь + игрушка: нет скидок'
    },
    {
        id: 'standard-car',
        userType: UserType.Standard,
        productType: ProductType.Car,
        description: 'Standard пользователь + машина: базовая 10 % + специфичная 5 %'
    }
];
