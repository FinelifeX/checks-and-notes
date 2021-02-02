import React, { FC, useEffect } from 'react';
import { View, Image, Text } from 'react-native';

import { SplashScreenNavigationProp } from '@typings/navigation';
import useFirstLaunch from '@hooks/useFirstLaunch';
import sleep from '@utils/sleep';

import { styles } from './styles';

const SplashImg = require('@assets/images/splash.jpg');

type Props = {
  navigation: SplashScreenNavigationProp;
};

const Splash: FC<Props> = ({ navigation }) => {
  const { isFirstLaunch, isFirstLaunchCheckInProgress } = useFirstLaunch();

  useEffect(() => {
    if (isFirstLaunchCheckInProgress) return;

    sleep(3000).then(() => {
      navigation.replace(isFirstLaunch ? 'Greeting' : 'Home');
    });
  }, [isFirstLaunch, isFirstLaunchCheckInProgress, navigation]);

  return (
    <>
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

export default Splash;
