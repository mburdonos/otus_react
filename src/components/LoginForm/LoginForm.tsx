import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { setCredentials, setUser } from '../../features/auth/authSlice';
import { signin, getProfile, ApiErrorResponse } from '../../services/api';
import styles from './LoginForm.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setFieldErrors({});
    setIsLoading(true);

    try {
      console.log('Attempting login for:', email);
      
      // 1. Авторизация
      const authResult = await signin({ email, password });
      
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
      
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      
      const error = err as ApiErrorResponse;
      
      if (error.errors) {
        setFieldErrors(error.errors);
      } else if (error.message) {
        setError(error.message);
      } else {
        setError('Login failed. Please check your credentials and try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Login</h2>
        
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
              placeholder="Enter your email"
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
              className={`${styles.input} ${fieldErrors.password ? styles.inputError : ''}`}
              placeholder="Enter your password"
              disabled={isLoading}
              required
            />
            {fieldErrors.password && (
              <div className={styles.fieldError}>
                {fieldErrors.password.map((msg, idx) => (
                  <span key={idx}>{msg}</span>
                ))}
              </div>
            )}
          </div>
          
          <button type="submit" className={styles.loginButton} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <p className={styles.signupLink}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;