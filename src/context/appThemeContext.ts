import React from 'react';
import Themes from '@constants/themes';

type AppThemeState = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};

const AppThemeContext = React.createContext<AppThemeState>({
  theme: Themes.Dark,
  setTheme: () => {},
});

export default AppThemeContext;
