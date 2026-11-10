import { elementRepository } from './elementService';

export interface FormulaElementComponent {
  symbol: string;
  nameFa: string;
  count: number;
  atomicMass: number;
  totalMass: number;
  massPercentage: number;
}

export interface CalculationResult {
  formula: string;
  totalMolarMass: number;
  components: FormulaElementComponent[];
  error?: string;
}

/**
 * Parses chemical formulas supporting symbols, numbers, and nested parentheses
 * e.g. H2O, Ca(OH)2, Al2(SO4)3, CuSO4.5H2O, Fe2(CO3)3
 */
export function calculateMolarMass(rawFormula: string): CalculationResult {
  const formula = rawFormula.trim().replace(/\s+/g, '');
  if (!formula) {
    return { formula, totalMolarMass: 0, components: [], error: 'لطفاً یک فرمول شیمیایی وارد کنید.' };
  }

  // Tokenize & Parse AST supporting parentheses
  try {
    const counts = parseFormulaCounts(formula);
    if (Object.keys(counts).length === 0) {
      return { formula, totalMolarMass: 0, components: [], error: 'فرمول شیمیایی معتبر نیست.' };
    }

    let totalMolarMass = 0;
    const components: FormulaElementComponent[] = [];

    for (const [symbol, count] of Object.entries(counts)) {
      const element = elementRepository.getBySymbol(symbol);
      if (!element) {
        return {
          formula,
          totalMolarMass: 0,
          components: [],
          error: `عنصر شیمیایی با نماد «${symbol}» در جدول تناوبی یافت نشد.`,
        };
      }

      const mass = element.physicalProperties.atomicMass.value ?? 0;
      const componentTotal = mass * count;
      totalMolarMass += componentTotal;

      components.push({
        symbol: element.identity.symbol,
        nameFa: element.identity.nameFa,
        count,
        atomicMass: mass,
        totalMass: componentTotal,
        massPercentage: 0, // calculated below
      });
    }

    // Calculate percentage breakdown
    if (totalMolarMass > 0) {
      for (const comp of components) {
        comp.massPercentage = (comp.totalMass / totalMolarMass) * 100;
      }
    }

    // Sort by mass descending
    components.sort((a, b) => b.totalMass - a.totalMass);

    return {
      formula,
      totalMolarMass,
      components,
    };
  } catch (err: any) {
    return {
      formula,
      totalMolarMass: 0,
      components: [],
      error: err.message || 'خطا در تحلیل فرمول شیمیایی. پرانتزها و حروف بزرگ/کوچک را بررسی کنید.',
    };
  }
}

function parseFormulaCounts(formula: string): Record<string, number> {
  let i = 0;

  function parseGroup(): Record<string, number> {
    const groupCounts: Record<string, number> = {};

    while (i < formula.length) {
      const char = formula[i];

      if (char === '(' || char === '[') {
        i++;
        const innerCounts = parseGroup();
        const multiplier = readNumber();
        for (const [sym, count] of Object.entries(innerCounts)) {
          groupCounts[sym] = (groupCounts[sym] || 0) + count * multiplier;
        }
      } else if (char === ')' || char === ']') {
        i++;
        return groupCounts;
      } else if (/[A-Z]/.test(char)) {
        // Element symbol starts with uppercase
        let sym = char;
        i++;
        if (i < formula.length && /[a-z]/.test(formula[i])) {
          sym += formula[i];
          i++;
        }
        const count = readNumber();
        groupCounts[sym] = (groupCounts[sym] || 0) + count;
      } else if (char === '.' || char === '·') {
        // Hydrate separator e.g. CuSO4.5H2O
        i++;
        const hydrateMultiplier = readNumber() || 1;
        const hydrateCounts = parseGroup();
        for (const [sym, count] of Object.entries(hydrateCounts)) {
          groupCounts[sym] = (groupCounts[sym] || 0) + count * hydrateMultiplier;
        }
      } else {
        throw new Error(`نویسه نامعتبر «${char}» در فرمول یافت شد.`);
      }
    }

    return groupCounts;
  }

  function readNumber(): number {
    let numStr = '';
    while (i < formula.length && /[0-9]/.test(formula[i])) {
      numStr += formula[i];
      i++;
    }
    return numStr ? parseInt(numStr, 10) : 1;
  }

  const result = parseGroup();
  return result;
}

