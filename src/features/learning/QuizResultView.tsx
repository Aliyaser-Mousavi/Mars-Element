import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { lightAppTheme } from '../../theme';
import { QuizQuestion } from '../../services/quizGeneratorService';
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
  const total = questions.length;
  const correctCount = questions.filter((q) => userAnswers[q.id] === q.correctAnswer).length;
  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  return (
    <View style={styles.container}>
      {/* Score Summary Box */}
      <View style={styles.scoreBox}>
        <View style={styles.trophyIcon}>
          <Ionicons
            name={percentage >= 70 ? 'trophy' : 'medal'}
            size={42}
            color={percentage >= 70 ? '#D97706' : lightAppTheme.colors.scientificGreen}
          />
        </View>
        <Text style={styles.scoreTitle}>
          {percentage >= 80
            ? 'عملکرد درخشان و عالی!'
            : percentage >= 50
            ? 'خوب بود! با تکرار استاد می‌شوی'
            : 'نیاز به مرور و تمرین بیشتر'}
        </Text>
        <Text style={styles.percentageText}>{toPersianDigits(percentage)}٪</Text>
        <Text style={styles.scoreDetails}>
          {toPersianDigits(correctCount)} پاسخ درست از {toPersianDigits(total)} پرسش
        </Text>
      </View>

      {/* Review Q&A List */}
      <Text style={styles.reviewHeader}>مرور پاسخ‌ها و تحلیل علمی</Text>
      <View style={styles.reviewList}>
        {questions.map((q, idx) => {
          const userAns = userAnswers[q.id];
          const isCorrect = userAns === q.correctAnswer;

          return (
            <View
              key={q.id}
              style={[styles.reviewCard, isCorrect ? styles.cardCorrect : styles.cardWrong]}
            >
              <View style={styles.qHeader}>
                <Text style={styles.qIndex}>پرسش {toPersianDigits(idx + 1)}</Text>
                <Ionicons
                  name={isCorrect ? 'checkmark-circle' : 'close-circle'}
                  size={18}
                  color={isCorrect ? '#059669' : '#DC2626'}
                />
              </View>

              <Text style={styles.qPrompt}>{q.promptFa}</Text>
              
              <View style={styles.answersRow}>
                <Text style={styles.ansLabel}>پاسخ شما:</Text>
                <Text style={[styles.ansValue, !isCorrect && styles.ansValueWrong]}>
                  {userAns || 'بدون پاسخ'}
                </Text>
              </View>

              {!isCorrect && (
                <View style={styles.answersRow}>
                  <Text style={styles.ansLabel}>پاسخ درست:</Text>
                  <Text style={[styles.ansValue, styles.ansValueCorrect]}>
                    {q.correctAnswer}
                  </Text>
                </View>
              )}

              <Text style={styles.qExplanation}>{q.explanationFa}</Text>
            </View>
          );
        })}
      </View>

      {/* CTA Buttons */}
      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.restartBtn} onPress={onRestart}>
          <Ionicons name="refresh" size={18} color="#FFFFFF" />
          <Text style={styles.restartBtnText}>شروع مجدد آزمون</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dashboardBtn} onPress={onBackToDashboard}>
          <Text style={styles.dashboardBtnText}>بازگشت به خانه آموزش</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  scoreBox: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    marginBottom: 16,
  },
  trophyIcon: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  scoreTitle: {
    fontSize: 16,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
    marginBottom: 6,
  },
  percentageText: {
    fontSize: 34,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.scientificGreen,
  },
  scoreDetails: {
    fontSize: 12.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    marginTop: 4,
  },
  reviewHeader: {
    fontSize: 13.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
    marginBottom: 10,
  },
  reviewList: {
    gap: 10,
  },
  reviewCard: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
  },
  cardCorrect: {
    borderColor: '#A7F3D0',
    backgroundColor: '#F0FDF4',
  },
  cardWrong: {
    borderColor: '#FECACA',
    backgroundColor: '#FEF2F2',
  },
  qHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  qIndex: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.secondaryText,
  },
  qPrompt: {
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
    marginBottom: 8,
  },
  answersRow: {
    flexDirection: 'row',
    gap: 6,
    marginVertical: 2,
  },
  ansLabel: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
  },
  ansValue: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  ansValueWrong: {
    color: '#DC2626',
  },
  ansValueCorrect: {
    color: '#059669',
  },
  qExplanation: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.primaryText,
    marginTop: 6,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.06)',
    lineHeight: 18,
  },
  btnRow: {
    marginTop: 18,
    gap: 8,
  },
  restartBtn: {
    backgroundColor: lightAppTheme.colors.scientificGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    borderRadius: 8,
  },
  restartBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  dashboardBtn: {
    backgroundColor: lightAppTheme.colors.lightGreen,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  dashboardBtnText: {
    color: lightAppTheme.colors.forestGreen,
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
  },
});

