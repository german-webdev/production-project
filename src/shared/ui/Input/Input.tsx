import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';
import { type ChangeEvent, type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
| 'value'
| 'onChange'>;

export interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  autofocus?: boolean
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    autofocus,
    type = 'text',
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e.target.selectionStart || 0);
  };

  const mods: Record<string, boolean> = {};

  return (
    <div className={classNames(styles.inputWrapper, mods, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>
          {`${placeholder} >`}
        </div>
      )}

      <div className={styles.caretWrapper}>
        <input
          {...otherProps}
          className={styles.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          ref={inputRef}
        />
        {isFocused && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 8.85}px` }}
          />
        )}
      </div>

    </div>

  );
});
