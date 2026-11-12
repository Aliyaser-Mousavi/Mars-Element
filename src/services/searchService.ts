import { ChemicalElement, ElementCategory, ElementBlock, StandardState } from '../types/element';
import { elementRepository } from './elementService';

export type SortOption =
  | 'atomic-asc'
  | 'atomic-desc'
  | 'mass-asc'
  | 'mass-desc'
  | 'name-fa-asc';

export type MetalClassification = 'metal' | 'metalloid' | 'nonmetal';

export interface SearchFilterState {
  category: ElementCategory | 'all';
  period: number | 'all';
  group: number | 'all';
  block: ElementBlock | 'all';
  state: StandardState | 'all';
  metalType: MetalClassification | 'all';
}

export const INITIAL_FILTERS: SearchFilterState = {
  category: 'all',
  period: 'all',
  group: 'all',
  block: 'all',
  state: 'all',
  metalType: 'all',
};

// Global reactive store for filter & sort state across search & filter screens
let activeFilters: SearchFilterState = { ...INITIAL_FILTERS };
let activeSort: SortOption = 'atomic-asc';
const listeners = new Set<() => void>();

export const filterStateStore = {
  getFilters: (): SearchFilterState => ({ ...activeFilters }),
  setFilters: (newFilters: SearchFilterState): void => {
    activeFilters = { ...newFilters };
    listeners.forEach((l) => l());
  },
  getSort: (): SortOption => activeSort,
  setSort: (newSort: SortOption): void => {
    activeSort = newSort;
    listeners.forEach((l) => l());
  },
  reset: (): void => {
    activeFilters = { ...INITIAL_FILTERS };
    activeSort = 'atomic-asc';
    listeners.forEach((l) => l());
  },
  getActiveCount: (): number => {
    let count = 0;
    if (activeFilters.category !== 'all') count++;
    if (activeFilters.period !== 'all') count++;
    if (activeFilters.group !== 'all') count++;
    if (activeFilters.block !== 'all') count++;
    if (activeFilters.state !== 'all') count++;
    if (activeFilters.metalType !== 'all') count++;
    if (activeSort !== 'atomic-asc') count++;
    return count;
  },
  subscribe: (listener: () => void): (() => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

// Map element category to broad metal classification
function getMetalClassification(category: ElementCategory): MetalClassification {
  switch (category) {
    case 'metalloid':
      return 'metalloid';
    case 'nonmetal':
    case 'halogen':
    case 'noble-gas':
      return 'nonmetal';
    default:
      return 'metal';
  }
}

// Normalize Persian characters for robust matching
export function normalizePersian(text: string): string {
  return text
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/[\u064B-\u065F]/g, '') // Remove Arabic harakat
    .trim()
    .toLowerCase();
}

export interface MatchDetails {
  element: ChemicalElement;
  matchedBy: 'nameFa' | 'symbol' | 'atomicNumber' | 'nameEn' | 'other';
  matchSnippet?: string;
}

export function searchAndFilterElements(
  query: string,
  filters: SearchFilterState,
  sort: SortOption
): MatchDetails[] {
  const allElements = elementRepository.getAllElements();
  const trimmed = query.trim();
  const normalizedQuery = normalizePersian(trimmed);
  const parsedNumber = parseInt(trimmed.replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))), 10);

  const results: MatchDetails[] = [];

  for (const element of allElements) {
    // 1. Text Search matching
    let matchedBy: MatchDetails['matchedBy'] | null = null;
    let matchSnippet: string | undefined;

    if (!trimmed) {
      matchedBy = 'other';
    } else {
      if (!isNaN(parsedNumber) && element.identity.atomicNumber === parsedNumber) {
        matchedBy = 'atomicNumber';
      } else if (element.identity.symbol.toLowerCase() === trimmed.toLowerCase()) {
        matchedBy = 'symbol';
      } else if (normalizePersian(element.identity.nameFa).includes(normalizedQuery)) {
        matchedBy = 'nameFa';
      } else if (element.identity.symbol.toLowerCase().startsWith(trimmed.toLowerCase())) {
        matchedBy = 'symbol';
      } else if (element.identity.nameEn.toLowerCase().includes(trimmed.toLowerCase())) {
        matchedBy = 'nameEn';
      } else if (normalizePersian(element.identity.pronunciationFa).includes(normalizedQuery)) {
        matchedBy = 'nameFa';
      } else if (normalizePersian(element.identity.descriptionFa).includes(normalizedQuery)) {
        matchedBy = 'other';
        matchSnippet = 'مطابقت در شرح علمی';
      }
    }

    if (!matchedBy) continue;

    // 2. Filter criteria
    if (filters.category !== 'all' && element.classification.category !== filters.category) {
      continue;
    }
    if (filters.period !== 'all' && element.classification.period !== filters.period) {
      continue;
    }
    if (filters.group !== 'all') {
      if (element.classification.group !== filters.group) continue;
    }
    if (filters.block !== 'all' && element.classification.block !== filters.block) {
      continue;
    }
    if (filters.state !== 'all' && element.classification.standardState !== filters.state) {
      continue;
    }
    if (filters.metalType !== 'all') {
      const actualMetal = getMetalClassification(element.classification.category);
      if (actualMetal !== filters.metalType) continue;
    }

    results.push({ element, matchedBy, matchSnippet });
  }

  // 3. Sorting
  results.sort((a, b) => {
    switch (sort) {
      case 'atomic-desc':
        return b.element.identity.atomicNumber - a.element.identity.atomicNumber;
      case 'mass-asc': {
        const massA = a.element.physicalProperties.atomicMass.value ?? 999;
        const massB = b.element.physicalProperties.atomicMass.value ?? 999;
        return massA - massB;
      }
      case 'mass-desc': {
        const massA = a.element.physicalProperties.atomicMass.value ?? -1;
        const massB = b.element.physicalProperties.atomicMass.value ?? -1;
        return massB - massA;
      }
      case 'name-fa-asc':
        return a.element.identity.nameFa.localeCompare(b.element.identity.nameFa, 'fa');
      case 'atomic-asc':
      default:
        return a.element.identity.atomicNumber - b.element.identity.atomicNumber;
    }
  });

  return results;
}
