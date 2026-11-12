import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/theme';
import { toPersianDigits } from '@/utils/rtl';

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
      {/* Top Identity Row */}
      <View style={styles.topRow}>
        {/* Brand Title & Subtitle */}
        <View style={styles.brandContainer}>
          <View style={styles.titleWithEmblem}>
            <View
              style={[
                styles.emblemBox,
                {
                  backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.lightGreen,
                  borderColor: theme.isDark ? theme.colors.border : `${theme.colors.scientificGreen}30`,
                },
              ]}
            >
              <Ionicons
                name="nuclear"
                size={16}
                color={theme.colors.scientificGreen}
              />
            </View>

            <View>
              <Text
                style={[
                  styles.brandTitle,
                  {
                    color: theme.isDark ? theme.colors.primaryText : theme.colors.forestGreen,
                    fontFamily: theme.fontFamily.persianBold,
                  },
                ]}
              >
                مارس المنت
              </Text>
              <View style={styles.metaRow}>
                <Text
                  style={[
                    styles.brandSubtitle,
                    {
                      color: theme.colors.secondaryText,
                      fontFamily: theme.fontFamily.persianRegular,
                    },
                  ]}
                >
                  جدول تناوبی عناصر
                </Text>
                <View style={[styles.metaDot, { backgroundColor: theme.colors.secondaryText }]} />
                <View
                  style={[
                    styles.countPill,
                    {
                      backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}20` : theme.colors.lightGreen,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.countText,
                      {
                        color: theme.colors.scientificGreen,
                        fontFamily: theme.fontFamily.persianBold,
                      },
                    ]}
                  >
                    {toPersianDigits(filteredCount ?? totalElementsCount)} عنصر
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Search Action */}
        {onSearchPress ? (
          <TouchableOpacity
            style={[
              styles.searchTriggerBtn,
              {
                backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.surface,
                borderColor: theme.isDark ? theme.colors.border : theme.colors.cardBorder,
              },
            ]}
            onPress={onSearchPress}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel="جستجوی سریع در عناصر"
          >
            <Ionicons name="search" size={16} color={theme.colors.scientificGreen} />
            <Text
              style={[
                styles.searchBtnText,
                {
                  color: theme.colors.primaryText,
                  fontFamily: theme.fontFamily.persianMedium,
                },
              ]}
            >
              جستجو
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Navigation Quick Access Bar */}
      <View style={styles.navBar}>
        {onLearningPress ? (
          <TouchableOpacity
            style={[
              styles.navItem,
              {
                backgroundColor: theme.isDark ? theme.colors.card : theme.colors.surface,
                borderColor: theme.colors.cardBorder,
              },
            ]}
            onPress={onLearningPress}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel="مرکز آموزش شیمی"
          >
            <View
              style={[
                styles.navIconBox,
                { backgroundColor: theme.isDark ? `${theme.colors.oceanBlue}20` : '#EBF3F8' },
              ]}
            >
              <Ionicons name="school-outline" size={15} color={theme.colors.oceanBlue} />
            </View>
            <Text
              style={[
                styles.navLabel,
                {
                  color: theme.colors.primaryText,
                  fontFamily: theme.fontFamily.persianMedium,
                },
              ]}
            >
              آموزش
            </Text>
          </TouchableOpacity>
        ) : null}

        {onPersonalPress ? (
          <TouchableOpacity
            style={[
              styles.navItem,
              {
                backgroundColor: theme.isDark ? theme.colors.card : theme.colors.surface,
                borderColor: theme.colors.cardBorder,
              },
            ]}
            onPress={onPersonalPress}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel="علاقه‌مندی‌ها و مقایسه عناصر"
          >
            <View
              style={[
                styles.navIconBox,
                { backgroundColor: theme.isDark ? `${theme.colors.goldenAccent}20` : '#FEF6E9' },
              ]}
            >
              <Ionicons name="bookmark-outline" size={15} color={theme.colors.goldenAccent} />
            </View>
            <Text
              style={[
                styles.navLabel,
                {
                  color: theme.colors.primaryText,
                  fontFamily: theme.fontFamily.persianMedium,
                },
              ]}
            >
              نشان‌شده‌ها
            </Text>
          </TouchableOpacity>
        ) : null}

        {onToolsPress ? (
          <TouchableOpacity
            style={[
              styles.navItem,
              {
                backgroundColor: theme.isDark ? theme.colors.card : theme.colors.surface,
                borderColor: theme.colors.cardBorder,
              },
            ]}
            onPress={onToolsPress}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel="ابزارها و محاسبه‌گر شیمی"
          >
            <View
              style={[
                styles.navIconBox,
                { backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}20` : theme.colors.lightGreen },
              ]}
            >
              <Ionicons name="calculator-outline" size={15} color={theme.colors.scientificGreen} />
            </View>
            <Text
              style={[
                styles.navLabel,
                {
                  color: theme.colors.primaryText,
                  fontFamily: theme.fontFamily.persianMedium,
                },
              ]}
            >
              ابزارها
            </Text>
          </TouchableOpacity>
        ) : null}

        {onCreatorPress ? (
          <TouchableOpacity
            style={[
              styles.navItem,
              {
                backgroundColor: theme.isDark ? theme.colors.card : theme.colors.surface,
                borderColor: theme.colors.cardBorder,
              },
            ]}
            onPress={onCreatorPress}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel="درباره سازنده"
          >
            <View
              style={[
                styles.navIconBox,
                { backgroundColor: theme.isDark ? `${theme.colors.purple}20` : '#F4EFF9' },
              ]}
            >
              <Ionicons name="person-outline" size={15} color={theme.colors.purple} />
            </View>
            <Text
              style={[
                styles.navLabel,
                {
                  color: theme.colors.primaryText,
                  fontFamily: theme.fontFamily.persianMedium,
                },
              ]}
            >
              سازنده
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 4,
    gap: 8,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandContainer: {
    flex: 1,
  },
  titleWithEmblem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  emblemBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandTitle: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'right',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 1,
  },
  brandSubtitle: {
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'right',
  },
  metaDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    opacity: 0.5,
  },
  countPill: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 8,
  },
  countText: {
    fontSize: 10,
    lineHeight: 14,
  },
  searchTriggerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
  },
  searchBtnText: {
    fontSize: 12,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  navItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 6,
    borderRadius: 10,
    borderWidth: 1,
    gap: 6,
  },
  navIconBox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 11,
    textAlign: 'center',
  },
});
