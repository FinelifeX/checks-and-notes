import React, { FC } from 'react';
import { SafeAreaView as SafeAreaViewBase } from 'react-native';
import { styles } from './styles';

export const SafeAreaView: FC = ({ children }) => {
  return (
    <SafeAreaViewBase style={styles.safeAreaView}>{children}</SafeAreaViewBase>
  );
};
