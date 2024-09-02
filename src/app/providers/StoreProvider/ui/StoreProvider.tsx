import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type StateSchema } from '../config/StateSchema';
import { type DeepPartial } from 'app/types/DeepPartial';

interface Props {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, initialState }: Props) => {
  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
