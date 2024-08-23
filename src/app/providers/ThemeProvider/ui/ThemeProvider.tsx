import { type FC, type ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface Props {
  initialTheme?: Theme
  children: ReactNode
}

const ThemeProvider: FC<Props> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
