export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const APP_NAME = 'EV Systems';
export const APP_VERSION = '1.0.0';

export const PRODUCT_CATEGORIES = [
  { id: 1, name: 'Charging Cables', slug: 'cables' },
  { id: 2, name: 'Chargers', slug: 'chargers' },
  { id: 3, name: 'Adapters', slug: 'adapters' },
  { id: 4, name: 'Accessories', slug: 'accessories' },
];

export const PAYMENT_METHODS = [
  { id: 'paypal', name: 'PayPal', logo: 'paypal.png' },
];

export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

export const ORDER_STATUS_COLORS = {
  pending: 'yellow',
  processing: 'blue',
  shipped: 'purple',
  delivered: 'green',
  cancelled: 'red',
};

export const COUNTRIES = [
  { code: 'AU', name: 'Australia' },
  { code: 'US', name: 'United States' },
  { code: 'UK', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'BD', name: 'Bangladesh' },
];

export const TAX_RATE = 0.1; // 10%
export const SHIPPING_COST = 15;
