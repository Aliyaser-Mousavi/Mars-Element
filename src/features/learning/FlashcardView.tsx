import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CATEGORY_COLOR_MAP } from '../../constants/colors';
import { ELEMENT_CATEGORIES } from '../../constants/element-categories';
import { useTheme } from '../../theme';
import { ChemicalElement } from '../../types/element';
import { formatAtomicMass } from '../../utils/format';
import { toPersianDigits } from '../../utils/rtl';

interface FlashcardViewProps {
  element: ChemicalElement;
  isKnown: boolean;
  onMarkKnown: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCards: number;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  element,
  isKnown,
  onMarkKnown,
  onNext,
  onPrev,
  currentIndex,
  totalCards,
}) => {
  const theme = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);

  const categoryColor =
    CATEGORY_COLOR_MAP[element.classification.category] || theme.colors.scientificGreen;
  const categoryMeta = ELEMENT_CATEGORIES[element.classification.category];
  const progressRatio = totalCards > 0 ? (currentIndex + 1) / totalCards : 0;

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Top Counter & Progress Indicator */}
      <View style={styles.headerBox}>
        <View style={styles.counterRow}>
          <View style={styles.counterBadge}>
            <Ionicons name="albums-outline" size={16} color={theme.colors.scientificGreen} />
            <Text style={[styles.counterText, { color: theme.colors.primaryText }]}>
              کارت {toPersianDigits(currentIndex + 1)} از {toPersianDigits(totalCards)}
            </Text>
          </View>

          {isKnown && (
            <View
              style={[
                styles.knownBadge,
                {
                  backgroundColor: theme.isDark ? 'rgba(5, 150, 105, 0.2)' : '#D1FAE5',
                  borderColor: '#059669',
                },
              ]}
            >
              <Ionicons name="checkmark-circle" size={14} color="#059669" />
              <Text style={styles.knownText}>یادگرفته‌شده</Text>
            </View>
          )}
        </View>

        {/* Progress Bar */}
        <View
          style={[
            styles.progressBarTrack,
            { backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' },
          ]}
        >
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${Math.max(progressRatio * 100, 2)}%`,
                backgroundColor: categoryColor,
              },
            ]}
          />
        </View>
      </View>

      {/* Main Interactive Flip Card */}
      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.surface,
            borderColor: isFlipped ? `${categoryColor}80` : theme.colors.border,
            shadowColor: '#000',
          },
        ]}
        activeOpacity={0.9}
        onPress={handleFlip}
      >
        {/* Category Accent Top Line */}
        <View style={[styles.cardAccentBar, { backgroundColor: categoryColor }]} />

        {!isFlipped ? (
          // Front Side: Symbol, Atomic Number, Category Hint
          <View style={styles.cardFront}>
            <View
              style={[
                styles.tilePreview,
                {
                  borderColor: `${categoryColor}60`,
                  backgroundColor: `${categoryColor}14`,
                },
              ]}
            >
              <Text style={[styles.tileNumber, { color: categoryColor }]}>
                {toPersianDigits(element.identity.atomicNumber)}
              </Text>
              <Text style={[styles.tileSymbol, { color: theme.colors.primaryText }]}>
                {element.identity.symbol}
              </Text>
              <Text style={[styles.tileNameFa, { color: theme.colors.secondaryText }]}>
                {element.identity.nameFa}
              </Text>
            </View>

            <View
              style={[
                styles.categoryHintBadge,
                {
                  backgroundColor: `${categoryColor}18`,
                  borderColor: `${categoryColor}40`,
                },
              ]}
            >
              <View style={[styles.categoryDot, { backgroundColor: categoryColor }]} />
              <Text style={[styles.categoryHintText, { color: categoryColor }]}>
                {categoryMeta?.nameFa ?? element.classification.category}
              </Text>
            </View>

            <View style={styles.flipPromptRow}>
              <Ionicons name="sync-outline" size={16} color={theme.colors.secondaryText} />
              <Text style={[styles.frontPrompt, { color: theme.colors.secondaryText }]}>
                برای مشاهده مشخصات کامل علمی لمس کنید
              </Text>
            </View>
          </View>
        ) : (
          // Back Side: Detailed scientific facts
          <View style={styles.cardBack}>
            <View
              style={[
                styles.backHeader,
                { borderBottomColor: theme.colors.border },
              ]}
            >
              <View>
                <Text style={[styles.elementNameFa, { color: theme.colors.primaryText }]}>
                  {element.identity.nameFa}
                </Text>
                <Text style={[styles.elementNameEn, { color: theme.colors.secondaryText }]}>
                  {element.identity.nameEn}
                </Text>
              </View>

              <View
                style={[
                  styles.categoryPill,
                  {
                    backgroundColor: `${categoryColor}18`,
                    borderColor: categoryColor,
                  },
                ]}
              >
                <Text style={[styles.categoryPillText, { color: categoryColor }]}>
                  {categoryMeta?.nameFa ?? element.classification.category}
                </Text>
              </View>
            </View>

            <View style={styles.factsList}>
              <View style={styles.factRow}>
                <Text style={[styles.factLabel, { color: theme.colors.secondaryText }]}>
                  جرم اتمی استاندارد:
                </Text>
                <Text style={[styles.factValue, { color: theme.colors.primaryText }]}>
                  {formatAtomicMass(element.physicalProperties.atomicMass.value ?? 0, 2)} u
                </Text>
              </View>

              <View style={styles.factRow}>
                <Text style={[styles.factLabel, { color: theme.colors.secondaryText }]}>
                  موقعیت در جدول:
                </Text>
                <Text style={[styles.factValue, { color: theme.colors.primaryText }]}>
                  دوره {toPersianDigits(element.classification.period)} ،{' '}
                  {element.classification.group !== null
                    ? `گروه ${toPersianDigits(element.classification.group)}`
                    : 'بلوک f (فاقد گروه)'}
                </Text>
              </View>

              <View style={styles.factRow}>
                <Text style={[styles.factLabel, { color: theme.colors.secondaryText }]}>
                  آرایش الکترونی:
                </Text>
                <Text style={[styles.factValue, styles.monoText, { color: theme.colors.primaryText }]}>
                  {element.atomicStructure.abbreviatedConfiguration}
                </Text>
              </View>

              <View style={styles.factRow}>
                <Text style={[styles.factLabel, { color: theme.colors.secondaryText }]}>
                  حالت فیزیکی و ظاهری:
                </Text>
                <Text style={[styles.factValue, { color: theme.colors.primaryText }]}>
                  {element.physicalProperties.appearanceFa}
                </Text>
              </View>
            </View>

            {element.additionalContent.funFactsFa.length > 0 && (
              <View
                style={[
                  styles.funFactBox,
                  {
                    backgroundColor: theme.isDark ? 'rgba(217, 119, 6, 0.14)' : '#FEF3C7',
                    borderColor: theme.isDark ? 'rgba(217, 119, 6, 0.3)' : '#FDE68A',
                  },
                ]}
              >
                <View style={styles.funFactHeader}>
                  <Ionicons name="sparkles" size={14} color="#D97706" />
                  <Text style={styles.funFactTitle}>نکته جالب کیهان‌شناسی و کاربرد:</Text>
                </View>
                <Text
                  style={[
                    styles.funFactText,
                    { color: theme.isDark ? '#FDE68A' : '#78350F' },
                  ]}
                  numberOfLines={2}
                >
                  {element.additionalContent.funFactsFa[0]}
                </Text>
              </View>
            )}

            <View style={styles.flipBackHintRow}>
              <Ionicons name="refresh-outline" size={14} color={theme.colors.secondaryText} />
              <Text style={[styles.flipBackHint, { color: theme.colors.secondaryText }]}>
                برای بازگشت به نمای نماد لمس کنید
              </Text>
            </View>
          </View>
        )}
      </TouchableOpacity>

      {/* Action Controls Toolbar */}
      <View style={styles.actionsRow}>
        {/* Previous Button (RTL points right) */}
        <TouchableOpacity
          style={[
            styles.navBtn,
            {
              backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.06)' : theme.colors.lightGreen,
              borderColor: theme.colors.border,
            },
          ]}
          activeOpacity={0.7}
          onPress={onPrev}
        >
          <Ionicons name="arrow-forward-outline" size={18} color={theme.colors.forestGreen} />
          <Text style={[styles.navBtnText, { color: theme.colors.forestGreen }]}>قبلی</Text>
        </TouchableOpacity>

        {/* Mark as Learned Toggle Button */}
        <TouchableOpacity
          style={[
            styles.knownBtn,
            isKnown
              ? styles.knownBtnActive
              : {
                  backgroundColor: theme.isDark ? 'rgba(5, 150, 105, 0.15)' : '#ECFDF5',
                  borderColor: '#059669',
                },
          ]}
          activeOpacity={0.8}
          onPress={onMarkKnown}
        >
          <Ionicons
            name={isKnown ? 'checkmark-circle' : 'checkmark-circle-outline'}
            size={18}
            color={isKnown ? '#FFFFFF' : '#059669'}
          />
          <Text
            style={[
              styles.knownBtnText,
              { color: isKnown ? '#FFFFFF' : '#059669' },
            ]}
          >
            {isKnown ? 'بلدم ✓' : 'یاد گرفتم'}
          </Text>
        </TouchableOpacity>

        {/* Next Button (RTL points left) */}
        <TouchableOpacity
          style={[
            styles.navBtn,
            {
              backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.06)' : theme.colors.lightGreen,
              borderColor: theme.colors.border,
            },
          ]}
          activeOpacity={0.7}
          onPress={onNext}
        >
          <Text style={[styles.navBtnText, { color: theme.colors.forestGreen }]}>بعدی</Text>
          <Ionicons name="arrow-back-outline" size={18} color={theme.colors.forestGreen} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    gap: 12,
  },
  headerBox: {
    gap: 8,
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  counterBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  counterText: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  knownBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
  },
  knownText: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Bold',
    color: '#059669',
  },
  progressBarTrack: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 2,
  },
  card: {
    borderRadius: 18,
    borderWidth: 1.5,
    minHeight: 280,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  cardAccentBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
  },
  cardFront: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    width: '100%',
    paddingVertical: 10,
  },
  tilePreview: {
    width: 120,
    height: 130,
    borderWidth: 2,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
  },
  tileNumber: {
    fontSize: 14,
    fontFamily: 'Vazirmatn-Bold',
    position: 'absolute',
    top: 8,
    left: 10,
  },
  tileSymbol: {
    fontSize: 44,
    fontWeight: 'bold',
    fontFamily: 'System',
    marginTop: 4,
  },
  tileNameFa: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Medium',
    marginTop: 2,
  },
  categoryHintBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
  },
  categoryDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  categoryHintText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  flipPromptRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  frontPrompt: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
  },
  cardBack: {
    width: '100%',
  },
  backHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  elementNameFa: {
    fontSize: 18,
    fontFamily: 'Vazirmatn-Bold',
  },
  elementNameEn: {
    fontSize: 12.5,
    fontFamily: 'System',
    marginTop: 2,
  },
  categoryPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
  },
  categoryPillText: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  factsList: {
    gap: 8,
  },
  factRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  factLabel: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Regular',
  },
  factValue: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  monoText: {
    fontFamily: 'System',
  },
  funFactBox: {
    marginTop: 12,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  funFactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  funFactTitle: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Bold',
    color: '#D97706',
  },
  funFactText: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 18,
    textAlign: 'right',
  },
  flipBackHintRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 12,
  },
  flipBackHint: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Regular',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    gap: 8,
  },
  navBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  navBtnText: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  knownBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  knownBtnActive: {
    backgroundColor: '#059669',
    borderColor: '#059669',
  },
  knownBtnText: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
});
