import React, { FC } from 'react';
import { SafeAreaView as SFA } from 'react-native';
import { styles } from './styles';

export const SafeAreaView: FC = ({ children }) => {
  return <SFA style={styles.safeAreaView}>{children}</SFA>;
};
