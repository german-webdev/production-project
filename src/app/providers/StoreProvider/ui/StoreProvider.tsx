import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type StateSchema } from '../config/StateSchema';
import { type DeepPartial } from 'app/types/DeepPartial';
import { type ReducersMapObject } from '@reduxjs/toolkit';

interface Props {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({
  children,
  initialState,
  asyncReducers
}: Props) => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
