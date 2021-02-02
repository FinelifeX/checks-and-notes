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
};

const initialState: SnackbarState = {
  showSnackbar: () => {},
  closeSnackbar: () => {},
};

export const SnackbarContext = React.createContext<SnackbarState>(initialState);
