import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to="/otus_react/"
        className={({ isActive }) =>
          isActive ? styles['active-link'] : styles['nav-link']
        }
      >
        home
      </NavLink>
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
        cart
      </NavLink>
    </nav>
  );
}
