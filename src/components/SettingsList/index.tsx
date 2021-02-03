import React, { FC, useContext } from 'react';
import { ScrollView } from 'react-native';
import { Divider, Toggle } from '@ui-kitten/components';

import Icon from '@components/Icon';
import Icons from '@constants/icons';
import Themes from '@constants/themes';
import AppThemeContext from '@context/appThemeContext';

import SettingsItem from './SettingsItem';
import styles from './styles';

const themesMapping = (checked: boolean) =>
  checked ? Themes.Dark : Themes.Light;

const SettingsList: FC = () => {
  const { theme, setTheme } = useContext(AppThemeContext);

  return (
    <ScrollView style={styles.scrollView}>
      <SettingsItem
        title="Dark Theme"
        description="Choose app's appearance"
        right={
          <Toggle
            appearance="basic"
            checked={theme === Themes.Dark}
            onChange={(checked) => {
              setTheme(themesMapping(checked));
            }}
          />
        }
      />
      <Divider />
      <SettingsItem
        title="About App"
        description="Want more info?"
        right={<Icon name={Icons.QuestionCircle} />}
      />
      <Divider />
    </ScrollView>
  );
};

export default SettingsList;
