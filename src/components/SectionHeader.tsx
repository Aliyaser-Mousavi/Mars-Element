import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from '@/theme';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  action,
  style,
  titleStyle,
}) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { marginBottom: theme.spacing.md }, style]}>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.titleBase,
            theme.typography.sectionHeading,
            { color: theme.colors.primaryText },
            titleStyle,
          ]}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            style={[
              styles.subtitleBase,
              theme.typography.caption,
              { color: theme.colors.secondaryText, marginTop: theme.spacing.xs },
            ]}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>
      {action ? <View style={styles.actionContainer}>{action}</View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  titleBase: {
    textAlign: 'right',
  },
  subtitleBase: {
    textAlign: 'right',
  },
  actionContainer: {
    marginStart: 12,
  },
});

