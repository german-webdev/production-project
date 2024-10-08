import { type StoryFn } from '@storybook/react';
import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>

  );
};

export { ThemeDecorator };
