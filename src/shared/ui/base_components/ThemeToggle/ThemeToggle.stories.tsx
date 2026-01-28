// src/stories/ThemeToggle.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';
import { ThemeProvider } from '../../../../context/ThemeProvider';

const meta: Meta<typeof ThemeToggle> = {
  title: 'UI/base_components/ThemeToggle',
  component: ThemeToggle,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};

export const InDarkTheme: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div data-theme="dark" style={{ padding: '1rem' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
