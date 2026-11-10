import { ChemicalElement } from "@/types/element";

/**
 * Period 5 Elements (Total: 18)
 * Marslement - Chemical Database
 */
export const PERIOD_5_ELEMENTS: ChemicalElement[] = [
  // Element 37: Rb (روبیدیم)
  {
    identity: {
      atomicNumber: 37,
      symbol: "Rb",
      nameFa: "روبیدیم",
      nameEn: "Rubidium",
      pronunciationFa: "روبیدیُم",
      descriptionFa:
        "فلز قلیایی فوق‌واکنش‌پذیر که مبنای ساخت دقیق‌ترین ساعت‌های اتمی تجاری و نخستین نمونه چگالش بوز-اینشتین فیزیک است.",
    },
    classification: {
      group: 1,
      period: 5,
      block: "s",
      category: "alkali-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 37,
      electrons: 37,
      neutrons: 48,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s¹",
      abbreviatedConfiguration: "[Kr] 5s¹",
      electronShells: [2, 8, 18, 8, 1],
      valenceElectrons: 1,
      commonOxidationStates: [1],
      allOxidationStates: [1, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 85.468,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 248,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 216,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 1.532,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای-سفید بسیار نرم که در دمای ۳۹.۳ درجه ذوب می‌شود و در هوا خودبه‌خود مشتعل می‌گردد",
      colorFa: "سفید-نقره‌ای",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 312.45,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 961.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.363,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 58.2,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 0.82,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 403.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 46.9,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "واکنش فوق‌العاده شدید و انفجاری با آب و اشتعال خودبه‌خودی با شعله بنفش-سرخ در هوای آزاد.",
      chemicalBehaviorFa:
        "از دست دادن آنی الکترون 5s¹ و تشکیل یون Rb⁺ با واکنش‌پذیری بالاتر از پتاسیم.",
    },
    history: {
      discovererFa: "روبرت بونزن و گوستاو کیرشهف",
      discoveryYear: "1861",
      nameOriginFa: "واژه لاتین rubidus به معنای سرخ تیره",
      namingExplanationFa:
        "به دلیل دو خط طیفی قرمز تیره درخشان و متمایز در طیف‌سنج نوری بونزن.",
    },
    applications: {
      industrial: [
        "ساعت‌های اتمی روبیدیمی کوچک و دقیق در ایستگاه‌های مخابراتی ۵G و ماهواره‌های ناوبری GPS",
        "تولید شیشه‌های اپتیکی ویژه و فتوسلول‌ها",
      ],
      scientific: [
        "ایجاد نخستین چگالش بوز-اینشتین (BEC) جهان در سال ۱۹۹۵ با استفاده از گاز اتم‌های روبیدیم-۸۷ که برنده نوبل فیزیک شد",
      ],
      medical: [
        "تصویربرداری توموگرافی گسیل پوزیترون (PET) قلب با رادیوایزوتوپ روبیدیم-۸۲ برای ارزیابی پرفیوژن میوکارد",
      ],
      everyday: ["تثبیت زمان دقیق شبکه‌های تلفن همراه با ساعت‌های روبیدیمی"],
    },
    safety: {
      toxicityFa: "سمیت در مقادیر بالا به دلیل رقابت با یون پتاسیم در سلول‌ها",
      radioactivity: false,
      radiationType: "پرتوزایی طبیعی ضعیف (ایزوتوپ ⁸⁷Rb)",
      precautionsFa:
        "نگهداری الزامی در آمپول‌های شیشه‌ای محبوس در گاز بی‌اثر آرگون یا زیر روغن خشک.",
      hazardsFa:
        "اشتعال خودبه‌خودی خطرناک در هوا و انفجار در تماس با هرگونه رطوبت.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: [
        "⁸⁵Rb (۷۲.۱۷٪ پایدار)",
        "⁸⁷Rb (۲۷.۸۳٪ پرتوزای بتا با نیمه‌عمر ۴۹ میلیارد سال)",
      ],
      mostStableIsotope: "⁸⁵Rb",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز قلیایی فوق‌واکنش‌پذیر که مبنای ساخت دقیق‌ترین ساعت‌های اتمی تجاری و نخستین نمونه چگالش بوز-اینشتین فیزیک است.",
      funFactsFa: [
        "کشف روبیدیم نخستین موفقیت بزرگ طیف‌سنجی نوری در تاریخ شیمی توسط بونزن و کیرشهف بود.",
        "ایزوتوپ روبیدیم-۸۷ با نیمه‌عمر ۴۹ میلیارد سال (سه برابر سن کل کیهان!) برای سن‌سنجی سنگ‌های بسیار کهن استفاده می‌شود.",
      ],
      naturalOccurrenceFa:
        "به عنوان عنصر همراه در کانی لپیدولیت و پولوسیت به همراه لیتیم و سزیم یافت می‌شود.",
      keyCompoundsFa: [
        "کلرید روبیدیم (RbCl)",
        "هیدروکسید روبیدیم (RbOH)",
        "کربنات روبیدیم (Rb₂CO₃)",
      ],
      educationalNotesFa:
        "هیدروکسید روبیدیم (RbOH) یکی از قوی‌ترین بازهای شناخته‌شده است که حتی شیشه را به سرعت حل می‌کند.",
    },
  },
  // Element 38: Sr (استرانسیم)
  {
    identity: {
      atomicNumber: 38,
      symbol: "Sr",
      nameFa: "استرانسیم",
      nameEn: "Strontium",
      pronunciationFa: "استرانسیُم",
      descriptionFa:
        "عنصر آفریننده نور سرخ خیره‌کننده آتش‌بازی‌ها و قلب ساعت‌های اتمی نوری فوق‌دقیق جهان.",
    },
    classification: {
      group: 2,
      period: 5,
      block: "s",
      category: "alkaline-earth-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 38,
      electrons: 38,
      neutrons: 50,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s²",
      abbreviatedConfiguration: "[Kr] 5s²",
      electronShells: [2, 8, 18, 8, 2],
      valenceElectrons: 2,
      commonOxidationStates: [2],
      allOxidationStates: [2],
    },
    physicalProperties: {
      atomicMass: {
        value: 87.62,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 215,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 195,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 2.64,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز زرد-نقره‌ای نرم که در مجاورت هوا به سرعت اکسید شده و با شعله سرخ درخشان می‌سوزد",
      colorFa: "نقره‌ای با ته رنگ زرد",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1050.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1650.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.301,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 35.4,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 0.95,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 549.5,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 5.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "واکنش شدید با آب و اشتعال در هوا به صورت پودر ریز با تولید شعله سرخ زرشکی سوزان.",
      chemicalBehaviorFa:
        "از دست دادن دو الکترون 5s² و تشکیل کاتیون Sr²⁺ با خواصی کاملاً همسان با کلسیم در جذب استخوانی.",
    },
    history: {
      discovererFa: "آدایر کرافورد",
      discoveryYear: "1790",
      nameOriginFa: "روستای استرانتیان (Strontian) در اسکاتلند",
      namingExplanationFa:
        "نام‌گذاری بر اساس نام دهکده استرانتیان در اسکاتلند که سنگ معدن استرانتیانیت در آنجا کشف شد.",
    },
    applications: {
      industrial: [
        "آتش‌بازی و منورهای اضطراری دریایی برای ایجاد رنگ سرخ درخشان پرتابی",
        "آهنرباهای فریت استرانسیم در بلندگوها و موتورهای کوچک خودرو",
        "فسفرهای شب‌تاب آلومینات استرانسیم با ماندگاری نور تا ۱۲ ساعت",
      ],
      scientific: [
        "ساعت‌های اتمی شبکه‌ای نوری استرانسیم با خطای کمتر از ۱ ثانیه در ۱۵ میلیارد سال (دقیق‌ترین ساعت تاریخ بشر)",
      ],
      medical: [
        "داروی استرانسیم رانلات برای تحریک استخوان‌سازی در پوکی استخوان",
        "کلرید استرانسیم-۸۹ برای تسکین دردهای استخوانی سرطان‌های پیشرفته",
      ],
      everyday: [
        "لوازم آتش‌بازی جشن‌ها و منورهای نجات قایق‌ها",
        "صفحات شب‌تاب ساعت‌ها و علائم خروج اضطراری ساختمان",
      ],
    },
    safety: {
      toxicityFa:
        "استرانسیم طبیعی غیرسمی است؛ ایزوتوپ رادیواکتیو ۹۰Sr به دلیل جذب در استخوان بسیار خطرناک است",
      radioactivity: false,
      radiationType: "ندارد (ایزوتوپ ⁹⁰Sr پرتوزای خطرناک بتا)",
      precautionsFa:
        "نگهداری زیر نفت سفید برای جلوگیری از اکسایش سطحی خودبه‌خودی.",
      hazardsFa:
        "استرانسیم-۹۰ ناشی از آزمایش‌های اتمی در استخوان جذب شده و عامل سرطان خون و استخوان است.",
    },
    isotopes: {
      stableCount: 4,
      commonIsotopes: [
        "⁸⁸Sr (۸۲.۵۸٪)",
        "⁸۶Sr (۹.۸۶٪)",
        "⁸۷Sr (۷.۰۰٪)",
        "⁸۴Sr (۰.۵۶٪)",
      ],
      mostStableIsotope: "⁸⁸Sr",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر آفریننده نور سرخ خیره‌کننده آتش‌بازی‌ها و قلب ساعت‌های اتمی نوری فوق‌دقیق جهان.",
      funFactsFa: [
        "رنگ سرخ آتش‌بازی‌ها در آسمان شب ۱۰۰ درصد ناشی از سوختن نمک‌های کربنات و نیترات استرانسیم است.",
        "ساعت اتمی شبکه نوری استرانسیم در موسسه JILA چنان دقیق است که اگر از آغاز مهبانگ کار می‌کرد، تا امروز حتی یک ثانیه خطا نمی‌داشت!",
      ],
      naturalOccurrenceFa:
        "در کانی‌های سلستین (SrSO₄) و استرانتیانیت (SrCO₃) استخراج می‌شود.",
      keyCompoundsFa: [
        "کربنات استرانسیم (SrCO₃)",
        "نیترات استرانسیم (Sr(NO₃)₂)",
        "آلومینات استرانسیم فسفرسانس (SrAl₂O₄)",
        "کلرید استرانسیم (SrCl₂)",
      ],
      educationalNotesFa:
        "استرانسیم به دلیل داشتن همان بار (+۲) و شعاع یونی نزدیک به کلسیم، توسط سیستم گوارش جذب شده و در ساختار استخوان‌ها جایگزین کلسیم می‌شود.",
    },
  },
  // Element 39: Y (ایتریم)
  {
    identity: {
      atomicNumber: 39,
      symbol: "Y",
      nameFa: "ایتریم",
      nameEn: "Yttrium",
      pronunciationFa: "ایتریُم",
      descriptionFa:
        "عنصر کلیدی لیزرهای جراحی صنعتی Nd:YAG و نخستین ماده کشف‌شده که در بالای دمای نیتروژن مایع خاصیت ابررسانایی نشان داد.",
    },
    classification: {
      group: 3,
      period: 5,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 39,
      electrons: 39,
      neutrons: 50,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹ 5s²",
      abbreviatedConfiguration: "[Kr] 4d¹ 5s²",
      electronShells: [2, 8, 18, 9, 2],
      valenceElectrons: 3,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 88.906,
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
        value: 162,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 4.472,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای براق با خصلت‌های بسیار نزدیک به لانتانیدها که در هوا پایدار است",
      colorFa: "نقره‌ای متالیک",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1799.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3609.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.298,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 17.2,
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
        value: 600.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 29.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در مجاورت هوا پایدار است به دلیل تشکیل لایه اکسید Y₂O₃؛ پودر داغ آن در هوا مشتعل می‌شود.",
      chemicalBehaviorFa:
        "تنها حالت اکسایش پایدار +۳؛ به دلیل انقباض لانتانیدی شعاع یونی مشابه هولمیم و اربیوم دارد.",
    },
    history: {
      discovererFa: "یوهان گادولین",
      discoveryYear: "1794",
      nameOriginFa: "روستای ایتربی (Ytterby) در سوئد",
      namingExplanationFa:
        "نام‌گذاری از روی نام معدن ایتربی در نزدیکی استکهلم که منشأ کشف ۴ عنصر جدول تناوبی است.",
    },
    applications: {
      industrial: [
        "تولید بلورهای لیزر پرقدرت گارنت آلومینیم-ایتریم (Nd:YAG)",
        "سرامیک‌های زیرکونیای پایدارشده با ایتریا (YSZ) برای پره‌های موتور توربین و سنسور اکسیژن خودرو",
        "فسفرهای قرمز تلویزیون‌های رنگی قدیمی",
      ],
      scientific: [
        "ابررساناهای دمای بالا YBCO (YBa₂Cu₃O₇) با دمای بحرانی ۹۳ کلوین (بالاتر از دمای نیتروژن مایع)",
      ],
      medical: [
        "لیزرهای جراحی و دندان‌پزشکی Er:YAG و رادیوایزوتوپ ایتریم-۹۰ برای پرتودرمانی سرطان کبد و رادیوآمبولیزاسیون",
      ],
      everyday: [
        "سنسور اکسیژن اگزوز خودروها (لامبدا سنسور)",
        "چاقوهای سرامیکی بسیار تیز زیرکونیا-ایتریا",
      ],
    },
    safety: {
      toxicityFa: "سمیت در دوزهای پایین اندک است؛ غبار آن تحریک‌کننده ریه است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "کنترل استنشاق غبار ترکیبات در خطوط تولید سرامیک و اپتیک.",
      hazardsFa: "سوزش چشم و فیبروز ریوی در مواجهه مزمن.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["⁸⁹Y (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "⁸⁹Y",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر کلیدی لیزرهای جراحی صنعتی Nd:YAG و نخستین ماده کشف‌شده که در بالای دمای نیتروژن مایع خاصیت ابررسانایی نشان داد.",
      funFactsFa: [
        "روستای کوچک ایتربی در سوئد رکورددار جهان است: نام ۴ عنصر جدول تناوبی (ایتریم، تربیم، اربیم، ایتربیم) از این روستا گرفته شده است!",
        "ابررسانای YBCO در سال ۱۹۸۷ جهان را تکان داد زیرا برای نخستین بار با نیتروژن مایع ارزان‌قیمت کار می‌کرد.",
      ],
      naturalOccurrenceFa:
        "همراه با سایر عناصر خاک‌های کمیاب در کانی‌های مونازیت، زنوتایم و باستانائزیت یافت می‌شود.",
      keyCompoundsFa: [
        "اکسید ایتریم (ایتریا، Y₂O₃)",
        "گارنت ایتریم-آلومینیم (YAG)",
        "ابررسانای ایترات باریوم مس (YBCO)",
      ],
      educationalNotesFa:
        "ایتریم اگرچه عضو بلوک d است، به دلیل رفتارهای شیمیایی کاملاً همسان معمولاً به همراه لانتانیدها جزو عناصر خاک‌های کمیاب (REE) طبقه‌بندی می‌شود.",
    },
  },
  // Element 40: Zr (زیرکونیم)
  {
    identity: {
      atomicNumber: 40,
      symbol: "Zr",
      nameFa: "زیرکونیم",
      nameEn: "Zirconium",
      pronunciationFa: "زیرکونیُم",
      descriptionFa:
        "نگهبان میله‌های سوخت نیروگاه‌های هسته‌ای جهان با ریشه نام اصیل فارسی زرگون و پادشاه روکش‌های زیبایی دندان‌پزشکی.",
    },
    classification: {
      group: 4,
      period: 5,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 40,
      electrons: 40,
      neutrons: 51,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d² 5s²",
      abbreviatedConfiguration: "[Kr] 4d² 5s²",
      electronShells: [2, 8, 18, 10, 2],
      valenceElectrons: 4,
      commonOxidationStates: [4],
      allOxidationStates: [4, 3, 2, 1, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 91.224,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 160,
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
        value: 6.52,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز براق، خاکستری-سفید، بسیار مقاوم در برابر خوردگی اسیدی با سطح مقطع ناچیز جذب نوترون",
      colorFa: "خاکستری-سفید براق",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2128.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4682.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.278,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 22.6,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.33,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 640.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 41.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فوق‌العاده مقاوم در برابر اسیدها، بازها و آب دریا به دلیل تشکیل پوسته شفاف و غیرقابل نفوذ اکسید ZrO₂.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۴؛ شفافیت استثنایی در برابر عبور نوترون‌های حرارتی رآکتور هسته‌ای.",
    },
    history: {
      discovererFa: "مارتین هاینریش کلاپروت",
      discoveryYear: "1789",
      nameOriginFa: "واژه پارسی زرگون (Zargun) به معنای همانند طلا یا زرین",
      namingExplanationFa:
        "نام‌گذاری بر اساس نام سنگ قیمتی زرگون (زیرکن) که از عهد کهن در زبان فارسی به معنای طلایی‌رنگ شناخته می‌شد.",
    },
    applications: {
      industrial: [
        "غلاف سوخت هسته‌ای رآکتورهای اتمی (آلیاژهای زیرکالوی) به دلیل عدم جذب نوترون",
        "پوشش‌های عایق حرارتی موتورهای جت و فضاپیماها با دی‌اکسید زیرکونیم (زیرکونیا)",
        "شیرآلات و مبدل‌های حرارتی صنایع شیمیایی بسیار خورنده",
      ],
      scientific: [
        "سن‌سنجی رادیومتریک بلورهای زیرکن اورانیم-سرب برای کشف کهن‌ترین شواهد تاریخ زمین (۴.۴ میلیارد سال)",
      ],
      medical: [
        "روکش‌های دندان‌پزشکی زیرکونیا فوق‌العاده مستحکم و شبیه به دندان طبیعی با زیست‌سازگاری بی‌نظیر",
      ],
      everyday: [
        "جواهرات بدل الماس مکعبی زیرکونیا (Cubic Zirconia)",
        "چاقوهای سرامیکی بسیار تیز",
      ],
    },
    safety: {
      toxicityFa: "ذاتاً غیرسمی و فوق‌العاده زیست‌سازگار",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "پودر بسیار ریز فلز زیرکونیم در هوا خودبه‌خود با جرقه آتش می‌گیرد.",
      hazardsFa: "خطر آتش‌سوزی شدید پودر فلزی در محیط‌های متالورژی.",
    },
    isotopes: {
      stableCount: 4,
      commonIsotopes: [
        "⁹⁰Zr (۵۱.۴۵٪)",
        "⁹۴Zr (۱۷.۳۸٪)",
        "⁹۲Zr (۱۷.۱۵٪)",
        "۹۱Zr (۱۱.۲۲٪)",
        "۹۶Zr (۲.۸۰٪ پرتوزای فوق‌العاده کند)",
      ],
      mostStableIsotope: "⁹⁰Zr",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "نگهبان میله‌های سوخت نیروگاه‌های هسته‌ای جهان با ریشه نام اصیل فارسی زرگون و پادشاه روکش‌های زیبایی دندان‌پزشکی.",
      funFactsFa: [
        "بلورهای میکروسکوپی زیرکن کشف‌شده در استرالیا با قدمت ۴.۴ میلیارد سال، کهن‌ترین قطعات شناخته‌شده از پوسته کره زمین هستند!",
        "سنگ زیرکونیای مکعبی متداول‌ترین و درخشان‌ترین جایگزین مصنوعی برای الماس در جواهرسازی است.",
      ],
      naturalOccurrenceFa:
        "در ماسه‌های ساحلی سنگین به عنوان کانی سیلیکات زیرکن (ZrSiO₄) و بادلیت (ZrO₂) استخراج می‌شود.",
      keyCompoundsFa: [
        "دی‌اکسید زیرکونیم (زیرکونیا، ZrO₂)",
        "تتراکلرید زیرکونیم (ZrCl₄)",
        "سیلیکات زیرکونیم (ZrSiO₄)",
      ],
      educationalNotesFa:
        "جداسازی زیرکونیم از هافنیم یکی از دشوارترین کارهای شیمی است، زیرا به دلیل انقباض لانتانیدی شعاع اتمی و خواص آنها تقریباً همسان است، اما هافنیم بر خلاف زیرکونیم نوترون را به شدت می‌بلعد!",
    },
  },
  // Element 41: Nb (نیوبیم)
  {
    identity: {
      atomicNumber: 41,
      symbol: "Nb",
      nameFa: "نیوبیم",
      nameEn: "Niobium",
      pronunciationFa: "نیوبیُم",
      descriptionFa:
        "عنصر جادویی آهنرباهای ابررسانای شتاب‌دهنده بزرگ سرن و دستگاه‌های MRI و تقویت‌کننده استحکام لوله‌های نفت جهان.",
    },
    classification: {
      group: 5,
      period: 5,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 41,
      electrons: 41,
      neutrons: 52,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁴ 5s¹",
      abbreviatedConfiguration: "[Kr] 4d⁴ 5s¹",
      electronShells: [2, 8, 18, 12, 1],
      valenceElectrons: 5,
      commonOxidationStates: [5],
      allOxidationStates: [5, 4, 3, 2, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 92.906,
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
        value: 137,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 8.57,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز خاکستری براق، چکش‌خوار با دمای ذوب بسیار بالا که با آندایزینگ لایه‌های رنگین‌کمانی چشم‌نوازی می‌سازد",
      colorFa: "خاکستری متالیک براق",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2750.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 5017.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.265,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 53.7,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.6,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 652.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 86.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "مقاومت عالی در برابر خوردگی، در دمای بالا با اکسیژن ترکیب شده و لایه سطحی اکسید پایدار می‌سازد.",
      chemicalBehaviorFa:
        "آرایش غیرعادی اوربیتال نیمه‌پر [Kr] 4d⁴ 5s¹؛ بالاترین دمای بحرانی ابررسانایی عنصری (۹.۲ کلوین).",
    },
    history: {
      discovererFa: "چارلز هاچت",
      discoveryYear: "1801",
      nameOriginFa: "نیوبه (Niobe) دختر تانتالوس در اساطیر یونان باستان",
      namingExplanationFa:
        "به دلیل شباهت شدید به عنصر تانتالوم و همراهی همیشگی با آن در کانی‌ها، به نام دختر تانتالوس نام‌گذاری شد.",
    },
    applications: {
      industrial: [
        "آلیاژهای میکروآلیاژی فولادهای خطوط لوله پرفشار نفت و گاز و سازه خودروها",
        "سوپرآلیاژهای نیکل-نیوبیم در نازل‌های موشک‌های فضایی (نظیر آپولو و فالکون ۹)",
        "آهنرباهای ابررسانای قوی نیوبیم-تیتانیم و نیوبیم-قلع",
      ],
      scientific: [
        "آهنرباهای شتاب‌دهنده ذرات سرن (LHC) و دستگاه‌های تصویربرداری MRI ابررسانا",
      ],
      medical: [
        "ایمپلنت‌های فوق‌پایدار ارتوپدی و ضربان‌سازهای قلبی به علت زیست‌سازگاری کامل",
      ],
      everyday: [
        "زیورآلات و پیرسینگ‌های ضدحساسیت آندایز شده با رنگ‌های رنگین‌کمانی زیبا",
      ],
    },
    safety: {
      toxicityFa: "سمیت بسیار ناچیز و بدون خطر بیولوژیکی",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "کنترل دمای کارگاه در متالورژی پودر برای مهار اکسایش داغ.",
      hazardsFa: "غبار پودر فلزی خطر اشتعال ملایم دارد.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["⁹³Nb (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "⁹³Nb",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر جادویی آهنرباهای ابررسانای شتاب‌دهنده بزرگ سرن و دستگاه‌های MRI و تقویت‌کننده استحکام لوله‌های نفت جهان.",
      funFactsFa: [
        "در گذشته در آمریکا این عنصر را «کلمبیوم» (با نماد Cb) می‌نامیدند و دهه‌ها بر سر نام آن اختلاف بین‌المللی وجود داشت!",
        "با اعمال ولتاژهای مختلف الکتریکی روی سطح نیوبیم (آندایزینگ)، لایه‌های اکسیدی با ضخامت‌های نانومتری متفاوت ایجاد می‌شود که نور را به رنگ‌های آبی، طلایی، بنفش و سبز بازمی‌تابانند.",
      ],
      naturalOccurrenceFa:
        "عمدتاً از کانی پیروکلر و کلمبیت در برزیل (بیش از ۸۵ درصد تولید جهان) استخراج می‌شود.",
      keyCompoundsFa: [
        "پنتاکسید نیوبیم (Nb₂O₅)",
        "نیترید نیوبیم (NbN)",
        "پنتاکلرید نیوبیم (NbCl₅)",
      ],
      educationalNotesFa:
        "سیم‌های ابررسانای Nb-Ti و Nb₃Sn میدان‌های مغناطیسی فوق‌العاده شدیدی تا بیش از ۱۰ تسلا تولید می‌کنند که در دستگاه‌های MRI پزشکی و تحقیقات گداخت هسته‌ای توکامک استفاده می‌شوند.",
    },
  },
  // Element 42: Mo (مولیبدن)
  {
    identity: {
      atomicNumber: 42,
      symbol: "Mo",
      nameFa: "مولیبدن",
      nameEn: "Molybdenum",
      pronunciationFa: "مولیبدِن",
      descriptionFa:
        "فلز پایدار در حرارت‌های جهنمی، مادر تولید مهم‌ترین رادیوداروی پزشکی هسته‌ای جهان و روان‌کار برتر ماشین‌آلات.",
    },
    classification: {
      group: 6,
      period: 5,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 42,
      electrons: 42,
      neutrons: 54,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s¹",
      abbreviatedConfiguration: "[Kr] 4d⁵ 5s¹",
      electronShells: [2, 8, 18, 13, 1],
      valenceElectrons: 6,
      commonOxidationStates: [6, 4],
      allOxidationStates: [6, 5, 4, 3, 2, 1, 0, -1, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 95.95,
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
        value: 10.28,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز سخت، نقره‌ای-سفید با نقطه ذوب فوق‌العاده بالا (۲۶۲۳ درجه) و ضریب انبساط حرارتی بسیار پایین",
      colorFa: "خاکستری-نقره‌ای متالیک",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2896.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4912.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.251,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 138.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.16,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 684.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 71.9,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در دمای اتاق با هوا و اسیدها واکنش نمی‌دهد اما در دمای بالای ۶۰۰ درجه به تری‌اکسید مولیبدن اکسید می‌شود.",
      chemicalBehaviorFa:
        "آرایش غیرعادی متقارن [Kr] 4d⁵ 5s¹؛ تشکیل خوشه‌های فلز-فلز محکم و حالت‌های اکسایش +۴ و +۶.",
    },
    history: {
      discovererFa: "کارل ویلهلم شیله",
      discoveryYear: "1778",
      nameOriginFa: "واژه یونانی molybdos به معنای سرب",
      namingExplanationFa:
        "به دلیل شباهت ظاهری کانی مولیبدنیت به کانی گالن سرب و گرافیت نام‌گذاری گردید.",
    },
    applications: {
      industrial: [
        "تولید فولادهای زنگ‌نزن گرید ۳۱۶ دریایی مقاوم به کلرید و اسید",
        "روان‌کار جامد دی‌سولفید مولیبدن (MoS₂) برای کارکردهای دما و فشار فوق‌العاده بالا",
        "تجهیزات گرمایشی کوره‌های دمابالا و رشته‌های نگهدارنده در لامپ‌ها",
      ],
      scientific: [
        "کوآنزیم مولیبدن در آنزیم نیتروژناز برای تثبیت نیتروژن جو در باکتری‌های خاک",
      ],
      medical: [
        "ژنراتور رادیوایزوتوپ مولیبدن-۹۹ که تکنسیوم-۹۹m (پرکاربردترین رادیوداروی جهان) را تأمین می‌کند",
      ],
      everyday: [
        "روغن‌ها و گریس‌های روان‌ساز صنعتی حاوی MoS₂ برای خودروها",
        "ابزارهای مته و تیغه‌های برش فولادی",
      ],
    },
    safety: {
      toxicityFa:
        "ریزمغذی ضروری انسان؛ در مقادیر بالا موجب اختلالات متابولیسم مس می‌شود",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کنترل استنشاق غبار دی‌اکسید و تری‌اکسید مولیبدن در فرآیندهای ذوب.",
      hazardsFa: "تحریک مجاری تنفسی و نقرس مولیبدنی در مسمومیت‌های حاد صنعتی.",
    },
    isotopes: {
      stableCount: 7,
      commonIsotopes: [
        "⁹⁸Mo (۲۴.۱٪)",
        "⁹⁶Mo (۱۶.۷٪)",
        "⁹۵Mo (۱۵.۹٪)",
        "⁹۲Mo (۱۴.۸٪)",
        "۹۴Mo (۹.۳٪)",
        "۱۰۰Mo (۹.۶٪)",
        "۹۷Mo (۹.۶٪)",
      ],
      mostStableIsotope: "⁹۸Mo",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز پایدار در حرارت‌های جهنمی، مادر تولید مهم‌ترین رادیوداروی پزشکی هسته‌ای جهان و روان‌کار برتر ماشین‌آلات.",
      funFactsFa: [
        "بیش از ۸۰ درصد اسکن‌های تصویربرداری پزشکی هسته‌ای در بیمارستان‌های جهان به رادیوایزوتوپ مولیبدن-۹۹ وابسته هستند!",
        "مولیبدن تنها فلز ردیف پنجم است که برای کلیه جانداران زمین، از باکتری تا انسان، عنصری زیستی و حیاتی است.",
      ],
      naturalOccurrenceFa:
        "در سنگ معدن مولیبدنیت (MoS₂) و وولفنیت به همراه کانسارهای مس استخراج می‌شود.",
      keyCompoundsFa: [
        "دی‌سولفید مولیبدن (MoS₂)",
        "تری‌اکسید مولیبدن (MoO₃)",
        "مولیبدات آمونیوم ((NH₄)₆Mo₇O₂₄)",
      ],
      educationalNotesFa:
        "آنزیم نیتروژناز در گره‌های ریشه گیاهان لگوم با استفاده از اتم مولیبدن در مرکز کاتالیزوری خود، پیوند سه‌گانه بسیار قوی نیتروژن N₂ هوا را در دمای معمولی می‌شکند.",
    },
  },
  // Element 43: Tc (تکنسیم)
  {
    identity: {
      atomicNumber: 43,
      symbol: "Tc",
      nameFa: "تکنسیم",
      nameEn: "Technetium",
      pronunciationFa: "تِکنِسیُم",
      descriptionFa:
        "نخستین عنصر مصنوعی ساخت دست بشر و ستاره بی‌رقیب پزشکی هسته‌ای که سالانه جان ده‌ها میلیون بیمار را نجات می‌دهد.",
    },
    classification: {
      group: 7,
      period: 5,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 43,
      electrons: 43,
      neutrons: 55,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s²",
      abbreviatedConfiguration: "[Kr] 4d⁵ 5s²",
      electronShells: [2, 8, 18, 13, 2],
      valenceElectrons: 7,
      commonOxidationStates: [7, 4],
      allOxidationStates: [7, 6, 5, 4, 3, 2, 1, -1, -3],
    },
    physicalProperties: {
      atomicMass: {
        value: 98.0,
        origin: "estimated",
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
        value: 128,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 11.5,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای-خاکستری رادیواکتیو، شبیه به پلاتین که در طبیعت تقریباً یافت نمی‌شود و ساخت بشر است",
      colorFa: "خاکستری پلاتینی",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2430.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4538.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.24,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 50.6,
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
        value: 702.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 53.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوای مرطوب به آرامی کدر می‌شود؛ در اسید نیتریک و سولفوریک غلیظ اکسید شده و اسید پرتکنیک می‌سازد.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۷ با یون پرتکنتات TcO₄⁻ با ویژگی‌های اکسایش مشابه پرمنگنات.",
    },
    history: {
      discovererFa: "کارلو پریر و امیلیو سگره",
      discoveryYear: "1937",
      nameOriginFa: "واژه یونانی technetos به معنای مصنوعی یا ساختگی",
      namingExplanationFa:
        "به عنوان نخستین عنصری که به صورت کاملاً مصنوعی در آزمایشگاه سنتز شد نام‌گذاری گردید.",
    },
    applications: {
      industrial: [
        "مهارکننده بسیار قوی خوردگی کاتدی فولاد در سیستم‌های بسته خنک‌کننده هسته‌ای (یون TcO₄⁻)",
      ],
      scientific: [
        "ایزوتوپ پرتوزای استاندارد تابش بتای خالص بدون گاما برای کالیبراسیون آشکارسازها",
      ],
      medical: [
        "تکنسیوم-۹۹m ستاره پزشکی هسته‌ای جهان در اسکن‌های تصویربرداری SPECT استخوان، قلب، مغز و کلیه با گسیل پرتو گامای ایده‌آل ۱۴۰ کیلوالکترون‌ولت",
      ],
      everyday: [
        "کاربرد روزمره تجاری ندارد، فقط در تشخیص‌های تصویربرداری رادیولوژی بیمارستانی",
      ],
    },
    safety: {
      toxicityFa:
        "خطرات شیمیایی متوسط، خطرات رادیولوژیکی بسیار بالا به عنوان ماده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای گاما و بتا",
      precautionsFa:
        "نگهداری الزامی درون محفظه‌های ضخیم سربی ویژه رادیوداروها با نظارت متخصصین فیزیک بهداشت.",
      hazardsFa:
        "آسیب‌های پرتوگیری یونیزان بافت‌های بیولوژیکی و جهش ژنتیکی در مواجهه محافظت‌نشده.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "⁹⁹ᵐTc (ایزومر هسته‌ای با نیمه‌عمر ۶ ساعت)",
        "⁹⁹Tc (نیمه‌عمر ۲۱۱ هزار سال)",
        "۹۸Tc (نیمه‌عمر ۴.۲ میلیون سال)",
      ],
      mostStableIsotope: "⁹⁸Tc",
      halfLife: "۴.۲ میلیون سال",
    },
    additionalContent: {
      summaryFa:
        "نخستین عنصر مصنوعی ساخت دست بشر و ستاره بی‌رقیب پزشکی هسته‌ای که سالانه جان ده‌ها میلیون بیمار را نجات می‌دهد.",
      funFactsFa: [
        "سبک‌ترین عنصر جدول تناوبی است که هیچ ایزوتوپ پایداری ندارد (شکاف مرموز عدد اتمی ۴۳)!",
        "امیلیو سگره آن را در تکه‌ای از فویل مولیبدن که در شتاب‌دهنده سیکلوترون برکلی بمباران شده بود کشف کرد.",
      ],
      naturalOccurrenceFa:
        "در زمین عملاً وجود ندارد (تنها مقادیر بسیار ناچیز ناشی از شکافت خودبه‌خودی اورانیم در کانسارها).",
      keyCompoundsFa: [
        "دی‌اکسید تکنسیم (TcO₂)",
        "سدیم پرتکنتات (NaTcO₄)",
        "هپتوکسید تکنسیم (Tc₂O₇)",
      ],
      educationalNotesFa:
        "ایزومر هسته‌ای Tc-99m به دلیل نیمه‌عمر مناسب ۶ ساعت و گسیل فوتون‌های گامای با انرژی ملایم ۱۴۰ keV، ایده‌آل‌ترین رادیونوکلئید برای تصویربرداری پزشکی بدون آسیب رساندن به بافت بیمار است.",
    },
  },
  // Element 44: Ru (روتنیم)
  {
    identity: {
      atomicNumber: 44,
      symbol: "Ru",
      nameFa: "روتنیم",
      nameEn: "Ruthenium",
      pronunciationFa: "روتِنیُم",
      descriptionFa:
        "عضو گرانبهای خانواده فلزات پلاتین که کاتالیزورهای آن جایزه نوبل شیمی را برای تحول سنتز پلیمرها و داروها تصاحب کردند.",
    },
    classification: {
      group: 8,
      period: 5,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 44,
      electrons: 44,
      neutrons: 57,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁷ 5s¹",
      abbreviatedConfiguration: "[Kr] 4d⁷ 5s¹",
      electronShells: [2, 8, 18, 15, 1],
      valenceElectrons: 8,
      commonOxidationStates: [3, 4],
      allOxidationStates: [8, 7, 6, 5, 4, 3, 2, 1, 0, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 101.07,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 134,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 126,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 12.45,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز سخت، شکننده، نقره‌ای-سفید با مقاومت بسیار بالا در برابر اکسایش و سایش از گروه پلاتین",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2607.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4423.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.238,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 117.0,
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
        value: 710.2,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 101.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "حتی در برابر تیزاب سلطانی در دمای معمولی مقاوم است؛ با کلر در دمای بالا واکنش می‌دهد.",
      chemicalBehaviorFa:
        "آرایش غیرعادی [Kr] 4d⁷ 5s¹؛ گستره اعداد اکسایش از -۲ تا +۸؛ تتراکسید آن RuO₄ بسیار فرار و اکسیدکننده است.",
    },
    history: {
      discovererFa: "کارل ارنست کلاوس",
      discoveryYear: "1844",
      nameOriginFa: "واژه لاتین Ruthenia به معنای روسیه",
      namingExplanationFa:
        "نام‌گذاری توسط کلاوس به افتخار سرزمین روسیه و کوه‌های اورال که سنگ معدن پلاتین در آنجا استخراج شد.",
    },
    applications: {
      industrial: [
        "اتصالات الکتریکی با دوام بالا و مقاومت‌های لایه ضخیم تراشه‌های الکترونیکی",
        "پوشش‌های آندی تیتانیم با اکسید روتنیم (RuO₂) در سلول‌های کلر-آلکالی",
        "سخت‌کننده عالی آلیاژهای پلاتین و پالادیم در جواهرات",
      ],
      scientific: [
        "کاتالیزورهای نوبل برنده گِرابز (Grubbs' catalysts) برای واکنش متاتز اولفین در سنتز داروها",
      ],
      medical: [
        "کمپلکس‌های ضدسرطان روتنیمی به عنوان جایگزین‌های کم‌عارضه برای سیس‌پلاتین در شیمی‌درمانی",
      ],
      everyday: [
        "نوک خودنویس‌های لوکس گران‌قیمت مقاوم در برابر سایش مدام روی کاغذ",
      ],
    },
    safety: {
      toxicityFa:
        "فلز آزاد غیرسمی است؛ تتراکسید روتنیم (RuO₄) فوق‌العاده سمی و محرک چشم و ریه است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "ممانعت از تماس با تتراکسید فرار روتنیم و انجام واکنش‌ها در هودهای ایزوله.",
      hazardsFa: "سوختگی شیمیایی شدید بافت و مخاط توسط اکسید فرار.",
    },
    isotopes: {
      stableCount: 7,
      commonIsotopes: [
        "¹⁰²Ru (۳۱.۶٪)",
        "¹⁰۴Ru (۱۸.۶٪)",
        "¹⁰۱Ru (۱۷.۱٪)",
        "۹۹Ru (۱۲.۷٪)",
        "۱۰۰Ru (۱۲.۶٪)",
        "۹۶Ru (۵.۵٪)",
        "۹۸Ru (۱.۹٪)",
      ],
      mostStableIsotope: "¹⁰²Ru",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عضو گرانبهای خانواده فلزات پلاتین که کاتالیزورهای آن جایزه نوبل شیمی را برای تحول سنتز پلیمرها و داروها تصاحب کردند.",
      funFactsFa: [
        "روتنیم یکی از فلزات نادر گروه پلاتین است که می‌تواند به عدد اکسایش فوق‌العاده بالای +۸ در تتراکسید روتنیم (RuO₄) دست یابد.",
        "کاتالیزور گرابز بر پایه روتنیم نحوه ساخت مولکول‌های دارویی پیچیده را در قرن بیست و یکم دگرگون کرد.",
      ],
      naturalOccurrenceFa:
        "بسیار نادر در پوسته زمین و همراه با کانسارهای فلزات گروه پلاتین و نیکل در آفریقای جنوبی و روسیه.",
      keyCompoundsFa: [
        "دی‌اکسید روتنیم (RuO₂)",
        "تری‌کلرید روتنیم (RuCl₃)",
        "تتراکسید روتنیم (RuO₄)",
      ],
      educationalNotesFa:
        "واکنش متاتز الفین با کاتالیزورهای کاربنی روتنیم امکان جابجایی پیوندهای دوگانه کربن-کربن را بدون نیاز به شرایط خشن فراهم می‌آورد.",
    },
  },
  // Element 45: Rh (رودیم)
  {
    identity: {
      atomicNumber: 45,
      symbol: "Rh",
      nameFa: "رودیم",
      nameEn: "Rhodium",
      pronunciationFa: "رودیُم",
      descriptionFa:
        "گران‌قیمت‌ترین فلز صنعتی جهان که خودروها را پاکیزه می‌سازد و به جواهرات طلا درخششی خیره‌کننده می‌بخشد.",
    },
    classification: {
      group: 9,
      period: 5,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 45,
      electrons: 45,
      neutrons: 58,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁸ 5s¹",
      abbreviatedConfiguration: "[Kr] 4d⁸ 5s¹",
      electronShells: [2, 8, 18, 16, 1],
      valenceElectrons: 9,
      commonOxidationStates: [3],
      allOxidationStates: [6, 5, 4, 3, 2, 1, 0, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 102.91,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 134,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 125,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 12.41,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای براق با بازتاب نوری خیره‌کننده، فوق‌العاده گران‌بها و بسیار مقاوم در برابر خوردگی",
      colorFa: "نقره‌ای بسیار درخشان",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2237.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3968.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.243,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 150.0,
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
        value: 719.7,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 109.7,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "غیرفعال در برابر اکسیژن و اسیدها؛ حتی در اسیدهای جوشان نیز حل نمی‌شود و پایداری کاتالیزوری بالایی دارد.",
      chemicalBehaviorFa:
        "آرایش غیرعادی [Kr] 4d⁸ 5s¹؛ کاتالیزور بی‌رقیب در واکنش‌های هیدروژناسیون و احیای گازهای سمی اکسید نیتروژن.",
    },
    history: {
      discovererFa: "ویلیام هاید ولاستون",
      discoveryYear: "1803",
      nameOriginFa: "واژه یونانی rhodon به معنای گل سرخ یا رز",
      namingExplanationFa:
        "به دلیل رنگ سرخ گل سرخی بسیار زیبای محلول‌های آبی نمک‌های کلریدی آن.",
    },
    applications: {
      industrial: [
        "کاتالیزورهای سه‌گانه اگزوز خودروها برای تبدیل گازهای سمی NOx به نیتروژن بی‌خطر",
        "آبکاری رودیم بر روی طلای سفید و جواهرات لوکس برای درخشش آینه‌ای و ممانعت از کدر شدن",
        "تولید فیبرهای شیشه‌ای و ابزارهای آزمایشگاهی دمابالا",
      ],
      scientific: [
        "کاتالیزور مشهور ویلکینسون (Wilkinson's catalyst) برای هیدروژناسیون همگن هیدروکربن‌ها",
      ],
      medical: [
        "پوشش‌های آینه‌ای ابزارهای لیزری چشم‌پزشکی و آندهای ماموگرافی پرتو ایکس",
      ],
      everyday: ["روکش آبکاری طلای سفید جواهرات عروسی برای حفظ درخشش بی‌پایان"],
    },
    safety: {
      toxicityFa: "فلز بالک غیرسمی و خنثی؛ نمک‌های آن لکه‌زا و سمی هستند",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کنترل مواجهه با پودر نمک‌های محلول در واحدهای آبکاری صنعتی.",
      hazardsFa: "تحریک مخاط تنفسی توسط گرد نمک‌های رودیم.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["¹⁰³Rh (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "¹⁰³Rh",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "گران‌قیمت‌ترین فلز صنعتی جهان که خودروها را پاکیزه می‌سازد و به جواهرات طلا درخششی خیره‌کننده می‌بخشد.",
      funFactsFa: [
        "قیمت رودیم در بازارهای جهانی گاهی تا ۱۰ برابر گران‌تر از طلا و پلاتین اوج می‌گیرد!",
        "کاتالیزورهای اگزوز خودرو مصرف‌کننده بیش از ۸۵ درصد از کل رودیم استخراج‌شده در جهان هستند.",
      ],
      naturalOccurrenceFa:
        "بسیار کمیاب در کانسارهای پلاتین آفریقای جنوبی و نیکل روسیه.",
      keyCompoundsFa: [
        "تری‌کلرید رودیم (RhCl₃)",
        "کاتالیزور ویلکینسون (RhCl(PPh₃)₃)",
        "اکسید رودیم (III) (Rh₂O₃)",
      ],
      educationalNotesFa:
        "کاتالیزور ویلکینسون کمپلکس مسطح مربعی رودیم (I) با ۱۶ الکترون ظرفیت است که به راحتی با افزایش اکسایشی هیدروژن را فعال می‌کند.",
    },
  },
  // Element 46: Pd (پالادیم)
  {
    identity: {
      atomicNumber: 46,
      symbol: "Pd",
      nameFa: "پالادیم",
      nameEn: "Palladium",
      pronunciationFa: "پالادیُم",
      descriptionFa:
        "اسفنج جذب هیدروژن، کاتالیزور برنده نوبل اتصال مولکول‌های کربنی و بازیگر اصلی کاهش آلودگی خودروهای بنزینی.",
    },
    classification: {
      group: 10,
      period: 5,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 46,
      electrons: 46,
      neutrons: 60,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰",
      abbreviatedConfiguration: "[Kr] 4d¹⁰",
      electronShells: [2, 8, 18, 18],
      valenceElectrons: 10,
      commonOxidationStates: [2, 4],
      allOxidationStates: [4, 2, 0],
    },
    physicalProperties: {
      atomicMass: {
        value: 106.42,
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
        value: 131,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 12.023,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای-سفید براق با قابلیت استثنایی در جذب و ذخیره مقادیر عظیم گاز هیدروژن مانند یک اسفنج",
      colorFa: "سفید-نقره‌ای متالیک",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1828.05,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3236.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.246,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 71.8,
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
        value: 804.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 54.2,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر کدر شدن مقاوم است؛ در اسید نیتریک داغ و اسید سولفوریک حل می‌شود و در گاز هیدروژن متورم می‌گردد.",
      chemicalBehaviorFa:
        "تنها عنصر جدول تناوبی با اوربیتال d پر و لایه ظرفیت s کاملاً خالی [Kr] 4d¹⁰ 5s⁰ در حالت پایه.",
    },
    history: {
      discovererFa: "ویلیام هاید ولاستون",
      discoveryYear: "1803",
      nameOriginFa: "سیارک پالاس (Pallas) و الهه خرد یونان پالاس آتنا",
      namingExplanationFa:
        "نام‌گذاری به افتخار کشف سیارک پالاس در منظومه شمسی در همان سال‌ها.",
    },
    applications: {
      industrial: [
        "کاتالیزور مبدل‌های اگزوز خودروهای بنزینی برای حذف مونوکسید کربن و هیدروکربن‌های نسوخته",
        "خازن‌های سرامیکی چندلایه (MLCC) در گوشی‌های هوشمند و لپ‌تاپ‌ها",
        "غشاهای خالص‌سازی گاز هیدروژن برای پیل‌های سوختی",
      ],
      scientific: [
        "واکنش‌های جفت‌شدن متقاطع کاتالیز شده با پالادیم (سوزوکی، هک و نگیشی) برنده جایزه نوبل شیمی ۲۰۱۰",
      ],
      medical: [
        "آلیاژهای دندان‌پزشکی پرکننده دندان و بذر رادیواکتیو پالادیم-۱۰۳ در براکی‌تراپی سرطان پروستات",
      ],
      everyday: [
        "جواهرات ارزشمند پالادیم و طلای سفید",
        "بردهای الکترونیکی تلفن همراه",
      ],
    },
    safety: {
      toxicityFa:
        "سمیت فلز آزاد کم است؛ نمک‌های آن آلرژی‌زا و تحریک‌کننده هستند",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "کنترل تهویه در فرآیندهای ذوب آلیاژهای دندان‌پزشکی.",
      hazardsFa: "آلرژی تماسی پوستی در افراد حساس به فلزات گروه پلاتین.",
    },
    isotopes: {
      stableCount: 6,
      commonIsotopes: [
        "¹⁰⁶Pd (۲۷.۳٪)",
        "¹⁰۸Pd (۲۶.۵٪)",
        "¹⁰۵Pd (۲۲.۳٪)",
        "¹¹⁰Pd (۱۱.۷٪)",
        "¹⁰۴Pd (۱۱.۱٪)",
        "¹⁰۲Pd (۱.۰٪)",
      ],
      mostStableIsotope: "¹⁰⁶Pd",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "اسفنج جذب هیدروژن، کاتالیزور برنده نوبل اتصال مولکول‌های کربنی و بازیگر اصلی کاهش آلودگی خودروهای بنزینی.",
      funFactsFa: [
        "یک تکه پالادیم می‌تواند تا ۹۰۰ برابر حجم خود گاز هیدروژن را درون شبکه بلوری خود مانند یک اسفنج جذب و ذخیره کند!",
        "آرایش الکترونی پالادیم تنها آرایشی در کل جدول تناوبی است که لایه بیرونی s آن کاملاً صفر است ([Kr] 4d¹⁰).",
      ],
      naturalOccurrenceFa:
        "همراه با کانسارهای نیکل و مس در روسیه (نوریلسک) و کانسارهای پلاتین آفریقای جنوبی.",
      keyCompoundsFa: [
        "کلرید پالادیم (II) (PdCl₂)",
        "استات پالادیم (II) (Pd(OAc)₂)",
        "تتراکیس تری‌فنیل‌فسفین پالادیم (Pd(PPh₃)₄)",
      ],
      educationalNotesFa:
        "واکنش‌های جفت‌شدن پالادیم (Cross-coupling) امکان اتصال پیوند کربن-کربن میان مولکول‌های آلی را فراهم ساخت و تولید داروهای مدرن ضدسرطان را متحول کرد.",
    },
  },
  // Element 47: Ag (نقره)
  {
    identity: {
      atomicNumber: 47,
      symbol: "Ag",
      nameFa: "نقره",
      nameEn: "Silver",
      pronunciationFa: "نُقرِه",
      descriptionFa:
        "رساناترین فلز جدول تناوبی در برابر گرما و برق با بالاترین بازتابندگی نوری و خواص ضدمیکروبی کهن.",
    },
    classification: {
      group: 11,
      period: 5,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 47,
      electrons: 47,
      neutrons: 61,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s¹",
      abbreviatedConfiguration: "[Kr] 4d¹⁰ 5s¹",
      electronShells: [2, 8, 18, 18, 1],
      valenceElectrons: 11,
      commonOxidationStates: [1],
      allOxidationStates: [3, 2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 107.87,
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
        value: 145,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 10.49,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز درخشان سفید-نقره‌ای با بالاترین رسانایی الکتریکی، بالاترین رسانایی گرمایی و بالاترین بازتاب نوری در میان تمام عناصر",
      colorFa: "سفید براق نقره‌ای",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1234.93,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2435.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.235,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 429.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.93,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 731.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 125.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر اکسیژن خالص اکسید نمی‌شود اما با مقادیر بسیار ناچیز سولفید هیدروژن (H₂S) هوا واکنش داده و سیاه می‌شود (تیرگی نقره).",
      chemicalBehaviorFa:
        "آرایش غیرعادی اوربیتال d پر [Kr] 4d¹⁰ 5s¹؛ کاتیون Ag⁺ با یون‌های هالید رسوب‌های با حلالیت بسیار کم تشکیل می‌دهد.",
    },
    history: {
      discovererFa: "نامعلوم (شناخته شده از هزاره‌های باستان)",
      discoveryYear: "باستان",
      nameOriginFa: "واژه لاتین argentum به معنای سفید و درخشان",
      namingExplanationFa:
        "نماد Ag برگرفته از واژه لاتین آرژانتوم (Argentum) و ریشه هندواروپایی arg به معنای روشن و سپید است.",
    },
    applications: {
      industrial: [
        "اتصالات الکتریکی کلیدهای برق و کنتاکتورهای صنعتی به دلیل بالاترین رسانایی الکتریکی",
        "خمیرهای رسانای نقره در سلول‌های خورشیدی فتوولتائیک",
        "آینه‌های اپتیکی با بالاترین بازتاب نور مرئی (بیش از ۹۹٪)",
      ],
      scientific: [
        "بارورسازی ابرها برای ایجاد باران با ذرات بلوری یدید نقره (AgI) شبیه به ساختار یخ",
      ],
      medical: [
        "پماد سیلور سولفادیازین برای درمان سوختگی‌های حاد و خاصیت ضدباکتری قدرتمند نانوذرات نقره",
      ],
      everyday: [
        "جواهرات و ظروف عتیقه نقره",
        "سکه و مدال‌های ورزشی نقره",
        "آینه‌های منازل",
      ],
    },
    safety: {
      toxicityFa:
        "فلز آزاد غیرسمی است؛ تجمع بیش از حد نقره در بافت‌ها سبب بیماری آبی‌رنگ آرژیریا می‌شود",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "نگهداری ظروف نقره در محفظه‌های ضدسولفید برای جلوگیری از سیاه‌شدن.",
      hazardsFa:
        "بیماری آرژیریا (تغییر رنگ دائمی پوست به آبی-خاکستری بر اثر مصرف طولانی نقره کلوئیدی).",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: ["¹⁰⁷Ag (۵۱.۸۴٪)", "¹⁰⁹Ag (۴۸.۱۶٪)"],
      mostStableIsotope: "¹⁰⁷Ag",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "رساناترین فلز جدول تناوبی در برابر گرما و برق با بالاترین بازتابندگی نوری و خواص ضدمیکروبی کهن.",
      funFactsFa: [
        "نقره رکورددار رسانایی الکتریکی و گرمایی در میان تمام فلزات است (حتی رساناتر از مس و طلا!).",
        "پزشکان باستان در یونان و روم آب را در ظروف نقره ذخیره می‌کردند زیرا متوجه شده بودند آب در ظروف نقره فاسد نمی‌شود.",
      ],
      naturalOccurrenceFa:
        "گاهی به شکل فلز آزاد خالص در طبیعت و عمدتاً در کانی‌های آرژانتایت (Ag₂S) همراه با کانسارهای مس و سرب.",
      keyCompoundsFa: [
        "نیترات نقره (AgNO₃)",
        "برمید نقره عکاسی (AgBr)",
        "یدید نقره بارورسازی ابرها (AgI)",
        "سولفید نقره سیاه (Ag₂S)",
      ],
      educationalNotesFa:
        "رسوب‌گیری هالیدهای نقره (AgCl سفید، AgBr کرم و AgI زرد) آزمون کلاسیک شناسایی آنیون‌های هالوژن در شیمی تجزیه است.",
    },
  },
  // Element 48: Cd (کادمیوم)
  {
    identity: {
      atomicNumber: 48,
      symbol: "Cd",
      nameFa: "کادمیوم",
      nameEn: "Cadmium",
      pronunciationFa: "کادمیُم",
      descriptionFa:
        "فلز سمی کنترل‌کننده رآکتورهای هسته‌ای و رنگدانه درخشان زرد بوم‌های نقاشی ون‌گوگ و مونه.",
    },
    classification: {
      group: 12,
      period: 5,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 48,
      electrons: 48,
      neutrons: 64,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s²",
      abbreviatedConfiguration: "[Kr] 4d¹⁰ 5s²",
      electronShells: [2, 8, 18, 18, 2],
      valenceElectrons: 2,
      commonOxidationStates: [2],
      allOxidationStates: [2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 112.41,
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
        value: 144,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 8.65,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نرم، شکل‌پذیر، مایل به آبی-سفید با مقاومت در برابر خوردگی و توانایی بالا در جذب نوترون",
      colorFa: "نقره‌ای مایل به آبی",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 594.22,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1040.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.232,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 96.6,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.69,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 867.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -68.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر خوردگی قلیایی مقاوم است؛ در اسیدها با خروج هیدروژن حل می‌شود و در گرما دود اکسید قهوه‌ای تولید می‌کند.",
      chemicalBehaviorFa:
        "تنها حالت اکسایش پایدار +۲ با اوربیتال d پر [Kr] 4d¹⁰؛ خواصی بسیار شبیه به روی اما به شدت سمی‌تر.",
    },
    history: {
      discovererFa: "فریدریش اشترومایر",
      discoveryYear: "1817",
      nameOriginFa: "واژه یونانی kadmeia به معنای کانی کالامین (کربنات روی)",
      namingExplanationFa:
        "به دلیل کشف به عنوان یک ناخالصی زردرنگ در کانی‌های کربنات روی کالامین.",
    },
    applications: {
      industrial: [
        "میله‌های کنترل جذب‌کننده نوترون در رآکتورهای هسته‌ای",
        "رنگدانه‌های زرد و نارنجی کادمیوم (CdS و CdSe) با ثبات نوری بی‌نظیر برای نقاشی هنری",
        "باتری‌های قابل شارژ نیکل-کادمیوم (Ni-Cd)",
      ],
      scientific: [
        "نقاط کوانتومی کادمیوم سلنید (CdSe Quantum Dots) با گسیل نور با رنگ‌های قابل تنظیم با ابعاد نانو",
      ],
      medical: [
        "کاربرد پزشکی مستقیم ندارد؛ مورد پایش دقیق سم‌شناسی در صنایع و غذا",
      ],
      everyday: [
        "رنگ‌های زرد و نارنجی تیوپ‌های نقاشی رنگ روغن هنرمندان (کادمیوم یلو)",
        "باتری‌های قدیمی شارژی ابزارها",
      ],
    },
    safety: {
      toxicityFa:
        "فوق‌العاده سمی و سرطان‌زای انباشته‌شونده در کبد و کلیه با آسیب شدید به استخوان‌ها",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "ممنوعیت دفع باتری‌های نیکل-کادمیوم در زباله‌های عادی شهری به دلیل آلودگی آب‌های زیرزمینی.",
      hazardsFa:
        "بیماری دردناک ایتای-ایتای (Itai-Itai) در ژاپن با نرمی و شکستگی استخوان‌ها ناشی از آلودگی کادمیوم.",
    },
    isotopes: {
      stableCount: 6,
      commonIsotopes: [
        "¹¹۴Cd (۲۸.۷۳٪)",
        "¹¹۲Cd (۲۴.۱۳٪)",
        "¹¹۱Cd (۱۲.۸۰٪)",
        "¹¹۰Cd (۱۲.۴۹٪)",
        "¹¹۳Cd (۱۲.۲۲٪ جاذب قوی نوترون)",
        "¹¹۶Cd (۷.۴۹٪)",
      ],
      mostStableIsotope: "¹¹۴Cd",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز سمی کنترل‌کننده رآکتورهای هسته‌ای و رنگدانه درخشان زرد بوم‌های نقاشی ون‌گوگ و مونه.",
      funFactsFa: [
        "کادمیوم به شدت جایگزین کلسیم در استخوان‌ها می‌شود و در ژاپن بیماری «ایتای-ایتای» (به معنای آخ-آخ!) را با شکستن استخوان‌ها پدید آورد.",
        "نقاط کوانتومی بر پایه کادمیوم سلنید پیشگامان نمایشگرهای مدرن تلویزیونی QLED بودند.",
      ],
      naturalOccurrenceFa:
        "همیشه به عنوان ناخالصی در کانسارهای اسفالریت روی یافت می‌شود و کانی خالص آن گرینوکیت بسیار کمیاب است.",
      keyCompoundsFa: [
        "سولفید کادمیوم زرد (CdS)",
        "سلنید کادمیوم (CdSe)",
        "اکسید کادمیوم قهوه‌ای (CdO)",
        "تلورید کادمیوم (CdTe)",
      ],
      educationalNotesFa:
        "نیمه‌رسانای تلورید کادمیوم (CdTe) یکی از کارآمدترین و ارزان‌ترین فناوری‌های تولید سلول‌های خورشیدی لایه نازک فتوولتائیک در جهان است.",
    },
  },
  // Element 49: In (ایندیم)
  {
    identity: {
      atomicNumber: 49,
      symbol: "In",
      nameFa: "ایندیم",
      nameEn: "Indium",
      pronunciationFa: "ایندیُم",
      descriptionFa:
        "عنصر کلیدی تمام تاچ‌اسکرین‌های جهان که شفافیت شیشه را با رسانایی الکتریسیته فلز پیوند زده است.",
    },
    classification: {
      group: 13,
      period: 5,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 49,
      electrons: 49,
      neutrons: 66,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p¹",
      abbreviatedConfiguration: "[Kr] 4d¹⁰ 5s² 5p¹",
      electronShells: [2, 8, 18, 18, 3],
      valenceElectrons: 3,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 114.82,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 167,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 142,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 7.31,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز بسیار نرم، نقره‌ای-سفید و براق که با ناخن خط می‌افتد و هنگام خم شدن صدای جیغ فلزی می‌دهد",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa: "چهارگوشه (تتراگونال)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 429.75,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2345.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.233,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 81.8,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.78,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 558.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 28.9,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر آب و هوا پایدار است اما در اسیدها حل شده و در دماهای بالا اکسید In₂O₃ تولید می‌کند.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳؛ اکسید قلع-ایندیم (ITO) پوششی شفاف و همزمان رسانای الکتریسیته پدید می‌آورد.",
    },
    history: {
      discovererFa: "فردیناند رایش و تئودور ریشتر",
      discoveryYear: "1863",
      nameOriginFa: "رنگ نیلی (Indigo) در طیف‌سنجی نوری",
      namingExplanationFa:
        "به دلیل خط طیفی درخشان و بسیار زیبای به رنگ آبی نیلی پررنگ در آنالیز طیف نوری.",
    },
    applications: {
      industrial: [
        "پوشش‌های اکسید قلع-ایندیم (ITO) روی تمام صفحات لمسی تاچ‌اسکرین گوشی‌ها و مانیتورها",
        "لحیم‌های بسیار نرم دماپایین برای اتصال چیپست‌های حساس الکترونیکی",
        "نیمه‌رسانای فسفید ایندیم (InP) در لیزرهای مخابرات فیبر نوری پرسرعت",
      ],
      scientific: [
        "آب‌بندی فوق‌العاده سیستم‌های خلاء فوق‌بالا (UHV) با واشرهای تغییرشکل‌پذیر ایندیم",
      ],
      medical: [
        "اسکن گلبول‌های سفید با ایندیم-۱۱۱ برای شناسایی کانون‌های مخفی عفونت و آبسه‌های داخلی بدن",
      ],
      everyday: ["صفحه لمسی تاچ‌اسکرین تمام گوشی‌های هوشمند و تبلت‌ها"],
    },
    safety: {
      toxicityFa:
        "سمیت متوسط؛ استنشاق غبار ترکیبات اکسید قلع-ایندیم به ریه آسیب می‌زند",
      radioactivity: false,
      radiationType: "پرتوزایی طبیعی ناچیز (ایزوتوپ ¹¹⁵In)",
      precautionsFa:
        "استفاده از ماسک مخصوص در کارگاه‌های پاشش لایه‌های نازک ITO.",
      hazardsFa:
        "بیماری ریه ایندیمی ناشی از استنشاق غبار اکسید ایندیم در کارخانه‌های LCD.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: [
        "¹¹⁵In (۹۵.۷٪ پرتوزای بتای بسیار کند با نیمه‌عمر ۴۴۰ تریلیون سال)",
        "¹¹³In (۴.۳٪ پایدار)",
      ],
      mostStableIsotope: "¹¹³In",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر کلیدی تمام تاچ‌اسکرین‌های جهان که شفافیت شیشه را با رسانایی الکتریسیته فلز پیوند زده است.",
      funFactsFa: [
        "بیش از ۴۵ درصد از کل ایندیم تولیدی جهان صرف لایه‌های نازک رسانای شفاف (ITO) روی صفحات لمسی موبایل و تلویزیون می‌شود.",
        "هنگامی که یک شمش ایندیم را خم می‌کنید، صدای خرد شدن بلورها شبیه به یک جیغ نازک (Tin cry) به گوش می‌رسد!",
      ],
      naturalOccurrenceFa:
        "بسیار کمیاب و پراکنده به عنوان محصول جانبی تصفیه کانسارهای روی اسفالریت استخراج می‌شود.",
      keyCompoundsFa: [
        "اکسید ایندیم-قلع (ITO)",
        "اکسید ایندیم (In₂O₃)",
        "فسفید ایندیم (InP)",
        "کلرید ایندیم (InCl₃)",
      ],
      educationalNotesFa:
        "ماده ITO ترکیب نادری است که به طور همزمان بیش از ۸۵ درصد نور مرئی را عبور می‌دهد و مقاومت الکتریکی بسیار کمی دارد که اساس عملکرد صفحات خازنی تاچ است.",
    },
  },
  // Element 50: Sn (قلع)
  {
    identity: {
      atomicNumber: 50,
      symbol: "Sn",
      nameFa: "قلع",
      nameEn: "Tin",
      pronunciationFa: "قَلع",
      descriptionFa:
        "فلز باستانی عصر برنز و دارنده بیشترین تعداد ایزوتوپ‌های پایدار در تمام جدول تناوبی (۱۰ ایزوتوپ پایدار).",
    },
    classification: {
      group: 14,
      period: 5,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 50,
      electrons: 50,
      neutrons: 69,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p²",
      abbreviatedConfiguration: "[Kr] 4d¹⁰ 5s² 5p²",
      electronShells: [2, 8, 18, 18, 4],
      valenceElectrons: 4,
      commonOxidationStates: [4, 2],
      allOxidationStates: [4, 2, -4],
    },
    physicalProperties: {
      atomicMass: {
        value: 118.71,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 140,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 139,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 7.287,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز چکش‌خوار، نقره‌ای-سفید با نقطه ذوب پایین (۲۳۱ درجه) و پدیده دگرشکلی معروف طاعون قلع در سرما",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa:
        "چهارگوشه (قلع سفید بتا) / مکعبی الماسی (قلع خاکستری آلفا)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 505.08,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2875.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.228,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 66.8,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.96,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 708.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 107.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر آب و اسیدهای ضعیف بسیار مقاوم است؛ در هوای سرد زیر ۱۳.۲ درجه به پودر خاکستری تبدیل می‌شود (طاعون قلع).",
      chemicalBehaviorFa:
        "دارای دو حالت اکسایش پایدار قلع ۲ (استانوس Sn²⁺ کاهنده) و قلع ۴ (استانیک Sn⁴⁺).",
    },
    history: {
      discovererFa: "نامعلوم (شناخته شده از هزاره‌های باستان)",
      discoveryYear: "باستان",
      nameOriginFa: "واژه لاتین stannum به معنای قلع یا مفرغ",
      namingExplanationFa:
        "نماد Sn برگرفته از واژه لاتین باستان استانوم (Stannum) برای آلیاژهای قلع و سرب است.",
    },
    applications: {
      industrial: [
        "سیم‌های لحیم‌کاری بدون سرب در تمام بردهای الکترونیکی جهان",
        "پوشش قلع‌اندود قوطی‌های کنسرو مواد غذایی برای جلوگیری از خوردگی آهن",
        "تولید شیشه‌های فلوت ساختمانی بر روی بستری از قلع مذاب",
      ],
      scientific: [
        "سیم‌های ابررسانای قلع-نیوبیم (Nb₃Sn) با میدان‌های فوق‌العاده بالا در رآکتورهای همجوشی توکامک ITER",
      ],
      medical: [
        "فلوراید قلع (Stannous fluoride, SnF₂) در خمیردندان‌ها برای مهار باکتری‌های پلاک دندان",
      ],
      everyday: [
        "قوطی‌های فلزی کنسرو (حلبی)",
        "سیم لحیم هویه تعمیرکاران الکترونیک",
        "ظروف مفرغی کهن",
      ],
    },
    safety: {
      toxicityFa:
        "فلز عنصری غیرسمی است؛ ترکیبات آلی قلع (ارگانوتین‌ها) به شدت سمی هستند",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "نگهداری اشیاء تاریخی قلعی در محیط‌های با دمای بالاتر از ۱۵ درجه برای جلوگیری از پودر شدن.",
      hazardsFa:
        "ترکیبات آلی قلع نظیر تری‌بوتیل‌قلع برای آبزیان فوق‌العاده مخرب هستند و مصرف آنها ممنوع شده است.",
    },
    isotopes: {
      stableCount: 10,
      commonIsotopes: [
        "¹²⁰Sn (۳۲.۵۸٪)",
        "¹¹۸Sn (۲۴.۲۲٪)",
        "¹¹۶Sn (۱۴.۵۴٪)",
        "¹¹۹Sn (۸.۵۹٪)",
        "¹¹۷Sn (۷.۶۸٪)",
        "¹۲۴Sn (۵.۷۹٪)",
        "¹¹۲Sn (۰.۹۷٪)",
        "¹¹۴Sn (۰.۶۶٪)",
        "¹۱۵Sn (۰.۳۴٪)",
        "¹۲۲Sn (۴.۶۳٪)",
      ],
      mostStableIsotope: "¹²⁰Sn",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز باستانی عصر برنز و دارنده بیشترین تعداد ایزوتوپ‌های پایدار در تمام جدول تناوبی (۱۰ ایزوتوپ پایدار).",
      funFactsFa: [
        "قلع با ۱۰ ایزوتوپ پایدار، رکورددار بیشترین تعداد ایزوتوپ‌های پایدار در میان تمام ۱۱۸ عنصر است!",
        "در زمستان سرد ۱۸۱۲ در روسیه، دکمه‌های قلعی سربازان ناپلئون به دلیل پدیده «طاعون قلع» پودر شدند و به شکست ارتش انجامیدند.",
      ],
      naturalOccurrenceFa:
        "عمدتاً از کانی اکسیدی کاسیتریت (SnO₂) در آسیای جنوب شرقی و چین استخراج می‌شود.",
      keyCompoundsFa: [
        "دی‌اکسید قلع (کاسیتریت، SnO₂)",
        "کلرید قلع (II) (SnCl₂)",
        "فلوراید قلع (SnF₂)",
      ],
      educationalNotesFa:
        "شیشه‌های کاملاً تخت پنجره‌ها در جهان به روش فرآیند پیلکینگتون با شناور کردن شیشه مذاب روی بستری از قلع مذاب فوق‌العاده صاف تولید می‌شوند.",
    },
  },
  // Element 51: Sb (آنتیموان)
  {
    identity: {
      atomicNumber: 51,
      symbol: "Sb",
      nameFa: "آنتیموان",
      nameEn: "Antimony",
      pronunciationFa: "آنتی‌موان",
      descriptionFa:
        "سرمه کهن چشمان باستان و سازنده قوی‌ترین سوپراسید کیهان که پلاستیک‌های مدرن را ضدحریق می‌سازد.",
    },
    classification: {
      group: 15,
      period: 5,
      block: "p",
      category: "metalloid",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 51,
      electrons: 51,
      neutrons: 71,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p³",
      abbreviatedConfiguration: "[Kr] 4d¹⁰ 5s² 5p³",
      electronShells: [2, 8, 18, 18, 5],
      valenceElectrons: 5,
      commonOxidationStates: [3, 5],
      allOxidationStates: [5, 3, -3],
    },
    physicalProperties: {
      atomicMass: {
        value: 121.76,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 140,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 139,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 6.697,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "شبه‌فلز سخت، بسیار شکننده، نقره‌ای-سفید با بازتاب درخشان که هنگام انجماد منبسط می‌شود",
      colorFa: "خاکستری-نقره‌ای براق",
      crystalStructureFa: "لوزی‌سطحی (رومبوهدرال)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 903.78,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1908.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.207,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 24.4,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.05,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 834.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 103.2,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در دمای اتاق با هوا واکنش نمی‌دهد؛ در گرما می‌سوزد و ابر سفید تری‌اکسید آنتیموان تولید می‌کند.",
      chemicalBehaviorFa:
        "تشکیل ترکیبات کووالانسی پایدار با اعداد اکسایش +۳ و +۵ و اسیدهای فوق‌العاده قوی نظیر اسید فلوئوروآنتیمونیک.",
    },
    history: {
      discovererFa: "نامعلوم (شناخته شده از عهد باستان)",
      discoveryYear: "باستان",
      nameOriginFa: "واژه یونانی anti-monos (نه به تنهایی) و لاتین stibium",
      namingExplanationFa:
        "نماد Sb مخفف واژه باستانی استیبیوم (Stibium) برای کانی سرمه سیاه استیبنیت است.",
    },
    applications: {
      industrial: [
        "مواد کندکننده اشتعال تری‌اکسید آنتیموان (Sb₂O₃) در پلاستیک‌ها و منسوجات",
        "سخت‌کننده صفحات سربی باتری‌های اسیدی خودرو",
        "آلیاژهای حروف‌چینی چاپخانه‌ها به دلیل خاصیت انبساط در هنگام انجماد",
      ],
      scientific: [
        "تولید اسید فلوئوروآنتیمونیک (HSbF₆) قوی‌ترین سوپراسید شناخته‌شده جهان (۱۰¹⁶ برابر قوی‌تر از اسید سولفوریک خالص)",
      ],
      medical: [
        "ترکیبات پنج‌ظرفیتی آنتیموان (نظیر گلوکانتیم) داروی خط اول درمان بیماری سالک (سالک جلدی و احشایی)",
      ],
      everyday: [
        "سرمه چشم باستانی طبیعی",
        "مواد نسوز روکش پارچه‌های صندلی هواپیما",
      ],
    },
    safety: {
      toxicityFa: "بسیار سمی با اثراتی مشابه آرسنیک بر روی قلب و کبد",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کنترل مواجهه با بخارات تری‌اکسید آنتیموان در صنایع باتری‌سازی و پلیمر.",
      hazardsFa: "تحریک شدید پوست و مخاطات و سمیت قلبی در مسمومیت حاد.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: ["¹²¹Sb (۵۷.۲۱٪)", "¹²³Sb (۴۲.۷۹٪)"],
      mostStableIsotope: "¹²¹Sb",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "سرمه کهن چشمان باستان و سازنده قوی‌ترین سوپراسید کیهان که پلاستیک‌های مدرن را ضدحریق می‌سازد.",
      funFactsFa: [
        "سرمه سیاه چشم که زنان در مصر و ایران باستان برای آرایش و ضدعفونی چشم به کار می‌بردند، پودر سولفید آنتیموان (استیبنیت) بود.",
        "آنتیموان یکی از معدود موادی است که هنگام انجماد به جای انقباض منبسط می‌شود و به همین دلیل حروف سربی چاپخانه‌ها قالب را کاملاً پر می‌کردند.",
      ],
      naturalOccurrenceFa:
        "عمدتاً از کانی بلوری سوزنی استیبنیت (Sb₂S₃) به ویژه در چین استخراج می‌شود.",
      keyCompoundsFa: [
        "تری‌اکسید آنتیموان (Sb₂O₃)",
        "استیبنیت (Sb₂S₃)",
        "اسید فلوئوروآنتیمونیک (HSbF₆)",
        "مگلومین آنتیمونیات (گلوکانتیم)",
      ],
      educationalNotesFa:
        "اسید فلوئوروآنتیمونیک با حل کردن پنتافلوئورید آنتیموان (SbF₅) در هیدروفلوئوریک اسید ساخته می‌شود و قادر به پروتون‌دار کردن حتی هیدروکربن‌هاست.",
    },
  },
  // Element 52: Te (تلوریم)
  {
    identity: {
      atomicNumber: 52,
      symbol: "Te",
      nameFa: "تلوریم",
      nameEn: "Tellurium",
      pronunciationFa: "تِلوریُم",
      descriptionFa:
        "عنصر خنک‌کننده‌های ترموالکتریک بدون کمپرسور و یکی از نادرترین عناصر پوسته زمین که با طلا ترکیب می‌شود.",
    },
    classification: {
      group: 16,
      period: 5,
      block: "p",
      category: "metalloid",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 52,
      electrons: 52,
      neutrons: 76,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁴",
      abbreviatedConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁴",
      electronShells: [2, 8, 18, 18, 6],
      valenceElectrons: 6,
      commonOxidationStates: [4, 6, -2],
      allOxidationStates: [6, 4, 2, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 127.6,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 142,
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
        value: 6.24,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "شبه‌فلز ترد، نقره‌ای-سفید با بازتاب متالیک درخشان و بوی بسیار ناخوشایند در صورت تماس با بدن",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa: "شش‌گوشه",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 722.66,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1261.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.202,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 2.35,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.1,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 869.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 190.2,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا با شعله آبی مایل به سبز می‌سوزد و دی‌اکسید تلوریم تولید می‌کند؛ در اسید نیتریک حل می‌شود.",
      chemicalBehaviorFa:
        "شیمی مشابه سلنیم و گوگرد با حالات اکسایش -۲، +۴ و +۶؛ تشکیل ترکیبات تلورید با ویژگی‌های ترموالکتریک عالی.",
    },
    history: {
      discovererFa: "فرانتس یوزف مولر فون رایشنشتاین",
      discoveryYear: "1782",
      nameOriginFa: "واژه لاتین tellus به معنای سیاره زمین",
      namingExplanationFa:
        "نام‌گذاری بر اساس نام کهن سیاره زمین (الهه تلوس) در لاتین.",
    },
    applications: {
      industrial: [
        "سلول‌های خورشیدی فتوولتائیک کادمیوم تلورید (CdTe) با راندمان بالا",
        "خنک‌کننده‌های ترموالکتریک پلتیر بر پایه بیسموت تلورید (Bi₂Te₃) برای تولید سرما با برق",
        "آلیاژسازی با فولاد و مس برای بهبود چشمگیر ماشین‌کاری",
      ],
      scientific: [
        "دیسک‌های نوری با قابلیت بازنویسی (CD-RW و DVD-RW) با لایه‌های آلیاژ فاز متغیر GeSbTe",
      ],
      medical: [
        "ردیاب‌های تصویربرداری پیشرفته پرتو ایکس و گاما بر پایه کادمیوم-روی-تلورید (CZT)",
      ],
      everyday: [
        "یخچال‌های کوچک مسافرتی اتومبیل بدون گاز و موتور (بر پایه اثر پلتیر)",
        "دیسک‌های نوری دی‌وی‌دی",
      ],
    },
    safety: {
      toxicityFa:
        "سمیت متوسط تا بالا؛ جذب حتی مقادیر میکروگرمی آن بوی وحشتناک سیر در تنفس و عرق تا ماه‌ها ایجاد می‌کند",
      radioactivity: false,
      radiationType: "پرتوزایی طبیعی ناچیز (ایزوتوپ ¹۲۸Te و ¹۳۰Te)",
      precautionsFa:
        "پرهیز از تماس پوستی با ترکیبات تلوریم برای جلوگیری از بوی ناخوشایند تلوریمی پایدار.",
      hazardsFa:
        "بوی شدید و منزجرکننده تنفس دی‌متیل تلورید که ارتباطات فرد را تا ماه‌ها مختل می‌سازد.",
    },
    isotopes: {
      stableCount: 6,
      commonIsotopes: [
        "¹۳۰Te (۳۴.۰۸٪)",
        "¹۲۸Te (۳۱.۷۴٪ طولانی‌ترین نیمه‌عمر کیهان)",
        "¹۲۶Te (۱۸.۸۴٪)",
        "¹۲۵Te (۷.۰۷٪)",
        "¹۲۴Te (۴.۷۴٪)",
        "¹۲۲Te (۲.۵۵٪)",
      ],
      mostStableIsotope: "¹۲۶Te",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر خنک‌کننده‌های ترموالکتریک بدون کمپرسور و یکی از نادرترین عناصر پوسته زمین که با طلا ترکیب می‌شود.",
      funFactsFa: [
        "ایزوتوپ تلوریم-۱۲۸ طولانی‌ترین نیمه‌عمر محاسبه‌شده در کل جهان را دارد: ۲.۲ ضربدر ۱۰ به توان ۲۴ سال (۱۶۰ تریلیون برابر سن کیهان!)",
        "تلوریم یکی از معدود عناصر جهان است که میل ترکیبی بالایی با طلا دارد و کانی‌های طلادار نظیر کالاوریت (AuTe₂) می‌سازد.",
      ],
      naturalOccurrenceFa:
        "بسیار کمیاب در پوسته زمین (کمیاب‌تر از پلاتین) و از لجن‌های آندی تصفیه الکترولیتی مس به دست می‌آید.",
      keyCompoundsFa: [
        "تلورید کادمیوم (CdTe)",
        "تلورید بیسموت (Bi₂Te₃)",
        "دی‌اکسید تلوریم (TeO₂)",
        "اسید تلوریک (Te(OH)₆)",
      ],
      educationalNotesFa:
        "با اینکه عدد اتمی تلوریم (۵۲) از ید (۵۳) کمتر است، جرم اتمی استاندارد آن (۱۲۷.۶۰) از ید (۱۲۶.۹۰) بیشتر است که مندلیف را ناچار به اولویت قرار دادن خواص بر وزن اتمی کرد.",
    },
  },
  // Element 53: I (ید)
  {
    identity: {
      atomicNumber: 53,
      symbol: "I",
      nameFa: "ید",
      nameEn: "Iodine",
      pronunciationFa: "ید",
      descriptionFa:
        "عنصر حیات‌بخش تیروئید و تکامل مغز کودکان با بخار بنفش خیره‌کننده و سلطان ضدعفونی‌کننده‌های جراحی.",
    },
    classification: {
      group: 17,
      period: 5,
      block: "p",
      category: "halogen",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 53,
      electrons: 53,
      neutrons: 74,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁵",
      abbreviatedConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁵",
      electronShells: [2, 8, 18, 18, 7],
      valenceElectrons: 7,
      commonOxidationStates: [-1, 1, 5, 7],
      allOxidationStates: [7, 5, 3, 1, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 126.9,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 133,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 139,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 4.933,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "جامد براق، بنفش-سیاه تیره با بازتاب متالیک که با حرارت ملایم به بخاری بنفش رنگ بسیار غلیظ تصعید می‌شود",
      colorFa: "خاکستری مایل به بنفش تیره",
      crystalStructureFa: "ارتورومبیک",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 386.85,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 457.4,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.214,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.449,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.66,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1008.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 295.2,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "کمترین واکنش‌پذیری را در بین هالوژن‌های پایدار دارد اما با فلزات و فسفر به راحتی ترکیب یدید می‌سازد.",
      chemicalBehaviorFa:
        "تشکیل کمپلکس فوق‌العاده محلول تری‌یدید I₃⁻ در حضور یون یدید با رنگ قهوه‌ای پررنگ و واکنش شاخص با نشاسته.",
    },
    history: {
      discovererFa: "برنار کورتوا",
      discoveryYear: "1811",
      nameOriginFa: "واژه یونانی iodes به معنای بنفش یا ارغوانی",
      namingExplanationFa:
        "به دلیل رنگ بنفش و ارغوانی بسیار مسحورکننده بخارات آن هنگام تصعید نام‌گذاری شد.",
    },
    applications: {
      industrial: [
        "پلاریزه‌کننده‌های کریستال مایع در تمام صفحات نمایشگر LCD",
        "کاتالیزور فرآیند مونسانتو و کاتیوا برای تولید صنعتی اسید استیک",
        "ضدعفونی‌کننده‌های صنعتی دامداری‌ها و صنایع لبنی",
      ],
      scientific: [
        "معرف لوگول (ید و یدید پتاسیم) برای شناسایی حضور نشاسته با ایجاد رنگ آبی تیره عمیق",
      ],
      medical: [
        "تولید هورمون‌های تیروئید تیروکسین (T4) و تری‌یدوتیرونین (T3)",
        "محلول بتادین (پوویدون آیوداین) برای ضدعفونی زخم و جراحی",
        "ید-۱۳۱ در درمان پرکاری و سرطان تیروئید",
      ],
      everyday: [
        "نمک خوراکی یددار برای جلوگیری از بیماری گواتر",
        "بتادین جعبه کمک‌های اولیه خانگی",
      ],
    },
    safety: {
      toxicityFa:
        "بلعیدن ید خالص سوزاننده مخاط است؛ مصرف نمک یددار برای سلامت مغز حیاتی است",
      radioactivity: false,
      radiationType: "ندارد (ایزوتوپ ¹³¹I پرتوزا در پزشکی هسته‌ای)",
      precautionsFa:
        "نگهداری در ظروف شیشه‌ای تیره کاملاً دربسته به دلیل فشار بخار و تصعید بالا.",
      hazardsFa:
        "سوختگی شیمیایی پوست و تحریک شدید ریه در اثر استنشاق بخارات غلیظ بنفش ید.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["¹²⁷I (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "¹²⁷I",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر حیات‌بخش تیروئید و تکامل مغز کودکان با بخار بنفش خیره‌کننده و سلطان ضدعفونی‌کننده‌های جراحی.",
      funFactsFa: [
        "کمبود ید در دوران رشد جنین و کودکی علت اصلی و قابل پیشگیری عقب‌ماندگی ذهنی در تاریخ بشر بوده است.",
        "برنار کورتوا ید را به طور تصادفی هنگام استخراج خاکستر جلبک‌های دریایی برای ساخت باروت کشف کرد.",
      ],
      naturalOccurrenceFa:
        "در آب دریاها به صورت یون یدید، جلبک‌های دریایی کتانجک و رسوبات کالیش در بیابان آتاکاما شیلی.",
      keyCompoundsFa: [
        "یدید پتاسیم (KI)",
        "پوویدون آیوداین (بتادین)",
        "تیروکسین هورمون تیروئید (T4)",
        "یدات پتاسیم (KIO₃)",
      ],
      educationalNotesFa:
        "قرص‌های یدید پتاسیم در سوانح حوادث هسته‌ای به منظور اشباع کامل غده تیروئید و ممانعت از جذب رادیوایزوتوپ خطرناک ید-۱۳۱ به مردم داده می‌شود.",
    },
  },
  // Element 54: Xe (زنون)
  {
    identity: {
      atomicNumber: 54,
      symbol: "Xe",
      nameFa: "زنون",
      nameEn: "Xenon",
      pronunciationFa: "زِنون",
      descriptionFa:
        "سنگین‌ترین گاز نجیب پایدار، پیشران سفینه‌های فضایی در تسخیر منظومه شمسی و شکننده تابوی بی‌اثری گازهای نجیب.",
    },
    classification: {
      group: 18,
      period: 5,
      block: "p",
      category: "noble-gas",
      standardState: "gas",
    },
    atomicStructure: {
      protons: 54,
      electrons: 54,
      neutrons: 77,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶",
      abbreviatedConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁶",
      electronShells: [2, 8, 18, 18, 8],
      valenceElectrons: 8,
      commonOxidationStates: [0, 2, 4, 6],
      allOxidationStates: [8, 6, 4, 2, 0],
    },
    physicalProperties: {
      atomicMass: {
        value: 131.29,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 108,
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
        value: 5.894,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "گاز نجیب بسیار سنگین، بی‌رنگ با درخشش آبی یخی درخشان در تخلیه پلاسما",
      colorFa: "بی‌رنگ (آبی یخی درخشان در پلاسما)",
      crystalStructureFa: "مکعبی مرکزپر (fcc در فاز جامد برودتی)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 161.4,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 165.05,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.158,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.00565,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.6,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1170.4,
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
        "بر خلاف هلیم و نئون، با فلوئور و اکسیژن واکنش داده و ترکیبات پایدار زنون دی‌فلوئورید و تترافلوئورید می‌سازد.",
      chemicalBehaviorFa:
        "شکستن افسانه بی‌اثری کامل گازهای نجیب در سال ۱۹۶۲ با سنتز نخستین ترکیب زنون هگزافلوئوروپلاتینات توسط نیل بارتلت.",
    },
    history: {
      discovererFa: "ویلیام رمزی و موریس تراورز",
      discoveryYear: "1898",
      nameOriginFa: "واژه یونانی xenos به معنای غریب یا بیگانه",
      namingExplanationFa:
        "به دلیل وجود غریبانه و غیرمنتظره آن در باقیمانده تبخیر هوای مایع نام‌گذاری شد.",
    },
    applications: {
      industrial: [
        "سوخت پیشران پیشرفته موتورهای یونی ماهواره‌ها و فضاپیماهای اعماق فضا (نظیر فضاپیمای داون)",
        "لامپ‌های چراغ جلوی زنون خودروهای لوکس و پروژکتورهای IMAX سینما",
        "لیزرهای اکسایمر زنون کلراید (XeCl) در جراحی چشم لازک",
      ],
      scientific: [
        "آشکارسازهای زنون مایع در اعماق معادن زیرزمینی برای به دام انداختن ماده تاریک کیهان (Dark Matter)",
      ],
      medical: [
        "داروی بیهوشی استنشاقی عمومی با ایمنی قلبی فوق‌العاده بالا و محافظت عصبی مغز",
      ],
      everyday: [
        "چراغ‌های زنون پرنور خودروها",
        "لامپ‌های پروژکتور سینماهای بزرگ",
      ],
    },
    safety: {
      toxicityFa:
        "کاملاً از نظر شیمیایی غیرسمی است؛ گاز سنگین خفه‌کننده در غلظت‌های بالا",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "تهویه کافی به دلیل چگالی بسیار بالا (حدود ۵ برابر سنگین‌تر از هوا).",
      hazardsFa: "اثر بیهوشی قوی و خطر خفگی ناگهانی در صورت استنشاق غلیظ.",
    },
    isotopes: {
      stableCount: 7,
      commonIsotopes: [
        "¹۳۲Xe (۲۶.۹٪)",
        "¹۲۹Xe (۲۶.۴٪ دارای اسپین در NMR)",
        "¹۳۱Xe (۲۱.۲٪)",
        "¹۳۴Xe (۱۰.۴٪)",
        "¹۳۶Xe (۸.۹٪)",
        "¹۳۰Xe (۴.۱٪)",
        "¹۲۸Xe (۱.۹٪)",
      ],
      mostStableIsotope: "¹۳۲Xe",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "سنگین‌ترین گاز نجیب پایدار، پیشران سفینه‌های فضایی در تسخیر منظومه شمسی و شکننده تابوی بی‌اثری گازهای نجیب.",
      funFactsFa: [
        "نیل بارتلت در سال ۱۹۶۲ با سنتز نخستین ترکیب زنون نشان داد که گازهای نجیب آن‌طور که ۶۰ سال در کتاب‌های درسی ادعا می‌شد کاملاً بی‌اثر نیستند!",
        "صدای انسان پس از استنشاق زنون به دلیل چگالی بالای آن بسیار کلفت و بم و شبیه به غول‌ها می‌شود (برعکس هلیم!).",
      ],
      naturalOccurrenceFa:
        "بسیار کمیاب در اتمسفر زمین (تنها ۰.۰۸۷ قسمت در میلیون) و از تقطیر هوای مایع استخراج می‌شود.",
      keyCompoundsFa: [
        "زنون دی‌فلوئورید (XeF₂)",
        "زنون تترافلوئورید (XeF₄)",
        "تری‌اکسید زنون انفجاری (XeO₃)",
        "اسید گزنیک (H₂XeO₄)",
      ],
      educationalNotesFa:
        "ترکیب XeF₄ نخستین ترکیب دوتایی کشف‌شده از یک گاز نجیب بود که ساختار مسطح مربعی آن با نظریه VSEPR و وجود دو جفت‌الکترون ناپیوندی در موقعیت محوری هماهنگی کامل دارد.",
    },
  },
];
