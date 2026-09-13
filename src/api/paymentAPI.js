import axiosInstance from './axiosConfig';

export const paymentAPI = {
  createPayPalPayment: (paymentData) => 
    axiosInstance.post('/paypal/payment', paymentData),
  
  paypalSuccess: (token) => 
    axiosInstance.get('/paypal/success', { params: { token } }),
  
  paypalCancel: () => 
    axiosInstance.get('/paypal/cancel'),
};
