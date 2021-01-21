import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import {
  StatusBarContentModeContext,
  useStatusBarContentMode,
} from '@utils/statusBarContentModeContext';
import RootNavigator from '@navigation/RootNavigator';

const mapping = require('./mapping.json');

const StatusBarContentModeProvider = StatusBarContentModeContext.Provider;

const App = () => {
  const statusBarContentState = useStatusBarContentMode();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark} customMapping={mapping}>
        <StatusBarContentModeProvider value={statusBarContentState}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </StatusBarContentModeProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;
