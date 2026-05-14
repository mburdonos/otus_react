import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { hydrateAuth } from '../features/auth/authSlice';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Catalog } from '../pages/catalog';
import { Cart } from '../pages/cart';
import LoginForm from './LoginForm/LoginForm';
import ProtectedRoute from './ProtectRoute';
import Signup from '../pages/Signup';
import SignupRTK from '../pages/SignupRTK';

export function Routing() {

    const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hydrateAuth());
  }, [dispatch]);

  return (
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<Signup />} />

{/* TODO добавить когда починят apie */}
          {/* <Route element={<ProtectedRoute />}> */}
                    <Route
          path="/catalog"
          element={<Catalog />}
        />
                <Route
          path="/cart"
          element={
              <Cart />
          }
        />
          {/* </Route> */}
      </Routes>
  );
}
