import React, { FC } from 'react';
import {
  Divider,
  Text,
  TopNavigation,
  TopNavigationProps,
} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

type Props = TopNavigationProps & { title: string };

const TopNavBar: FC<Props> = ({ title, ...props }) => {
  return (
    <>
      <TopNavigation
        {...props}
        title={(textProps) => (
          <Text {...textProps} style={defaultStyles.title}>
            {title}
          </Text>
        )}
      />
      <Divider />
    </>
  );
};

const defaultStyles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default TopNavBar;
