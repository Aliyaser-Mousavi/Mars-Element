import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScreenContainer } from '../components';
import {
  FlashcardView,
  LearningDashboard,
  MatchingGameView,
  QuizCard,
  QuizResultView,
} from '../features/learning';
import { elementRepository } from '../services/elementService';
import {
  LearningProgress,
  learningProgressStorage,
} from '../services/learningStorageService';
import {
  DifficultyLevel,
  QuizQuestion,
  QuizType,
  generateQuizQuestions,
} from '../services/quizGeneratorService';
import { useTheme } from '../theme';
import { toPersianDigits } from '../utils/rtl';

type ActiveMode = 'home' | 'quiz' | 'flashcards' | 'game' | 'results';

interface QuizTypeItem {
  id: QuizType;
  titleFa: string;
  descFa: string;
  icon: string;
  tagFa: string;
}

const QUIZ_TYPES: QuizTypeItem[] = [
  {
    id: 'guess-element',
    titleFa: 'حدس نام عنصر',
    descFa: 'مشاهده نماد شیمیایی و انتخاب نام فارسی دقیق',
    icon: 'text-outline',
    tagFa: 'نام‌شناسی',
  },
  {
    id: 'guess-symbol',
    titleFa: 'حدس نماد شیمیایی',
    descFa: 'مشاهده نام فارسی و انتخاب نماد استاندارد لاتین',
    icon: 'flask-outline',
    tagFa: 'نمادها',
  },
  {
    id: 'atomic-number',
    titleFa: 'چالش عدد اتمی',
    descFa: 'تشخیص تعداد پروتون‌های هسته و شماره اتمی (Z)',
    icon: 'nuclear-outline',
    tagFa: 'هسته و پروتون',
  },
  {
    id: 'family',
    titleFa: 'شناسایی خانواده و گروه',
    descFa: 'تعیین دسته‌بندی شیمیایی، فلزات، گازهای نجیب و...',
    icon: 'shapes-outline',
    tagFa: 'دسته‌بندی',
  },
  {
    id: 'electron-distribution',
    titleFa: 'توزیع لایه‌ای الکترون‌ها',
    descFa: 'تشخیص آرایش الکترونی لایه‌های اصلی K تا Q',
    icon: 'layers-outline',
    tagFa: 'کوانتومی',
  },
  {
    id: 'period-group',
    titleFa: 'موقعیت دوره و گروه',
    descFa: 'تشخیص سطر تناوب و ستون گروه در جدول تناوبی',
    icon: 'grid-outline',
    tagFa: 'مختصات جدول',
  },
];

const DIFFICULTY_LEVELS: { id: DifficultyLevel; label: string; sub: string }[] = [
  { id: 'beginner', label: 'مقدماتی', sub: '۲۰ عنصر اول' },
  { id: 'intermediate', label: 'متوسط', sub: '۵۶ عنصر' },
  { id: 'advanced', label: 'پیشرفته', sub: 'کل ۱۱۸ عنصر' },
];

export default function LearningScreen() {
  const router = useRouter();
  const theme = useTheme();

  const [mode, setMode] = useState<ActiveMode>('home');
  const [progress, setProgress] = useState<LearningProgress | null>(null);

  // Quiz setup & state
  const [selectedQuizType, setSelectedQuizType] = useState<QuizType>('guess-element');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('beginner');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  // Flashcards state
  const [allElements] = useState(() => elementRepository.getAllElements());
  const [cardIdx, setCardIdx] = useState(0);

  // Load progress on mount
  useEffect(() => {
    learningProgressStorage.getProgress().then(setProgress);
  }, []);

  const refreshProgress = async () => {
    const updated = await learningProgressStorage.getProgress();
    setProgress(updated);
  };

  // Start a Quiz
  const handleStartQuiz = (type: QuizType) => {
    setSelectedQuizType(type);
    const generated = generateQuizQuestions(type, difficulty, 5);
    setQuestions(generated);
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setUserAnswers({});
    setMode('quiz');
  };

  const handleSelectOption = (opt: string) => {
    setSelectedOption(opt);
  };

  const handleSubmitQuestion = () => {
    if (!selectedOption) return;
    const currentQ = questions[currentQuestionIdx];
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: selectedOption }));
    setHasSubmitted(true);
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
    } else {
      // Quiz finished -> Record results
      const correctCount = questions.filter(
        (q) => userAnswers[q.id] === q.correctAnswer
      ).length;
      await learningProgressStorage.recordQuizResult(questions.length, correctCount);
      await refreshProgress();
      setMode('results');
    }
  };

  // Flashcard Actions
  const handleMarkKnownCard = async () => {
    const el = allElements[cardIdx];
    await learningProgressStorage.markFlashcardKnown(el.identity.atomicNumber);
    await refreshProgress();
  };

  return (
    <ScreenContainer scrollable={mode === 'home' || mode === 'results'}>
      {/* Top Header Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[
            styles.backBtn,
            {
              backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.08)' : theme.colors.lightGreen,
              borderColor: theme.colors.border,
            },
          ]}
          onPress={() => {
            if (mode !== 'home') {
              setMode('home');
            } else {
              router.replace('/');
            }
          }}
          activeOpacity={0.7}
        >
          <Ionicons
            name="arrow-forward-outline"
            size={16}
            color={theme.colors.forestGreen}
          />
          <Text style={[styles.backText, { color: theme.colors.forestGreen }]}>
            {mode === 'home' ? 'جدول تناوبی' : 'خانه آموزش'}
          </Text>
        </TouchableOpacity>

        <View style={styles.titleWrap}>
          <Text style={[styles.screenTitle, { color: theme.colors.primaryText }]}>
            مرکز آموزش شیمی
          </Text>
          <Text style={[styles.screenSubtitle, { color: theme.colors.secondaryText }]}>
            یادگیری تعاملی و خودآزمایی
          </Text>
        </View>

        <View
          style={[
            styles.streakBadgeTop,
            {
              backgroundColor: theme.isDark ? 'rgba(217, 119, 6, 0.18)' : '#FEF3C7',
            },
          ]}
        >
          <Ionicons name="flame" size={16} color="#D97706" />
          <Text style={styles.streakBadgeText}>
            {toPersianDigits(progress?.currentStreakDays ?? 1)}
          </Text>
        </View>
      </View>

      {/* MODE 1: Learning Home Dashboard & Menus */}
      {mode === 'home' && progress && (
        <View style={styles.homeContainer}>
          <LearningDashboard progress={progress} />

          {/* Quick Interactive Modes (Flashcards & Matching Game) */}
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="sparkles" size={16} color={theme.colors.forestGreen} />
            <Text style={[styles.sectionHeader, { color: theme.colors.primaryText }]}>
              فعالیت‌های یادگیری تعاملی
            </Text>
          </View>

          <View style={styles.interactiveGrid}>
            {/* Flashcards */}
            <TouchableOpacity
              style={[
                styles.interactiveCard,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                },
              ]}
              activeOpacity={0.8}
              onPress={() => {
                setCardIdx(0);
                setMode('flashcards');
              }}
            >
              <View
                style={[
                  styles.interactiveIcon,
                  { backgroundColor: theme.isDark ? 'rgba(219, 39, 119, 0.18)' : '#FCE7F3' },
                ]}
              >
                <Ionicons name="albums-outline" size={24} color="#DB2777" />
              </View>
              <Text style={[styles.interactiveTitle, { color: theme.colors.primaryText }]}>
                فلش‌کارت‌های عناصر
              </Text>
              <Text style={[styles.interactiveDesc, { color: theme.colors.secondaryText }]}>
                مرور پشت و روی ۱۱۸ عنصر شیمیایی
              </Text>
              <View style={styles.cardActionPill}>
                <Text style={styles.actionPillText}>شروع مرور</Text>
                <Ionicons name="arrow-back" size={12} color={theme.colors.scientificGreen} />
              </View>
            </TouchableOpacity>

            {/* Matching Game */}
            <TouchableOpacity
              style={[
                styles.interactiveCard,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                },
              ]}
              activeOpacity={0.8}
              onPress={() => setMode('game')}
            >
              <View
                style={[
                  styles.interactiveIcon,
                  { backgroundColor: theme.isDark ? 'rgba(217, 119, 6, 0.18)' : '#FEF3C7' },
                ]}
              >
                <Ionicons name="game-controller-outline" size={24} color="#D97706" />
              </View>
              <Text style={[styles.interactiveTitle, { color: theme.colors.primaryText }]}>
                بازی جفت‌سازی سریع
              </Text>
              <Text style={[styles.interactiveDesc, { color: theme.colors.secondaryText }]}>
                تطبیق سرعتی نام و نمادهای شیمیایی
              </Text>
              <View style={styles.cardActionPill}>
                <Text style={styles.actionPillText}>شروع بازی</Text>
                <Ionicons name="arrow-back" size={12} color={theme.colors.scientificGreen} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Difficulty Level Switcher */}
          <View
            style={[
              styles.difficultyCard,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <View style={styles.diffHeaderRow}>
              <Ionicons name="speedometer-outline" size={16} color={theme.colors.forestGreen} />
              <Text style={[styles.diffSectionTitle, { color: theme.colors.primaryText }]}>
                سطح دشواری آزمون‌ها
              </Text>
            </View>

            <View style={styles.diffRow}>
              {DIFFICULTY_LEVELS.map((lvl) => {
                const active = difficulty === lvl.id;
                return (
                  <TouchableOpacity
                    key={lvl.id}
                    style={[
                      styles.diffBtn,
                      {
                        backgroundColor: active
                          ? theme.colors.scientificGreen
                          : theme.isDark
                          ? 'rgba(255, 255, 255, 0.05)'
                          : '#F8FAFC',
                        borderColor: active
                          ? theme.colors.scientificGreen
                          : theme.colors.border,
                      },
                    ]}
                    activeOpacity={0.7}
                    onPress={() => setDifficulty(lvl.id)}
                  >
                    <Text
                      style={[
                        styles.diffBtnLabel,
                        {
                          color: active ? '#FFFFFF' : theme.colors.primaryText,
                        },
                      ]}
                    >
                      {lvl.label}
                    </Text>
                    <Text
                      style={[
                        styles.diffBtnSub,
                        {
                          color: active ? 'rgba(255, 255, 255, 0.85)' : theme.colors.secondaryText,
                        },
                      ]}
                    >
                      {lvl.sub}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Quiz Modules Grid */}
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="school-outline" size={16} color={theme.colors.forestGreen} />
            <Text style={[styles.sectionHeader, { color: theme.colors.primaryText }]}>
              آزمون‌های موضوعی شیمی
            </Text>
          </View>

          <View style={styles.quizList}>
            {QUIZ_TYPES.map((qt) => (
              <TouchableOpacity
                key={qt.id}
                style={[
                  styles.quizRowCard,
                  {
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.border,
                  },
                ]}
                activeOpacity={0.7}
                onPress={() => handleStartQuiz(qt.id)}
              >
                <View
                  style={[
                    styles.quizIconBox,
                    {
                      backgroundColor: theme.isDark
                        ? 'rgba(38, 125, 104, 0.2)'
                        : theme.colors.lightGreen,
                    },
                  ]}
                >
                  <Ionicons
                    name={qt.icon as any}
                    size={22}
                    color={theme.colors.scientificGreen}
                  />
                </View>

                <View style={styles.quizInfoCol}>
                  <View style={styles.quizTitleRow}>
                    <Text style={[styles.quizTitle, { color: theme.colors.primaryText }]}>
                      {qt.titleFa}
                    </Text>
                    <View
                      style={[
                        styles.quizTagBadge,
                        {
                          backgroundColor: theme.isDark
                            ? 'rgba(255, 255, 255, 0.06)'
                            : 'rgba(0, 0, 0, 0.04)',
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.quizTagText,
                          { color: theme.colors.secondaryText },
                        ]}
                      >
                        {qt.tagFa}
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.quizDesc, { color: theme.colors.secondaryText }]}>
                    {qt.descFa}
                  </Text>
                </View>

                <Ionicons
                  name="chevron-back"
                  size={18}
                  color={theme.colors.secondaryText}
                />
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ height: 40 }} />
        </View>
      )}

      {/* MODE 2: Active Quiz Card */}
      {mode === 'quiz' && questions.length > 0 && (
        <QuizCard
          question={questions[currentQuestionIdx]}
          questionNumber={currentQuestionIdx + 1}
          totalQuestions={questions.length}
          selectedOption={selectedOption}
          hasSubmitted={hasSubmitted}
          onSelectOption={handleSelectOption}
          onSubmit={handleSubmitQuestion}
          onNext={handleNextQuestion}
        />
      )}

      {/* MODE 3: Quiz Results Screen */}
      {mode === 'results' && (
        <QuizResultView
          questions={questions}
          userAnswers={userAnswers}
          onRestart={() => handleStartQuiz(selectedQuizType)}
          onBackToDashboard={() => setMode('home')}
        />
      )}

      {/* MODE 4: Flashcards */}
      {mode === 'flashcards' && (
        <FlashcardView
          element={allElements[cardIdx]}
          isKnown={
            progress
              ? progress.knownCards.includes(allElements[cardIdx].identity.atomicNumber)
              : false
          }
          onMarkKnown={handleMarkKnownCard}
          onNext={() =>
            setCardIdx((prev) => (prev < allElements.length - 1 ? prev + 1 : 0))
          }
          onPrev={() =>
            setCardIdx((prev) => (prev > 0 ? prev - 1 : allElements.length - 1))
          }
          currentIndex={cardIdx}
          totalCards={allElements.length}
        />
      )}

      {/* MODE 5: Interactive Game */}
      {mode === 'game' && (
        <MatchingGameView
          onBack={() => setMode('home')}
          onFinish={async (_score) => {
            await learningProgressStorage.recordQuizResult(6, 6);
            await refreshProgress();
            setMode('home');
          }}
        />
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 8,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  backText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  titleWrap: {
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 15,
    fontFamily: 'Vazirmatn-Bold',
  },
  screenSubtitle: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Regular',
    marginTop: 1,
  },
  streakBadgeTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 14,
  },
  streakBadgeText: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Bold',
    color: '#D97706',
  },
  homeContainer: {
    paddingBottom: 20,
    gap: 12,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 13.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  interactiveGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  interactiveCard: {
    flex: 1,
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  interactiveIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  interactiveTitle: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
    textAlign: 'center',
  },
  interactiveDesc: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Regular',
    textAlign: 'center',
    marginTop: 3,
    lineHeight: 16,
  },
  cardActionPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  actionPillText: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Bold',
    color: '#267D68',
  },
  difficultyCard: {
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    gap: 8,
  },
  diffHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  diffSectionTitle: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  diffRow: {
    flexDirection: 'row',
    gap: 6,
  },
  diffBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1.5,
  },
  diffBtnLabel: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  diffBtnSub: {
    fontSize: 9.5,
    fontFamily: 'Vazirmatn-Regular',
    marginTop: 2,
  },
  quizList: {
    gap: 8,
  },
  quizRowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  quizIconBox: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizInfoCol: {
    flex: 1,
  },
  quizTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexWrap: 'wrap',
  },
  quizTitle: {
    fontSize: 13.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  quizTagBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  quizTagText: {
    fontSize: 9.5,
    fontFamily: 'Vazirmatn-Medium',
  },
  quizDesc: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Regular',
    marginTop: 2,
  },
});
