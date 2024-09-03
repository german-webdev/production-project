import { type ReducersMapObject } from '@reduxjs/toolkit';
import { type StoryFn } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from 'app/types/DeepPartial';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
};

const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>
) => (Story: StoryFn) => {
  return (
    <StoreProvider
      initialState={initialState}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
};

export { StoreDecorator };
