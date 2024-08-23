import { type StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';
import { type DeepPartial } from 'app/types/DeepPartial';

describe('getCounter', () => {
  it('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
