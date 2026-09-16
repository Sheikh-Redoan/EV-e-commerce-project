import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import axios from 'axios';
import { fetchProducts } from './redux/slices/productsSlice';
import { fetchLandingPageData } from './redux/slices/landingPageSlice';
import { ROUTES } from './config/routes';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Layout
import MainLayout from './components/Layout/MainLayout';
import ProtectedRoute from './components/Common/ProtectedRoute';

// Pages - Public
import LandingPage from './pages/public/LandingPage';
import ProductsPage from './pages/public/ProductsPage';
import ProductDetailPage from './pages/public/ProductDetailPage';
import ContactPage from './pages/public/ContactPage';
import ManualWarrantyPage from './pages/public/ManualWarrantyPage';
import NotFoundPage from './pages/public/NotFoundPage';
import PaymentSuccessPage from './pages/public/PaymentSuccessPage';
import PaymentCancelPage from './pages/public/PaymentCancelPage';

// Pages - Auth
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// Pages - Protected
import ProfilePage from './pages/user/ProfilePage';
import OrdersPage from './pages/user/OrdersPage';
import CheckoutPage from './pages/user/CheckoutPage';

const GUEST_EMAIL = import.meta.env.VITE_GUEST_EMAIL;
const GUEST_PASSWORD = import.meta.env.VITE_GUEST_PASSWORD;

function App() {
  const dispatch = useDispatch();
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      let token = Cookie.get('authToken');

      // If no token exists, silently log in as the guest account
      if (!token && GUEST_EMAIL && GUEST_PASSWORD) {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/login`,
            { email: GUEST_EMAIL, password: GUEST_PASSWORD }
          );
          token = response.data.data.token;
          Cookie.set('authToken', token);
        } catch (error) {
          console.error('Silent guest login failed:', error);
        }
      }

      // Fetch the protected public data
      if (token) {
        dispatch(fetchProducts());
        dispatch(fetchLandingPageData());
      }

      setIsInitializing(false);
    };

    initializeApp();
  }, [dispatch]);

  if (isInitializing) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#05070C]">
        <p className="text-[#8EA0BD] font-['Inter'] text-sm animate-pulse">Loading EV Systems...</p>
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer position="bottom-right" theme="dark" />
      <MainLayout>
        <Routes>
          {/* Public Routes */}
          <Route path={ROUTES.HOME} element={<LandingPage />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetailPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          <Route path={ROUTES.MANUAL_WARRANTY} element={<ManualWarrantyPage />} />

          {/* Auth Routes */}
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
          <Route path={ROUTES.PAYMENT_SUCCESS} element={<PaymentSuccessPage />} />
          <Route path={ROUTES.PAYMENT_CANCEL} element={<PaymentCancelPage />} />

          {/* Redirect /dashboard to profile */}
          <Route path="/dashboard" element={<Navigate to={ROUTES.PROFILE} replace />} />

          {/* Protected Routes */}
          <Route
            path={ROUTES.PROFILE}
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.ORDERS}
            element={
              <ProtectedRoute>
                <OrdersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.CHECKOUT}
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
