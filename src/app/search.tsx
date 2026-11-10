import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContainer, SearchField, EmptyState } from '../components';
import { lightAppTheme } from '../theme';
import {
  searchAndFilterElements,
  INITIAL_FILTERS,
  SearchFilterState,
  SortOption,
} from '../services/searchService';
import { recentSearchesStorage } from '../services/recentSearchesService';
import { SearchResultCard } from '../features/search/SearchResultCard';
import { FilterModal } from '../features/search/FilterModal';
import { toPersianDigits } from '../utils/rtl';

const POPULAR_SUGGESTIONS = ['طلا', 'آهن', 'اکسیژن', 'اورانیوم', 'Fe', 'Au', '79', 'هیدروژن', 'کربن'];

export default function SearchScreen() {
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilterState>(INITIAL_FILTERS);
  const [sort, setSort] = useState<SortOption>('atomic-asc');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

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

  const handleElementPress = async (atomicNumber: number, elementName: string) => {
    if (query.trim()) {
      const updated = await recentSearchesStorage.addSearch(query.trim());
      setRecentSearches(updated);
    }
    router.push(`/element/${atomicNumber}` as any);
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setSort('atomic-asc');
  };

  return (
    <ScreenContainer scrollable={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        {/* Top App Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-forward-outline" size={20} color={lightAppTheme.colors.forestGreen} />
            <Text style={styles.backText}>جدول تناوبی</Text>
          </TouchableOpacity>

          <Text style={styles.screenTitle}>جستجوی هوشمند عناصر</Text>

          <TouchableOpacity
            style={[styles.filterTrigger, activeFiltersCount > 0 && styles.filterTriggerActive]}
            onPress={() => setFilterModalVisible(true)}
            activeOpacity={0.7}
          >
            <Ionicons
              name="options-outline"
              size={18}
              color={activeFiltersCount > 0 ? '#FFFFFF' : lightAppTheme.colors.forestGreen}
            />
            {activeFiltersCount > 0 && (
              <View style={styles.filterBadge}>
                <Text style={styles.filterBadgeText}>{toPersianDigits(activeFiltersCount)}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Search Field */}
        <View style={styles.searchRow}>
          <SearchField
            value={query}
            onChangeText={setQuery}
            placeholder="نام، نماد شیمیایی (Fe, Au)، عدد اتمی یا نام انگلیسی..."
            autoFocus
          />
        </View>

        {/* Suggestion & Recent Searches Bar (when query is short or empty) */}
        {!query.trim() && (
          <View style={styles.suggestionsContainer}>
            {/* Quick popular tags */}
            <View style={styles.tagsSection}>
              <Text style={styles.subTitle}>پیشنهادهای سریع:</Text>
              <View style={styles.tagsRow}>
                {POPULAR_SUGGESTIONS.map((tag) => (
                  <TouchableOpacity
                    key={tag}
                    style={styles.tagChip}
                    onPress={() => handleSelectQuery(tag)}
                  >
                    <Text style={styles.tagText}>{tag}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <View style={styles.recentSection}>
                <View style={styles.recentHeader}>
                  <Text style={styles.subTitle}>جستجوهای اخیر:</Text>
                  <TouchableOpacity onPress={handleClearRecent}>
                    <Text style={styles.clearRecentText}>پاک‌کردن همه</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.recentList}>
                  {recentSearches.map((item) => (
                    <View key={item} style={styles.recentItem}>
                      <TouchableOpacity
                        style={styles.recentItemBtn}
                        onPress={() => handleSelectQuery(item)}
                      >
                        <Ionicons name="time-outline" size={15} color={lightAppTheme.colors.secondaryText} />
                        <Text style={styles.recentItemText}>{item}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleRemoveRecentItem(item)}
                        style={styles.recentItemRemove}
                      >
                        <Ionicons name="close" size={14} color="#A0AEC0" />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        )}

        {/* Results Counter / Filter Indicator */}
        <View style={styles.resultsCounterRow}>
          <Text style={styles.counterText}>
            {results.length > 0
              ? `${toPersianDigits(results.length)} عنصر یافت شد`
              : 'نتیجه‌ای یافت نشد'}
          </Text>
          {activeFiltersCount > 0 && (
            <TouchableOpacity onPress={handleResetFilters} style={styles.activeFilterTag}>
              <Text style={styles.activeFilterTagText}>
                {toPersianDigits(activeFiltersCount)} فیلتر فعال (حذف)
              </Text>
              <Ionicons name="close-circle" size={14} color={lightAppTheme.colors.coral} />
            </TouchableOpacity>
          )}
        </View>

        {/* Results List */}
        <FlatList
          data={results}
          keyExtractor={(item) => String(item.element.identity.atomicNumber)}
          renderItem={({ item }) => (
            <SearchResultCard
              item={item}
              onPress={() => handleElementPress(item.element.identity.atomicNumber, item.element.identity.nameFa)}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            <EmptyState
              title="عنصری یافت نشد"
              message={`هیچ عنصری با معیارهای انتخابی مطابق نیست. لطفاً املای عبارت یا فیلترهای اعمال‌شده را بررسی کنید.`}
              actionTitle={activeFiltersCount > 0 ? 'حذف فیلترها' : undefined}
              onAction={activeFiltersCount > 0 ? handleResetFilters : undefined}
            />
          }
        />

        {/* Advanced Filters & Sorting Modal */}
        <FilterModal
          visible={filterModalVisible}
          filters={filters}
          sort={sort}
          onChangeFilters={setFilters}
          onChangeSort={setSort}
          onReset={handleResetFilters}
          onClose={() => setFilterModalVisible(false)}
        />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: lightAppTheme.borderRadius.sm,
  },
  backText: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: lightAppTheme.colors.forestGreen,
  },
  screenTitle: {
    fontSize: 15,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  filterTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: lightAppTheme.colors.lightGreen,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
  },
  filterTriggerActive: {
    backgroundColor: lightAppTheme.colors.scientificGreen,
    borderColor: lightAppTheme.colors.scientificGreen,
  },
  filterBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: lightAppTheme.colors.coral,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  searchRow: {
    marginBottom: 8,
  },
  suggestionsContainer: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
  },
  tagsSection: {
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: lightAppTheme.colors.forestGreen,
    marginBottom: 6,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tagChip: {
    backgroundColor: '#F0F4F2',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
  },
  recentSection: {
    borderTopWidth: 1,
    borderTopColor: '#F0F4F2',
    paddingTop: 8,
    marginTop: 4,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clearRecentText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.coral,
  },
  recentList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 6,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingLeft: 4,
  },
  recentItemBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  recentItemText: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.primaryText,
  },
  recentItemRemove: {
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
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.secondaryText,
  },
  activeFilterTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FDF2F2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  activeFilterTagText: {
    fontSize: 10.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.coral,
  },
  listContent: {
    paddingBottom: 20,
  },
});
