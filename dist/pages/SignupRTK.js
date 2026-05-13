import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// pages/SignupRTK.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setCredentials, setUser } from '../features/auth/authSlice';
import { useSignupMutation } from '../services/authApi';
import { COMMAND_ID, API_BASE_URL } from '../services/api';
import styles from '../pages_css/Signup.module.css';
const SignupRTK = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});
    const [generalError, setGeneralError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [signup, { isLoading }] = useSignupMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFieldErrors({});
        setGeneralError(null);
        // Базовая валидация
        if (!email.trim()) {
            setFieldErrors({ email: ['Email is required'] });
            return;
        }
        if (!password.trim()) {
            setFieldErrors({ password: ['Password is required'] });
            return;
        }
        if (password.length < 6) {
            setFieldErrors({ password: ['Password must be at least 6 characters'] });
            return;
        }
        try {
            console.log('Attempting signup with commandId:', COMMAND_ID);
            // 1. Регистрация с commandId
            const response = await signup({
                email: email.trim(),
                password,
                commandId: COMMAND_ID
            }).unwrap();
            console.log('Signup successful, token received');
            // 2. Сохраняем токен
            dispatch(setCredentials({ token: response.token }));
            // 3. Запрашиваем профиль
            const profileResponse = await fetch(`${API_BASE_URL}/profile`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${response.token}`,
                    'Content-Type': 'application/json',
                },
            });
            if (!profileResponse.ok) {
                throw new Error('Failed to fetch profile');
            }
            const profile = await profileResponse.json();
            console.log('Profile fetched:', profile);
            // 4. Сохраняем данные пользователя
            dispatch(setUser({
                id: profile.id,
                email: profile.email,
                name: profile.name || profile.email.split('@')[0],
                commandId: profile.commandId,
                signUpDate: profile.signUpDate,
            }));
            // Перенаправляем на каталог
            navigate('/catalog');
        }
        catch (err) {
            console.error('Signup error:', err);
            const error = err;
            // Обработка различных типов ошибок
            if (error?.data?.errors) {
                // Если сервер вернул детальные ошибки по полям
                setFieldErrors(error.data.errors);
            }
            else if (error?.data?.message) {
                const message = error.data.message;
                const lowerMessage = message.toLowerCase();
                if (lowerMessage.includes('email') || lowerMessage.includes('valid')) {
                    setFieldErrors({ email: [message] });
                }
                else if (lowerMessage.includes('password')) {
                    setFieldErrors({ password: [message] });
                }
                else if (lowerMessage.includes('already') || lowerMessage.includes('exists')) {
                    setFieldErrors({ email: ['User with this email already exists'] });
                }
                else {
                    setGeneralError(message);
                }
            }
            else if (error?.message) {
                setGeneralError(error.message);
            }
            else {
                setGeneralError('Registration failed. Please check your connection and try again.');
            }
        }
    };
    return (_jsx("div", { className: styles.container, children: _jsxs("div", { className: styles.formContainer, children: [_jsx("h2", { className: styles.title, children: "Sign Up RTK" }), generalError && _jsx("div", { className: styles.error, children: generalError }), _jsxs("form", { onSubmit: handleSubmit, className: styles.form, children: [_jsxs("div", { className: styles.inputGroup, children: [_jsx("label", { htmlFor: "email", className: styles.label, children: "Email:" }), _jsx("input", { type: "email", id: "email", value: email, onChange: (e) => setEmail(e.target.value), className: `${styles.input} ${fieldErrors.email ? styles.inputError : ''}`, placeholder: "example@mail.com", disabled: isLoading, autoComplete: "off" }), fieldErrors.email && (_jsx("div", { className: styles.fieldError, children: fieldErrors.email.map((msg, idx) => (_jsx("span", { children: msg }, idx))) }))] }), _jsxs("div", { className: styles.inputGroup, children: [_jsx("label", { htmlFor: "password", className: styles.label, children: "Password:" }), _jsx("input", { type: "password", id: "password", value: password, onChange: (e) => setPassword(e.target.value), className: `${styles.input} ${fieldErrors.password ? styles.inputError : ''}`, placeholder: "Minimum 6 characters", disabled: isLoading, autoComplete: "off" }), fieldErrors.password && (_jsx("div", { className: styles.fieldError, children: fieldErrors.password.map((msg, idx) => (_jsx("span", { children: msg }, idx))) }))] }), _jsx("button", { type: "submit", className: styles.submitButton, disabled: isLoading, children: isLoading ? 'Creating account...' : 'Sign Up' })] }), _jsxs("p", { className: styles.loginLink, children: ["Already have an account? ", _jsx(Link, { to: "/login", children: "Login" })] })] }) }));
};
export default SignupRTK;
