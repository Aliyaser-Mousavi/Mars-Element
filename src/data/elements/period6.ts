import { ChemicalElement } from "@/types/element";

/**
 * Period 6 Elements (Total: 32)
 * Mars Element - Chemical Database
 */
export const PERIOD_6_ELEMENTS: ChemicalElement[] = [
  // Element 55: Cs (سزیم)
  {
    identity: {
      atomicNumber: 55,
      symbol: "Cs",
      nameFa: "سزیم",
      nameEn: "Caesium",
      pronunciationFa: "سِزیُم",
      descriptionFa:
        "فلز طلایی‌رنگ نرمی که نوسان اتم‌های آن دقیق‌ترین مقیاس سنجش زمان تاریخ بشر و معیار تعریف رسمی ثانیه است.",
    },
    classification: {
      group: 1,
      period: 6,
      block: "s",
      category: "alkali-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 55,
      electrons: 55,
      neutrons: 78,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s¹",
      abbreviatedConfiguration: "[Xe] 6s¹",
      electronShells: [2, 8, 18, 18, 8, 1],
      valenceElectrons: 1,
      commonOxidationStates: [1],
      allOxidationStates: [1, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 132.91,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 265,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 244,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 1.93,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز طلایی-نقره‌ای بسیار نرم که در دمای ۲۸.۵ درجه ذوب می‌شود و بیشترین واکنش‌پذیری را دارد",
      colorFa: "طلایی کم‌رنگ",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 301.59,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 944.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.242,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 35.9,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 0.79,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 375.7,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 45.9,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "واکنش انفجاری فوق‌العاده شدید با آب حتی در دمای منفی ۱۱۶ درجه و اشتعال خودبه‌خودی در هوا.",
      chemicalBehaviorFa:
        "پایین‌ترین پتانسیل یونش در بین عناصر پایدار؛ از دست دادن آنی الکترون 6s¹ و تشکیل کاتیون Cs⁺.",
    },
    history: {
      discovererFa: "روبرت بونزن و گوستاو کیرشهف",
      discoveryYear: "1860",
      nameOriginFa: "واژه لاتین caesius به معنای آبی آسمانی",
      namingExplanationFa:
        "به دلیل دو خط طیفی آبی آسمانی بسیار درخشان و متمایز در طیف‌سنج نوری.",
    },
    applications: {
      industrial: [
        "ساعت‌های اتمی پایه تعریف رسمی ثانیه در سیستم بین‌المللی یکاها (SI)",
        "سیالات حفاری فرمات سزیم در چاه‌های نفت و گاز عمیق با فشار بالا",
      ],
      scientific: [
        "تعریف رسمی ثانیه بر مبنای ۹٬۱۹۲٬۶۳۱٬۷۷۰ نوسان فرکانس گذار حالت پایه سزیم-۱۳۳",
      ],
      medical: ["پرتودرمانی براکی‌تراپی سرطان با چشمه‌های سزیم-۱۳۷"],
      everyday: [
        "تنظیم زمان بین‌المللی دقیق اینترنت، شبکه بانکی و موقعیت‌یاب‌های جهانی GPS",
      ],
    },
    safety: {
      toxicityFa: "سمیت در مقادیر بالا به دلیل جانشینی با پتاسیم",
      radioactivity: false,
      radiationType: "ندارد (ایزوتوپ ¹³⁷Cs محصول شکافت هسته‌ای پرتوزاست)",
      precautionsFa:
        "نگهداری انحصاری در آمپول‌های شیشه‌ای خلاء یا در گاز بی‌اثر آرگون.",
      hazardsFa: "انفجار آنی در تماس با آب و رطوبت هوا و آتش‌سوزی شدید.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: [
        "¹³³Cs (۱۰۰٪ فراوانی طبیعی)",
        "¹³⁷Cs (رادیواکتیو با نیمه‌عمر ۳۰.۱ سال)",
      ],
      mostStableIsotope: "¹³³Cs",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز طلایی‌رنگ نرمی که نوسان اتم‌های آن دقیق‌ترین مقیاس سنجش زمان تاریخ بشر و معیار تعریف رسمی ثانیه است.",
      funFactsFa: [
        "ثانیه رسمی جهان بر اساس دقیقاً ۹ میلیارد و ۱۹۲ میلیون و ۶۳۱ هزار و ۷۷۰ بار نوسان اتم سزیم-۱۳۳ تعریف شده است!",
        "تنها فلز جدول تناوبی با رنگ طلایی به جز عنصر طلا است.",
      ],
      naturalOccurrenceFa: "عمدتاً از کانی پولوسیت استخراج می‌شود.",
      keyCompoundsFa: [
        "کلرید سزیم (CsCl)",
        "هیدروکسید سزیم (CsOH)",
        "فرمات سزیم (HCOOCs)",
      ],
      educationalNotesFa:
        "هیدروکسید سزیم قوی‌ترین باز شیمیایی شناخته‌شده بر پایه آب است و می‌تواند حتی شیشه را در دمای معمولی خورده و سوراخ کند.",
    },
  },
  // Element 56: Ba (باریوم)
  {
    identity: {
      atomicNumber: 56,
      symbol: "Ba",
      nameFa: "باریوم",
      nameEn: "Barium",
      pronunciationFa: "باریُم",
      descriptionFa:
        "فلز سنگینی که نمک نامحلول آن پنجره شفاف رادیولوژیست‌ها برای دیدن دستگاه گوارش انسان است.",
    },
    classification: {
      group: 2,
      period: 6,
      block: "s",
      category: "alkaline-earth-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 56,
      electrons: 56,
      neutrons: 81,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s²",
      abbreviatedConfiguration: "[Xe] 6s²",
      electronShells: [2, 8, 18, 18, 8, 2],
      valenceElectrons: 2,
      commonOxidationStates: [2],
      allOxidationStates: [2],
    },
    physicalProperties: {
      atomicMass: {
        value: 137.33,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 222,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 215,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 3.62,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای نرم با چگالی نسبتاً بالا که در هوا به سرعت تیره شده و با شعله سبز سیبی می‌سوزد",
      colorFa: "سفید-نقره‌ای",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1000.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2170.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.204,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 18.4,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 0.89,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 502.9,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 13.95,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "واکنش بسیار فعال با آب و اکسیژن با تولید هیدروژن و هیدروکسید باریوم.",
      chemicalBehaviorFa:
        "از دست دادن آسان دو الکترون 6s²؛ سولفات باریوم BaSO₄ به دلیل نامحلول بودن مطلق در آب غیرسمی است.",
    },
    history: {
      discovererFa: "کارل ویلهلم شیله و همفری دیوی",
      discoveryYear: "1808",
      nameOriginFa: "واژه یونانی barys به معنای سنگین",
      namingExplanationFa:
        "به دلیل چگالی بالای کانی باریت (سولفات باریوم طبیعی) نام‌گذاری شد.",
    },
    applications: {
      industrial: [
        "گل‌های سنگین حفاری چاه‌های نفت بر پایه کانی باریت (BaSO₄) برای مهار فشار چاه",
        "رنگ سبز خیره‌کننده آتش‌بازی‌ها",
        "گتر (جذب‌کننده گاز) در لوله‌های خلاء",
      ],
      scientific: ["ابررساناهای دمای بالای YBCO (YBa₂Cu₃O₇)"],
      medical: [
        "بلع سوسپانسیون باریوم سولفات به عنوان ماده حاجب در رادیوگرافی و تصویربرداری پرتو ایکس از دستگاه گوارش",
      ],
      everyday: [
        "رنگ سبز منورها و ترقه‌های جشن‌ها",
        "پرکننده لاستیک و کاغذهای گلاسه سنگین",
      ],
    },
    safety: {
      toxicityFa:
        "ترکیبات محلول باریوم به شدت سمی و فلج‌کننده قلب هستند؛ سولفات نامحلول آن بی‌خطر است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "نگهداری زیر نفت سفید؛ عدم استفاده از نمک‌های محلول باریوم در تصویربرداری پزشکی.",
      hazardsFa:
        "افت شدید پتاسیم خون و ایست قلبی با مصرف نمک‌های محلول باریوم.",
    },
    isotopes: {
      stableCount: 6,
      commonIsotopes: [
        "¹³⁸Ba (۷۱.۷٪)",
        "¹³۷Ba (۱۱.۲٪)",
        "¹³۶Ba (۷.۸٪)",
        "¹۳۵Ba (۶.۶٪)",
        "¹۳۴Ba (۲.۴٪)",
        "¹۳۰Ba (۰.۱٪)",
      ],
      mostStableIsotope: "¹³⁸Ba",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز سنگینی که نمک نامحلول آن پنجره شفاف رادیولوژیست‌ها برای دیدن دستگاه گوارش انسان است.",
      funFactsFa: [
        "با اینکه تمام نمک‌های محلول باریوم بسیار سمی و مرگ‌آور هستند، سولفات باریوم خوراکی برای رادیولوژی کاملاً بی‌خطر است زیرا به دلیل انحلال‌ناپذیری مطلق، ذره‌ای از آن جذب خون نمی‌شود!",
        "شعله باریوم رنگ سبز سیبی بسیار شاخصی در آزمایش شعله دارد.",
      ],
      naturalOccurrenceFa:
        "عمدتاً از کانی سنگین باریت (BaSO₄) و ویتریت (BaCO₃) استخراج می‌شود.",
      keyCompoundsFa: [
        "سولفات باریوم (BaSO₄)",
        "کلرید باریوم (BaCl₂)",
        "نیترات باریوم (Ba(NO₃)₂)",
        "پراکسید باریوم (BaO₂)",
      ],
      educationalNotesFa:
        "پراکسید باریوم (BaO₂) در قرن نوزدهم در فرآیند برین برای جداسازی اکسیژن خالص از هوا استفاده می‌شد.",
    },
  },
  // Element 57: La (لانتان)
  {
    identity: {
      atomicNumber: 57,
      symbol: "La",
      nameFa: "لانتان",
      nameEn: "Lanthanum",
      pronunciationFa: "لانتان",
      descriptionFa:
        "سرگروه لانتانیدها و عنصر کلیدی لنزهای عکاسی شفاف و کاتالیزورهای پالایشگاه‌های نفت.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 57,
      electrons: 57,
      neutrons: 82,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 5d¹ 6s²",
      abbreviatedConfiguration: "[Xe] 5d¹ 6s²",
      electronShells: [2, 8, 18, 18, 9, 2],
      valenceElectrons: 3,
      commonOxidationStates: [3],
      allOxidationStates: [3],
    },
    physicalProperties: {
      atomicMass: {
        value: 138.91,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 187,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 207,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 6.162,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای-سفید، چکش‌خوار و نرم که سرگروه سری لانتانیدها است",
      colorFa: "سفید-نقره‌ای",
      crystalStructureFa: "شش‌گوشه فشرده مضاعف (dhcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1193.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3737.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.195,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 13.4,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.1,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 538.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 48.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا به سرعت اکسید شده و با آب سرد به آرامی و با آب گرم به سرعت واکنش می‌دهد.",
      chemicalBehaviorFa:
        "تنها حالت اکسایش پایدار +۳؛ تشکیل کاتیون La³⁺ با اوربیتال خالی f.",
    },
    history: {
      discovererFa: "کارل گوستاو موساندر",
      discoveryYear: "1839",
      nameOriginFa: "واژه یونانی lanthanein به معنای پنهان بودن",
      namingExplanationFa:
        "به دلیل پنهان بودن در کانی‌های سریم به عنوان ناخالصی کشف‌نشده.",
    },
    applications: {
      industrial: [
        "آلیاژ میش‌متال در سنگ فندک",
        "آلیاژهای هیدرید فلزی کاتد باتری‌های هیبریدی NiMH (مانند تویوتا پریوس)",
        "عدسی‌های اپتیکی با ضریب شکست بسیار بالا و پراکندگی کم برای دوربین‌های عکاسی",
      ],
      scientific: [
        "کاتالیزورهای کراکینگ کاتالیزوری سیال (FCC) در پالایشگاه‌های نفت برای تولید بنزین",
      ],
      medical: [
        "کربنات لانتان به عنوان متصل‌شونده به فسفات در نارسایی مزمن کلیه برای کاهش فسفر خون",
      ],
      everyday: ["سنگ فندک جرقه‌زن", "عدسی عینک‌ها و لنز دوربین‌های حرفه‌ای"],
    },
    safety: {
      toxicityFa: "سمیت متوسط، اثر تحریکی بر بافت مخاطی",
      radioactivity: false,
      radiationType: "پرتوزایی ناچیز طبیعی (ایزوتوپ ¹³⁸La)",
      precautionsFa: "کنترل مواجهه با غبار در خطوط تولید کاتالیزور.",
      hazardsFa: "سوزش چشم و مخاط تنفسی.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: [
        "¹³⁹La (۹۹.۹۱٪)",
        "¹³⁸La (۰.۰۹٪ با نیمه‌عمر ۱۰۵ میلیارد سال)",
      ],
      mostStableIsotope: "¹³⁹La",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "سرگروه لانتانیدها و عنصر کلیدی لنزهای عکاسی شفاف و کاتالیزورهای پالایشگاه‌های نفت.",
      funFactsFa: [
        "باتری هر خودروی هیبریدی تویوتا پریوس حاوی حدود ۱۰ تا ۱۵ کیلوگرم لانتان است!",
        "شیشه‌های حاوی اکسید لانتان نوری را با انحراف کم و شفافیت فوق‌العاده متمرکز می‌کنند.",
      ],
      naturalOccurrenceFa:
        "در کانی‌های مونازیت و باستانائزیت همراه با سایر لانتانیدها یافت می‌شود.",
      keyCompoundsFa: [
        "اکسید لانتان (La₂O₃)",
        "کربنات لانتان (La₂(CO₃)₃)",
        "نیکل-لانتان (LaNi₅)",
      ],
      educationalNotesFa:
        "آلیاژ LaNi₅ قابلیت ذخیره شگفت‌انگیز گاز هیدروژن را به صورت پیوند هیدریدی برگشت‌پذیر در فشار متعارف دارد.",
    },
  },
  // Element 58: Ce (سریم)
  {
    identity: {
      atomicNumber: 58,
      symbol: "Ce",
      nameFa: "سریم",
      nameEn: "Cerium",
      pronunciationFa: "سِریُم",
      descriptionFa:
        "فراوان‌ترین فلز خاک‌های کمیاب در پوسته زمین و اکسید پولیش‌دهنده لنزها و مبدل‌های کاتالیستی خودرو.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 58,
      electrons: 58,
      neutrons: 82,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹ 5d¹ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹ 5d¹ 6s²",
      electronShells: [2, 8, 18, 19, 9, 2],
      valenceElectrons: 4,
      commonOxidationStates: [3, 4],
      allOxidationStates: [4, 3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 140.12,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 181,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 204,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 6.77,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای چکش‌خوار با فراوانی بالا در میان لانتانیدها که در تراشیدن جرقه می‌زند",
      colorFa: "خاکستری-نقره‌ای",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1068.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3716.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.192,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 11.3,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.12,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 534.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا با اصطکاک و خراشیدن جرقه می‌زند (پیروفوریک)؛ در آب واکنش داده و هیدروکسید تولید می‌کند.",
      chemicalBehaviorFa:
        "دارای دو حالت اکسایش پایدار +۳ و +۴؛ اکسید سریم CeO₂ یک ذخیره‌کننده عالی اکسیژن در کاتالیزورهاست.",
    },
    history: {
      discovererFa: "مارتین هاینریش کلاپروت و یونس یاکوب برزلیوس",
      discoveryYear: "1803",
      nameOriginFa: "سیارک سرس (Ceres)",
      namingExplanationFa:
        "به افتخار کشف سیارک سرس در کمربند سیارک‌ها نام‌گذاری گردید.",
    },
    applications: {
      industrial: [
        "پودر ساینده پولیش اکسید سریم (CeO₂) برای صیقل دادن شیشه‌ها، آینه‌ها و ویفرهای سیلیکونی",
        "کاتالیزورهای اگزوز خودرو برای بافر کردن اکسیژن",
        "آلیاژ میش‌متال جرقه‌زن",
      ],
      scientific: [
        "تیتراسیون‌های سریم‌سنجی (Cerimetry) در شیمی تجزیه با یون اکسیدکننده Ce⁴⁺",
      ],
      medical: ["سولفادیازین سریم در التیام سوختگی‌های درجه ۳"],
      everyday: ["سنگ فندک", "پودر پولیش شیشه‌های اتومبیل و عینک"],
    },
    safety: {
      toxicityFa: "سمیت کم تا متوسط",
      radioactivity: false,
      radiationType: "پرتوزایی ناچیز طبیعی (ایزوتوپ ¹⁴²Ce)",
      precautionsFa: "نگهداری پودر فلز دور از اصطکاک و جرقه.",
      hazardsFa: "اشتعال خودبه‌خودی پودر فلزی در اثر سایش.",
    },
    isotopes: {
      stableCount: 4,
      commonIsotopes: [
        "¹⁴⁰Ce (۸۸.۴۸٪)",
        "¹۴۲Ce (۱۱.۰۸٪)",
        "¹۳۸Ce (۰.۲۵٪)",
        "¹۳۶Ce (۰.۱۹٪)",
      ],
      mostStableIsotope: "¹⁴⁰Ce",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فراوان‌ترین فلز خاک‌های کمیاب در پوسته زمین و اکسید پولیش‌دهنده لنزها و مبدل‌های کاتالیستی خودرو.",
      funFactsFa: [
        "سریم در پوسته زمین از مس و سرب فراوان‌تر است، با وجود آنکه جزو خاک‌های کمیاب نامیده می‌شود!",
        "هنگامی که چرخ فندک می‌چرخد، ذره‌ای از آلیاژ سریم خراشیده شده و در دمای اتاق جرقه ایجاد می‌کند.",
      ],
      naturalOccurrenceFa:
        "فراوان‌ترین لانتانید در کانی باستانائزیت و مونازیت.",
      keyCompoundsFa: [
        "دی‌اکسید سریم (سیریا، CeO₂)",
        "سولفات سریم (IV) (Ce(SO₄)₂)",
        "نیترات آمونیوم سریم (CAN)",
      ],
      educationalNotesFa:
        "ترکیب CAN (Ceriammonium nitrate) اکسیدکننده‌ای پرکاربرد در شیمی آلی برای محافظت‌زدایی اترها و اکسایش الکل‌هاست.",
    },
  },
  // Element 59: Pr (پرازئودیمیم)
  {
    identity: {
      atomicNumber: 59,
      symbol: "Pr",
      nameFa: "پرازئودیمیم",
      nameEn: "Praseodymium",
      pronunciationFa: "پرازئودیمیُم",
      descriptionFa:
        "دوقلوی سبز که آهنرباهای مدرن خودروهای الکتریکی را مجهز به نیروی فوق‌العاده می‌کند.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 59,
      electrons: 59,
      neutrons: 82,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f³ 6s²",
      abbreviatedConfiguration: "[Xe] 4f³ 6s²",
      electronShells: [2, 8, 18, 21, 8, 2],
      valenceElectrons: 5,
      commonOxidationStates: [3],
      allOxidationStates: [4, 3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 140.91,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 182,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 203,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 6.77,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نرم، چکش‌خوار نقره‌ای با مقاومت متوسط در برابر هوا که نمک‌های سبز زیبایی دارد",
      colorFa: "سفید-نقره‌ای با نمک‌های سبز",
      crystalStructureFa: "شش‌گوشه فشرده مضاعف (dhcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1208.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3793.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.193,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 12.5,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.13,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 527.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در مجاورت هوا کدر شده و با آب واکنش می‌دهد و لایه اکسید سبز پوسته شونده تولید می‌کند.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ با رنگ سبز متمایز و توانایی تشکیل حالت اکسایش +۴ در اکسید PrO₂.",
    },
    history: {
      discovererFa: "کارل آور فون ولسباخ",
      discoveryYear: "1885",
      nameOriginFa:
        "واژه یونانی prasios به معنای سبز تره‌ای و didymos به معنای دوقلو",
      namingExplanationFa:
        "به دلیل جداسازی آن از عنصر دوقلوی دیدیمیم و ایجاد نمک‌های سبز رنگ شاخص.",
    },
    applications: {
      industrial: [
        "آهنرباهای دائمی پرقدرت نئودیمیم-پرازئودیمیم-آهن-بور در موتور توربین بادی و خودروهای برقی",
        "شیشه‌های دیدیمیم عینک جوشکاری برای جذب خط زرد سدیم",
        "رنگ سبز زیتونی در سفال و کاشی",
      ],
      scientific: ["تقویت‌کننده‌های فیبر نوری دوپ شده با پرازئودیمیم (PDFA)"],
      medical: ["عینک‌های محافظ چشم در جراحی‌های پزشکی لیزری"],
      everyday: [
        "موتور برقی خودروهای نوین هیبریدی و برقی",
        "عینک‌های محافظ جوشکاری",
      ],
    },
    safety: {
      toxicityFa: "سمیت پایین تا متوسط",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "نگهداری زیر روغن معدنی برای پیشگیری از پوسته شدن اکسیدی.",
      hazardsFa: "سوزش چشم در تماس با پودر فلز.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["¹⁴¹Pr (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "¹⁴¹Pr",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "دوقلوی سبز که آهنرباهای مدرن خودروهای الکتریکی را مجهز به نیروی فوق‌العاده می‌کند.",
      funFactsFa: [
        "شیشه‌های دیدیمیم که حاوی پرازئودیمیم و نئودیمیم هستند، نور زرد مزاحم و سوزاننده سدیم در جوشکاری و شیشه‌گری را کاملاً فیلتر می‌کنند.",
        "افزودن پرازئودیمیم به آهنرباهای نئودیمیمی، مقاومت حرارتی آهنربا را بالا می‌برد.",
      ],
      naturalOccurrenceFa:
        "در کانی‌های باستانائزیت و مونازیت به همراه نئودیمیم استخراج می‌شود.",
      keyCompoundsFa: [
        "اکسید پرازئودیمیم (Pr₆O₁₁)",
        "کلرید پرازئودیمیم (PrCl₃)",
        "نیترات پرازئودیمیم (Pr(NO₃)₃)",
      ],
      educationalNotesFa:
        "رنگ سبز شفاف ترکیبات پرازئودیمیم ناشی از گذارهای f-f در ترازهای انرژی یون Pr³⁺ با پیک جذبی در ناحیه آبی-زرد طیف مرئی است.",
    },
  },
  // Element 60: Nd (نئودیمیم)
  {
    identity: {
      atomicNumber: 60,
      symbol: "Nd",
      nameFa: "نئودیمیم",
      nameEn: "Neodymium",
      pronunciationFa: "نئودیمیُم",
      descriptionFa:
        "سلطان بی‌رقیب آهنرباهای دائمی جهان و موتور محرکه خودروهای برقی و انرژی‌های تجدیدپذیر بادی.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 60,
      electrons: 60,
      neutrons: 84,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁴ 6s²",
      abbreviatedConfiguration: "[Xe] 4f⁴ 6s²",
      electronShells: [2, 8, 18, 22, 8, 2],
      valenceElectrons: 6,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 144.24,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 181,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 201,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 7.01,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای با اکسایش سریع در هوا، قلب قدرتمندترین آهنرباهای دائمی جهان",
      colorFa: "سفید-نقره‌ای با نمک‌های صورتی/بنفش",
      crystalStructureFa: "شش‌گوشه فشرده مضاعف (dhcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1297.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3347.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.19,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 16.5,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.14,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 533.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا با سرعت کدر شده و با رطوبت و اسیدها با شدت واکنش می‌دهد.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ با نمک‌های به رنگ ارغوانی مایل به سرخ با گستره فلوئورسانس لیزری بی‌نظیر.",
    },
    history: {
      discovererFa: "کارل آور فون ولسباخ",
      discoveryYear: "1885",
      nameOriginFa: "واژه یونانی neos به معنای نو و didymos به معنای دوقلو",
      namingExplanationFa:
        "به معنای «دوقلوی جدید» که پس از جداسازی کانی باستانی دیدیمیم کشف شد.",
    },
    applications: {
      industrial: [
        "قوی‌ترین آهنرباهای دائمی جهان (NdFeB) در توربین‌های بادی و موتورهای تسلا و خودروهای برقی",
        "بلورهای لیزر Nd:YAG در برشکاری دقیق و تسلیحات نظامی",
        "هارد دیسک‌های کامپیوتر و بلندگوهای مینیاتوری هدفون‌ها",
      ],
      scientific: [
        "بزرگ‌ترین تأسیسات همجوشی لیزری جهان (NIF) با باریکه‌های پرقدرت لیزر نئودیمیم",
      ],
      medical: [
        "لیزرهای Nd:YAG در چشم‌پزشکی برای درمان آب‌سیاه (گلوکوم) و جراحی‌های ظریف زیبایی پوست",
      ],
      everyday: [
        "آهنرباهای فوق‌قوی نئودیمیومی اسباب‌بازی‌ها و درب‌های کابینت",
        "بلندگوهای هدفون و اسپیکر گوشی",
      ],
    },
    safety: {
      toxicityFa: "سمیت متوسط، لخته‌کننده خون در مقادیر بالا",
      radioactivity: false,
      radiationType: "پرتوزایی ناچیز طبیعی (ایزوتوپ ¹⁴⁴Nd)",
      precautionsFa:
        "مراقبت شدید هنگام کار با آهنرباهای قوی نئودیمیم برای ممانعت از له شدن انگشتان و شکستگی.",
      hazardsFa:
        "بلعیدن دو یا چند آهنربای نئودیمیومی توسط کودکان سوراخ‌شدگی مرگبار روده ایجاد می‌کند.",
    },
    isotopes: {
      stableCount: 5,
      commonIsotopes: [
        "¹⁴²Nd (۲۷.۲٪)",
        "¹⁴۴Nd (۲۳.۸٪)",
        "¹۴۶Nd (۱۷.۲٪)",
        "¹۴۳Nd (۱۲.۲٪)",
        "¹۴۵Nd (۸.۳٪)",
      ],
      mostStableIsotope: "¹⁴²Nd",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "سلطان بی‌رقیب آهنرباهای دائمی جهان و موتور محرکه خودروهای برقی و انرژی‌های تجدیدپذیر بادی.",
      funFactsFa: [
        "یک آهنربای نئودیمیومی کوچک به اندازه یک سکه می‌تواند بیش از هزار برابر وزن خود را از جا بلند کند!",
        "شیشه‌های نئودیمیمی بسته به اینکه زیر نور خورشید باشند یا زیر نور لامپ فلورسنت، رنگشان بین یاسی و آبی تغییر می‌کند.",
      ],
      naturalOccurrenceFa:
        "در کانی‌های باستانائزیت و مونازیت در چین و ایالات متحده استخراج می‌شود.",
      keyCompoundsFa: [
        "آلیاژ Nd₂Fe₁₄B (آهنربای نئودیمیم)",
        "اکسید نئودیمیم (Nd₂O₃)",
        "کلرید نئودیمیم (NdCl₃)",
      ],
      educationalNotesFa:
        "میدان مغناطیسی خارق‌العاده آلیاژ Nd₂Fe₁₄B ناشی از جفت‌شدگی فرومغناطیسی میان الکترون‌های ۴f جفت‌نشده نئودیمیم و اوربیتال‌های آهن در یک ساختار بلوری با ناهمسانگردی مغناطیسی بالاست.",
    },
  },
  // Element 61: Pm (پرومتیم)
  {
    identity: {
      atomicNumber: 61,
      symbol: "Pm",
      nameFa: "پرومتیم",
      nameEn: "Promethium",
      pronunciationFa: "پرومِتیُم",
      descriptionFa:
        "تنها لانتانید رادیواکتیو بدون ایزوتوپ پایدار که انرژی باتری‌های اتمی کاوشگرهای فضایی را تأمین می‌کرد.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 61,
      electrons: 61,
      neutrons: 84,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁵ 6s²",
      abbreviatedConfiguration: "[Xe] 4f⁵ 6s²",
      electronShells: [2, 8, 18, 23, 8, 2],
      valenceElectrons: 5,
      commonOxidationStates: [3],
      allOxidationStates: [3],
    },
    physicalProperties: {
      atomicMass: {
        value: 145.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 180,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 199,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 7.26,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو نقره‌ای که در تاریکی در اثر پرتوزایی با تابش آبی-سبز ملایم می‌درخشد",
      colorFa: "نقره‌ای (با درخشش رادیواکتیو آبی)",
      crystalStructureFa: "شش‌گوشه فشرده مضاعف (dhcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1315.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3273.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.18,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 17.9,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.13,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 540.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa: "فلزی رادیواکتیو با خصلت اکسایش مشابه سایر لانتانیدها.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳؛ تمام ایزوتوپ‌های آن رادیواکتیو ناپایدار هستند.",
    },
    history: {
      discovererFa: "جیکوب مارینسکی و لورنس گلندنین",
      discoveryYear: "1945",
      nameOriginFa:
        "پرومتئوس (Prometheus) تایتان اساطیر یونان که آتش را برای انسان آورد",
      namingExplanationFa:
        "نام‌گذاری بر اساس تایتان حامی بشر که نماد مهار آتش انرژی هسته‌ای تلقی شد.",
    },
    applications: {
      industrial: [
        "باتری‌های اتمی هسته‌ای بتای فتوولتائیک برای ساعت‌ها و ابزارهای کاوشگر فضایی",
        "ضخامت‌سنج‌های رادیومتری بتا در صنایع نورد ورقه‌های فولادی",
      ],
      scientific: ["منبع پرتوهای بتای خالص در تحقیقات فیزیک هسته‌ای"],
      medical: [
        "تأمین انرژی طولانی‌مدت برای نخستین ضربان‌سازهای قلبی کاشتنی در دهه‌های گذشته",
      ],
      everyday: [
        "کاربرد روزمره تجاری ندارد؛ فقط در دستگاه‌های تخصصی نظامی و هوافضا",
      ],
    },
    safety: {
      toxicityFa: "خطرات رادیولوژیکی شدید، انباشته‌شونده در استخوان",
      radioactivity: true,
      radiationType: "پرتوزای بتا",
      precautionsFa:
        "نگهداری انحصاری در محفظه‌های دارای محافظ تشعشع بتا با شیشه اکریلیک.",
      hazardsFa:
        "پرتوزایی بتا و تولید اشعه ترمز (Bremsstrahlung) در برخورد با فلزات سنگین.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "¹⁴⁷Pm (نیمه‌عمر ۲.۶۲ سال)",
        "¹۴۵Pm (طولانی‌ترین نیمه‌عمر ۱۷.۷ سال)",
      ],
      mostStableIsotope: "¹⁴⁵Pm",
      halfLife: "۱۷.۷ سال",
    },
    additionalContent: {
      summaryFa:
        "تنها لانتانید رادیواکتیو بدون ایزوتوپ پایدار که انرژی باتری‌های اتمی کاوشگرهای فضایی را تأمین می‌کرد.",
      funFactsFa: [
        "تنها دو عنصر با عدد اتمی زیر ۸۳ هیچ ایزوتوپ پایداری ندارند: تکنسیم (۴۳) و پرومتیم (۶۱)!",
        "در پوسته کل کره زمین به طور طبیعی در هر لحظه کمتر از ۶۰۰ گرم پرومتیم وجود دارد.",
      ],
      naturalOccurrenceFa:
        "بسیار ناچیز در حد ردپا در سنگ‌های اورانیم و به صورت مصنوعی از سوخت مصرف‌شده رآکتورها استخراج می‌شود.",
      keyCompoundsFa: ["اکسید پرومتیم (Pm₂O₃)", "کلرید پرومتیم (PmCl₃)"],
      educationalNotesFa:
        "ناپایداری عجیب اتم‌های ۴۳ و ۶۱ بر اساس قانون ماتائوخ (Mattauch isobars) ناشی از عدم تعادل ویژه در جفت‌شدگی نوترون-پروتون در هسته‌های ایزوبار مجاور است.",
    },
  },
  // Element 62: Sm (ساماریم)
  {
    identity: {
      atomicNumber: 62,
      symbol: "Sm",
      nameFa: "ساماریم",
      nameEn: "Samarium",
      pronunciationFa: "ساماریُم",
      descriptionFa:
        "آهنربای پایدار در آتش و داغی موتورهای جنگنده و تسکین‌دهنده دردهای استخوانی بیماران سرطانی.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 62,
      electrons: 62,
      neutrons: 88,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁶ 6s²",
      abbreviatedConfiguration: "[Xe] 4f⁶ 6s²",
      electronShells: [2, 8, 18, 24, 8, 2],
      valenceElectrons: 6,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 150.36,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 180,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 198,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 7.52,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز سخت، نقره‌ای با اکسایش ملایم در هوا و مقاومت مغناطیسی استثنایی در دماهای بالا",
      colorFa: "سفید-نقره‌ای",
      crystalStructureFa: "لوزی‌سطحی ساماریمی (۹ لایه)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1345.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2067.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.197,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 13.3,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.17,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 544.5,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا به آرامی کدر می‌شود و در دمای ۱۵۰ درجه خودبه‌خود آتش می‌گیرد.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳؛ در حالت +۲ (نظیر یدید ساماریم SmI₂) یک کاهنده تک‌الکترونی نامدار در سنتز آلی است.",
    },
    history: {
      discovererFa: "پل امیل لکوک دو بوابودران",
      discoveryYear: "1879",
      nameOriginFa: "مهندس معدن روس واسیلی سامارسکی-بیخووتس",
      namingExplanationFa:
        "نخستین عنصری در تاریخ که به افتخار یک فرد زنده (مهندس معدن کانی سامارسکیت) نام‌گذاری شد.",
    },
    applications: {
      industrial: [
        "آهنرباهای ساماریم-کبالت (SmCo) با مقاومت دمایی بالا تا بیش از ۳۵۰ درجه در موتورهای موشک و جنگنده‌ها",
        "میله‌های کنترل جذب نوترون در رآکتورهای اتمی",
      ],
      scientific: [
        "معرف کاگان (Kagan's reagent, SmI₂) در شیمی آلی برای احیای گزینشی پیوندها",
      ],
      medical: [
        "رادیوداروی ساماریم-۱۵۳ (Quadramet) برای تسکین دردهای شدید استخوانی در سرطان‌های متاستاتیک",
      ],
      everyday: [
        "آهنرباهای مقاوم به حرارت در پیکاپ گیتارهای الکتریک و موتورهای خاص صنعتی",
      ],
    },
    safety: {
      toxicityFa: "سمیت پایین تا متوسط",
      radioactivity: false,
      radiationType: "پرتوزایی آلفای بسیار ناچیز طبیعی (ایزوتوپ ¹⁴⁷Sm)",
      precautionsFa: "کنترل مواجهه با پودر فلزی به دلیل خطر اشتعال در هوا.",
      hazardsFa: "سوزش چشم و بافت تنفسی در مواجهه با پودر اکسید.",
    },
    isotopes: {
      stableCount: 4,
      commonIsotopes: [
        "¹⁵²Sm (۲۶.۷٪)",
        "¹⁵۴Sm (۲۲.۸٪)",
        "¹۴۸Sm (۱۱.۲٪)",
        "¹۴۴Sm (۳.۱٪)",
        "¹۴۷Sm (۱۵.۰٪ نیمه‌عمر ۱۰۶ میلیارد سال)",
      ],
      mostStableIsotope: "¹⁵²Sm",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "آهنربای پایدار در آتش و داغی موتورهای جنگنده و تسکین‌دهنده دردهای استخوانی بیماران سرطانی.",
      funFactsFa: [
        "ساماریم نخستین عنصر شیمیایی تاریخ بود که از روی نام یک شخص حقیقی نام‌گذاری شد.",
        "آهنرباهای ساماریم-کبالت بر خلاف آهنرباهای نئودیمیم، در دماهای بسیار بالا تا ۷۰۰ درجه سانتی‌گراد مغناطیس خود را از دست نمی‌دهند.",
      ],
      naturalOccurrenceFa:
        "در کانی‌های باستانائزیت و مونازیت همراه با سایر خاک‌های کمیاب استخراج می‌شود.",
      keyCompoundsFa: [
        "آلیاژ SmCo₅ و Sm₂Co₁₇",
        "یدید ساماریم (II) (معرف کاگان، SmI₂)",
        "اکسید ساماریم (Sm₂O₃)",
      ],
      educationalNotesFa:
        "معرف کاگان (SmI₂) با رنگ آبی تیره متمایز خود، یکی از تطبیق‌پذیرترین احیاکننده‌های تک‌الکترونی انتقال الکترون (SET) در سنتز ترکیبات دارویی مدرن است.",
    },
  },
  // Element 63: Eu (اروپیم)
  {
    identity: {
      atomicNumber: 63,
      symbol: "Eu",
      nameFa: "اروپیم",
      nameEn: "Europium",
      pronunciationFa: "اروپاتیُم",
      descriptionFa:
        "درخشان‌ترین فسفر سرخ جهان و نگهبان نامرئی اسکناس‌های یورو در برابر جعل با درخشش قرمز فرابنفش.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 63,
      electrons: 63,
      neutrons: 89,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁷ 6s²",
      abbreviatedConfiguration: "[Xe] 4f⁷ 6s²",
      electronShells: [2, 8, 18, 25, 8, 2],
      valenceElectrons: 7,
      commonOxidationStates: [3, 2],
      allOxidationStates: [3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 151.96,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 180,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 198,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 5.244,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نرم، واکنش‌پذیرترین عنصر خانواده لانتانیدها که در آب و هوا سریعاً اکسید می‌شود",
      colorFa: "سفید-نقره‌ای با اکسایش سریع",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1099.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1802.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.182,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 13.9,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.2,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 547.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "واکنش‌پذیرترین لانتانید؛ در هوا به سرعت تیره شده و با آب سرد به شدت واکنش داده و گاز هیدروژن تولید می‌کند.",
      chemicalBehaviorFa:
        "پایداری استثنایی حالت اکسایش +۲ با آرایش الکترونی نیمه‌پر [Xe] 4f⁷؛ انتشار فلوئورسانس سرخ درخشان در حالت +۳ و آبی در حالت +۲.",
    },
    history: {
      discovererFa: "اوژن آناتول دمارسه",
      discoveryYear: "1896",
      nameOriginFa: "قاره اروپا (Europe)",
      namingExplanationFa: "نام‌گذاری توسط دمارسه به افتخار قاره اروپا.",
    },
    applications: {
      industrial: [
        "فسفرهای سرخ درخشان نمایشگرهای تلویزیون و لامپ‌های فلورسنت (Eu³⁺)",
        "نشانگرهای امنیتی ضدجعل در چاپ اسکناس‌های یورو با درخشش قرمز زیر نور فرابنفش",
        "میله‌های کنترل جذب نوترون رآکتورهای اتمی",
      ],
      scientific: [
        "پروب‌های فلوئورسانس با تأخیر زمانی (TRF) در بررسی بیوشیمیایی و ایمونواسی سلول‌ها",
      ],
      medical: [
        "کیت‌های تشخیص آزمایشگاهی بسیار حساس تست‌های بارداری و تومورمارکرها",
      ],
      everyday: [
        "فسفر لامپ‌های مهتابی کم‌مصرف",
        "امنیتی ضدتقلب اسکناس‌های بانکی",
      ],
    },
    safety: {
      toxicityFa: "سمیت پایین",
      radioactivity: false,
      radiationType: "پرتوزایی ناچیز طبیعی (ایزوتوپ ¹⁵¹Eu)",
      precautionsFa:
        "نگهداری انحصاری در آمپول‌های شیشه‌ای خلاء یا زیر روغن به دلیل اکسایش سریع در هوا.",
      hazardsFa: "خطر اشتعال ملایم پودر فلز.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: [
        "¹⁵³Eu (۵۲.۲٪ پایدار)",
        "¹⁵¹Eu (۴۷.۸٪ پرتوزای آلفا با نیمه‌عمر ۵ ضربدر ۱۰¹⁸ سال)",
      ],
      mostStableIsotope: "¹⁵³Eu",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "درخشان‌ترین فسفر سرخ جهان و نگهبان نامرئی اسکناس‌های یورو در برابر جعل با درخشش قرمز فرابنفش.",
      funFactsFa: [
        "تمام اسکناس‌های اتحادیه اروپا (یورو) دارای نشانگرهای فلوئورسانس حاوی اروپیم هستند که زیر لامپ سیاه فرابنفش به رنگ قرمز می‌درخشند!",
        "اروپیم واکنش‌پذیرترین لانتانید است و چگالی آن از لانتانیدهای مجاور بسیار کمتر است زیرا تنها ۲ الکترون برای پیوند فلزی ارائه می‌دهد.",
      ],
      naturalOccurrenceFa:
        "بسیار گران‌قیمت‌تر از سایر لانتانیدها در کانی‌های مونازیت و باستانائزیت.",
      keyCompoundsFa: [
        "اکسید اروپیم (Eu₂O₃)",
        "اکسید فلوئورسنت Eu:Y₂O₃",
        "کلرید اروپیم (EuCl₃)",
      ],
      educationalNotesFa:
        "آرایش 4f⁷ در یون اروپیم دوظرفیتی Eu²⁺ به دلیل نیمه‌پر بودن زیرلایه پایداری کوانتومی فوق‌العاده‌ای دارد که خصلتی شبیه به فلزات قلیایی خاکی به آن می‌بخشد.",
    },
  },
  // Element 64: Gd (گادولینیم)
  {
    identity: {
      atomicNumber: 64,
      symbol: "Gd",
      nameFa: "گادولینیم",
      nameEn: "Gadolinium",
      pronunciationFa: "گادولینیُم",
      descriptionFa:
        "ستاره تصویربرداری مغناطیسی MRI جهان با ۷ الکترون جفت‌نشده و قوی‌ترین بلعنده نوترون‌های رآکتور هسته‌ای.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 64,
      electrons: 64,
      neutrons: 93,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁷ 5d¹ 6s²",
      abbreviatedConfiguration: "[Xe] 4f⁷ 5d¹ 6s²",
      electronShells: [2, 8, 18, 25, 9, 2],
      valenceElectrons: 8,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 157.25,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 180,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 196,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 7.9,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای چکش‌خوار با ویژگی‌های مغناطیسی استثنایی و بالاترین قدرت جذب نوترون در جهان",
      colorFa: "سفید-نقره‌ای",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1587.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3546.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.236,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.6,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.2,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 593.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوای مرطوب به آرامی تیره شده و اکسید پوسته شونده تولید می‌کند.",
      chemicalBehaviorFa:
        "دارای ۷ الکترون جفت‌نشده در اوربیتال نیمه‌پر [Xe] 4f⁷ 5d¹ 6s²؛ پارامغناطیس فوق‌العاده بالا و فرومغناطیس در دمای زیر ۲۰ درجه سلسیوس.",
    },
    history: {
      discovererFa: "ژان شارل گالیسار دو مارینیاک",
      discoveryYear: "1880",
      nameOriginFa: "یوهان گادولین (کاشف نخستین خاک کمیاب ایتریم)",
      namingExplanationFa:
        "نام‌گذاری به افتخار شیمیدان فنلاندی یوهان گادولین، پیشگام پژوهش‌های عناصر خاک‌های کمیاب.",
    },
    applications: {
      industrial: [
        "ماده حاجب تزریقی اصلی در اسکن‌های تصویربرداری تشدید مغناطیسی MRI برای روشن کردن تومورها",
        "میله‌های کنترل مهارکننده اضطراری نوترون در نیروگاه‌های هسته‌ای (ایزوتوپ Gd-157)",
        "سرمایش مغناطیسی بر پایه اثر مگنتوکالریک",
      ],
      scientific: [
        "افزودن به آشکارسازهای نوترینو (مانند سوپرکامیوکانده ژاپن) برای به دام انداختن نوترون‌ها با گسیل گاما",
      ],
      medical: [
        "کمپلکس‌های کی‌لیت گادولینیم (Gd-DTPA) به عنوان کنتراست‌ایجنت در بیش از ۳۰ میلیون اسکن MRI سالانه در جهان",
      ],
      everyday: ["تصویربرداری ام‌آرآی تخصصی بیمارستان‌ها"],
    },
    safety: {
      toxicityFa:
        "یون آزاد گادولینیم سمی و مهارکننده کانال‌های کلسیم است؛ فرم کی‌لیت آن بسیار پایدار و ایمن است",
      radioactivity: false,
      radiationType: "پرتوزایی ناچیز طبیعی (ایزوتوپ ¹⁵²Gd)",
      precautionsFa:
        "ارزیابی عملکرد کلیه بیمار قبل از تزریق داروی حاوی گادولینیم برای پیشگیری از فیبروز سیستمیک کلیوی (NSF).",
      hazardsFa:
        "سندرم NSF در بیماران دچار نارسایی حاد کلیه در صورت عدم دفع دارو.",
    },
    isotopes: {
      stableCount: 6,
      commonIsotopes: [
        "¹۵۸Gd (۲۴.۸٪)",
        "¹۶۰Gd (۲۱.۹٪)",
        "¹۵۶Gd (۲۰.۵٪)",
        "¹۵۷Gd (۱۵.۷٪ بالاترین سطح مقطع جذب نوترون)",
        "¹۵۵Gd (۱۴.۸٪)",
        "¹۵۴Gd (۲.۲٪)",
      ],
      mostStableIsotope: "¹⁵⁸Gd",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "ستاره تصویربرداری مغناطیسی MRI جهان با ۷ الکترون جفت‌نشده و قوی‌ترین بلعنده نوترون‌های رآکتور هسته‌ای.",
      funFactsFa: [
        "گادولینیم-۱۵۷ بالاترین سطح مقطع جذب نوترون‌های حرارتی (۲۵۴٬۰۰۰ بارن!) را در میان تمام ایزوتوپ‌های پایدار جهان دارد.",
        "گادولینیم دمای کوری حدود ۱۹ درجه سلسیوس دارد؛ یعنی در روز خنک زمستانی جذب آهنربا می‌شود، اما در روز گرم تابستانی خاصیت فرومغناطیس خود را از دست می‌دهد!",
      ],
      naturalOccurrenceFa: "در کانی‌های مونازیت و باستانائزیت استخراج می‌شود.",
      keyCompoundsFa: [
        "گادودیامید و گادوپنتتات دیمگلومین (داروی MRI)",
        "اکسید گادولینیم (Gd₂O₃)",
        "گادولینیم گالیوم گارنت (GGG)",
      ],
      educationalNotesFa:
        "یون Gd³⁺ به دلیل داشتن ۷ الکترون منفرد، بیشترین ممان مغناطیسی اسپینی را دارد که زمان استراحت آب بافت‌های مجاور را کوتاه کرده و تصاویر شفاف ام‌آرآی را ممکن می‌سازد.",
    },
  },
  // Element 65: Tb (تربیم)
  {
    identity: {
      atomicNumber: 65,
      symbol: "Tb",
      nameFa: "تربیم",
      nameEn: "Terbium",
      pronunciationFa: "تِربیُم",
      descriptionFa:
        "فسفر سبز خیره‌کننده نمایشگرها و آلیاژ ترفنول-دی که هر سطحی را با ارتعاش مغناطیسی به بلندگو تبدیل می‌کند.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 65,
      electrons: 65,
      neutrons: 94,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁹ 6s²",
      abbreviatedConfiguration: "[Xe] 4f⁹ 6s²",
      electronShells: [2, 8, 18, 27, 8, 2],
      valenceElectrons: 9,
      commonOxidationStates: [3],
      allOxidationStates: [4, 3, 2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 158.93,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 177,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 194,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 8.23,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای-سفید با خصلت فلوئورسانس سبز لیمویی بسیار درخشان و انبساط مغناطیسی شدید",
      colorFa: "سفید-نقره‌ای با فلوئورسانس سبز",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1629.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3503.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.182,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 11.1,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.2,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 565.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در مجاورت هوا کدر می‌شود و در اسیدها با خروج گاز هیدروژن حل می‌گردد.",
      chemicalBehaviorFa:
        "دارای دو حالت اکسایش +۳ (فلوئورسانس سبز) و +۴ در دی‌اکسید تربیم TbO₂.",
    },
    history: {
      discovererFa: "کارل گوستاو موساندر",
      discoveryYear: "1843",
      nameOriginFa: "روستای ایتربی (Ytterby) در سوئد",
      namingExplanationFa:
        "نام‌گذاری بر اساس نام روستای معدنی مشهور ایتربی در سوئد.",
    },
    applications: {
      industrial: [
        "آلیاژ ترفنول-دی (Terfenol-D) با بالاترین مغناطوتنگش (تغییر طول با میدان مغناطیسی) در سونارهای زیردریایی و بلندگوهای ارتعاشی",
        "فسفر سبز درخشان لامپ‌های فلورسنت سه‌رنگ و لامپ‌های LED",
        "ردیاب‌های میکروبی بیوتروریسم",
      ],
      scientific: [
        "حسگرهای اپتیکی شناسایی هاگ‌های سیاه‌زخم با فلوئورسانس تربیم",
      ],
      medical: ["صفحات تشدید پرتو ایکس برای کاهش دوز تابش رادیولوژی به بیمار"],
      everyday: [
        "اسپیکرهای آکوستیک ارتعاشی که شیشه یا میز را به بلندگو تبدیل می‌کنند",
        "لامپ‌های کم‌مصرف سبز فسفری",
      ],
    },
    safety: {
      toxicityFa: "سمیت پایین",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "مراقبت در فرآیندهای ذوب آلیاژهای پودری ترفنول.",
      hazardsFa: "سوزش خفیف مخاط تنفسی.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["¹⁵⁹Tb (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "¹⁵⁹Tb",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فسفر سبز خیره‌کننده نمایشگرها و آلیاژ ترفنول-دی که هر سطحی را با ارتعاش مغناطیسی به بلندگو تبدیل می‌کند.",
      funFactsFa: [
        "آلیاژ Terfenol-D در حضور میدان مغناطیسی منبسط می‌شود و نیروی مکانیکی عظیمی تولید می‌کند که می‌تواند میز یا پنجره را تبدیل به بلندگوی صوتی باکیفیت کند!",
        "تربیم یکی از چهار عنصری است که نامش مستقیماً از روستای کوچک ایتربی سوئد گرفته شده است.",
      ],
      naturalOccurrenceFa:
        "بسیار کمیاب در کانی‌های مونازیت و باستانائزیت همراه با سایر خاک‌های کمیاب سنگین.",
      keyCompoundsFa: [
        "اکسید تربیم (Tb₄O₇)",
        "آلیاژ ترفنول-دی (Tb_{0.3}Dy_{0.7}Fe₂)",
        "کلرید تربیم (TbCl₃)",
      ],
      educationalNotesFa:
        "طیف گسیل یون Tb³⁺ دارای یک خط بسیار قدرتمند و باریک در طول‌موج ۵۴۵ نانومتر است که همان رنگ سبز زمردی درخشان در لامپ‌های روشنایی ترای‌کروماتیک را پدید می‌آورد.",
    },
  },
  // Element 66: Dy (دیسپروزیم)
  {
    identity: {
      atomicNumber: 66,
      symbol: "Dy",
      nameFa: "دیسپروزیم",
      nameEn: "Dysprosium",
      pronunciationFa: "دیسپروزیُم",
      descriptionFa:
        "عنصر دیربه‌دست‌آمده که ضامن مقاومت مغناطیسی موتور خودروهای الکتریکی در حرارت بالای بزرگراه‌هاست.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 66,
      electrons: 66,
      neutrons: 97,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁰ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹⁰ 6s²",
      electronShells: [2, 8, 18, 28, 8, 2],
      valenceElectrons: 10,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 162.5,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 178,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 192,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 8.54,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای با درخشش روشن با بالاترین ممان مغناطیسی در بین عناصر و مقاومت دمایی بالا",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1680.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2840.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.17,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.7,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.22,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 573.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوای مرطوب به آرامی اکسید شده و با آب به سرعت هیدروکسید تولید می‌کند.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ با بالاترین ممان مغناطیسی (۱۰.۶ مگنتون بور) در میان عناصر جدول.",
    },
    history: {
      discovererFa: "پل امیل لکوک دو بوابودران",
      discoveryYear: "1886",
      nameOriginFa: "واژه یونانی dysprositos به معنای به سختی دست‌یافتنی",
      namingExplanationFa:
        "به دلیل سختی فوق‌العاده زیاد و مراحل متعدد تبلور برای جداسازی آن از سایر لانتانیدها.",
    },
    applications: {
      industrial: [
        "افزودنی حیاتی به آهنرباهای نئودیمیم (NdFeB) برای حفظ قدرت مغناطیسی در دمای بالای موتور خودروهای برقی",
        "میله‌های کنترل جذب نوترون در تأسیسات هسته‌ای",
        "لامپ‌های متال هالید با روشنایی بالا",
      ],
      scientific: [
        "آلیاژ ترفنول-دی همراه با تربیم برای ادوات آکوستیک زیرسطحی نایوی دریایی",
      ],
      medical: ["بررسی داربست‌های زیستی و حسگرهای تشدید مغناطیسی"],
      everyday: ["موتورهای کششی الکتریکی خودروهای برقی تسلا و هیبریدی"],
    },
    safety: {
      toxicityFa: "سمیت پایین",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "پیشگیری از اشتعال براده‌های فلزی در ماشین‌کاری.",
      hazardsFa: "سوزش چشم ناشی از غبار اکسید.",
    },
    isotopes: {
      stableCount: 7,
      commonIsotopes: [
        "¹۶۴Dy (۲۸.۳٪)",
        "¹۶۲Dy (۲۵.۵٪)",
        "¹۶۳Dy (۲۴.۹٪)",
        "¹۶۱Dy (۱۸.۹٪)",
        "¹۶۰Dy (۲.۳٪)",
        "¹۵۸Dy (۰.۱٪)",
        "¹۵۶Dy (۰.۰۶٪)",
      ],
      mostStableIsotope: "¹⁶۴Dy",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر دیربه‌دست‌آمده که ضامن مقاومت مغناطیسی موتور خودروهای الکتریکی در حرارت بالای بزرگراه‌هاست.",
      funFactsFa: [
        "بدون افزودن دیسپروزیم به آهنرباهای نئودیمیم، موتور خودروهای برقی در اثر گرمای کارکرد فوراً خاصیت مغناطیسی خود را از دست می‌دادند!",
        "دیسپروزیم بالاترین قدرت قطبش مغناطیسی (ممان مغناطیسی) را در میان تمام عناصر طبیعت دارد.",
      ],
      naturalOccurrenceFa:
        "در کانی‌های زنوتایم و خاک‌های رس جذب‌کننده یونی در جنوب چین استخراج می‌شود.",
      keyCompoundsFa: [
        "اکسید دیسپروزیم (Dy₂O₃)",
        "یدید دیسپروزیم (DyI₃)",
        "کلرید دیسپروزیم (DyCl₃)",
      ],
      educationalNotesFa:
        "دیسپروزیم پایداری آنیزوتروپی مغناطیسی بلور را در فاز Nd₂Fe₁₄B به شدت بالا می‌برد و اصطلاحاً نیروی وادارندگی (Coercivity) آهنربا را افزایش می‌دهد.",
    },
  },
  // Element 67: Ho (هولمیم)
  {
    identity: {
      atomicNumber: 67,
      symbol: "Ho",
      nameFa: "هولمیم",
      nameEn: "Holmium",
      pronunciationFa: "هُلمیُم",
      descriptionFa:
        "نگین لیزرهای جراحی ارولوژی و سنگ‌شکن کلیه و استاندارد بین‌المللی کالیبراسیون دقیق طیف‌سنج‌ها.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 67,
      electrons: 67,
      neutrons: 98,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹¹ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹¹ 6s²",
      electronShells: [2, 8, 18, 29, 8, 2],
      valenceElectrons: 11,
      commonOxidationStates: [3],
      allOxidationStates: [3],
    },
    physicalProperties: {
      atomicMass: {
        value: 164.93,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 176,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 192,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 8.79,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نرم، چکش‌خوار نقره‌ای با خواص مغناطیسی کم‌نظیر و رنگ‌های شگفت‌انگیز در شیشه زیر نورهای مختلف",
      colorFa: "سفید-نقره‌ای متالیک",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1734.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2873.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.165,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 16.2,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.23,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 581.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوای خشک پایدار است اما در رطوبت به آرامی زرد شده و اکسید Ho₂O₃ تولید می‌کند.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ با ممان مغناطیسی برابر با دیسپروزیم (۱۰.۶ مگنتون بور) و خطوط جذبی بسیار تیز اپتیکی.",
    },
    history: {
      discovererFa: "پر تئودور کلوه و مارک دلافونتین",
      discoveryYear: "1878",
      nameOriginFa: "واژه لاتین Holmia به معنای شهر استکهلم",
      namingExplanationFa:
        "نام‌گذاری توسط کلوه به افتخار زادگاهش شهر استکهلم سوئد.",
    },
    applications: {
      industrial: [
        "لیزرهای هولمیم:یاگ (Ho:YAG) با طول موج ۲.۱ میکرومتر در جراحی‌های پزشکی و ارولوژی",
        "متمرکزکننده‌های قطب مغناطیسی در آهنرباهای قدرتمند آزمایشگاهی برای افزایش چگالی شار مغناطیسی",
        "رنگ زرد و سرخ شیشه‌ها و سرامیک‌های تزئینی",
      ],
      scientific: [
        "کالیبراسیون طیف‌سنج‌های نوری مرئی-فرابنفش با فیلترهای اکسید هولمیم دارای قله‌های جذبی بسیار تیز و استاندارد بین‌المللی",
      ],
      medical: [
        "جراحی سنگ کلیه و پروستات با لیزر Ho:YAG برای پودر کردن سنگ‌ها بدون آسیب به بافت کلیه",
      ],
      everyday: [
        "کاربرد مستقیم تجاری عمومی ندارد؛ تجهیزات پیشرفته اتاق عمل بیمارستان",
      ],
    },
    safety: {
      toxicityFa: "سمیت پایین",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "مراقبت در جابجایی پودرهای فلزی در دماهای بالا.",
      hazardsFa: "سوزش چشم ناشی از غبار کانی.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["¹⁶⁵Ho (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "¹⁶⁵Ho",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "نگین لیزرهای جراحی ارولوژی و سنگ‌شکن کلیه و استاندارد بین‌المللی کالیبراسیون دقیق طیف‌سنج‌ها.",
      funFactsFa: [
        "لیزر هولمیم:یاگ چنان بافت آب را دقیق تبخیر می‌کند که جراحان اورولوژی با آن سنگ‌های کلیه را به راحتی به غبار تبدیل می‌کنند!",
        "شیشه‌های حاوی هولمیم زیر نور خورشید زرد-هلویی و زیر لامپ فلورسنت به رنگ قرمز-نارنجی جادویی تغییر رنگ می‌دهند.",
      ],
      naturalOccurrenceFa:
        "در مقادیر بسیار ناچیز در کانی‌های مونازیت و گادولینیت یافت می‌شود.",
      keyCompoundsFa: [
        "اکسید هولمیم (Ho₂O₃)",
        "کلرید هولمیم (HoCl₃)",
        "بلور لیزری Ho:YAG",
      ],
      educationalNotesFa:
        "طیف جذبی اکسید هولمیم در اسید پرکلریک دارای بیش از ۱۴ قله جذبی بی‌نهایت تیز است و برای دهه‌ها توسط استاندارد ملی آمریکا (NIST) برای کالیبره کردن طول‌موج اسپکتروفتومترها در جهان به کار می‌رود.",
    },
  },
  // Element 68: Er (اربیم)
  {
    identity: {
      atomicNumber: 68,
      symbol: "Er",
      nameFa: "اربیم",
      nameEn: "Erbium",
      pronunciationFa: "اِربیُم",
      descriptionFa:
        "عنصر نجات‌بخش اینترنت جهان در کابل‌های زیردریایی و لیزر ترمیم بدون درد دندان‌پزشکی.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 68,
      electrons: 68,
      neutrons: 99,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹² 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹² 6s²",
      electronShells: [2, 8, 18, 30, 8, 2],
      valenceElectrons: 12,
      commonOxidationStates: [3],
      allOxidationStates: [3],
    },
    physicalProperties: {
      atomicMass: {
        value: 167.26,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 176,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 189,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 9.066,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای نرم با نمک‌های به رنگ صورتی بسیار ملیح و نقش اساسی در تقویت فیبر نوری اینترنت",
      colorFa: "سفید-نقره‌ای با نمک‌های صورتی",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1802.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3141.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.168,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 14.5,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.24,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 589.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر هوا نسبتاً مقاوم است اما به آرامی اکسید شده و لایه صورتی کم‌رنگ Er₂O₃ ایجاد می‌کند.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ با گسیل فوتون در طول‌موج دقیق ۱.۵۵ میکرومتر (کمترین تضعیف نور در فیبر سیلیکا).",
    },
    history: {
      discovererFa: "کارل گوستاو موساندر",
      discoveryYear: "1843",
      nameOriginFa: "روستای ایتربی (Ytterby) در سوئد",
      namingExplanationFa:
        "نام‌گذاری از روی نام روستای معدنی پرآوازه ایتربی در نزدیکی استکهلم سوئد.",
    },
    applications: {
      industrial: [
        "تقویت‌کننده‌های نوری فیبر دوپ شده با اربیم (EDFA) که انتقال داده‌های اینترنت بین قاره‌ای را زیر اقیانوس‌ها ممکن می‌کنند",
        "لیزرهای پوست Er:YAG در زیبایی و لایه‌برداری و درمان اسکار",
        "رنگ صورتی ظریف در شیشه عینک‌های آفتابی و جواهرات بدلی",
      ],
      scientific: [
        "تقویت بدون تبدیل به سیگنال الکتریکی در مخابرات کابل‌های فیبر نوری سراسر جهان",
      ],
      medical: [
        "لیزرهای دندان‌پزشکی Er:YAG برای تراشیدن بدون درد دندان بدون نیاز به بی‌حسی",
      ],
      everyday: [
        "اینترنت پرسرعت جهانی زیر کابل‌های اقیانوسی",
        "عینک‌های صورتی فانتزی",
      ],
    },
    safety: {
      toxicityFa: "سمیت پایین",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کنترل مواجهه صنعتی با پودر اکسید در خطوط تولید فیبر نوری.",
      hazardsFa: "سوزش چشم در تماس با ذرات غبار.",
    },
    isotopes: {
      stableCount: 6,
      commonIsotopes: [
        "¹۶۶Er (۳۳.۵٪)",
        "¹۶۸Er (۲۶.۹٪)",
        "¹۶۷Er (۲۲.۹٪)",
        "¹۷۰Er (۱۴.۹٪)",
        "¹۶۴Er (۱.۶٪)",
        "¹۶۲Er (۰.۱٪)",
      ],
      mostStableIsotope: "¹۶۶Er",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر نجات‌بخش اینترنت جهان در کابل‌های زیردریایی و لیزر ترمیم بدون درد دندان‌پزشکی.",
      funFactsFa: [
        "سیگنال‌های اینترنت بین‌المللی که از کف اقیانوس‌ها عبور می‌کنند، هر ۵۰ تا ۸۰ کیلومتر توسط تکه‌ای فیبر نوری آغشته به اتم‌های اربیم (EDFA) تقویت می‌شوند!",
        "یکی دیگر از ۴ عنصری است که نامش به افتخار روستای ایتربی ثبت شده است.",
      ],
      naturalOccurrenceFa:
        "همراه با سایر لانتانیدها در کانی‌های مونازیت و باستانائزیت استخراج می‌شود.",
      keyCompoundsFa: [
        "اکسید اربیم صورتی (Er₂O₃)",
        "بلور لیزری Er:YAG",
        "کلرید اربیم (ErCl₃)",
      ],
      educationalNotesFa:
        "طول‌موج تابش اربیم (۱.۵۴ میکرومتر) دقیقاً منطبق بر پنجره مخابراتی با کمترین میزان پراکندگی ریلی و جذب در شیشه سیلیس است که پهنای باند جهانی وب را امکان‌پذیر کرده است.",
    },
  },
  // Element 69: Tm (تولیم)
  {
    identity: {
      atomicNumber: 69,
      symbol: "Tm",
      nameFa: "تولیم",
      nameEn: "Thulium",
      pronunciationFa: "تولیُم",
      descriptionFa:
        "کمیاب‌ترین لانتانید طبیعی و منبع پرتابل و بدون برق پرتو ایکس برای امدادگران مناطق بحران‌زده.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 69,
      electrons: 69,
      neutrons: 100,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹³ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹³ 6s²",
      electronShells: [2, 8, 18, 31, 8, 2],
      valenceElectrons: 13,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 168.93,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 176,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 190,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 9.32,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نرم، چکش‌خوار، نقره‌ای و درخشان که پس از پرومتیم کمیاب‌ترین لانتانید در پوسته زمین است",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1818.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2223.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.16,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 16.9,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.25,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 596.7,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا کدر شده و با آب به آرامی و با اسیدها به سرعت واکنش می‌دهد.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ با محلول‌های سبز کم‌رنگ؛ قابلیت تابش فلوئورسانس آبی در اثر تابش فروسرخ (پدیده تبدیل بالارونده Upconversion).",
    },
    history: {
      discovererFa: "پر تئودور کلوه",
      discoveryYear: "1879",
      nameOriginFa: "سرزمین تولی (Thule) نام کهن اسکاندیناوی در اساطیر باستان",
      namingExplanationFa:
        "نام‌گذاری بر اساس نام باستانی شمالی‌ترین سرزمین شناخته‌شده در یونان کهن (منطقه اسکاندیناوی).",
    },
    applications: {
      industrial: [
        "دستگاه‌های پرتابل و سیار رادیوگرافی و پرتو ایکس بدون نیاز به ژنراتور برق با رادیوایزوتوپ تولیم-۱۷۰",
        "لیزرهای جراحی تومورهای مغزی Tm:YAG با جذب سطحی بسیار بالا و برش میلی‌متری فوق‌العاده ظریف",
      ],
      scientific: [
        "نانوذرات با تبدیل بالارونده اپتیکی (Upconverting nanoparticles) در بیوفوتونیک و تصویربرداری سلولی",
      ],
      medical: [
        "تجهیزات رادیولوژی دندان‌پزشکی سیار و لیزرهای جراحی سرطان‌های بافت نرم",
      ],
      everyday: [
        "دستگاه‌های عیب‌یابی اشعه ایکس میدانی در لوله‌های دورافتاده نفت و گاز",
      ],
    },
    safety: {
      toxicityFa: "سمیت پایین",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کنترل مواجهه رادیولوژیکی در کار با چشمه‌های ایزوتوپی تولیم-۱۷۰.",
      hazardsFa: "خطر تشعشع در ایزوتوپ‌های مصنوعی تابشگر بتا و گامای نرم.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: [
        "¹⁶۹Tm (۱۰۰٪ فراوانی طبیعی)",
        "¹۷۰Tm (رادیوایزوتوپ با نیمه‌عمر ۱۲۸ روز)",
      ],
      mostStableIsotope: "¹⁶۹Tm",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "کمیاب‌ترین لانتانید طبیعی و منبع پرتابل و بدون برق پرتو ایکس برای امدادگران مناطق بحران‌زده.",
      funFactsFa: [
        "چشمه رادیواکتیو تولیم-۱۷۰ می‌تواند دستگاه‌های پرتو ایکس کوچک و بدون نیازی به برق یا باتری بسازد که برای مناطق زلزله‌زده نجات‌بخش است!",
        "تولیم یکی از گران‌ترین عناصر خانواده خاک‌های کمیاب به شمار می‌رود.",
      ],
      naturalOccurrenceFa:
        "بسیار کمیاب (تنها ۰.۵ میلی‌گرم در هر کیلوگرم پوسته زمین) در کانی‌های مونازیت و کسنوتیم.",
      keyCompoundsFa: [
        "اکسید تولیم (Tm₂O₃)",
        "بلور لیزری Tm:YAG",
        "کلرید تولیم (TmCl₃)",
      ],
      educationalNotesFa:
        "لیزر تولیم (طول‌موج حدود ۲ میکرومتر) ضریب جذبی در آب دارد که دقیقاً ۴ برابر بیشتر از لیزر هولمیم است و این امر آسیب حرارتی جانبی به بافت‌های عمیق را در حین جراحی به حداقل می‌رساند.",
    },
  },
  // Element 70: Yb (ایتربیم)
  {
    identity: {
      atomicNumber: 70,
      symbol: "Yb",
      nameFa: "ایتربیم",
      nameEn: "Ytterbium",
      pronunciationFa: "ایتِربیُم",
      descriptionFa:
        "ستاره محاسبات کوانتومی، قلب تپنده لیزرهای فیبر پرقدرت کارخانجات خودروسازی و چهارمین عنصر روستای ایتربی.",
    },
    classification: {
      group: null,
      period: 6,
      block: "f",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 70,
      electrons: 70,
      neutrons: 103,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 6s²",
      electronShells: [2, 8, 18, 32, 8, 2],
      valenceElectrons: 2,
      commonOxidationStates: [3, 2],
      allOxidationStates: [3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 173.05,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 176,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 187,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 6.9,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نرم، چکش‌خوار، نقره‌ای با جلای درخشان و دو حالت اکسایش بسیار متمایز",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1097.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1469.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.155,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 38.5,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.1,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 603.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -2.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا به آرامی کدر شده و با آب به کندی و با اسیدها به شدت با آزادسازی هیدروژن واکنش می‌دهد.",
      chemicalBehaviorFa:
        "پایداری استثنایی حالت اکسایش +۲ به دلیل داشتن لایه ۴f کاملاً پر [Xe] 4f¹⁴؛ حالت اکسایش +۳ نیز متداول است.",
    },
    history: {
      discovererFa: "ژان شارل گالیسار دو مارینیاک",
      discoveryYear: "1878",
      nameOriginFa: "روستای ایتربی (Ytterby) در سوئد",
      namingExplanationFa:
        "چهارمین عنصری که به افتخار روستای معدنی تاریخی ایتربی در سوئد نام‌گذاری شد.",
    },
    applications: {
      industrial: [
        "لیزرهای فیبر نوری پرقدرت ایتربیم (Yb-fiber lasers) برای جوشکاری و برشکاری ورقه‌های ضخیم فولادی در صنایع خودروسازی و کشتی‌سازی",
        "ساعت‌های اتمی شبکه نوری ایتربیم با دقت ۱۰ به توان منفی ۱۸ ثانیه",
        "فشارسنج‌های تنش‌های شدید در انفجارهای زیرزمینی",
      ],
      scientific: [
        "کامپیوترهای کوانتومی یون‌های به دام افتاده ایتربیم به عنوان کیوبیت‌های پایدار در محاسبات کوانتومی",
      ],
      medical: [
        "رادیوایزوتوپ ایتربیم-۱۶۹ به عنوان چشمه پرتو ایکس ملایم در براکی‌تراپی تومورها",
      ],
      everyday: ["برشکاری لیزری بدنه خودروهای نوین با لیزرهای فیبر ایتربیم"],
    },
    safety: {
      toxicityFa: "سمیت پایین",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "نگهداری در محیط خشک و خنک دور از رطوبت.",
      hazardsFa: "سوزش خفیف مخاط در مواجهه با گرد اکسید.",
    },
    isotopes: {
      stableCount: 7,
      commonIsotopes: [
        "¹۷۴Yb (۳۱.۸٪)",
        "¹۷۲Yb (۲۱.۸٪)",
        "¹۷۳Yb (۱۶.۱٪)",
        "¹۷۱Yb (۱۴.۳٪)",
        "¹۷۶Yb (۱۲.۹٪)",
        "¹۷۰Yb (۳.۰٪)",
        "¹۶۸Yb (۰.۱٪)",
      ],
      mostStableIsotope: "¹۷۴Yb",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "ستاره محاسبات کوانتومی، قلب تپنده لیزرهای فیبر پرقدرت کارخانجات خودروسازی و چهارمین عنصر روستای ایتربی.",
      funFactsFa: [
        "ایتربیم چهارمین و آخرین عنصری است که نامش برگرفته از معدن معروف ایتربی سوئد است (ایتریم، تربیم، اربیم، ایتربیم)!",
        "ساعت اتمی ایتربیم ساخته‌شده در انستیتو NIST آمریکا دارای دقتی است که طی سن کل کیهان حتی یک ثانیه جابجا نمی‌شود.",
      ],
      naturalOccurrenceFa:
        "همراه با سایر خاک‌های کمیاب در مونازیت و باستانائزیت استخراج می‌شود.",
      keyCompoundsFa: [
        "اکسید ایتربیم (Yb₂O₃)",
        "لیزر فیبر ایتربیم",
        "کلرید ایتربیم (YbCl₃)",
      ],
      educationalNotesFa:
        "ایتربیم با زیرلایه 4f کاملاً پر (4f¹⁴) مانند اروپیم چگالی و نقطه ذوب بسیار پایین‌تری نسبت به لانتانیدهای دیگر دارد، زیرا فقط دو الکترون ۶s در دریای الکترونی فلزی شرکت می‌کنند.",
    },
  },
  // Element 71: Lu (لوتتیم)
  {
    identity: {
      atomicNumber: 71,
      symbol: "Lu",
      nameFa: "لوتتیم",
      nameEn: "Lutetium",
      pronunciationFa: "لوتِتیُم",
      descriptionFa:
        "سخت‌ترین و گران‌ترین عنصر لانتانیدها و رادیوداروی نجات‌بخش لوتتیم-۱۷۷ در خط مقدم درمان سرطان پروستات.",
    },
    classification: {
      group: null,
      period: 6,
      block: "d",
      category: "lanthanide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 71,
      electrons: 71,
      neutrons: 104,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d¹ 6s²",
      electronShells: [2, 8, 18, 32, 9, 2],
      valenceElectrons: 3,
      commonOxidationStates: [3],
      allOxidationStates: [3],
    },
    physicalProperties: {
      atomicMass: {
        value: 174.97,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 174,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 187,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 9.841,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "سخت‌ترین و متراکم‌ترین فلز خانواده لانتانیدها با بیشترین نقطه ذوب و جلای نقره‌ای",
      colorFa: "سفید-نقره‌ای متالیک",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1925.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3675.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.154,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 16.4,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.27,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 523.5,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 33.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر خوردگی هوا بسیار مقاوم است؛ با آب به کندی و با اسیدها به آسانی ترکیب می‌شود.",
      chemicalBehaviorFa:
        "پایان کامل لانتانیدها؛ زیرلایه ۴f پر با آرایش [Xe] 4f¹⁴ 5d¹ 6s²؛ به دلیل انقباض لانتانیدی کوچک‌ترین شعاع یونی را در این ردیف دارد.",
    },
    history: {
      discovererFa: "ژرژ اوربن و کارل آور فون ولسباخ",
      discoveryYear: "1907",
      nameOriginFa: "لوتتیا (Lutetia) نام باستانی شهر پاریس در دوران روم",
      namingExplanationFa:
        "نام‌گذاری توسط ژرژ اوربن فرانسوی به افتخار نام باستانی شهر پاریس (Lutetia).",
    },
    applications: {
      industrial: [
        "بلورهای سینتیلاتور ارتوپسیلیکات لوتتیم (LSO) با سرعت پاسخ نانوثانیه‌ای در اسکنرهای پیشرفته پزشکی هسته‌ای PET",
        "کاتالیزورهای هیدروژناسیون، پلیمریزاسیون و کراکینگ نفت در دماهای بالا",
      ],
      scientific: [
        "سن‌سنجی رادیومتریک لوتتیم-هافنیم (Lu-Hf) برای تعیین سن کهن‌ترین شهاب‌سنگ‌ها و پوسته اولیه زمین",
      ],
      medical: [
        "رادیوداروی معجزه‌آسای لوتتیم-۱۷۷ (Lu-177 PSMA و Dotatate) برای درمان هدفمند و ریشه‌کنی تومورهای پیشرفته پروستات و نورواندوکرین",
      ],
      everyday: ["دستگاه‌های پیشرفته پت اسکن PET مراکز فوق‌تخصصی درمان سرطان"],
    },
    safety: {
      toxicityFa: "سمیت پایین",
      radioactivity: false,
      radiationType: "پرتوزایی بسیار ضعیف طبیعی (ایزوتوپ ¹⁷⁶Lu)",
      precautionsFa: "کنترل تهویه در آزمایشگاه‌های ترکیبات خالص لوتتیم.",
      hazardsFa: "سوزش چشم ناشی از غبار اکسید.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: [
        "¹۷۵Lu (۹۷.۴۱٪ پایدار)",
        "¹۷۶Lu (۲.۵۹٪ پرتوزای بتا با نیمه‌عمر ۳۸ میلیارد سال)",
      ],
      mostStableIsotope: "¹۷۵Lu",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "سخت‌ترین و گران‌ترین عنصر لانتانیدها و رادیوداروی نجات‌بخش لوتتیم-۱۷۷ در خط مقدم درمان سرطان پروستات.",
      funFactsFa: [
        "لوتتیم گران‌ترین و کمیاب‌ترین فلز خاک‌های کمیاب است و قیمت هر گرم آن گاهی از طلا فراتر می‌رود!",
        "رادیوداروی Lu-177 مثل یک موشک هدایت‌شونده به پروتئین سلول سرطانی چسبیده و با تابش بتای موضعی بدون آسیب به بافت سالم، تومور را از بین می‌برد.",
      ],
      naturalOccurrenceFa:
        "بسیار کمیاب و آخرین عضو لانتانیدها که در کانی‌های مونازیت با زحمت زیاد جدا می‌شود.",
      keyCompoundsFa: [
        "اکسید لوتتیم (Lu₂O₃)",
        "بلور آشکارساز LSO (Lu₂SiO₅)",
        "داروی لوتتیم-۱۷۷ دوتابات",
      ],
      educationalNotesFa:
        "به دلیل پدیده انقباض لانتانیدی (Lanthanide Contraction)، شعاع اتمی لوتتیم کوچک‌ترین مقدار را در کل سری دارد و چگالی و نقطه ذوب آن به بالاترین حد در میان لانتانیدها می‌رسد.",
    },
  },
  // Element 72: Hf (هافنیم)
  {
    identity: {
      atomicNumber: 72,
      symbol: "Hf",
      nameFa: "هافنیم",
      nameEn: "Hafnium",
      pronunciationFa: "هافنیُم",
      descriptionFa:
        "نگهبان نوترونی زیردریایی‌های اتمی و لایه نانومتری دی‌الکتریک قلب تمام پردازنده‌های فوق‌سریع معاصر.",
    },
    classification: {
      group: 4,
      period: 6,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 72,
      electrons: 72,
      neutrons: 106,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d² 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d² 6s²",
      electronShells: [2, 8, 18, 32, 10, 2],
      valenceElectrons: 4,
      commonOxidationStates: [4],
      allOxidationStates: [4, 3, 2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 178.49,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 159,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 144,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 13.31,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز خاکستری براق با مقاومت در برابر خوردگی فوق‌العاده و توانایی بسیار بالا در جذب نوترون",
      colorFa: "خاکستری براق فولادی",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2506.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4876.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.144,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 23.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.3,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 658.5,
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
        "غیرفعال در برابر اسیدها به دلیل لایه اکسید سطحی نفوذناپذیر؛ با هیدروفلوئوریک اسید واکنش می‌دهد.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۴ با خواصی تقریباً همسان با زیرکونیم اما با قابلیت بسیار شدید در مهار نوترون‌های حرارتی.",
    },
    history: {
      discovererFa: "دیرک کوستر و جورج دو هوسی",
      discoveryYear: "1923",
      nameOriginFa: "واژه لاتین Hafnia به معنای شهر کپنهاگ",
      namingExplanationFa:
        "نام‌گذاری به افتخار شهر کپنهاگ دانمارک، مرکز انستیتو نیلز بور که عنصر در آنجا کشف شد.",
    },
    applications: {
      industrial: [
        "میله‌های کنترل جذب نوترون در رآکتورهای هسته‌ای زیردریایی‌های نظامی به دلیل مقاومت خوردگی و جذب ۶۰۰ برابری نسبت به زیرکونیم",
        "دی‌الکتریک گیت با ضریب k بالا (HfO₂) در پردازنده‌های پیشرفته اینتل و اپل سیلیکون برای جلوگیری از نشت کوانتومی الکترون",
      ],
      scientific: [
        "ترکیب نیترید کربن تانتالوم-هافنیم با بالاترین نقطه ذوب در بین تمام مواد شناخته‌شده جهان (۴۲۱۵ کلوین)",
      ],
      medical: [
        "نانوذرات اکسید هافنیم به عنوان تشدیدکننده پرتو در پرتودرمانی بافت‌های تومورال",
      ],
      everyday: [
        "پردازنده‌های نسل جدید تمامی موبایل‌ها و لپ‌تاپ‌ها (تکنولوژی High-k Hafnium)",
      ],
    },
    safety: {
      toxicityFa: "سمیت پایین در حالت فلزی آزاد",
      radioactivity: false,
      radiationType: "پرتوزایی بسیار ضعیف طبیعی (ایزوتوپ ¹⁷⁴Hf)",
      precautionsFa:
        "کنترل دمای ماشین‌کاری پودر فلز به دلیل اشتعال‌زایی خودبه‌خودی.",
      hazardsFa: "سوزش چشم در مواجهه با بخار هالیدها.",
    },
    isotopes: {
      stableCount: 5,
      commonIsotopes: [
        "¹۸۰Hf (۳۵.۰۸٪)",
        "¹۷۸Hf (۲۷.۲۸٪)",
        "¹۷۷Hf (۱۸.۶۰٪)",
        "¹۷۹Hf (۱۳.۶۲٪)",
        "¹۷۶Hf (۵.۲۰٪)",
      ],
      mostStableIsotope: "¹۸۰Hf",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "نگهبان نوترونی زیردریایی‌های اتمی و لایه نانومتری دی‌الکتریک قلب تمام پردازنده‌های فوق‌سریع معاصر.",
      funFactsFa: [
        "کشف هافنیم در سال ۱۹۲۳ یکی از بزرگ‌ترین پیروزی‌های نظریه اتمی نیلز بور بود، زیرا بور پیش‌بینی کرده بود این عنصر باید رفتار زیرکونیم داشته باشد، نه خاک‌های کمیاب!",
        "ماده Ta₄HfC₅ با نقطه ذوب حدود ۴۲۱۵ کلوین نسوزترین ماده‌ای است که تا کنون بشر ساخته است.",
      ],
      naturalOccurrenceFa:
        "همیشه همراه با زیرکونیم در کانی زیرکن به نسبت ۱ به ۵۰ وجود دارد و جداسازی آنها نیازمند استخراج مایع-مایع پیشرفته است.",
      keyCompoundsFa: [
        "دی‌اکسید هافنیم (HfO₂)",
        "تتراکلرید هافنیم (HfCl₄)",
        "کاربید هافنیم (HfC)",
      ],
      educationalNotesFa:
        "اینتل در سال ۲۰۰۷ با جایگزین کردن دی‌اکسید هافنیم به جای دی‌اکسید سیلیکون در عایق گیت ترانزیستورها، مانع از نشت تونل‌زنی کوانتومی جریان شد و قانون مور را نجات داد.",
    },
  },
  // Element 73: Ta (تانتال)
  {
    identity: {
      atomicNumber: 73,
      symbol: "Ta",
      nameFa: "تانتال",
      nameEn: "Tantalum",
      pronunciationFa: "تانتال",
      descriptionFa:
        "عنصر ضداسید تسخیرناپذیر، خازن میلیاردی تلفن‌های هوشمند و ایمپلنت نجات‌بخش ترمیم جمجمه انسان.",
    },
    classification: {
      group: 5,
      period: 6,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 73,
      electrons: 73,
      neutrons: 108,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d³ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d³ 6s²",
      electronShells: [2, 8, 18, 32, 11, 2],
      valenceElectrons: 5,
      commonOxidationStates: [5],
      allOxidationStates: [5, 4, 3, 2, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 180.95,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 146,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 138,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 16.69,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز خاکستری-آبی بسیار متراکم، چکش‌خوار با مقاومت در برابر اسید در حد شیشه و سازگاری زیستی کامل",
      colorFa: "خاکستری مایل به آبی تیره",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 3290.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 5731.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.14,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 57.5,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.5,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 761.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 31.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "حتی در برابر اسیدهای جوشان مانند تیزاب سلطانی کاملاً مصون است؛ تنها در اسید هیدروفلوئوریک و قلیاهای مذاب حل می‌شود.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۵؛ لایه اکسیدی نانومتری آندایز شده Ta₂O₅ دارای ثابت دی‌الکتریک بسیار بالا و پایداری خارق‌العاده است.",
    },
    history: {
      discovererFa: "آندرس گوستاف اکه‌برگ",
      discoveryYear: "1802",
      nameOriginFa: "تانتالوس (Tantalus) از پادشاهان عذاب‌دیده اساطیر یونان",
      namingExplanationFa:
        "به دلیل عذاب محققان در حل نشدن این فلز در هیچ اسیدی (همانند تانتالوس که در آب ایستاده بود ولی توان نوشیدن نداشت).",
    },
    applications: {
      industrial: [
        "خازن‌های تانتالیومی مینیاتوری با ظرفیت بسیار بالا در گوشی‌های تلفن همراه، تبلت‌ها و کامپیوترها",
        "تجهیزات و لوله‌های صنایع شیمیایی تولید اسیدهای غلیظ",
        "سوپرآلیاژهای موتور جت",
      ],
      scientific: [
        "ایزومر هسته‌ای تانتالوم-۱۸۰m با طولانی‌ترین نیمه‌عمر در بین تمام ایزومرهای هسته‌ای (بیش از ۱۰¹۵ سال)",
      ],
      medical: [
        "ایمپلنت‌های جراحی ارتوپدی استخوان، پیچ‌ها و صفحات جمجمه، و گیره‌های جراحی عروق مغز به دلیل زیست‌سازگاری مطلق با سلول‌های بدن",
      ],
      everyday: ["خازن‌های تانتالیومی داخل تمام تلفن‌های همراه و لپ‌تاپ‌ها"],
    },
    safety: {
      toxicityFa:
        "کاملاً بی‌ضرر از نظر زیستی و بدون هرگونه واکنش با بافت‌های زنده",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "کنترل گردوغبار پودر تانتال در تولید خازن‌ها.",
      hazardsFa: "سوزش مکانیکی چشم با ذرات ساینده پودر فلز.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: [
        "¹⁸¹Ta (۹۹.۹۸۸٪ پایدار)",
        "¹۸۰ᵐTa (۰.۰۱۲٪ ایزومر پایدار)",
      ],
      mostStableIsotope: "¹⁸¹Ta",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر ضداسید تسخیرناپذیر، خازن میلیاردی تلفن‌های هوشمند و ایمپلنت نجات‌بخش ترمیم جمجمه انسان.",
      funFactsFa: [
        "تانتال در برابر اسیدها رفتاری شبیه شیشه دارد و حتی اسید نیتریک و هیدروکلریک جوشان اثری روی آن ندارند!",
        "ایزومر تانتال-180m تنها نمونه در تمام گیتی است که حالت برانگیخته هسته (ایزومر) از حالت پایه پایدارتر است.",
      ],
      naturalOccurrenceFa:
        "در سنگ معدن کلتان (کولومبیت-تانتالیت) در استرالیا، برزیل و کنگو استخراج می‌شود.",
      keyCompoundsFa: [
        "پنتاکسید تانتال (Ta₂O₅)",
        "کاربید تانتال (TaC)",
        "پنتاکلرید تانتال (TaCl₅)",
      ],
      educationalNotesFa:
        "خازن‌های تانتالیومی به دلیل لایه اکسید دی‌الکتریک بی‌نهایت نازک Ta₂O₅، بالاترین ظرفیت خازنی بر واحد حجم را در بردهای الکترونیکی فشرده مدرن به ارمغان می‌آورند.",
    },
  },
  // Element 74: W (تنگستن)
  {
    identity: {
      atomicNumber: 74,
      symbol: "W",
      nameFa: "تنگستن",
      nameEn: "Tungsten",
      pronunciationFa: "تَنگستَن",
      descriptionFa:
        "نسوزترین عنصر گیتی با بالاترین نقطه ذوب، سنگ بنای ابزارهای برنده جهان و نگهبان دیواره رآکتورهای همجوشی ستارگان.",
    },
    classification: {
      group: 6,
      period: 6,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 74,
      electrons: 74,
      neutrons: 110,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁴ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d⁴ 6s²",
      electronShells: [2, 8, 18, 32, 12, 2],
      valenceElectrons: 6,
      commonOxidationStates: [6, 4],
      allOxidationStates: [6, 5, 4, 3, 2, 0, -1, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 183.84,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 139,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 130,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 19.25,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز خاکستری فولادی بسیار سنگین با بالاترین نقطه ذوب در میان تمام عناصر خالص جهان (۳۴۲۲ درجه)",
      colorFa: "خاکستری تیره براق",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 3695.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 5828.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.132,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 173.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.36,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 770.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 78.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در دمای اتاق غیرفعال است؛ در دمای بالا اکسید شده و در اسیدهای مخلوط اسید نیتریک و هیدروفلوئوریک حل می‌شود.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۶؛ به دلیل پیوندهای فلزی فوق‌العاده مستحکم الکترون‌های ۵d، سخت‌ترین فلز نسوز جدول است.",
    },
    history: {
      discovererFa: "کارل ویلهلم شیله و برادران اله‌یار",
      discoveryYear: "1783",
      nameOriginFa: "واژه سوئدی tung sten (سنگ سنگین) و آلمانی Wolfram",
      namingExplanationFa:
        "نماد W برگرفته از نام کهن آلمانی ولفرام (Wolfram) به معنای کف گرگ است.",
    },
    applications: {
      industrial: [
        "تنگستن کاربید (WC) برای ساخت سخت‌ترین مته‌های حفاری چاه‌های نفت و ابزارهای تراشکاری ماشین‌افزار",
        "رشته تنگستنی لامپ‌های سنتی روشنایی و کاتد لوله‌های پرتو ایکس",
        "الکترودهای جوشکاری آرگون (TIG) و زره تانک‌های سنگین نظامی",
      ],
      scientific: [
        "دیواره محافظ محفظه پلاسمای رآکتور همجوشی هسته‌ای ایتر (ITER) به دلیل تاب‌آوری در برابر حرارت خورشیدی",
      ],
      medical: [
        "تارگت آند پرتو ایکس لوله‌های CT اسکن و محافظت در برابر پرتوهای پرانرژی",
      ],
      everyday: [
        "مته‌های سوراخ‌کاری بتن و دیوار (الماس تنگستن)",
        "رشته المنت لامپ‌های رشته‌ای",
      ],
    },
    safety: {
      toxicityFa: "سمیت پایین در حالت فلزی آزاد",
      radioactivity: false,
      radiationType: "پرتوزایی آلفای بسیار ناچیز طبیعی (ایزوتوپ ¹⁸⁰W)",
      precautionsFa:
        "کنترل تهویه در کارگاه‌های آسیاب و تراشکاری کاربید تنگستن.",
      hazardsFa:
        "بیماری ریوی فیبروز فلزات سخت در اثر استنشاق غبار کبالت-تنگستن.",
    },
    isotopes: {
      stableCount: 4,
      commonIsotopes: [
        "¹۸۴W (۳۰.۶۴٪)",
        "¹۸۶W (۲۸.۴۳٪)",
        "¹۸۲W (۲۶.۵۰٪)",
        "¹۸۳W (۱۴.۳۱٪)",
        "¹۸۰W (۰.۱۲٪ پرتوزای بسیار کند)",
      ],
      mostStableIsotope: "¹۸۴W",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "نسوزترین عنصر گیتی با بالاترین نقطه ذوب، سنگ بنای ابزارهای برنده جهان و نگهبان دیواره رآکتورهای همجوشی ستارگان.",
      funFactsFa: [
        "نقطه ذوب تنگستن ۳۴۲۲ درجه سلسیوس است؛ یعنی حتی از دمای نقطه جوش مس، طلا و نقره هم بالاتر است!",
        "چگالی تنگستن دقیقاً برابر با طلا (۱۹.۲۵ گرم بر سانتی‌متر مکعب) است و شمش‌های طلای تقلبی گاهی هسته‌ای از تنگستن دارند!",
      ],
      naturalOccurrenceFa:
        "در کانی‌های ولفرامیت ((Fe,Mn)WO₄) و شیلیت (CaWO₄) استخراج می‌شود.",
      keyCompoundsFa: [
        "تنگستن کاربید فوق‌سخت (WC)",
        "تری‌اکسید تنگستن (WO₃)",
        "هگزافلوئورید تنگستن (WF₆)",
      ],
      educationalNotesFa:
        "تنگستن سنگین‌ترین عنصری در جدول تناوبی است که در ارگانیسم‌های زنده عملکرد بیولوژیکی دارد (در آنزیم‌های باکتری‌های گرمادوست اعماق اقیانوس‌ها).",
    },
  },
  // Element 75: Re (رنیم)
  {
    identity: {
      atomicNumber: 75,
      symbol: "Re",
      nameFa: "رنیم",
      nameEn: "Rhenium",
      pronunciationFa: "رِنیُم",
      descriptionFa:
        "آخرین عنصر پایدار کشف‌شده در طبیعت، فلز ماورای حرارت پره‌های موتور جت‌های جنگنده و رکورددار نقطه جوش جهان.",
    },
    classification: {
      group: 7,
      period: 6,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 75,
      electrons: 75,
      neutrons: 111,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁵ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d⁵ 6s²",
      electronShells: [2, 8, 18, 32, 13, 2],
      valenceElectrons: 7,
      commonOxidationStates: [7, 4, 2],
      allOxidationStates: [7, 6, 5, 4, 3, 2, 1, 0, -1, -3],
    },
    physicalProperties: {
      atomicMass: {
        value: 186.21,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 137,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 128,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 21.02,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای-خاکستری بسیار سنگین با سومین نقطه ذوب بالا و بالاترین نقطه جوش در بین تمام عناصر (۵۵۹۶ درجه)",
      colorFa: "سفید-خاکستری متالیک",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 3459.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 5869.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.137,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 48.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.9,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 760.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 14.5,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر اکسایش مقاوم است؛ در دمای بالا اکسید فرار Re₂O₇ می‌سازد و در اسید نیتریک حل می‌شود.",
      chemicalBehaviorFa:
        "گستره وسیع اکسایش از -۳ تا +۷؛ ترکیب دی‌بورید رنیم (ReB₂) سخت‌تر از الماس در برخی جهات بلوری.",
    },
    history: {
      discovererFa: "ایدا نوداک و والتر نوداک",
      discoveryYear: "1925",
      nameOriginFa: "رودخانه راین (Rhine) در آلمان",
      namingExplanationFa:
        "نام‌گذاری توسط آیدا نوداک به افتخار رودخانه تاریخی راین در آلمان.",
    },
    applications: {
      industrial: [
        "سوپرآلیاژهای نیکل پره‌های توربین موتورهای جت پیشرفته نظامی و بوئینگ برای تحمل حرارت‌های مرگبار",
        "کاتالیزورهای رنیم-پلاتین در فرآیند ریفورمینگ بنزین بدون سرب با اکتان بالا در پالایشگاه‌ها",
        "رشته‌های کاتد طیف‌سنج‌های جرمی",
      ],
      scientific: [
        "سن‌سنجی رادیومتریک رنیم-اسمیم (Re-Os) در تعیین زمان جدایش گوشته و هسته زمین",
      ],
      medical: [
        "رادیوداروهای رنیم-۱۸۶ و رنیم-۱۸۸ در پرتودرمانی تسکینی سرطان‌های استخوانی",
      ],
      everyday: [
        "سوخت بنزین با اکتان بالای خودروها (محصول کاتالیزور پلاتین-رنیم)",
      ],
    },
    safety: {
      toxicityFa: "سمیت ناچیز در فرم فلزی",
      radioactivity: false,
      radiationType: "پرتوزایی بتای بسیار ناچیز طبیعی (ایزوتوپ ¹⁸⁷Re)",
      precautionsFa:
        "کنترل دمای ذوب برای جلوگیری از تبخیر اکسید هفت‌ظرفیتی فرار Re₂O₇.",
      hazardsFa: "سوزش مخاط در تماس با بخارات اکسید.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: [
        "¹⁸⁵Re (۳۷.۴٪ پایدار)",
        "¹۸۷Re (۶۲.۶٪ پرتوزای بتا با نیمه‌عمر ۴۱ میلیارد سال)",
      ],
      mostStableIsotope: "¹⁸⁵Re",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "آخرین عنصر پایدار کشف‌شده در طبیعت، فلز ماورای حرارت پره‌های موتور جت‌های جنگنده و رکورددار نقطه جوش جهان.",
      funFactsFa: [
        "رنیم آخرین عنصری در تاریخ بود که در حالت طبیعی پایدار روی کره زمین کشف شد (سال ۱۹۲۵ توسط آیدا نوداک)!",
        "بالاترین نقطه جوش در بین تمام ۱۱۸ عنصر جدول تناوبی متعلق به رنیم با دمای ۵۵۹۶ درجه سلسیوس است.",
      ],
      naturalOccurrenceFa:
        "بسیار کمیاب و به عنوان ناخالصی در کانی‌های مولیبدنیت مس در شیلی و آمریکا بازیافت می‌شود.",
      keyCompoundsFa: [
        "هپتوکسید رنیم (Re₂O₇)",
        "اسید پررنیک (HReO₄)",
        "دی‌بورید رنیم (ReB₂)",
      ],
      educationalNotesFa:
        "بیش از ۷۰ درصد رنیم تولیدی جهان مستقیماً وارد تولید سوپرآلیاژهای تک‌بلور توربین‌های جت شرکت‌های رولزرویس و جنرال الکتریک می‌شود.",
    },
  },
  // Element 76: Os (اسمیم)
  {
    identity: {
      atomicNumber: 76,
      symbol: "Os",
      nameFa: "اسمیم",
      nameEn: "Osmium",
      pronunciationFa: "اُسمیُم",
      descriptionFa:
        "سنگین‌ترین و چگال‌ترین ماده روی کره زمین با دو برابر چگالی سرب و اکسیدی فرار با قابلیت کور کردن آنی چشم.",
    },
    classification: {
      group: 8,
      period: 6,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 76,
      electrons: 76,
      neutrons: 114,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁶ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d⁶ 6s²",
      electronShells: [2, 8, 18, 32, 14, 2],
      valenceElectrons: 8,
      commonOxidationStates: [4, 8],
      allOxidationStates: [8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 190.23,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 135,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 128,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 22.59,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "متراکم‌ترین و چگال‌ترین ماده طبیعی در کل جهان؛ فلز سخت، شکننده و نقره‌ای با ته رنگ آبی ملایم",
      colorFa: "مایل به آبی-خاکستری",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 3306.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 5285.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.13,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 87.0,
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
        value: 840.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 106.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در حالت توده‌ای در برابر اسیدها حتی تیزاب سلطانی بسیار مقاوم است؛ در پودر در هوا تتراکسید اسمیم سمی و فرار تولید می‌کند.",
      chemicalBehaviorFa:
        "پایدارترین اکسایش‌های +۴ و +۸؛ تتراکسید اسمیم OsO₄ عامل تثبیت‌کننده عالی لیپیدها در میکروسکوپ الکترونی عبوری (TEM).",
    },
    history: {
      discovererFa: "اسمیتسون تنانت",
      discoveryYear: "1803",
      nameOriginFa: "واژه یونانی osme به معنای بو یا رایحه تند",
      namingExplanationFa:
        "به دلیل بوی بسیار تند، زننده، نافذ و خطرناک تتراکسید اسمیم که شبیه کلر یا ازن حس می‌شود.",
    },
    applications: {
      industrial: [
        "آلیاژهای بسیار سخت اسمیم-ایریدیم (Osmiridium) در نوک خودنویس‌های مادام‌العمر و سوزن‌های دستگاه‌های گرامافون فونوگراف",
        "اتصالات الکتریکی دما و سایش بالا",
        "کاتالیزورهای صنعتی سنتز ترکیبات دارویی",
      ],
      scientific: [
        "رنگ‌آمیزی کنتراست بالا و تثبیت غشاهای سلولی غنی از چربی در میکروسکوپ الکترونی عبوری (TEM) با OsO₄",
      ],
      medical: [
        "واکنش دی‌هیدروکسیلاسیون شارپلس (برنده نوبل شیمی) با کاتالیزور تتراکسید اسمیم در داروسازی",
      ],
      everyday: ["نوک خودنویس‌های دست‌ساز لوکس ضدسایش"],
    },
    safety: {
      toxicityFa:
        "فلز آزاد غیرسمی است؛ تتراکسید اسمیم (OsO₄) فوق‌العاده کشنده و سمی است و بخار آن فوراً چشم را کور می‌کند",
      radioactivity: false,
      radiationType: "پرتوزایی بسیار ضعیف طبیعی (ایزوتوپ ¹⁸⁶Os)",
      precautionsFa:
        "کار با تتراکسید اسمیم منحصراً در هودهای شیمیایی فوق‌ایزوله با دستکش‌های دو لایه و عینک ضدگاز.",
      hazardsFa:
        "نابینایی برگشت‌ناپذیر بر اثر رسوب دی‌اکسید اسمیم سیاه روی قرنیه و ادم حاد ریوی کشنده.",
    },
    isotopes: {
      stableCount: 6,
      commonIsotopes: [
        "¹۹۲Os (۴۰.۷۸٪)",
        "¹۹۰Os (۲۶.۲۶٪)",
        "¹۸۹Os (۱۶.۱۵٪)",
        "¹۸۸Os (۱۳.۲۴٪)",
        "¹۸۷Os (۱.۹۶٪)",
        "¹۸۴Os (۰.۰۲٪)",
      ],
      mostStableIsotope: "¹۹۲Os",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "سنگین‌ترین و چگال‌ترین ماده روی کره زمین با دو برابر چگالی سرب و اکسیدی فرار با قابلیت کور کردن آنی چشم.",
      funFactsFa: [
        "اسمیم چگال‌ترین عنصر جهان است؛ یک بطری آب یک لیتری پر از اسمیم بیش از ۲۲.۶ کیلوگرم وزن دارد!",
        "تتراکسید اسمیم چنان اکسیدکننده تندی است که حتی در تماس با پوست یا چشم بلافاصله با چربی بافت ترکیب شده و لایه سیاه دائمی ایجاد می‌کند.",
      ],
      naturalOccurrenceFa:
        "بسیار کمیاب همراه با پلاتین در کانسارهای آفریقای جنوبی و روسیه.",
      keyCompoundsFa: [
        "تتراکسید اسمیم (OsO₄)",
        "دی‌اکسید اسمیم (OsO₂)",
        "کلرید اسمیم (III) (OsCl₃)",
      ],
      educationalNotesFa:
        "عدد اکسایش +۸ در تتراکسید اسمیم یکی از بالاترین اعداد اکسایش در شیمی است که ساختار چهاروجهی متقارن و خنثی با نقطه جوش بسیار پایین (۱۳۰ درجه) پدید می‌آورد.",
    },
  },
  // Element 77: Ir (ایریدیم)
  {
    identity: {
      atomicNumber: 77,
      symbol: "Ir",
      nameFa: "ایریدیم",
      nameEn: "Iridium",
      pronunciationFa: "ایریدیُم",
      descriptionFa:
        "ضدخوردگی‌ترین فلز طبیعت، شاهد کیهانی برخورد شهاب‌سنگ نابودکننده دایناسورها و جنس استاندارد متر و کیلوگرم پاریس.",
    },
    classification: {
      group: 9,
      period: 6,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 77,
      electrons: 77,
      neutrons: 116,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁷ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d⁷ 6s²",
      electronShells: [2, 8, 18, 32, 15, 2],
      valenceElectrons: 9,
      commonOxidationStates: [4, 3],
      allOxidationStates: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -3],
    },
    physicalProperties: {
      atomicMass: {
        value: 192.22,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 136,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 127,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 22.56,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز سخت، شکننده، نقره‌ای با بیشترین مقاومت در برابر خوردگی در میان تمامی عناصر جدول",
      colorFa: "سفید-نقره‌ای با ته رنگ زرد",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2719.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4701.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.131,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 147.0,
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
        value: 880.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 151.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "مقاوم‌ترین فلز در برابر خوردگی؛ هیچ اسیدی از جمله تیزاب سلطانی در هیچ دمایی نمی‌تواند آن را حل کند.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ و +۴؛ کمپلکس وسکا (Vaska's complex) نمونه بارز واکنش‌های افزایش اکسایشی در شیمی معدنی.",
    },
    history: {
      discovererFa: "اسمیتسون تنانت",
      discoveryYear: "1803",
      nameOriginFa: "ایریس (Iris) الهه رنگین‌کمان در اساطیر یونان باستان",
      namingExplanationFa:
        "به دلیل رنگ‌های گوناگون و بسیار درخشان نمک‌های شیمیایی آن نام الهه رنگین‌کمان را بر آن نهادند.",
    },
    applications: {
      industrial: [
        "بوته‌های آزمایشگاهی دمابالا برای رشد تک‌کریستال‌های لیزر و ژیروسکوپ",
        "شمع‌های خودرو با نوک ایریدیمی با عمر بیش از ۱۵۰ هزار کیلومتر",
        "الکترودهای تولید هیدروژن در الکترولایزرهای آب غشای تبادل پروتون (PEM)",
      ],
      scientific: [
        "ردیابی شهاب‌سنگ انقراض دایناسورها در لایه زمین‌شناسی مرز کرتاسه-پالئوژن (افق ایریدیم)",
        "آلیاژ استاندارد بین‌المللی متر و کیلوگرم در پاریس (۹۰٪ پلاتین، ۱۰٪ ایریدیم)",
      ],
      medical: [
        "سیم‌های رادیوتراپی ایریدیم-۱۹۲ در براکی‌تراپی سرطان‌های سر، گردن و پروستات",
      ],
      everyday: ["شمع خودروهای مدرن با الکترود سوزنی ایریدیم"],
    },
    safety: {
      toxicityFa:
        "فلز آزاد غیرسمی و فوق‌العاده خنثی؛ ترکیبات پودری آن محرک هستند",
      radioactivity: false,
      radiationType: "ندارد (ایزوتوپ ¹⁹²Ir پرتوزا در رادیوتراپی)",
      precautionsFa:
        "محافظت در برابر تشعشعات گامای قوی چشمه‌های صنعتی ایریدیم-۱۹۲.",
      hazardsFa:
        "سوختگی پرتوگیری در صورت تماس نزدیک با چشمه‌های ایزوتوپی صنعتی نشت‌یابی.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: ["¹۹۳Ir (۶۲.۷٪)", "¹۹۱Ir (۳۷.۳٪)"],
      mostStableIsotope: "¹۹۳Ir",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "ضدخوردگی‌ترین فلز طبیعت، شاهد کیهانی برخورد شهاب‌سنگ نابودکننده دایناسورها و جنس استاندارد متر و کیلوگرم پاریس.",
      funFactsFa: [
        "کشف غلظت بالای ایریدیم در لایه ۶۶ میلیون ساله مرز K-Pg اثبات کرد که یک شهاب‌سنگ غول‌پیکر با زمین برخورد کرده و نسل دایناسورها را منقرض کرده است!",
        "تا سال ۲۰۱۹، استوانه رسمی کیلوگرم در موزه اوزان و مقادیر سور پاریس از آلیاژ پلاتین-ایریدیم ساخته شده بود.",
      ],
      naturalOccurrenceFa:
        "بسیار کمیاب در پوسته زمین و بسیار غنی‌تر در شهاب‌سنگ‌ها و هسته زمین.",
      keyCompoundsFa: [
        "دی‌اکسید ایریدیم (IrO₂)",
        "کلرید ایریدیم (III) (IrCl₃)",
        "کمپلکس وسکا (IrCl(CO)(PPh₃)₂)",
      ],
      educationalNotesFa:
        "یون ایریدیم در گونه [IrO₄]⁺ توانسته به عدد اکسایش فوق‌العاده شگفت‌انگیز +۹ دست یابد که بالاترین عدد اکسایش ثبت‌شده در کل علم شیمی است.",
    },
  },
  // Element 78: Pt (پلاتین)
  {
    identity: {
      atomicNumber: 78,
      symbol: "Pt",
      nameFa: "پلاتین",
      nameEn: "Platinum",
      pronunciationFa: "پلاتین",
      descriptionFa:
        "اشرافی‌ترین فلز کاتالیزوری جهان، داروی نجات‌بخش شیمی‌درمانی سرطان (سیس‌پلاتین) و قلب پاک پیل‌های سوختی هیدروژنی.",
    },
    classification: {
      group: 10,
      period: 6,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 78,
      electrons: 78,
      neutrons: 117,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁹ 6s¹",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d⁹ 6s¹",
      electronShells: [2, 8, 18, 32, 17, 1],
      valenceElectrons: 10,
      commonOxidationStates: [4, 2],
      allOxidationStates: [6, 5, 4, 3, 2, 1, 0],
    },
    physicalProperties: {
      atomicMass: {
        value: 195.08,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 139,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 128,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 21.45,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز گران‌بها، نقره‌ای-سفید، چکش‌خوار با مقاومت بی‌نظیر در برابر اکسایش و فعالیت کاتالیزوری افسانه‌ای",
      colorFa: "سفید-خاکستری براق پلاتینی",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2041.4,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4098.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.133,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 71.6,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.28,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 870.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 205.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر هوا و اسیدها در تمام دماها مقاوم است؛ تنها در تیزاب سلطانی داغ حل می‌شود و هیدروژن را به شدت فعال می‌کند.",
      chemicalBehaviorFa:
        "آرایش غیرعادی [Xe] 4f¹⁴ 5d⁹ 6s¹؛ کاتالیزور بی‌رقیب هیدروژناسیون و اکسایش با تشکیل کمپلکس‌های مسطح مربعی نظیر سیس‌پلاتین.",
    },
    history: {
      discovererFa: "آنتونیو د اولوا",
      discoveryYear: "1735",
      nameOriginFa: "واژه اسپانیایی platina به معنای نقره کوچک یا نقره کم‌ارزش",
      namingExplanationFa:
        "اسپانیایی‌ها در آمریکای جنوبی گمان می‌کردند نقره نارس است و آن را دور می‌ریختند!",
    },
    applications: {
      industrial: [
        "کاتالیزور مبدل‌های اگزوز خودروهای دیزلی برای حذف هیدروکربن‌های سمی",
        "پیل‌های سوختی هیدروژنی خودروهای آینده (FCEV)",
        "تجهیزات ذوب شیشه‌های اپتیکی و بوته‌های آزمایشگاهی",
      ],
      scientific: [
        "کاتالیزور پیل‌های الکتروشیمیایی و قطب مرجع استاندارد هیدروژن (SHE) در الکتروشیمی",
      ],
      medical: [
        "داروی ضدسرطان بسیار مشهور سیس‌پلاتین (Cisplatin) و کربوپلاتین که درمان قطعی سرطان بیضه و تخمدان را محقق کردند",
      ],
      everyday: [
        "جواهرات بسیار لوکس و گران‌بهای پلاتین",
        "الکترودهای ضربان‌ساز قلب",
      ],
    },
    safety: {
      toxicityFa:
        "فلز آزاد کاملاً زیست‌سازگار است؛ نمک‌های کلروپلاتینات حساسیت‌زای تنفسی هستند",
      radioactivity: false,
      radiationType: "پرتوزایی آلفای بسیار ناچیز طبیعی (ایزوتوپ ¹⁹⁰Pt)",
      precautionsFa: "کنترل مواجهه تنفسی در کارخانه‌های بازیافت کاتالیزور.",
      hazardsFa: "آسم پلاتینی و درماتیت شدید ناشی از نمک‌های هگزاکلروپلاتینات.",
    },
    isotopes: {
      stableCount: 5,
      commonIsotopes: [
        "¹۹۵Pt (۳۳.۸٪ دارای اسپین ۱/۲)",
        "¹۹۴Pt (۳۲.۹٪)",
        "¹۹۶Pt (۲۵.۲٪)",
        "¹۹۸Pt (۷.۲٪)",
        "¹۹۲Pt (۰.۸٪)",
      ],
      mostStableIsotope: "¹۹۵Pt",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "اشرافی‌ترین فلز کاتالیزوری جهان، داروی نجات‌بخش شیمی‌درمانی سرطان (سیس‌پلاتین) و قلب پاک پیل‌های سوختی هیدروژنی.",
      funFactsFa: [
        "فاتحان اسپانیایی وقتی پلاتین را در رودخانه‌های کلمبیا می‌یافتند، به دلیل عدم توانایی در ذوب کردنش آن را به رودخانه بازمی‌گرداندند تا به نقره تبدیل شود!",
        "داروی سیس‌پلاتین بیش از ۹۰ درصد بیماران مبتلا به سرطان بیضه را به بهبودی کامل می‌رساند.",
      ],
      naturalOccurrenceFa:
        "بسیار گران‌بها در کانسارهای بوشفلد آفریقای جنوبی و نوریلسک روسیه.",
      keyCompoundsFa: [
        "سیس‌پلاتین داروی سرطان (cis-[Pt(NH₃)₂Cl₂])",
        "اسید هگزاکلروپلاتینیک (H₂PtCl₆)",
        "دی‌اکسید پلاتین کاتالیزور آدامز (PtO₂)",
      ],
      educationalNotesFa:
        "سیس‌پلاتین با ایجاد اتصالات عرضی میان بازهای آلی پورین در رشته DNA سلول‌های سرطانی، مانع از همانندسازی و تقسیم سلولی آنها شده و مرگ برنامه‌ریزی‌شده سلول (آپوپتوز) را تحریک می‌کند.",
    },
  },
  // Element 79: Au (طلا)
  {
    identity: {
      atomicNumber: 79,
      symbol: "Au",
      nameFa: "طلا",
      nameEn: "Gold",
      pronunciationFa: "طلا",
      descriptionFa:
        "پادشاه جاودانه فلزات جهان، نماد ثروت تاریخ بشر و چکش‌خوارترین عنصری که با یک گرم آن می‌توان سیمی به طول ۲ کیلومتر کشید.",
    },
    classification: {
      group: 11,
      period: 6,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 79,
      electrons: 79,
      neutrons: 118,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s¹",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
      electronShells: [2, 8, 18, 32, 18, 1],
      valenceElectrons: 11,
      commonOxidationStates: [3, 1],
      allOxidationStates: [5, 3, 2, 1, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 196.97,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 144,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 136,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 19.3,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز زرد درخشان، چکش‌خوارترین و شکل‌پذیرترین ماده شناخته‌شده در جهان با جاودانگی در برابر فرسایش",
      colorFa: "زرد طلایی درخشان",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1337.33,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3243.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.129,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 318.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.54,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 890.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 222.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "اشرافی‌ترین فلز؛ در برابر هوا، رطوبت و تمام اسیدهای تک حل‌نشدنی است و تنها در تیزاب سلطانی حل می‌شود.",
      chemicalBehaviorFa:
        "اثرات نسبیتی انیشتین (Relativistic effects) موجب انقباض اوربیتال 6s و رنگ زرد متمایز و الکترون‌خواهی بسیار بالای آن می‌شود.",
    },
    history: {
      discovererFa: "نامعلوم (شناخته شده از آغاز پیدایش تمدن بشر)",
      discoveryYear: "باستان",
      nameOriginFa: "واژه لاتین aurum به معنای درخشش سپیده‌دم و طلوع",
      namingExplanationFa:
        "نماد Au مخفف واژه باستانی اوروم (Aurum) برگرفته از ارورا الهه سپیده‌دم روم است.",
    },
    applications: {
      industrial: [
        "اتصالات روکش طلای فوق‌پایدار بر روی پردازنده‌های رایانه و پین‌های کابل‌های انتقال اطلاعات",
        "پوشش‌های فوق‌نازک بازتاب‌دهنده فروسرخ روی کلاه‌خود فضانوردان و آینه‌های تلسکوپ فضایی جیمز وب",
        "ذخیره ارزش و پشتوانه سیستم پولی بین‌المللی",
      ],
      scientific: [
        "نانوذرات طلا در روش‌های تشخیصی پلاسمونیک و سنسورهای بیولوژیکی فوق‌حساس",
      ],
      medical: [
        "آلیاژهای با دوام دندان‌پزشکی، رادیوتراپی تومورها با نانوذرات طلا و نمک‌های طلای خوراکی در درمان کهن آرتریت روماتوئید",
      ],
      everyday: [
        "جواهرات زینتی و زیورآلات",
        "سکه‌ها و شمش‌های سرمایه‌گذاری طلا",
      ],
    },
    safety: {
      toxicityFa: "طلای خالص فلزی کاملاً غیرسمی و زیست‌سازگار است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "استفاده از سیانید در فرآیندهای استخراج نیازمند مراقبت‌های بسیار شدید زیست‌محیطی است.",
      hazardsFa: "مسمومیت با نمک‌های حل‌شده طلا می‌تواند به کلیه آسیب برساند.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["¹⁹⁷Au (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "¹⁹⁷Au",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "پادشاه جاودانه فلزات جهان، نماد ثروت تاریخ بشر و چکش‌خوارترین عنصری که با یک گرم آن می‌توان سیمی به طول ۲ کیلومتر کشید.",
      funFactsFa: [
        "یک گرم طلا را می‌توان آن‌قدر کوبید تا به ورقه‌ای به مساحت یک متر مربع با ضخامت تنها چند اتم تبدیل شود که نور سبز از آن عبور می‌کند!",
        "رنگ زرد درخشان طلا نتیجه مستقیم نظریه نسبیت خاص اینشتین است؛ سرعت بالای الکترون‌های نزدیک به هسته سنگین، تراز انرژی اوربیتال 6s را منقبض کرده و نور آبی را جذب می‌کند.",
      ],
      naturalOccurrenceFa:
        "به شکل رگه‌های آزاد طلا در سنگ‌های کوارتزی و ماسه‌های شسته شده رودخانه‌ای.",
      keyCompoundsFa: [
        "کلرید طلا (III) (AuCl₃)",
        "اسید کلروآوریک (HAuCl₄)",
        "سیانید طلا پتاسیم (K[Au(CN)₂])",
      ],
      educationalNotesFa:
        "الکترون‌خواهی طلا (۲۲۲.۸ kJ/mol) چنان بالاست که حتی از اکسیژن و گوگرد نیز بیشتر است و می‌تواند با فلز سزیم ترکیب یونی آروماتیک Cs⁺Au⁻ (سزیم آورید) تشکیل دهد!",
    },
  },
  // Element 80: Hg (جیوه)
  {
    identity: {
      atomicNumber: 80,
      symbol: "Hg",
      nameFa: "جیوه",
      nameEn: "Mercury",
      pronunciationFa: "جیوِه",
      descriptionFa:
        "تنها فلز مایع جهان در شرایط اتاق، نقره روان که تبخیر نامرئی آن سمی‌ترین تهدید عصبی برای انسان است.",
    },
    classification: {
      group: 12,
      period: 6,
      block: "d",
      category: "transition-metal",
      standardState: "liquid",
    },
    atomicStructure: {
      protons: 80,
      electrons: 80,
      neutrons: 120,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s²",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
      electronShells: [2, 8, 18, 32, 18, 2],
      valenceElectrons: 2,
      commonOxidationStates: [2, 1],
      allOxidationStates: [2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 200.59,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 151,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 149,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 13.534,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "تنها فلز مایع در دمای اتاق؛ مایع نقره‌ای سنگین با کشش سطحی فوق‌العاده بالا که به شیشه نمی‌چسبد",
      colorFa: "نقره‌ای آینه‌ای درخشان",
      crystalStructureFa:
        "لوزی‌سطحی (رومبوهدرال در فاز منجمد زیر منفی ۳۸.۸ درجه)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 234.32,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 629.88,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.14,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 8.3,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.0,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1007.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -48.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "با اکسیژن در دمای معمولی به کندی واکنش می‌دهد اما با گوگرد در دمای اتاق فوراً ترکیب شده و با فلزات ملغمه (Amalgam) می‌سازد.",
      chemicalBehaviorFa:
        "اوربیتال پر [Xe] 4f¹⁴ 5d¹⁰ 6s²؛ اثرات نسبیتی جفت الکترون بی‌اثر 6s² را تثبیت کرده و مانع پیوند قوی فلزی می‌شود (علت مایع بودن).",
    },
    history: {
      discovererFa: "نامعلوم (شناخته شده از دوران باستان)",
      discoveryYear: "باستان",
      nameOriginFa:
        "واژه لاتین hydrargyrum به معنای نقره مایع و سیاره تیر (Mercury)",
      namingExplanationFa:
        "نماد Hg مخفف واژه باستانی یونانی-لاتین هیدرارژیروم به معنای آب نقره است.",
    },
    applications: {
      industrial: [
        "تولید کلر و سود سوزآور در سلول‌های کاتد جیوه کلر-آلکالی (امروزه با غشا جایگزین شده)",
        "سوئیچ‌های زاویه‌ای شیب‌سنج جیوه‌ای بی‌صدا",
        "استخراج طلا با ملغمه‌سازی سنتی",
      ],
      scientific: [
        "فشارسنج‌های ستون جیوه توریچلی و دماسنج‌های دقیق کالیبراسیون آزمایشگاهی",
      ],
      medical: [
        "آمالگام دندان‌پزشکی نقره-جیوه برای پر کردن دندان‌ها (به دلیل سادگی فرم‌دهی و دوام بالا)",
      ],
      everyday: [
        "دماسنج‌های تب‌سنج جیوه‌ای کلاسیک شیشه‌ای",
        "لامپ‌های مهتابی و کم‌مصرف فلورسنت",
      ],
    },
    safety: {
      toxicityFa:
        "فوق‌العاده سمی و مخرب سیستم عصبی مرکزی؛ متیل‌جیوه آلی سمی‌ترین شکل آن است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "جمع‌آوری قطرات جیوه ریخته‌شده با پودر گوگرد و جلوگیری مطلق از تبخیر آن در اتاق.",
      hazardsFa:
        "بیماری میناماتا در ژاپن ناشی از مسمومیت با متیل‌جیوه ماهی‌ها با آسیب‌های مغزی مادام‌العمر.",
    },
    isotopes: {
      stableCount: 7,
      commonIsotopes: [
        "²⁰²Hg (۲۹.۸۶٪)",
        "²⁰⁰Hg (۲۳.۱۴٪)",
        "¹۹۹Hg (۱۶.۸۷٪)",
        "²⁰¹Hg (۱۳.۱۸٪)",
        "¹۹۸Hg (۹.۹۷٪)",
        "²⁰۴Hg (۶.۸۷٪)",
        "¹۹۶Hg (۰.۱۵٪)",
      ],
      mostStableIsotope: "²⁰²Hg",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "تنها فلز مایع جهان در شرایط اتاق، نقره روان که تبخیر نامرئی آن سمی‌ترین تهدید عصبی برای انسان است.",
      funFactsFa: [
        "کشش سطحی جیوه چنان بالاست که برخلاف آب، شیشه را خیس نمی‌کند و به صورت قطرات کاملاً کروی نقره‌ای غلت می‌خورد!",
        "چگالی جیوه ۱۳.۵ برابر آب است؛ یک وزنه سنگین فولادی یا تکه آجر به راحتی روی جیوه مایع شناور می‌ماند!",
      ],
      naturalOccurrenceFa:
        "در سنگ معدن قرمز روشن شنگرف (سینابار، HgS) استخراج می‌شود.",
      keyCompoundsFa: [
        "سولفید جیوه (سینابار، رنگ شنگرف، HgS)",
        "کلرید جیوه (I) (کالومل، Hg₂Cl₂)",
        "کلرید جیوه (II) (سوبلیمه، HgCl₂)",
        "متیل‌جیوه ((CH₃)₂Hg)",
      ],
      educationalNotesFa:
        "مایع بودن جیوه در دمای اتاق به علت نظریه نسبیت خاص است: هسته سنگین با ۸۰ پروتون سرعت الکترون‌های اوربیتال 6s² را به کسر بزرگی از سرعت نور می‌رساند که باعث انقباض این اوربیتال و عدم اشتراک‌گذاری الکترون‌ها با اتم‌های مجاور می‌شود.",
    },
  },
  // Element 81: Tl (تالیم)
  {
    identity: {
      atomicNumber: 81,
      symbol: "Tl",
      nameFa: "تالیم",
      nameEn: "Thallium",
      pronunciationFa: "تالیُم",
      descriptionFa:
        "سم مرموز نویسندگان رمان‌های جنایی با جوانه سبز طیف‌سنجی و رادیوداروی باسابقه تست اسکن قلب.",
    },
    classification: {
      group: 13,
      period: 6,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 81,
      electrons: 81,
      neutrons: 123,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p¹",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
      electronShells: [2, 8, 18, 32, 18, 3],
      valenceElectrons: 3,
      commonOxidationStates: [1, 3],
      allOxidationStates: [3, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 204.38,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 170,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 148,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 11.85,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نرم، خاکستری مایل به آبی شبیه سرب که با چاقو بریده می‌شود و با ایجاد لایه اکسید کدر می‌گردد",
      colorFa: "خاکستری مایل به سربی",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 577.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1746.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.129,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 46.1,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.62,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 589.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 19.2,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا به سرعت اکسید شده و لایه اکسید خاکستری تیره تشکیل می‌دهد؛ در اسید نیتریک و سولفوریک حل می‌شود.",
      chemicalBehaviorFa:
        "اثر جفت بی‌اثر (Inert pair effect) موجب پایداری استثنایی حالت اکسایش +۱ (مشابه فلزات قلیایی K⁺) بر خلاف سایر عناصر گروه ۱۳ می‌شود.",
    },
    history: {
      discovererFa: "ویلیام کروکس",
      discoveryYear: "1861",
      nameOriginFa: "واژه یونانی thallos به معنای جوانه یا شاخه سبز تازه",
      namingExplanationFa:
        "به دلیل خط طیف‌سنجی سبز زمردی بسیار درخشان و خیره‌کننده در آزمایش طیف‌سنجی نوری.",
    },
    applications: {
      industrial: [
        "آلیاژ جیوه-تالیم با نقطه انجماد منفی ۵۸ درجه در دماسنج‌های دماپایین قطب شمال و فضا",
        "شیشه‌های اپتیکی با چگالی و ضریب شکست بسیار بالا و نقطه ذوب پایین",
        "آشکارسازهای فروسرخ سولفید تالیم",
      ],
      scientific: [
        "نمک تالیم هالوژنی KRS-5 به عنوان پنجره‌های شفاف در طیف‌سنجی فروسرخ تبدیل فوریه (FTIR)",
      ],
      medical: [
        "تالیم-۲۰۱ در اسکن‌های تصویربرداری خون‌رسانی و پرفیوژن قلب (تست ورزش تالیم) در پزشکی هسته‌ای",
      ],
      everyday: [
        "در گذشته به عنوان سم موش‌کش بی‌بو (سولفات تالیم) که امروزه کاملاً ممنوع است",
      ],
    },
    safety: {
      toxicityFa:
        "فوق‌العاده سمی و مهلک؛ یکی از کشنده‌ترین سموم تاریخ با ایجاد طاسی کامل و تخریب اعصاب",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "ممنوعیت مطلق تماس پوستی؛ پادزهر مسمومیت تالیم داروی رنگ آبی پروس (Prussian Blue) است.",
      hazardsFa:
        "سولفات تالیم سمی بی‌رنگ، بی‌بو و بی‌مزه است که موجب ریزش کامل موها، درد وحشتناک اعصاب و مرگ می‌شود.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: ["²⁰۵Tl (۷۰.۴۸٪)", "²⁰۳Tl (۲۹.۵۲٪)"],
      mostStableIsotope: "²⁰⁵Tl",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "سم مرموز نویسندگان رمان‌های جنایی با جوانه سبز طیف‌سنجی و رادیوداروی باسابقه تست اسکن قلب.",
      funFactsFa: [
        "آگاتا کریستی در رمان جنایی مشهور «اسب رنگ‌پریده» علائم مسمومیت با تالیم (به ویژه ریزش موها) را چنان دقیق توصیف کرد که جان چند بیمار واقعی با خواندن کتاب نجات یافت!",
        "یون تالیم Tl⁺ ابعادی کاملاً شبیه به یون پتاسیم K⁺ دارد و سلول‌های بدن فریب خورده و آن را به جای پتاسیم جذب می‌کنند.",
      ],
      naturalOccurrenceFa:
        "بسیار نادر همراه با کانسارهای پیریت آهن و مس استخراج می‌شود.",
      keyCompoundsFa: [
        "سولفات تالیم (Tl₂SO₄)",
        "اکسید تالیم (I) (Tl₂O)",
        "کلرید تالیم (TlCl)",
      ],
      educationalNotesFa:
        "اثر جفت بی‌اثر نسبیتی در تالیم باعث می‌شود جفت الکترون ۶s² تمایلی به مشارکت در پیوند نداشته باشد و ترکیب تالیم (I) بسیار پایدارتر از تالیم (III) باشد.",
    },
  },
  // Element 82: Pb (سرب)
  {
    identity: {
      atomicNumber: 82,
      symbol: "Pb",
      nameFa: "سرب",
      nameEn: "Lead",
      pronunciationFa: "سُرب",
      descriptionFa:
        "سپر محافظ بشر در برابر پرتوهای مرگبار هسته‌ای، پایان تمام زنجیره‌های واپاشی رادیواکتیو و نقطه نهایی ثبات هسته‌ای در گیتی.",
    },
    classification: {
      group: 14,
      period: 6,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 82,
      electrons: 82,
      neutrons: 126,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p²",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
      electronShells: [2, 8, 18, 32, 18, 4],
      valenceElectrons: 4,
      commonOxidationStates: [2, 4],
      allOxidationStates: [4, 2, -4],
    },
    physicalProperties: {
      atomicMass: {
        value: 207.2,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 175,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 146,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 11.34,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز خاکستری-مات سنگین، بسیار نرم، با انعطاف‌پذیری بالا و مقاومت استثنایی در برابر نفوذ پرتوهای رادیواکتیو",
      colorFa: "خاکستری مایل به سربی مات",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 600.61,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2022.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.129,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 35.3,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.33,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 715.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 35.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر اسید سولفوریک و فسفریک به دلیل تشکیل لایه نامحلول محافظ PbSO₄ بسیار مقاوم است؛ در اسید نیتریک حل می‌شود.",
      chemicalBehaviorFa:
        "پایان زنجیره‌های واپاشی رادیواکتیو کیهان؛ حالت پایدار +۲ (به علت اثر جفت بی‌اثر) و حالت ناپایدار اکسیدکننده +۴.",
    },
    history: {
      discovererFa: "نامعلوم (شناخته شده از آغاز عصر فلزات باستان)",
      discoveryYear: "باستان",
      nameOriginFa: "واژه لاتین plumbum به معنای سرب یا لوله آب",
      namingExplanationFa:
        "نماد Pb مخفف کلمه لاتین پلومبوم (Plumbum) است که واژه لوله‌کشی (Plumbing) در انگلیسی نیز از آن مشتق شده است.",
    },
    applications: {
      industrial: [
        "باتری‌های استارتر اسید-سرب (SLI) تمام خودروهای بنزینی و دیزلی جهان",
        "سپرها و جلیقه‌های سربی حفاظت در برابر پرتوهای ایکس و گاما در بیمارستان‌ها و تأسیسات هسته‌ای",
        "وزنه‌های غواصی و تعادل چرخ خودروها",
      ],
      scientific: [
        "سن‌سنجی رادیومتریک اورانیم-سرب (U-Pb) برای تعیین سن ۴.۵۴ میلیارد ساله سیاره زمین",
      ],
      medical: [
        "دیوارهای سربی اتاق‌های رادیوتراپی و روپوش‌های سربی حفاظت از اندام‌های تناسلی بیماران در رادیولوژی",
      ],
      everyday: [
        "باتری اسیدی زیر کاپوت خودروها",
        "وزنه‌های سربی قلاب ماهیگیری",
      ],
    },
    safety: {
      toxicityFa:
        "بسیار سمی و مسموم‌کننده تجمعی، عامل کاهش ضریب هوشی و عقب‌ماندگی در کودکان و آسیب کلیه",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "حذف کامل سرب از لوله‌های آب، رنگ‌های ساختمانی و سوخت بنزین.",
      hazardsFa:
        "بیماری ساتورنیسم (مسمومیت مزمن با سرب) با علائم کم‌خونی، دردهای شکمی و آسیب عصبی.",
    },
    isotopes: {
      stableCount: 4,
      commonIsotopes: [
        "²⁰۸Pb (۵۲.۴٪ ایزوتوپ دوبرابر جادویی)",
        "²⁰۶Pb (۲۴.۱٪ پایان زنجیره اورانیم)",
        "²⁰۷Pb (۲۲.۱٪ پایان زنجیره اکتینیم)",
        "²⁰۴Pb (۱.۴٪)",
      ],
      mostStableIsotope: "²⁰⁸Pb",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "سپر محافظ بشر در برابر پرتوهای مرگبار هسته‌ای، پایان تمام زنجیره‌های واپاشی رادیواکتیو و نقطه نهایی ثبات هسته‌ای در گیتی.",
      funFactsFa: [
        "ایزوتوپ سرب-۲۰۸ با ۸۲ پروتون و ۱۲۶ نوترون، سنگین‌ترین هسته دوبرابر جادویی و کاملاً پایدار در کل کیهان است!",
        "رومیان باستان از سرب برای لوله‌کشی آب و حتی شیرین‌کردن شراب استفاده می‌کردند که برخی تاریخ‌دانان مسمومیت ناشی از آن را از علل زوال امپراتوری روم می‌دانند.",
      ],
      naturalOccurrenceFa:
        "بسیار فراوان در سنگ معدن خاکستری مکعبی گالن (PbS) استخراج می‌شود.",
      keyCompoundsFa: [
        "سولفید سرب (گالن، PbS)",
        "اکسید سرب (II) (لیتاژ، PbO)",
        "دی‌اکسید سرب (PbO₂)",
        "سرنج (تتراکسید سرب، Pb₃O₄)",
      ],
      educationalNotesFa:
        "سرب سنگین‌ترین عنصری در تمام کائنات است که حداقل یک ایزوتوپ کاملاً پایدار دارد؛ تمام عناصر با عدد اتمی ۸۳ به بعد به طور طبیعی یا مصنوعی رادیواکتیو و پرتوزا هستند.",
    },
  },
  // Element 83: Bi (بیسموت)
  {
    identity: {
      atomicNumber: 83,
      symbol: "Bi",
      nameFa: "بیسموت",
      nameEn: "Bismuth",
      pronunciationFa: "بیسموت",
      descriptionFa:
        "معجزه صورتی و غیرسمی فلزات سنگین، بلور رنگین‌کمانی هاپر و داروی التیام‌بخش زخم معده و میکروب معده.",
    },
    classification: {
      group: 15,
      period: 6,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 83,
      electrons: 83,
      neutrons: 126,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p³",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
      electronShells: [2, 8, 18, 32, 18, 5],
      valenceElectrons: 5,
      commonOxidationStates: [3],
      allOxidationStates: [5, 3, 2, 1, -3],
    },
    physicalProperties: {
      atomicMass: {
        value: 208.98,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 156,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 148,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 9.78,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز شکننده، نقره‌ای با جلای صورتی ملایم با بلورهای پلکانی رنگین‌کمانی چشم‌نواز و قوی‌ترین دیامغناطیس",
      colorFa: "سفید-نقره‌ای با ته رنگ صورتی",
      crystalStructureFa: "لوزی‌سطحی (رومبوهدرال)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 544.7,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1837.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.122,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 7.97,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.02,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 703.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 91.2,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا پایدار است اما در گرما اکسید زرد Bi₂O₃ تولید می‌کند؛ با اسید نیتریک غلیظ حل می‌شود.",
      chemicalBehaviorFa:
        "تنها فلز سنگین کاملاً غیرسمی جدول؛ دارای بالاترین مقاومت ویژه دیامغناطیسی در میان تمام فلزات.",
    },
    history: {
      discovererFa: "نامعلوم (شناخته شده در کیمیاگری کهن)",
      discoveryYear: "1753",
      nameOriginFa: "واژه آلمانی Wismuth یا weisse Masse به معنای توده سفید",
      namingExplanationFa:
        "برگرفته از واژه معدنچیان ساکسونی آلمان به معنای ماده سفید فلزی.",
    },
    applications: {
      industrial: [
        "آلیاژهای زودگداز و فیوزهای آتش‌نشانی اسپرینکلر (مانند آلیاژ وود)",
        "جایگزین ایمن و غیرسمی برای سرب در گلوله‌های شکار و لوله‌کشی آب",
        "خنک‌کننده‌های ترموالکتریک تلورید بیسموت (Bi₂Te₃)",
      ],
      scientific: [
        "بلورهای شگفت‌انگیز شناوری مغناطیسی (Diamagnetic levitation) بدون نیاز به ابررسانا",
      ],
      medical: [
        "بیسموت ساب‌سیترات و پپتو-بیسمول داروی خط اول درمان عفونت هلیکوباکتر پیلوری و زخم معده",
      ],
      everyday: [
        "شربت‌های درمان دل‌پیچه و معده‌درد (پپتو-بیسمول)",
        "لوازم آرایشی برق لب با اکسی‌کلرید بیسموت",
      ],
    },
    safety: {
      toxicityFa:
        "بر خلاف همسایگان سربی و تالیمی خود کاملاً غیرسمی و ایمن برای انسان",
      radioactivity: false,
      radiationType: "پرتوزایی آلفای بسیار ناچیز طبیعی (ایزوتوپ ²⁰⁹Bi)",
      precautionsFa: "کنترل مصرف دوز بیش از حد داروهای گوارشی بیسموت.",
      hazardsFa: "سیاه شدن موقت و بی‌خطر زبان و مدفوع با مصرف شربت بیسموت.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: [
        "²⁰⁹Bi (۱۰۰٪ فراوانی طبیعی با نیمه‌عمر ۲۰ ضربدر ۱۰¹۸ سال)",
      ],
      mostStableIsotope: "²⁰⁹Bi",
      halfLife: "۲۰ میلیارد میلیارد سال",
    },
    additionalContent: {
      summaryFa:
        "معجزه صورتی و غیرسمی فلزات سنگین، بلور رنگین‌کمانی هاپر و داروی التیام‌بخش زخم معده و میکروب معده.",
      funFactsFa: [
        "بلورهای بیسموت پس از انجماد ساختارهای پلکانی هندسی با فیلم اکسید رنگین‌کمانی چشم‌نوازی مانند معابد باستانی مایا می‌سازند!",
        "تا سال ۲۰۰۳ بیسموت پایدار شمرده می‌شد تا اینکه مشخص شد ایزوتوپ بیسموت-۲۰۹ با نیمه‌عمر ۲۰ میلیارد میلیارد سال (یک میلیارد برابر سن کل جهان!) به کندی واپاشی آلفا می‌کند.",
      ],
      naturalOccurrenceFa:
        "به شکل فلز آزاد در طبیعت و در کانی‌های بیسموتینیت (Bi₂S₃) و بیسمیت (Bi₂O₃).",
      keyCompoundsFa: [
        "بیسموت ساب‌سالیسیلات (پپتو-بیسمول)",
        "بیسموت ساب‌سیترات (داروی زخم معده)",
        "اکسی‌کلرید بیسموت مرواریدی (BiOCl)",
      ],
      educationalNotesFa:
        "بیسموت مانند آب هنگام انجماد ۳.۳ درصد انبساط حجم پیدا می‌کند و بنابراین آلیاژهای آن برای پر کردن قالب‌های ریخته‌گری بسیار ظریف ایده‌آل هستند.",
    },
  },
  // Element 84: Po (پولونیم)
  {
    identity: {
      atomicNumber: 84,
      symbol: "Po",
      nameFa: "پولونیم",
      nameEn: "Polonium",
      pronunciationFa: "پولونیُم",
      descriptionFa:
        "نخستین عنصر کشف‌شده توسط ماری کوری به نام وطنش لهستان و یکی از مرگ‌بارترین سموم پرتوزای تاریخ.",
    },
    classification: {
      group: 16,
      period: 6,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 84,
      electrons: 84,
      neutrons: 125,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
      electronShells: [2, 8, 18, 32, 18, 6],
      valenceElectrons: 6,
      commonOxidationStates: [4, 2],
      allOxidationStates: [6, 4, 2, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 209.0,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 168,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 140,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 9.196,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو نقره‌ای، به شدت فرار که در اثر بمباران اتم‌های خود با حرارت زیاد گداخته می‌شود",
      colorFa: "سفید-نقره‌ای متالیک",
      crystalStructureFa: "مکعبی ساده (تنها عنصر با ساختار مکعبی ساده اولیه)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 527.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1235.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.125,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.2,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.0,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 812.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 183.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلزی رادیواکتیو فعال که به راحتی در اسیدها حل شده و در هوا دود اکسید PoO₂ تولید می‌کند.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۴ و +۲؛ توده فلزی آن به دلیل واپاشی شدید آلفا تا ۵۰۰ درجه سلسیوس داغ می‌شود.",
    },
    history: {
      discovererFa: "ماری کوری و پیر کوری",
      discoveryYear: "1898",
      nameOriginFa: "کشور لهستان (Poland)",
      namingExplanationFa:
        "نام‌گذاری توسط ماری کوری به افتخار زادگاهش لهستان (Polonia) که در آن زمان تحت اشغال روسیه بود.",
    },
    applications: {
      industrial: [
        "منبع گرمایی ترموالکتریک رادیوایزوتوپی (RTG) در کاوشگرهای فضایی و ماه‌نورد لونوخود شوروی",
        "حذف بار الکتریسیته ساکن در کارخانجات تولید فیلم عکاسی و نساجی",
      ],
      scientific: [
        "منبع چشمه فشرده نوترون در تلفیق با بریلیم برای آغاز واکنش زنجیره‌ای بمب‌های اتمی اولیه",
      ],
      medical: [
        "کاربرد پزشکی مستقیم ندارد؛ در تحقیقات سم‌شناسی هسته‌ای مطالعه می‌شود",
      ],
      everyday: [
        "برس‌های ضداستاتیک لنزهای عکاسی صنعتی قدیمی (امروزه با روش‌های غیرپرتوزا جایگزین شده)",
      ],
    },
    safety: {
      toxicityFa:
        "یکی از کشنده‌ترین مواد شناخته‌شده جهان؛ یک میکروگرم آن از راه بلع یا استنشاق صددرصد کشنده است",
      radioactivity: true,
      radiationType: "پرتوزای پرانرژی آلفا",
      precautionsFa:
        "نگهداری انحصاری در جعبه‌های دستکش‌دار با جریان هوای منفی و فیلترهای هپا فوق‌پیشرفته.",
      hazardsFa:
        "تخریب سریع و کامل مغز استخوان و اندام‌های داخلی با ذرات آلفای پرانرژی (ترور الکساندر لیتویننکو در سال ۲۰۰۶).",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²¹⁰Po (نیمه‌عمر ۱۳۸.۴ روز)",
        "²⁰۹Po (نیمه‌عمر ۱۲۵ سال)",
      ],
      mostStableIsotope: "²⁰⁹Po",
      halfLife: "۱۲۵ سال",
    },
    additionalContent: {
      summaryFa:
        "نخستین عنصر کشف‌شده توسط ماری کوری به نام وطنش لهستان و یکی از مرگ‌بارترین سموم پرتوزای تاریخ.",
      funFactsFa: [
        "پولونیم به قدری پرتو آلفا گسیل می‌کند که یک گرم آن حدود ۱۴۰ وات گرما تولید کرده و بدون منبع خارجی می‌درخشد و سرخ می‌شود!",
        "تنها عنصر شناخته‌شده در کل جدول تناوبی است که در دمای اتاق ساختار بلوری «مکعبی ساده» دارد.",
      ],
      naturalOccurrenceFa:
        "بسیار نادر به عنوان محصول واپاشی رادیوم در سنگ معدن اورانیم پیچ‌بلند (حدود ۱۰۰ میکروگرم در هر تن سنگ).",
      keyCompoundsFa: ["دی‌اکسید پولونیم (PoO₂)", "تتراکلرید پولونیم (PoCl₄)"],
      educationalNotesFa:
        "پولونیم-۲۱۰ در برگ‌های تنباکوی سیگار به دلیل استفاده از کودهای فسفاته تجمع می‌یابد و عامل مهمی در بروز سرطان ریه در افراد سیگاری است.",
    },
  },
  // Element 85: At (استاتین)
  {
    identity: {
      atomicNumber: 85,
      symbol: "At",
      nameFa: "استاتین",
      nameEn: "Astatine",
      pronunciationFa: "استاتین",
      descriptionFa:
        "کمیاب‌ترین عنصر طبیعی روی کره زمین و گلوله جادویی پرتودرمانی آلفا برای انهدام سلول‌های سرطانی.",
    },
    classification: {
      group: 17,
      period: 6,
      block: "p",
      category: "halogen",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 85,
      electrons: 85,
      neutrons: 125,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
      electronShells: [2, 8, 18, 32, 18, 7],
      valenceElectrons: 7,
      commonOxidationStates: [-1, 1],
      allOxidationStates: [7, 5, 3, 1, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 210.0,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 150,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 150,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 6.35,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "شبه‌فلز/هالوژن تیره بسیار رادیواکتیو که در کل پوسته زمین کمتر از ۲۵ گرم از آن وجود دارد",
      colorFa: "سیاه تیره با جلای متالیک",
      crystalStructureFa: "پیش‌بینی شده مکعبی یا ارتورومبیک",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 575.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 610.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.14,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 1.7,
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
        value: 890.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 270.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "خواص شبه‌فلزی و هالوژنی؛ به دلیل گرمای شدید واپاشی رادیواکتیو فوراً تبخیر می‌شود.",
      chemicalBehaviorFa:
        "سنگین‌ترین هالوژن؛ خصلت‌های فلزی بیشتری نسبت به ید دارد و کاتیون‌های پایدار At⁺ تشکیل می‌دهد.",
    },
    history: {
      discovererFa: "دیل کورسون، کنت مکنزی و امیلیو سگره",
      discoveryYear: "1940",
      nameOriginFa: "واژه یونانی astatos به معنای ناپایدار",
      namingExplanationFa:
        "به دلیل ناپایداری شدید رادیواکتیو تمام ایزوتوپ‌هایش نام‌گذاری گردید.",
    },
    applications: {
      industrial: [
        "کاربرد صنعتی ندارد به دلیل کمیابی شدید و رادیواکتیویته بالا",
      ],
      scientific: [
        "مطالعات اثرات پیوندهای نسبیتی در هالوژن‌های سنگین در شتاب‌دهنده‌ها",
      ],
      medical: [
        "استاتین-۲۱۱ امیدبخش‌ترین ایزوتوپ در درمان هدفمند سرطان با پرتو آلفا (Targeted Alpha Therapy, TAT)",
      ],
      everyday: ["هیچ کاربرد تجاری یا عمومی ندارد"],
    },
    safety: {
      toxicityFa: "به شدت رادیوتوکسیک و خطرناک",
      radioactivity: true,
      radiationType: "پرتوزای آلفا و بتا",
      precautionsFa:
        "سنتز صرفاً در شتاب‌دهنده‌های سیکلوترون با ایزولاسیون کامل.",
      hazardsFa:
        "تجمع در غده تیروئید مانند ید و تخریب شدید بافت توسط پرتوهای آلفا.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²¹⁰At (طولانی‌ترین نیمه‌عمر ۸.۱ ساعت)",
        "²¹¹At (نیمه‌عمر ۷.۲ ساعت در پزشکی)",
      ],
      mostStableIsotope: "²¹⁰At",
      halfLife: "۸.۱ ساعت",
    },
    additionalContent: {
      summaryFa:
        "کمیاب‌ترین عنصر طبیعی روی کره زمین و گلوله جادویی پرتودرمانی آلفا برای انهدام سلول‌های سرطانی.",
      funFactsFa: [
        "در تمام پوسته سیاره زمین، در هر لحظه کمتر از ۲۵ گرم استاتین طبیعی وجود دارد (به اندازه یک قاشق غذاخوری در کل کره زمین)!",
        "ایزوتوپ استاتین-۲۱۱ پس از تزریق با اتصال به آنتی‌بادی، در فاصله چند سلولی پرتو آلفا شلیک کرده و سلول سرطانی را بدون آسیب به بافت مجاور از بین می‌برد.",
      ],
      naturalOccurrenceFa:
        "گذرا به عنوان محصول جانبی بسیار نادر در زنجیره‌های واپاشی اورانیم و توریم.",
      keyCompoundsFa: ["استاتید سدیم (NaAt)", "مونوکلرید استاتین (AtCl)"],
      educationalNotesFa:
        "طولانی‌ترین نیمه‌عمر ایزوتوپ‌های استاتین تنها ۸.۱ ساعت است و به همین علت هرگز نمی‌توان نمونه‌ای از این عنصر را در مقیاس گرم مشاهده کرد، چرا که گرمای پرتوزایی خود اتم‌ها آن را تبخیر می‌کند.",
    },
  },
  // Element 86: Rn (رادون)
  {
    identity: {
      atomicNumber: 86,
      symbol: "Rn",
      nameFa: "رادون",
      nameEn: "Radon",
      pronunciationFa: "رادُن",
      descriptionFa:
        "گاز رادیواکتیو سنگین و نامرئی ناشی از سنگ‌های گرانیتی زمین و دومین عامل ابتلا به سرطان ریه در بشر.",
    },
    classification: {
      group: 18,
      period: 6,
      block: "p",
      category: "noble-gas",
      standardState: "gas",
    },
    atomicStructure: {
      protons: 86,
      electrons: 86,
      neutrons: 136,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
      abbreviatedConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
      electronShells: [2, 8, 18, 32, 18, 8],
      valenceElectrons: 8,
      commonOxidationStates: [0, 2],
      allOxidationStates: [2, 0],
    },
    physicalProperties: {
      atomicMass: {
        value: 222.0,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 120,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 150,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 9.73,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "سنگین‌ترین گاز در دمای اتاق؛ گاز نجیب بی‌رنگ، بی‌بو، بسیار رادیواکتیو با درخشش زرد-نارنجی در فاز مایع",
      colorFa: "بی‌رنگ (گاز) / فسفری درخشان (مایع)",
      crystalStructureFa: "مکعبی مرکزپر (fcc در فاز جامد برودتی)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 202.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 211.3,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.094,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.00361,
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
        value: 1037.0,
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
        "از نظر شیمیایی گاز نجیب بی‌اثر است اما فلوئورید رادون (RnF₂) به دلیل پیوندهای نسبیتی ساخته شده است.",
      chemicalBehaviorFa:
        "پایین‌ترین انرژی یونش در میان گازهای نجیب به استثنای اوگانسون؛ با فلوئور در دمای ۴۰۰ درجه ترکیب می‌شود.",
    },
    history: {
      discovererFa: "ارنست رادرفورد و فردریش ارنست دورن",
      discoveryYear: "1900",
      nameOriginFa: "عنصر رادیوم (Radium)",
      namingExplanationFa:
        "به دلیل متصاعد شدن مستقیم آن از واپاشی هسته‌ای عنصر رادیوم نام‌گذاری شد.",
    },
    applications: {
      industrial: [
        "ردیاب هیدرولوژیکی جریان آب‌های زیرزمینی و شناسایی گسل‌های فعال زلزله",
      ],
      scientific: [
        "پیش‌بینی زلزله با پایش افزایش ناگهانی غلظت گاز رادون خروجی از چاه‌های گسل‌ها",
      ],
      medical: [
        "در گذشته کپسول‌های رادون در پرتودرمانی سرطان کاشت می‌شد (امروزه با ایزوتوپ‌های ایمن‌تر جایگزین شده)",
      ],
      everyday: [
        "دستگاه‌های پایش و حسگر رادون در زیرزمین منازل مناطق سنگ گرانیتی",
      ],
    },
    safety: {
      toxicityFa:
        "دومین عامل اصلی سرطان ریه در جهان پس از دود سیگار به دلیل استنشاق و گسیل ذرات آلفا",
      radioactivity: true,
      radiationType: "پرتوزای پرخطر آلفا",
      precautionsFa:
        "تهویه مداوم زیرزمین‌ها و درزبندی شکاف‌های کف ساختمان در مناطق دارای سنگ‌های آذرین و گرانیت.",
      hazardsFa:
        "استنشاق ایزوتوپ‌های دختر رادون و چسبیدن به بافت ریه و ایجاد سرطان کشنده ریه.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²²²Rn (نیمه‌عمر ۳.۸۲ روز محصول رادیوم-۲۲۶)",
        "²²⁰Rn (تورون، نیمه‌عمر ۵۵.۶ ثانیه)",
      ],
      mostStableIsotope: "²²²Rn",
      halfLife: "۳.۸۲ روز",
    },
    additionalContent: {
      summaryFa:
        "گاز رادیواکتیو سنگین و نامرئی ناشی از سنگ‌های گرانیتی زمین و دومین عامل ابتلا به سرطان ریه در بشر.",
      funFactsFa: [
        "رادون بیش از ۸ برابر سنگین‌تر از هواست و در زیرزمین‌ها و چاه‌ها تجمع می‌یابد!",
        "بیش از نیمی از کل پرتوگیری طبیعی سالانه بدن انسان از محیط زیست، ناشی از استنشاق گاز رادون موجود در هواست.",
      ],
      naturalOccurrenceFa:
        "به صورت گاز متصاعدشونده از واپاشی طبیعی اورانیم در سنگ‌های گرانیت پوسته زمین.",
      keyCompoundsFa: ["دی‌فلوئورید رادون (RnF₂)"],
      educationalNotesFa:
        "خطر اصلی رادون گاز خود آن نیست، بلکه ایزوتوپ‌های سنگین حاصل از واپاشی آن (پولونیم-۲۱۸ و سرب-۲۱۴) هستند که ذرات جامد بوده و در ریه رسوب کرده و پرتوهای آلفا گسیل می‌کنند.",
    },
  },
];
