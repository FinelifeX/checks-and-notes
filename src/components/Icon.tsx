import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Icon as IconBase, IconProps, withStyles } from '@ui-kitten/components';

type Props = IconProps;

const Icon: FC<Props> = ({ name, style, eva, ...props }) => {
  return (
    <IconBase
      name={name}
      style={[defaultStyles.icon, style]}
      fill={eva.style.icon.fill}
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

export default withStyles(Icon, (theme) => ({
  icon: {
    fill: theme['text-basic-color'],
  },
}));
