import { BorderRadiusScale, SpacingScale } from '@/types';

export const SPACING: SpacingScale = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const BORDER_RADIUS: BorderRadiusScale = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

export const LAYOUT = {
  maxContentWidth: 768,
  minTouchTarget: 44,
  headerHeight: 56,
  tileBaseSize: 64,
} as const;

