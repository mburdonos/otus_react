import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-vitest"],
  staticDirs: ['../public', '../src/images'],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // docs: {
  //   autodocs: true, // Включаем автоматическую генерацию
  // },
};
export default config;