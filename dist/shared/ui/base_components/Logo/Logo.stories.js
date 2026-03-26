import Logo from './Logo';
const meta = {
    title: 'UI/base_components/Logo',
    component: Logo,
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: 'text',
            description: 'Текст внутри логотипа (по умолчанию "LOGO")',
        },
        className: {
            control: 'text',
            description: 'Дополнительный класс для кастомной стилизации',
        },
    },
};
export default meta;
export const Default = {
    args: {
        text: 'MYBRAND',
    },
};
export const WithCustomText = {
    args: {
        text: 'APP',
    },
};
export const Small = {
    args: {
        text: 'SM',
        className: 'small-logo',
    },
    parameters: {
        css: `
      .small-logo {
        width: 40px;
        height: 40px;
        font-size: 0.8rem;
      }
    `,
    },
};
export const Large = {
    args: {
        text: 'BIG',
        className: 'large-logo',
    },
    parameters: {
        css: `
      .large-logo {
        width: 800px;
        height: 80px;
        font-size: 1.2rem;
      }
    `,
    },
};
