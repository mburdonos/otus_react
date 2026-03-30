import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { COMMAND_ID } from './api';

export interface SignupRequest {
  email: string;
  password: string;
  commandId: string;
}

export interface SigninRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  signUpDate: Date;
  commandId: string;
}

export interface UpdateProfileRequest {
  name: string;
}

export interface ChangePasswordRequest {
  password: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  success: boolean;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://your-server.com/api', // Замените на реальный URL
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json');
      const token = (getState() as any).auth?.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignupRequest>({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: (response: { status: number; data: any }) => {
        if (response.data?.message) {
          return response.data.message;
        }
        return 'Registration failed';
      },
    }),
    
    signin: builder.mutation<AuthResponse, SigninRequest>({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: (response: { status: number; data: any }) => {
        if (response.data?.message) {
          return response.data.message;
        }
        return 'Login failed';
      },
    }),
    
    getProfile: builder.query<Profile, void>({
      query: () => '/profile',
    }),
    
    updateProfile: builder.mutation<Profile, UpdateProfileRequest>({
      query: (data) => ({
        url: '/profile',
        method: 'PATCH',
        body: data,
      }),
    }),
    
    changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordRequest>({
      query: (data) => ({
        url: '/profile/change-password',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = authApi;