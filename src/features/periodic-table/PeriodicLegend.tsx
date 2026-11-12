import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ELEMENT_CATEGORIES } from '@/constants/element-categories';
import { useTheme } from '@/theme';
import { ElementCategory } from '@/types';
import { toPersianDigits } from '@/utils/rtl';

export interface PeriodicLegendProps {
  selectedCategory: ElementCategory | null;
  onSelectCategory: (category: ElementCategory | null) => void;
  elementCountsByCategory: Record<string, number>;
}

export const PeriodicLegend: React.FC<PeriodicLegendProps> = ({
  selectedCategory,
  onSelectCategory,
  elementCountsByCategory,
}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {/* Header Row: Title & Optional Clear Filter Action */}
      <View style={styles.headerRow}>
        <View style={styles.headerTitleRow}>
          <Ionicons
            name="color-filter-outline"
            size={14}
            color={theme.colors.scientificGreen}
          />
          <Text
            style={[
              styles.headerTitle,
              {
                color: theme.colors.primaryText,
                fontFamily: theme.fontFamily.persianSemiBold,
              },
            ]}
          >
            خانواده‌های شیمیایی
          </Text>
        </View>

        {selectedCategory ? (
          <TouchableOpacity
            onPress={() => onSelectCategory(null)}
            style={[
              styles.clearBtn,
              {
                backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}20` : theme.colors.lightGreen,
              },
            ]}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel="پاک کردن فیلتر و نمایش همه عناصر"
          >
            <Ionicons
              name="close-circle-outline"
              size={13}
              color={theme.colors.scientificGreen}
            />
            <Text
              style={[
                styles.clearBtnText,
                {
                  color: theme.colors.scientificGreen,
                  fontFamily: theme.fontFamily.persianBold,
                },
              ]}
            >
              نمایش همه ({toPersianDigits(118)})
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Horizontal Scrollable Category Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.scrollList}
      >
        {Object.values(ELEMENT_CATEGORIES).map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = elementCountsByCategory[cat.id] ?? 0;

          return (
            <TouchableOpacity
              key={cat.id}
              onPress={() => onSelectCategory(isSelected ? null : cat.id)}
              style={[
                styles.chip,
                {
                  backgroundColor: isSelected
                    ? `${cat.color}22`
                    : theme.colors.card,
                  borderColor: isSelected ? cat.color : theme.colors.cardBorder,
                  borderWidth: isSelected ? 1.6 : 1,
                  borderRadius: theme.borderRadius.full,
                },
              ]}
              activeOpacity={theme.interactive.activeOpacity}
              accessibilityRole="button"
              accessibilityLabel={`${cat.nameFa}، ${count} عنصر`}
              accessibilityState={{ selected: isSelected }}
            >
              <View style={[styles.dot, { backgroundColor: cat.color }]} />
              <Text
                style={[
                  styles.chipText,
                  {
                    color: isSelected ? theme.colors.primaryText : theme.colors.secondaryText,
                    fontFamily: isSelected
                      ? theme.fontFamily.persianBold
                      : theme.fontFamily.persianMedium,
                  },
                ]}
              >
                {cat.nameFa}
              </Text>
              <View
                style={[
                  styles.countBadge,
                  {
                    backgroundColor: isSelected
                      ? `${cat.color}35`
                      : theme.isDark ? theme.colors.surfaceElevated : theme.colors.surfaceMuted,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.countBadgeText,
                    {
                      color: isSelected ? cat.color : theme.colors.secondaryText,
                      fontFamily: theme.fontFamily.persianRegular,
                    },
                  ]}
                >
                  {toPersianDigits(count)}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
    paddingHorizontal: 16,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  headerTitle: {
    fontSize: 12,
    lineHeight: 16,
  },
  clearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  clearBtnText: {
    fontSize: 10.5,
  },
  scrollList: {
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 16,
    paddingBottom: 2,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    minHeight: 30,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginEnd: 5,
  },
  chipText: {
    fontSize: 11,
    lineHeight: 15,
  },
  countBadge: {
    marginStart: 5,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 6,
  },
  countBadgeText: {
    fontSize: 9.5,
  },
});
