import axios from 'axios';
import Cookie from 'js-cookie';
import { store } from '../redux/store';
import { clearError } from '../redux/slices/authSlice';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookie.get('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookie.remove('authToken');
      localStorage.removeItem('user');

      const currentPath = window.location.pathname;

      // Only redirect to login if the user is on a protected route.
      // Public routes (including product listings/details) stay as-is;
      // the silent guest login in App.jsx will refresh the token on next load.
      const isPublicRoute =
        currentPath === '/' ||
        currentPath === '/contact' ||
        currentPath === '/manual-warranty' ||
        currentPath === '/login' ||
        currentPath === '/register' ||
        currentPath === '/forgot-password' ||
        currentPath === '/payment-success' ||
        currentPath === '/payment-cancel' ||
        currentPath.startsWith('/product'); // covers /product and /products/:id

      if (!isPublicRoute) {
        window.location.href = '/login';
      }
    }

    if (error.response?.status === 500) {
      console.error('Server Error:', error.response.data);
    }

    return Promise.reject(error);
  }
);


export default axiosInstance;
