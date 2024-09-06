import { type StateSchema } from 'app/providers/StoreProvider';
import { type DeepPartial } from 'app/types/DeepPartial';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginIsLoading', () => {
  it('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123'
      }
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
