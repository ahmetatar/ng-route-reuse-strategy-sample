export type ProductType = 'variant' | 'simple';
export type PriceRange = { range: string; min: number; max: number };
export type Price = number | PriceRange;
export type Metafield = { key: string; value: string };
export type Date = { $date: string };
export type Workflow = { status: 'new' };

export interface Product {
  _id: string;
  shopId: string;
  title?: string;
  pageTitle?: string;
  ancestors?: string[];
  description?: string;
  type: ProductType;
  price: Price;
  isLowQuantity?: boolean;
  isSoldOut?: boolean;
  isBackorder?: boolean;
  metafields?: Metafield[];
  requiresShipping?: boolean;
  hashtags?: string[];
  isVisible?: boolean;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  handle?: string;
  workflow?: Workflow;
  vendor?: string;
  inventoryManagement?: boolean;
  inventoryPolicy?: boolean;
  taxable?: boolean;
  taxCode?: string;
  optionTitle?: string;
  inventoryQuantity?: number;
  weight?: number;
}
