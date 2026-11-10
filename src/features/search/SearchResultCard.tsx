import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { lightAppTheme } from '../../theme';
import { CATEGORY_COLOR_MAP } from '../../constants/colors';
import { ELEMENT_CATEGORIES } from '../../constants/element-categories';
import { formatAtomicMass } from '../../utils/format';
import { toPersianDigits } from '../../utils/rtl';
import { MatchDetails } from '../../services/searchService';

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

export const SearchResultCard: React.FC<SearchResultCardProps> = ({ item, onPress }) => {
  const { element, matchedBy } = item;
  const categoryColor = CATEGORY_COLOR_MAP[element.classification.category] || lightAppTheme.colors.scientificGreen;
  const categoryMeta = ELEMENT_CATEGORIES[element.classification.category];

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {/* Element Symbol Box */}
      <View style={[styles.tileBox, { borderColor: categoryColor, backgroundColor: `${categoryColor}15` }]}>
        <Text style={styles.tileNumber}>{toPersianDigits(element.identity.atomicNumber)}</Text>
        <Text style={styles.tileSymbol}>{element.identity.symbol}</Text>
        <Text style={styles.tileMass}>
          {formatAtomicMass(element.physicalProperties.atomicMass.value ?? 0, 1)}
        </Text>
      </View>

      {/* Main Info */}
      <View style={styles.contentCol}>
        <View style={styles.topRow}>
          <Text style={styles.elementNameFa}>{element.identity.nameFa}</Text>
          <Text style={styles.elementNameEn}>{element.identity.nameEn}</Text>
          <View style={[styles.categoryBadge, { backgroundColor: `${categoryColor}20`, borderColor: categoryColor }]}>
            <Text style={[styles.categoryBadgeText, { color: categoryColor }]}>
              {categoryMeta?.nameFa ?? element.classification.category}
            </Text>
          </View>
        </View>

        {/* Details row */}
        <View style={styles.detailsRow}>
          <Text style={styles.detailText}>
            دوره {toPersianDigits(element.classification.period)} • گروه {element.classification.group !== null ? toPersianDigits(element.classification.group) : 'بلوک f'} • بلوک {element.classification.block} • {STATE_FA[element.classification.standardState]}
          </Text>
        </View>

        {/* Electron Configuration Snippet */}
        <View style={styles.bottomRow}>
          <Text style={styles.configLabel}>آرایش:</Text>
          <Text style={styles.configText}>{element.atomicStructure.abbreviatedConfiguration}</Text>
          
          {matchedBy === 'atomicNumber' && (
            <View style={styles.matchTag}>
              <Text style={styles.matchTagText}>مطابقت با شماره اتمی</Text>
            </View>
          )}
          {matchedBy === 'symbol' && (
            <View style={styles.matchTag}>
              <Text style={styles.matchTagText}>مطابقت با نماد شیمیایی</Text>
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
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    alignItems: 'center',
    gap: 12,
  },
  tileBox: {
    width: 62,
    height: 68,
    borderRadius: lightAppTheme.borderRadius.sm,
    borderWidth: 1.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 3,
  },
  tileNumber: {
    fontSize: 10,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
    alignSelf: 'flex-start',
  },
  tileSymbol: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'System',
    color: lightAppTheme.colors.primaryText,
    lineHeight: 22,
  },
  tileMass: {
    fontSize: 8.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.secondaryText,
  },
  contentCol: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
  },
  elementNameFa: {
    fontSize: 15,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  elementNameEn: {
    fontSize: 11,
    fontFamily: 'System',
    color: lightAppTheme.colors.secondaryText,
    marginLeft: 2,
  },
  categoryBadge: {
    paddingHorizontal: 6,
    paddingVertical: 1.5,
    borderRadius: 8,
    borderWidth: 0.8,
    marginLeft: 'auto',
  },
  categoryBadgeText: {
    fontSize: 9.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
  },
  detailsRow: {
    marginTop: 4,
  },
  detailText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  configLabel: {
    fontSize: 10,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
  },
  configText: {
    fontSize: 11,
    fontFamily: 'System',
    color: lightAppTheme.colors.forestGreen,
    fontWeight: '500',
  },
  matchTag: {
    backgroundColor: '#EDF7ED',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
    marginLeft: 'auto',
  },
  matchTagText: {
    fontSize: 9,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.scientificGreen,
  },
});

