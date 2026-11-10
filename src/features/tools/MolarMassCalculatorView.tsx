import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { lightAppTheme } from '../../theme';
import { calculateMolarMass, CalculationResult } from '../../services/molarMassService';
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
  const [formula, setFormula] = useState('H2O');
  const [result, setResult] = useState<CalculationResult>(() => calculateMolarMass('H2O'));

  const handleCalculate = (text: string) => {
    setFormula(text);
    setResult(calculateMolarMass(text));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>محاسبه‌گر جرم مولی فرمول‌های شیمیایی</Text>
      <Text style={styles.subtitle}>
        فرمول مولکولی یا یونی را وارد کنید (پشتیبانی از پرانتزها و آب‌پوش‌ها):
      </Text>

      {/* Input row */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={formula}
          onChangeText={handleCalculate}
          placeholder="مثال: Ca(OH)2 یا Al2(SO4)3"
          placeholderTextColor="#94A3B8"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {formula.length > 0 && (
          <TouchableOpacity onPress={() => handleCalculate('')} style={styles.clearBtn}>
            <Ionicons name="close-circle" size={18} color="#94A3B8" />
          </TouchableOpacity>
        )}
      </View>

      {/* Quick Formula chips */}
      <View style={styles.chipsRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {QUICK_FORMULAS.map((f) => (
            <TouchableOpacity
              key={f}
              style={[styles.quickChip, formula === f && styles.quickChipActive]}
              onPress={() => handleCalculate(f)}
            >
              <Text style={[styles.quickChipText, formula === f && styles.quickChipTextActive]}>
                {f}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Calculation Output */}
      {result.error ? (
        <View style={styles.errorBox}>
          <Ionicons name="alert-circle" size={18} color={lightAppTheme.colors.coral} />
          <Text style={styles.errorText}>{result.error}</Text>
        </View>
      ) : (
        <View style={styles.resultBox}>
          {/* Total Mass Highlight */}
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>جرم مولی کل (M):</Text>
            <View style={styles.totalValueGroup}>
              <Text style={styles.totalValue}>
                {toPersianDigits(result.totalMolarMass.toFixed(3))}
              </Text>
              <Text style={styles.totalUnit}>گرم بر مول (g/mol)</Text>
            </View>
          </View>

          {/* Element Component Breakdown Table */}
          <Text style={styles.breakdownTitle}>تفکیک درصد جرمی و سهم عناصر:</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.th, { flex: 2 }]}>عنصر</Text>
              <Text style={[styles.th, { flex: 1 }]}>تعداد</Text>
              <Text style={[styles.th, { flex: 1.5 }]}>جرم کل</Text>
              <Text style={[styles.th, { flex: 1.5 }]}>درصد جرمی</Text>
            </View>

            {result.components.map((comp, idx) => (
              <View key={comp.symbol} style={[styles.tr, idx % 2 === 0 && styles.trEven]}>
                <View style={[styles.tdCol, { flex: 2 }]}>
                  <Text style={styles.tdNameFa}>{comp.nameFa}</Text>
                  <Text style={styles.tdSymbol}>({comp.symbol})</Text>
                </View>
                <Text style={[styles.td, { flex: 1 }]}>{toPersianDigits(comp.count)}</Text>
                <Text style={[styles.td, { flex: 1.5 }]}>
                  {toPersianDigits(comp.totalMass.toFixed(2))}
                </Text>
                <Text style={[styles.tdPercent, { flex: 1.5 }]}>
                  {toPersianDigits(comp.massPercentage.toFixed(1))}٪
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 14,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    marginBottom: 14,
  },
  title: {
    fontSize: 14,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
  },
  subtitle: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    marginTop: 2,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: lightAppTheme.colors.border,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    height: 42,
    fontFamily: 'System',
    fontSize: 15,
    fontWeight: 'bold',
    color: lightAppTheme.colors.primaryText,
    direction: 'ltr',
    textAlign: 'left',
  },
  clearBtn: {
    padding: 4,
  },
  chipsRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  quickChip: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginRight: 6,
  },
  quickChipActive: {
    backgroundColor: lightAppTheme.colors.scientificGreen,
  },
  quickChipText: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '600',
    color: lightAppTheme.colors.primaryText,
  },
  quickChipTextActive: {
    color: '#FFFFFF',
  },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FEF2F2',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  errorText: {
    flex: 1,
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.coral,
  },
  resultBox: {
    marginTop: 4,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F9F5',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1FAE5',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
  },
  totalValueGroup: {
    alignItems: 'flex-end',
  },
  totalValue: {
    fontSize: 20,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.scientificGreen,
  },
  totalUnit: {
    fontSize: 10,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
  },
  breakdownTitle: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
    marginBottom: 6,
  },
  table: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFC',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  th: {
    fontSize: 10.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.secondaryText,
    textAlign: 'center',
  },
  tr: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  trEven: {
    backgroundColor: '#FAFAFA',
  },
  tdCol: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tdNameFa: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  tdSymbol: {
    fontSize: 10,
    fontFamily: 'System',
    color: lightAppTheme.colors.secondaryText,
  },
  td: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
    textAlign: 'center',
  },
  tdPercent: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.scientificGreen,
    textAlign: 'center',
  },
});

