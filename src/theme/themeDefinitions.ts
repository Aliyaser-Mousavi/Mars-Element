import {
  BORDER_RADIUS,
  DARK_THEME,
  ELEMENT_CATEGORIES,
  ELEMENT_FAMILY_COLORS,
  FONT_FAMILY,
  ICON_SIZE,
  INTERACTIVE,
  LAYOUT,
  LIGHT_THEME,
  PRIMARY_PALETTE,
  SHADOWS,
  SPACING,
  TYPOGRAPHY_SCALE,
} from '@/constants';
import { ThemeColors } from '@/types';

export interface AppTheme {
  isDark: boolean;
  colors: ThemeColors;
  typography: typeof TYPOGRAPHY_SCALE;
  spacing: typeof SPACING;
  borderRadius: typeof BORDER_RADIUS;
  layout: typeof LAYOUT;
  fontFamily: typeof FONT_FAMILY;
  iconSize: typeof ICON_SIZE;
  shadows: typeof SHADOWS;
  interactive: typeof INTERACTIVE;
}

export const lightAppTheme: AppTheme = {
  isDark: false,
  colors: LIGHT_THEME,
  typography: TYPOGRAPHY_SCALE,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  layout: LAYOUT,
  fontFamily: FONT_FAMILY,
  iconSize: ICON_SIZE,
  shadows: SHADOWS,
  interactive: INTERACTIVE,
};

export const darkAppTheme: AppTheme = {
  isDark: true,
  colors: DARK_THEME,
  typography: TYPOGRAPHY_SCALE,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  layout: LAYOUT,
  fontFamily: FONT_FAMILY,
  iconSize: ICON_SIZE,
  shadows: SHADOWS,
  interactive: INTERACTIVE,
};

export {
  BORDER_RADIUS,
  DARK_THEME,
  ELEMENT_CATEGORIES,
  ELEMENT_FAMILY_COLORS,
  FONT_FAMILY,
  ICON_SIZE,
  INTERACTIVE,
  LAYOUT,
  LIGHT_THEME,
  PRIMARY_PALETTE,
  SHADOWS,
  SPACING,
  TYPOGRAPHY_SCALE,
};
