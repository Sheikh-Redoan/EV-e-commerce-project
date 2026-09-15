import axiosInstance from './axiosConfig';

export const profileAPI = {
  getProfileInfo: () => 
    axiosInstance.get('/profile-info'),
  updateProfile: (data) => 
    axiosInstance.post('/profile-update', data),
  changePassword: (oldPassword, newPassword, confirmation) => 
    axiosInstance.post('/profile-change-password', {
      old_password: oldPassword,
      new_password: newPassword,
      password_confirmation: confirmation, // Ensure this matches your API expectation
    }),
  changeAddress: (address, city, zip) => 
    axiosInstance.post('/profile-change-address', { address, city, zip }),
  updateLocation: (latitude, longitude) => 
    axiosInstance.post('/profile-update-location', { latitude, longitude }),
  deleteAccount: (email, password) => 
    axiosInstance.post('/profile-delete', { email, password }),
};
