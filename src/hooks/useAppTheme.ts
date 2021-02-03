import { useCallback, useState } from 'react';
import Themes from '@constants/themes';

const useAppTheme = () => {
  const [theme, setTheme] = useState(Themes.Dark);

  const toggleTheme = useCallback(() => {
    switch (theme) {
      case Themes.Dark:
        setTheme(Themes.Light);
        break;
      case Themes.Light:
        setTheme(Themes.Dark);
        break;
      default:
    }
  }, [theme]);

  return { theme, toggleTheme };
};

export default useAppTheme;
