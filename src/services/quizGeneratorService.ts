import { elementRepository } from './elementService';
import { ChemicalElement } from '../types/element';
import { ELEMENT_CATEGORIES } from '../constants/element-categories';
import { toPersianDigits } from '../utils/rtl';

export type QuizType =
  | 'guess-element'
  | 'guess-symbol'
  | 'atomic-number'
  | 'family'
  | 'electron-distribution'
  | 'period-group';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface QuizQuestion {
  id: string;
  type: QuizType;
  promptFa: string;
  highlightText?: string;
  correctAnswer: string;
  options: string[];
  explanationFa: string;
  element: ChemicalElement;
}

// Helper to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Generate questions accurately from local verified database
export function generateQuizQuestions(
  type: QuizType,
  difficulty: DifficultyLevel,
  count: number = 5
): QuizQuestion[] {
  const allElements = elementRepository.getAllElements();

  // Difficulty determines element pool
  let pool = allElements;
  if (difficulty === 'beginner') {
    // Top 20 common elements
    pool = allElements.filter((el) => el.identity.atomicNumber <= 20);
  } else if (difficulty === 'intermediate') {
    // Elements 1 to 56 (up to Barium)
    pool = allElements.filter((el) => el.identity.atomicNumber <= 56);
  } else {
    // All 118 elements including superheavy
    pool = allElements;
  }

  const selectedElements = shuffleArray(pool).slice(0, count);

  return selectedElements.map((target, idx) => {
    // Pick 3 distractors
    const otherElements = shuffleArray(allElements.filter((el) => el.identity.atomicNumber !== target.identity.atomicNumber));
    const distractors = otherElements.slice(0, 3);

    let promptFa = '';
    let highlightText: string | undefined;
    let correctAnswer = '';
    let options: string[] = [];
    let explanationFa = '';

    switch (type) {
      case 'guess-element': {
        promptFa = 'نام فارسی عنصر با نماد شیمیایی زیر چیست؟';
        highlightText = target.identity.symbol;
        correctAnswer = target.identity.nameFa;
        options = shuffleArray([
          correctAnswer,
          distractors[0].identity.nameFa,
          distractors[1].identity.nameFa,
          distractors[2].identity.nameFa,
        ]);
        explanationFa = `نماد «${target.identity.symbol}» متعلق به عنصر ${target.identity.nameFa} با عدد اتمی ${toPersianDigits(target.identity.atomicNumber)} است.`;
        break;
      }

      case 'guess-symbol': {
        promptFa = `نماد شیمیایی استاندارد عنصر «${target.identity.nameFa}» کدام است؟`;
        highlightText = target.identity.nameFa;
        correctAnswer = target.identity.symbol;
        options = shuffleArray([
          correctAnswer,
          distractors[0].identity.symbol,
          distractors[1].identity.symbol,
          distractors[2].identity.symbol,
        ]);
        explanationFa = `عنصر ${target.identity.nameFa} در لاتین ${target.identity.nameEn} نام دارد و نماد استاندارد آن «${target.identity.symbol}» است.`;
        break;
      }

      case 'atomic-number': {
        promptFa = `عدد اتمی (تعداد پروتون‌های) عنصر «${target.identity.nameFa} (${target.identity.symbol})» چیست؟`;
        correctAnswer = toPersianDigits(target.identity.atomicNumber);
        options = shuffleArray([
          correctAnswer,
          toPersianDigits(distractors[0].identity.atomicNumber),
          toPersianDigits(distractors[1].identity.atomicNumber),
          toPersianDigits(distractors[2].identity.atomicNumber),
        ]);
        explanationFa = `عنصر ${target.identity.nameFa} دارای ${toPersianDigits(target.identity.atomicNumber)} پروتون در هسته اتمی خود است.`;
        break;
      }

      case 'family': {
        promptFa = `عنصر «${target.identity.nameFa} (${target.identity.symbol})» به کدام خانواده شیمیایی تعلق دارد؟`;
        correctAnswer = ELEMENT_CATEGORIES[target.classification.category]?.nameFa ?? target.classification.category;
        const otherCategories = Object.values(ELEMENT_CATEGORIES)
          .map((c) => c.nameFa)
          .filter((cat) => cat !== correctAnswer);
        const shuffledCats = shuffleArray(otherCategories).slice(0, 3);
        options = shuffleArray([correctAnswer, ...shuffledCats]);
        explanationFa = `${target.identity.nameFa} در رده ${correctAnswer} قرار داشته و خواص این گروه را بروز می‌دهد.`;
        break;
      }

      case 'electron-distribution': {
        promptFa = `توزیع الکترونی لایه‌ها (K, L, M...) برای «${target.identity.nameFa}» کدام است؟`;
        correctAnswer = target.atomicStructure.electronShells.join(' , ');
        const distOptions = [
          correctAnswer,
          distractors[0].atomicStructure.electronShells.join(' , '),
          distractors[1].atomicStructure.electronShells.join(' , '),
          distractors[2].atomicStructure.electronShells.join(' , '),
        ];
        options = shuffleArray(distOptions);
        explanationFa = `آرایش الکترونی لایه‌ای ${target.identity.nameFa}: [${correctAnswer}] و آرایش زیرلایه‌ای آن: ${target.atomicStructure.abbreviatedConfiguration} است.`;
        break;
      }

      case 'period-group': {
        const groupFa = target.classification.group !== null ? `گروه ${toPersianDigits(target.classification.group)}` : 'بلوک f (فاقد گروه)';
        correctAnswer = `دوره ${toPersianDigits(target.classification.period)} ، ${groupFa}`;
        promptFa = `موقعیت مکانی عنصر «${target.identity.nameFa} (${target.identity.symbol})» در جدول تناوبی کجاست؟`;

        const dist1Group = distractors[0].classification.group !== null ? `گروه ${toPersianDigits(distractors[0].classification.group)}` : 'بلوک f';
        const dist2Group = distractors[1].classification.group !== null ? `گروه ${toPersianDigits(distractors[1].classification.group)}` : 'بلوک f';
        const dist3Group = distractors[2].classification.group !== null ? `گروه ${toPersianDigits(distractors[2].classification.group)}` : 'بلوک f';

        options = shuffleArray([
          correctAnswer,
          `دوره ${toPersianDigits(distractors[0].classification.period)} ، ${dist1Group}`,
          `دوره ${toPersianDigits(distractors[1].classification.period)} ، ${dist2Group}`,
          `دوره ${toPersianDigits(distractors[2].classification.period)} ، ${dist3Group}`,
        ]);
        explanationFa = `${target.identity.nameFa} در دوره ${toPersianDigits(target.classification.period)} و ${groupFa} جدول تناوبی قرار گرفته است.`;
        break;
      }
    }

    return {
      id: `q-${idx}-${target.identity.atomicNumber}`,
      type,
      promptFa,
      highlightText,
      correctAnswer,
      options,
      explanationFa,
      element: target,
    };
  });
}

