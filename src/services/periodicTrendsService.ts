import { ChemicalElement } from "../types/element";
import { elementRepository } from "./elementService";

export type TrendProperty =
  | "atomicRadius"
  | "electronegativity"
  | "firstIonizationEnergy"
  | "atomicMass";

export interface TrendInfo {
  id: TrendProperty;
  titleFa: string;
  unitFa: string;
  horizontalRuleFa: string;
  verticalRuleFa: string;
  explanationFa: string;
}

export const PERIODIC_TRENDS: Record<TrendProperty, TrendInfo> = {
  atomicRadius: {
    id: "atomicRadius",
    titleFa: "شعاع اتمی (Atomic Radius)",
    unitFa: "pm",
    horizontalRuleFa:
      "از چپ به راست در یک دوره، شعاع اتمی کاهش می‌یابد (افزایش بار مؤثر هسته).",
    verticalRuleFa:
      "از بالا به پایین در یک گروه، شعاع اتمی افزایش می‌یابد (افزوده‌شدن لایه‌های الکترونی).",
    explanationFa:
      "با افزایش تعداد پروتون‌ها در یک دوره، جاذبه هسته روی الکترون‌های لایه ظرفیت افزایش یافته و ابر الکترونی فشرده‌تر می‌شود. در مقابل، حرکت به سمت پایین یک گروه باعث اضافه شدن یک لایه الکترونی کامل شده و فاصله لایه ظرفیت از هسته را به طور چشمگیری افزایش می‌دهد.",
  },
  electronegativity: {
    id: "electronegativity",
    titleFa: "الکترونگاتیوی (Electronegativity)",
    unitFa: "مقیاس پاولینگ",
    horizontalRuleFa: "از چپ به راست در دوره، الکترونگاتیوی افزایش می‌یابد.",
    verticalRuleFa: "از بالا به پایین در گروه، الکترونگاتیوی کاهش می‌یابد.",
    explanationFa:
      "الکترونگاتیوی تمایل یک اتم برای جذب جفت‌الکترون پیوندی به سمت خود است. اتم‌های کوچکتری که بار مؤثر هسته بیشتری دارند (نظیر فلوئور با بیشترین مقدار ۳.۹۸)، تمایل شدیدتری برای ربایش الکترون‌ها نشان می‌دهند.",
  },
  firstIonizationEnergy: {
    id: "firstIonizationEnergy",
    titleFa: "انرژی نخستین یونش (Ionization Energy)",
    unitFa: "kJ/mol",
    horizontalRuleFa: "از چپ به راست در دوره به طور کلی افزایش می‌یابد.",
    verticalRuleFa: "از بالا به پایین در گروه کاهش می‌یابد.",
    explanationFa:
      "انرژی لازم برای جدا کردن سست‌ترین الکترون از یک اتم گازی در حالت پایه. با کوچکتر شدن شعاع اتمی و افزایش جاذبه موثر هسته، کندن الکترون سخت‌تر شده و انرژی بیشتری نیاز است.",
  },
  atomicMass: {
    id: "atomicMass",
    titleFa: "جرم اتمی (Atomic Mass)",
    unitFa: "u",
    horizontalRuleFa:
      "به طور منظم هم در طول دوره و هم در طول گروه افزایش می‌یابد.",
    verticalRuleFa:
      "با حرکت به سطرهای پایین‌تر به دلیل افزایش پروتون‌ها و نوترون‌ها پیوسته افزایشی است.",
    explanationFa:
      "جرم اتمی وابسته به مجموع نوکلئون‌های هسته (پروتون‌ها و نوترون‌ها) است. با پیشروی در جدول، تعداد ذرات هسته‌ای افزایش می‌یابد.",
  },
};

export interface TrendDataPoint {
  element: ChemicalElement;
  value: number | null;
}

export function getTrendDataForPeriod(
  period: number,
  trend: TrendProperty,
): TrendDataPoint[] {
  const elements = elementRepository.getByPeriod(period);
  return elements.map((el) => {
    let val: number | null = null;
    if (trend === "atomicRadius") {
      val = el.physicalProperties.atomicRadius.value;
    } else if (trend === "electronegativity") {
      val = el.chemicalProperties.electronegativityPauling.value;
    } else if (trend === "firstIonizationEnergy") {
      val = el.chemicalProperties.firstIonizationEnergy.value;
    } else if (trend === "atomicMass") {
      val = el.physicalProperties.atomicMass.value;
    }
    return { element: el, value: val };
  });
}
