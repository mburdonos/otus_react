import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../features/auth/authSlice';
import styles from './LoginForm.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Фиксированные данные demo пользователя
  const DEMO_USER = {
    email: 'demo@example.com',
    password: 'demo123',
    userData: {
      id: '1',
      email: 'demo@example.com',
      name: 'Demo User',
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Проверка на demo пользователя
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      const mockToken = 'mock-jwt-token-' + Date.now();
      dispatch(login({ token: mockToken, user: DEMO_USER.userData }));
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Only demo@example.com / demo123 is allowed.');
    }
  };

  const handleDemoLogin = () => {
    setEmail(DEMO_USER.email);
    setPassword(DEMO_USER.password);
    setTimeout(() => {
      const mockToken = 'mock-jwt-token-' + Date.now();
      dispatch(login({ token: mockToken, user: DEMO_USER.userData }));
      navigate('/dashboard');
    }, 100);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Enter your password"
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
        <button onClick={handleDemoLogin} className={styles.demoButton}>
          Demo Login
        </button>
        <div className={styles.info}>
          <p><strong>Demo credentials:</strong></p>
          <p>Email: demo@example.com</p>
          <p>Password: demo123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;