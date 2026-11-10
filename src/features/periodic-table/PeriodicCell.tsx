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
  size?: number; // default tile size, e.g. 64px
  style?: StyleProp<ViewStyle>;
}

export const PeriodicCell: React.FC<PeriodicCellProps> = React.memo(
  ({ element, onPress, isDimmed = false, isSelected = false, size = 64, style }) => {
    const theme = useTheme();
    const familyColor = CATEGORY_COLOR_MAP[element.category] || theme.colors.border;

    const cellWidth = size;
    const cellHeight = size * 1.15; // slightly taller for perfect chemistry tile aspect

    const containerStyle: ViewStyle = {
      width: cellWidth,
      height: cellHeight,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.sm,
      borderColor: isSelected
        ? theme.colors.goldenAccent
        : isDimmed
        ? theme.colors.border
        : familyColor,
      borderWidth: isSelected ? 2 : 1.2,
      opacity: isDimmed ? 0.28 : 1,
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
        {/* Top Header: Atomic Number (LTR) & Category Accent Indicator */}
        <View style={styles.topRow}>
          <Text
            style={[
              theme.typography.atomicNumber,
              styles.atomicNumberText,
              { color: theme.colors.secondaryText },
            ]}
          >
            {element.atomicNumber}
          </Text>
          <View style={[styles.familyDot, { backgroundColor: familyColor }]} />
        </View>

        {/* Center: English Standard Chemical Symbol (Strictly Latin LTR) */}
        <View style={styles.symbolContainer}>
          <Text
            style={[
              theme.typography.elementSymbol,
              styles.symbolText,
              {
                color: theme.colors.primaryText,
                fontSize: size * 0.32,
                lineHeight: size * 0.36,
              },
            ]}
          >
            {element.symbol}
          </Text>
        </View>

        {/* Bottom Persian Name & Atomic Mass */}
        <View style={styles.bottomContainer}>
          <Text
            numberOfLines={1}
            style={[
              theme.typography.caption,
              styles.persianName,
              {
                color: theme.colors.primaryText,
                fontFamily: theme.fontFamily.persianMedium,
                fontSize: size * 0.17,
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
              { color: theme.colors.secondaryText, fontSize: size * 0.14 },
            ]}
          >
            {formatAtomicMass(element.atomicMass, 2)}
          </Text>
        </View>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 3,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    direction: 'ltr',
  },
  atomicNumberText: {
    fontSize: 10,
    lineHeight: 12,
  },
  familyDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  symbolContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 1,
  },
  symbolText: {
    fontWeight: '700',
  },
  bottomContainer: {
    alignItems: 'center',
  },
  persianName: {
    textAlign: 'center',
    lineHeight: 14,
  },
  massText: {
    textAlign: 'center',
    lineHeight: 12,
  },
  pressed: {
    transform: [{ scale: 0.94 }],
    opacity: 0.85,
  },
});

