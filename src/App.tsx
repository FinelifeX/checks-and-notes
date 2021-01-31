import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import StatusBarContentModeContext from '@context/statusBarContentModeContext';
import useStatusBarContentMode from '@hooks/useStatusBarContentMode';
import RootNavigator from '@navigation/RootNavigator';
import useSnackbar from '@hooks/useSnackbar';
import { SnackbarContext } from '@context/snackbarContext';
import Snackbar from '@components/Snackbar';

const mapping = require('./mapping.json');

const StatusBarContentModeProvider = StatusBarContentModeContext.Provider;
const SnackbarStateProvider = SnackbarContext.Provider;

const App = () => {
  const statusBarContentState = useStatusBarContentMode();
  const snackbarState = useSnackbar();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark} customMapping={mapping}>
        <StatusBarContentModeProvider value={statusBarContentState}>
          <SnackbarStateProvider value={snackbarState}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
            <Snackbar />
          </SnackbarStateProvider>
        </StatusBarContentModeProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;
