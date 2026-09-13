import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toast: {
    isVisible: false,
    message: '',
    type: 'info', // success, error, warning, info
  },
  loading: false,
  sidebarOpen: false,
  modal: {
    isOpen: false,
    title: '',
    content: null,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.toast = {
        isVisible: true,
        message: action.payload.message,
        type: action.payload.type || 'info',
      };
    },
    hideToast: (state) => {
      state.toast.isVisible = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openModal: (state, action) => {
      state.modal = {
        isOpen: true,
        title: action.payload.title,
        content: action.payload.content,
      };
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
    },
  },
});

export const {
  showToast,
  hideToast,
  setLoading,
  toggleSidebar,
  openModal,
  closeModal,
} = uiSlice.actions;

export default uiSlice.reducer;
