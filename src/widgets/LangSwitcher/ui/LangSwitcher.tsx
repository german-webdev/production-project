import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames(styles.langSwitcher, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={toggle}
      >
        {t(short ? 'Короткий язык' : 'Язык')}
      </Button>
    </div>
  );
});
