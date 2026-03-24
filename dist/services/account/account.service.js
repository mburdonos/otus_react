import { BASE_USER_DISCOUNTS, PRODUCT_SPECIFIC_DISCOUNTS } from './discounts.constants';
class AccountService {
    constructor() {
        this.userDiscounts = BASE_USER_DISCOUNTS;
        this.productDiscounts = PRODUCT_SPECIFIC_DISCOUNTS;
    }
    getDiscountForUser(userType) {
        return this.userDiscounts[userType] || 0;
    }
    getProductDiscountForUser(userType, productType) {
        const userProductDiscounts = this.productDiscounts[userType];
        return userProductDiscounts?.[productType] || 0;
    }
    calculateTotalDiscount(userType, productType) {
        const userDiscount = this.getDiscountForUser(userType);
        const productDiscount = this.getProductDiscountForUser(userType, productType);
        const totalDiscount = userDiscount + productDiscount;
        return Number(Math.min(totalDiscount, 1).toFixed(2));
    }
}
export default AccountService;
