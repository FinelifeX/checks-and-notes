import { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { StatusBarContentMode } from '@typings/statusBar';

const useStatusBarContentMode = () => {
  const [statusBarContentMode, setStatusBarContentMode] = useState(
    StatusBarContentMode.Dark,
  );

  useEffect(() => {
    StatusBar.setBarStyle(
      statusBarContentMode === StatusBarContentMode.Light
        ? 'light-content'
        : 'dark-content',
    );
  });

  return {
    statusBarContentMode,
    setStatusBarContentMode: (value: StatusBarContentMode) => {
      setStatusBarContentMode(value);
    },
  };
};

export default useStatusBarContentMode;
