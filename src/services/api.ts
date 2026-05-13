export const API_BASE_URL = 'https://19429ba06ff2.vps.myjino.ru/api';
export const COMMAND_ID = 'bmp';

// Типы для API
export interface SignUpBody {
  email: string;
  password: string;
  commandId: string;
}

export interface SignInBody {
  email: string;
  password: string;
}

export interface AuthResult {
  token: string;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  signUpDate: Date;
  commandId: string;
}

export interface UpdateProfileBody {
  name: string;
}

export interface ChangePasswordBody {
  password: string;
  newPassword: string;
}

export interface ChangePasswordResult {
  success: boolean;
}

export interface ApiErrorResponse {
  message?: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

// Вспомогательная функция для обработки ошибок
const handleResponse = async (response: Response) => {
  const contentType = response.headers.get('content-type');
  let data: any;
  
  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  } else {
    const text = await response.text();
    data = { message: text };
  }
  
  if (!response.ok) {
    const error: ApiErrorResponse = {
      message: data.message || data.error || `HTTP error ${response.status}`,
      errors: data.errors,
      statusCode: response.status,
    };
    throw error;
  }
  
  return data;
};

// API методы
export const signup = async (data: SignUpBody): Promise<AuthResult> => {
  console.log('Sending signup request:', { ...data, password: '***' });
  
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
};

export const signin = async (data: SignInBody): Promise<AuthResult> => {
  console.log('Sending signin request:', { ...data, password: '***' });
  
  const response = await fetch(`${API_BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
};

export const getProfile = async (token: string): Promise<Profile> => {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  return handleResponse(response);
};

export const updateProfile = async (token: string, data: UpdateProfileBody): Promise<Profile> => {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
};

export const changePassword = async (token: string, data: ChangePasswordBody): Promise<ChangePasswordResult> => {
  const response = await fetch(`${API_BASE_URL}/profile/change-password`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
};