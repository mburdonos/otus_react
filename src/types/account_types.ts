// types.ts
export const UserType = {
  Standard: 'Standard',
  Premium: 'Premium',
  Gold: 'Gold',
  Free: 'Free'
} as const;

export type UserType = typeof UserType[keyof typeof UserType];

export const ProductType = {
  Car: 'Car',
  Toy: 'Toy',
  Food: 'Food'
} as const;

export type ProductType = typeof ProductType[keyof typeof ProductType];
