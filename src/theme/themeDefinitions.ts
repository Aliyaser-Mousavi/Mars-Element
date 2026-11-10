import {
  BORDER_RADIUS,
  DARK_THEME,
  ELEMENT_CATEGORIES,
  ELEMENT_FAMILY_COLORS,
  FONT_FAMILY,
  LAYOUT,
  LIGHT_THEME,
  PRIMARY_PALETTE,
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
}

export const lightAppTheme: AppTheme = {
  isDark: false,
  colors: LIGHT_THEME,
  typography: TYPOGRAPHY_SCALE,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  layout: LAYOUT,
  fontFamily: FONT_FAMILY,
};

export const darkAppTheme: AppTheme = {
  isDark: true,
  colors: DARK_THEME,
  typography: TYPOGRAPHY_SCALE,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  layout: LAYOUT,
  fontFamily: FONT_FAMILY,
};

export {
  BORDER_RADIUS,
  DARK_THEME,
  ELEMENT_CATEGORIES,
  ELEMENT_FAMILY_COLORS,
  FONT_FAMILY,
  LAYOUT,
  LIGHT_THEME,
  PRIMARY_PALETTE,
  SPACING,
  TYPOGRAPHY_SCALE,
};

