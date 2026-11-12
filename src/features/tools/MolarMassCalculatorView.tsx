import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { CATEGORY_COLOR_MAP } from '../../constants/colors';
import { CalculationResult, calculateMolarMass } from '../../services/molarMassService';
import { useTheme } from '../../theme';
import { toPersianDigits } from '../../utils/rtl';

const QUICK_FORMULAS = [
  'H2O',
  'CO2',
  'NaCl',
  'H2SO4',
  'C6H12O6',
  'Ca(OH)2',
  'Al2(SO4)3',
  'KMnO4',
  'CuSO4.5H2O',
];

export const MolarMassCalculatorView: React.FC = () => {
  const theme = useTheme();
  const [formula, setFormula] = useState('H2O');
  const [result, setResult] = useState<CalculationResult>(() => calculateMolarMass('H2O'));

  const handleCalculate = (text: string) => {
    setFormula(text);
    setResult(calculateMolarMass(text));
  };

  return (
    <View style={styles.container}>
      {/* Title & Description */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Ionicons name="calculator-outline" size={20} color={theme.colors.forestGreen} />
          <Text style={[styles.title, { color: theme.colors.primaryText }]}>
            محاسبه‌گر تخصصی جرم مولی
          </Text>
        </View>
        <Text style={[styles.subtitle, { color: theme.colors.secondaryText }]}>
          فرمول شیمیایی مورد نظر را با نمادهای استاندارد وارد کنید (پشتیبانی از پرانتزها و آب‌پوش‌ها):
        </Text>
      </View>

      {/* Input Field Row */}
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.05)' : '#F8FAFC',
            borderColor: result.error && formula.length > 0
              ? '#DC2626'
              : theme.colors.scientificGreen,
          },
        ]}
      >
        <Ionicons name="flask-outline" size={20} color={theme.colors.scientificGreen} />
        <TextInput
          style={[
            styles.input,
            {
              color: theme.colors.primaryText,
            },
          ]}
          value={formula}
          onChangeText={handleCalculate}
          placeholder="مثال: Ca(OH)2 یا Al2(SO4)3"
          placeholderTextColor={theme.colors.secondaryText}
          autoCapitalize="none"
          autoCorrect={false}
          accessibilityLabel="ورودی فرمول شیمیایی"
        />
        {formula.length > 0 && (
          <TouchableOpacity
            onPress={() => handleCalculate('')}
            style={styles.clearBtn}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="close-circle" size={18} color={theme.colors.secondaryText} />
          </TouchableOpacity>
        )}
      </View>

      {/* Quick Formula Suggestions Carousel */}
      <View style={styles.quickSection}>
        <Text style={[styles.quickLabel, { color: theme.colors.secondaryText }]}>
          فرمول‌های نمونه پرکاربرد:
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickScroll}
        >
          {QUICK_FORMULAS.map((f) => {
            const active = formula === f;
            return (
              <TouchableOpacity
                key={f}
                style={[
                  styles.quickChip,
                  active
                    ? [styles.quickChipActive, { backgroundColor: theme.colors.scientificGreen }]
                    : {
                        backgroundColor: theme.isDark
                          ? 'rgba(255, 255, 255, 0.06)'
                          : '#F1F5F9',
                        borderColor: theme.colors.border,
                      },
                ]}
                activeOpacity={0.7}
                onPress={() => handleCalculate(f)}
              >
                <Text
                  style={[
                    styles.quickChipText,
                    { color: active ? '#FFFFFF' : theme.colors.primaryText },
                  ]}
                >
                  {f}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Calculation Output */}
      {result.error ? (
        <View
          style={[
            styles.errorBox,
            {
              backgroundColor: theme.isDark ? 'rgba(220, 38, 38, 0.15)' : '#FEF2F2',
              borderColor: theme.isDark ? 'rgba(220, 38, 38, 0.4)' : '#FECACA',
            },
          ]}
        >
          <Ionicons name="alert-circle" size={20} color="#DC2626" />
          <Text style={[styles.errorText, { color: theme.isDark ? '#FCA5A5' : '#B91C1C' }]}>
            {result.error}
          </Text>
        </View>
      ) : (
        <View style={styles.resultBox}>
          {/* Total Molar Mass Hero Card */}
          <View
            style={[
              styles.totalCard,
              {
                backgroundColor: theme.isDark ? 'rgba(38, 125, 104, 0.15)' : '#F0F9F5',
                borderColor: theme.isDark ? 'rgba(38, 125, 104, 0.35)' : '#D1FAE5',
              },
            ]}
          >
            <View style={styles.totalHeaderRow}>
              <View style={styles.totalFormulaPill}>
                <Text style={styles.totalFormulaText}>{result.formula}</Text>
              </View>
              <Text style={[styles.totalLabel, { color: theme.colors.forestGreen }]}>
                جرم مولی کل ترکیب (M)
              </Text>
            </View>

            <View style={styles.totalValueContainer}>
              <Text style={[styles.totalValue, { color: theme.colors.scientificGreen }]}>
                {toPersianDigits(result.totalMolarMass.toFixed(3))}
              </Text>
              <View style={styles.unitBadge}>
                <Text style={styles.unitBadgeText}>g/mol</Text>
                <Text style={[styles.unitSubText, { color: theme.colors.secondaryText }]}>
                  گرم بر مول
                </Text>
              </View>
            </View>
          </View>

          {/* Element Component Breakdown Table */}
          <View style={styles.breakdownHeaderRow}>
            <Ionicons name="pie-chart-outline" size={16} color={theme.colors.forestGreen} />
            <Text style={[styles.breakdownTitle, { color: theme.colors.primaryText }]}>
              تفکیک عناصر، تعداد اتم و درصد جرمی:
            </Text>
          </View>

          <View
            style={[
              styles.table,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
          >
            {/* Table Header */}
            <View
              style={[
                styles.tableHeader,
                {
                  backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.04)' : '#F8FAFC',
                  borderBottomColor: theme.colors.border,
                },
              ]}
            >
              <Text style={[styles.th, { flex: 2, color: theme.colors.secondaryText }]}>
                عنصر
              </Text>
              <Text style={[styles.th, { flex: 1, color: theme.colors.secondaryText }]}>
                تعداد
              </Text>
              <Text style={[styles.th, { flex: 1.5, color: theme.colors.secondaryText }]}>
                جرم کل (u)
              </Text>
              <Text style={[styles.th, { flex: 2, color: theme.colors.secondaryText }]}>
                درصد جرمی
              </Text>
            </View>

            {/* Table Rows */}
            {result.components.map((comp, idx) => {
              const rowBg =
                idx % 2 === 0
                  ? theme.isDark
                    ? 'rgba(255, 255, 255, 0.015)'
                    : '#FAFAFA'
                  : 'transparent';

              return (
                <View
                  key={comp.symbol}
                  style={[
                    styles.tr,
                    {
                      backgroundColor: rowBg,
                      borderBottomColor: theme.isDark ? 'rgba(255, 255, 255, 0.06)' : '#F1F5F9',
                    },
                  ]}
                >
                  {/* Element Name & Symbol */}
                  <View style={[styles.tdCol, { flex: 2 }]}>
                    <View style={styles.symbolBadgeMini}>
                      <Text style={styles.symbolBadgeMiniText}>{comp.symbol}</Text>
                    </View>
                    <Text
                      style={[styles.tdNameFa, { color: theme.colors.primaryText }]}
                      numberOfLines={1}
                    >
                      {comp.nameFa}
                    </Text>
                  </View>

                  {/* Atom Count */}
                  <Text style={[styles.td, { flex: 1, color: theme.colors.primaryText }]}>
                    {toPersianDigits(comp.count)}
                  </Text>

                  {/* Total Mass */}
                  <Text style={[styles.td, { flex: 1.5, color: theme.colors.primaryText }]}>
                    {toPersianDigits(comp.totalMass.toFixed(2))}
                  </Text>

                  {/* Percentage + Visual Bar */}
                  <View style={[styles.tdPercentCol, { flex: 2 }]}>
                    <Text style={[styles.tdPercent, { color: theme.colors.scientificGreen }]}>
                      {toPersianDigits(comp.massPercentage.toFixed(1))}٪
                    </Text>
                    <View
                      style={[
                        styles.percentTrack,
                        {
                          backgroundColor: theme.isDark
                            ? 'rgba(255, 255, 255, 0.08)'
                            : '#E2E8F0',
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.percentFill,
                          {
                            width: `${Math.max(comp.massPercentage, 3)}%`,
                            backgroundColor: theme.colors.scientificGreen,
                          },
                        ]}
                      />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  header: {
    gap: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    fontSize: 14.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  subtitle: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1.5,
    paddingHorizontal: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  input: {
    flex: 1,
    height: 46,
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: 'bold',
    direction: 'ltr',
    textAlign: 'left',
  },
  clearBtn: {
    padding: 4,
  },
  quickSection: {
    gap: 6,
  },
  quickLabel: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Medium',
  },
  quickScroll: {
    gap: 6,
    paddingVertical: 2,
  },
  quickChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  quickChipActive: {
    borderColor: 'transparent',
  },
  quickChipText: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '700',
  },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  errorText: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Vazirmatn-Medium',
    lineHeight: 18,
  },
  resultBox: {
    gap: 12,
    marginTop: 4,
  },
  totalCard: {
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 2,
  },
  totalHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalFormulaPill: {
    backgroundColor: 'rgba(38, 125, 104, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
  totalFormulaText: {
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'System',
    color: '#267D68',
  },
  totalLabel: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  totalValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  totalValue: {
    fontSize: 30,
    fontFamily: 'Vazirmatn-Bold',
    letterSpacing: 0.5,
  },
  unitBadge: {
    alignItems: 'flex-end',
  },
  unitBadgeText: {
    fontSize: 13,
    fontFamily: 'System',
    fontWeight: '700',
    color: '#267D68',
  },
  unitSubText: {
    fontSize: 10,
    fontFamily: 'Vazirmatn-Regular',
  },
  breakdownHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  breakdownTitle: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  table: {
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
  },
  th: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Bold',
    textAlign: 'center',
  },
  tr: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
  },
  tdCol: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  symbolBadgeMini: {
    width: 26,
    height: 26,
    borderRadius: 6,
    backgroundColor: 'rgba(38, 125, 104, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbolBadgeMiniText: {
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'System',
    color: '#267D68',
  },
  tdNameFa: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
    flex: 1,
  },
  td: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Medium',
    textAlign: 'center',
  },
  tdPercentCol: {
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 4,
  },
  tdPercent: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  percentTrack: {
    width: '100%',
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  percentFill: {
    height: '100%',
    borderRadius: 2,
  },
});
