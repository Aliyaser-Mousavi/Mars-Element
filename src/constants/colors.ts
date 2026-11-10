import { ElementCategory, ElementFamilyColors, ThemeColors } from '@/types';

/**
 * Mars Element - Centralized Color Palette
 * Designed specifically for Persian scientific & chemistry visualization.
 */

export const PRIMARY_PALETTE = {
  forestGreen: '#193C35',
  scientificGreen: '#267D68',
  lightGreen: '#E7F1ED',
  background: '#F3F6F4',
  surface: '#FFFFFF',
  goldenAccent: '#E6A23C',
  oceanBlue: '#4689B8',
  purple: '#8C72B8',
  coral: '#D96C64',
  primaryText: '#1B2925',
  secondaryText: '#65736D',
  border: '#E2E9E5',
} as const;

export const ELEMENT_FAMILY_COLORS: ElementFamilyColors = {
  alkaliMetals: '#E6A23C',
  alkalineEarthMetals: '#D96C64',
  transitionMetals: '#4689B8',
  postTransitionMetals: '#668B9B',
  metalloids: '#8C72B8',
  nonmetals: '#4B9B79',
  halogens: '#55A7A2',
  nobleGases: '#6685C4',
  lanthanides: '#B47A9B',
  actinides: '#9670A8',
  unknown: '#87939A',
} as const;

export const CATEGORY_COLOR_MAP: Record<ElementCategory, string> = {
  'alkali-metal': ELEMENT_FAMILY_COLORS.alkaliMetals,
  'alkaline-earth-metal': ELEMENT_FAMILY_COLORS.alkalineEarthMetals,
  'transition-metal': ELEMENT_FAMILY_COLORS.transitionMetals,
  'post-transition-metal': ELEMENT_FAMILY_COLORS.postTransitionMetals,
  metalloid: ELEMENT_FAMILY_COLORS.metalloids,
  nonmetal: ELEMENT_FAMILY_COLORS.nonmetals,
  halogen: ELEMENT_FAMILY_COLORS.halogens,
  'noble-gas': ELEMENT_FAMILY_COLORS.nobleGases,
  lanthanide: ELEMENT_FAMILY_COLORS.lanthanides,
  actinide: ELEMENT_FAMILY_COLORS.actinides,
  unknown: ELEMENT_FAMILY_COLORS.unknown,
};

export const LIGHT_THEME: ThemeColors = {
  ...PRIMARY_PALETTE,
  surfaceElevated: '#FFFFFF',
  surfaceMuted: '#EBF1EE',
  elementFamilies: ELEMENT_FAMILY_COLORS,
  semantic: {
    success: '#267D68',
    warning: '#E6A23C',
    error: '#D96C64',
    info: '#4689B8',
  },
};

export const DARK_THEME: ThemeColors = {
  forestGreen: '#214D44',
  scientificGreen: '#2FA88C',
  lightGreen: '#1A332B',
  background: '#0F1A17',
  surface: '#162723',
  surfaceElevated: '#1F342F',
  surfaceMuted: '#1B2E29',
  goldenAccent: '#F3B14E',
  oceanBlue: '#579BCB',
  purple: '#A086CC',
  coral: '#E37F77',
  primaryText: '#EBF1EE',
  secondaryText: '#98ABA2',
  border: '#273F38',
  elementFamilies: {
    alkaliMetals: '#F3B14E',
    alkalineEarthMetals: '#E37F77',
    transitionMetals: '#579BCB',
    postTransitionMetals: '#7A9EAE',
    metalloids: '#A086CC',
    nonmetals: '#5DB08D',
    halogens: '#67BDB7',
    nobleGases: '#7B9AD8',
    lanthanides: '#C68EAF',
    actinides: '#AA85BC',
    unknown: '#9AA7AE',
  },
  semantic: {
    success: '#2FA88C',
    warning: '#F3B14E',
    error: '#E37F77',
    info: '#579BCB',
  },
};

