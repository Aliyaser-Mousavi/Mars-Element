import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { lightAppTheme } from '../../theme';
import { SearchFilterState, SortOption, MetalClassification } from '../../services/searchService';
import { ElementCategory, ElementBlock, StandardState } from '../../types/element';
import { ELEMENT_CATEGORIES } from '../../constants/element-categories';
import { toPersianDigits } from '../../utils/rtl';

interface FilterModalProps {
  visible: boolean;
  filters: SearchFilterState;
  sort: SortOption;
  onChangeFilters: (filters: SearchFilterState) => void;
  onChangeSort: (sort: SortOption) => void;
  onReset: () => void;
  onClose: () => void;
}

const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: 'atomic-asc', label: 'شماره اتمی (صعودی)' },
  { id: 'atomic-desc', label: 'شماره اتمی (نزولی)' },
  { id: 'mass-asc', label: 'جرم اتمی (کم به زیاد)' },
  { id: 'mass-desc', label: 'جرم اتمی (زیاد به کم)' },
  { id: 'name-fa-asc', label: 'الفبای فارسی (الف تا ی)' },
];

const PERIODS = [1, 2, 3, 4, 5, 6, 7];
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
  onChangeFilters,
  onChangeSort,
  onReset,
  onClose,
}) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Ionicons name="close" size={22} color={lightAppTheme.colors.primaryText} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>فیلترهای پیشرفته و مرتب‌سازی</Text>
          <TouchableOpacity onPress={onReset}>
            <Text style={styles.resetText}>حذف فیلترها</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollBody} showsVerticalScrollIndicator={false}>
          {/* 1. Sort Options */}
          <Text style={styles.sectionTitle}>ترتیب نمایش</Text>
          <View style={styles.chipsWrap}>
            {SORT_OPTIONS.map((opt) => {
              const active = sort === opt.id;
              return (
                <TouchableOpacity
                  key={opt.id}
                  style={[styles.chip, active && styles.chipActive]}
                  onPress={() => onChangeSort(opt.id)}
                >
                  <Text style={[styles.chipText, active && styles.chipTextActive]}>{opt.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* 2. Metal Type */}
          <Text style={styles.sectionTitle}>دسته‌بندی فلز / شبه‌فلز / نافلز</Text>
          <View style={styles.chipsWrap}>
            <TouchableOpacity
              style={[styles.chip, filters.metalType === 'all' && styles.chipActive]}
              onPress={() => onChangeFilters({ ...filters, metalType: 'all' })}
            >
              <Text style={[styles.chipText, filters.metalType === 'all' && styles.chipTextActive]}>همه</Text>
            </TouchableOpacity>
            {METAL_TYPES.map((type) => {
              const active = filters.metalType === type.id;
              return (
                <TouchableOpacity
                  key={type.id}
                  style={[styles.chip, active && styles.chipActive]}
                  onPress={() => onChangeFilters({ ...filters, metalType: type.id })}
                >
                  <Text style={[styles.chipText, active && styles.chipTextActive]}>{type.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* 3. Physical State */}
          <Text style={styles.sectionTitle}>حالت در شرایط استاندارد</Text>
          <View style={styles.chipsWrap}>
            <TouchableOpacity
              style={[styles.chip, filters.state === 'all' && styles.chipActive]}
              onPress={() => onChangeFilters({ ...filters, state: 'all' })}
            >
              <Text style={[styles.chipText, filters.state === 'all' && styles.chipTextActive]}>همه</Text>
            </TouchableOpacity>
            {STATES.map((st) => {
              const active = filters.state === st.id;
              return (
                <TouchableOpacity
                  key={st.id}
                  style={[styles.chip, active && styles.chipActive]}
                  onPress={() => onChangeFilters({ ...filters, state: st.id })}
                >
                  <Text style={[styles.chipText, active && styles.chipTextActive]}>{st.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* 4. Element Block */}
          <Text style={styles.sectionTitle}>بلوک الکترونی</Text>
          <View style={styles.chipsWrap}>
            <TouchableOpacity
              style={[styles.chip, filters.block === 'all' && styles.chipActive]}
              onPress={() => onChangeFilters({ ...filters, block: 'all' })}
            >
              <Text style={[styles.chipText, filters.block === 'all' && styles.chipTextActive]}>همه</Text>
            </TouchableOpacity>
            {BLOCKS.map((blk) => {
              const active = filters.block === blk;
              return (
                <TouchableOpacity
                  key={blk}
                  style={[styles.chip, active && styles.chipActive]}
                  onPress={() => onChangeFilters({ ...filters, block: blk })}
                >
                  <Text style={[styles.chipText, styles.monoText, active && styles.chipTextActive]}>
                    بلوک {blk}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* 5. Period */}
          <Text style={styles.sectionTitle}>دوره (تناوب)</Text>
          <View style={styles.chipsWrap}>
            <TouchableOpacity
              style={[styles.chip, filters.period === 'all' && styles.chipActive]}
              onPress={() => onChangeFilters({ ...filters, period: 'all' })}
            >
              <Text style={[styles.chipText, filters.period === 'all' && styles.chipTextActive]}>همه</Text>
            </TouchableOpacity>
            {PERIODS.map((p) => {
              const active = filters.period === p;
              return (
                <TouchableOpacity
                  key={p}
                  style={[styles.chip, active && styles.chipActive]}
                  onPress={() => onChangeFilters({ ...filters, period: p })}
                >
                  <Text style={[styles.chipText, active && styles.chipTextActive]}>
                    دوره {toPersianDigits(p)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* 6. Family Categories */}
          <Text style={styles.sectionTitle}>خانواده عنصر</Text>
          <View style={styles.chipsWrap}>
            <TouchableOpacity
              style={[styles.chip, filters.category === 'all' && styles.chipActive]}
              onPress={() => onChangeFilters({ ...filters, category: 'all' })}
            >
              <Text style={[styles.chipText, filters.category === 'all' && styles.chipTextActive]}>همه خانواده‌ها</Text>
            </TouchableOpacity>
            {Object.entries(ELEMENT_CATEGORIES).map(([catKey, cat]) => {
              const active = filters.category === catKey;
              return (
                <TouchableOpacity
                  key={catKey}
                  style={[styles.chip, active && styles.chipActive]}
                  onPress={() => onChangeFilters({ ...filters, category: catKey as ElementCategory })}
                >
                  <Text style={[styles.chipText, active && styles.chipTextActive]}>{cat.nameFa}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={{ height: 30 }} />
        </ScrollView>

        {/* Apply CTA */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.applyBtn} onPress={onClose}>
            <Text style={styles.applyBtnText}>مشاهده نتایج</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    zIndex: 999,
  },
  container: {
    backgroundColor: lightAppTheme.colors.surface,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '85%',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: lightAppTheme.colors.border,
  },
  closeBtn: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  resetText: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.coral,
  },
  scrollBody: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
    marginTop: 16,
    marginBottom: 8,
  },
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#F0F4F2',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E9E5',
  },
  chipActive: {
    backgroundColor: lightAppTheme.colors.scientificGreen,
    borderColor: lightAppTheme.colors.scientificGreen,
  },
  chipText: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
  },
  chipTextActive: {
    color: '#FFFFFF',
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  monoText: {
    fontFamily: 'System',
  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  applyBtn: {
    backgroundColor: lightAppTheme.colors.scientificGreen,
    paddingVertical: 12,
    borderRadius: lightAppTheme.borderRadius.md,
    alignItems: 'center',
  },
  applyBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
});

