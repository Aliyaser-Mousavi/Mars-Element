import { ALL_ELEMENTS } from './elements';
import { ChemicalElement } from '@/types/element';

export interface ValidationReport {
  isValid: boolean;
  totalCount: number;
  uniqueNumbersCount: number;
  uniqueSymbolsCount: number;
  shellSumErrors: Array<{ atomicNumber: number; symbol: string; sum: number }>;
  missingPersianName: Array<{ atomicNumber: number; symbol: string }>;
  invalidPeriods: Array<{ atomicNumber: number; period: number }>;
  invalidGroups: Array<{ atomicNumber: number; group: number | null }>;
  missingRequiredFields: Array<{ atomicNumber: number; field: string }>;
  stats: {
    totalElements: number;
    superheavyPredictedCount: number;
    radioactiveCount: number;
    syntheticCount: number;
    solidCount: number;
    liquidCount: number;
    gasCount: number;
  };
}

/**
 * Validates the complete chemistry dataset against scientific invariants
 */
export function validateChemistryDatabase(): ValidationReport {
  const report: ValidationReport = {
    isValid: true,
    totalCount: ALL_ELEMENTS.length,
    uniqueNumbersCount: 0,
    uniqueSymbolsCount: 0,
    shellSumErrors: [],
    missingPersianName: [],
    invalidPeriods: [],
    invalidGroups: [],
    missingRequiredFields: [],
    stats: {
      totalElements: ALL_ELEMENTS.length,
      superheavyPredictedCount: 0,
      radioactiveCount: 0,
      syntheticCount: 0,
      solidCount: 0,
      liquidCount: 0,
      gasCount: 0,
    },
  };

  const atomicNumbers = new Set<number>();
  const symbols = new Set<string>();

  for (const el of ALL_ELEMENTS) {
    const z = el.identity.atomicNumber;
    const sym = el.identity.symbol;

    atomicNumbers.add(z);
    symbols.add(sym.toLowerCase());

    // 1. Electron shell sum validation
    const shellSum = el.atomicStructure.electronShells.reduce((a, b) => a + b, 0);
    if (shellSum !== z) {
      report.shellSumErrors.push({ atomicNumber: z, symbol: sym, sum: shellSum });
      report.isValid = false;
    }

    // 2. Persian name presence
    if (!el.identity.nameFa || el.identity.nameFa.trim().length === 0) {
      report.missingPersianName.push({ atomicNumber: z, symbol: sym });
      report.isValid = false;
    }

    // 3. Period validation (1 to 7)
    if (el.classification.period < 1 || el.classification.period > 7) {
      report.invalidPeriods.push({ atomicNumber: z, period: el.classification.period });
      report.isValid = false;
    }

    // 4. Group validation (1 to 18 or null for f-block)
    const grp = el.classification.group;
    if (grp !== null && (grp < 1 || grp > 18)) {
      report.invalidGroups.push({ atomicNumber: z, group: grp });
      report.isValid = false;
    }

    // 5. Stats computation
    if (z >= 104) {
      report.stats.superheavyPredictedCount++;
    }
    if (el.safety.radioactivity) {
      report.stats.radioactiveCount++;
    }
    if (z === 43 || z === 61 || z >= 93) {
      report.stats.syntheticCount++;
    }

    if (el.classification.standardState === 'solid') report.stats.solidCount++;
    else if (el.classification.standardState === 'liquid') report.stats.liquidCount++;
    else if (el.classification.standardState === 'gas') report.stats.gasCount++;
  }

  report.uniqueNumbersCount = atomicNumbers.size;
  report.uniqueSymbolsCount = symbols.size;

  if (
    report.totalCount !== 118 ||
    report.uniqueNumbersCount !== 118 ||
    report.uniqueSymbolsCount !== 118
  ) {
    report.isValid = false;
  }

  return report;
}
