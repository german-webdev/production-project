import { FC, Suspense } from 'react'
// import { Counter } from './component/Counter';
import { Link, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';




export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const appClasses = classNames('app', {hovered: true, selected: true}, [theme])

  return (
    <div className={appClasses}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />}/>
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
      
    </div>
  )
};
