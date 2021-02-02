import React, { FC } from 'react';
import { View } from 'react-native';
import { Paragraph } from '@components/Typography/Paragraph';
import styles from './styles';

const NotesListEmpty: FC = () => {
  return (
    <View style={styles.emptyContainer}>
      <Paragraph>Currently there are no notes.</Paragraph>
      <Paragraph>How about creating one?</Paragraph>
      <Paragraph level={2} style={styles.emptyHint}>
        Press "+" icon in the top right corner of the screen to start
      </Paragraph>
    </View>
  );
};

export default NotesListEmpty;
