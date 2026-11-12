import React, { useMemo } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/theme';
import {
  SearchFilterState,
  SortOption,
  MetalClassification,
  searchAndFilterElements,
} from '@/services/searchService';
import { ElementCategory, ElementBlock, StandardState } from '@/types/element';
import { ELEMENT_CATEGORIES } from '@/constants/element-categories';
import { toPersianDigits } from '@/utils/rtl';

export interface FilterModalProps {
  visible: boolean;
  filters: SearchFilterState;
  sort: SortOption;
  query?: string;
  onChangeFilters: (filters: SearchFilterState) => void;
  onChangeSort: (sort: SortOption) => void;
  onReset: () => void;
  onClose: () => void;
}

const SORT_OPTIONS: { id: SortOption; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { id: 'atomic-asc', label: 'شماره اتمی (صعودی)', icon: 'arrow-up' },
  { id: 'atomic-desc', label: 'شماره اتمی (نزولی)', icon: 'arrow-down' },
  { id: 'mass-asc', label: 'جرم اتمی (کم به زیاد)', icon: 'scale-outline' },
  { id: 'mass-desc', label: 'جرم اتمی (زیاد به کم)', icon: 'scale-outline' },
  { id: 'name-fa-asc', label: 'الفبای فارسی (الف تا ی)', icon: 'text-outline' },
];

const PERIODS = [1, 2, 3, 4, 5, 6, 7];
const GROUPS = Array.from({ length: 18 }, (_, i) => i + 1);
const BLOCKS: ElementBlock[] = ['s', 'p', 'd', 'f'];

const STATES: { id: StandardState; label: string }[] = [
  { id: 'solid', label: 'جامد' },
  { id: 'liquid', label: 'مایع' },
  { id: 'gas', label: 'گاز' },
];

const METAL_TYPES: { id: MetalClassification; label: string }[] = [
  { id: 'metal', label: 'فلزها' },
  { id: 'metalloid', label: 'شبه‌فلزها' },
  { id: 'nonmetal', label: 'نافلزها' },
];

export const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  filters,
  sort,
  query = '',
  onChangeFilters,
  onChangeSort,
  onReset,
  onClose,
}) => {
  const theme = useTheme();

  // Active filter count
  const activeCount = useMemo(() => {
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

  // Real-time matched elements count
  const matchedCount = useMemo(() => {
    return searchAndFilterElements(query, filters, sort).length;
  }, [query, filters, sort]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView
        style={[
          styles.safeArea,
          { backgroundColor: theme.colors.background },
        ]}
      >
        {/* Header Bar */}
        <View
          style={[
            styles.header,
            {
              backgroundColor: theme.colors.surface,
              borderBottomColor: theme.colors.border,
            },
          ]}
        >
          <TouchableOpacity
            onPress={onClose}
            style={[
              styles.iconBtn,
              { backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.lightGreen },
            ]}
            hitSlop={theme.interactive.hitSlopSm}
            accessibilityRole="button"
            accessibilityLabel="بستن فیلترها"
          >
            <Ionicons name="close" size={20} color={theme.colors.primaryText} />
          </TouchableOpacity>

          <View style={styles.headerTitleCol}>
            <Text
              style={[
                styles.headerTitle,
                {
                  color: theme.colors.primaryText,
                  fontFamily: theme.fontFamily.persianBold,
                },
              ]}
            >
              فیلترهای پیشرفته و مرتب‌سازی
            </Text>
            {activeCount > 0 ? (
              <Text
                style={[
                  styles.headerSubtitle,
                  {
                    color: theme.colors.scientificGreen,
                    fontFamily: theme.fontFamily.persianMedium,
                  },
                ]}
              >
                {toPersianDigits(activeCount)} فیلتر فعال است
              </Text>
            ) : null}
          </View>

          {activeCount > 0 ? (
            <TouchableOpacity
              onPress={onReset}
              style={styles.resetBtn}
              hitSlop={theme.interactive.hitSlopSm}
            >
              <Text
                style={[
                  styles.resetText,
                  {
                    color: theme.colors.coral,
                    fontFamily: theme.fontFamily.persianMedium,
                  },
                ]}
              >
                حذف همه
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 40 }} />
          )}
        </View>

        {/* Scrollable Filter Categories */}
        <ScrollView
          style={styles.scrollBody}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* 1. Sort Options */}
          <View style={styles.sectionBlock}>
            <View style={styles.sectionHeaderRow}>
              <Ionicons name="swap-vertical" size={15} color={theme.colors.scientificGreen} />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    color: theme.colors.primaryText,
                    fontFamily: theme.fontFamily.persianSemiBold,
                  },
                ]}
              >
                ترتیب نمایش نتایج
              </Text>
            </View>
            <View style={styles.chipsWrap}>
              {SORT_OPTIONS.map((opt) => {
                const active = sort === opt.id;
                return (
                  <TouchableOpacity
                    key={opt.id}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: active
                          ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                          : theme.colors.card,
                        borderColor: active ? theme.colors.scientificGreen : theme.colors.cardBorder,
                        borderWidth: active ? 1.6 : 1,
                      },
                    ]}
                    onPress={() => onChangeSort(opt.id)}
                    activeOpacity={theme.interactive.activeOpacity}
                  >
                    <Ionicons
                      name={opt.icon}
                      size={13}
                      color={active ? theme.colors.scientificGreen : theme.colors.secondaryText}
                      style={{ marginEnd: 4 }}
                    />
                    <Text
                      style={[
                        styles.chipText,
                        {
                          color: active ? theme.colors.primaryText : theme.colors.secondaryText,
                          fontFamily: active
                            ? theme.fontFamily.persianBold
                            : theme.fontFamily.persianMedium,
                        },
                      ]}
                    >
                      {opt.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* 2. Metal Type */}
          <View style={styles.sectionBlock}>
            <View style={styles.sectionHeaderRow}>
              <Ionicons name="shapes-outline" size={15} color={theme.colors.oceanBlue} />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    color: theme.colors.primaryText,
                    fontFamily: theme.fontFamily.persianSemiBold,
                  },
                ]}
              >
                طبقه‌بندی ساختاری فلزات
              </Text>
            </View>
            <View style={styles.chipsWrap}>
              <TouchableOpacity
                style={[
                  styles.chip,
                  {
                    backgroundColor: filters.metalType === 'all'
                      ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                      : theme.colors.card,
                    borderColor: filters.metalType === 'all' ? theme.colors.scientificGreen : theme.colors.cardBorder,
                    borderWidth: filters.metalType === 'all' ? 1.6 : 1,
                  },
                ]}
                onPress={() => onChangeFilters({ ...filters, metalType: 'all' })}
              >
                <Text
                  style={[
                    styles.chipText,
                    {
                      color: filters.metalType === 'all' ? theme.colors.primaryText : theme.colors.secondaryText,
                      fontFamily: filters.metalType === 'all' ? theme.fontFamily.persianBold : theme.fontFamily.persianMedium,
                    },
                  ]}
                >
                  همه طبقه‌ها
                </Text>
              </TouchableOpacity>
              {METAL_TYPES.map((type) => {
                const active = filters.metalType === type.id;
                return (
                  <TouchableOpacity
                    key={type.id}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: active
                          ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                          : theme.colors.card,
                        borderColor: active ? theme.colors.scientificGreen : theme.colors.cardBorder,
                        borderWidth: active ? 1.6 : 1,
                      },
                    ]}
                    onPress={() => onChangeFilters({ ...filters, metalType: type.id })}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        {
                          color: active ? theme.colors.primaryText : theme.colors.secondaryText,
                          fontFamily: active ? theme.fontFamily.persianBold : theme.fontFamily.persianMedium,
                        },
                      ]}
                    >
                      {type.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* 3. Physical State */}
          <View style={styles.sectionBlock}>
            <View style={styles.sectionHeaderRow}>
              <Ionicons name="water-outline" size={15} color={theme.colors.purple} />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    color: theme.colors.primaryText,
                    fontFamily: theme.fontFamily.persianSemiBold,
                  },
                ]}
              >
                حالت در شرایط استاندارد (STP)
              </Text>
            </View>
            <View style={styles.chipsWrap}>
              <TouchableOpacity
                style={[
                  styles.chip,
                  {
                    backgroundColor: filters.state === 'all'
                      ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                      : theme.colors.card,
                    borderColor: filters.state === 'all' ? theme.colors.scientificGreen : theme.colors.cardBorder,
                    borderWidth: filters.state === 'all' ? 1.6 : 1,
                  },
                ]}
                onPress={() => onChangeFilters({ ...filters, state: 'all' })}
              >
                <Text
                  style={[
                    styles.chipText,
                    {
                      color: filters.state === 'all' ? theme.colors.primaryText : theme.colors.secondaryText,
                      fontFamily: filters.state === 'all' ? theme.fontFamily.persianBold : theme.fontFamily.persianMedium,
                    },
                  ]}
                >
                  همه حالت‌ها
                </Text>
              </TouchableOpacity>
              {STATES.map((st) => {
                const active = filters.state === st.id;
                return (
                  <TouchableOpacity
                    key={st.id}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: active
                          ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                          : theme.colors.card,
                        borderColor: active ? theme.colors.scientificGreen : theme.colors.cardBorder,
                        borderWidth: active ? 1.6 : 1,
                      },
                    ]}
                    onPress={() => onChangeFilters({ ...filters, state: st.id })}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        {
                          color: active ? theme.colors.primaryText : theme.colors.secondaryText,
                          fontFamily: active ? theme.fontFamily.persianBold : theme.fontFamily.persianMedium,
                        },
                      ]}
                    >
                      {st.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* 4. Element Block */}
          <View style={styles.sectionBlock}>
            <View style={styles.sectionHeaderRow}>
              <Ionicons name="grid-outline" size={15} color={theme.colors.goldenAccent} />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    color: theme.colors.primaryText,
                    fontFamily: theme.fontFamily.persianSemiBold,
                  },
                ]}
              >
                بلوک الکترونی (s, p, d, f)
              </Text>
            </View>
            <View style={styles.chipsWrap}>
              <TouchableOpacity
                style={[
                  styles.chip,
                  {
                    backgroundColor: filters.block === 'all'
                      ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                      : theme.colors.card,
                    borderColor: filters.block === 'all' ? theme.colors.scientificGreen : theme.colors.cardBorder,
                    borderWidth: filters.block === 'all' ? 1.6 : 1,
                  },
                ]}
                onPress={() => onChangeFilters({ ...filters, block: 'all' })}
              >
                <Text
                  style={[
                    styles.chipText,
                    {
                      color: filters.block === 'all' ? theme.colors.primaryText : theme.colors.secondaryText,
                      fontFamily: filters.block === 'all' ? theme.fontFamily.persianBold : theme.fontFamily.persianMedium,
                    },
                  ]}
                >
                  همه بلوک‌ها
                </Text>
              </TouchableOpacity>
              {BLOCKS.map((blk) => {
                const active = filters.block === blk;
                return (
                  <TouchableOpacity
                    key={blk}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: active
                          ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                          : theme.colors.card,
                        borderColor: active ? theme.colors.scientificGreen : theme.colors.cardBorder,
                        borderWidth: active ? 1.6 : 1,
                      },
                    ]}
                    onPress={() => onChangeFilters({ ...filters, block: blk })}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        {
                          color: active ? theme.colors.primaryText : theme.colors.secondaryText,
                          fontFamily: theme.fontFamily.latinScientific,
                          fontWeight: active ? '700' : '500',
                        },
                      ]}
                    >
                      بلوک {blk}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* 5. Period (1 to 7) */}
          <View style={styles.sectionBlock}>
            <View style={styles.sectionHeaderRow}>
              <Ionicons name="reorder-four-outline" size={15} color={theme.colors.coral} />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    color: theme.colors.primaryText,
                    fontFamily: theme.fontFamily.persianSemiBold,
                  },
                ]}
              >
                دوره (سطرهای تناوب ۱ تا ۷)
              </Text>
            </View>
            <View style={styles.chipsWrap}>
              <TouchableOpacity
                style={[
                  styles.chip,
                  {
                    backgroundColor: filters.period === 'all'
                      ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                      : theme.colors.card,
                    borderColor: filters.period === 'all' ? theme.colors.scientificGreen : theme.colors.cardBorder,
                    borderWidth: filters.period === 'all' ? 1.6 : 1,
                  },
                ]}
                onPress={() => onChangeFilters({ ...filters, period: 'all' })}
              >
                <Text
                  style={[
                    styles.chipText,
                    {
                      color: filters.period === 'all' ? theme.colors.primaryText : theme.colors.secondaryText,
                      fontFamily: filters.period === 'all' ? theme.fontFamily.persianBold : theme.fontFamily.persianMedium,
                    },
                  ]}
                >
                  همه دوره‌ها
                </Text>
              </TouchableOpacity>
              {PERIODS.map((p) => {
                const active = filters.period === p;
                return (
                  <TouchableOpacity
                    key={p}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: active
                          ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                          : theme.colors.card,
                        borderColor: active ? theme.colors.scientificGreen : theme.colors.cardBorder,
                        borderWidth: active ? 1.6 : 1,
                      },
                    ]}
                    onPress={() => onChangeFilters({ ...filters, period: p })}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        {
                          color: active ? theme.colors.primaryText : theme.colors.secondaryText,
                          fontFamily: active ? theme.fontFamily.persianBold : theme.fontFamily.persianMedium,
                        },
                      ]}
                    >
                      دوره {toPersianDigits(p)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* 6. Group (1 to 18) */}
          <View style={styles.sectionBlock}>
            <View style={styles.sectionHeaderRow}>
              <Ionicons name="apps-outline" size={15} color={theme.colors.scientificGreen} />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    color: theme.colors.primaryText,
                    fontFamily: theme.fontFamily.persianSemiBold,
                  },
                ]}
              >
                گروه شیمیایی (ستون‌های ۱ تا ۱۸)
              </Text>
            </View>
            <View style={styles.chipsWrap}>
              <TouchableOpacity
                style={[
                  styles.chip,
                  {
                    backgroundColor: filters.group === 'all'
                      ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                      : theme.colors.card,
                    borderColor: filters.group === 'all' ? theme.colors.scientificGreen : theme.colors.cardBorder,
                    borderWidth: filters.group === 'all' ? 1.6 : 1,
                  },
                ]}
                onPress={() => onChangeFilters({ ...filters, group: 'all' })}
              >
                <Text
                  style={[
                    styles.chipText,
                    {
                      color: filters.group === 'all' ? theme.colors.primaryText : theme.colors.secondaryText,
                      fontFamily: filters.group === 'all' ? theme.fontFamily.persianBold : theme.fontFamily.persianMedium,
                    },
                  ]}
                >
                  همه گروه‌ها
                </Text>
              </TouchableOpacity>
              {GROUPS.map((g) => {
                const active = filters.group === g;
                return (
                  <TouchableOpacity
                    key={g}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: active
                          ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                          : theme.colors.card,
                        borderColor: active ? theme.colors.scientificGreen : theme.colors.cardBorder,
                        borderWidth: active ? 1.6 : 1,
                      },
                    ]}
                    onPress={() => onChangeFilters({ ...filters, group: g })}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        {
                          color: active ? theme.colors.primaryText : theme.colors.secondaryText,
                          fontFamily: active ? theme.fontFamily.persianBold : theme.fontFamily.persianMedium,
                        },
                      ]}
                    >
                      گروه {toPersianDigits(g)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* 7. Family Categories */}
          <View style={styles.sectionBlock}>
            <View style={styles.sectionHeaderRow}>
              <Ionicons name="color-palette-outline" size={15} color={theme.colors.oceanBlue} />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    color: theme.colors.primaryText,
                    fontFamily: theme.fontFamily.persianSemiBold,
                  },
                ]}
              >
                خانواده‌های عناصر شیمیایی
              </Text>
            </View>
            <View style={styles.chipsWrap}>
              <TouchableOpacity
                style={[
                  styles.chip,
                  {
                    backgroundColor: filters.category === 'all'
                      ? theme.isDark ? `${theme.colors.scientificGreen}30` : theme.colors.lightGreen
                      : theme.colors.card,
                    borderColor: filters.category === 'all' ? theme.colors.scientificGreen : theme.colors.cardBorder,
                    borderWidth: filters.category === 'all' ? 1.6 : 1,
                  },
                ]}
                onPress={() => onChangeFilters({ ...filters, category: 'all' })}
              >
                <Text
                  style={[
                    styles.chipText,
                    {
                      color: filters.category === 'all' ? theme.colors.primaryText : theme.colors.secondaryText,
                      fontFamily: filters.category === 'all' ? theme.fontFamily.persianBold : theme.fontFamily.persianMedium,
                    },
                  ]}
                >
                  همه خانواده‌ها
                </Text>
              </TouchableOpacity>
              {Object.entries(ELEMENT_CATEGORIES).map(([catKey, cat]) => {
                const active = filters.category === catKey;
                return (
                  <TouchableOpacity
                    key={catKey}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: active
                          ? `${cat.color}25`
                          : theme.colors.card,
                        borderColor: active ? cat.color : theme.colors.cardBorder,
                        borderWidth: active ? 1.6 : 1,
                      },
                    ]}
                    onPress={() =>
                      onChangeFilters({ ...filters, category: catKey as ElementCategory })
                    }
                  >
                    <View style={[styles.colorDot, { backgroundColor: cat.color }]} />
                    <Text
                      style={[
                        styles.chipText,
                        {
                          color: active ? theme.colors.primaryText : theme.colors.secondaryText,
                          fontFamily: active
                            ? theme.fontFamily.persianBold
                            : theme.fontFamily.persianMedium,
                        },
                      ]}
                    >
                      {cat.nameFa}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>

        {/* Floating Bottom Apply Button */}
        <View
          style={[
            styles.footerBar,
            {
              backgroundColor: theme.colors.surface,
              borderTopColor: theme.colors.border,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.applyBtn,
              {
                backgroundColor: theme.colors.scientificGreen,
              },
            ]}
            onPress={onClose}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel={`مشاهده ${matchedCount} عنصر مطابق`}
          >
            <Ionicons name="checkmark-circle-outline" size={18} color="#FFFFFF" />
            <Text
              style={[
                styles.applyBtnText,
                { fontFamily: theme.fontFamily.persianBold },
              ]}
            >
              مشاهده {toPersianDigits(matchedCount)} نتیجه
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleCol: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14.5,
  },
  headerSubtitle: {
    fontSize: 11,
    marginTop: 2,
  },
  resetBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  resetText: {
    fontSize: 12,
  },
  scrollBody: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 24,
    gap: 16,
  },
  sectionBlock: {
    gap: 8,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sectionTitle: {
    fontSize: 13,
  },
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  colorDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginEnd: 6,
  },
  chipText: {
    fontSize: 11.5,
  },
  footerBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  applyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 12,
    gap: 8,
  },
  applyBtnText: {
    color: '#FFFFFF',
    fontSize: 14.5,
  },
});
