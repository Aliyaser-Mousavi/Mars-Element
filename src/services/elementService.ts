import {
  ALL_ELEMENTS,
  BASE_ELEMENTS,
  ELEMENTS_BY_ATOMIC_NUMBER,
  ELEMENTS_BY_SYMBOL,
} from '@/data/elements';
import { ChemicalElement, ElementBase, ElementCategory } from '@/types/element';

/**
 * Local offline repository for querying chemical elements.
 * 100% offline, zero network dependencies.
 */
class ElementRepository {
  /**
   * Retrieves all 118 detailed chemical elements
   */
  getAllElements(): ChemicalElement[] {
    return ALL_ELEMENTS;
  }

  /**
   * Retrieves all 118 lightweight base elements for rapid grid and list rendering
   */
  getAllBaseElements(): ElementBase[] {
    return BASE_ELEMENTS;
  }

  /**
   * Retrieves element by its atomic number (1 to 118)
   */
  getByAtomicNumber(atomicNumber: number): ChemicalElement | null {
    return ELEMENTS_BY_ATOMIC_NUMBER[atomicNumber] ?? null;
  }

  /**
   * Retrieves element by chemical symbol (case-insensitive, e.g. 'Fe', 'fe')
   */
  getBySymbol(symbol: string): ChemicalElement | null {
    return ELEMENTS_BY_SYMBOL[symbol.trim().toLowerCase()] ?? null;
  }

  /**
   * Filters elements by period (1 to 7)
   */
  getByPeriod(period: number): ChemicalElement[] {
    return ALL_ELEMENTS.filter((el) => el.classification.period === period);
  }

  /**
   * Filters elements by group (1 to 18)
   */
  getByGroup(group: number): ChemicalElement[] {
    return ALL_ELEMENTS.filter((el) => el.classification.group === group);
  }

  /**
   * Filters elements by chemical category
   */
  getByCategory(category: ElementCategory): ChemicalElement[] {
    return ALL_ELEMENTS.filter((el) => el.classification.category === category);
  }

  /**
   * Fast offline search by Persian name, English IUPAC name, symbol, or atomic number
   */
  search(query: string): ChemicalElement[] {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_ELEMENTS;

    const parsedNum = parseInt(q, 10);
    const isNum = !isNaN(parsedNum);

    return ALL_ELEMENTS.filter((el) => {
      if (isNum && el.identity.atomicNumber === parsedNum) return true;
      if (el.identity.symbol.toLowerCase() === q) return true;
      if (el.identity.nameFa.includes(q)) return true;
      if (el.identity.nameEn.toLowerCase().includes(q)) return true;
      if (el.identity.pronunciationFa.includes(q)) return true;
      return false;
    });
  }
}

export const elementRepository = new ElementRepository();

