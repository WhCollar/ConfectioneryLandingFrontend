export const RouterEnum = {
  Main: 'Main',
  ContactUs: 'ContactUs',
  Cart: 'Cart',
  Catalog: 'Catalog',
  Product: 'Product',
  CreateOrder: 'CreateOrder',
} as const;

export type RouterEnum = (typeof RouterEnum)[keyof typeof RouterEnum];
