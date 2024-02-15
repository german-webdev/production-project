import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Spinner.module.scss';

interface SpinnerProps {
  className?: string
}

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className={classNames(styles['lds-roller'], {}, [className])}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
