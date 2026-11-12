import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContainer, SearchField, EmptyState } from '@/components';
import { useTheme } from '@/theme';
import {
  searchAndFilterElements,
  INITIAL_FILTERS,
  SearchFilterState,
  SortOption,
  filterStateStore,
} from '@/services/searchService';
import { recentSearchesStorage } from '@/services/recentSearchesService';
import { SearchResultCard } from '@/features/search/SearchResultCard';
import { ELEMENT_CATEGORIES } from '@/constants/element-categories';
import { toPersianDigits } from '@/utils/rtl';

const POPULAR_SUGGESTIONS = [
  'طلا',
  'آهن',
  'اکسیژن',
  'اورانیوم',
  'Fe',
  'Au',
  '79',
  'هیدروژن',
  'کربن',
  'مس',
  'نقره',
  'پلاتین',
];

const STATE_NAMES: Record<string, string> = {
  solid: 'جامد',
  liquid: 'مایع',
  gas: 'گاز',
};

const METAL_NAMES: Record<string, string> = {
  metal: 'فلز',
  metalloid: 'شبه‌فلز',
  nonmetal: 'نافلز',
};

const SORT_LABELS: Record<SortOption, string> = {
  'atomic-asc': 'شماره اتمی (صعودی)',
  'atomic-desc': 'شماره اتمی (نزولی)',
  'mass-asc': 'جرم اتمی (کم به زیاد)',
  'mass-desc': 'جرم اتمی (زیاد به کم)',
  'name-fa-asc': 'الفبای فارسی',
};

export default function SearchScreen() {
  const router = useRouter();
  const theme = useTheme();

  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilterState>(() => filterStateStore.getFilters());
  const [sort, setSort] = useState<SortOption>(() => filterStateStore.getSort());
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Subscribe to filter state changes (e.g. from dedicated /filter route)
  useEffect(() => {
    const unsubscribe = filterStateStore.subscribe(() => {
      setFilters(filterStateStore.getFilters());
      setSort(filterStateStore.getSort());
    });
    return unsubscribe;
  }, []);

  // Load recent searches on mount
  useEffect(() => {
    recentSearchesStorage.getRecentSearches().then(setRecentSearches);
  }, []);

  // Compute active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.category !== 'all') count++;
    if (filters.period !== 'all') count++;
    if (filters.group !== 'all') count++;
    if (filters.block !== 'all') count++;
    if (filters.state !== 'all') count++;
    if (filters.metalType !== 'all') count++;
    if (sort !== 'atomic-asc') count++;
    return count;
  }, [filters, sort]);

  // Execute instantaneous local search
  const results = useMemo(() => {
    return searchAndFilterElements(query, filters, sort);
  }, [query, filters, sort]);

  const handleSelectQuery = async (selectedQuery: string) => {
    setQuery(selectedQuery);
    const updated = await recentSearchesStorage.addSearch(selectedQuery);
    setRecentSearches(updated);
  };

  const handleClearRecent = async () => {
    await recentSearchesStorage.clearAll();
    setRecentSearches([]);
  };

  const handleRemoveRecentItem = async (item: string) => {
    const updated = await recentSearchesStorage.removeSearch(item);
    setRecentSearches(updated);
  };

  const handleElementPress = async (atomicNumber: number) => {
    if (query.trim()) {
      const updated = await recentSearchesStorage.addSearch(query.trim());
      setRecentSearches(updated);
    }
    router.push(`/element/${atomicNumber}` as any);
  };

  const handleResetFilters = useCallback(() => {
    filterStateStore.reset();
  }, []);

  const handleOpenFilters = () => {
    router.push('/filter' as any);
  };

  // Individual filter clear handlers
  const handleClearCategory = () => {
    const updated = { ...filters, category: 'all' as const };
    filterStateStore.setFilters(updated);
  };
  const handleClearPeriod = () => {
    const updated = { ...filters, period: 'all' as const };
    filterStateStore.setFilters(updated);
  };
  const handleClearGroup = () => {
    const updated = { ...filters, group: 'all' as const };
    filterStateStore.setFilters(updated);
  };
  const handleClearBlock = () => {
    const updated = { ...filters, block: 'all' as const };
    filterStateStore.setFilters(updated);
  };
  const handleClearState = () => {
    const updated = { ...filters, state: 'all' as const };
    filterStateStore.setFilters(updated);
  };
  const handleClearMetalType = () => {
    const updated = { ...filters, metalType: 'all' as const };
    filterStateStore.setFilters(updated);
  };
  const handleClearSort = () => {
    filterStateStore.setSort('atomic-asc');
  };

  return (
    <ScreenContainer scrollable={false} contentContainerStyle={styles.containerPadding}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        {/* Top App Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={[
              styles.backBtn,
              {
                backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.lightGreen,
                borderColor: theme.isDark ? theme.colors.border : `${theme.colors.scientificGreen}25`,
              },
            ]}
            onPress={() => router.back()}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel="بازگشت به جدول تناوبی"
          >
            <Ionicons name="arrow-forward" size={18} color={theme.colors.forestGreen} />
            <Text
              style={[
                styles.backText,
                {
                  color: theme.colors.forestGreen,
                  fontFamily: theme.fontFamily.persianSemiBold,
                },
              ]}
            >
              جدول
            </Text>
          </TouchableOpacity>

          <Text
            style={[
              styles.screenTitle,
              {
                color: theme.colors.primaryText,
                fontFamily: theme.fontFamily.persianBold,
              },
            ]}
          >
            جستجوی پیشرفته عناصر
          </Text>

          {/* Filter Action Button */}
          <TouchableOpacity
            style={[
              styles.filterBtn,
              {
                backgroundColor: activeFiltersCount > 0
                  ? theme.colors.scientificGreen
                  : theme.isDark ? theme.colors.surfaceElevated : theme.colors.card,
                borderColor: activeFiltersCount > 0 ? theme.colors.scientificGreen : theme.colors.cardBorder,
              },
            ]}
            onPress={handleOpenFilters}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel={`فیلترها، ${activeFiltersCount} فیلتر فعال`}
          >
            <Ionicons
              name="options-outline"
              size={17}
              color={activeFiltersCount > 0 ? '#FFFFFF' : theme.colors.scientificGreen}
            />
            <Text
              style={[
                styles.filterBtnText,
                {
                  color: activeFiltersCount > 0 ? '#FFFFFF' : theme.colors.primaryText,
                  fontFamily: theme.fontFamily.persianMedium,
                },
              ]}
            >
              فیلترها
            </Text>
            {activeFiltersCount > 0 ? (
              <View style={styles.filterBadge}>
                <Text style={styles.filterBadgeText}>
                  {toPersianDigits(activeFiltersCount)}
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>

        {/* Search Field */}
        <View style={styles.searchRow}>
          <SearchField
            value={query}
            onChangeText={setQuery}
            placeholder="نام فارسی، نماد (Fe, Au)، عدد اتمی یا نام انگلیسی..."
            autoFocus={true}
          />
        </View>

        {/* Active Filters Pill Strip (if any active) */}
        {activeFiltersCount > 0 ? (
          <View style={styles.activeFiltersStrip}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.activeFiltersScroll}
            >
              {filters.category !== 'all' ? (
                <View
                  style={[
                    styles.activePill,
                    {
                      backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}25` : theme.colors.lightGreen,
                      borderColor: theme.colors.scientificGreen,
                    },
                  ]}
                >
                  <Text style={[styles.activePillText, { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianMedium }]}>
                    خانواده: {ELEMENT_CATEGORIES[filters.category]?.nameFa || filters.category}
                  </Text>
                  <TouchableOpacity onPress={handleClearCategory} hitSlop={theme.interactive.hitSlopSm}>
                    <Ionicons name="close-circle" size={14} color={theme.colors.scientificGreen} />
                  </TouchableOpacity>
                </View>
              ) : null}

              {filters.period !== 'all' ? (
                <View
                  style={[
                    styles.activePill,
                    {
                      backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}25` : theme.colors.lightGreen,
                      borderColor: theme.colors.scientificGreen,
                    },
                  ]}
                >
                  <Text style={[styles.activePillText, { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianMedium }]}>
                    دوره: {toPersianDigits(filters.period)}
                  </Text>
                  <TouchableOpacity onPress={handleClearPeriod} hitSlop={theme.interactive.hitSlopSm}>
                    <Ionicons name="close-circle" size={14} color={theme.colors.scientificGreen} />
                  </TouchableOpacity>
                </View>
              ) : null}

              {filters.group !== 'all' ? (
                <View
                  style={[
                    styles.activePill,
                    {
                      backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}25` : theme.colors.lightGreen,
                      borderColor: theme.colors.scientificGreen,
                    },
                  ]}
                >
                  <Text style={[styles.activePillText, { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianMedium }]}>
                    گروه: {toPersianDigits(filters.group)}
                  </Text>
                  <TouchableOpacity onPress={handleClearGroup} hitSlop={theme.interactive.hitSlopSm}>
                    <Ionicons name="close-circle" size={14} color={theme.colors.scientificGreen} />
                  </TouchableOpacity>
                </View>
              ) : null}

              {filters.block !== 'all' ? (
                <View
                  style={[
                    styles.activePill,
                    {
                      backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}25` : theme.colors.lightGreen,
                      borderColor: theme.colors.scientificGreen,
                    },
                  ]}
                >
                  <Text style={[styles.activePillText, { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianMedium }]}>
                    بلوک: {filters.block}
                  </Text>
                  <TouchableOpacity onPress={handleClearBlock} hitSlop={theme.interactive.hitSlopSm}>
                    <Ionicons name="close-circle" size={14} color={theme.colors.scientificGreen} />
                  </TouchableOpacity>
                </View>
              ) : null}

              {filters.state !== 'all' ? (
                <View
                  style={[
                    styles.activePill,
                    {
                      backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}25` : theme.colors.lightGreen,
                      borderColor: theme.colors.scientificGreen,
                    },
                  ]}
                >
                  <Text style={[styles.activePillText, { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianMedium }]}>
                    حالت: {STATE_NAMES[filters.state] || filters.state}
                  </Text>
                  <TouchableOpacity onPress={handleClearState} hitSlop={theme.interactive.hitSlopSm}>
                    <Ionicons name="close-circle" size={14} color={theme.colors.scientificGreen} />
                  </TouchableOpacity>
                </View>
              ) : null}

              {filters.metalType !== 'all' ? (
                <View
                  style={[
                    styles.activePill,
                    {
                      backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}25` : theme.colors.lightGreen,
                      borderColor: theme.colors.scientificGreen,
                    },
                  ]}
                >
                  <Text style={[styles.activePillText, { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianMedium }]}>
                    طبقه‌بندی: {METAL_NAMES[filters.metalType] || filters.metalType}
                  </Text>
                  <TouchableOpacity onPress={handleClearMetalType} hitSlop={theme.interactive.hitSlopSm}>
                    <Ionicons name="close-circle" size={14} color={theme.colors.scientificGreen} />
                  </TouchableOpacity>
                </View>
              ) : null}

              {sort !== 'atomic-asc' ? (
                <View
                  style={[
                    styles.activePill,
                    {
                      backgroundColor: theme.isDark ? `${theme.colors.goldenAccent}25` : '#FEF6E9',
                      borderColor: theme.colors.goldenAccent,
                    },
                  ]}
                >
                  <Text style={[styles.activePillText, { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianMedium }]}>
                    ترتیب: {SORT_LABELS[sort]}
                  </Text>
                  <TouchableOpacity onPress={handleClearSort} hitSlop={theme.interactive.hitSlopSm}>
                    <Ionicons name="close-circle" size={14} color={theme.colors.goldenAccent} />
                  </TouchableOpacity>
                </View>
              ) : null}

              <TouchableOpacity
                onPress={handleResetFilters}
                style={styles.clearAllFiltersBtn}
                hitSlop={theme.interactive.hitSlopSm}
              >
                <Text
                  style={[
                    styles.clearAllFiltersText,
                    { color: theme.colors.coral, fontFamily: theme.fontFamily.persianMedium },
                  ]}
                >
                  حذف همه
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        ) : null}

        {/* Suggestion & Recent Searches Container (shown when search query is empty) */}
        {!query.trim() ? (
          <View
            style={[
              styles.suggestionsCard,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.cardBorder,
              },
            ]}
          >
            {/* Quick Popular Suggestions */}
            <View style={styles.sectionWrap}>
              <View style={styles.sectionLabelRow}>
                <Ionicons name="flash-outline" size={13} color={theme.colors.goldenAccent} />
                <Text
                  style={[
                    styles.sectionHeadingText,
                    {
                      color: theme.colors.primaryText,
                      fontFamily: theme.fontFamily.persianSemiBold,
                    },
                  ]}
                >
                  پیشنهادهای سریع:
                </Text>
              </View>
              <View style={styles.chipsFlow}>
                {POPULAR_SUGGESTIONS.map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.suggestionChip,
                      {
                        backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.surfaceMuted,
                        borderColor: theme.colors.cardBorder,
                      },
                    ]}
                    onPress={() => handleSelectQuery(item)}
                    activeOpacity={theme.interactive.activeOpacity}
                  >
                    <Text
                      style={[
                        styles.suggestionChipText,
                        {
                          color: theme.colors.primaryText,
                          fontFamily: theme.fontFamily.persianMedium,
                        },
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Recent Searches */}
            {recentSearches.length > 0 ? (
              <View
                style={[
                  styles.recentWrap,
                  { borderTopColor: theme.colors.separator },
                ]}
              >
                <View style={styles.recentHeaderRow}>
                  <View style={styles.sectionLabelRow}>
                    <Ionicons name="time-outline" size={13} color={theme.colors.secondaryText} />
                    <Text
                      style={[
                        styles.sectionHeadingText,
                        {
                          color: theme.colors.secondaryText,
                          fontFamily: theme.fontFamily.persianMedium,
                        },
                      ]}
                    >
                      جستجوهای اخیر:
                    </Text>
                  </View>
                  <TouchableOpacity onPress={handleClearRecent} hitSlop={theme.interactive.hitSlopSm}>
                    <Text
                      style={[
                        styles.clearHistoryText,
                        {
                          color: theme.colors.coral,
                          fontFamily: theme.fontFamily.persianRegular,
                        },
                      ]}
                    >
                      پاک‌کردن تاریخچه
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.chipsFlow}>
                  {recentSearches.map((item) => (
                    <View
                      key={item}
                      style={[
                        styles.recentChip,
                        {
                          backgroundColor: theme.isDark ? theme.colors.surfaceElevated : '#F3F7F5',
                          borderColor: theme.colors.cardBorder,
                        },
                      ]}
                    >
                      <TouchableOpacity
                        style={styles.recentChipBtn}
                        onPress={() => handleSelectQuery(item)}
                      >
                        <Text
                          style={[
                            styles.recentChipText,
                            {
                              color: theme.colors.primaryText,
                              fontFamily: theme.fontFamily.persianRegular,
                            },
                          ]}
                        >
                          {item}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleRemoveRecentItem(item)}
                        style={styles.recentChipRemove}
                        hitSlop={theme.interactive.hitSlopSm}
                      >
                        <Ionicons name="close" size={12} color={theme.colors.secondaryText} />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>
            ) : null}
          </View>
        ) : null}

        {/* Results Counter Row */}
        <View style={styles.resultsCounterRow}>
          <Text
            style={[
              styles.counterText,
              {
                color: theme.colors.secondaryText,
                fontFamily: theme.fontFamily.persianMedium,
              },
            ]}
          >
            {results.length > 0
              ? `${toPersianDigits(results.length)} عنصر یافت شد`
              : 'نتیجه‌ای یافت نشد'}
          </Text>
        </View>

        {/* Results List */}
        <FlatList
          data={results}
          keyExtractor={(item) => String(item.element.identity.atomicNumber)}
          renderItem={({ item }) => (
            <SearchResultCard
              item={item}
              onPress={() => handleElementPress(item.element.identity.atomicNumber)}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            <EmptyState
              title="عنصری یافت نشد"
              message="هیچ عنصری با معیارهای انتخابی تطابق ندارد. لطفاً املای عبارت یا فیلترهای فعال را بررسی فرمایید."
              actionTitle={activeFiltersCount > 0 ? 'حذف فیلترها' : undefined}
              onAction={activeFiltersCount > 0 ? handleResetFilters : undefined}
            />
          }
        />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  containerPadding: {
    padding: 16,
    paddingBottom: 24,
  },
  keyboardView: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
    fontSize: 12,
  },
  screenTitle: {
    fontSize: 15,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    gap: 5,
  },
  filterBtnText: {
    fontSize: 12,
  },
  filterBadge: {
    backgroundColor: '#D96C64',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 10,
    minWidth: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterBadgeText: {
    color: '#FFFFFF',
    fontSize: 9.5,
    fontWeight: 'bold',
  },
  searchRow: {
    marginBottom: 6,
  },
  activeFiltersStrip: {
    marginBottom: 8,
  },
  activeFiltersScroll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 2,
  },
  activePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  activePillText: {
    fontSize: 10.5,
  },
  clearAllFiltersBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  clearAllFiltersText: {
    fontSize: 10.5,
  },
  suggestionsCard: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    gap: 10,
  },
  sectionWrap: {
    gap: 6,
  },
  sectionLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  sectionHeadingText: {
    fontSize: 11.5,
  },
  chipsFlow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  suggestionChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  suggestionChipText: {
    fontSize: 11,
  },
  recentWrap: {
    borderTopWidth: 1,
    paddingTop: 8,
    gap: 6,
  },
  recentHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clearHistoryText: {
    fontSize: 10.5,
  },
  recentChip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 4,
  },
  recentChipBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  recentChipText: {
    fontSize: 11,
  },
  recentChipRemove: {
    padding: 4,
  },
  resultsCounterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginBottom: 6,
  },
  counterText: {
    fontSize: 12,
  },
  listContent: {
    paddingBottom: 24,
  },
});
