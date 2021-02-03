import { useEffect, useState } from 'react';
import Themes from '@constants/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '@constants/asyncStorage';

const useAppTheme = () => {
  const [theme, setTheme] = useState(Themes.Dark);

  useEffect(() => {
    AsyncStorage.getItem(AsyncStorageKeys.Theme)
      .then((value) => {
        if (value) setTheme(value as Themes);
      })
      .catch(() => {
        console.log('Error while reading theme from storage');
      });
  }, []);

  return { theme, setTheme };
};

export default useAppTheme;
