import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ThemePreference, themeStorage } from '../services/themeService';
import { AppTheme, darkAppTheme, lightAppTheme } from './themeDefinitions';

interface ThemeContextType {
  theme: AppTheme;
  isDark: boolean;
  preference: ThemePreference;
  setPreference: (pref: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightAppTheme,
  isDark: false,
  preference: 'system',
  setPreference: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = useColorScheme();
  const [preference, setPrefState] = useState<ThemePreference>('system');

  useEffect(() => {
    themeStorage.getThemePreference().then(setPrefState);
  }, []);

  const setPreference = async (newPref: ThemePreference) => {
    setPrefState(newPref);
    await themeStorage.setThemePreference(newPref);
  };

  const isDark =
    preference === 'dark' ? true : preference === 'light' ? false : systemScheme === 'dark';

  const theme = isDark ? darkAppTheme : lightAppTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, preference, setPreference }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
