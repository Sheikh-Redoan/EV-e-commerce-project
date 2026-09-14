// Public Routes
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/product',
  PRODUCT_DETAIL: '/products/:id',
  CONTACT: '/contact',
  MANUAL_WARRANTY: '/manual-warranty',
  
  // Auth Routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password/:token',
  
  // Protected Routes
  DASHBOARD: '/dashboard',
  PROFILE: '/dashboard/profile',
  ORDERS: '/dashboard/orders',
  ORDER_DETAIL: '/dashboard/orders/:id',
  CHECKOUT: '/checkout',
  PAYMENT_SUCCESS: '/payment-success',
  SETTINGS: '/dashboard/settings',
  
  // Error Routes
  NOT_FOUND: '/404',
  UNAUTHORIZED: '/401',
};

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/login',
  REGISTER: '/register',
  LOGOUT: '/logout',
  
  // Products
  PRODUCTS: '/products',
  PRODUCT_BY_ID: '/products/:id',
  PRODUCT_VARIATIONS: '/products/:id/variations',
  
  // Landing
  LANDING_PAGE: '/landing-page',
  
  // Orders
  MY_ORDERS: '/my-orders',
  ORDER_BY_ID: '/my-orders/:id',
  
  // Profile
  PROFILE: '/profile-info',
  UPDATE_PROFILE: '/profile-update',
  CHANGE_PASSWORD: '/profile-change-password',
  UPDATE_ADDRESS: '/profile-change-address',
  UPDATE_LOCATION: '/profile-update-location',
  
  // Payment
  PAYPAL_PAYMENT: '/paypal/payment',
  PAYPAL_SUCCESS: '/paypal/success',
  PAYPAL_CANCEL: '/paypal/cancel',
  
  // Contact
  CONTACT_MESSAGE: '/pages/contact-us-message',
  
  // Language
  TOGGLE_LANGUAGE: '/language-toggle',
};
