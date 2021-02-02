import { Divider, Text, Toggle } from '@ui-kitten/components';
import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import SettingsItem from './SettingsItem';

const SettingsList: FC = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SettingsItem
        title="Dark Theme"
        description="Choose app's appearance"
        right={<Toggle appearance="basic" checked />}
      />
      <Divider />
      <SettingsItem
        title="Dark Theme"
        description="Choose app's appearance"
        right={<Text>Hello</Text>}
      />
      <Divider />
    </ScrollView>
  );
};

export default SettingsList;
