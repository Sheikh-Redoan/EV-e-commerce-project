import axiosInstance from './axiosConfig';

export const productsAPI = {
  getAll: () => 
    axiosInstance.get('/products'),
  
  getById: (id) => 
    axiosInstance.get(`/products/${id}`),
  
  getVariations: (id) => 
    axiosInstance.get(`/products/${id}/variations`),
  
  getConditions: () => 
    axiosInstance.get('/product-conditions'),
};
