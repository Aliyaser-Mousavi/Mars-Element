import { ChemicalElement } from "@/types/element";

/**
 * Period 1 Elements (Total: 2)
 * Mars Element - Chemical Database
 */
export const PERIOD_1_ELEMENTS: ChemicalElement[] = [
  // Element 1: H (هیدروژن)
  {
    identity: {
      atomicNumber: 1,
      symbol: "H",
      nameFa: "هیدروژن",
      nameEn: "Hydrogen",
      pronunciationFa: "هیدروژِن",
      descriptionFa:
        "فراوان‌ترین و سبک‌ترین عنصر کیهان که سوخت اصلی واکنش‌های همجوشی در ستارگان و خورشید است.",
    },
    classification: {
      group: 1,
      period: 1,
      block: "s",
      category: "nonmetal",
      standardState: "gas",
    },
    atomicStructure: {
      protons: 1,
      electrons: 1,
      neutrons: 0,
      electronConfiguration: "1s¹",
      abbreviatedConfiguration: "1s¹",
      electronShells: [1],
      valenceElectrons: 1,
      commonOxidationStates: [1, -1],
      allOxidationStates: [1, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 1.008,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 53,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 31,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 0.08988,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa: "گاز بی‌رنگ، بی‌بو و بسیار سبک",
      colorFa: "بی‌رنگ",
      crystalStructureFa: "شش‌گوشه فشرده (hcp در دمای برودتی)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 14.01,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 20.28,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 14.304,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.1805,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.2,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1312.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 72.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در حضور اکسیژن و با جرقه به سرعت و با انفجار واکنش می‌دهد.",
      chemicalBehaviorFa:
        "تشکیل پیوندهای کووالانسی قطبی و غیرقطبی و پیوند هیدروژنی منحصربه‌فرد.",
    },
    history: {
      discovererFa: "هنری کاوندیش",
      discoveryYear: "1766",
      nameOriginFa: "واژه یونانی hydro و genes به معنای آب‌ساز",
      namingExplanationFa:
        "به دلیل تولید آب هنگام سوختن با اکسیژن نام‌گذاری شد.",
    },
    applications: {
      industrial: [
        "تولید آمونیاک به روش هابر",
        "پالایش نفت و هیدروژن‌دار کردن روغن‌ها",
        "سوخت موشک‌های فضایی",
      ],
      scientific: [
        "طیف‌سنجی تشدید مغناطیسی هسته (NMR)",
        "پیل‌های سوختی هیدروژنی",
        "تحقیقات همجوشی هسته‌ای",
      ],
      medical: [
        "تصویربرداری تشدید مغناطیسی (MRI) بر پایه پروتون‌های هیدروژن بافت‌ها",
      ],
      everyday: ["آب آشامیدنی", "ترکیبات هیدروکربنی پلاستیک‌ها و گاز شهری"],
    },
    safety: {
      toxicityFa: "غیرسمی؛ خفه‌کننده در صورت جابجایی اکسیژن هوا",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "نگهداری در مخازن ضدجرقه و دور از هرگونه شعله یا منبع حرارت.",
      hazardsFa: "خطر شدید آتش‌سوزی و انفجار در مخلوط ۴ تا ۷۵ درصد با هوا.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: [
        "¹H (پروتیوم ۹۹.۹۸٪)",
        "²H (دوتریوم ۰.۰۱۵٪)",
        "³H (تریتیوم، پرتوزا)",
      ],
      mostStableIsotope: "¹H",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فراوان‌ترین و سبک‌ترین عنصر کیهان که سوخت اصلی واکنش‌های همجوشی در ستارگان و خورشید است.",
      funFactsFa: [
        "حدود ۷۵ درصد از جرم ماده مرئی کل کیهان از هیدروژن تشکیل شده است.",
        "در فشارهای بسیار فوق‌العاده در اعماق سیارات غول‌پیکر مانند مشتری به هیدروژن فلزی تبدیل می‌شود.",
      ],
      naturalOccurrenceFa:
        "در حالت عنصری آزاد در جو بسیار نادر است؛ بیشترین مقدار آن در مولکول‌های آب، نفت و گاز وجود دارد.",
      keyCompoundsFa: [
        "آب (H₂O)",
        "آمونیاک (NH₃)",
        "متان (CH₄)",
        "پراکسید هیدروژن (H₂O₂)",
      ],
      educationalNotesFa:
        "هیدروژن با وجود قرارگیری در گروه ۱ به دلیل داشتن یک الکترون در لایه والانس، خواص فلزی نشان نمی‌دهد.",
    },
  },
  // Element 2: He (هلیم)
  {
    identity: {
      atomicNumber: 2,
      symbol: "He",
      nameFa: "هلیم",
      nameEn: "Helium",
      pronunciationFa: "هلیوم",
      descriptionFa:
        "دومین عنصر فراوان گیتی با پایین‌ترین نقطه جوش و ذوب در بین تمامی مواد شناخته‌شده.",
    },
    classification: {
      group: 18,
      period: 1,
      block: "s",
      category: "noble-gas",
      standardState: "gas",
    },
    atomicStructure: {
      protons: 2,
      electrons: 2,
      neutrons: 2,
      electronConfiguration: "1s²",
      abbreviatedConfiguration: "1s²",
      electronShells: [2],
      valenceElectrons: 2,
      commonOxidationStates: [0],
      allOxidationStates: [0],
    },
    physicalProperties: {
      atomicMass: {
        value: 4.0026,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 31,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 28,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 0.1786,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa: "گاز بی‌رنگ، بی‌بو، بی‌مزه و کاملاً بی‌اثر",
      colorFa: "بی‌رنگ",
      crystalStructureFa: "شش‌گوشه فشرده (hcp در فشار بالای ۲۵ اتمسفر)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 0.95,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4.22,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 5.193,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.1513,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: null,
        origin: "unknown",
      },
      firstIonizationEnergy: {
        value: 2372.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 0.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "غیرفعال از نظر شیمیایی؛ دارای بالاترین انرژی نخستین یونش در بین عناصر.",
      chemicalBehaviorFa:
        "به دلیل پر بودن کامل لایه ۱s² آرایش بسیار پایداری دارد و ترکیب پایدار نمی‌سازد.",
    },
    history: {
      discovererFa: "پیر ژول ژانسن و نورمن لاکیر",
      discoveryYear: "1868",
      nameOriginFa: "واژه یونانی helios به معنای خورشید",
      namingExplanationFa:
        "نخستین بار در خطوط طیفی نور تاج خورشید پیش از شناسایی روی زمین کشف شد.",
    },
    applications: {
      industrial: [
        "سرمایش آهنرباهای ابررسانا در MRI",
        "گاز محافظ در جوشکاری قوس الکتریکی",
        "نشت‌یابی در سیستم‌های خلاء",
      ],
      scientific: [
        "تحقیقات فیزیک دماهای فوق‌العاده پایین و فراسیالیت",
        "کروماتوگرافی گازی به عنوان گاز حامل",
      ],
      medical: ["مخلوط تنفسی هلیوکس برای بیماران دچار انسداد حاد تنفسی"],
      everyday: ["پر کردن بالون‌های هواشناسی و بادکنک‌های جشن‌ها"],
    },
    safety: {
      toxicityFa: "کاملاً خنثی و غیرسمی",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "عدم استنشاق مکرر از کپسول به دلیل خطر هیپوکسی و افت اکسیژن خون.",
      hazardsFa: "خفگی ناگهانی در فضاهای بسته به علت جابجایی اکسیژن.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: ["⁴He (۹۹.۹۹۹۸٪)", "³He (۰.۰۰۰۲٪)"],
      mostStableIsotope: "⁴He",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "دومین عنصر فراوان گیتی با پایین‌ترین نقطه جوش و ذوب در بین تمامی مواد شناخته‌شده.",
      funFactsFa: [
        "در فشار معمول اتمسفری حتی در صفر مطلق نیز مایع باقی می‌ماند و منجمد نمی‌شود.",
        "در دمای زیر ۲.۱۷ کلوین به ابرشارگی با ویسکوزیته صفر دست می‌یابد و از دیواره ظرف بالا می‌رود.",
      ],
      naturalOccurrenceFa:
        "در ذخایر گاز طبیعی در نتیجه واپاشی پرتوزای آلفا در پوسته زمین محبوس است.",
      keyCompoundsFa: ["هیچ ترکیب شیمیایی خنثی و پایداری تشکیل نمی‌دهد"],
      educationalNotesFa:
        "با اینکه عنصر بلوک s است، به دلیل لایه ظرفیت کاملاً بسته جزو گازهای نجیب گروه ۱۸ طبقه‌بندی می‌شود.",
    },
  },
];
