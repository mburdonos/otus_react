import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { hydrateAuth } from '../features/auth/authSlice';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Catalog } from '../pages/catalog';
import { Cart } from '../pages/cart';
import LoginForm from './LoginForm/LoginForm';
import ProtectedRoute from './ProtectRoute';

export function Routing() {

    const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hydrateAuth());
  }, [dispatch]);

  return (
      <Routes>
        <Route path="/otus_react" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />

          <Route element={<ProtectedRoute />}>
                    <Route
          path="/otus_react/catalog"
          element={<Catalog />}
        />
                <Route
          path="/otus_react/cart"
          element={
              <Cart />
          }
        />
          </Route>
      </Routes>
  );
}
