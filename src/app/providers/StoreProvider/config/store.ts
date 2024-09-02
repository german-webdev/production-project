import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore (initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    loginForm: loginReducer
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}

const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
