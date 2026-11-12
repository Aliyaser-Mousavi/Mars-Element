import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { QuizQuestion } from '../../services/quizGeneratorService';
import { useTheme } from '../../theme';
import { toPersianDigits } from '../../utils/rtl';

interface QuizResultViewProps {
  questions: QuizQuestion[];
  userAnswers: Record<string, string>;
  onRestart: () => void;
  onBackToDashboard: () => void;
}

export const QuizResultView: React.FC<QuizResultViewProps> = ({
  questions,
  userAnswers,
  onRestart,
  onBackToDashboard,
}) => {
  const theme = useTheme();
  const total = questions.length;
  const correctCount = questions.filter((q) => userAnswers[q.id] === q.correctAnswer).length;
  const wrongCount = total - correctCount;
  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  const isExcellent = percentage >= 80;
  const isGood = percentage >= 50;

  const badgeBg = isExcellent
    ? theme.isDark
      ? 'rgba(217, 119, 6, 0.2)'
      : '#FEF3C7'
    : isGood
    ? theme.isDark
      ? 'rgba(38, 125, 104, 0.2)'
      : theme.colors.lightGreen
    : theme.isDark
    ? 'rgba(239, 68, 68, 0.15)'
    : '#FEE2E2';

  const badgeColor = isExcellent
    ? '#D97706'
    : isGood
    ? theme.colors.scientificGreen
    : '#DC2626';

  return (
    <View style={styles.container}>
      {/* Score Summary Box */}
      <View
        style={[
          styles.scoreBox,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={[styles.trophyIcon, { backgroundColor: badgeBg }]}>
          <Ionicons
            name={isExcellent ? 'trophy' : isGood ? 'medal' : 'refresh-circle'}
            size={44}
            color={badgeColor}
          />
        </View>

        <Text style={[styles.scoreTitle, { color: theme.colors.primaryText }]}>
          {isExcellent
            ? 'عملکرد درخشان و عالی!'
            : isGood
            ? 'خوب بود! با تکرار استاد می‌شوی'
            : 'نیاز به مرور و تمرین بیشتر'}
        </Text>

        <Text style={[styles.percentageText, { color: theme.colors.scientificGreen }]}>
          {toPersianDigits(percentage)}٪
        </Text>

        {/* Breakdown Stats Badges */}
        <View style={styles.statsPillRow}>
          <View
            style={[
              styles.statPill,
              {
                backgroundColor: theme.isDark ? 'rgba(5, 150, 105, 0.18)' : '#ECFDF5',
                borderColor: '#059669',
              },
            ]}
          >
            <Ionicons name="checkmark-circle" size={16} color="#059669" />
            <Text style={[styles.statPillText, { color: '#059669' }]}>
              {toPersianDigits(correctCount)} درست
            </Text>
          </View>

          <View
            style={[
              styles.statPill,
              {
                backgroundColor: theme.isDark ? 'rgba(220, 38, 38, 0.18)' : '#FEF2F2',
                borderColor: '#DC2626',
              },
            ]}
          >
            <Ionicons name="close-circle" size={16} color="#DC2626" />
            <Text style={[styles.statPillText, { color: '#DC2626' }]}>
              {toPersianDigits(wrongCount)} نادرست
            </Text>
          </View>

          <View
            style={[
              styles.statPill,
              {
                backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Ionicons
              name="layers-outline"
              size={16}
              color={theme.colors.secondaryText}
            />
            <Text style={[styles.statPillText, { color: theme.colors.primaryText }]}>
              کل: {toPersianDigits(total)}
            </Text>
          </View>
        </View>
      </View>

      {/* Review Q&A Section */}
      <View style={styles.reviewHeaderRow}>
        <Ionicons name="reader-outline" size={18} color={theme.colors.forestGreen} />
        <Text style={[styles.reviewHeader, { color: theme.colors.primaryText }]}>
          مرور پاسخ‌ها و تحلیل علمی
        </Text>
      </View>

      <View style={styles.reviewList}>
        {questions.map((q, idx) => {
          const userAns = userAnswers[q.id];
          const isCorrect = userAns === q.correctAnswer;

          const cardBg = isCorrect
            ? theme.isDark
              ? 'rgba(5, 150, 105, 0.12)'
              : '#F0FDF4'
            : theme.isDark
            ? 'rgba(220, 38, 38, 0.12)'
            : '#FEF2F2';

          const cardBorder = isCorrect
            ? theme.isDark
              ? 'rgba(5, 150, 105, 0.35)'
              : '#A7F3D0'
            : theme.isDark
            ? 'rgba(220, 38, 38, 0.35)'
            : '#FECACA';

          return (
            <View
              key={q.id}
              style={[
                styles.reviewCard,
                {
                  backgroundColor: cardBg,
                  borderColor: cardBorder,
                },
              ]}
            >
              <View style={styles.qHeader}>
                <View style={styles.qIndexBadge}>
                  <Text style={[styles.qIndexText, { color: theme.colors.secondaryText }]}>
                    پرسش {toPersianDigits(idx + 1)}
                  </Text>
                </View>
                <View style={styles.statusBadge}>
                  <Ionicons
                    name={isCorrect ? 'checkmark-circle' : 'close-circle'}
                    size={20}
                    color={isCorrect ? '#059669' : '#DC2626'}
                  />
                  <Text
                    style={[
                      styles.statusBadgeText,
                      { color: isCorrect ? '#059669' : '#DC2626' },
                    ]}
                  >
                    {isCorrect ? 'پاسخ صحیح' : 'پاسخ نادرست'}
                  </Text>
                </View>
              </View>

              <Text style={[styles.qPrompt, { color: theme.colors.primaryText }]}>
                {q.promptFa}
              </Text>

              {/* Answers Breakdown */}
              <View
                style={[
                  styles.answersBox,
                  {
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.border,
                  },
                ]}
              >
                <View style={styles.answerRow}>
                  <Text style={[styles.ansLabel, { color: theme.colors.secondaryText }]}>
                    پاسخ شما:
                  </Text>
                  <Text
                    style={[
                      styles.ansValue,
                      { color: isCorrect ? '#059669' : '#DC2626' },
                    ]}
                  >
                    {userAns || 'بدون پاسخ'}
                  </Text>
                </View>

                {!isCorrect && (
                  <View style={[styles.answerRow, { borderTopWidth: 1, borderTopColor: theme.colors.border, paddingTop: 6, marginTop: 4 }]}>
                    <Text style={[styles.ansLabel, { color: theme.colors.secondaryText }]}>
                      پاسخ درست:
                    </Text>
                    <Text style={[styles.ansValue, { color: '#059669' }]}>
                      {q.correctAnswer}
                    </Text>
                  </View>
                )}
              </View>

              {/* Scientific Explanation */}
              <View style={styles.explanationRow}>
                <Ionicons name="information-circle-outline" size={16} color={theme.colors.scientificGreen} />
                <Text style={[styles.qExplanation, { color: theme.colors.secondaryText }]}>
                  {q.explanationFa}
                </Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* Action Buttons */}
      <View style={styles.btnRow}>
        <TouchableOpacity
          style={[styles.restartBtn, { backgroundColor: theme.colors.scientificGreen }]}
          activeOpacity={0.8}
          onPress={onRestart}
        >
          <Ionicons name="refresh" size={18} color="#FFFFFF" />
          <Text style={styles.restartBtnText}>شروع مجدد آزمون</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.dashboardBtn,
            {
              backgroundColor: theme.isDark ? 'rgba(38, 125, 104, 0.2)' : theme.colors.lightGreen,
              borderColor: theme.colors.scientificGreen,
            },
          ]}
          activeOpacity={0.8}
          onPress={onBackToDashboard}
        >
          <Text style={[styles.dashboardBtnText, { color: theme.colors.scientificGreen }]}>
            بازگشت به مرکز آموزش
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
  },
  scoreBox: {
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 2,
  },
  trophyIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  scoreTitle: {
    fontSize: 16,
    fontFamily: 'Vazirmatn-Bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  percentageText: {
    fontSize: 36,
    fontFamily: 'Vazirmatn-Bold',
    marginBottom: 12,
  },
  statsPillRow: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  statPillText: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Bold',
  },
  reviewHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  reviewHeader: {
    fontSize: 14,
    fontFamily: 'Vazirmatn-Bold',
  },
  reviewList: {
    gap: 12,
  },
  reviewCard: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
  },
  qHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  qIndexBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  qIndexText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusBadgeText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  qPrompt: {
    fontSize: 13.5,
    fontFamily: 'Vazirmatn-Bold',
    lineHeight: 22,
    marginBottom: 10,
    textAlign: 'right',
  },
  answersBox: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  answerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ansLabel: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
  },
  ansValue: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  explanationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  qExplanation: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 19,
    flex: 1,
    textAlign: 'right',
  },
  btnRow: {
    marginTop: 20,
    gap: 10,
    marginBottom: 20,
  },
  restartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 13,
    borderRadius: 10,
  },
  restartBtnText: {
    color: '#FFFFFF',
    fontSize: 13.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  dashboardBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    borderRadius: 10,
    borderWidth: 1,
  },
  dashboardBtnText: {
    fontSize: 13.5,
    fontFamily: 'Vazirmatn-Bold',
  },
});
