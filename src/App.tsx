import 'react-native-gesture-handler';

import React, { FC, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'react-native';

import RootNavigator from '@navigation/RootNavigator';
import useSnackbar from '@hooks/useSnackbar';
import { SnackbarContext } from '@context/snackbarContext';
import AppThemeContext from '@context/appThemeContext';
import Snackbar from '@components/Snackbar';
import useAppTheme from '@hooks/useAppTheme';
import Themes from '@constants/themes';

const mapping = require('./mapping.json');

const SnackbarStateProvider = SnackbarContext.Provider;
const AppThemeProvider = AppThemeContext.Provider;

const Root: FC = () => {
  const snackbarState = useSnackbar();
  const appThemeGlobal = useContext(AppThemeContext);
  const appTheme = appThemeGlobal === Themes.Dark ? eva.dark : eva.light;

  return (
    <ApplicationProvider {...eva} theme={appTheme} customMapping={mapping}>
      <SnackbarStateProvider value={snackbarState}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <Snackbar />
      </SnackbarStateProvider>
    </ApplicationProvider>
  );
};

const App: FC = () => {
  const { theme } = useAppTheme();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar barStyle="light-content" />
      <AppThemeProvider value={theme}>
        <Root />
      </AppThemeProvider>
    </>
  );
};

export default App;
