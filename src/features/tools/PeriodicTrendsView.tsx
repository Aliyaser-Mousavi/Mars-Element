import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CATEGORY_COLOR_MAP } from '../../constants/colors';
import {
  PERIODIC_TRENDS,
  TrendProperty,
  getTrendDataForPeriod,
} from '../../services/periodicTrendsService';
import { useTheme } from '../../theme';
import { toPersianDigits } from '../../utils/rtl';

export const PeriodicTrendsView: React.FC = () => {
  const theme = useTheme();
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
      {/* Title & Subtitle */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Ionicons name="trending-up-outline" size={20} color={theme.colors.forestGreen} />
          <Text style={[styles.title, { color: theme.colors.primaryText }]}>
            روندهای تناوبی در جدول تناوبی
          </Text>
        </View>
        <Text style={[styles.subtitle, { color: theme.colors.secondaryText }]}>
          بررسی الگوهای رفتاری خواص اتمی در طول دوره‌ها و گروه‌های جدول:
        </Text>
      </View>

      {/* Trend Selector Chips */}
      <View style={styles.selectorSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsScroll}
        >
          {(Object.keys(PERIODIC_TRENDS) as TrendProperty[]).map((key) => {
            const tr = PERIODIC_TRENDS[key];
            const active = selectedTrend === key;
            return (
              <TouchableOpacity
                key={key}
                style={[
                  styles.trendChip,
                  active
                    ? [styles.trendChipActive, { backgroundColor: theme.colors.scientificGreen }]
                    : {
                        backgroundColor: theme.isDark
                          ? 'rgba(255, 255, 255, 0.06)'
                          : '#F1F5F9',
                        borderColor: theme.colors.border,
                      },
                ]}
                activeOpacity={0.7}
                onPress={() => setSelectedTrend(key)}
              >
                <Text
                  style={[
                    styles.trendChipText,
                    { color: active ? '#FFFFFF' : theme.colors.primaryText },
                  ]}
                >
                  {tr.titleFa.split(' (')[0]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Explanatory Directional Rules Box */}
      <View
        style={[
          styles.rulesBox,
          {
            backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.04)' : '#F8FAFC',
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={styles.ruleItem}>
          <View
            style={[
              styles.ruleIconCircle,
              { backgroundColor: theme.isDark ? 'rgba(38, 125, 104, 0.2)' : theme.colors.lightGreen },
            ]}
          >
            <Ionicons name="arrow-back" size={16} color={theme.colors.scientificGreen} />
          </View>
          <View style={styles.ruleContent}>
            <Text style={[styles.ruleTitle, { color: theme.colors.scientificGreen }]}>
              تغییرات در طول دوره (چپ به راست):
            </Text>
            <Text style={[styles.ruleText, { color: theme.colors.primaryText }]}>
              {trendInfo.horizontalRuleFa}
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.ruleDivider,
            { backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' },
          ]}
        />

        <View style={styles.ruleItem}>
          <View
            style={[
              styles.ruleIconCircle,
              { backgroundColor: theme.isDark ? 'rgba(70, 137, 184, 0.2)' : '#E0F2FE' },
            ]}
          >
            <Ionicons name="arrow-down" size={16} color="#0284C7" />
          </View>
          <View style={styles.ruleContent}>
            <Text style={[styles.ruleTitle, { color: '#0284C7' }]}>
              تغییرات در طول گروه (بالا به پایین):
            </Text>
            <Text style={[styles.ruleText, { color: theme.colors.primaryText }]}>
              {trendInfo.verticalRuleFa}
            </Text>
          </View>
        </View>
      </View>

      {/* Period Selector Tabs for Graph */}
      <View style={styles.periodRow}>
        <Text style={[styles.periodLabel, { color: theme.colors.secondaryText }]}>
          مشاهده در دوره تناوبی:
        </Text>
        <View style={styles.periodBtnsWrap}>
          {[1, 2, 3, 4, 5, 6, 7].map((p) => {
            const active = selectedPeriod === p;
            return (
              <TouchableOpacity
                key={p}
                style={[
                  styles.periodBtn,
                  active
                    ? [styles.periodBtnActive, { backgroundColor: theme.colors.forestGreen }]
                    : {
                        backgroundColor: theme.isDark
                          ? 'rgba(255, 255, 255, 0.06)'
                          : '#F1F5F9',
                        borderColor: theme.colors.border,
                      },
                ]}
                activeOpacity={0.7}
                onPress={() => setSelectedPeriod(p)}
              >
                <Text
                  style={[
                    styles.periodBtnText,
                    { color: active ? '#FFFFFF' : theme.colors.primaryText },
                  ]}
                >
                  دوره {toPersianDigits(p)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Interactive Bar Chart */}
      <View
        style={[
          styles.chartBox,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={styles.chartHeader}>
          <Text style={[styles.chartTitle, { color: theme.colors.primaryText }]}>
            نمودار مقایسه‌ای {trendInfo.titleFa.split(' (')[0]}
          </Text>
          <Text style={[styles.chartUnitText, { color: theme.colors.secondaryText }]}>
            واحد: {trendInfo.unitFa}
          </Text>
        </View>

        {/* Scrollable Container so periods with 18+ elements never clip */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.barsScrollContent}
        >
          <View style={styles.barsContainer}>
            {dataPoints.map((dp) => {
              const catColor =
                CATEGORY_COLOR_MAP[dp.element.classification.category] ||
                theme.colors.scientificGreen;
              const hasVal = dp.value !== null && !isNaN(dp.value);
              const heightPercent = hasVal ? Math.max(10, (dp.value! / maxValue) * 100) : 4;

              return (
                <View key={dp.element.identity.atomicNumber} style={styles.barCol}>
                  {/* Numerical Value above bar */}
                  <Text
                    style={[styles.barValText, { color: theme.colors.secondaryText }]}
                    numberOfLines={1}
                  >
                    {hasVal ? toPersianDigits(Math.round(dp.value! * 10) / 10) : 'نامشخص'}
                  </Text>

                  {/* Vertical Track & Fill */}
                  <View
                    style={[
                      styles.barTrack,
                      {
                        backgroundColor: theme.isDark
                          ? 'rgba(255, 255, 255, 0.06)'
                          : '#EDF2F0',
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.barFill,
                        {
                          height: `${heightPercent}%`,
                          backgroundColor: hasVal
                            ? catColor
                            : theme.isDark
                            ? 'rgba(255, 255, 255, 0.1)'
                            : '#CBD5E1',
                        },
                      ]}
                    />
                  </View>

                  {/* Chemical Symbol & Atomic Number */}
                  <Text style={[styles.barSymbolText, { color: theme.colors.primaryText }]}>
                    {dp.element.identity.symbol}
                  </Text>
                  <Text style={[styles.barNumText, { color: theme.colors.secondaryText }]}>
                    {toPersianDigits(dp.element.identity.atomicNumber)}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* Full Educational Article Box */}
      <View
        style={[
          styles.explanationBox,
          {
            backgroundColor: theme.isDark ? 'rgba(38, 125, 104, 0.12)' : '#F0F9F5',
            borderRightColor: theme.colors.scientificGreen,
          },
        ]}
      >
        <View style={styles.explanationHeader}>
          <Ionicons name="school-outline" size={18} color={theme.colors.scientificGreen} />
          <Text style={[styles.explanationHeading, { color: theme.colors.forestGreen }]}>
            توجیه علمی و مفاهیم بنیادین کوانتومی:
          </Text>
        </View>
        <Text style={[styles.explanationBody, { color: theme.colors.primaryText }]}>
          {trendInfo.explanationFa}
        </Text>
      </View>
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
  selectorSection: {
    marginVertical: 2,
  },
  chipsScroll: {
    gap: 6,
    paddingVertical: 2,
  },
  trendChip: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
    borderWidth: 1,
  },
  trendChipActive: {
    borderColor: 'transparent',
  },
  trendChipText: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Medium',
  },
  rulesBox: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    gap: 10,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  ruleIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  ruleContent: {
    flex: 1,
  },
  ruleTitle: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
    marginBottom: 2,
  },
  ruleText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 18,
  },
  ruleDivider: {
    height: 1,
  },
  periodRow: {
    gap: 8,
  },
  periodLabel: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  periodBtnsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  periodBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  periodBtnActive: {
    borderColor: 'transparent',
  },
  periodBtnText: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Bold',
  },
  chartBox: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  chartUnitText: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Medium',
  },
  barsScrollContent: {
    paddingVertical: 6,
  },
  barsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 160,
    gap: 8,
  },
  barCol: {
    width: 38,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
  },
  barValText: {
    fontSize: 9,
    fontFamily: 'Vazirmatn-Bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  barTrack: {
    width: '100%',
    height: 100,
    borderRadius: 6,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barFill: {
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  barSymbolText: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: 'bold',
    marginTop: 5,
  },
  barNumText: {
    fontSize: 9.5,
    fontFamily: 'Vazirmatn-Medium',
  },
  explanationBox: {
    borderRadius: 12,
    padding: 12,
    borderRightWidth: 4,
    gap: 6,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  explanationHeading: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  explanationBody: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 20,
    textAlign: 'justify',
  },
});
