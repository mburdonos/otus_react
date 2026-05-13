import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppSelector } from '../../store/hooks';
import { useGetProfileQuery } from '../../services/authApi';
import styles from './Dashboard.module.css';
const Dashboard = () => {
    const { user, token } = useAppSelector((state) => state.auth);
    const { data: profile, isLoading, error } = useGetProfileQuery(undefined, {
        skip: !token, // Пропускаем запрос, если нет токена
    });
    const displayUser = profile || user;
    return (_jsxs("div", { className: styles.container, children: [_jsx("h1", { className: styles.title, children: "Dashboard" }), _jsxs("div", { className: styles.card, children: [_jsx("h3", { children: "Welcome to your Dashboard!" }), _jsx("p", { children: "This is a protected page that only authenticated users can see." }), isLoading && _jsx("p", { children: "Loading profile..." }), displayUser && (_jsxs("div", { className: styles.infoCard, children: [_jsx("h4", { children: "User Information:" }), _jsxs("p", { children: [_jsx("strong", { children: "Name:" }), " ", displayUser.name || 'Not set'] }), _jsxs("p", { children: [_jsx("strong", { children: "Email:" }), " ", displayUser.email] }), _jsxs("p", { children: [_jsx("strong", { children: "User ID:" }), " ", displayUser.id] }), _jsxs("p", { children: [_jsx("strong", { children: "Command ID:" }), " ", displayUser.commandId] }), displayUser.signUpDate && (_jsxs("p", { children: [_jsx("strong", { children: "Member Since:" }), " ", new Date(displayUser.signUpDate).toLocaleDateString()] }))] }))] })] }));
};
export default Dashboard;
