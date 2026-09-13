import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchProductById, setFilters } from '../redux/slices/productsSlice';
import { useEffect } from 'react';

export const useProducts = (id = null) => {
  const dispatch = useDispatch();
  const { products, selectedProduct, loading, error, filters } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, id]);

  const handleSetFilters = (newFilters) => {
    dispatch(setFilters(newFilters));
  };

  return {
    products,
    selectedProduct,
    loading,
    error,
    filters,
    setFilters: handleSetFilters,
  };
};
