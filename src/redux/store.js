import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/orderSlice';
import uiReducer from './slices/uiSlice';
import landingPageReducer from './slices/landingPageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    ui: uiReducer,
    landingPage: landingPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['auth/loginUser/fulfilled'],
      },
    }),
});

export default store;
