import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser, logoutUser, clearError } from '../redux/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  const login = (credentials) => dispatch(loginUser(credentials));
  const register = (userData) => dispatch(registerUser(userData));
  const logout = () => dispatch(logoutUser());
  const handleClearError = () => dispatch(clearError());

  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout,
    clearError: handleClearError,
  };
};
