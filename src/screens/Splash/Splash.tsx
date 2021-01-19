import React, { FC, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { SplashScreenNavigationProp } from '@typings/navigation';
import SplashImg from '@assets/images/splash.jpg';
import { styles } from './styles';

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
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text maxFontSizeMultiplier={1} style={styles.text}>
          Checks & Notes
        </Text>
      </View>
      <Image source={SplashImg} resizeMode="contain" resizeMethod="resize" />
    </View>
  );
};
