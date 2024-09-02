import { type FC, Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import AppRouter from './providers/Router/ui/AppRouter';
import { type AppDispatch } from './providers/StoreProvider/config/store';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
