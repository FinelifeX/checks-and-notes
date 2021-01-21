import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { rootNavigatorScreenOptions } from './options';
import { SplashNavigator } from './SplashNavigator';
import { GreetingNavigator } from './GreetingNavigator';
import { HomeNavigator } from './HomeNavigator';

const { Navigator, Screen } = createStackNavigator();

const RootNavigator: FC = () => {
  return (
    <Navigator screenOptions={rootNavigatorScreenOptions}>
      <Screen name="Splash" component={SplashNavigator} />
      <Screen name="Greeting" component={GreetingNavigator} />
      <Screen name="Home" component={HomeNavigator} />
    </Navigator>
  );
};

export default RootNavigator;
