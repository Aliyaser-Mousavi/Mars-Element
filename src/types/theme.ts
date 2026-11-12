export interface PaletteColors {
  forestGreen: string;
  scientificGreen: string;
  lightGreen: string;
  background: string;
  surface: string;
  goldenAccent: string;
  oceanBlue: string;
  purple: string;
  coral: string;
  primaryText: string;
  secondaryText: string;
  border: string;
}

export interface ElementFamilyColors {
  alkaliMetals: string;
  alkalineEarthMetals: string;
  transitionMetals: string;
  postTransitionMetals: string;
  metalloids: string;
  nonmetals: string;
  halogens: string;
  nobleGases: string;
  lanthanides: string;
  actinides: string;
  unknown: string;
}

export interface SemanticColors {
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface ComponentColors {
  card: string;
  cardBorder: string;
  separator: string;
  inputBackground: string;
  inputBorder: string;
  chipBackground: string;
  chipBorder: string;
  shadow: string;
}

export interface ThemeColors extends PaletteColors, ComponentColors {
  surfaceElevated: string;
  surfaceMuted: string;
  elementFamilies: ElementFamilyColors;
  semantic: SemanticColors;
}

export interface TypographyStyle {
  fontFamily?: string;
  fontSize: number;
  lineHeight: number;
  fontWeight?: '400' | '500' | '600' | '700' | 'bold' | 'normal';
  letterSpacing?: number;
  writingDirection?: 'rtl' | 'ltr';
}

export interface TypographyScale {
  largeHeading: TypographyStyle;
  pageHeading: TypographyStyle;
  sectionHeading: TypographyStyle;
  titleMedium: TypographyStyle;
  subtitle: TypographyStyle;
  bodyLarge: TypographyStyle;
  bodyMedium: TypographyStyle;
  bodySmall: TypographyStyle;
  buttonLabel: TypographyStyle;
  chipLabel: TypographyStyle;
  caption: TypographyStyle;
  overline: TypographyStyle;
  elementSymbol: TypographyStyle;
  atomicNumber: TypographyStyle;
  scientificValue: TypographyStyle;
  chemicalFormula: TypographyStyle;
}

export interface SpacingScale {
  none: 0;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  huge: number;
}

export interface BorderRadiusScale {
  none: 0;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
}

export interface IconSizeScale {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  hero: number;
}

export interface ShadowStyle {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export interface ShadowScale {
  none: ShadowStyle;
  sm: ShadowStyle;
  md: ShadowStyle;
  lg: ShadowStyle;
}
