import { classNames } from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation()

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}></div>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>{t('Главная')}</AppLink>
      <AppLink to={'/about'}>{t('О сайте')}</AppLink>
    </div>
  )
};
