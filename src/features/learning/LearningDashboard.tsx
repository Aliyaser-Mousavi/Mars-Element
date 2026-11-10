import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LearningProgress } from "../../services/learningStorageService";
import { lightAppTheme } from "../../theme";
import { toPersianDigits } from "../../utils/rtl";

interface LearningDashboardProps {
  progress: LearningProgress;
}

export const LearningDashboard: React.FC<LearningDashboardProps> = ({
  progress,
}) => {
  const accuracy =
    progress.totalQuestionsAnswered > 0
      ? Math.round(
          (progress.correctAnswers / progress.totalQuestionsAnswered) * 100,
        )
      : 0;

  return (
    <View style={styles.container}>
      {/* Metrics Row */}
      <View style={styles.metricsGrid}>
        {/* Streak */}
        <View style={styles.metricCard}>
          <View style={[styles.iconCircle, { backgroundColor: "#FEF3C7" }]}>
            <Ionicons name="flame" size={20} color="#D97706" />
          </View>
          <Text style={styles.metricValue}>
            {toPersianDigits(progress.currentStreakDays)} روز
          </Text>
          <Text style={styles.metricLabel}>پیوستگی مطالعه</Text>
        </View>

        {/* Total Quizzes */}
        <View style={styles.metricCard}>
          <View style={[styles.iconCircle, { backgroundColor: "#E0E7FF" }]}>
            <Ionicons name="school" size={20} color="#4F46E5" />
          </View>
          <Text style={styles.metricValue}>
            {toPersianDigits(progress.totalQuizzes)}
          </Text>
          <Text style={styles.metricLabel}>کوییزهای تکمیل‌شده</Text>
        </View>

        {/* Accuracy */}
        <View style={styles.metricCard}>
          <View style={[styles.iconCircle, { backgroundColor: "#D1FAE5" }]}>
            <Ionicons name="checkmark-done-circle" size={20} color="#059669" />
          </View>
          <Text style={styles.metricValue}>{toPersianDigits(accuracy)}٪</Text>
          <Text style={styles.metricLabel}>درصد درستی پاسخ‌ها</Text>
        </View>

        {/* Flashcards */}
        <View style={styles.metricCard}>
          <View style={[styles.iconCircle, { backgroundColor: "#FCE7F3" }]}>
            <Ionicons name="albums" size={20} color="#DB2777" />
          </View>
          <Text style={styles.metricValue}>
            {toPersianDigits(progress.knownCards.length)}
          </Text>
          <Text style={styles.metricLabel}>کارت‌های یادگرفته‌شده</Text>
        </View>
      </View>

      {/* Badges / Achievements Horizontal Showcase */}
      <View style={styles.badgesSection}>
        <Text style={styles.sectionTitle}>نشان‌ها و دستاوردها</Text>
        <View style={styles.badgesRow}>
          {progress.achievements.map((ach) => {
            const isUnlocked = ach.unlockedAt !== null;
            return (
              <View
                key={ach.id}
                style={[
                  styles.badgeItem,
                  !isUnlocked && styles.badgeItemLocked,
                ]}
              >
                <View
                  style={[
                    styles.badgeIconBox,
                    isUnlocked
                      ? styles.badgeIconUnlocked
                      : styles.badgeIconLocked,
                  ]}
                >
                  <Ionicons
                    name={ach.icon as any}
                    size={22}
                    color={
                      isUnlocked ? lightAppTheme.colors.forestGreen : "#9CA3AF"
                    }
                  />
                </View>
                <Text
                  style={[
                    styles.badgeTitle,
                    !isUnlocked && { color: "#9CA3AF" },
                  ]}
                  numberOfLines={1}
                >
                  {ach.titleFa}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 14,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    marginBottom: 14,
  },
  metricsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "space-between",
  },
  metricCard: {
    width: "48%",
    backgroundColor: "#F8FAFC",
    borderRadius: lightAppTheme.borderRadius.sm,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  metricValue: {
    fontSize: 16,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  metricLabel: {
    fontSize: 10.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    marginTop: 2,
  },
  badgesSection: {
    marginTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 12.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
    marginBottom: 8,
  },
  badgesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
  },
  badgeItem: {
    alignItems: "center",
    flex: 1,
  },
  badgeItemLocked: {
    opacity: 0.6,
  },
  badgeIconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    marginBottom: 4,
  },
  badgeIconUnlocked: {
    backgroundColor: lightAppTheme.colors.lightGreen,
    borderColor: lightAppTheme.colors.scientificGreen,
  },
  badgeIconLocked: {
    backgroundColor: "#F3F4F6",
    borderColor: "#D1D5DB",
  },
  badgeTitle: {
    fontSize: 9.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
    textAlign: "center",
  },
});
