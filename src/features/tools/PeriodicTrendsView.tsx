import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { lightAppTheme } from '../../theme';
import {
  PERIODIC_TRENDS,
  TrendProperty,
  getTrendDataForPeriod,
} from '../../services/periodicTrendsService';
import { CATEGORY_COLOR_MAP } from '../../constants/colors';
import { toPersianDigits } from '../../utils/rtl';

export const PeriodicTrendsView: React.FC = () => {
  const [selectedTrend, setSelectedTrend] = useState<TrendProperty>('atomicRadius');
  const [selectedPeriod, setSelectedPeriod] = useState<number>(3); // Period 3 is the ideal textbook example (Na to Ar)

  const trendInfo = PERIODIC_TRENDS[selectedTrend];
  const dataPoints = getTrendDataForPeriod(selectedPeriod, selectedTrend);

  // Compute maximum value for bar scale
  const numericValues = dataPoints
    .map((dp) => dp.value)
    .filter((v): v is number => v !== null && !isNaN(v));
  const maxValue = numericValues.length > 0 ? Math.max(...numericValues) : 100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>روندهای تناوبی عناصر (Periodic Trends)</Text>
      <Text style={styles.subtitle}>
        بررسی الگوهای تغییرات دوره‌ای و گروهی در سراسر جدول تناوبی
      </Text>

      {/* Trend Selector Chips */}
      <View style={styles.chipsRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {(Object.keys(PERIODIC_TRENDS) as TrendProperty[]).map((key) => {
            const tr = PERIODIC_TRENDS[key];
            const active = selectedTrend === key;
            return (
              <TouchableOpacity
                key={key}
                style={[styles.trendChip, active && styles.trendChipActive]}
                onPress={() => setSelectedTrend(key)}
              >
                <Text style={[styles.trendChipText, active && styles.trendChipTextActive]}>
                  {tr.titleFa.split(' (')[0]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Explanatory Rules Box */}
      <View style={styles.rulesBox}>
        <View style={styles.ruleItem}>
          <Ionicons name="arrow-back" size={16} color={lightAppTheme.colors.scientificGreen} />
          <Text style={styles.ruleText}>{trendInfo.horizontalRuleFa}</Text>
        </View>
        <View style={styles.ruleItem}>
          <Ionicons name="arrow-down" size={16} color={lightAppTheme.colors.oceanBlue} />
          <Text style={styles.ruleText}>{trendInfo.verticalRuleFa}</Text>
        </View>
      </View>

      {/* Period Selector Tabs for Graph */}
      <View style={styles.periodRow}>
        <Text style={styles.periodLabel}>مشاهده در دوره:</Text>
        {[1, 2, 3, 4, 5, 6, 7].map((p) => {
          const active = selectedPeriod === p;
          return (
            <TouchableOpacity
              key={p}
              style={[styles.periodBtn, active && styles.periodBtnActive]}
              onPress={() => setSelectedPeriod(p)}
            >
              <Text style={[styles.periodBtnText, active && styles.periodBtnTextActive]}>
                {toPersianDigits(p)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Trend Interactive Bar Chart */}
      <View style={styles.chartBox}>
        <Text style={styles.chartTitle}>
          نمودار {trendInfo.titleFa.split(' (')[0]} در دوره {toPersianDigits(selectedPeriod)}:
        </Text>

        <View style={styles.barsContainer}>
          {dataPoints.map((dp) => {
            const catColor = CATEGORY_COLOR_MAP[dp.element.classification.category] || lightAppTheme.colors.scientificGreen;
            const hasVal = dp.value !== null && !isNaN(dp.value);
            const heightPercent = hasVal ? Math.max(12, (dp.value! / maxValue) * 100) : 6;

            return (
              <View key={dp.element.identity.atomicNumber} style={styles.barCol}>
                <Text style={styles.barValText}>
                  {hasVal ? toPersianDigits(Math.round(dp.value!)) : '-'}
                </Text>
                
                <View style={styles.barTrack}>
                  <View
                    style={[
                      styles.barFill,
                      {
                        height: `${heightPercent}%`,
                        backgroundColor: hasVal ? catColor : '#E2E8F0',
                      },
                    ]}
                  />
                </View>

                <Text style={styles.barSymbolText}>{dp.element.identity.symbol}</Text>
                <Text style={styles.barNumText}>{toPersianDigits(dp.element.identity.atomicNumber)}</Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* Full Educational Article Box */}
      <View style={styles.explanationBox}>
        <Text style={styles.explanationHeading}>توجیه علمی و مفاهیم بنیادین:</Text>
        <Text style={styles.explanationBody}>{trendInfo.explanationFa}</Text>
      </View>
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
  chipsRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  trendChip: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  trendChipActive: {
    backgroundColor: lightAppTheme.colors.scientificGreen,
    borderColor: lightAppTheme.colors.scientificGreen,
  },
  trendChipText: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
  },
  trendChipTextActive: {
    color: '#FFFFFF',
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  rulesBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    padding: 10,
    gap: 6,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ruleText: {
    flex: 1,
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
    lineHeight: 18,
  },
  periodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  periodLabel: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.secondaryText,
  },
  periodBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  periodBtnActive: {
    backgroundColor: lightAppTheme.colors.forestGreen,
  },
  periodBtnText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  periodBtnTextActive: {
    color: '#FFFFFF',
  },
  chartBox: {
    backgroundColor: '#FAFCFB',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#EAEFEA',
    marginBottom: 10,
  },
  chartTitle: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
    marginBottom: 8,
  },
  barsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 140,
    gap: 6,
    paddingBottom: 4,
  },
  barCol: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
  },
  barValText: {
    fontSize: 8.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    marginBottom: 3,
  },
  barTrack: {
    width: '100%',
    height: 90,
    backgroundColor: '#EDF2F0',
    borderRadius: 4,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barFill: {
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  barSymbolText: {
    fontSize: 11,
    fontFamily: 'System',
    fontWeight: 'bold',
    color: lightAppTheme.colors.primaryText,
    marginTop: 4,
  },
  barNumText: {
    fontSize: 8.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.secondaryText,
  },
  explanationBox: {
    backgroundColor: '#F0F9F5',
    borderRadius: 8,
    padding: 10,
    borderRightWidth: 3,
    borderRightColor: lightAppTheme.colors.scientificGreen,
  },
  explanationHeading: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
    marginBottom: 4,
  },
  explanationBody: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.primaryText,
    lineHeight: 19,
    textAlign: 'justify',
  },
});

