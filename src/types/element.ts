export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export type StandardState = 'solid' | 'liquid' | 'gas' | 'unknown';
export type ElementBlock = 's' | 'p' | 'd' | 'f';
export type ValueOrigin = 'experimental' | 'estimated' | 'predicted' | 'unknown';

export interface ScientificValue<T> {
  value: T | null;
  unit?: string;
  unitFa?: string;
  origin: ValueOrigin;
  uncertainty?: number | string;
}

export interface ElementIdentity {
  atomicNumber: number;
  symbol: string; // Standard Latin notation (e.g. 'Fe')
  nameFa: string; // Official Persian name (e.g. 'آهن')
  nameEn: string; // English IUPAC reference name (e.g. 'Iron')
  pronunciationFa: string; // Persian phonetics (e.g. 'آهَن')
  descriptionFa: string; // Comprehensive Persian description
}

export interface ElementClassification {
  group: number | null; // 1 to 18; null for f-block lanthanides/actinides
  period: number; // 1 to 7
  block: ElementBlock;
  category: ElementCategory;
  standardState: StandardState;
}

export interface AtomicStructure {
  protons: number;
  electrons: number;
  neutrons: number; // For standard/most abundant isotope
  electronConfiguration: string; // Full notation e.g. '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²'
  abbreviatedConfiguration: string; // e.g. '[Ar] 3d⁶ 4s²'
  electronShells: number[]; // Distribution per shell (K, L, M, N, O, P, Q)
  valenceElectrons: number | null;
  commonOxidationStates: number[];
  allOxidationStates: number[];
}

export interface PhysicalProperties {
  atomicMass: ScientificValue<number>; // in Da / u
  atomicRadius: ScientificValue<number>; // in pm (empirical)
  covalentRadius: ScientificValue<number>; // in pm
  density: ScientificValue<number>; // in g/cm³ (or g/L for gases)
  appearanceFa: string;
  colorFa: string;
  crystalStructureFa: string | null;
}

export interface ThermalProperties {
  meltingPointKelvin: ScientificValue<number>;
  boilingPointKelvin: ScientificValue<number>;
  specificHeat: ScientificValue<number>; // J / (g · K)
  thermalConductivity: ScientificValue<number>; // W / (m · K)
}

export interface ChemicalProperties {
  electronegativityPauling: ScientificValue<number>;
  firstIonizationEnergy: ScientificValue<number>; // kJ / mol
  electronAffinity: ScientificValue<number>; // kJ / mol
  reactivityFa: string;
  chemicalBehaviorFa: string;
}

export interface HistoryInfo {
  discovererFa: string;
  discoveryYear: number | string; // e.g. 1774 or 'باستان'
  nameOriginFa: string;
  namingExplanationFa: string;
}

export interface ApplicationsInfo {
  industrial: string[];
  scientific: string[];
  medical?: string[];
  everyday: string[];
}

export interface SafetyInfo {
  toxicityFa: string;
  radioactivity: boolean;
  radiationType?: string;
  precautionsFa: string;
  hazardsFa: string;
}

export interface IsotopesInfo {
  stableCount: number;
  commonIsotopes: string[];
  mostStableIsotope?: string;
  halfLife?: string; // e.g. 'پایدار', '۱۲.۳ سال', '۰.۷ میلی‌ثانیه'
}

export interface AdditionalContent {
  summaryFa: string;
  funFactsFa: string[];
  naturalOccurrenceFa: string;
  keyCompoundsFa: string[];
  educationalNotesFa: string;
}

/**
 * Complete Scientific Element Record
 */
export interface ChemicalElement {
  identity: ElementIdentity;
  classification: ElementClassification;
  atomicStructure: AtomicStructure;
  physicalProperties: PhysicalProperties;
  thermalProperties: ThermalProperties;
  chemicalProperties: ChemicalProperties;
  history: HistoryInfo;
  applications: ApplicationsInfo;
  safety: SafetyInfo;
  isotopes: IsotopesInfo;
  additionalContent: AdditionalContent;
}

/**
 * Lightweight Base Element (backwards compatible with Group 00 components)
 */
export interface ElementBase {
  atomicNumber: number;
  symbol: string;
  nameFa: string;
  nameEn: string;
  atomicMass: number;
  category: ElementCategory;
  period: number;
  group: number | null;
  block: ElementBlock;
  standardState: StandardState;
  electronConfiguration?: string;
}
