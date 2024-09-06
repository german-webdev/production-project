import { type FunctionComponent, type SVGProps } from 'react';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
  path: string
  text: string
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RouterPath.main,
    text: 'Главная',
    Icon: MainIcon
  },
  {
    path: RouterPath.about,
    text: 'О сайте',
    Icon: AboutIcon
  },
  {
    path: RouterPath.profile,
    text: 'Профиль',
    Icon: ProfileIcon
  }
];
