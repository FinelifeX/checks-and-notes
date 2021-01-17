import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Greeting as GreetingScreen } from '@screens/index';
const { Navigator, Screen } = createStackNavigator();

export const GreetingNavigator: FC = () => (
  <Navigator>
    <Screen name="Greeting" component={GreetingScreen} />
  </Navigator>
);
