import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.incremented());
  };

  const decrement = () => {
    dispatch(counterActions.decremented());
  };

  return (
    <div>
      <h1 data-testid="value-title">{t('value')} - {counterValue}</h1>
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={increment}
        data-testid="increment-btn"
      >
        {t('increment')}
      </Button>
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={decrement}
        data-testid="decrement-btn"
      >
        {t('decrement')}
      </Button>
    </div>
  );
};

export default Counter;
