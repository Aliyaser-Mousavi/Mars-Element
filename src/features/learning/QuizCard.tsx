import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { lightAppTheme } from '../../theme';
import { QuizQuestion } from '../../services/quizGeneratorService';
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
  return (
    <View style={styles.card}>
      {/* Question Counter & Badge */}
      <View style={styles.topRow}>
        <Text style={styles.counterText}>
          پرسش {toPersianDigits(questionNumber)} از {toPersianDigits(totalQuestions)}
        </Text>
      </View>

      {/* Question Prompt */}
      <Text style={styles.promptFa}>{question.promptFa}</Text>

      {/* Prominent Highlight if any (e.g. Chemical Symbol) */}
      {question.highlightText && (
        <View style={styles.highlightBox}>
          <Text style={styles.highlightText}>{question.highlightText}</Text>
        </View>
      )}

      {/* Options List */}
      <View style={styles.optionsList}>
        {question.options.map((opt, idx) => {
          const isSelected = selectedOption === opt;
          const isCorrect = opt === question.correctAnswer;
          
          const optStyle: StyleProp<ViewStyle>[] = [styles.optionItem];
          const textStyle: StyleProp<TextStyle>[] = [styles.optionText];

          if (hasSubmitted) {
            if (isCorrect) {
              optStyle.push(styles.optionCorrect);
              textStyle.push(styles.optionTextCorrect);
            } else if (isSelected && !isCorrect) {
              optStyle.push(styles.optionWrong);
              textStyle.push(styles.optionTextWrong);
            }
          } else if (isSelected) {
            optStyle.push(styles.optionSelected);
            textStyle.push(styles.optionTextSelected);
          }

          return (
            <TouchableOpacity
              key={`opt-${idx}`}
              style={optStyle}
              activeOpacity={hasSubmitted ? 1 : 0.7}
              onPress={() => !hasSubmitted && onSelectOption(opt)}
            >
              <View style={styles.optLetterBox}>
                <Text style={styles.optLetterText}>{toPersianDigits(idx + 1)}</Text>
              </View>
              <Text style={textStyle}>{opt}</Text>
              {hasSubmitted && isCorrect && (
                <Ionicons name="checkmark-circle" size={18} color="#059669" style={{ marginRight: 'auto' }} />
              )}
              {hasSubmitted && isSelected && !isCorrect && (
                <Ionicons name="close-circle" size={18} color="#DC2626" style={{ marginRight: 'auto' }} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Explanation when submitted */}
      {hasSubmitted && (
        <View style={styles.explanationBox}>
          <View style={styles.explanationHeader}>
            <Ionicons name="bulb-outline" size={16} color={lightAppTheme.colors.forestGreen} />
            <Text style={styles.explanationTitle}>تحلیل علمی پاسخ:</Text>
          </View>
          <Text style={styles.explanationText}>{question.explanationFa}</Text>
        </View>
      )}

      {/* Bottom CTA */}
      <View style={styles.actionRow}>
        {!hasSubmitted ? (
          <TouchableOpacity
            style={[styles.submitBtn, !selectedOption && styles.submitBtnDisabled]}
            disabled={!selectedOption}
            onPress={onSubmit}
          >
            <Text style={styles.submitBtnText}>بررسی پاسخ</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.nextBtn} onPress={onNext}>
            <Text style={styles.nextBtnText}>
              {questionNumber < totalQuestions ? 'پرسش بعدی' : 'مشاهده نتایج آزمون'}
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
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 16,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    marginVertical: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  counterText: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.secondaryText,
  },
  promptFa: {
    fontSize: 14.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
    lineHeight: 22,
    marginBottom: 12,
  },
  highlightBox: {
    backgroundColor: '#F0F9F5',
    borderWidth: 1.5,
    borderColor: lightAppTheme.colors.scientificGreen,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  highlightText: {
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: 'bold',
    color: lightAppTheme.colors.forestGreen,
  },
  optionsList: {
    gap: 8,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 10,
  },
  optionSelected: {
    backgroundColor: '#E6F4F0',
    borderColor: lightAppTheme.colors.scientificGreen,
  },
  optionCorrect: {
    backgroundColor: '#ECFDF5',
    borderColor: '#059669',
  },
  optionWrong: {
    backgroundColor: '#FEF2F2',
    borderColor: '#DC2626',
  },
  optLetterBox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optLetterText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  optionText: {
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
  },
  optionTextSelected: {
    color: lightAppTheme.colors.forestGreen,
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  optionTextCorrect: {
    color: '#059669',
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  optionTextWrong: {
    color: '#DC2626',
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  explanationBox: {
    marginTop: 14,
    backgroundColor: '#F0F9F5',
    borderRadius: 8,
    padding: 10,
    borderRightWidth: 3,
    borderRightColor: lightAppTheme.colors.scientificGreen,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  explanationTitle: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
  },
  explanationText: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.primaryText,
    lineHeight: 18,
  },
  actionRow: {
    marginTop: 14,
  },
  submitBtn: {
    backgroundColor: lightAppTheme.colors.scientificGreen,
    paddingVertical: 12,
    borderRadius: lightAppTheme.borderRadius.sm,
    alignItems: 'center',
  },
  submitBtnDisabled: {
    backgroundColor: '#CBD5E1',
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  nextBtn: {
    backgroundColor: lightAppTheme.colors.forestGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    borderRadius: lightAppTheme.borderRadius.sm,
  },
  nextBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
});
