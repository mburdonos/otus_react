import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeToggle } from './ThemeToggle';
import { ThemeProvider } from '../../../../context/ThemeProvider';
const meta = {
    title: 'UI/base_components/ThemeToggle',
    component: ThemeToggle,
    decorators: [
        (Story) => (_jsx(ThemeProvider, { children: _jsx(Story, {}) })),
    ],
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;
export const Default = {};
export const InDarkTheme = {
    decorators: [
        (Story) => (_jsx(ThemeProvider, { children: _jsx("div", { "data-theme": "dark", style: { padding: '1rem' }, children: _jsx(Story, {}) }) })),
    ],
};
