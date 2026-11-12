import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@/theme';

export interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: 'elevated' | 'outlined' | 'muted' | 'flat';
  accentColor?: string;
  accentPosition?: 'start' | 'top' | 'none';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  accessibilityLabel?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  onPress,
  style,
  variant = 'outlined',
  accentColor,
  accentPosition = 'none',
  padding = 'lg',
  accessibilityLabel,
}) => {
  const theme = useTheme();

  const getBackgroundColor = () => {
    switch (variant) {
      case 'elevated':
        return theme.colors.surfaceElevated;
      case 'muted':
        return theme.colors.surfaceMuted;
      case 'flat':
        return theme.colors.card;
      case 'outlined':
      default:
        return theme.colors.card;
    }
  };

  const getPadding = () => {
    switch (padding) {
      case 'none':
        return 0;
      case 'sm':
        return theme.spacing.sm;
      case 'md':
        return theme.spacing.md;
      case 'xl':
        return theme.spacing.xl;
      case 'lg':
      default:
        return theme.spacing.lg;
    }
  };

  const shadowStyle = variant === 'elevated' ? theme.shadows.sm : undefined;

  const cardStyle: ViewStyle = {
    backgroundColor: getBackgroundColor(),
    borderRadius: theme.borderRadius.md,
    borderWidth: variant === 'flat' ? 0 : 1,
    borderColor: theme.colors.cardBorder,
    padding: getPadding(),
    ...(accentColor && accentPosition === 'start'
      ? { borderStartColor: accentColor, borderStartWidth: 4 }
      : {}),
    ...(accentColor && accentPosition === 'top'
      ? { borderTopColor: accentColor, borderTopWidth: 4 }
      : {}),
    ...shadowStyle,
  };

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        hitSlop={theme.interactive.hitSlopSm}
        style={({ pressed }) => [
          cardStyle,
          pressed && { opacity: theme.interactive.activeOpacity, transform: [{ scale: theme.interactive.pressedScale }] },
          style,
        ]}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={[cardStyle, style]}>{children}</View>;
};
