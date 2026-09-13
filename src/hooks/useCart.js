import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  applyDiscount,
} from '../redux/slices/cartSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const { items, total, subtotal, tax, discount } = useSelector(
    (state) => state.cart
  );

  const handleAddToCart = (item) => dispatch(addToCart(item));
  const handleRemoveFromCart = (id) => dispatch(removeFromCart(id));
  const handleUpdateQuantity = (id, quantity) =>
    dispatch(updateCartItemQuantity({ id, quantity }));
  const handleClearCart = () => dispatch(clearCart());
  const handleApplyDiscount = (amount) => dispatch(applyDiscount(amount));

  return {
    items,
    total,
    subtotal,
    tax,
    discount,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    updateQuantity: handleUpdateQuantity,
    clearCart: handleClearCart,
    applyDiscount: handleApplyDiscount,
  };
};
