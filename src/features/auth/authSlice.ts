import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
}

interface User {
  id: string;
  email: string;
  name: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    hydrateAuth: (state) => {
      const token = localStorage.getItem('token');
      const userStr = localStorage.getItem('user');
      
      if (token && userStr) {
        try {
          const user = JSON.parse(userStr);
          state.isAuthenticated = true;
          state.token = token;
          state.user = user;
        } catch (error) {
          console.error('Failed to parse user from localStorage', error);
        }
      }
    },
  },
});

export const { login, logout, hydrateAuth } = authSlice.actions;
export default authSlice.reducer;