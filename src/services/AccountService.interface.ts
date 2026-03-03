import { UserType, ProductType } from '../types/discount';
import type { User, Product } from '../types/discount'

export interface AccountService {
  setGlobalDiscount(userType: UserType, discountPercent: number): void;
  setProductDiscount(userType: UserType, productType: ProductType, discountPercent: number): void;
  getFinalPrice(user: User, product: Product): number;
  getAppliedDiscounts(user: User, product: Product): {
    totalDiscount: number;
    appliedDiscounts: { type: string; value: number }[];
  };
}
