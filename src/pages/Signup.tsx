import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setCredentials, setUser } from '../features/auth/authSlice';
import { signup, getProfile, COMMAND_ID, API_BASE_URL, ApiErrorResponse } from '../services/api';
import styles from '../pages_css/Signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
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
      
      navigate('/dashboard');
    } catch (err) {
      console.error('Signup error:', err);
      
      const error = err as ApiErrorResponse;
      
      // Детальная обработка ошибок
      if (error.errors) {
        // Если сервер вернул детальные ошибки по полям
        setFieldErrors(error.errors);
      } else if (error.message) {
        const message = error.message.toLowerCase();
        
        // Обработка различных типов ошибок
        if (message.includes('email') || message.includes('valid')) {
          setFieldErrors({ email: [error.message] });
        } else if (message.includes('password')) {
          setFieldErrors({ password: [error.message] });
        } else if (message.includes('already') || message.includes('exists')) {
          setFieldErrors({ email: ['User with this email already exists'] });
        } else {
          setError(error.message);
        }
      } else {
        setError('Registration failed. Please check your connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Sign Up</h2>
        
        {error && <div className={styles.error}>{error}</div>}
        
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
              disabled={loading}
              autoComplete="off"
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
              className={`${styles.input} ${fieldErrors.password ? styles.inputError : ''}`}
              placeholder="Minimum 6 characters"
              disabled={loading}
              autoComplete="off"
            />
            {fieldErrors.password && (
              <div className={styles.fieldError}>
                {fieldErrors.password.map((msg, idx) => (
                  <span key={idx}>{msg}</span>
                ))}
              </div>
            )}
          </div>
          
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
        
        <p className={styles.loginLink}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        
        <div className={styles.debugInfo}>
          <details>
            <summary>Debug Info</summary>
            <p><strong>API URL:</strong> {API_BASE_URL}</p>
            <p><strong>Command ID:</strong> {COMMAND_ID}</p>
            <p><strong>Request format:</strong> {`{ email, password, commandId }`}</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Signup;