import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Divider, Layout, TopNavigation } from '@ui-kitten/components';
import {
  NoteScreenNavigationProp,
  NoteScreenRouteProp,
} from '@typings/navigation';
import { makeScreenTitle } from './utils';
import { styles } from './styles';

type Props = {
  navigation: NoteScreenNavigationProp;
  route: NoteScreenRouteProp;
};

export const Note: FC<Props> = ({ route }) => {
  const { data } = route.params ?? {};
  return (
    <SafeAreaView>
      <TopNavigation title={makeScreenTitle('Note', !!data)} />
      <Divider />
      <Layout style={styles.contentContainer}>
        <Text>Hello</Text>
      </Layout>
    </SafeAreaView>
  );
};
