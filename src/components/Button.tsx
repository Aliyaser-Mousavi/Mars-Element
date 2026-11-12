import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@/theme';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'tonal'
  | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'start',
  style,
  textStyle,
  accessibilityLabel,
}) => {
  const theme = useTheme();

  const getContainerStyle = (): ViewStyle => {
    let backgroundColor: string = theme.colors.forestGreen;
    let borderColor = 'transparent';
    let borderWidth = 0;

    switch (variant) {
      case 'primary':
        backgroundColor = theme.isDark
          ? theme.colors.scientificGreen
          : theme.colors.forestGreen;
        break;
      case 'secondary':
        backgroundColor = theme.isDark
          ? theme.colors.surfaceElevated
          : theme.colors.scientificGreen;
        break;
      case 'tonal':
        backgroundColor = theme.colors.lightGreen;
        break;
      case 'outline':
        backgroundColor = 'transparent';
        borderColor = theme.isDark
          ? theme.colors.scientificGreen
          : theme.colors.forestGreen;
        borderWidth = 1.5;
        break;
      case 'ghost':
        backgroundColor = 'transparent';
        break;
      case 'danger':
        backgroundColor = theme.colors.coral;
        break;
    }

    let minHeight: number = theme.layout.minTouchTarget; // 44
    let paddingHorizontal = theme.spacing.lg;
    let paddingVertical = theme.spacing.sm;

    if (size === 'sm') {
      minHeight = 36;
      paddingHorizontal = theme.spacing.md;
      paddingVertical = theme.spacing.xs;
    } else if (size === 'lg') {
      minHeight = 52;
      paddingHorizontal = theme.spacing.xl;
      paddingVertical = theme.spacing.md;
    }

    return {
      backgroundColor,
      borderColor,
      borderWidth,
      minHeight,
      paddingHorizontal,
      paddingVertical,
      borderRadius: theme.borderRadius.md,
      opacity: disabled || loading ? 0.5 : 1,
    };
  };

  const getTextColor = (): string => {
    switch (variant) {
      case 'primary':
      case 'secondary':
      case 'danger':
        return '#FFFFFF';
      case 'tonal':
        return theme.isDark ? theme.colors.primaryText : theme.colors.forestGreen;
      case 'outline':
      case 'ghost':
        return theme.isDark ? theme.colors.scientificGreen : theme.colors.forestGreen;
    }
  };

  const typographyStyle =
    size === 'sm'
      ? theme.typography.bodySmall
      : size === 'lg'
      ? theme.typography.bodyLarge
      : theme.typography.buttonLabel;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      hitSlop={size === 'sm' ? theme.interactive.hitSlopSm : undefined}
      style={({ pressed }) => [
        styles.base,
        getContainerStyle(),
        pressed && !disabled && !loading && {
          opacity: theme.interactive.activeOpacity,
          transform: [{ scale: theme.interactive.pressedScale }],
        },
        style,
      ]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{ disabled: disabled || loading }}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={getTextColor()}
          style={styles.spinner}
        />
      ) : (
        <View style={styles.contentRow}>
          {icon && iconPosition === 'start' ? (
            <View style={styles.iconStart}>{icon}</View>
          ) : null}
          <Text
            style={[
              typographyStyle,
              styles.textBase,
              { color: getTextColor(), fontFamily: theme.fontFamily.persianMedium },
              textStyle,
            ]}
          >
            {title}
          </Text>
          {icon && iconPosition === 'end' ? (
            <View style={styles.iconEnd}>{icon}</View>
          ) : null}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBase: {
    textAlign: 'center',
  },
  iconStart: {
    marginEnd: 8,
  },
  iconEnd: {
    marginStart: 8,
  },
  spinner: {
    paddingVertical: 2,
  },
});
