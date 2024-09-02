import { type StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';
import { Suspense } from 'react';

const TranslationDecorator = (Story: StoryFn) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="">
        <Story />
      </Suspense>
    </I18nextProvider>
  );
};

export { TranslationDecorator };