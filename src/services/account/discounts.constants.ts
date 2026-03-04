import { UserType, ProductType } from '../../types/account_types';

export const BASE_USER_DISCOUNTS: Record<UserType, number> = {
  [UserType.Standard]: 0.1,
  [UserType.Premium]: 0.2,
  [UserType.Gold]: 0.3,
  [UserType.Free]: 0
};

export const PRODUCT_SPECIFIC_DISCOUNTS: Record<UserType, Partial<Record<ProductType, number>>> = {
  [UserType.Standard]: {
    [ProductType.Car]: 0.05
  },
  [UserType.Premium]: {
    [ProductType.Food]: 0.10
  },
  [UserType.Gold]: {
    [ProductType.Car]: 0.15,
    [ProductType.Toy]: 0.05
  },
  [UserType.Free]: {}
};
