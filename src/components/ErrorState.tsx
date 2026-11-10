import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/theme';
import { Button } from './Button';

export interface ErrorStateProps {
  title?: string;
  message?: string;
  retryTitle?: string;
  onRetry?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'خطایی رخ داد',
  message = 'امکان بارگذاری اطلاعات وجود ندارد. لطفاً دوباره تلاش کنید.',
  retryTitle = 'تلاش مجدد',
  onRetry,
  style,
}) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { padding: theme.spacing.xl }, style]}>
      <View
        style={[
          styles.iconCircle,
          {
            backgroundColor: `${theme.colors.coral}20`,
            borderRadius: theme.borderRadius.full,
          },
        ]}
      >
        <Ionicons
          name="alert-circle-outline"
          size={42}
          color={theme.colors.coral}
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

      {onRetry ? (
        <Button
          title={retryTitle}
          onPress={onRetry}
          variant="secondary"
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

