import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    StoreDecorator({}),
    TranslationDecorator
  ]
};

export default preview;
