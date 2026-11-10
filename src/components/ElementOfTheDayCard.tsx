import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { lightAppTheme } from '../theme';
import { getElementOfTheDay } from '../services/dailyElementService';
import { CATEGORY_COLOR_MAP } from '../constants/colors';
import { ELEMENT_CATEGORIES } from '../constants/element-categories';
import { toPersianDigits } from '../utils/rtl';

export const ElementOfTheDayCard: React.FC = () => {
  const router = useRouter();
  const { element, funFact } = getElementOfTheDay();
  const categoryColor = CATEGORY_COLOR_MAP[element.classification.category] || lightAppTheme.colors.scientificGreen;
  const categoryMeta = ELEMENT_CATEGORIES[element.classification.category];

  return (
    <TouchableOpacity
      style={[styles.container, { borderLeftColor: categoryColor }]}
      activeOpacity={0.8}
      onPress={() => router.push(`/element/${element.identity.atomicNumber}` as any)}
    >
      <View style={styles.headerRow}>
        <View style={styles.badge}>
          <Ionicons name="sparkles" size={13} color="#D97706" />
          <Text style={styles.badgeText}>عنصر منتخب امروز</Text>
        </View>

        <Text style={styles.moreText}>مشاهده شناسنامه کامل ←</Text>
      </View>

      <View style={styles.contentRow}>
        {/* Mini Symbol Tile */}
        <View style={[styles.tileBox, { borderColor: categoryColor, backgroundColor: `${categoryColor}15` }]}>
          <Text style={styles.tileNumber}>{toPersianDigits(element.identity.atomicNumber)}</Text>
          <Text style={styles.tileSymbol}>{element.identity.symbol}</Text>
        </View>

        {/* Text Info */}
        <View style={styles.infoCol}>
          <View style={styles.nameRow}>
            <Text style={styles.nameFa}>{element.identity.nameFa}</Text>
            <Text style={styles.nameEn}>{element.identity.nameEn}</Text>
            <View style={[styles.familyChip, { backgroundColor: `${categoryColor}20` }]}>
              <Text style={[styles.familyText, { color: categoryColor }]}>
                {categoryMeta?.nameFa ?? element.classification.category}
              </Text>
            </View>
          </View>

          <Text style={styles.factText} numberOfLines={2}>
            {funFact}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 10.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: '#92400E',
  },
  moreText: {
    fontSize: 10.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.forestGreen,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  tileBox: {
    width: 50,
    height: 56,
    borderRadius: 8,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  tileNumber: {
    position: 'absolute',
    top: 2,
    left: 4,
    fontSize: 9,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  tileSymbol: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'System',
    color: lightAppTheme.colors.primaryText,
  },
  infoCol: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexWrap: 'wrap',
  },
  nameFa: {
    fontSize: 14,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  nameEn: {
    fontSize: 11,
    fontFamily: 'System',
    color: lightAppTheme.colors.secondaryText,
  },
  familyChip: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
    marginLeft: 'auto',
  },
  familyText: {
    fontSize: 9,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
  },
  factText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    marginTop: 4,
    lineHeight: 16,
  },
});
