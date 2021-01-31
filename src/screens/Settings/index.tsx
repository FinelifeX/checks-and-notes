import React, { FC } from 'react';

import Typography from '@components/Typography';
import SafeAreaView from '@components/SafeAreaView';
import TopNavBar from '@components/TopNavBar';
import Layout from '@components/Layout';

const { Paragraph } = Typography;

const Settings: FC = () => {
  return (
    <SafeAreaView>
      <TopNavBar title="Settings" alignment="center" hasBackButton />
      <Layout>
        <Paragraph>Settings screen</Paragraph>
      </Layout>
    </SafeAreaView>
  );
};

export default Settings;
