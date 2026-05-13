export const API_BASE_URL = 'https://19429ba06ff2.vps.myjino.ru/api';
export const COMMAND_ID = 'bmp'; // Замените на ваш реальный commandId
// Вспомогательная функция для обработки ошибок
const handleResponse = async (response) => {
    const contentType = response.headers.get('content-type');
    let data;
    if (contentType && contentType.includes('application/json')) {
        data = await response.json();
    }
    else {
        const text = await response.text();
        data = { message: text };
    }
    if (!response.ok) {
        const error = {
            message: data.message || data.error || `HTTP error ${response.status}`,
            errors: data.errors,
            statusCode: response.status,
        };
        throw error;
    }
    return data;
};
// API методы
export const signup = async (data) => {
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
export const signin = async (data) => {
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
export const getProfile = async (token) => {
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
export const updateProfile = async (token, data) => {
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
export const changePassword = async (token, data) => {
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
