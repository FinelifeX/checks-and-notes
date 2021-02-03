import Colors from '@constants/colors';
import Themes from '@constants/themes';
import AppThemeContext from '@context/appThemeContext';
import React, { FC, useContext } from 'react';
import { SafeAreaView as SafeAreaViewBase, ViewProps } from 'react-native';

import { styles } from './styles';

export const SafeAreaView: FC<ViewProps> = ({ children, style }) => {
  const { theme } = useContext(AppThemeContext);
  const isDarkTheme = theme === Themes.Dark;

  return (
    <SafeAreaViewBase
      style={[
        styles.safeAreaView,
        { backgroundColor: isDarkTheme ? Colors.darkerBlue : Colors.white },
        style,
      ]}
    >
      {children}
    </SafeAreaViewBase>
  );
};

export default SafeAreaView;
