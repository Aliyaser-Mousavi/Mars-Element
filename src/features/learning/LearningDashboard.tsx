import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LearningProgress, AchievementBadge } from '../../services/learningStorageService';
import { useTheme } from '../../theme';
import { toPersianDigits } from '../../utils/rtl';

interface LearningDashboardProps {
  progress: LearningProgress;
}

export const LearningDashboard: React.FC<LearningDashboardProps> = ({ progress }) => {
  const theme = useTheme();
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementBadge | null>(null);

  const accuracy =
    progress.totalQuestionsAnswered > 0
      ? Math.round((progress.correctAnswers / progress.totalQuestionsAnswered) * 100)
      : 0;

  const unlockedCount = progress.achievements.filter((a) => a.unlockedAt !== null).length;
  const totalAchievements = progress.achievements.length;
  const progressRatio = Math.min(progress.knownCards.length / 118, 1);

  return (
    <View style={styles.container}>
      {/* Overview Progress Card */}
      <View
        style={[
          styles.overviewCard,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.isDark ? theme.colors.border : 'rgba(38, 125, 104, 0.15)',
          },
        ]}
      >
        <View style={styles.overviewHeader}>
          <View style={styles.overviewTitleRow}>
            <View
              style={[
                styles.overviewIconCircle,
                { backgroundColor: theme.isDark ? 'rgba(38, 125, 104, 0.25)' : theme.colors.lightGreen },
              ]}
            >
              <Ionicons name="school" size={22} color={theme.colors.scientificGreen} />
            </View>
            <View>
              <Text style={[styles.overviewTitle, { color: theme.colors.primaryText }]}>
                پیشرفت جامع یادگیری
              </Text>
              <Text style={[styles.overviewSubtitle, { color: theme.colors.secondaryText }]}>
                {toPersianDigits(progress.knownCards.length)} از ۱۱۸ عنصر فراگرفته شده
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.percentPill,
              { backgroundColor: theme.isDark ? 'rgba(38, 125, 104, 0.2)' : theme.colors.lightGreen },
            ]}
          >
            <Text style={[styles.percentPillText, { color: theme.colors.scientificGreen }]}>
              {toPersianDigits(Math.round(progressRatio * 100))}٪
            </Text>
          </View>
        </View>

        {/* Visual Progress Bar */}
        <View
          style={[
            styles.progressBarTrack,
            { backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' },
          ]}
        >
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${Math.max(progressRatio * 100, 3)}%`,
                backgroundColor: theme.colors.scientificGreen,
              },
            ]}
          />
        </View>
      </View>

      {/* 4 Core Learning Metrics Grid */}
      <View style={styles.metricsGrid}>
        {/* Streak */}
        <View
          style={[
            styles.metricCard,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            },
          ]}
        >
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: theme.isDark ? 'rgba(217, 119, 6, 0.18)' : '#FEF3C7' },
            ]}
          >
            <Ionicons name="flame" size={20} color="#D97706" />
          </View>
          <Text style={[styles.metricValue, { color: theme.colors.primaryText }]}>
            {toPersianDigits(progress.currentStreakDays)} روز
          </Text>
          <Text style={[styles.metricLabel, { color: theme.colors.secondaryText }]}>
            پیوستگی مطالعه
          </Text>
        </View>

        {/* Total Quizzes */}
        <View
          style={[
            styles.metricCard,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            },
          ]}
        >
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: theme.isDark ? 'rgba(79, 70, 229, 0.18)' : '#E0E7FF' },
            ]}
          >
            <Ionicons name="clipboard-outline" size={20} color="#4F46E5" />
          </View>
          <Text style={[styles.metricValue, { color: theme.colors.primaryText }]}>
            {toPersianDigits(progress.totalQuizzes)}
          </Text>
          <Text style={[styles.metricLabel, { color: theme.colors.secondaryText }]}>
            کوییزهای انجام‌شده
          </Text>
        </View>

        {/* Accuracy */}
        <View
          style={[
            styles.metricCard,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            },
          ]}
        >
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: theme.isDark ? 'rgba(5, 150, 105, 0.18)' : '#D1FAE5' },
            ]}
          >
            <Ionicons name="checkmark-done-circle" size={20} color="#059669" />
          </View>
          <Text style={[styles.metricValue, { color: theme.colors.primaryText }]}>
            {toPersianDigits(accuracy)}٪
          </Text>
          <Text style={[styles.metricLabel, { color: theme.colors.secondaryText }]}>
            درصد درستی پاسخ‌ها
          </Text>
        </View>

        {/* Flashcards */}
        <View
          style={[
            styles.metricCard,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            },
          ]}
        >
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: theme.isDark ? 'rgba(219, 39, 119, 0.18)' : '#FCE7F3' },
            ]}
          >
            <Ionicons name="albums" size={20} color="#DB2777" />
          </View>
          <Text style={[styles.metricValue, { color: theme.colors.primaryText }]}>
            {toPersianDigits(progress.knownCards.length)}
          </Text>
          <Text style={[styles.metricLabel, { color: theme.colors.secondaryText }]}>
            کارت‌های یادگرفته‌شده
          </Text>
        </View>
      </View>

      {/* Badges / Achievements Section */}
      <View
        style={[
          styles.badgesCard,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={styles.badgesHeader}>
          <View style={styles.badgeHeaderRight}>
            <Ionicons name="trophy-outline" size={18} color={theme.colors.forestGreen} />
            <Text style={[styles.sectionTitle, { color: theme.colors.primaryText }]}>
              نشان‌ها و افتخارات
            </Text>
          </View>
          <Text style={[styles.badgeCounter, { color: theme.colors.secondaryText }]}>
            {toPersianDigits(unlockedCount)} از {toPersianDigits(totalAchievements)} باز شده
          </Text>
        </View>

        <View style={styles.badgesRow}>
          {progress.achievements.map((ach) => {
            const isUnlocked = ach.unlockedAt !== null;
            const isSelected = selectedAchievement?.id === ach.id;
            return (
              <TouchableOpacity
                key={ach.id}
                style={[
                  styles.badgeItem,
                  !isUnlocked && styles.badgeItemLocked,
                  isSelected && styles.badgeItemSelected,
                ]}
                activeOpacity={0.7}
                onPress={() => setSelectedAchievement(isSelected ? null : ach)}
              >
                <View
                  style={[
                    styles.badgeIconBox,
                    isUnlocked
                      ? [
                          styles.badgeIconUnlocked,
                          {
                            backgroundColor: theme.isDark
                              ? 'rgba(38, 125, 104, 0.25)'
                              : theme.colors.lightGreen,
                            borderColor: theme.colors.scientificGreen,
                          },
                        ]
                      : [
                          styles.badgeIconLocked,
                          {
                            backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
                            borderColor: theme.isDark ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1',
                          },
                        ],
                  ]}
                >
                  <Ionicons
                    name={ach.icon as any}
                    size={22}
                    color={
                      isUnlocked
                        ? theme.colors.scientificGreen
                        : theme.isDark
                        ? '#64748B'
                        : '#94A3B8'
                    }
                  />
                  {isUnlocked && (
                    <View style={styles.unlockedDot}>
                      <Ionicons name="checkmark" size={10} color="#FFFFFF" />
                    </View>
                  )}
                </View>
                <Text
                  style={[
                    styles.badgeTitle,
                    {
                      color: isUnlocked
                        ? theme.colors.primaryText
                        : theme.isDark
                        ? '#64748B'
                        : '#94A3B8',
                    },
                  ]}
                  numberOfLines={1}
                >
                  {ach.titleFa}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Selected Achievement Detail Sheet/Preview */}
        {selectedAchievement && (
          <View
            style={[
              styles.achievementDetailBox,
              {
                backgroundColor: theme.isDark ? 'rgba(38, 125, 104, 0.12)' : '#F0F9F5',
                borderColor: theme.isDark ? 'rgba(38, 125, 104, 0.3)' : 'rgba(38, 125, 104, 0.25)',
              },
            ]}
          >
            <View style={styles.detailHeader}>
              <Ionicons
                name={selectedAchievement.unlockedAt ? 'ribbon' : 'lock-closed'}
                size={16}
                color={selectedAchievement.unlockedAt ? theme.colors.scientificGreen : '#94A3B8'}
              />
              <Text style={[styles.detailTitle, { color: theme.colors.primaryText }]}>
                {selectedAchievement.titleFa}
              </Text>
              <Text
                style={[
                  styles.detailStatus,
                  {
                    color: selectedAchievement.unlockedAt
                      ? theme.colors.scientificGreen
                      : '#94A3B8',
                  },
                ]}
              >
                {selectedAchievement.unlockedAt ? 'کسب شده' : 'قفل شده'}
              </Text>
            </View>
            <Text style={[styles.detailDesc, { color: theme.colors.secondaryText }]}>
              {selectedAchievement.descriptionFa}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginBottom: 8,
  },
  overviewCard: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  overviewTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  overviewIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overviewTitle: {
    fontSize: 13.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  overviewSubtitle: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Regular',
    marginTop: 2,
  },
  percentPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  percentPillText: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Bold',
  },
  progressBarTrack: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
  },
  metricCard: {
    width: '48.5%',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  metricValue: {
    fontSize: 16.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  metricLabel: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Regular',
    marginTop: 2,
  },
  badgesCard: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  badgesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  badgeHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: 'Vazirmatn-Bold',
  },
  badgeCounter: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Medium',
  },
  badgesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  badgeItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeItemLocked: {
    opacity: 0.65,
  },
  badgeItemSelected: {
    transform: [{ scale: 1.05 }],
  },
  badgeIconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    marginBottom: 4,
    position: 'relative',
  },
  badgeIconUnlocked: {},
  badgeIconLocked: {},
  unlockedDot: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  badgeTitle: {
    fontSize: 9.5,
    fontFamily: 'Vazirmatn-Medium',
    textAlign: 'center',
  },
  achievementDetailBox: {
    marginTop: 12,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  detailTitle: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Bold',
    flex: 1,
  },
  detailStatus: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Medium',
  },
  detailDesc: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 18,
  },
});
