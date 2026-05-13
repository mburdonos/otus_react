import { ModalPortal } from './ModalPortal';
const meta = {
    title: 'UI/base_components/ModalPortal',
    component: ModalPortal,
    tags: ['autodocs'],
    argTypes: {
        initialText: {
            control: 'text',
            description: 'Начальный текст в инпуте',
        },
    },
};
export default meta;
export const Default = {
    args: {
        initialText: '',
    },
};
export const WithInitialText = {
    args: {
        initialText: 'Привет из Storybook!',
    },
};
