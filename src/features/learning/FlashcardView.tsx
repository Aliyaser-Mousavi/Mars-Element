import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CATEGORY_COLOR_MAP } from "../../constants/colors";
import { ELEMENT_CATEGORIES } from "../../constants/element-categories";
import { lightAppTheme } from "../../theme";
import { ChemicalElement } from "../../types/element";
import { formatAtomicMass } from "../../utils/format";
import { toPersianDigits } from "../../utils/rtl";

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
  const [isFlipped, setIsFlipped] = useState(false);
  const categoryColor =
    CATEGORY_COLOR_MAP[element.classification.category] ||
    lightAppTheme.colors.scientificGreen;
  const categoryMeta = ELEMENT_CATEGORIES[element.classification.category];

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Top Counter Bar */}
      <View style={styles.counterRow}>
        <Text style={styles.counterText}>
          کارت {toPersianDigits(currentIndex + 1)} از{" "}
          {toPersianDigits(totalCards)}
        </Text>
        {isKnown && (
          <View style={styles.knownBadge}>
            <Ionicons name="checkmark-circle" size={14} color="#059669" />
            <Text style={styles.knownText}>یادگرفته‌شده</Text>
          </View>
        )}
      </View>

      {/* Main Interactive Flip Card */}
      <TouchableOpacity
        style={[styles.card, { borderColor: categoryColor }]}
        activeOpacity={0.85}
        onPress={handleFlip}
      >
        {!isFlipped ? (
          // Front Side: Symbol & Number
          <View style={styles.cardFront}>
            <View
              style={[
                styles.tilePreview,
                {
                  borderColor: categoryColor,
                  backgroundColor: `${categoryColor}15`,
                },
              ]}
            >
              <Text style={styles.tileNumber}>
                {toPersianDigits(element.identity.atomicNumber)}
              </Text>
              <Text style={styles.tileSymbol}>{element.identity.symbol}</Text>
            </View>

            <Text style={styles.frontPrompt}>
              برای دیدن شناسنامه و خواص عنصر ضربه بزنید ↻
            </Text>
          </View>
        ) : (
          // Back Side: Detailed scientific facts
          <View style={styles.cardBack}>
            <View
              style={[
                styles.backHeader,
                { borderBottomColor: `${categoryColor}30` },
              ]}
            >
              <Text style={styles.elementNameFa}>
                {element.identity.nameFa}
              </Text>
              <Text style={styles.elementNameEn}>
                {element.identity.nameEn}
              </Text>
              <View
                style={[
                  styles.categoryPill,
                  {
                    backgroundColor: `${categoryColor}20`,
                    borderColor: categoryColor,
                  },
                ]}
              >
                <Text
                  style={[styles.categoryPillText, { color: categoryColor }]}
                >
                  {categoryMeta?.nameFa ?? element.classification.category}
                </Text>
              </View>
            </View>

            <View style={styles.factsList}>
              <View style={styles.factRow}>
                <Text style={styles.factLabel}>جرم اتمی:</Text>
                <Text style={styles.factValue}>
                  {formatAtomicMass(
                    element.physicalProperties.atomicMass.value ?? 0,
                    2,
                  )}{" "}
                  u
                </Text>
              </View>
              <View style={styles.factRow}>
                <Text style={styles.factLabel}>موقعیت:</Text>
                <Text style={styles.factValue}>
                  دوره {toPersianDigits(element.classification.period)} ، گروه{" "}
                  {element.classification.group !== null
                    ? toPersianDigits(element.classification.group)
                    : "بلوک f"}
                </Text>
              </View>
              <View style={styles.factRow}>
                <Text style={styles.factLabel}>آرایش الکترونی:</Text>
                <Text style={[styles.factValue, styles.monoText]}>
                  {element.atomicStructure.abbreviatedConfiguration}
                </Text>
              </View>
              <View style={styles.factRow}>
                <Text style={styles.factLabel}>حالت فیزیکی:</Text>
                <Text style={styles.factValue}>
                  {element.physicalProperties.appearanceFa}
                </Text>
              </View>
            </View>

            {element.additionalContent.funFactsFa.length > 0 && (
              <View style={styles.funFactBox}>
                <Text style={styles.funFactTitle}>نکته جالب:</Text>
                <Text style={styles.funFactText} numberOfLines={2}>
                  {element.additionalContent.funFactsFa[0]}
                </Text>
              </View>
            )}
          </View>
        )}
      </TouchableOpacity>

      {/* Action Controls */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.navBtn} onPress={onPrev}>
          <Ionicons
            name="arrow-forward-outline"
            size={18}
            color={lightAppTheme.colors.forestGreen}
          />
          <Text style={styles.navBtnText}>قبلی</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.knownBtn, isKnown && styles.knownBtnActive]}
          onPress={onMarkKnown}
        >
          <Ionicons
            name={isKnown ? "checkmark-circle" : "checkmark-circle-outline"}
            size={18}
            color={isKnown ? "#FFFFFF" : "#059669"}
          />
          <Text
            style={[styles.knownBtnText, isKnown && styles.knownBtnTextActive]}
          >
            {isKnown ? "بلدم ✓" : "یاد گرفتم"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navBtn} onPress={onNext}>
          <Text style={styles.navBtnText}>بعدی</Text>
          <Ionicons
            name="arrow-back-outline"
            size={18}
            color={lightAppTheme.colors.forestGreen}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  counterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  counterText: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.secondaryText,
  },
  knownBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#D1FAE5",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  knownText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: "#059669",
  },
  card: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: 16,
    borderWidth: 2,
    minHeight: 240,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardFront: {
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  tilePreview: {
    width: 100,
    height: 110,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  tileNumber: {
    fontSize: 14,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
    position: "absolute",
    top: 6,
    left: 8,
  },
  tileSymbol: {
    fontSize: 42,
    fontWeight: "bold",
    fontFamily: "System",
    color: lightAppTheme.colors.primaryText,
  },
  frontPrompt: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.secondaryText,
  },
  cardBack: {
    width: "100%",
  },
  backHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  elementNameFa: {
    fontSize: 18,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  elementNameEn: {
    fontSize: 13,
    fontFamily: "System",
    color: lightAppTheme.colors.secondaryText,
  },
  categoryPill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
  },
  categoryPillText: {
    fontSize: 10,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
  },
  factsList: {
    gap: 6,
  },
  factRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  factLabel: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
  },
  factValue: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  monoText: {
    fontFamily: "System",
  },
  funFactBox: {
    marginTop: 10,
    backgroundColor: "#FEF3C7",
    padding: 8,
    borderRadius: 8,
  },
  funFactTitle: {
    fontSize: 10.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: "#92400E",
    marginBottom: 2,
  },
  funFactText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: "#78350F",
    lineHeight: 16,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    gap: 8,
  },
  navBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  navBtnText: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: lightAppTheme.colors.forestGreen,
  },
  knownBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#ECFDF5",
    borderWidth: 1,
    borderColor: "#059669",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  knownBtnActive: {
    backgroundColor: "#059669",
  },
  knownBtnText: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: "#059669",
  },
  knownBtnTextActive: {
    color: "#FFFFFF",
  },
});
