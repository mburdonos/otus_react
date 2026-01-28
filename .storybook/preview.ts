import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from '../src/context/ThemeProvider';


// Тип для контекста стори (стандартный для Storybook 7+)
type StoryContext = {
  args: Record<string, any>;
  globals: Record<string, any>;
  parameters: Record<string, any>;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
