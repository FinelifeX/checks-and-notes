import React, { FC } from 'react';
import { Button, ButtonProps } from '@ui-kitten/components';
import Icon from '@components/Icon';
import Icons from '@constants/icons';
import { StyleSheet } from 'react-native';

type Props = ButtonProps;

const AddNoteButton: FC<Props> = ({ children, style, ...props }) => {
  return (
    <Button
      status="primary"
      accessoryRight={() => (
        <Icon name={Icons.Plus} style={defaultStyles.icon} />
      )}
      style={[defaultStyles.button, style]}
      {...props}
    >
      {children}
    </Button>
  );
};

const defaultStyles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 50,
    borderWidth: 1,
  },
  icon: {
    height: 28,
    width: 28,
  },
});

export default AddNoteButton;
