import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import AccountService from '../../services/account/account.service';
import { UserType, ProductType } from '../../types/account_types';
describe('AccountService', () => {
    let accountService;
    beforeEach(() => {
        accountService = new AccountService();
    });
    describe('getDiscountForUser', () => {
        it('should return base discount for user type', () => {
            const discount = accountService.getDiscountForUser(UserType.Premium);
            expect(discount).toBe(0.2); // 20% для Premium
        });
        it('should return 0% discount for Free users', () => {
            const discount = accountService.getDiscountForUser(UserType.Free);
            expect(discount).toBe(0);
        });
    });
    describe('getProductDiscountForUser', () => {
        it('should return product-specific discount if exists', () => {
            const discount = accountService.getProductDiscountForUser(UserType.Gold, ProductType.Car);
            expect(discount).toBe(0.15); // 15% для Gold на Cars
        });
        it('should return 0 if no product-specific discount', () => {
            const discount = accountService.getProductDiscountForUser(UserType.Standard, ProductType.Toy);
            expect(discount).toBe(0);
        });
    });
    describe('calculateTotalDiscount', () => {
        it('should not exceed 100% total discount', () => {
            // Создаём ситуацию, где скидки в сумме дают > 100%
            jest.spyOn(accountService, 'getDiscountForUser').mockReturnValue(0.8);
            jest.spyOn(accountService, 'getProductDiscountForUser').mockReturnValue(0.5);
            const totalDiscount = accountService.calculateTotalDiscount(UserType.Standard, ProductType.Car);
            expect(totalDiscount).toBe(1); // Максимум 100%
        });
        it('should handle case when only user discount exists', () => {
            const totalDiscount = accountService.calculateTotalDiscount(UserType.Gold, ProductType.Toy);
            expect(totalDiscount).toBe(0.35);
        });
        it('should handle case when only product discount exists', () => {
            // Предполагаем, что для Standard есть скидка на Car, но базовая скидка 0
            jest.spyOn(accountService, 'getDiscountForUser').mockReturnValue(0);
            jest.spyOn(accountService, 'getProductDiscountForUser').mockReturnValue(0.25);
            const totalDiscount = accountService.calculateTotalDiscount(UserType.Standard, ProductType.Car);
            expect(totalDiscount).toBe(0.25);
        });
    });
});
