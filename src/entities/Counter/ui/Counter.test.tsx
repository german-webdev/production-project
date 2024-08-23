import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import Counter from './Counter';

describe('Counter', () => {
  it('should display the correct initial text', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  it('increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  it('decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
