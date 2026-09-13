import axiosInstance from './axiosConfig';

export const contactAPI = {
  sendMessage: (messageData) => 
    axiosInstance.post('/pages/contact-us-message', messageData),
};
