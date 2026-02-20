import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from './RangeSlider';

const meta: Meta<typeof RangeSlider> = {
  title: 'ui/online_store/RangeSlider',
  component: RangeSlider,
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
};

export const CustomRange: Story = {
  args: {
    min: 10,
    max: 500,
    step: 10,
  },
};
