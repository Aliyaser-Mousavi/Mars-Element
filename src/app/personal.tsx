import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { EmptyState, ScreenContainer } from '../components';
import { CATEGORY_COLOR_MAP } from '../constants/colors';
import { ELEMENT_CATEGORIES } from '../constants/element-categories';
import { ComparisonTable } from '../features/personal';
import { SearchResultCard } from '../features/search/SearchResultCard';
import { elementRepository } from '../services/elementService';
import { favoritesStorage } from '../services/favoritesService';
import { historyStorage } from '../services/historyService';
import { useTheme } from '../theme';
import { ChemicalElement, ElementCategory } from '../types/element';
import { toPersianDigits } from '../utils/rtl';

type StudyTab = 'favorites' | 'history' | 'compare';

const SUGGESTED_COMPARE_ATOMIC_NUMBERS = [1, 6, 8, 26, 79, 92]; // H, C, O, Fe, Au, U

export default function PersonalStudyScreen() {
  const router = useRouter();
  const theme = useTheme();

  const [activeTab, setActiveTab] = useState<StudyTab>('favorites');

  // Favorites & History states
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [historyIds, setHistoryIds] = useState<number[]>([]);
  const [selectedFamily, setSelectedFamily] = useState<ElementCategory | 'all'>('all');

  // Element Comparison state (up to 3 elements)
  const [compareIds, setCompareIds] = useState<number[]>([1, 6, 8]); // Default: H, C, O

  // Load data on mount
  const loadData = async () => {
    const favs = await favoritesStorage.getFavorites();
    const hists = await historyStorage.getHistory();
    setFavoriteIds(favs);
    setHistoryIds(hists);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Map IDs to ChemicalElement records
  const favoriteElements = useMemo(() => {
    let list = favoriteIds
      .map((id) => elementRepository.getByAtomicNumber(id))
      .filter((el): el is ChemicalElement => el !== null);

    if (selectedFamily !== 'all') {
      list = list.filter((el) => el.classification.category === selectedFamily);
    }
    return list;
  }, [favoriteIds, selectedFamily]);

  const historyElements = useMemo(() => {
    return historyIds
      .map((id) => elementRepository.getByAtomicNumber(id))
      .filter((el): el is ChemicalElement => el !== null);
  }, [historyIds]);

  const comparedElements = useMemo(() => {
    return compareIds
      .map((id) => elementRepository.getByAtomicNumber(id))
      .filter((el): el is ChemicalElement => el !== null);
  }, [compareIds]);

  // Family counts in favorites
  const familyCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    favoriteIds.forEach((id) => {
      const el = elementRepository.getByAtomicNumber(id);
      if (el) {
        counts[el.classification.category] = (counts[el.classification.category] || 0) + 1;
      }
    });
    return counts;
  }, [favoriteIds]);

  const handleClearHistory = () => {
    Alert.alert('پاک‌کردن تاریخچه', 'آیا از پاک کردن کامل تاریخچه مشاهده اطمینان دارید؟', [
      { text: 'انصراف', style: 'cancel' },
      {
        text: 'پاک کردن',
        style: 'destructive',
        onPress: async () => {
          await historyStorage.clearHistory();
          setHistoryIds([]);
        },
      },
    ]);
  };

  const handleRemoveCompareElement = (atomicNumber: number) => {
    if (compareIds.length <= 1) {
      Alert.alert('حداقل عناصر', 'حداقل یک عنصر برای مقایسه باقی بماند.');
      return;
    }
    setCompareIds((prev) => prev.filter((id) => id !== atomicNumber));
  };

  const handleAddCompareQuick = (atomicNumber: number) => {
    if (compareIds.includes(atomicNumber)) return;
    if (compareIds.length >= 3) {
      Alert.alert('ظرفیت مقایسه', 'حداکثر می‌توانید ۳ عنصر را همزمان با یکدیگر مقایسه کنید.');
      return;
    }
    setCompareIds((prev) => [...prev, atomicNumber]);
  };

  return (
    <ScreenContainer scrollable={activeTab === 'compare'}>
      {/* Top Header Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[
            styles.backBtn,
            {
              backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.08)' : theme.colors.lightGreen,
              borderColor: theme.colors.border,
            },
          ]}
          onPress={() => router.replace('/')}
          activeOpacity={0.7}
        >
          <Ionicons
            name="arrow-forward-outline"
            size={16}
            color={theme.colors.forestGreen}
          />
          <Text style={[styles.backText, { color: theme.colors.forestGreen }]}>
            جدول تناوبی
          </Text>
        </TouchableOpacity>

        <View style={styles.titleWrap}>
          <Text style={[styles.screenTitle, { color: theme.colors.primaryText }]}>
            میز مطالعه و مقایسه
          </Text>
          <Text style={[styles.screenSubtitle, { color: theme.colors.secondaryText }]}>
            نشان‌شده‌ها، سوابق و مقایسه چندگانه
          </Text>
        </View>

        <View style={{ width: 40 }} />
      </View>

      {/* 3-Tab Segment Navigation */}
      <View
        style={[
          styles.tabsRow,
          {
            backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
            borderColor: theme.colors.border,
          },
        ]}
      >
        {/* Tab 1: Favorites */}
        <TouchableOpacity
          style={[
            styles.tabBtn,
            activeTab === 'favorites' && [
              styles.tabBtnActive,
              { backgroundColor: theme.colors.scientificGreen },
            ],
          ]}
          activeOpacity={0.75}
          onPress={() => setActiveTab('favorites')}
        >
          <Ionicons
            name={activeTab === 'favorites' ? 'heart' : 'heart-outline'}
            size={16}
            color={activeTab === 'favorites' ? '#FFFFFF' : theme.colors.forestGreen}
          />
          <Text
            style={[
              styles.tabBtnText,
              { color: activeTab === 'favorites' ? '#FFFFFF' : theme.colors.primaryText },
            ]}
          >
            نشان‌شده‌ها ({toPersianDigits(favoriteIds.length)})
          </Text>
        </TouchableOpacity>

        {/* Tab 2: History */}
        <TouchableOpacity
          style={[
            styles.tabBtn,
            activeTab === 'history' && [
              styles.tabBtnActive,
              { backgroundColor: theme.colors.scientificGreen },
            ],
          ]}
          activeOpacity={0.75}
          onPress={() => setActiveTab('history')}
        >
          <Ionicons
            name={activeTab === 'history' ? 'time' : 'time-outline'}
            size={16}
            color={activeTab === 'history' ? '#FFFFFF' : theme.colors.forestGreen}
          />
          <Text
            style={[
              styles.tabBtnText,
              { color: activeTab === 'history' ? '#FFFFFF' : theme.colors.primaryText },
            ]}
          >
            تاریخچه ({toPersianDigits(historyIds.length)})
          </Text>
        </TouchableOpacity>

        {/* Tab 3: Compare */}
        <TouchableOpacity
          style={[
            styles.tabBtn,
            activeTab === 'compare' && [
              styles.tabBtnActive,
              { backgroundColor: theme.colors.scientificGreen },
            ],
          ]}
          activeOpacity={0.75}
          onPress={() => setActiveTab('compare')}
        >
          <Ionicons
            name="git-compare-outline"
            size={16}
            color={activeTab === 'compare' ? '#FFFFFF' : theme.colors.forestGreen}
          />
          <Text
            style={[
              styles.tabBtnText,
              { color: activeTab === 'compare' ? '#FFFFFF' : theme.colors.primaryText },
            ]}
          >
            مقایسه ({toPersianDigits(compareIds.length)})
          </Text>
        </TouchableOpacity>
      </View>

      {/* TAB 1: Favorites */}
      {activeTab === 'favorites' && (
        <View style={styles.tabContent}>
          {/* Family Category Filter Chips if favorites exist */}
          {favoriteIds.length > 0 && (
            <View style={styles.filterSection}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.familyFilterScroll}
              >
                {/* 'All' Chip */}
                <TouchableOpacity
                  style={[
                    styles.familyChip,
                    selectedFamily === 'all'
                      ? [styles.familyChipActive, { backgroundColor: theme.colors.scientificGreen }]
                      : {
                          backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.06)' : '#F0F4F2',
                          borderColor: theme.colors.border,
                        },
                  ]}
                  activeOpacity={0.7}
                  onPress={() => setSelectedFamily('all')}
                >
                  <Text
                    style={[
                      styles.familyChipText,
                      { color: selectedFamily === 'all' ? '#FFFFFF' : theme.colors.primaryText },
                    ]}
                  >
                    همه ({toPersianDigits(favoriteIds.length)})
                  </Text>
                </TouchableOpacity>

                {/* Individual Categories */}
                {Object.entries(ELEMENT_CATEGORIES).map(([catKey, meta]) => {
                  const count = familyCounts[catKey] || 0;
                  if (count === 0) return null; // Only show categories present in user's favorites

                  const active = selectedFamily === catKey;
                  const catColor = CATEGORY_COLOR_MAP[catKey as ElementCategory] || theme.colors.scientificGreen;

                  return (
                    <TouchableOpacity
                      key={catKey}
                      style={[
                        styles.familyChip,
                        active
                          ? [styles.familyChipActive, { backgroundColor: theme.colors.scientificGreen }]
                          : {
                              backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.06)' : '#F0F4F2',
                              borderColor: theme.colors.border,
                            },
                      ]}
                      activeOpacity={0.7}
                      onPress={() => setSelectedFamily(catKey as ElementCategory)}
                    >
                      <View style={[styles.categoryDot, { backgroundColor: catColor }]} />
                      <Text
                        style={[
                          styles.familyChipText,
                          { color: active ? '#FFFFFF' : theme.colors.primaryText },
                        ]}
                      >
                        {meta.nameFa} ({toPersianDigits(count)})
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          )}

          {/* Favorites Elements List */}
          <FlatList
            data={favoriteElements}
            keyExtractor={(item) => String(item.identity.atomicNumber)}
            renderItem={({ item }) => (
              <SearchResultCard
                item={{ element: item, matchedBy: 'nameFa' }}
                onPress={() => router.push(`/element/${item.identity.atomicNumber}` as any)}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <EmptyState
                iconName="heart-outline"
                title="علاقه‌مندی ثبت نشده است"
                message="برای ذخیره عناصر در این بخش، در صفحه هر عنصر روی آیکون نشان کردن ضربه بزنید."
                actionTitle="مشاهده جدول تناوبی"
                onAction={() => router.replace('/')}
              />
            }
          />
        </View>
      )}

      {/* TAB 2: History */}
      {activeTab === 'history' && (
        <View style={styles.tabContent}>
          {historyIds.length > 0 && (
            <View style={styles.historyHeaderRow}>
              <View style={styles.historyCountBadge}>
                <Ionicons name="time-outline" size={14} color={theme.colors.secondaryText} />
                <Text style={[styles.historyCountText, { color: theme.colors.secondaryText }]}>
                  {toPersianDigits(historyIds.length)} عنصر اخیراً مشاهده‌شده
                </Text>
              </View>

              <TouchableOpacity
                onPress={handleClearHistory}
                style={[
                  styles.clearBtn,
                  {
                    backgroundColor: theme.isDark ? 'rgba(220, 38, 38, 0.12)' : '#FEF2F2',
                    borderColor: theme.isDark ? 'rgba(220, 38, 38, 0.3)' : '#FEE2E2',
                  },
                ]}
                activeOpacity={0.7}
              >
                <Ionicons name="trash-outline" size={14} color="#DC2626" />
                <Text style={styles.clearBtnText}>پاک‌کردن تاریخچه</Text>
              </TouchableOpacity>
            </View>
          )}

          <FlatList
            data={historyElements}
            keyExtractor={(item) => String(item.identity.atomicNumber)}
            renderItem={({ item }) => (
              <SearchResultCard
                item={{ element: item, matchedBy: 'other' }}
                onPress={() => router.push(`/element/${item.identity.atomicNumber}` as any)}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <EmptyState
                iconName="time-outline"
                title="تاریخچه‌ای ثبت نشده است"
                message="عناصری که در جدول تناوبی و جستجو مشاهده می‌کنید به صورت خودکار در این بخش ذخیره می‌شوند."
                actionTitle="مشاهده جدول تناوبی"
                onAction={() => router.replace('/')}
              />
            }
          />
        </View>
      )}

      {/* TAB 3: Element Comparison */}
      {activeTab === 'compare' && (
        <View style={styles.compareContainer}>
          {/* Header Card / Instructions */}
          <View
            style={[
              styles.compareInstructionCard,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <View style={styles.instructionHeader}>
              <Ionicons name="git-compare" size={18} color={theme.colors.scientificGreen} />
              <Text style={[styles.compareTitle, { color: theme.colors.primaryText }]}>
                جایگاه‌های مقایسه همزمان (حداکثر ۳ عنصر)
              </Text>
            </View>
            <Text style={[styles.compareDesc, { color: theme.colors.secondaryText }]}>
              خواص فیزیکی، شیمیایی و آرایش الکترونی عناصر منتخب را در یک جدول مقایسه‌ای بررسی کنید.
            </Text>

            {/* Selection Slots (1 to 3 elements) */}
            <View style={styles.slotsRow}>
              {comparedElements.map((el) => {
                const catColor =
                  CATEGORY_COLOR_MAP[el.classification.category] || theme.colors.scientificGreen;
                return (
                  <View
                    key={`slot-${el.identity.atomicNumber}`}
                    style={[
                      styles.slotCard,
                      {
                        backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.04)' : '#F8FAFC',
                        borderColor: `${catColor}80`,
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.slotSymbolBox,
                        {
                          backgroundColor: `${catColor}18`,
                          borderColor: catColor,
                        },
                      ]}
                    >
                      <Text style={[styles.slotSymbolText, { color: theme.colors.primaryText }]}>
                        {el.identity.symbol}
                      </Text>
                    </View>

                    <View style={styles.slotInfo}>
                      <Text
                        style={[styles.slotNameText, { color: theme.colors.primaryText }]}
                        numberOfLines={1}
                      >
                        {el.identity.nameFa}
                      </Text>
                      <Text style={[styles.slotZText, { color: theme.colors.secondaryText }]}>
                        Z = {toPersianDigits(el.identity.atomicNumber)}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={styles.slotRemoveBtn}
                      activeOpacity={0.7}
                      onPress={() => handleRemoveCompareElement(el.identity.atomicNumber)}
                    >
                      <Ionicons name="close-circle" size={18} color="#DC2626" />
                    </TouchableOpacity>
                  </View>
                );
              })}

              {/* Placeholder for remaining slot if < 3 */}
              {compareIds.length < 3 && (
                <View
                  style={[
                    styles.slotPlaceholderCard,
                    {
                      borderColor: theme.isDark ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
                    },
                  ]}
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={22}
                    color={theme.colors.secondaryText}
                  />
                  <Text style={[styles.placeholderText, { color: theme.colors.secondaryText }]}>
                    جایگاه خالی
                  </Text>
                </View>
              )}
            </View>

            {/* Quick Add Suggestions */}
            {compareIds.length < 3 && (
              <View style={styles.quickAddSection}>
                <Text style={[styles.quickAddLabel, { color: theme.colors.secondaryText }]}>
                  پیشنهاد افزودن سریع:
                </Text>
                <View style={styles.quickAddChipsRow}>
                  {SUGGESTED_COMPARE_ATOMIC_NUMBERS.map((num) => {
                    if (compareIds.includes(num)) return null;
                    const quickEl = elementRepository.getByAtomicNumber(num);
                    if (!quickEl) return null;
                    return (
                      <TouchableOpacity
                        key={`quick-${num}`}
                        style={[
                          styles.quickAddBtn,
                          {
                            backgroundColor: theme.isDark
                              ? 'rgba(38, 125, 104, 0.2)'
                              : theme.colors.lightGreen,
                            borderColor: theme.colors.scientificGreen,
                          },
                        ]}
                        activeOpacity={0.75}
                        onPress={() => handleAddCompareQuick(num)}
                      >
                        <Text style={[styles.quickAddText, { color: theme.colors.scientificGreen }]}>
                          + {quickEl.identity.symbol} ({quickEl.identity.nameFa})
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            )}
          </View>

          {/* Comparison Table Component */}
          <ComparisonTable elements={comparedElements} />

          <View style={{ height: 40 }} />
        </View>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 6,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  backText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  titleWrap: {
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 15,
    fontFamily: 'Vazirmatn-Bold',
  },
  screenSubtitle: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Regular',
    marginTop: 1,
  },
  tabsRow: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 3,
    marginBottom: 10,
    borderWidth: 1,
    gap: 4,
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 9,
    gap: 5,
  },
  tabBtnActive: {},
  tabBtnText: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Bold',
  },
  tabContent: {
    flex: 1,
  },
  filterSection: {
    marginBottom: 8,
  },
  familyFilterScroll: {
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 2,
  },
  familyChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
  },
  familyChipActive: {
    borderColor: 'transparent',
  },
  familyChipText: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Medium',
  },
  categoryDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  listContent: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  historyHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 2,
  },
  historyCountBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  historyCountText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
  },
  clearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
  },
  clearBtnText: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Bold',
    color: '#DC2626',
  },
  compareContainer: {
    paddingBottom: 20,
    gap: 12,
  },
  compareInstructionCard: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    gap: 10,
  },
  instructionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  compareTitle: {
    fontSize: 13,
    fontFamily: 'Vazirmatn-Bold',
  },
  compareDesc: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 18,
  },
  slotsRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  slotCard: {
    flex: 1,
    minWidth: 95,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
    borderWidth: 1.5,
    gap: 8,
  },
  slotSymbolBox: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  slotSymbolText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'System',
  },
  slotInfo: {
    flex: 1,
  },
  slotNameText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  slotZText: {
    fontSize: 9.5,
    fontFamily: 'Vazirmatn-Medium',
  },
  slotRemoveBtn: {
    padding: 2,
  },
  slotPlaceholderCard: {
    flex: 1,
    minWidth: 95,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    gap: 2,
  },
  placeholderText: {
    fontSize: 10,
    fontFamily: 'Vazirmatn-Medium',
  },
  quickAddSection: {
    marginTop: 4,
    gap: 6,
  },
  quickAddLabel: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Medium',
  },
  quickAddChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  quickAddBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  quickAddText: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Bold',
  },
});
