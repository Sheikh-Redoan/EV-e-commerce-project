import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

// Pages - Auth
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// Pages - Protected
import DashboardPage from './pages/user/DashboardPage';
import ProfilePage from './pages/user/ProfilePage';
import OrdersPage from './pages/user/OrdersPage';
import CheckoutPage from './pages/user/CheckoutPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products and landing page data on app load
    dispatch(fetchProducts());
    dispatch(fetchLandingPageData());
  }, [dispatch]);

  return (
    <Router>
      <ToastContainer position="bottom-right" theme="dark"/>
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

          {/* Protected Routes */}
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
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
