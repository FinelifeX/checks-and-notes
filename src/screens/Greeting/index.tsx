import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { Text, Icon, Button } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { greetingScreenListItems } from '@constants/greetingScreenListItems';
import Colors from '@constants/colors';
import { AsyncStorageKeys } from '@constants/asyncStorage';
import Typography from '@components/Typography';
import SafeAreaView from '@components/SafeAreaView';
import Layout from '@components/Layout';
import { GreetingScreenNavigationProp } from '@typings/navigation';

import { commonStyles } from '../../commonStyles';
import { styles } from './styles';

type Props = {
  navigation: GreetingScreenNavigationProp;
};

const { Paragraph } = Typography;

const Greeting: FC<Props> = ({ navigation }) => {
  const onStartPress = useCallback(async () => {
    await AsyncStorage.setItem(AsyncStorageKeys.IsFirstLaunch, 'false');
    console.log(
      'Wrote',
      AsyncStorageKeys.IsFirstLaunch,
      'false',
      'to async-storage',
    );

    navigation.replace('Home');
  }, [navigation]);

  return (
    <SafeAreaView>
      <Layout level="1">
        <Text category="h3" style={styles.heading}>
          Welcome!
        </Text>
        <Paragraph>
          Glad you have decided to download{' '}
          <Text style={commonStyles.boldText}>Checks & Notes</Text>.
        </Paragraph>
        <Paragraph>
          Hope you will enjoy it and the features it presents:
        </Paragraph>
        <View style={styles.featuresList}>
          {greetingScreenListItems.map((item) => (
            <View key={item.id} style={styles.listItemContainer}>
              <Icon
                name={item.iconName}
                fill={Colors.textMain}
                style={styles.listItemIcon}
              />
              <View>
                <Paragraph>{item.title}</Paragraph>
                <Paragraph level={2}>{item.description}</Paragraph>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.startButtonContainer}>
          <Button style={styles.startButton} onPress={onStartPress}>
            Let's start!
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default Greeting;
