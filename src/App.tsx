import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import RootNavigator from '@navigation/RootNavigator';
import useSnackbar from '@hooks/useSnackbar';
import { SnackbarContext } from '@context/snackbarContext';
import Snackbar from '@components/Snackbar';
import { StatusBar } from 'react-native';

const mapping = require('./mapping.json');

const SnackbarStateProvider = SnackbarContext.Provider;

const App = () => {
  const snackbarState = useSnackbar();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar barStyle="light-content" />
      <ApplicationProvider {...eva} theme={eva.dark} customMapping={mapping}>
        <SnackbarStateProvider value={snackbarState}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
          <Snackbar />
        </SnackbarStateProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;
