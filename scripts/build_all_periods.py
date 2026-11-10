# -*- coding: utf-8 -*-
"""
Build all 118 Elements into period TypeScript files:
- src/data/elements/period1.ts (1-2)
- src/data/elements/period2.ts (3-10)
- src/data/elements/period3.ts (11-18)
- src/data/elements/period4.ts (19-36)
- src/data/elements/period5.ts (37-54)
- src/data/elements/period6.ts (55-86: 55-56 + Lanthanides 57-71 + Metals 72-86)
- src/data/elements/period7.ts (87-118)
- src/data/elements/index.ts
"""

import sys
import os
import json

from data_periods_1_3 import ELEMENTS_1_TO_18
from data_periods_4_5 import ELEMENTS_19_TO_54
from data_period5 import ELEMENTS_37_TO_54
from data_periods_6_7 import ELEMENTS_55_TO_118
from data_lanthanides import LANTHANIDES_61_TO_71
from data_period6_metals import PERIOD_6_METALS
from data_period7 import PERIOD_7_ELEMENTS

# Combine all lists in order
all_elements = []
all_elements.extend(ELEMENTS_1_TO_18)          # 1 to 18
all_elements.extend(ELEMENTS_19_TO_54[:18])     # 19 to 36 (Period 4)
all_elements.extend(ELEMENTS_37_TO_54)          # 37 to 54 (Period 5)

# Period 6:
# 55-60 from ELEMENTS_55_TO_118
all_elements.extend(ELEMENTS_55_TO_118[:6])     # 55 to 60 (Cs, Ba, La, Ce, Pr, Nd)
all_elements.extend(LANTHANIDES_61_TO_71)       # 61 to 71 (Pm to Lu)
all_elements.extend(PERIOD_6_METALS)            # 72 to 86 (Hf to Rn)

# Period 7:
all_elements.extend(PERIOD_7_ELEMENTS)          # 87 to 118 (Fr to Og)

print(f"Total elements combined: {len(all_elements)}")

# Verification check
nums = [e["atomicNumber"] for e in all_elements]
expected = list(range(1, 119))
if nums != expected:
    missing = set(expected) - set(nums)
    dups = [x for x in nums if nums.count(x) > 1]
    print(f"ERROR: atomic numbers mismatch! Missing: {missing}, Duplicates: {dups}")
    sys.exit(1)

# Check symbols unique
symbols = [e["symbol"] for e in all_elements]
if len(symbols) != len(set(symbols)):
    print("ERROR: duplicate symbols found!")
    sys.exit(1)

# Check electron shells sum
for e in all_elements:
    s_sum = sum(e["electronShells"])
    if s_sum != e["atomicNumber"]:
        print(f"ERROR in shell sum for {e['symbol']} (Z={e['atomicNumber']}): sum is {s_sum}, shells={e['electronShells']}")
        sys.exit(1)

print("Pre-generation validation PASSED! All 118 elements verified sequentially.")

def format_val(val, unit, unit_fa, origin="experimental"):
    if val is None:
        return '{\n        value: null,\n        origin: "unknown"\n      }'
    orig_str = f'"{origin}"'
    unit_str = f', unit: "{unit}", unitFa: "{unit_fa}"' if unit else ''
    return f'{{\n        value: {val},\n        origin: {orig_str}{unit_str}\n      }}'

def elem_to_ts(e):
    z = e["atomicNumber"]
    is_superheavy = z >= 104
    is_synthetic = z in (43, 61) or z >= 93

    origin_default = "predicted" if is_superheavy else "experimental"

    def v(key, unit, unit_fa):
        val = e.get(key)
        if val is None:
            return '{\n        value: null,\n        origin: "unknown"\n      }'
        # If superheavy and predicted property
        origin = origin_default
        if key == "atomicMass":
            origin = "estimated" if is_synthetic else "experimental"
        return f'{{\n        value: {val},\n        origin: "{origin}",\n        unit: "{unit}",\n        unitFa: "{unit_fa}"\n      }}'

    grp_str = str(e['group']) if e['group'] is not None else "null"
    all_ox = json.dumps(e['allOxidationStates'])
    com_ox = json.dumps(e['commonOxidationStates'])
    shells = json.dumps(e['electronShells'])
    ind_apps = json.dumps(e['industrialApplications'], ensure_ascii=False)
    sci_apps = json.dumps(e['scientificApplications'], ensure_ascii=False)
    med_apps = json.dumps(e.get('medicalApplications', []), ensure_ascii=False)
    day_apps = json.dumps(e['everydayApplications'], ensure_ascii=False)
    facts = json.dumps(e['funFactsFa'], ensure_ascii=False)
    compounds = json.dumps(e['keyCompoundsFa'], ensure_ascii=False)
    isotopes = json.dumps(e['commonIsotopes'], ensure_ascii=False)
    crystal = f'"{e["crystalStructureFa"]}"' if e["crystalStructureFa"] else "null"
    val_elec = str(e['valenceElectrons']) if e['valenceElectrons'] is not None else "null"

    ts = f"""  // Element {z}: {e['symbol']} ({e['nameFa']})
  {{
    identity: {{
      atomicNumber: {z},
      symbol: "{e['symbol']}",
      nameFa: "{e['nameFa']}",
      nameEn: "{e['nameEn']}",
      pronunciationFa: "{e['pronunciationFa']}",
      descriptionFa: "{e['summaryFa']}"
    }},
    classification: {{
      group: {grp_str},
      period: {e['period']},
      block: "{e['block']}",
      category: "{e['category']}",
      standardState: "{e['standardState']}"
    }},
    atomicStructure: {{
      protons: {e['protons']},
      electrons: {e['electrons']},
      neutrons: {e['neutrons']},
      electronConfiguration: "{e['electronConfiguration']}",
      abbreviatedConfiguration: "{e['abbreviatedConfiguration']}",
      electronShells: {shells},
      valenceElectrons: {val_elec},
      commonOxidationStates: {com_ox},
      allOxidationStates: {all_ox}
    }},
    physicalProperties: {{
      atomicMass: {v('atomicMass', 'u', 'یکای جرم اتمی')},
      atomicRadius: {v('atomicRadius', 'pm', 'پیکومتر')},
      covalentRadius: {v('covalentRadius', 'pm', 'پیکومتر')},
      density: {v('density', 'g/cm³', 'گرم بر سانتی‌متر مکعب')},
      appearanceFa: "{e['appearanceFa']}",
      colorFa: "{e['colorFa']}",
      crystalStructureFa: {crystal}
    }},
    thermalProperties: {{
      meltingPointKelvin: {v('meltingPointKelvin', 'K', 'کلوین')},
      boilingPointKelvin: {v('boilingPointKelvin', 'K', 'کلوین')},
      specificHeat: {v('specificHeat', 'J/(g·K)', 'ژول بر گرم کلوین')},
      thermalConductivity: {v('thermalConductivity', 'W/(m·K)', 'وات بر متر کلوین')}
    }},
    chemicalProperties: {{
      electronegativityPauling: {v('electronegativityPauling', '', '')},
      firstIonizationEnergy: {v('firstIonizationEnergy', 'kJ/mol', 'کیلوژول بر مول')},
      electronAffinity: {v('electronAffinity', 'kJ/mol', 'کیلوژول بر مول')},
      reactivityFa: "{e['reactivityFa']}",
      chemicalBehaviorFa: "{e['chemicalBehaviorFa']}"
    }},
    history: {{
      discovererFa: "{e['discovererFa']}",
      discoveryYear: "{e['discoveryYear']}",
      nameOriginFa: "{e['nameOriginFa']}",
      namingExplanationFa: "{e['namingExplanationFa']}"
    }},
    applications: {{
      industrial: {ind_apps},
      scientific: {sci_apps},
      medical: {med_apps},
      everyday: {day_apps}
    }},
    safety: {{
      toxicityFa: "{e['toxicityFa']}",
      radioactivity: {str(e['radioactivity']).lower()},
      radiationType: "{e.get('radiationType', 'ندارد')}",
      precautionsFa: "{e['precautionsFa']}",
      hazardsFa: "{e['hazardsFa']}"
    }},
    isotopes: {{
      stableCount: {e['stableCount']},
      commonIsotopes: {isotopes},
      mostStableIsotope: "{e.get('mostStableIsotope', '')}",
      halfLife: "{e.get('halfLife', 'نامشخص')}"
    }},
    additionalContent: {{
      summaryFa: "{e['summaryFa']}",
      funFactsFa: {facts},
      naturalOccurrenceFa: "{e['naturalOccurrenceFa']}",
      keyCompoundsFa: {compounds},
      educationalNotesFa: "{e['educationalNotesFa']}"
    }}
  }}"""
    return ts

def write_period_file(period_num, elems, out_path):
    elems_code = ",\n".join(elem_to_ts(e) for e in elems)
    content = f"""import {{ ChemicalElement }} from '@/types/element';

/**
 * Period {period_num} Elements (Total: {len(elems)})
 * Mars Element - Chemical Database
 */
export const PERIOD_{period_num}_ELEMENTS: ChemicalElement[] = [
{elems_code}
];
"""
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Wrote Period {period_num}: {len(elems)} elements to {out_path}")

target_dir = os.path.abspath("src/data/elements")
os.makedirs(target_dir, exist_ok=True)

# Split by period:
periods = {}
for e in all_elements:
    p = e["period"]
    periods.setdefault(p, []).append(e)

for p, p_elems in periods.items():
    out_file = os.path.join(target_dir, f"period{p}.ts")
    write_period_file(p, p_elems, out_file)

# Write src/data/elements/index.ts
index_ts = """import { ChemicalElement, ElementBase } from '@/types/element';
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
"""

index_path = os.path.join(target_dir, "index.ts")
with open(index_path, "w", encoding="utf-8") as f:
    f.write(index_ts)

print(f"Wrote complete index.ts with ALL_ELEMENTS ({len(all_elements)}) and fast lookup maps.")

