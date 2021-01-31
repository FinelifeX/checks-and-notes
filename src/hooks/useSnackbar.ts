import { useCallback, useState } from 'react';
import { Snackbar, SnackbarState } from '@context/snackbarContext';

export type SnackbarConfig = Omit<Snackbar, 'id'>;

const useSnackbar = (): SnackbarState => {
  const [snackbar, setSnackbar] = useState<Snackbar>({});

  const showSnackbar = useCallback((config: SnackbarConfig) => {
    setSnackbar({
      id: Date.now(),
      ...config,
    });
  }, []);

  const closeSnackbar = useCallback(() => {
    setSnackbar({
      ...snackbar,
      id: undefined,
    });
  }, [snackbar]);

  return {
    id: snackbar.id,
    text: snackbar.text,
    buttonText: snackbar.buttonText,
    onButtonPress: snackbar.onButtonPress,
    closeSnackbar,
    showSnackbar,
  };
};

export default useSnackbar;
