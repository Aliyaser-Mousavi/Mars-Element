import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContainer, EmptyState } from '../components';
import { lightAppTheme } from '../theme';
import { elementRepository } from '../services/elementService';
import { favoritesStorage } from '../services/favoritesService';
import { historyStorage } from '../services/historyService';
import { ChemicalElement, ElementCategory } from '../types/element';
import { ELEMENT_CATEGORIES } from '../constants/element-categories';
import { SearchResultCard } from '../features/search/SearchResultCard';
import { ComparisonTable } from '../features/personal';
import { toPersianDigits } from '../utils/rtl';

type StudyTab = 'favorites' | 'history' | 'compare';

export default function PersonalStudyScreen() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<StudyTab>('favorites');

  // Favorites & History states
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [historyIds, setHistoryIds] = useState<number[]>([]);
  const [selectedFamily, setSelectedFamily] = useState<ElementCategory | 'all'>('all');

  // Element Comparison state (up to 3 elements)
  const [compareIds, setCompareIds] = useState<number[]>([1, 6, 8]); // Default: H, C, O

  // Load data on mount & tab changes
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
          style={styles.backBtn}
          onPress={() => router.replace('/')}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-forward-outline" size={18} color={lightAppTheme.colors.forestGreen} />
          <Text style={styles.backText}>جدول تناوبی</Text>
        </TouchableOpacity>

        <Text style={styles.screenTitle}>مطالعه و مقایسه عناصر</Text>
      </View>

      {/* Tab Segment Controls */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'favorites' && styles.tabBtnActive]}
          onPress={() => setActiveTab('favorites')}
        >
          <Ionicons
            name="heart"
            size={16}
            color={activeTab === 'favorites' ? '#FFFFFF' : lightAppTheme.colors.forestGreen}
          />
          <Text style={[styles.tabBtnText, activeTab === 'favorites' && styles.tabBtnTextActive]}>
            علاقه‌مندی‌ها ({toPersianDigits(favoriteIds.length)})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'history' && styles.tabBtnActive]}
          onPress={() => setActiveTab('history')}
        >
          <Ionicons
            name="time-outline"
            size={16}
            color={activeTab === 'history' ? '#FFFFFF' : lightAppTheme.colors.forestGreen}
          />
          <Text style={[styles.tabBtnText, activeTab === 'history' && styles.tabBtnTextActive]}>
            تاریخچه ({toPersianDigits(historyIds.length)})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'compare' && styles.tabBtnActive]}
          onPress={() => setActiveTab('compare')}
        >
          <Ionicons
            name="git-compare-outline"
            size={16}
            color={activeTab === 'compare' ? '#FFFFFF' : lightAppTheme.colors.forestGreen}
          />
          <Text style={[styles.tabBtnText, activeTab === 'compare' && styles.tabBtnTextActive]}>
            مقایسه عناصر
          </Text>
        </TouchableOpacity>
      </View>

      {/* TAB 1: Favorites */}
      {activeTab === 'favorites' && (
        <View style={styles.tabContent}>
          {/* Family filter chips if favorites exist */}
          {favoriteIds.length > 0 && (
            <View style={styles.familyFilterScroll}>
              <TouchableOpacity
                style={[styles.familyChip, selectedFamily === 'all' && styles.familyChipActive]}
                onPress={() => setSelectedFamily('all')}
              >
                <Text style={[styles.familyChipText, selectedFamily === 'all' && styles.familyChipTextActive]}>
                  همه
                </Text>
              </TouchableOpacity>
              {Object.entries(ELEMENT_CATEGORIES).map(([catKey, meta]) => {
                const active = selectedFamily === catKey;
                return (
                  <TouchableOpacity
                    key={catKey}
                    style={[styles.familyChip, active && styles.familyChipActive]}
                    onPress={() => setSelectedFamily(catKey as ElementCategory)}
                  >
                    <Text style={[styles.familyChipText, active && styles.familyChipTextActive]}>
                      {meta.nameFa}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}

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
            ListEmptyComponent={
              <EmptyState
                title="علاقه‌مندی ثبت نشده است"
                message="برای ذخیره عناصر در این بخش، در صفحه هر عنصر روی آیکون قلب ضربه بزنید."
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
              <Text style={styles.historyCountText}>
                {toPersianDigits(historyIds.length)} عنصر اخیراً مشاهده‌شده
              </Text>
              <TouchableOpacity onPress={handleClearHistory} style={styles.clearBtn}>
                <Ionicons name="trash-outline" size={14} color={lightAppTheme.colors.coral} />
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
            ListEmptyComponent={
              <EmptyState
                title="تاریخچه‌ای وجود ندارد"
                message="عناصری که در برنامه مشاهده می‌کنید به صورت خودکار در این بخش ذخیره می‌شوند."
              />
            }
          />
        </View>
      )}

      {/* TAB 3: Element Comparison */}
      {activeTab === 'compare' && (
        <View style={styles.compareContainer}>
          <Text style={styles.compareDesc}>
            مقایسه جدول خواص فیزیکی، شیمیایی و آرایش الکترونی (حداکثر ۳ عنصر):
          </Text>

          {/* Quick Slot Selector Row */}
          <View style={styles.slotRow}>
            {comparedElements.map((el) => (
              <View key={`slot-${el.identity.atomicNumber}`} style={styles.slotChip}>
                <Text style={styles.slotText}>
                  {el.identity.nameFa} ({el.identity.symbol})
                </Text>
                <TouchableOpacity onPress={() => handleRemoveCompareElement(el.identity.atomicNumber)}>
                  <Ionicons name="close-circle" size={16} color={lightAppTheme.colors.coral} />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* Quick Add Suggestions if slots remain */}
          {compareIds.length < 3 && (
            <View style={styles.quickAddRow}>
              <Text style={styles.quickAddLabel}>افزودن سریع:</Text>
              {[1, 6, 8, 26, 79, 92].map((num) => {
                if (compareIds.includes(num)) return null;
                const quickEl = elementRepository.getByAtomicNumber(num);
                if (!quickEl) return null;
                return (
                  <TouchableOpacity
                    key={`quick-${num}`}
                    style={styles.quickAddBtn}
                    onPress={() => handleAddCompareQuick(num)}
                  >
                    <Text style={styles.quickAddText}>+ {quickEl.identity.symbol}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}

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
    marginBottom: 10,
    paddingBottom: 6,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  backText: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: lightAppTheme.colors.forestGreen,
  },
  screenTitle: {
    fontSize: 14.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  tabsRow: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: lightAppTheme.borderRadius.sm,
    padding: 3,
    marginBottom: 12,
    gap: 4,
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    borderRadius: 6,
    gap: 5,
  },
  tabBtnActive: {
    backgroundColor: lightAppTheme.colors.scientificGreen,
  },
  tabBtnText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.forestGreen,
  },
  tabBtnTextActive: {
    color: '#FFFFFF',
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  tabContent: {
    flex: 1,
  },
  familyFilterScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 10,
  },
  familyChip: {
    backgroundColor: '#F0F4F2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  familyChipActive: {
    backgroundColor: lightAppTheme.colors.scientificGreen,
  },
  familyChipText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
  },
  familyChipTextActive: {
    color: '#FFFFFF',
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  historyHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  historyCountText: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
  },
  clearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  clearBtnText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.coral,
  },
  compareContainer: {
    paddingBottom: 20,
  },
  compareDesc: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    marginBottom: 8,
  },
  slotRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },
  slotChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightAppTheme.colors.surface,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    gap: 6,
  },
  slotText: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  quickAddRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  quickAddLabel: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.secondaryText,
  },
  quickAddBtn: {
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  quickAddText: {
    fontSize: 11,
    fontFamily: 'System',
    fontWeight: 'bold',
    color: lightAppTheme.colors.forestGreen,
  },
});

