import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosConfig';
import Cookie from 'js-cookie';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/login', credentials);
      const userData = response.data?.data;
      const token = userData?.token || response.data?.token;

      if (token) {
        Cookie.set('authToken', token, { expires: 7 });
      }
      if (userData) {
        localStorage.setItem('user', JSON.stringify(userData));
      }

      return { token, user: userData };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Invalid email or password'
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/register', userData);
      const responseUserData = response.data?.data;
      const token = responseUserData?.token || response.data?.token;

      if (token) {
        Cookie.set('authToken', token, { expires: 7 });
      }
      if (responseUserData) {
        localStorage.setItem('user', JSON.stringify(responseUserData));
      }

      return { token, user: responseUserData };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Registration failed'
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post('/logout');
    } catch (error) {
      // Silently proceed so client-side state is cleared regardless of network error
    } finally {
      Cookie.remove('authToken');
      localStorage.removeItem('user');
    }
    return null;
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: Cookie.get('authToken') || null,
  isAuthenticated: !!Cookie.get('authToken'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      // Logout
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
