import React, { FC } from 'react';

import SafeAreaView from '@components/SafeAreaView';
import TopNavBar from '@components/TopNavBar';
import Layout from '@components/Layout';
import SettingsList from '@components/SettingsList';

import styles from './styles';

const Settings: FC = () => {
  return (
    <SafeAreaView>
      <TopNavBar title="Settings" alignment="center" hasBackButton />
      <Layout style={styles.layout}>
        <SettingsList />
      </Layout>
    </SafeAreaView>
  );
};

export default Settings;
