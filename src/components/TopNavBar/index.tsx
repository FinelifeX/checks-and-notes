import React, { FC } from 'react';
import {
  Divider,
  Text,
  TopNavigation,
  TopNavigationProps,
} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '@components/BackButton';

type Props = TopNavigationProps & { title: string; hasBackButton?: boolean };

const TopNavBar: FC<Props> = ({ title, hasBackButton = false, ...props }) => {
  const navigation = useNavigation();

  return (
    <>
      <TopNavigation
        {...props}
        title={(textProps) => (
          <Text {...textProps} style={defaultStyles.title}>
            {title}
          </Text>
        )}
        accessoryLeft={
          hasBackButton
            ? (leftAccessoryProps) => (
                <BackButton
                  {...leftAccessoryProps}
                  onPress={navigation.goBack}
                />
              )
            : undefined
        }
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
