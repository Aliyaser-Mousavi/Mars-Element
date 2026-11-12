import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { CATEGORY_COLOR_MAP } from '@/constants/colors';
import { useTheme } from '@/theme';
import { ElementBase } from '@/types';
import { formatAtomicMass } from '@/utils/format';

export interface PeriodicCellProps {
  element: ElementBase;
  onPress: (element: ElementBase) => void;
  isDimmed?: boolean;
  isSelected?: boolean;
  size?: number; // default tile width, e.g. 58 or 60px
  style?: StyleProp<ViewStyle>;
}

export const PeriodicCell: React.FC<PeriodicCellProps> = React.memo(
  ({ element, onPress, isDimmed = false, isSelected = false, size = 58, style }) => {
    const theme = useTheme();
    const familyColor = CATEGORY_COLOR_MAP[element.category] || theme.colors.border;

    const cellWidth = size;
    const cellHeight = Math.round(size * 1.18); // Optimal chemistry tile proportion (e.g. 58 x 68)

    // Cell background: subtle tint of category color to give distinct chemistry feel without oversaturation
    const normalBg = theme.isDark
      ? `${familyColor}18`
      : `${familyColor}0D`;

    const normalBorder = theme.isDark
      ? `${familyColor}55`
      : `${familyColor}40`;

    const containerStyle: ViewStyle = {
      width: cellWidth,
      height: cellHeight,
      backgroundColor: isSelected
        ? `${theme.colors.goldenAccent}24`
        : normalBg,
      borderRadius: 7,
      borderColor: isSelected
        ? theme.colors.goldenAccent
        : isDimmed
        ? theme.colors.border
        : normalBorder,
      borderWidth: isSelected ? 2.2 : 1,
      opacity: isDimmed ? 0.22 : 1,
      ...(isSelected ? theme.shadows.sm : {}),
    };

    return (
      <Pressable
        onPress={() => onPress(element)}
        style={({ pressed }) => [
          styles.container,
          containerStyle,
          pressed && styles.pressed,
          style,
        ]}
        accessibilityRole="button"
        accessibilityLabel={`${element.nameFa}، نماد ${element.symbol}، عدد اتمی ${element.atomicNumber}`}
      >
        {/* Top Accent Strip: Visual category indicator */}
        <View
          style={[
            styles.categoryBar,
            { backgroundColor: familyColor },
          ]}
        />

        {/* Top Row: Atomic Number & Category Indicator Dot */}
        <View style={styles.topRow}>
          <Text
            style={[
              theme.typography.atomicNumber,
              styles.atomicNumberText,
              {
                color: isSelected
                  ? theme.colors.goldenAccent
                  : theme.colors.secondaryText,
                fontFamily: theme.fontFamily.latinScientific,
              },
            ]}
          >
            {element.atomicNumber}
          </Text>
        </View>

        {/* Center: Large Chemical Symbol (Strictly Latin LTR) */}
        <View style={styles.symbolContainer}>
          <Text
            style={[
              theme.typography.elementSymbol,
              styles.symbolText,
              {
                color: theme.colors.primaryText,
                fontSize: Math.round(size * 0.32),
                lineHeight: Math.round(size * 0.35),
                fontFamily: theme.fontFamily.latinScientific,
              },
            ]}
          >
            {element.symbol}
          </Text>
        </View>

        {/* Bottom: Persian Element Name & Atomic Mass */}
        <View style={styles.bottomContainer}>
          <Text
            numberOfLines={1}
            style={[
              theme.typography.caption,
              styles.persianName,
              {
                color: theme.colors.primaryText,
                fontFamily: theme.fontFamily.persianMedium,
                fontSize: Math.max(8.5, Math.round(size * 0.16)),
              },
            ]}
          >
            {element.nameFa}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              theme.typography.scientificValue,
              styles.massText,
              {
                color: theme.colors.secondaryText,
                fontSize: Math.max(7.5, Math.round(size * 0.13)),
                fontFamily: theme.fontFamily.latinScientific,
              },
            ]}
          >
            {formatAtomicMass(element.atomicMass, 1)}
          </Text>
        </View>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2.5,
    paddingBottom: 2,
    paddingTop: 0,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  categoryBar: {
    height: 2.5,
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    direction: 'ltr',
    paddingHorizontal: 2,
    marginTop: 1,
  },
  atomicNumberText: {
    fontSize: 9.5,
    lineHeight: 11,
    fontWeight: '700',
  },
  symbolContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
  },
  symbolText: {
    fontWeight: '700',
  },
  bottomContainer: {
    alignItems: 'center',
    gap: 0.5,
  },
  persianName: {
    textAlign: 'center',
    lineHeight: 13,
  },
  massText: {
    textAlign: 'center',
    lineHeight: 10,
  },
  pressed: {
    transform: [{ scale: 0.94 }],
    opacity: 0.85,
  },
});
