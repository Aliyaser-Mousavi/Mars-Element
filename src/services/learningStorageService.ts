import AsyncStorage from "@react-native-async-storage/async-storage";

const LEARNING_PROGRESS_KEY = "@mars_element_learning_progress";

export interface AchievementBadge {
  id: string;
  titleFa: string;
  descriptionFa: string;
  icon: string;
  unlockedAt: string | null;
}

export interface LearningProgress {
  totalQuizzes: number;
  totalQuestionsAnswered: number;
  correctAnswers: number;
  currentStreakDays: number;
  lastStudyDate: string; // YYYY-MM-DD
  flashcardsReviewed: number;
  knownCards: number[]; // atomic numbers
  achievements: AchievementBadge[];
}

export const INITIAL_ACHIEVEMENTS: AchievementBadge[] = [
  {
    id: "first-quiz",
    titleFa: "شروع مسیر کیمیاگری",
    descriptionFa: "اولین کوییز شیمی را با موفقیت تکمیل کنید.",
    icon: "flame-outline",
    unlockedAt: null,
  },
  {
    id: "streak-3",
    titleFa: "پیوستگی یادگیری",
    descriptionFa: "۳ روز متوالی به یادگیری شیمی بپردازید.",
    icon: "sparkles-outline",
    unlockedAt: null,
  },
  {
    id: "quiz-master-10",
    titleFa: "استاد آزمایشگاه",
    descriptionFa: "۱۰ آزمون یا کوییز را به پایان برسانید.",
    icon: "trophy-outline",
    unlockedAt: null,
  },
  {
    id: "accuracy-90",
    titleFa: "دقت آزمایشگاهی",
    descriptionFa: "در یک آزمون به دقت بالاتر از ۹۰ درصد برسید.",
    icon: "ribbon-outline",
    unlockedAt: null,
  },
  {
    id: "flashcards-20",
    titleFa: "کارت‌خوان هوشمند",
    descriptionFa: "۲۰ فلش‌کارت را مرور و یادگیری کنید.",
    icon: "albums-outline",
    unlockedAt: null,
  },
];

const DEFAULT_PROGRESS: LearningProgress = {
  totalQuizzes: 0,
  totalQuestionsAnswered: 0,
  correctAnswers: 0,
  currentStreakDays: 1,
  lastStudyDate: new Date().toISOString().split("T")[0],
  flashcardsReviewed: 0,
  knownCards: [],
  achievements: INITIAL_ACHIEVEMENTS,
};

export const learningProgressStorage = {
  async getProgress(): Promise<LearningProgress> {
    try {
      const data = await AsyncStorage.getItem(LEARNING_PROGRESS_KEY);
      if (!data) return DEFAULT_PROGRESS;
      const parsed: LearningProgress = JSON.parse(data);
      // Check streak daily progression
      const today = new Date().toISOString().split("T")[0];
      if (parsed.lastStudyDate !== today) {
        const lastDate = new Date(parsed.lastStudyDate);
        const currDate = new Date(today);
        const diffDays = Math.round(
          (currDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24),
        );
        if (diffDays === 1) {
          parsed.currentStreakDays += 1;
        } else if (diffDays > 1) {
          parsed.currentStreakDays = 1;
        }
        parsed.lastStudyDate = today;
        await AsyncStorage.setItem(
          LEARNING_PROGRESS_KEY,
          JSON.stringify(parsed),
        );
      }
      return parsed;
    } catch {
      return DEFAULT_PROGRESS;
    }
  },

  async recordQuizResult(
    answered: number,
    correct: number,
  ): Promise<LearningProgress> {
    const current = await this.getProgress();
    const updated: LearningProgress = {
      ...current,
      totalQuizzes: current.totalQuizzes + 1,
      totalQuestionsAnswered: current.totalQuestionsAnswered + answered,
      correctAnswers: current.correctAnswers + correct,
      lastStudyDate: new Date().toISOString().split("T")[0],
    };

    // Check achievement unlock conditions
    const nowIso = new Date().toISOString();
    const accuracy = answered > 0 ? (correct / answered) * 100 : 0;

    updated.achievements = updated.achievements.map((a) => {
      if (a.unlockedAt) return a;
      if (a.id === "first-quiz" && updated.totalQuizzes >= 1) {
        return { ...a, unlockedAt: nowIso };
      }
      if (a.id === "quiz-master-10" && updated.totalQuizzes >= 10) {
        return { ...a, unlockedAt: nowIso };
      }
      if (a.id === "accuracy-90" && accuracy >= 90 && answered >= 5) {
        return { ...a, unlockedAt: nowIso };
      }
      if (a.id === "streak-3" && updated.currentStreakDays >= 3) {
        return { ...a, unlockedAt: nowIso };
      }
      return a;
    });

    await AsyncStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(updated));
    return updated;
  },

  async markFlashcardKnown(atomicNumber: number): Promise<LearningProgress> {
    const current = await this.getProgress();
    const knownSet = new Set(current.knownCards);
    knownSet.add(atomicNumber);
    const updated: LearningProgress = {
      ...current,
      flashcardsReviewed: current.flashcardsReviewed + 1,
      knownCards: Array.from(knownSet),
    };

    if (updated.knownCards.length >= 20) {
      updated.achievements = updated.achievements.map((a) => {
        if (a.id === "flashcards-20" && !a.unlockedAt) {
          return { ...a, unlockedAt: new Date().toISOString() };
        }
        return a;
      });
    }

    await AsyncStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(updated));
    return updated;
  },
};
