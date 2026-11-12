import { BorderRadiusScale, IconSizeScale, ShadowScale, SpacingScale } from '@/types';

export const SPACING: SpacingScale = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 48,
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

export const ICON_SIZE: IconSizeScale = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
  hero: 48,
};

export const SHADOWS: ShadowScale = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
};

export const INTERACTIVE = {
  activeOpacity: 0.75,
  pressedScale: 0.98,
  hitSlopSm: { top: 6, bottom: 6, left: 6, right: 6 },
  hitSlopMd: { top: 10, bottom: 10, left: 10, right: 10 },
} as const;

export const LAYOUT = {
  maxContentWidth: 768,
  minTouchTarget: 44,
  headerHeight: 56,
  tileBaseSize: 64,
  cardBorderRadius: 14,
  chipBorderRadius: 10,
  buttonBorderRadius: 10,
  inputBorderRadius: 10,
};
