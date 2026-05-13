import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// pages/Signup.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setCredentials, setUser } from '../features/auth/authSlice';
import { signup, getProfile, COMMAND_ID } from '../services/api';
import styles from '../pages_css/Signup.module.css';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [fieldErrors, setFieldErrors] = useState({});
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setFieldErrors({});
        // Базовая валидация перед отправкой
        if (!email.trim()) {
            setFieldErrors({ email: ['Email is required'] });
            setLoading(false);
            return;
        }
        if (!password.trim()) {
            setFieldErrors({ password: ['Password is required'] });
            setLoading(false);
            return;
        }
        if (password.length < 6) {
            setFieldErrors({ password: ['Password must be at least 6 characters'] });
            setLoading(false);
            return;
        }
        try {
            console.log('Attempting signup with commandId:', COMMAND_ID);
            // 1. Регистрация с commandId
            const authResult = await signup({
                email: email.trim(),
                password,
                commandId: COMMAND_ID
            });
            console.log('Signup successful, token received');
            // 2. Сохраняем токен
            dispatch(setCredentials({ token: authResult.token }));
            // 3. Получаем профиль пользователя
            const profile = await getProfile(authResult.token);
            console.log('Profile fetched:', profile);
            // 4. Сохраняем данные пользователя
            dispatch(setUser({
                id: profile.id,
                email: profile.email,
                name: profile.name || profile.email.split('@')[0],
                commandId: profile.commandId,
                signUpDate: profile.signUpDate,
            }));
            // Перенаправляем на страницу каталога
            navigate('/catalog');
        }
        catch (err) {
            console.error('Signup error:', err);
            const error = err;
            if (error.errors) {
                setFieldErrors(error.errors);
            }
            else if (error.message) {
                const message = error.message.toLowerCase();
                if (message.includes('email') || message.includes('valid')) {
                    setFieldErrors({ email: [error.message] });
                }
                else if (message.includes('password')) {
                    setFieldErrors({ password: [error.message] });
                }
                else if (message.includes('already') || message.includes('exists')) {
                    setFieldErrors({ email: ['User with this email already exists'] });
                }
                else {
                    setError(error.message);
                }
            }
            else {
                setError('Registration failed. Please check your connection and try again.');
            }
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: styles.container, children: _jsxs("div", { className: styles.formContainer, children: [_jsx("h2", { className: styles.title, children: "Sign Up" }), error && _jsx("div", { className: styles.error, children: error }), _jsxs("form", { onSubmit: handleSubmit, className: styles.form, children: [_jsxs("div", { className: styles.inputGroup, children: [_jsx("label", { htmlFor: "email", className: styles.label, children: "Email:" }), _jsx("input", { type: "email", id: "email", value: email, onChange: (e) => setEmail(e.target.value), className: `${styles.input} ${fieldErrors.email ? styles.inputError : ''}`, placeholder: "example@mail.com", disabled: loading, autoComplete: "off" }), fieldErrors.email && (_jsx("div", { className: styles.fieldError, children: fieldErrors.email.map((msg, idx) => (_jsx("span", { children: msg }, idx))) }))] }), _jsxs("div", { className: styles.inputGroup, children: [_jsx("label", { htmlFor: "password", className: styles.label, children: "Password:" }), _jsx("input", { type: "password", id: "password", value: password, onChange: (e) => setPassword(e.target.value), className: `${styles.input} ${fieldErrors.password ? styles.inputError : ''}`, placeholder: "Minimum 6 characters", disabled: loading, autoComplete: "off" }), fieldErrors.password && (_jsx("div", { className: styles.fieldError, children: fieldErrors.password.map((msg, idx) => (_jsx("span", { children: msg }, idx))) }))] }), _jsx("button", { type: "submit", className: styles.submitButton, disabled: loading, children: loading ? 'Creating account...' : 'Sign Up' })] }), _jsxs("p", { className: styles.loginLink, children: ["Already have an account? ", _jsx(Link, { to: "/login", children: "Login" })] })] }) }));
};
export default Signup;
