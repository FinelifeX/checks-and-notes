import React, { FC, ReactElement } from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';

type Props = {
  right?: ReactElement;
  left?: ReactElement;
  title: string;
  description?: string;
};

const SettingsItem: FC<Props> = ({ right, left, title, description }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
    }}
  >
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {!!left && <View>{left}</View>}
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
    {!!right && <View>{right}</View>}
  </View>
);

export default SettingsItem;
