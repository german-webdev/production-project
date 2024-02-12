import { FC } from 'react'

import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import AppRouter from './providers/Router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App: FC = () => {
  const { theme } = useTheme();

  const appClasses = classNames('app', {hovered: true, selected: true}, [theme])

  return (
    <div className={appClasses}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
};
