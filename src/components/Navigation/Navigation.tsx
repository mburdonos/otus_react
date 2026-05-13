import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.css';
import { CartBadge } from '../CartBadge/CartBadge';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { logout } from '../../features/auth/authSlice';

export function Navigation() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className={styles.navigation}>

      <div className={styles.leftSection}>
        <NavLink
          to="/otus_react/"
          className={({ isActive }) =>
            isActive ? styles['active-link'] : styles['nav-link']
          }
        >
          home
        </NavLink>

        {isAuthenticated && (
          <>
            <NavLink
              to="/otus_react/catalog"
              className={({ isActive }) =>
                isActive ? styles['active-link'] : styles['nav-link']
              }
            >
              catalog
            </NavLink>
            <NavLink
              to="/otus_react/cart"
              className={({ isActive }) =>
                isActive ? styles['active-link'] : styles['nav-link']
              }
            >
              <span className={styles.cartLink}>
                cart
                <CartBadge />
              </span>
            </NavLink>
          </>
        )}
      </div>

      <div className={styles.rightSection}>
        {isAuthenticated ? (
          <>
            <span className={styles.userInfo}>Welcome, {user?.name}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={styles.link}>
              Login
            </NavLink>
            <NavLink to="/signup" className={styles.link}>
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}