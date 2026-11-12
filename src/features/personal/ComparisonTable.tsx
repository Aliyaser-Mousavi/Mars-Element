import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CATEGORY_COLOR_MAP } from '../../constants/colors';
import { ELEMENT_CATEGORIES } from '../../constants/element-categories';
import { useTheme } from '../../theme';
import { ChemicalElement } from '../../types/element';
import { formatAtomicMass } from '../../utils/format';
import { toPersianDigits } from '../../utils/rtl';

interface ComparisonTableProps {
  elements: ChemicalElement[];
}

interface MetricRowDef {
  id: string;
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
    id: 'atomic-number',
    labelFa: 'عدد اتمی (Z)',
    getValue: (el) => toPersianDigits(el.identity.atomicNumber),
  },
  {
    id: 'atomic-mass',
    labelFa: 'جرم اتمی',
    unitFa: 'u',
    getValue: (el) =>
      el.physicalProperties.atomicMass.value !== null
        ? formatAtomicMass(el.physicalProperties.atomicMass.value, 2)
        : 'نامشخص',
  },
  {
    id: 'category',
    labelFa: 'خانواده شیمیایی',
    getValue: (el) =>
      ELEMENT_CATEGORIES[el.classification.category]?.nameFa ?? el.classification.category,
  },
  {
    id: 'coordinates',
    labelFa: 'موقعیت در جدول',
    getValue: (el) =>
      `دوره ${toPersianDigits(el.classification.period)} ، ${
        el.classification.group !== null
          ? `گروه ${toPersianDigits(el.classification.group)}`
          : 'بلوک f'
      }`,
  },
  {
    id: 'standard-state',
    labelFa: 'حالت فیزیکی',
    getValue: (el) => STATE_FA[el.classification.standardState] || 'نامشخص',
  },
  {
    id: 'electron-config',
    labelFa: 'آرایش الکترونی',
    isMono: true,
    getValue: (el) => el.atomicStructure.abbreviatedConfiguration || '-',
  },
  {
    id: 'electron-shells',
    labelFa: 'توزیع لایه‌ای',
    getValue: (el) => el.atomicStructure.electronShells.map(toPersianDigits).join(' - '),
  },
  {
    id: 'atomic-radius',
    labelFa: 'شعاع اتمی تجربی',
    unitFa: 'pm',
    getValue: (el) =>
      el.physicalProperties.atomicRadius.value !== null
        ? toPersianDigits(el.physicalProperties.atomicRadius.value)
        : 'نامشخص',
  },
  {
    id: 'electronegativity',
    labelFa: 'الکترونگاتیوی پاولینگ',
    getValue: (el) =>
      el.chemicalProperties.electronegativityPauling.value !== null
        ? toPersianDigits(el.chemicalProperties.electronegativityPauling.value)
        : 'نامشخص',
  },
  {
    id: 'first-ionization',
    labelFa: 'انرژی نخستین یونش',
    unitFa: 'kJ/mol',
    getValue: (el) =>
      el.chemicalProperties.firstIonizationEnergy.value !== null
        ? toPersianDigits(el.chemicalProperties.firstIonizationEnergy.value)
        : 'نامشخص',
  },
  {
    id: 'density',
    labelFa: 'چگالی استاندارد',
    unitFa: 'g/cm³',
    getValue: (el) =>
      el.physicalProperties.density.value !== null
        ? toPersianDigits(el.physicalProperties.density.value)
        : 'نامشخص',
  },
  {
    id: 'melting-point',
    labelFa: 'نقطه ذوب',
    unitFa: 'K',
    getValue: (el) =>
      el.thermalProperties.meltingPointKelvin.value !== null
        ? toPersianDigits(el.thermalProperties.meltingPointKelvin.value)
        : 'نامشخص',
  },
  {
    id: 'boiling-point',
    labelFa: 'نقطه جوش',
    unitFa: 'K',
    getValue: (el) =>
      el.thermalProperties.boilingPointKelvin.value !== null
        ? toPersianDigits(el.thermalProperties.boilingPointKelvin.value)
        : 'نامشخص',
  },
];

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ elements }) => {
  const theme = useTheme();

  if (elements.length === 0) return null;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View
          style={[
            styles.table,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            },
          ]}
        >
          {/* Header Row: Column Titles & Element Tiles */}
          <View
            style={[
              styles.headerRow,
              {
                backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.04)' : '#F8FAFC',
                borderBottomColor: theme.colors.border,
              },
            ]}
          >
            {/* Metric Column Header */}
            <View style={[styles.metricLabelCol, { borderLeftColor: theme.colors.border }]}>
              <View style={styles.headerLabelWrap}>
                <Ionicons name="flask-outline" size={16} color={theme.colors.scientificGreen} />
                <Text style={[styles.headerTitleLabel, { color: theme.colors.primaryText }]}>
                  ویژگی‌های علمی
                </Text>
              </View>
              <Text style={[styles.headerSubLabel, { color: theme.colors.secondaryText }]}>
                {toPersianDigits(elements.length)} عنصر
              </Text>
            </View>

            {/* Compared Elements Headers */}
            {elements.map((el) => {
              const catColor =
                CATEGORY_COLOR_MAP[el.classification.category] || theme.colors.scientificGreen;
              return (
                <View
                  key={`head-${el.identity.atomicNumber}`}
                  style={[styles.elementCol, { borderLeftColor: theme.colors.border }]}
                >
                  <View
                    style={[
                      styles.elementMiniCard,
                      {
                        borderColor: `${catColor}70`,
                        backgroundColor: `${catColor}14`,
                      },
                    ]}
                  >
                    <Text style={[styles.atomicNumber, { color: catColor }]}>
                      {toPersianDigits(el.identity.atomicNumber)}
                    </Text>
                    <Text style={[styles.symbolText, { color: theme.colors.primaryText }]}>
                      {el.identity.symbol}
                    </Text>
                    <Text
                      style={[styles.nameFaText, { color: theme.colors.primaryText }]}
                      numberOfLines={1}
                    >
                      {el.identity.nameFa}
                    </Text>
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

            let rowBg =
              rowIdx % 2 === 0
                ? theme.isDark
                  ? 'rgba(255, 255, 255, 0.015)'
                  : '#FAFCFB'
                : 'transparent';

            if (isDifferent) {
              rowBg = theme.isDark ? 'rgba(217, 119, 6, 0.08)' : '#FEFDF5';
            }

            return (
              <View
                key={metric.id}
                style={[
                  styles.dataRow,
                  {
                    backgroundColor: rowBg,
                    borderBottomColor: theme.isDark ? 'rgba(255, 255, 255, 0.06)' : '#F1F5F9',
                  },
                ]}
              >
                {/* Metric Label Column */}
                <View style={[styles.metricLabelCol, { borderLeftColor: theme.colors.border }]}>
                  <View style={styles.metricNameRow}>
                    <Text style={[styles.rowLabelText, { color: theme.colors.primaryText }]}>
                      {metric.labelFa}
                    </Text>
                    {isDifferent && (
                      <View style={styles.diffIndicatorDot} />
                    )}
                  </View>
                  {metric.unitFa && (
                    <Text style={[styles.unitText, { color: theme.colors.secondaryText }]}>
                      ({metric.unitFa})
                    </Text>
                  )}
                </View>

                {/* Values for each compared element */}
                {values.map((val, colIdx) => (
                  <View
                    key={`val-${metric.id}-${colIdx}`}
                    style={[styles.elementCol, { borderLeftColor: theme.colors.border }]}
                  >
                    <Text
                      style={[
                        styles.cellValueText,
                        { color: theme.colors.primaryText },
                        val === 'نامشخص' && [styles.cellUnavailable, { color: theme.colors.secondaryText }],
                        metric.isMono && styles.monoText,
                      ]}
                      numberOfLines={2}
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

      {/* Legend / Difference Highlight Note */}
      {elements.length > 1 && (
        <View style={styles.legendRow}>
          <View style={styles.diffIndicatorDot} />
          <Text style={[styles.legendText, { color: theme.colors.secondaryText }]}>
            سطرهای دارای نشانگر نارنجی مقادیر متفاوت دارند
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    gap: 8,
  },
  scrollContent: {
    paddingVertical: 4,
  },
  table: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
    minWidth: 340,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    paddingVertical: 12,
    alignItems: 'center',
  },
  metricLabelCol: {
    width: 135,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderLeftWidth: 1,
  },
  headerLabelWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  headerTitleLabel: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  headerSubLabel: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Regular',
    marginTop: 2,
  },
  elementCol: {
    width: 115,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
  },
  elementMiniCard: {
    width: 98,
    height: 82,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    position: 'relative',
  },
  atomicNumber: {
    position: 'absolute',
    top: 5,
    left: 8,
    fontSize: 10,
    fontFamily: 'Vazirmatn-Bold',
  },
  symbolText: {
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  nameFaText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
    marginTop: 2,
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
    minHeight: 44,
  },
  metricNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
  rowLabelText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Medium',
    flex: 1,
  },
  diffIndicatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D97706',
  },
  unitText: {
    fontSize: 10,
    fontFamily: 'System',
    marginTop: 2,
  },
  cellValueText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
    textAlign: 'center',
    lineHeight: 18,
  },
  cellUnavailable: {
    fontFamily: 'Vazirmatn-Regular',
    opacity: 0.7,
  },
  monoText: {
    fontFamily: 'System',
    fontSize: 10.5,
    direction: 'ltr',
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 4,
  },
  legendText: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Regular',
  },
});
