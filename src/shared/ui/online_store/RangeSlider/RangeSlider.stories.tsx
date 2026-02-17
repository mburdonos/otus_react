import type { Meta, StoryObj } from '@storybook/react';
import RangeSlider from './RangeSlider';

export default {
  title: 'Form/RangeSlider',
  component: RangeSlider,
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    defaultValue: { control: { type: 'object' } },
    onChange: { action: 'changed' },
  },
} as Meta<typeof RangeSlider>;

type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 5,
    defaultValue: [20, 80],
  },
};

export const SmallRange: Story = {
  args: {
    min: 0,
    max: 10,
    step: 1,
    defaultValue: [2, 7],
  },
};

export const StepBy10: Story = {
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: [10, 90],
  },
};
