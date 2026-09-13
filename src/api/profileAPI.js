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
      new_password_confirmation: confirmation,
    }),
  
  changeAddress: (address, city, zip) => 
    axiosInstance.post('/profile-change-address', { address, city, zip }),
  
  updateLocation: (latitude, longitude) => 
    axiosInstance.post('/profile-update-location', {
      user_latitude: latitude,
      user_longitude: longitude,
    }),
  
  toggleLanguage: (lang) => 
    axiosInstance.post('/language-toggle', { lang }),
};
