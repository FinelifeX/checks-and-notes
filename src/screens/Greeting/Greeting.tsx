import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { Text, Icon, Button } from '@ui-kitten/components';
import { SafeAreaView, Layout, Typography } from '@components/index';
import { greetingScreenListItems } from '@constants/greetingScreenListItems';
import { Colors } from '@constants/colors';
import { commonStyles } from '../../commonStyles';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '@constants/asyncStorage';

const { Paragraph } = Typography;

export const Greeting: FC = () => {
  const onStartPress = useCallback(async () => {
    await AsyncStorage.setItem(AsyncStorageKeys.IsFirstLaunch, 'false');
    console.log(
      'Wrote',
      AsyncStorageKeys.IsFirstLaunch,
      'false',
      'to async-storage',
    );
  }, []);

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
