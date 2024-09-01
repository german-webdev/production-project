import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(styles.loginForm, {}, [className])}
    >
      <Input
        className={styles.input}
        placeholder={t('Введите username')}
        autofocus
      />
      <Input
        className={styles.input}
        placeholder={t('Введите пароль')}
      />
      <Button
        className={styles.loginBtn}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
