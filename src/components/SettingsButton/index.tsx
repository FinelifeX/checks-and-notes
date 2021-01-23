import React, { FC } from 'react';
import { Button, ButtonProps } from '@ui-kitten/components';
import Icon from '@components/Icon';
import Icons from '@constants/icons';

type Props = ButtonProps;

const SettingsButton: FC<Props> = (props) => {
  return (
    <Button
      appearance="ghost"
      accessoryRight={() => <Icon name={Icons.Settings} />}
      {...props}
    />
  );
};

export default SettingsButton;
