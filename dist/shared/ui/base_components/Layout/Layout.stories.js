import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from './Layout';
const meta = {
    title: 'UI/base_components/Layout',
    component: Layout,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'Заголовок страницы, передаётся в компонент Header',
        },
        children: {
            control: 'text',
            description: 'Основной контент страницы',
        },
        className: {
            control: 'text',
            description: 'Дополнительный класс для кастомизации',
        },
    },
};
export default meta;
export const Default = {
    args: {
        title: 'Главная страница',
        children: (_jsxs("div", { children: [_jsx("h2", { children: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!" }), _jsx("p", { children: "\u042D\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0417\u0434\u0435\u0441\u044C \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u0435\u043A\u0441\u0442, \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u0444\u043E\u0440\u043C\u044B \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B." })] })),
    },
};
export const WithLongContent = {
    args: {
        title: 'Статья',
        children: (_jsxs("div", { children: [_jsx("h2", { children: "\u0414\u043B\u0438\u043D\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u044C\u044F" }), _jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }), _jsx("p", { children: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }), _jsxs("ul", { children: [_jsx("li", { children: "\u041F\u0443\u043D\u043A\u0442 \u0441\u043F\u0438\u0441\u043A\u0430 1" }), _jsx("li", { children: "\u041F\u0443\u043D\u043A\u0442 \u0441\u043F\u0438\u0441\u043A\u0430 2" }), _jsx("li", { children: "\u041F\u0443\u043D\u043A\u0442 \u0441\u043F\u0438\u0441\u043A\u0430 3" })] })] })),
    },
};
export const Minimal = {
    args: {
        title: '',
        children: _jsx("p", { children: "\u041F\u0443\u0441\u0442\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442." }),
    },
};
