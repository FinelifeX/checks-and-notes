import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home as HomeScreen,
  Note as NoteScreen,
  Settings as SettingsScreen,
} from '@screens/index';

const { Navigator, Screen } = createStackNavigator();

export const HomeNavigator: FC = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Note" component={NoteScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
};
