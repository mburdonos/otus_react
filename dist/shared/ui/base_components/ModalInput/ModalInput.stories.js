import { ModalInput } from './ModalInput';
const meta = {
    title: 'UI/base_components/ModalInput',
    component: ModalInput,
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
