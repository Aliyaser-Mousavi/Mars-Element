import { useAppTheme } from './ThemeContext';
import { AppTheme } from './themeDefinitions';

/**
 * useTheme Hook
 * Returns active theme tokens. Synchronized with ThemeContext and dynamic user / system preference.
 */
export function useTheme(): AppTheme {
  const { theme } = useAppTheme();
  return theme;
}
