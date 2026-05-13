import { jsx as _jsx } from "react/jsx-runtime";
// components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
const ProtectedRoute = ({ redirectPath = '/login' }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: redirectPath, replace: true });
    }
    return _jsx(Outlet, {});
};
export default ProtectedRoute;
