import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '@screens/Splash';

import { splashScreenOptions } from './options';

const { Navigator, Screen } = createStackNavigator();

export const SplashNavigator: FC = () => {
  return (
    <Navigator screenOptions={splashScreenOptions}>
      <Screen name="Splash" component={Splash} />
    </Navigator>
  );
};
