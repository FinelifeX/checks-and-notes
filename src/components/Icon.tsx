import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Icon as IconBase, IconProps } from '@ui-kitten/components';
import Colors from '@constants/colors';

type Props = IconProps;

const Icon: FC<Props> = ({ name, style, ...props }) => {
  return (
    <IconBase
      name={name}
      style={[defaultStyles.icon, style]}
      fill={Colors.white}
      {...props}
    />
  );
};

const defaultStyles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});

export default Icon;
