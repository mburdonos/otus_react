import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setCredentials, setUser } from '../features/auth/authSlice';
import { useSignupMutation, useGetProfileQuery } from '../services/authApi';
import { COMMAND_ID } from '../services/api';
import styles from '../pages_css/Signup.module.css';

const SignupRTK = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signup, { isLoading, error: apiError }] = useSignupMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});

    try {
      // 1. Регистрация с commandId
      const response = await signup({ 
        email, 
        password, 
        commandId: COMMAND_ID 
      }).unwrap();
      
      // 2. Сохраняем токен
      dispatch(setCredentials({ token: response.token }));
      
      // 3. Запрашиваем профиль (используем отдельный запрос)
      // В реальном приложении лучше сделать отдельный запрос или вернуть профиль при регистрации
      // Здесь для примера используем дополнительный запрос
      const profileResponse = await fetch(`${API_BASE_URL}/profile`, {
        headers: {
          'Authorization': `Bearer ${response.token}`,
        },
      });
      const profile = await profileResponse.json();
      
      // 4. Сохраняем данные пользователя
      dispatch(setUser({
        id: profile.id,
        email: profile.email,
        name: profile.name,
        commandId: profile.commandId,
        signUpDate: profile.signUpDate,
      }));
      
      navigate('/dashboard');
    } catch (err) {
      const error = err as any;
      
      // Обработка ошибок
      if (error?.data?.message) {
        const message = error.data.message;
        if (message.toLowerCase().includes('email') || 
            message.toLowerCase().includes('valid') ||
            message.toLowerCase().includes('already')) {
          setFieldErrors({ email: [message] });
        }
      }
    }
  };

  const getErrorMessage = () => {
    if (!apiError) return null;
    const error = apiError as any;
    if (typeof error === 'string') return error;
    if (error?.data?.message) return error.data.message;
    return 'Registration failed. Please try again.';
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Sign Up (RTK Query)</h2>
        
        {getErrorMessage() && (
          <div className={styles.error}>{getErrorMessage()}</div>
        )}
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.input} ${fieldErrors.email ? styles.inputError : ''}`}
              placeholder="example@mail.com"
              disabled={isLoading}
              required
            />
            {fieldErrors.email && (
              <div className={styles.fieldError}>
                {fieldErrors.email.map((msg, idx) => (
                  <span key={idx}>{msg}</span>
                ))}
              </div>
            )}
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Minimum 6 characters"
              disabled={isLoading}
              required
            />
          </div>
          
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
        
        <p className={styles.loginLink}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupRTK;