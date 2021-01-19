import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Greeting as GreetingScreen } from '@screens/index';
import { navigatorDefaultOptions } from './options';
const { Navigator, Screen } = createStackNavigator();

export const GreetingNavigator: FC = () => (
  <Navigator screenOptions={navigatorDefaultOptions}>
    <Screen name="Greeting" component={GreetingScreen} />
  </Navigator>
);
