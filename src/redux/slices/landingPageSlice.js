import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosConfig';

export const fetchLandingPageData = createAsyncThunk(
  'landingPage/fetchLandingPageData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/landing-page');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch landing page data'
      );
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const landingPageSlice = createSlice({
  name: 'landingPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingPageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLandingPageData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchLandingPageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default landingPageSlice.reducer;
