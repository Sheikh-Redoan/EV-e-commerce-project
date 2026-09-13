import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  total: 0,
  subtotal: 0,
  tax: 0,
  discount: 0,
};

function calculateTotals(items) {
  const subtotal = items.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return { subtotal, tax, total };
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.variationId === action.payload.variationId
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }

      const { subtotal, tax, total } = calculateTotals(state.items);
      state.subtotal = subtotal;
      state.tax = tax;
      state.total = total;

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      const { subtotal, tax, total } = calculateTotals(state.items);
      state.subtotal = subtotal;
      state.tax = tax;
      state.total = total;

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    updateCartItemQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }

      const { subtotal, tax, total } = calculateTotals(state.items);
      state.subtotal = subtotal;
      state.tax = tax;
      state.total = total;

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.subtotal = 0;
      state.tax = 0;
      state.discount = 0;
      localStorage.removeItem('cartItems');
    },

    applyDiscount: (state, action) => {
      state.discount = action.payload;
      state.total = state.subtotal + state.tax - action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  applyDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
