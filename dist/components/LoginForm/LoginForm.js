import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// pages/LoginForm.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { setCredentials, setUser } from '../../features/auth/authSlice';
import { signin, getProfile } from '../../services/api';
import styles from './LoginForm.module.css';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setFieldErrors({});
        setIsLoading(true);
        // Валидация
        if (!email.trim()) {
            setFieldErrors({ email: ['Email is required'] });
            setIsLoading(false);
            return;
        }
        if (!password.trim()) {
            setFieldErrors({ password: ['Password is required'] });
            setIsLoading(false);
            return;
        }
        try {
            console.log('Attempting login with email:', email);
            // 1. Авторизация
            const authResult = await signin({ email: email.trim(), password });
            console.log('Login successful, token received');
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
            console.error('Login error:', err);
            const error = err;
            if (error.errors && Array.isArray(error.errors)) {
                setError(error.errors.join(', '));
            }
            else if (error.errors && typeof error.errors === 'object') {
                setFieldErrors(error.errors);
                const firstError = Object.values(error.errors)[0];
                if (firstError && Array.isArray(firstError)) {
                    setError(firstError[0]);
                }
            }
            else if (error.message) {
                setError(error.message);
            }
            else {
                setError('Login failed. Please check your credentials and try again.');
            }
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx("div", { className: styles.container, children: _jsxs("div", { className: styles.formContainer, children: [_jsx("h2", { className: styles.title, children: "Login" }), error && _jsx("div", { className: styles.error, children: error }), _jsxs("form", { onSubmit: handleSubmit, className: styles.form, children: [_jsxs("div", { className: styles.inputGroup, children: [_jsx("label", { htmlFor: "email", className: styles.label, children: "Email:" }), _jsx("input", { type: "email", id: "email", value: email, onChange: (e) => setEmail(e.target.value), className: `${styles.input} ${fieldErrors.email ? styles.inputError : ''}`, placeholder: "Enter your email", disabled: isLoading, required: true }), fieldErrors.email && (_jsx("div", { className: styles.fieldError, children: fieldErrors.email.map((msg, idx) => (_jsx("span", { children: msg }, idx))) }))] }), _jsxs("div", { className: styles.inputGroup, children: [_jsx("label", { htmlFor: "password", className: styles.label, children: "Password:" }), _jsx("input", { type: "password", id: "password", value: password, onChange: (e) => setPassword(e.target.value), className: `${styles.input} ${fieldErrors.password ? styles.inputError : ''}`, placeholder: "Enter your password", disabled: isLoading, required: true }), fieldErrors.password && (_jsx("div", { className: styles.fieldError, children: fieldErrors.password.map((msg, idx) => (_jsx("span", { children: msg }, idx))) }))] }), _jsx("button", { type: "submit", className: styles.loginButton, disabled: isLoading, children: isLoading ? 'Logging in...' : 'Login' })] }), _jsxs("p", { className: styles.signupLink, children: ["Don't have an account? ", _jsx(Link, { to: "/signup", children: "Sign Up" })] })] }) }));
};
export default LoginForm;
