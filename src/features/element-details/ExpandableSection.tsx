import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/theme';

interface ExpandableSectionProps {
  title: string;
  badge?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  badge,
  iconName = 'flask-outline',
  defaultExpanded = false,
  children,
}) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.cardBorder,
          borderRadius: theme.borderRadius.md,
        },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.header,
          {
            backgroundColor: theme.colors.card,
          },
        ]}
        activeOpacity={theme.interactive.activeOpacity}
        onPress={() => setExpanded((prev) => !prev)}
        accessibilityRole="button"
        accessibilityLabel={`${title}، ${expanded ? 'بستن بخش' : 'باز کردن بخش'}`}
      >
        <View style={styles.titleRow}>
          <View
            style={[
              styles.iconWrapper,
              {
                backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}20` : theme.colors.lightGreen,
              },
            ]}
          >
            <Ionicons
              name={iconName}
              size={16}
              color={theme.colors.scientificGreen}
            />
          </View>
          <Text
            style={[
              styles.title,
              {
                color: theme.colors.primaryText,
                fontFamily: theme.fontFamily.persianBold,
              },
            ]}
          >
            {title}
          </Text>
          {badge ? (
            <View
              style={[
                styles.badge,
                {
                  backgroundColor: theme.isDark ? `${theme.colors.goldenAccent}25` : theme.colors.lightGreen,
                },
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  {
                    color: theme.isDark ? theme.colors.goldenAccent : theme.colors.forestGreen,
                    fontFamily: theme.fontFamily.persianMedium,
                  },
                ]}
              >
                {badge}
              </Text>
            </View>
          ) : null}
        </View>

        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={theme.colors.secondaryText}
        />
      </TouchableOpacity>

      {expanded && (
        <View
          style={[
            styles.content,
            {
              borderTopColor: theme.colors.separator,
            },
          ]}
        >
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  iconWrapper: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13.5,
    lineHeight: 19,
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginStart: 4,
  },
  badgeText: {
    fontSize: 9.5,
  },
  content: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    paddingTop: 4,
    borderTopWidth: 1,
  },
});
