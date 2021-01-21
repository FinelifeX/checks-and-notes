import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorageKeys } from '@constants/asyncStorage';
import { MOCK_FIRST_LAUNCH } from '@config/index';

const useFirstLaunch = () => {
  const [isFirstLaunch, setFirstLaunch] = useState<boolean>(false);
  const [
    isFirstLaunchCheckInProgress,
    setFirstLaunchCheckInProgress,
  ] = useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem(AsyncStorageKeys.IsFirstLaunch)
      .then(async (value) => {
        setFirstLaunch(!value);
        await AsyncStorage.setItem(
          AsyncStorageKeys.IsFirstLaunch,
          String(true),
        );
      })
      .catch((e) => {
        console.log('useGreeting', e);
      })
      .finally(() => {
        setFirstLaunchCheckInProgress(false);
      });
  }, []);

  return {
    isFirstLaunch: MOCK_FIRST_LAUNCH || isFirstLaunch,
    isFirstLaunchCheckInProgress,
  };
};

export default useFirstLaunch;
