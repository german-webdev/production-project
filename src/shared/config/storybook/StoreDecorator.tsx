import { type StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/DeepPartial';


const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (Story: StoryFn) => {
  return (
    <StoreProvider initialState={initialState}>
      <Story />
    </StoreProvider>
  );
};

export { StoreDecorator };