import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Modal from './Modal';
const meta = {
    title: 'UI/base_components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        visible: {
            control: 'boolean',
            description: 'Видимость модального окна',
        },
        children: {
            control: 'text',
            description: 'Содержимое модального окна',
        },
    },
};
export default meta;
export const Default = {
    args: {
        visible: true,
        children: 'Это содержимое модального окна.',
    },
};
export const Hidden = {
    args: {
        visible: false,
        children: 'Это содержимое не будет видно, так как visible=false.',
    },
};
export const WithLongContent = {
    args: {
        visible: true,
        children: (_jsxs("div", { children: [_jsx("p", { children: "\u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0432\u043D\u0443\u0442\u0440\u0438 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430." }), _jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }), _jsxs("ul", { children: [_jsx("li", { children: "\u041F\u0443\u043D\u043A\u0442 \u0441\u043F\u0438\u0441\u043A\u0430 1" }), _jsx("li", { children: "\u041F\u0443\u043D\u043A\u0442 \u0441\u043F\u0438\u0441\u043A\u0430 2" }), _jsx("li", { children: "\u041F\u0443\u043D\u043A\u0442 \u0441\u043F\u0438\u0441\u043A\u0430 3" })] })] })),
    },
};
