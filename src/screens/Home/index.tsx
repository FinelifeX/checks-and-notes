import React, { FC } from 'react';

import SafeAreaView from '@components/SafeAreaView';
import TopNavBar from '@components/TopNavBar';
import Layout from '@components/Layout';
import Typography from '@components/Typography';

const { Paragraph } = Typography;

const Home: FC = () => {
  return (
    <SafeAreaView>
      <TopNavBar title="Home" textAlignment="center" />
      <Layout>
        <Paragraph>Home screen</Paragraph>
      </Layout>
    </SafeAreaView>
  );
};

export default Home;
