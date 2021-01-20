import React, { FC, useEffect } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import { SplashScreenNavigationProp } from '@typings/navigation';
import { styles } from './styles';

const SplashImg = require('@assets/images/splash.jpg');

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
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text maxFontSizeMultiplier={1} style={styles.text}>
            Checks & Notes
          </Text>
        </View>
        <Image source={SplashImg} resizeMode="contain" resizeMethod="resize" />
      </View>
    </>
  );
};
