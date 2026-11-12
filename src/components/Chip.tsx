import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "@/theme";
import { toPersianDigits } from "@/utils/rtl";

export interface ChipProps {
  label: string;
  selected?: boolean;
  color?: string;
  count?: number | string;
  icon?: React.ReactNode;
  onPress?: () => void;
  size?: "sm" | "md";
  variant?: "filled" | "outlined" | "subtle";
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  color,
  count,
  icon,
  onPress,
  size = "md",
  variant = "subtle",
  style,
  textStyle,
  accessibilityLabel,
}) => {
  const theme = useTheme();
  const accentColor = color || theme.colors.scientificGreen;

  const isSmall = size === "sm";
  const minHeight = isSmall ? 28 : 36;
  const paddingHorizontal = isSmall ? theme.spacing.sm : theme.spacing.md;
  const fontSize = isSmall ? 10.5 : 12;

  // Variant styling
  let backgroundColor = theme.colors.chipBackground;
  let borderColor = theme.colors.chipBorder;
  let textColor = theme.colors.primaryText;

  if (selected) {
    if (variant === "filled") {
      backgroundColor = accentColor;
      borderColor = accentColor;
      textColor = "#FFFFFF";
    } else {
      backgroundColor = `${accentColor}1F`;
      borderColor = accentColor;
      textColor = theme.isDark ? "#FFFFFF" : theme.colors.forestGreen;
    }
  } else if (variant === "outlined") {
    backgroundColor = "transparent";
    borderColor = theme.colors.border;
    textColor = theme.colors.secondaryText;
  } else if (variant === "filled") {
    backgroundColor = theme.colors.surfaceMuted;
    borderColor = "transparent";
    textColor = theme.colors.secondaryText;
  }

  const containerStyle: ViewStyle = {
    minHeight,
    paddingHorizontal,
    paddingVertical: isSmall ? 2 : 4,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    backgroundColor,
    borderColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  const content = (
    <>
      {color && !selected ? (
        <View style={[styles.dot, { backgroundColor: color }]} />
      ) : null}
      {icon ? <View style={styles.iconWrapper}>{icon}</View> : null}
      <Text
        style={[
          theme.typography.chipLabel,
          {
            color: textColor,
            fontSize,
            fontFamily: selected
              ? theme.fontFamily.persianBold
              : theme.fontFamily.persianMedium,
          },
          textStyle,
        ]}
      >
        {label}
      </Text>
      {count !== undefined && count !== null ? (
        <View
          style={[
            styles.countBadge,
            {
              backgroundColor: selected
                ? `${accentColor}33`
                : theme.colors.surfaceMuted,
            },
          ]}
        >
          <Text
            style={[
              styles.countText,
              {
                color: selected ? accentColor : theme.colors.secondaryText,
                fontFamily: theme.fontFamily.persianRegular,
              },
            ]}
          >
            {toPersianDigits(count)}
          </Text>
        </View>
      ) : null}
    </>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        hitSlop={theme.interactive.hitSlopSm}
        style={({ pressed }) => [
          containerStyle,
          pressed && { opacity: theme.interactive.activeOpacity },
          style,
        ]}
        accessibilityRole="button"
        accessibilityState={{ selected }}
        accessibilityLabel={accessibilityLabel || label}
      >
        {content}
      </Pressable>
    );
  }

  return <View style={[containerStyle, style]}>{content}</View>;
};

const styles = StyleSheet.create({
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginEnd: 6,
  },
  iconWrapper: {
    marginEnd: 5,
  },
  countBadge: {
    marginStart: 6,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 8,
  },
  countText: {
    fontSize: 10,
  },
});
