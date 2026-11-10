import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContainer } from '../components';
import { lightAppTheme } from '../theme';
import { elementRepository } from '../services/elementService';
import {
  learningProgressStorage,
  LearningProgress,
} from '../services/learningStorageService';
import {
  generateQuizQuestions,
  QuizQuestion,
  QuizType,
  DifficultyLevel,
} from '../services/quizGeneratorService';
import {
  LearningDashboard,
  FlashcardView,
  QuizCard,
  QuizResultView,
  MatchingGameView,
} from '../features/learning';

type ActiveMode = 'home' | 'quiz' | 'flashcards' | 'game' | 'results';

const QUIZ_TYPES: { id: QuizType; titleFa: string; descFa: string; icon: string }[] = [
  {
    id: 'guess-element',
    titleFa: 'حدس نام عنصر',
    descFa: 'مشاهده نماد شیمیایی و انتخاب نام فارسی دقیق',
    icon: 'text-outline',
  },
  {
    id: 'guess-symbol',
    titleFa: 'حدس نماد شیمیایی',
    descFa: 'مشاهده نام فارسی و انتخاب نماد استاندارد لاتین',
    icon: 'flask-outline',
  },
  {
    id: 'atomic-number',
    titleFa: 'چالش عدد اتمی',
    descFa: 'تشخیص تعداد پروتون‌های هسته و شماره اتمی (Z)',
    icon: 'nuclear-outline',
  },
  {
    id: 'family',
    titleFa: 'شناسایی خانواده و گروه',
    descFa: 'تعیین دسته‌بندی شیمیایی، فلزات، گازهای نجیب و...',
    icon: 'shapes-outline',
  },
  {
    id: 'electron-distribution',
    titleFa: 'توزیع لایه‌ای الکترون‌ها',
    descFa: 'تشخیص آرایش الکترونی لایه‌های اصلی K تا Q',
    icon: 'layers-outline',
  },
  {
    id: 'period-group',
    titleFa: 'موقعیت دوره و گروه',
    descFa: 'تشخیص سطر تناوب و ستون گروه در جدول تناوبی',
    icon: 'grid-outline',
  },
];

export default function LearningScreen() {
  const router = useRouter();

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
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backBtn}
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
            size={18}
            color={lightAppTheme.colors.forestGreen}
          />
          <Text style={styles.backText}>
            {mode === 'home' ? 'جدول تناوبی' : 'خانه آموزش'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.screenTitle}>مرکز آموزش و آزمون شیمی</Text>
      </View>

      {/* MODE 1: Learning Home Dashboard & Menus */}
      {mode === 'home' && progress && (
        <View style={styles.homeContainer}>
          <LearningDashboard progress={progress} />

          {/* Quick Learning Modes Row (Flashcards & Matching Game) */}
          <Text style={styles.sectionHeader}>فعالیت‌های یادگیری تعاملی</Text>
          <View style={styles.interactiveGrid}>
            <TouchableOpacity
              style={styles.interactiveCard}
              activeOpacity={0.8}
              onPress={() => {
                setCardIdx(0);
                setMode('flashcards');
              }}
            >
              <View style={[styles.interactiveIcon, { backgroundColor: '#FCE7F3' }]}>
                <Ionicons name="albums-outline" size={24} color="#DB2777" />
              </View>
              <Text style={styles.interactiveTitle}>فلش‌کارت‌های ۱۱۸ عنصر</Text>
              <Text style={styles.interactiveDesc}>مرور تعاملی پشت و روی کارت‌ها</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.interactiveCard}
              activeOpacity={0.8}
              onPress={() => setMode('game')}
            >
              <View style={[styles.interactiveIcon, { backgroundColor: '#FEF3C7' }]}>
                <Ionicons name="game-controller-outline" size={24} color="#D97706" />
              </View>
              <Text style={styles.interactiveTitle}>بازی جفت‌سازی سریع</Text>
              <Text style={styles.interactiveDesc}>تطبیق نمادهای شیمیایی و نام‌ها</Text>
            </TouchableOpacity>
          </View>

          {/* Difficulty Level Switcher */}
          <View style={styles.difficultySection}>
            <Text style={styles.sectionHeader}>سطح دشواری آزمون‌ها:</Text>
            <View style={styles.diffRow}>
              {(['beginner', 'intermediate', 'advanced'] as DifficultyLevel[]).map((lvl) => {
                const active = difficulty === lvl;
                const labelFa =
                  lvl === 'beginner'
                    ? 'مقدماتی (۲۰ عنصر اول)'
                    : lvl === 'intermediate'
                    ? 'متوسط (۵۶ عنصر)'
                    : 'پیشرفته (کل ۱۱۸ عنصر)';
                return (
                  <TouchableOpacity
                    key={lvl}
                    style={[styles.diffBtn, active && styles.diffBtnActive]}
                    onPress={() => setDifficulty(lvl)}
                  >
                    <Text style={[styles.diffBtnText, active && styles.diffBtnTextActive]}>
                      {labelFa}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Quiz Modules Grid */}
          <Text style={styles.sectionHeader}>آزمون‌های موضوعی شیمی</Text>
          <View style={styles.quizList}>
            {QUIZ_TYPES.map((qt) => (
              <TouchableOpacity
                key={qt.id}
                style={styles.quizRowCard}
                activeOpacity={0.7}
                onPress={() => handleStartQuiz(qt.id)}
              >
                <View style={styles.quizIconBox}>
                  <Ionicons name={qt.icon as any} size={22} color={lightAppTheme.colors.forestGreen} />
                </View>
                <View style={styles.quizInfoCol}>
                  <Text style={styles.quizTitle}>{qt.titleFa}</Text>
                  <Text style={styles.quizDesc}>{qt.descFa}</Text>
                </View>
                <Ionicons name="chevron-back" size={18} color="#94A3B8" />
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
          isKnown={progress ? progress.knownCards.includes(allElements[cardIdx].identity.atomicNumber) : false}
          onMarkKnown={handleMarkKnownCard}
          onNext={() => setCardIdx((prev) => (prev < allElements.length - 1 ? prev + 1 : 0))}
          onPrev={() => setCardIdx((prev) => (prev > 0 ? prev - 1 : allElements.length - 1))}
          currentIndex={cardIdx}
          totalCards={allElements.length}
        />
      )}

      {/* MODE 5: Interactive Game */}
      {mode === 'game' && (
        <MatchingGameView
          onBack={() => setMode('home')}
          onFinish={async (score) => {
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
    marginBottom: 10,
    paddingBottom: 6,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  backText: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: lightAppTheme.colors.forestGreen,
  },
  screenTitle: {
    fontSize: 14.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  homeContainer: {
    paddingBottom: 20,
  },
  sectionHeader: {
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
    marginTop: 10,
    marginBottom: 8,
  },
  interactiveGrid: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  interactiveCard: {
    flex: 1,
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 12,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    alignItems: 'center',
  },
  interactiveIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  interactiveTitle: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
    textAlign: 'center',
  },
  interactiveDesc: {
    fontSize: 10,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    textAlign: 'center',
    marginTop: 2,
  },
  difficultySection: {
    marginBottom: 12,
  },
  diffRow: {
    flexDirection: 'row',
    gap: 6,
  },
  diffBtn: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingVertical: 7,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  diffBtnActive: {
    backgroundColor: lightAppTheme.colors.scientificGreen,
    borderColor: lightAppTheme.colors.scientificGreen,
  },
  diffBtnText: {
    fontSize: 9.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
  },
  diffBtnTextActive: {
    color: '#FFFFFF',
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  quizList: {
    gap: 8,
  },
  quizRowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 12,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    gap: 12,
  },
  quizIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: lightAppTheme.colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizInfoCol: {
    flex: 1,
  },
  quizTitle: {
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  quizDesc: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    marginTop: 2,
  },
});

