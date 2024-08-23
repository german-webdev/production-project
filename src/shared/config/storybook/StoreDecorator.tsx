import { type StoryFn } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from 'app/types/DeepPartial';

const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (Story: StoryFn) => {
  return (
    <StoreProvider initialState={initialState}>
      <Story />
    </StoreProvider>
  );
};

export { StoreDecorator };
