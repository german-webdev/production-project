import { counterReducer, counterActions } from './counterSlice';
import { type CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  it('decremented', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decremented())).toEqual({ value: 9 });
  });

  it('incremented', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.incremented())).toEqual({ value: 11 });
  });

  it('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.incremented())).toEqual({ value: 1 });
  });
});
