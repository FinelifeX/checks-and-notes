import React, { FC } from 'react';
import { Text } from '@ui-kitten/components';
import { StyleSheet, TextStyle } from 'react-native';

type Props = {
  style?: TextStyle;
  level?: 1 | 2;
  children: any;
};

export const Paragraph: FC<Props> = ({ style, level = 1, children }) => (
  <Text category={`p${level}`} style={[styles.text, style]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    marginBottom: 8,
  },
});
