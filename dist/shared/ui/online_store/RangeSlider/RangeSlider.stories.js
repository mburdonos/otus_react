import { RangeSlider } from './RangeSlider';
const meta = {
    title: 'ui/online_store/RangeSlider',
    component: RangeSlider,
};
export default meta;
export const Default = {
    args: {
        min: 0,
        max: 100,
        step: 1,
    },
};
export const CustomRange = {
    args: {
        min: 10,
        max: 500,
        step: 10,
    },
};
