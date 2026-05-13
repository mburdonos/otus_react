// services/authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './api';
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');
            const token = getState().auth?.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (credentials) => ({
                url: '/signup',
                method: 'POST',
                body: credentials,
            }),
            transformErrorResponse: (response) => {
                if (response.data?.message) {
                    return {
                        data: response.data,
                        message: response.data.message,
                    };
                }
                return {
                    message: 'Registration failed',
                };
            },
        }),
        signin: builder.mutation({
            query: (credentials) => ({
                url: '/signin',
                method: 'POST',
                body: credentials,
            }),
            transformErrorResponse: (response) => {
                if (response.data?.message) {
                    return {
                        data: response.data,
                        message: response.data.message,
                    };
                }
                return {
                    message: 'Login failed',
                };
            },
        }),
        getProfile: builder.query({
            query: () => '/profile',
        }),
    }),
});
export const { useSignupMutation, useSigninMutation, useGetProfileQuery } = authApi;
