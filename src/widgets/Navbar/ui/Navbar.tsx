import { classNames } from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}></div>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>Главная</AppLink>
      <AppLink to={'/about'}>О сайте</AppLink>
    </div>
  )
};
