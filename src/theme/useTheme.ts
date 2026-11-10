import { useColorScheme } from 'react-native';
import { AppTheme, darkAppTheme, lightAppTheme } from './index';

/**
 * useTheme Hook
 * Returns active theme tokens. Default mode is light theme.
 * Dark theme colors are centrally defined and ready.
 */
export function useTheme(): AppTheme {
  const systemScheme = useColorScheme();
  // As per Group 00 specifications, dark theme is defined centrally,
  // but complete theme switching experience is deferred to subsequent phases.
  // We can default to lightAppTheme or systemScheme if preferred.
  const isDark = systemScheme === 'dark';
  return isDark ? darkAppTheme : lightAppTheme;
}

