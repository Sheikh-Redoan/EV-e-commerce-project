import axiosInstance from './axiosConfig';

export const authAPI = {
  login: (email, password) => 
    axiosInstance.post('/login', { email, password }),
  
  register: (userData) => 
    axiosInstance.post('/register', userData),
  
  logout: () => 
    axiosInstance.post('/logout'),
  
  sendOTP: (email) => 
    axiosInstance.post('/password/send-otp', { email }),
  
  verifyOTP: (email, otp) => 
    axiosInstance.post('/password/verify-otp', { email, otp }),
  
  resetPassword: (email, otp, password, passwordConfirmation) => 
    axiosInstance.post('/password/reset', {
      email,
      otp,
      password,
      password_confirmation: passwordConfirmation,
    }),
};
