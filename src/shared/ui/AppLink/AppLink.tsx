import { classNames } from "shared/lib/classNames/classNames";
import styles from './AppLink.module.scss';
import { Link, LinkProps } from "react-router-dom";
import { ReactNode } from "react";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
  const { 
    to, 
    className, 
    children, 
    theme = AppLinkTheme.PRIMARY,
    ...otherProps } = props;
  return (
    <Link 
      {...otherProps}
      to={to} 
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
    >
      {children}
    </Link>
  )
};
