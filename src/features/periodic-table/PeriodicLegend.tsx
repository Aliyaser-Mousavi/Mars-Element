import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ELEMENT_CATEGORIES } from '@/constants/element-categories';
import { useTheme } from '@/theme';
import { ElementCategory } from '@/types';

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
      <View style={styles.headerRow}>
        <Text
          style={[
            theme.typography.caption,
            { color: theme.colors.secondaryText, fontFamily: theme.fontFamily.persianBold },
          ]}
        >
          فیلتر خانواده عناصر شیمیایی:
        </Text>
        {selectedCategory ? (
          <TouchableOpacity
            onPress={() => onSelectCategory(null)}
            style={[styles.clearBtn, { backgroundColor: theme.colors.lightGreen }]}
          >
            <Text
              style={[
                theme.typography.caption,
                { color: theme.colors.scientificGreen, fontSize: 11 },
              ]}
            >
              پاک‌کردن فیلتر (نمایش همه)
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
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
                    : theme.colors.surface,
                  borderColor: isSelected ? cat.color : theme.colors.border,
                  borderWidth: isSelected ? 1.8 : 1,
                  borderRadius: theme.borderRadius.full,
                },
              ]}
              accessibilityRole="button"
              accessibilityLabel={`${cat.nameFa} (${count} عنصر)`}
            >
              <View style={[styles.dot, { backgroundColor: cat.color }]} />
              <Text
                style={[
                  theme.typography.caption,
                  {
                    color: isSelected ? theme.colors.primaryText : theme.colors.secondaryText,
                    fontFamily: isSelected
                      ? theme.fontFamily.persianBold
                      : theme.fontFamily.persianMedium,
                    fontSize: 11,
                  },
                ]}
              >
                {cat.nameFa}
              </Text>
              <Text
                style={[
                  theme.typography.caption,
                  styles.countBadge,
                  {
                    color: isSelected ? cat.color : theme.colors.secondaryText,
                    fontSize: 10,
                  },
                ]}
              >
                ({count})
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  clearBtn: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  scrollList: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 2,
    paddingBottom: 4,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    marginEnd: 6,
  },
  countBadge: {
    marginStart: 4,
  },
});

