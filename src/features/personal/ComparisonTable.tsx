import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { lightAppTheme } from '../../theme';
import { ChemicalElement } from '../../types/element';
import { CATEGORY_COLOR_MAP } from '../../constants/colors';
import { ELEMENT_CATEGORIES } from '../../constants/element-categories';
import { formatAtomicMass } from '../../utils/format';
import { toPersianDigits } from '../../utils/rtl';

interface ComparisonTableProps {
  elements: ChemicalElement[];
}

interface MetricRowDef {
  labelFa: string;
  unitFa?: string;
  isMono?: boolean;
  getValue: (el: ChemicalElement) => string;
}

const STATE_FA: Record<string, string> = {
  solid: 'جامد',
  liquid: 'مایع',
  gas: 'گاز',
  unknown: 'نامشخص',
};

const COMPARISON_METRICS: MetricRowDef[] = [
  {
    labelFa: 'عدد اتمی (Z)',
    getValue: (el) => toPersianDigits(el.identity.atomicNumber),
  },
  {
    labelFa: 'جرم اتمی',
    unitFa: 'u',
    getValue: (el) =>
      el.physicalProperties.atomicMass.value !== null
        ? formatAtomicMass(el.physicalProperties.atomicMass.value, 2)
        : 'نامشخص',
  },
  {
    labelFa: 'خانواده شیمیایی',
    getValue: (el) =>
      ELEMENT_CATEGORIES[el.classification.category]?.nameFa ?? el.classification.category,
  },
  {
    labelFa: 'موقعیت جدول',
    getValue: (el) =>
      `دوره ${toPersianDigits(el.classification.period)} ، ${
        el.classification.group !== null
          ? `گروه ${toPersianDigits(el.classification.group)}`
          : 'بلوک f'
      }`,
  },
  {
    labelFa: 'حالت فیزیکی',
    getValue: (el) => STATE_FA[el.classification.standardState] || 'نامشخص',
  },
  {
    labelFa: 'آرایش الکترونی',
    isMono: true,
    getValue: (el) => el.atomicStructure.abbreviatedConfiguration || '-',
  },
  {
    labelFa: 'توزیع لایه‌ای',
    getValue: (el) => el.atomicStructure.electronShells.map(toPersianDigits).join(' - '),
  },
  {
    labelFa: 'شعاع اتمی تجربی',
    unitFa: 'pm',
    getValue: (el) =>
      el.physicalProperties.atomicRadius.value !== null
        ? toPersianDigits(el.physicalProperties.atomicRadius.value)
        : 'نامشخص',
  },
  {
    labelFa: 'الکترونگاتیوی پاولینگ',
    getValue: (el) =>
      el.chemicalProperties.electronegativityPauling.value !== null
        ? toPersianDigits(el.chemicalProperties.electronegativityPauling.value)
        : 'نامشخص',
  },
  {
    labelFa: 'انرژی نخستین یونش',
    unitFa: 'kJ/mol',
    getValue: (el) =>
      el.chemicalProperties.firstIonizationEnergy.value !== null
        ? toPersianDigits(el.chemicalProperties.firstIonizationEnergy.value)
        : 'نامشخص',
  },
  {
    labelFa: 'چگالی استاندارد',
    unitFa: 'g/cm³',
    getValue: (el) =>
      el.physicalProperties.density.value !== null
        ? toPersianDigits(el.physicalProperties.density.value)
        : 'نامشخص',
  },
  {
    labelFa: 'نقطه ذوب',
    unitFa: 'K',
    getValue: (el) =>
      el.thermalProperties.meltingPointKelvin.value !== null
        ? toPersianDigits(el.thermalProperties.meltingPointKelvin.value)
        : 'نامشخص',
  },
  {
    labelFa: 'نقطه جوش',
    unitFa: 'K',
    getValue: (el) =>
      el.thermalProperties.boilingPointKelvin.value !== null
        ? toPersianDigits(el.thermalProperties.boilingPointKelvin.value)
        : 'نامشخص',
  },
];

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ elements }) => {
  if (elements.length === 0) return null;

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollWrapper}>
      <View style={styles.table}>
        {/* Header Row: Element Cards */}
        <View style={styles.headerRow}>
          <View style={styles.metricLabelCol}>
            <Text style={styles.headerTitleLabel}>ویژگی علمی</Text>
          </View>

          {elements.map((el) => {
            const catColor = CATEGORY_COLOR_MAP[el.classification.category] || lightAppTheme.colors.scientificGreen;
            return (
              <View key={`head-${el.identity.atomicNumber}`} style={styles.elementCol}>
                <View style={[styles.elementMiniCard, { borderColor: catColor, backgroundColor: `${catColor}12` }]}>
                  <Text style={styles.atomicNumber}>{toPersianDigits(el.identity.atomicNumber)}</Text>
                  <Text style={styles.symbolText}>{el.identity.symbol}</Text>
                  <Text style={styles.nameFaText}>{el.identity.nameFa}</Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* Data Metric Rows */}
        {COMPARISON_METRICS.map((metric, rowIdx) => {
          const values = elements.map((e) => metric.getValue(e));
          // Highlight differences if more than 1 element and values differ
          const isDifferent = elements.length > 1 && new Set(values).size > 1;

          return (
            <View
              key={`metric-${rowIdx}`}
              style={[
                styles.dataRow,
                rowIdx % 2 === 0 && styles.dataRowEven,
                isDifferent && styles.dataRowDiff,
              ]}
            >
              <View style={styles.metricLabelCol}>
                <Text style={styles.rowLabelText}>{metric.labelFa}</Text>
                {metric.unitFa && <Text style={styles.unitText}>({metric.unitFa})</Text>}
              </View>

              {values.map((val, colIdx) => (
                <View key={`val-${rowIdx}-${colIdx}`} style={styles.elementCol}>
                  <Text
                    style={[
                      styles.cellValueText,
                      val === 'نامشخص' && styles.cellUnavailable,
                      metric.isMono && styles.monoText,
                    ]}
                  >
                    {val}
                  </Text>
                </View>
              ))}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollWrapper: {
    marginVertical: 10,
  },
  table: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    overflow: 'hidden',
    minWidth: 320,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1.5,
    borderBottomColor: lightAppTheme.colors.border,
    paddingVertical: 10,
    alignItems: 'center',
  },
  metricLabelCol: {
    width: 125,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  elementCol: {
    width: 110,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleLabel: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
  },
  elementMiniCard: {
    width: 95,
    height: 76,
    borderRadius: 8,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  atomicNumber: {
    position: 'absolute',
    top: 4,
    left: 6,
    fontSize: 9.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  symbolText: {
    fontSize: 22,
    fontFamily: 'System',
    fontWeight: 'bold',
    color: lightAppTheme.colors.primaryText,
  },
  nameFaText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
    marginTop: 2,
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingVertical: 9,
    alignItems: 'center',
  },
  dataRowEven: {
    backgroundColor: '#FAFCFB',
  },
  dataRowDiff: {
    backgroundColor: '#FEFDF5',
  },
  rowLabelText: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
  },
  unitText: {
    fontSize: 9.5,
    fontFamily: 'System',
    color: lightAppTheme.colors.secondaryText,
    marginTop: 1,
  },
  cellValueText: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: lightAppTheme.colors.primaryText,
    textAlign: 'center',
  },
  cellUnavailable: {
    color: '#94A3B8',
    fontFamily: lightAppTheme.fontFamily.persianRegular,
  },
  monoText: {
    fontFamily: 'System',
    fontSize: 10,
  },
});

