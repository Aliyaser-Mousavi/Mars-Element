import { Platform } from 'react-native';
import { TypographyScale } from '@/types';

export const FONT_FAMILY = {
  persianRegular: 'Vazirmatn_400Regular',
  persianMedium: 'Vazirmatn_500Medium',
  persianSemiBold: 'Vazirmatn_600SemiBold',
  persianBold: 'Vazirmatn_700Bold',
  // System Latin fonts for strict chemical/scientific representation
  latinScientific: Platform.select({
    ios: 'Helvetica Neue',
    android: 'sans-serif-medium',
    default: 'sans-serif',
  }),
  latinMono: Platform.select({
    ios: 'Menlo',
    android: 'monospace',
    default: 'monospace',
  }),
};

export const TYPOGRAPHY_SCALE: TypographyScale = {
  largeHeading: {
    fontFamily: FONT_FAMILY.persianBold,
    fontSize: 28,
    lineHeight: 38,
    fontWeight: '700',
    writingDirection: 'rtl',
  },
  pageHeading: {
    fontFamily: FONT_FAMILY.persianBold,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '700',
    writingDirection: 'rtl',
  },
  sectionHeading: {
    fontFamily: FONT_FAMILY.persianSemiBold,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    writingDirection: 'rtl',
  },
  titleMedium: {
    fontFamily: FONT_FAMILY.persianSemiBold,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    writingDirection: 'rtl',
  },
  subtitle: {
    fontFamily: FONT_FAMILY.persianMedium,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '500',
    writingDirection: 'rtl',
  },
  bodyLarge: {
    fontFamily: FONT_FAMILY.persianRegular,
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '400',
    writingDirection: 'rtl',
  },
  bodyMedium: {
    fontFamily: FONT_FAMILY.persianRegular,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    writingDirection: 'rtl',
  },
  bodySmall: {
    fontFamily: FONT_FAMILY.persianRegular,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    writingDirection: 'rtl',
  },
  buttonLabel: {
    fontFamily: FONT_FAMILY.persianMedium,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    writingDirection: 'rtl',
  },
  chipLabel: {
    fontFamily: FONT_FAMILY.persianMedium,
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '500',
    writingDirection: 'rtl',
  },
  caption: {
    fontFamily: FONT_FAMILY.persianMedium,
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '500',
    writingDirection: 'rtl',
  },
  overline: {
    fontFamily: FONT_FAMILY.persianSemiBold,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '600',
    writingDirection: 'rtl',
  },
  elementSymbol: {
    fontFamily: FONT_FAMILY.latinScientific,
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '700',
    writingDirection: 'ltr',
    letterSpacing: 0.5,
  },
  atomicNumber: {
    fontFamily: FONT_FAMILY.latinScientific,
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '600',
    writingDirection: 'ltr',
  },
  scientificValue: {
    fontFamily: FONT_FAMILY.latinScientific,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
    writingDirection: 'ltr',
  },
  chemicalFormula: {
    fontFamily: FONT_FAMILY.latinScientific,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    writingDirection: 'ltr',
  },
};
