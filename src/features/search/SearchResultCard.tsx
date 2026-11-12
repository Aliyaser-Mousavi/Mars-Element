import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/theme';
import { CATEGORY_COLOR_MAP } from '@/constants/colors';
import { ELEMENT_CATEGORIES } from '@/constants/element-categories';
import { formatAtomicMass } from '@/utils/format';
import { toPersianDigits } from '@/utils/rtl';
import { MatchDetails } from '@/services/searchService';

interface SearchResultCardProps {
  item: MatchDetails;
  onPress: () => void;
}

const STATE_FA: Record<string, string> = {
  solid: 'جامد',
  liquid: 'مایع',
  gas: 'گاز',
  unknown: 'نامشخص',
};

const MATCH_LABELS: Record<string, string> = {
  atomicNumber: 'مطابقت با عدد اتمی',
  symbol: 'مطابقت با نماد شیمیایی',
  nameEn: 'مطابقت با نام انگلیسی',
  other: 'مطابقت در شرح علمی',
};

export const SearchResultCard: React.FC<SearchResultCardProps> = ({ item, onPress }) => {
  const theme = useTheme();
  const { element, matchedBy, matchSnippet } = item;
  const categoryColor =
    CATEGORY_COLOR_MAP[element.classification.category] || theme.colors.scientificGreen;
  const categoryMeta = ELEMENT_CATEGORIES[element.classification.category];

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.cardBorder,
          borderStartColor: categoryColor,
          borderStartWidth: 3.5,
          borderRadius: theme.borderRadius.md,
        },
      ]}
      activeOpacity={theme.interactive.activeOpacity}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${element.identity.nameFa}، نماد ${element.identity.symbol}، عدد اتمی ${element.identity.atomicNumber}`}
    >
      {/* Mini Element Symbol Tile */}
      <View
        style={[
          styles.tileBox,
          {
            borderColor: `${categoryColor}70`,
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
        <Text
          style={[
            styles.tileMass,
            {
              color: theme.colors.secondaryText,
              fontFamily: theme.fontFamily.latinScientific,
            },
          ]}
        >
          {formatAtomicMass(element.physicalProperties.atomicMass.value ?? 0, 1)}
        </Text>
      </View>

      {/* Main Info Column */}
      <View style={styles.contentCol}>
        {/* Header: Name Fa + Name En + Category Badge */}
        <View style={styles.topRow}>
          <Text
            style={[
              styles.elementNameFa,
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
              styles.elementNameEn,
              {
                color: theme.colors.secondaryText,
                fontFamily: theme.fontFamily.latinScientific,
              },
            ]}
          >
            ({element.identity.nameEn})
          </Text>

          <View
            style={[
              styles.categoryBadge,
              {
                backgroundColor: `${categoryColor}1A`,
                borderColor: `${categoryColor}40`,
              },
            ]}
          >
            <View style={[styles.categoryDot, { backgroundColor: categoryColor }]} />
            <Text
              style={[
                styles.categoryBadgeText,
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

        {/* Details Row: Period, Group, Block, State */}
        <View style={styles.detailsRow}>
          <Text
            style={[
              styles.detailText,
              {
                color: theme.colors.secondaryText,
                fontFamily: theme.fontFamily.persianRegular,
              },
            ]}
          >
            دوره {toPersianDigits(element.classification.period)} • گروه{' '}
            {element.classification.group !== null
              ? toPersianDigits(element.classification.group)
              : 'بلوک f'}{' '}
            • بلوک{' '}
            <Text style={{ fontFamily: theme.fontFamily.latinScientific }}>
              {element.classification.block}
            </Text>{' '}
            • {STATE_FA[element.classification.standardState] || 'نامشخص'}
          </Text>
        </View>

        {/* Electron Configuration Snippet & Match Details */}
        <View style={styles.bottomRow}>
          <View style={styles.configContainer}>
            <Text
              style={[
                styles.configLabel,
                {
                  color: theme.colors.secondaryText,
                  fontFamily: theme.fontFamily.persianRegular,
                },
              ]}
            >
              آرایش:
            </Text>
            <Text
              style={[
                styles.configText,
                {
                  color: theme.colors.scientificGreen,
                  fontFamily: theme.fontFamily.latinMono,
                },
              ]}
            >
              {element.atomicStructure.abbreviatedConfiguration}
            </Text>
          </View>

          {matchedBy && matchedBy !== 'nameFa' && (
            <View
              style={[
                styles.matchTag,
                {
                  backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}20` : theme.colors.lightGreen,
                },
              ]}
            >
              <Text
                style={[
                  styles.matchTagText,
                  {
                    color: theme.colors.scientificGreen,
                    fontFamily: theme.fontFamily.persianMedium,
                  },
                ]}
              >
                {matchSnippet || MATCH_LABELS[matchedBy] || 'مطابقت جستجو'}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 4,
    borderWidth: 1,
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  tileBox: {
    width: 54,
    height: 62,
    borderWidth: 1.2,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 2,
  },
  tileNumber: {
    fontSize: 9.5,
    fontWeight: '700',
    alignSelf: 'flex-start',
    marginStart: 2,
  },
  tileSymbol: {
    fontSize: 19,
    fontWeight: '700',
    lineHeight: 21,
  },
  tileMass: {
    fontSize: 8,
    fontWeight: '500',
  },
  contentCol: {
    flex: 1,
    justifyContent: 'center',
    gap: 3,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 5,
  },
  elementNameFa: {
    fontSize: 14.5,
    lineHeight: 20,
  },
  elementNameEn: {
    fontSize: 11,
    lineHeight: 16,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3.5,
    paddingHorizontal: 6,
    paddingVertical: 1.5,
    borderRadius: 8,
    borderWidth: 0.8,
    marginStart: 'auto',
  },
  categoryDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  categoryBadgeText: {
    fontSize: 9.5,
  },
  detailsRow: {
    marginTop: 1,
  },
  detailText: {
    fontSize: 10.5,
    lineHeight: 15,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
    marginTop: 2,
  },
  configContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  configLabel: {
    fontSize: 10,
  },
  configText: {
    fontSize: 10.5,
    direction: 'ltr',
  },
  matchTag: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 6,
  },
  matchTagText: {
    fontSize: 9,
  },
});
