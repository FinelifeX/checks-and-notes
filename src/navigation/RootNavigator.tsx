import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashNavigator } from './SplashNavigator';
import { GreetingNavigator } from './GreetingNavigator';
import { rootNavigatorScreenOptions } from './options';
import { HomeNavigator } from './HomeNavigator';

const { Navigator, Screen } = createStackNavigator();

export const RootNavigator: FC = () => {
  return (
    <Navigator screenOptions={rootNavigatorScreenOptions}>
      <Screen name="Splash" component={SplashNavigator} />
      <Screen name="Greeting" component={GreetingNavigator} />
      <Screen name="Home" component={HomeNavigator} />
    </Navigator>
  );
};
