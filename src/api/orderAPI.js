import axiosInstance from './axiosConfig';

export const orderAPI = {
  getMyOrders: () => 
    axiosInstance.get('/my-orders'),
  
  getOrderById: (id) => 
    axiosInstance.get(`/my-orders/${id}`),
};
