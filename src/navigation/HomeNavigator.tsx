import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@screens/Home';
import Note from '@screens/Note';
import { Settings } from '@screens/Settings';

import { navigatorDefaultOptions } from './options';

const { Navigator, Screen } = createStackNavigator();

export const HomeNavigator: FC = () => {
  return (
    <Navigator screenOptions={navigatorDefaultOptions}>
      <Screen name="Home" component={Home} />
      <Screen name="Note" component={Note} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};
