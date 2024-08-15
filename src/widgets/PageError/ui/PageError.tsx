import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(styles.pageError, {}, [className])}>
      <p>{t('Произошла не предвиденная ошибка')}</p>
      <Button className={styles.button} onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
