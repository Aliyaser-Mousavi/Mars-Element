/**
 * Scientific formatters for chemical notations and properties.
 * Always maintains strict scientific LTR integrity.
 */

const SUPERSCRIPT_MAP: Record<string, string> = {
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
  '+': '⁺',
  '-': '⁻',
};

const SUBSCRIPT_MAP: Record<string, string> = {
  '0': '₀',
  '1': '₁',
  '2': '₂',
  '3': '₃',
  '4': '₄',
  '5': '₅',
  '6': '₆',
  '7': '₇',
  '8': '₈',
  '9': '₉',
  '+': '₊',
  '-': '₋',
};

export function toSuperscript(text: string): string {
  return text
    .split('')
    .map((char) => SUPERSCRIPT_MAP[char] || char)
    .join('');
}

export function toSubscript(text: string): string {
  return text
    .split('')
    .map((char) => SUBSCRIPT_MAP[char] || char)
    .join('');
}

export function formatAtomicMass(mass: number, precision: number = 3): string {
  if (Number.isInteger(mass)) {
    return `[${mass}]`;
  }
  return mass.toFixed(precision);
}



