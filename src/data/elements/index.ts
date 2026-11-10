import { ChemicalElement, ElementBase } from '@/types/element';
import { PERIOD_1_ELEMENTS } from './period1';
import { PERIOD_2_ELEMENTS } from './period2';
import { PERIOD_3_ELEMENTS } from './period3';
import { PERIOD_4_ELEMENTS } from './period4';
import { PERIOD_5_ELEMENTS } from './period5';
import { PERIOD_6_ELEMENTS } from './period6';
import { PERIOD_7_ELEMENTS } from './period7';

export {
  PERIOD_1_ELEMENTS,
  PERIOD_2_ELEMENTS,
  PERIOD_3_ELEMENTS,
  PERIOD_4_ELEMENTS,
  PERIOD_5_ELEMENTS,
  PERIOD_6_ELEMENTS,
  PERIOD_7_ELEMENTS,
};

/**
 * Complete collection of all 118 chemical elements
 */
export const ALL_ELEMENTS: ChemicalElement[] = [
  ...PERIOD_1_ELEMENTS,
  ...PERIOD_2_ELEMENTS,
  ...PERIOD_3_ELEMENTS,
  ...PERIOD_4_ELEMENTS,
  ...PERIOD_5_ELEMENTS,
  ...PERIOD_6_ELEMENTS,
  ...PERIOD_7_ELEMENTS,
];

/**
 * Fast lookup map by atomic number (1 to 118)
 */
export const ELEMENTS_BY_ATOMIC_NUMBER: Record<number, ChemicalElement> = {};
for (const el of ALL_ELEMENTS) {
  ELEMENTS_BY_ATOMIC_NUMBER[el.identity.atomicNumber] = el;
}

/**
 * Fast lookup map by chemical symbol (e.g. 'Fe', 'Au')
 */
export const ELEMENTS_BY_SYMBOL: Record<string, ChemicalElement> = {};
for (const el of ALL_ELEMENTS) {
  ELEMENTS_BY_SYMBOL[el.identity.symbol.toLowerCase()] = el;
  ELEMENTS_BY_SYMBOL[el.identity.symbol] = el;
}

/**
 * Lightweight Base Elements array for high-performance grid rendering
 */
export const BASE_ELEMENTS: ElementBase[] = ALL_ELEMENTS.map((el) => ({
  atomicNumber: el.identity.atomicNumber,
  symbol: el.identity.symbol,
  nameFa: el.identity.nameFa,
  nameEn: el.identity.nameEn,
  atomicMass: el.physicalProperties.atomicMass.value ?? 0,
  category: el.classification.category,
  period: el.classification.period,
  group: el.classification.group,
  block: el.classification.block,
  standardState: el.classification.standardState,
  electronConfiguration: el.atomicStructure.electronConfiguration,
}));

export const BASE_ELEMENTS_BY_ATOMIC_NUMBER: Record<number, ElementBase> = {};
for (const b of BASE_ELEMENTS) {
  BASE_ELEMENTS_BY_ATOMIC_NUMBER[b.atomicNumber] = b;
}
