import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { CATEGORY_COLOR_MAP } from '@/constants/colors';
import { useTheme } from '@/theme';
import { ElementBase } from '@/types';
import { formatAtomicMass } from '@/utils/format';

export type ElementTileSize = 'compact' | 'standard' | 'large';

export interface ElementTileProps {
  element: ElementBase;
  size?: ElementTileSize;
  onPress?: (element: ElementBase) => void;
  style?: StyleProp<ViewStyle>;
  highlighted?: boolean;
}

export const ElementTile: React.FC<ElementTileProps> = ({
  element,
  size = 'standard',
  onPress,
  style,
  highlighted = false,
}) => {
  const theme = useTheme();
  const categoryColor = CATEGORY_COLOR_MAP[element.category] || theme.colors.border;

  const getDimensions = () => {
    switch (size) {
      case 'compact':
        return {
          width: 52,
          height: 60,
          borderRadius: theme.borderRadius.sm,
          padding: 3,
          symbolFontSize: 16,
          symbolLineHeight: 18,
          numberFontSize: 9,
          nameFontSize: 9,
          showName: true,
          showMass: false,
        };
      case 'large':
        return {
          width: 104,
          height: 120,
          borderRadius: theme.borderRadius.md,
          padding: 8,
          symbolFontSize: 34,
          symbolLineHeight: 38,
          numberFontSize: 13,
          nameFontSize: 13,
          showName: true,
          showMass: true,
        };
      case 'standard':
      default:
        return {
          width: 72,
          height: 84,
          borderRadius: theme.borderRadius.md,
          padding: 5,
          symbolFontSize: 22,
          symbolLineHeight: 24,
          numberFontSize: 11,
          nameFontSize: 11,
          showName: true,
          showMass: true,
        };
    }
  };

  const dim = getDimensions();

  const containerStyle: ViewStyle = {
    width: dim.width,
    height: dim.height,
    borderRadius: dim.borderRadius,
    backgroundColor: theme.colors.surface,
    borderColor: highlighted ? theme.colors.goldenAccent : categoryColor,
    borderWidth: highlighted ? 2 : 1.5,
    padding: dim.padding,
    justifyContent: 'space-between',
  };

  const content = (
    <View style={styles.inner}>
      {/* Top Header: Atomic Number (LTR strictly Latin) & Category Accent Bar */}
      <View style={styles.topRow}>
        <Text
          style={[
            theme.typography.atomicNumber,
            {
              fontSize: dim.numberFontSize,
              color: theme.colors.secondaryText,
            },
          ]}
        >
          {element.atomicNumber}
        </Text>
        <View
          style={[
            styles.accentDot,
            { backgroundColor: categoryColor },
          ]}
        />
      </View>

      {/* Center: Element Symbol (Strict Latin chemical notation) */}
      <View style={styles.symbolContainer}>
        <Text
          style={[
            theme.typography.elementSymbol,
            {
              fontSize: dim.symbolFontSize,
              lineHeight: dim.symbolLineHeight,
              color: theme.colors.primaryText,
            },
          ]}
        >
          {element.symbol}
        </Text>
      </View>

      {/* Bottom: Persian Element Name */}
      {dim.showName ? (
        <Text
          numberOfLines={1}
          style={[
            theme.typography.caption,
            styles.persianName,
            {
              fontSize: dim.nameFontSize,
              color: theme.colors.primaryText,
              fontFamily: theme.fontFamily.persianMedium,
            },
          ]}
        >
          {element.nameFa}
        </Text>
      ) : null}

      {/* Optional Atomic Mass */}
      {dim.showMass && size === 'large' ? (
        <Text
          numberOfLines={1}
          style={[
            theme.typography.scientificValue,
            styles.massText,
            { color: theme.colors.secondaryText },
          ]}
        >
          {formatAtomicMass(element.atomicMass)}
        </Text>
      ) : null}
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={() => onPress(element)}
        style={({ pressed }) => [
          containerStyle,
          pressed && styles.pressed,
          style,
        ]}
      >
        {content}
      </Pressable>
    );
  }

  return <View style={[containerStyle, style]}>{content}</View>;
};

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    direction: 'ltr',
  },
  accentDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  symbolContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  persianName: {
    textAlign: 'center',
  },
  massText: {
    textAlign: 'center',
    fontSize: 10,
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.96 }],
  },
});

