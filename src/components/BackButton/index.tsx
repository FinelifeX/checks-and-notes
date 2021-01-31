import React, { FC } from 'react';
import { Button, ButtonProps, Text } from '@ui-kitten/components';

import Icon from '@components/Icon';
import Icons from '@constants/icons';

import styles from './styles';

const BackButton: FC<ButtonProps> = ({ onPress }) => (
  <Button
    appearance="ghost"
    status="basic"
    accessoryLeft={(props) => (
      <Icon {...props} style={styles.icon} name={Icons.ArrowBack} />
    )}
    onPress={onPress}
  >
    {(textProps) => (
      <Text {...textProps} style={styles.text}>
        Back
      </Text>
    )}
  </Button>
);

export default BackButton;
