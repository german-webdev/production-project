import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { memo, type ButtonHTMLAttributes, type PropsWithChildren, type ReactNode } from 'react';

export enum ButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  theme?: ButtonTheme
  square?: true
  size?: ButtonSize
  disabled?: boolean
}

export const Button = memo((props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
    [styles.disabled]: disabled
  };

  return (
    <button
      {...otherProps}
      className={classNames(styles.button, mods, [className, styles[theme]])}
      type='button'
      disabled={disabled}
    >
      {children}
    </button>
  );
});
