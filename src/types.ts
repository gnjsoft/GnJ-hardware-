export type ProductID = string;
export type UserID = string;

export enum ProductCategory {
  DESKTOPS = 'Desktops',
  LAPTOPS = 'Laptops',
  WORKSTATIONS = 'Workstations',
  SERVERS = 'Servers',
  STORAGE = 'Storage',
  NETWORKING = 'Networking',
  SECURITY = 'Firewalls & Security',
  SURVEILLANCE = 'CCTV & Surveillance',
  ACCESS_CONTROL = 'Access Control',
  PRINTING = 'Printers & Accessories',
  CONSUMABLES = 'Consumables & Supplies',
  ACCESSORIES = 'Peripherals & Accessories'
}

export enum UserRole {
  CONSUMER = 'consumer',
  BUSINESS = 'business',
  ADMIN = 'admin',
  SALES = 'sales'
}

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface PricingTier {
  minQuantity: number;
  price: number;
}

export interface Product {
  id: ProductID;
  name: string;
  brand: string;
  category: ProductCategory;
  description: string;
  price: number; // Standard MSRP in INR
  bulkPricing?: PricingTier[];
  images: string[];
  stock: number;
  specs: TechnicalSpec[];
  tags: string[];
  sku: string;
  isFeatured?: boolean;
}

export interface CartItem {
  productId: ProductID;
  quantity: number;
  selectedPrice: number;
}

export interface UserProfile {
  uid: UserID;
  email: string;
  displayName: string;
  role: UserRole;
  companyName?: string;
  gstNumber?: string;
  creditLimit?: number;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: UserID;
  items: CartItem[];
  total: number;
  gstTotal: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: string;
  invoiceUrl?: string;
}
