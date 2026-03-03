export enum UserType {
  Standard = 'Standard',
  Premium = 'Premium',
  Gold = 'Gold',
  Free = 'Free'
}

export enum ProductType {
  Car = 'Car',
  Toy = 'Toy',
  Food = 'Food'
}

export interface DiscountConfig {
  userType: UserType;
  productType?: ProductType;
  discountPercent: number;
}

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  basePrice: number;
}

export interface User {
  id: string;
  name: string;
  type: UserType;
}
