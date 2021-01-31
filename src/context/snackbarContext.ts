import React, { ReactElement } from 'react';

export type Snackbar = Partial<{
  id: number;
  text: string | ReactElement;
  buttonText: string;
  onButtonPress: () => void;
}>;

export type SnackbarState = Snackbar & {
  showSnackbar: (config: Omit<Snackbar, 'id'>) => void;
  closeSnackbar: () => void;
  isShown: boolean;
};

const initialState: SnackbarState = {
  showSnackbar: () => {},
  closeSnackbar: () => {},
  isShown: false,
};

export const SnackbarContext = React.createContext<SnackbarState>(initialState);
