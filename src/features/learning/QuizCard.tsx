import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { QuizQuestion } from '../../services/quizGeneratorService';
import { useTheme } from '../../theme';
import { toPersianDigits } from '../../utils/rtl';

interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedOption: string | null;
  hasSubmitted: boolean;
  onSelectOption: (option: string) => void;
  onSubmit: () => void;
  onNext: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  hasSubmitted,
  onSelectOption,
  onSubmit,
  onNext,
}) => {
  const theme = useTheme();
  const progressRatio = totalQuestions > 0 ? questionNumber / totalQuestions : 0;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        },
      ]}
    >
      {/* Top Header & Progress */}
      <View style={styles.topHeader}>
        <View style={styles.counterRow}>
          <View
            style={[
              styles.stepBadge,
              { backgroundColor: theme.isDark ? 'rgba(38, 125, 104, 0.2)' : theme.colors.lightGreen },
            ]}
          >
            <Ionicons name="help-circle-outline" size={16} color={theme.colors.scientificGreen} />
            <Text style={[styles.counterText, { color: theme.colors.scientificGreen }]}>
              پرسش {toPersianDigits(questionNumber)} از {toPersianDigits(totalQuestions)}
            </Text>
          </View>

          <Text style={[styles.progressPercent, { color: theme.colors.secondaryText }]}>
            {toPersianDigits(Math.round(progressRatio * 100))}٪
          </Text>
        </View>

        {/* Progress Bar */}
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
                width: `${Math.max(progressRatio * 100, 5)}%`,
                backgroundColor: theme.colors.scientificGreen,
              },
            ]}
          />
        </View>
      </View>

      {/* Question Prompt */}
      <Text style={[styles.promptFa, { color: theme.colors.primaryText }]}>
        {question.promptFa}
      </Text>

      {/* Prominent Highlight (e.g. Chemical Symbol or Target Name) */}
      {question.highlightText && (
        <View
          style={[
            styles.highlightBox,
            {
              backgroundColor: theme.isDark ? 'rgba(38, 125, 104, 0.12)' : '#F0F9F5',
              borderColor: theme.isDark ? 'rgba(38, 125, 104, 0.35)' : theme.colors.scientificGreen,
            },
          ]}
        >
          <Text
            style={[
              styles.highlightText,
              {
                color: theme.isDark ? '#4ADE80' : theme.colors.forestGreen,
              },
            ]}
          >
            {question.highlightText}
          </Text>
        </View>
      )}

      {/* Answer Choices List */}
      <View style={styles.optionsList}>
        {question.options.map((opt, idx) => {
          const isSelected = selectedOption === opt;
          const isCorrect = opt === question.correctAnswer;

          // Determine styling based on submission & selection
          let itemBg = theme.isDark ? 'rgba(255, 255, 255, 0.04)' : '#F8FAFC';
          let itemBorder = theme.isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0';
          let badgeBg = theme.isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0';
          let badgeText = theme.colors.secondaryText;
          let textColor = theme.colors.primaryText;

          if (hasSubmitted) {
            if (isCorrect) {
              itemBg = theme.isDark ? 'rgba(5, 150, 105, 0.2)' : '#ECFDF5';
              itemBorder = '#059669';
              badgeBg = '#059669';
              badgeText = '#FFFFFF';
              textColor = theme.isDark ? '#6EE7B7' : '#047857';
            } else if (isSelected && !isCorrect) {
              itemBg = theme.isDark ? 'rgba(220, 38, 38, 0.2)' : '#FEF2F2';
              itemBorder = '#DC2626';
              badgeBg = '#DC2626';
              badgeText = '#FFFFFF';
              textColor = theme.isDark ? '#FCA5A5' : '#B91C1C';
            }
          } else if (isSelected) {
            itemBg = theme.isDark ? 'rgba(38, 125, 104, 0.2)' : '#E6F4F0';
            itemBorder = theme.colors.scientificGreen;
            badgeBg = theme.colors.scientificGreen;
            badgeText = '#FFFFFF';
            textColor = theme.isDark ? '#4ADE80' : theme.colors.forestGreen;
          }

          return (
            <TouchableOpacity
              key={`opt-${idx}`}
              style={[
                styles.optionItem,
                {
                  backgroundColor: itemBg,
                  borderColor: itemBorder,
                },
              ]}
              activeOpacity={hasSubmitted ? 1 : 0.7}
              onPress={() => !hasSubmitted && onSelectOption(opt)}
            >
              <View style={[styles.optLetterBox, { backgroundColor: badgeBg }]}>
                <Text style={[styles.optLetterText, { color: badgeText }]}>
                  {toPersianDigits(idx + 1)}
                </Text>
              </View>

              <Text style={[styles.optionText, { color: textColor }]}>
                {opt}
              </Text>

              {/* Status Icons */}
              {hasSubmitted && isCorrect && (
                <View style={styles.statusIconWrap}>
                  <Ionicons name="checkmark-circle" size={20} color="#059669" />
                </View>
              )}
              {hasSubmitted && isSelected && !isCorrect && (
                <View style={styles.statusIconWrap}>
                  <Ionicons name="close-circle" size={20} color="#DC2626" />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Explanation when submitted */}
      {hasSubmitted && (
        <View
          style={[
            styles.explanationBox,
            {
              backgroundColor: theme.isDark ? 'rgba(38, 125, 104, 0.12)' : '#F0F9F5',
              borderRightColor: theme.colors.scientificGreen,
            },
          ]}
        >
          <View style={styles.explanationHeader}>
            <Ionicons name="bulb-outline" size={18} color={theme.colors.scientificGreen} />
            <Text style={[styles.explanationTitle, { color: theme.colors.primaryText }]}>
              تحلیل علمی پاسخ:
            </Text>
          </View>
          <Text style={[styles.explanationText, { color: theme.colors.secondaryText }]}>
            {question.explanationFa}
          </Text>
        </View>
      )}

      {/* Bottom CTA Row */}
      <View style={styles.actionRow}>
        {!hasSubmitted ? (
          <TouchableOpacity
            style={[
              styles.submitBtn,
              {
                backgroundColor: selectedOption
                  ? theme.colors.scientificGreen
                  : theme.isDark
                  ? 'rgba(255, 255, 255, 0.1)'
                  : '#CBD5E1',
              },
            ]}
            disabled={!selectedOption}
            activeOpacity={0.8}
            onPress={onSubmit}
          >
            <Text
              style={[
                styles.submitBtnText,
                { color: selectedOption ? '#FFFFFF' : theme.isDark ? '#64748B' : '#94A3B8' },
              ]}
            >
              بررسی پاسخ
            </Text>
            <Ionicons
              name="checkmark"
              size={18}
              color={selectedOption ? '#FFFFFF' : theme.isDark ? '#64748B' : '#94A3B8'}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.nextBtn, { backgroundColor: theme.colors.forestGreen }]}
            activeOpacity={0.8}
            onPress={onNext}
          >
            <Text style={styles.nextBtnText}>
              {questionNumber < totalQuestions ? 'پرسش بعدی' : 'مشاهده کارنامه آزمون'}
            </Text>
            <Ionicons name="arrow-back-outline" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  topHeader: {
    marginBottom: 14,
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  counterText: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Bold',
  },
  progressPercent: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Medium',
  },
  progressBarTrack: {
    height: 5,
    borderRadius: 2.5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 2.5,
  },
  promptFa: {
    fontSize: 15,
    fontFamily: 'Vazirmatn-Bold',
    lineHeight: 24,
    marginBottom: 12,
    textAlign: 'right',
  },
  highlightBox: {
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  highlightText: {
    fontSize: 38,
    fontFamily: 'System',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  optionsList: {
    gap: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1.5,
    gap: 12,
  },
  optLetterBox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optLetterText: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Bold',
  },
  optionText: {
    fontSize: 13.5,
    fontFamily: 'Vazirmatn-Medium',
    flex: 1,
    textAlign: 'right',
  },
  statusIconWrap: {
    marginLeft: 4,
  },
  explanationBox: {
    marginTop: 16,
    borderRadius: 10,
    padding: 12,
    borderRightWidth: 4,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  explanationTitle: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  explanationText: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 20,
    textAlign: 'right',
  },
  actionRow: {
    marginTop: 16,
  },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 13,
    borderRadius: 10,
  },
  submitBtnText: {
    fontSize: 13.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 13,
    borderRadius: 10,
  },
  nextBtnText: {
    color: '#FFFFFF',
    fontSize: 13.5,
    fontFamily: 'Vazirmatn-Bold',
  },
});
