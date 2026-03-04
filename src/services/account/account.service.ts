import { UserType, ProductType } from '../../types/account_types';
import { BASE_USER_DISCOUNTS, PRODUCT_SPECIFIC_DISCOUNTS } from './discounts.constants';

class AccountService {
  private readonly userDiscounts = BASE_USER_DISCOUNTS;
  private readonly productDiscounts = PRODUCT_SPECIFIC_DISCOUNTS;

  getDiscountForUser(userType: UserType): number {
    return this.userDiscounts[userType] || 0;
  }

  getProductDiscountForUser(userType: UserType, productType: ProductType): number {
    const userProductDiscounts = this.productDiscounts[userType];
    return userProductDiscounts?.[productType] || 0;
  }

  calculateTotalDiscount(userType: UserType, productType: ProductType): number {
    const userDiscount = this.getDiscountForUser(userType);
    const productDiscount = this.getProductDiscountForUser(userType, productType);

    const totalDiscount = userDiscount + productDiscount;
    return Number(Math.min(totalDiscount, 1).toFixed(2));
  }
}

export default AccountService;
