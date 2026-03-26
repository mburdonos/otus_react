import { jsx as _jsx } from "react/jsx-runtime";
import Header from './Header';
import { ThemeProvider } from '../../../../context/ThemeProvider';
import { LanguageProvider } from '../../../../context/LanguageContext';
const meta = {
    title: 'UI/base_components/Header',
    component: Header,
    tags: ['autodocs'],
    decorators: [
        (Story) => (_jsx(ThemeProvider, { children: _jsx(LanguageProvider, { children: _jsx(Story, {}) }) })),
    ],
    argTypes: {
        title: {
            control: 'text',
            description: 'Заголовок страницы, отображается справа от логотипа',
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
        title: 'main_page',
    },
    decorators: [
        (Story) => (_jsx(ThemeProvider, { children: _jsx(LanguageProvider, { children: _jsx(Story, {}) }) })),
    ],
};
export const WithLongTitle = {
    args: {
        title: 'long_title',
    },
    decorators: [
        (Story) => (_jsx(ThemeProvider, { children: _jsx(LanguageProvider, { children: _jsx(Story, {}) }) })),
    ],
};
export const Compact = {
    args: {
        title: 'short_title',
        className: 'compact-header',
    },
    decorators: [
        (Story) => (_jsx(ThemeProvider, { children: _jsx(LanguageProvider, { children: _jsx(Story, {}) }) })),
    ],
    parameters: {
        css: `
      .compact-header {
        padding: 8px 16px;
        gap: 10px;
      }
    `,
    },
};
