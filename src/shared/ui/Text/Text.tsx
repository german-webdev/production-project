import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  content?: string
  theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    content,
    theme = TextTheme.PRIMARY
  } = props;

  const mods = {
    [styles[theme]]: true
  };

  return (
    <div className={classNames(styles.text, mods, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {content && <p className={styles.content}>{content}</p>}
    </div>
  );
});
