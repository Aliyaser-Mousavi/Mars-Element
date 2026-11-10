import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/theme';

export interface PeriodicHeaderProps {
  totalElementsCount: number;
  filteredCount?: number;
  onSearchPress?: () => void;
  onLearningPress?: () => void;
  onPersonalPress?: () => void;
  onToolsPress?: () => void;
  onCreatorPress?: () => void;
}

export const PeriodicHeader: React.FC<PeriodicHeaderProps> = ({
  totalElementsCount,
  filteredCount,
  onSearchPress,
  onLearningPress,
  onPersonalPress,
  onToolsPress,
  onCreatorPress,
}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <View style={styles.textContainer}>
          <Text
            style={[
              theme.typography.pageHeading,
              styles.mainTitle,
              { color: theme.colors.forestGreen },
            ]}
          >
            جدول تناوبی عناصر شیمیایی
          </Text>
          <Text
            style={[
              theme.typography.bodySmall,
              styles.subtitle,
              { color: theme.colors.secondaryText, marginTop: 2 },
            ]}
          >
            سامانه ۱۱۸ عنصر با چینش دقیق گروه‌ها و دوره‌ها
          </Text>
        </View>

        {/* Action Row */}
        <View style={styles.actionRow}>
          {onCreatorPress ? (
            <TouchableOpacity
              onPress={onCreatorPress}
              style={[
                styles.searchBtn,
                { backgroundColor: theme.colors.surface, borderColor: theme.colors.border },
              ]}
              accessibilityRole="button"
              accessibilityLabel="درباره سازنده"
            >
              <Ionicons name="person-outline" size={17} color={theme.colors.forestGreen} />
            </TouchableOpacity>
          ) : null}

          {onToolsPress ? (
            <TouchableOpacity
              onPress={onToolsPress}
              style={[
                styles.searchBtn,
                { backgroundColor: theme.colors.lightGreen, borderColor: theme.colors.border },
              ]}
              accessibilityRole="button"
              accessibilityLabel="ابزارها و محاسبه‌گر"
            >
              <Ionicons name="construct-outline" size={17} color={theme.colors.forestGreen} />
            </TouchableOpacity>
          ) : null}

          {onPersonalPress ? (
            <TouchableOpacity
              onPress={onPersonalPress}
              style={[
                styles.searchBtn,
                { backgroundColor: theme.colors.surface, borderColor: theme.colors.border },
              ]}
              accessibilityRole="button"
              accessibilityLabel="علاقه‌مندی‌ها و مقایسه"
            >
              <Ionicons name="bookmark-outline" size={17} color={theme.colors.forestGreen} />
            </TouchableOpacity>
          ) : null}

          {onLearningPress ? (
            <TouchableOpacity
              onPress={onLearningPress}
              style={[
                styles.searchBtn,
                { backgroundColor: theme.colors.lightGreen, borderColor: theme.colors.border },
              ]}
              accessibilityRole="button"
              accessibilityLabel="مرکز آموزش"
            >
              <Ionicons name="school-outline" size={17} color={theme.colors.forestGreen} />
            </TouchableOpacity>
          ) : null}

          {onSearchPress ? (
            <TouchableOpacity
              onPress={onSearchPress}
              style={[
                styles.searchBtn,
                { backgroundColor: theme.colors.surface, borderColor: theme.colors.border },
              ]}
              accessibilityRole="button"
              accessibilityLabel="جستجوی عنصر"
            >
              <Ionicons name="search-outline" size={17} color={theme.colors.scientificGreen} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  mainTitle: {
    textAlign: 'right',
  },
  subtitle: {
    textAlign: 'right',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginStart: 12,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
  },
  searchBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

