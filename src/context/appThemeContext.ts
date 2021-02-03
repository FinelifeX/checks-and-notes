import React from 'react';
import Themes from '@constants/themes';

const AppThemeContext = React.createContext<Themes>(Themes.Dark);

export default AppThemeContext;
