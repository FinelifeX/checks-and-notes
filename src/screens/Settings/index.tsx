import React, { FC } from 'react';

import SafeAreaView from '@components/SafeAreaView';
import TopNavBar from '@components/TopNavBar';
import Layout from '@components/Layout';
import SettingsList from '@components/SettingsList';

const Settings: FC = () => {
  return (
    <SafeAreaView>
      <TopNavBar title="Settings" alignment="center" hasBackButton />
      <Layout style={{ paddingHorizontal: 0, paddingVertical: 0 }}>
        <SettingsList />
      </Layout>
    </SafeAreaView>
  );
};

export default Settings;
