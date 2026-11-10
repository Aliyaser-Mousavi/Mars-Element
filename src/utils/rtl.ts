import { I18nManager, StyleProp, TextStyle, ViewStyle } from "react-native";

/**
 * Configure RTL behavior.
 * marslement is an exclusively Persian application.
 */
export function ensureRTL(): void {
  if (!I18nManager.isRTL) {
    try {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
    } catch {
      // In web or restricted environments, gracefully handle
    }
  }
}

/**
 * Converts English digits (0-9) to standard Persian digits (۰-۹).
 * Used ONLY for Persian narrative text, page counters, and general UI labels.
 * DO NOT use for chemical symbols, atomic numbers, or scientific formulas.
 */
export function toPersianDigits(input: string | number): string {
  const str = String(input);
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/\d/g, (d) => persianDigits[parseInt(d, 10)]);
}

/**
 * Ensures chemical formulas and electron configurations render strictly LTR.
 * Preserves Latin element symbols (e.g. Fe, H₂O, [Ar] 3d⁶ 4s²).
 */
export const ltrStyle: StyleProp<TextStyle> = {
  writingDirection: "ltr",
  textAlign: "left",
};

export const rtlStyle: StyleProp<TextStyle> = {
  writingDirection: "rtl",
  textAlign: "right",
};

export const ltrContainerStyle: StyleProp<ViewStyle> = {
  flexDirection: "row",
  direction: "ltr",
};
