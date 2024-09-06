import { type DeepPartial } from 'app/types/DeepPartial';
import { type LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const state: DeepPartial<LoginSchema> = {
  username: 'admin',
  password: '123',
  isLoading: false,
  error: 'error'
};

describe('loginSlice', () => {
  it('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'admin'
    };

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('administrator')
    )).toEqual({ username: 'administrator' });
  });

  it('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123'
    };

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('12345')
    )).toEqual({ password: '12345' });
  });
});
