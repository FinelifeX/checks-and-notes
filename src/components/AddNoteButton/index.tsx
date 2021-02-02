import React, { FC } from 'react';
import { Button, ButtonProps } from '@ui-kitten/components';
import Icon from '@components/Icon';
import Icons from '@constants/icons';

const AddNoteButton: FC<ButtonProps> = (props) => (
  <Button
    appearance="ghost"
    accessoryRight={() => <Icon name={Icons.Plus} />}
    {...props}
  />
);

export default AddNoteButton;
