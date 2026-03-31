// services/authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL, COMMAND_ID } from './api';

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

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
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
    
    signin: builder.mutation<AuthResponse, SigninRequest>({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: (response: { status: number; data: any }) => {
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
    
    getProfile: builder.query<Profile, void>({
      query: () => '/profile',
    }),
  }),
});

export const { 
  useSignupMutation, 
  useSigninMutation, 
  useGetProfileQuery 
} = authApi;