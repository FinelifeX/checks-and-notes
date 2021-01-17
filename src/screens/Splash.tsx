import React, { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SplashScreenNavigationProp } from '../types/navigation';

type Props = {
  navigation: SplashScreenNavigationProp;
};

export const Splash: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Greeting');
    }, 2000);
  }, [navigation]);

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};
