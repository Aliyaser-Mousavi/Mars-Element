import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/theme';
import { Button } from './Button';

export interface EmptyStateProps {
  title?: string;
  message?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  actionTitle?: string;
  onAction?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'موردی یافت نشد',
  message = 'هیچ عنصری با مشخصات وارد شده تطابق ندارد.',
  iconName = 'flask-outline',
  actionTitle,
  onAction,
  style,
}) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { padding: theme.spacing.xl }, style]}>
      <View
        style={[
          styles.iconCircle,
          {
            backgroundColor: theme.colors.lightGreen,
            borderRadius: theme.borderRadius.full,
          },
        ]}
      >
        <Ionicons
          name={iconName}
          size={40}
          color={theme.colors.scientificGreen}
        />
      </View>

      <Text
        style={[
          theme.typography.sectionHeading,
          styles.title,
          { color: theme.colors.primaryText, marginTop: theme.spacing.md },
        ]}
      >
        {title}
      </Text>

      {message ? (
        <Text
          style={[
            theme.typography.bodyMedium,
            styles.message,
            { color: theme.colors.secondaryText, marginTop: theme.spacing.xs },
          ]}
        >
          {message}
        </Text>
      ) : null}

      {actionTitle && onAction ? (
        <Button
          title={actionTitle}
          onPress={onAction}
          variant="outline"
          size="sm"
          style={{ marginTop: theme.spacing.lg }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  message: {
    textAlign: 'center',
    maxWidth: 280,
  },
});

