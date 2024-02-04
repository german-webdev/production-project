import { FC, Suspense } from 'react'
// import { Counter } from './component/Counter';
import { Link, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



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
          <Route path={'/about'} element={<AboutPageLazy />}/>
          <Route path={'/'} element={<MainPageLazy />}/>
        </Routes>
      </Suspense>
      
    </div>
  )
};
