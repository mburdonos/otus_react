// store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isAuthenticated: false,
    token: localStorage.getItem('token'),
    user: null,
    profile: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            if (action.payload.user) {
                state.user = action.payload.user;
            }
            localStorage.setItem('token', action.payload.token);
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.profile = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            state.profile = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            // Не удаляем корзину, она остается в localStorage
        },
        hydrateAuth: (state) => {
            const token = localStorage.getItem('token');
            const userStr = localStorage.getItem('user');
            if (token) {
                state.isAuthenticated = true;
                state.token = token;
                if (userStr) {
                    try {
                        state.user = JSON.parse(userStr);
                        state.profile = JSON.parse(userStr);
                    }
                    catch (error) {
                        console.error('Failed to parse user from localStorage', error);
                    }
                }
            }
        },
    },
});
export const { setCredentials, setUser, logout, hydrateAuth } = authSlice.actions;
export default authSlice.reducer;
