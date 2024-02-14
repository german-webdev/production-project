import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { type ButtonHTMLAttributes, type PropsWithChildren, type ReactNode } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  theme?: ThemeButton
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classNames(styles.button, {}, [className, styles[theme]])}
      type='button'
    >
      {children}
    </button>
  );
};
