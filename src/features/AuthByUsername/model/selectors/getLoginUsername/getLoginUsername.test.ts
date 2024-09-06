import { type StateSchema } from 'app/providers/StoreProvider';
import { type DeepPartial } from 'app/types/DeepPartial';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginIsLoading', () => {
  it('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin'
      }
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
