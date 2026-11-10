import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { lightAppTheme } from '../../theme';

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
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        activeOpacity={0.7}
        onPress={() => setExpanded((prev) => !prev)}
      >
        <View style={styles.titleRow}>
          <Ionicons
            name={iconName}
            size={18}
            color={lightAppTheme.colors.scientificGreen}
            style={styles.icon}
          />
          <Text style={styles.title}>{title}</Text>
          {badge ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          ) : null}
        </View>

        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={lightAppTheme.colors.secondaryText}
        />
      </TouchableOpacity>

      {expanded && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: lightAppTheme.colors.surface,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    marginLeft: 2,
  },
  title: {
    fontSize: 14,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  badge: {
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 10,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.forestGreen,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: lightAppTheme.colors.border,
  },
});
