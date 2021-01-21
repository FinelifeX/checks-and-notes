import { createContext, useEffect, useState } from 'react';
import { StatusBarContentMode } from '@typings/statusBar';
import { StatusBar } from 'react-native';

type StatusBarContentModeState = {
  statusBarContentMode: StatusBarContentMode;
  setStatusBarContentMode(value: StatusBarContentMode): void;
};

export const StatusBarContentModeContext = createContext<StatusBarContentModeState>(
  {
    statusBarContentMode: StatusBarContentMode.Dark,
    setStatusBarContentMode: () => {},
  },
);

export const useStatusBarContentMode = () => {
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
