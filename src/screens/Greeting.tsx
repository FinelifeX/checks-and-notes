import React, { FC } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { TopNavBar } from '@components/index';

export const Greeting: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#8F9BB3' }}>
      <TopNavBar title="Welcome!" textAlignment="center" />
      <Layout style={{ flex: 1 }}>
        <Text>Welcome</Text>
      </Layout>
    </SafeAreaView>
  );
};
