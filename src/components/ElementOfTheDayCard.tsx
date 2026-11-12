import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/theme';
import { getElementOfTheDay } from '@/services/dailyElementService';
import { CATEGORY_COLOR_MAP } from '@/constants/colors';
import { ELEMENT_CATEGORIES } from '@/constants/element-categories';
import { toPersianDigits } from '@/utils/rtl';

export const ElementOfTheDayCard: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();
  const { element, funFact } = getElementOfTheDay();
  const categoryColor =
    CATEGORY_COLOR_MAP[element.classification.category] || theme.colors.scientificGreen;
  const categoryMeta = ELEMENT_CATEGORIES[element.classification.category];

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.cardBorder,
          borderStartColor: categoryColor,
          borderStartWidth: 3.5,
          borderRadius: theme.borderRadius.md,
        },
      ]}
      activeOpacity={theme.interactive.activeOpacity}
      onPress={() => router.push(`/element/${element.identity.atomicNumber}` as any)}
      accessibilityRole="button"
      accessibilityLabel={`عنصر منتخب امروز، ${element.identity.nameFa}، ${funFact}`}
    >
      {/* Mini Element Symbol Tile */}
      <View
        style={[
          styles.miniTile,
          {
            borderColor: `${categoryColor}80`,
            backgroundColor: `${categoryColor}14`,
            borderRadius: theme.borderRadius.sm,
          },
        ]}
      >
        <Text
          style={[
            styles.tileNumber,
            {
              color: theme.colors.secondaryText,
              fontFamily: theme.fontFamily.latinScientific,
            },
          ]}
        >
          {element.identity.atomicNumber}
        </Text>
        <Text
          style={[
            styles.tileSymbol,
            {
              color: theme.colors.primaryText,
              fontFamily: theme.fontFamily.latinScientific,
            },
          ]}
        >
          {element.identity.symbol}
        </Text>
      </View>

      {/* Main Info Column */}
      <View style={styles.infoCol}>
        {/* Header line: Badge + Category */}
        <View style={styles.badgeLine}>
          <View style={styles.headerTag}>
            <Ionicons name="sparkles" size={11} color={theme.colors.goldenAccent} />
            <Text
              style={[
                styles.headerTagText,
                {
                  color: theme.isDark ? theme.colors.goldenAccent : '#92400E',
                  fontFamily: theme.fontFamily.persianBold,
                },
              ]}
            >
              عنصر منتخب امروز
            </Text>
          </View>

          <View
            style={[
              styles.categoryTag,
              {
                backgroundColor: `${categoryColor}1A`,
                borderColor: `${categoryColor}40`,
              },
            ]}
          >
            <View style={[styles.categoryDot, { backgroundColor: categoryColor }]} />
            <Text
              style={[
                styles.categoryText,
                {
                  color: categoryColor,
                  fontFamily: theme.fontFamily.persianMedium,
                },
              ]}
            >
              {categoryMeta?.nameFa ?? element.classification.category}
            </Text>
          </View>
        </View>

        {/* Name and English Title */}
        <View style={styles.nameRow}>
          <Text
            style={[
              styles.nameFa,
              {
                color: theme.colors.primaryText,
                fontFamily: theme.fontFamily.persianBold,
              },
            ]}
          >
            {element.identity.nameFa}
          </Text>
          <Text
            style={[
              styles.nameEn,
              {
                color: theme.colors.secondaryText,
                fontFamily: theme.fontFamily.latinScientific,
              },
            ]}
          >
            ({element.identity.nameEn})
          </Text>
        </View>

        {/* Fun Fact preview */}
        <Text
          style={[
            styles.funFactText,
            {
              color: theme.colors.secondaryText,
              fontFamily: theme.fontFamily.persianRegular,
            },
          ]}
          numberOfLines={1}
        >
          {funFact}
        </Text>
      </View>

      {/* Trailing chevron in Persian direction (chevron-back is to the left) */}
      <View
        style={[
          styles.chevronWrapper,
          {
            backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.lightGreen,
          },
        ]}
      >
        <Ionicons
          name="chevron-back"
          size={16}
          color={theme.colors.scientificGreen}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 16,
    marginVertical: 4,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
    gap: 10,
  },
  miniTile: {
    width: 44,
    height: 50,
    borderWidth: 1.2,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 3,
    paddingHorizontal: 2,
  },
  tileNumber: {
    fontSize: 9,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginStart: 3,
  },
  tileSymbol: {
    fontSize: 19,
    fontWeight: '700',
    lineHeight: 22,
  },
  infoCol: {
    flex: 1,
    justifyContent: 'center',
    gap: 2,
  },
  badgeLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  headerTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  headerTagText: {
    fontSize: 10,
  },
  categoryTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 10,
    borderWidth: 0.8,
  },
  categoryDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  categoryText: {
    fontSize: 9.5,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 5,
  },
  nameFa: {
    fontSize: 13.5,
    lineHeight: 18,
  },
  nameEn: {
    fontSize: 10.5,
  },
  funFactText: {
    fontSize: 10.5,
    lineHeight: 15,
  },
  chevronWrapper: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
