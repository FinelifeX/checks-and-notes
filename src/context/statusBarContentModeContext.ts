import { createContext } from 'react';
import { StatusBarContentMode } from '@typings/statusBar';

type StatusBarContentModeState = {
  statusBarContentMode: StatusBarContentMode;
  setStatusBarContentMode(value: StatusBarContentMode): void;
};

const StatusBarContentModeContext = createContext<StatusBarContentModeState>({
  statusBarContentMode: StatusBarContentMode.Dark,
  setStatusBarContentMode: () => {},
});

export default StatusBarContentModeContext;
