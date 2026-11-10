import { ChemicalElement } from "@/types/element";

/**
 * Period 7 Elements (Total: 32)
 * Mars Element - Chemical Database
 */
export const PERIOD_7_ELEMENTS: ChemicalElement[] = [
  // Element 87: Fr (فرانسیم)
  {
    identity: {
      atomicNumber: 87,
      symbol: "Fr",
      nameFa: "فرانسیم",
      nameEn: "Francium",
      pronunciationFa: "فرانسسیُم",
      descriptionFa:
        "دومین عنصر کمیاب پوسته زمین با نیمه‌عمر تنها ۲۲ دقیقه که توسط آخرین شاگرد ماری کوری کشف شد.",
    },
    classification: {
      group: 1,
      period: 7,
      block: "s",
      category: "alkali-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 87,
      electrons: 87,
      neutrons: 136,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 7s¹",
      abbreviatedConfiguration: "[Rn] 7s¹",
      electronShells: [2, 8, 18, 32, 18, 8, 1],
      valenceElectrons: 1,
      commonOxidationStates: [1],
      allOxidationStates: [1],
    },
    physicalProperties: {
      atomicMass: {
        value: 223.0,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 270,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 260,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 2.48,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو به شدت ناپایدار و فرار با واپاشی سریع که گرمای شدیدی ایجاد می‌کند",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "مکعبی مرکزپر (پیش‌بینی شده bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 300.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 950.0,
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
        value: 15.0,
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
        value: 380.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 47.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "پیش‌بینی می‌شود واکنش‌پذیرترین فلز قلیایی باشد؛ واکنش انفجاری بی‌درنگ با آب.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۱؛ خواص بسیار شبیه به سزیم اما به شدت ناپایدار رادیواکتیو.",
    },
    history: {
      discovererFa: "مارگریت پری",
      discoveryYear: "1939",
      nameOriginFa: "کشور فرانسه (France)",
      namingExplanationFa:
        "نام‌گذاری توسط مارگریت پری به افتخار میهنش فرانسه و انستیتو کوری پاریس.",
    },
    applications: {
      industrial: [
        "کاربرد صنعتی ندارد به دلیل ناپایداری رادیواکتیو شدید و کمیابی مطلق",
      ],
      scientific: [
        "به دام انداختن اتم‌های منفرد در تله‌های نوری لیزری (MOT) برای مطالعه نقض پاریته در فیزیک اتمی",
      ],
      medical: ["بررسی‌های بیولوژیکی آزمایشگاهی در تله‌های نوری"],
      everyday: ["هیچ کاربرد روزمره‌ای ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا و خطرناک",
      radioactivity: true,
      radiationType: "پرتوزای بتا و آلفا",
      precautionsFa:
        "تولید صرفاً در شتاب‌دهنده‌ها با گیراندازی لیزری اتم‌های منفرد.",
      hazardsFa: "پرتوزایی شدید هسته‌ای حتی در مقیاس چند هزار اتم.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: ["²²³Fr (طولانی‌ترین نیمه‌عمر ۲۲ دقیقه)"],
      mostStableIsotope: "²²³Fr",
      halfLife: "۲۲ دقیقه",
    },
    additionalContent: {
      summaryFa:
        "دومین عنصر کمیاب پوسته زمین با نیمه‌عمر تنها ۲۲ دقیقه که توسط آخرین شاگرد ماری کوری کشف شد.",
      funFactsFa: [
        "در تمام پوسته کره زمین در هر لحظه حداکثر بین ۲۰ تا ۳۰ گرم فرانسیم طبیعی وجود دارد!",
        "بزرگ‌ترین مقداری از فرانسیم که تا کنون در یک آزمایشگاه کنار هم جمع شده، تنها ۳۰۰ هزار اتم در تله لیزری بوده است!",
      ],
      naturalOccurrenceFa:
        "بسیار گذرا در زنجیره واپاشی اورانیم-۲۳۵ در کانی‌های اورانیم.",
      keyCompoundsFa: ["کلرید فرانسیم (FrCl)"],
      educationalNotesFa:
        "مارگریت پری در سال ۱۹۳۹ در انستیتو رادیوم پاریس متوجه شد که ایزوتوپ اکتینیم-۲۲۷ در ۱ درصد مواقع با واپاشی آلفا به عنصری با عدد اتمی ۸۷ تبدیل می‌شود.",
    },
  },
  // Element 88: Ra (رادیوم)
  {
    identity: {
      atomicNumber: 88,
      symbol: "Ra",
      nameFa: "رادیوم",
      nameEn: "Radium",
      pronunciationFa: "رادیُم",
      descriptionFa:
        "فلز پرتوهای افسانه‌ای ماری کوری که انقلاب فیزیک هسته‌ای را آغاز کرد و داروی رادیوم-۲۲۳ برای مهار سرطان استخوان.",
    },
    classification: {
      group: 2,
      period: 7,
      block: "s",
      category: "alkaline-earth-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 88,
      electrons: 88,
      neutrons: 138,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 7s²",
      abbreviatedConfiguration: "[Rn] 7s²",
      electronShells: [2, 8, 18, 32, 18, 8, 2],
      valenceElectrons: 2,
      commonOxidationStates: [2],
      allOxidationStates: [2],
    },
    physicalProperties: {
      atomicMass: {
        value: 226.0,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 221,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 221,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 5.5,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای خالص با درخشش آبی کم‌رنگ ناشی از رادیواکتیویته که در هوا سیاه می‌شود",
      colorFa: "سفید-نقره‌ای با درخشش آبی ملایم",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 973.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2010.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 18.6,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 0.9,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 509.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 9.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلز قلیایی خاکی بسیار واکنش‌پذیر؛ با آب و اکسیژن با شدت واکنش داده و گاز هیدروژن و هیدروکسید تولید می‌کند.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۲ با رفتار شیمیایی کاملاً مشابه باریوم؛ در استخوان به جای کلسیم رسوب می‌کند.",
    },
    history: {
      discovererFa: "ماری کوری و پیر کوری",
      discoveryYear: "1898",
      nameOriginFa: "واژه لاتین radius به معنای پرتو یا شعاع نور",
      namingExplanationFa:
        "به دلیل تابش و پرتوزایی فوق‌العاده شدید هسته‌ای نام رادیوم بر آن نهاده شد.",
    },
    applications: {
      industrial: [
        "در اوایل قرن بیستم در رنگ‌های شب‌تاب عقربه ساعت‌ها و ابزارهای پروازی (امروزه کاملاً ممنوع است)",
      ],
      scientific: [
        "تحقیقات بنیادین در فیزیک هسته‌ای و چشمه‌های نوترونی رادیوم-بریلیم",
      ],
      medical: [
        "کلرید رادیوم-۲۲۳ (Xofigo) داروی هدفمند پرتودرمانی سرطان پیشرفته پروستات متاستاز داده به استخوان با پرتوهای آلفا",
      ],
      everyday: [
        "ساعت‌های رادیومی عتیقه جنگ جهانی (نیازمند احتیاط رادیولوژیکی)",
      ],
    },
    safety: {
      toxicityFa:
        "فوق‌العاده سمی و پرتوزا؛ رسوب در مغز استخوان و عامل استئوسارکوما و سرطان خون",
      radioactivity: true,
      radiationType: "پرتوزای قوی آلفا، بتا و گاما",
      precautionsFa:
        "نگهداری انحصاری در جعبه‌های سربی ضخیم با سیستم تخلیه گاز رادون ناشی از واپاشی.",
      hazardsFa:
        "مرگ غم‌انگیز «دختران رادیوم» (Radium Girls) که با لیسیدن قلم‌موهای آغشته به رنگ رادیوم فک‌هایشان تخریب شد.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²²⁶Ra (نیمه‌عمر ۱۶۰۰ سال)",
        "²²۸Ra (نیمه‌عمر ۵.۷۵ سال)",
        "²²³Ra (نیمه‌عمر ۱۱.۴ روز)",
      ],
      mostStableIsotope: "²²⁶Ra",
      halfLife: "۱۶۰۰ سال",
    },
    additionalContent: {
      summaryFa:
        "فلز پرتوهای افسانه‌ای ماری کوری که انقلاب فیزیک هسته‌ای را آغاز کرد و داروی رادیوم-۲۲۳ برای مهار سرطان استخوان.",
      funFactsFa: [
        "دفترچه‌های یادداشت ماری کوری پس از گذشت بیش از ۱ قرن هنوز چنان آلوده به رادیوم هستند که در جعبه‌های سربی نگهداری می‌شوند و بدون لباس ایمنی نمی‌توان به آنها دست زد!",
        "در دهه ۱۹۲۰ آب‌های معدنی حاوی رادیوم و خمیردندان‌های رادیومی به عنوان اکسیر جوانی فروخته می‌شدند!",
      ],
      naturalOccurrenceFa:
        "در سنگ معدن اورانینیت (پیچ‌بلند) با نسبت حدود ۱ گرم رادیوم در هر ۷ تن سنگ معدن اورانیم.",
      keyCompoundsFa: [
        "کلرید رادیوم (RaCl₂)",
        "سولفات رادیوم (RaSO₄)",
        "دی‌کلرید رادیوم-۲۲۳ دارویی",
      ],
      educationalNotesFa:
        "رادیوم-۲۲۶ با واپاشی آلفا گاز رادیواکتیو رادون-۲۲۲ را متصاعد می‌کند؛ بنابراین ظروف نگهداری رادیوم همیشه با خطر تجمع فشار گاز رادون همراه هستند.",
    },
  },
  // Element 89: Ac (اکتینیم)
  {
    identity: {
      atomicNumber: 89,
      symbol: "Ac",
      nameFa: "اکتینیم",
      nameEn: "Actinium",
      pronunciationFa: "اکتینیُم",
      descriptionFa:
        "سرگروه اکتینیدها با درخشش آبی در تاریکی و معجزه اکتینیم-۲۲۵ در درمان و نابودی متاستازهای سرطانی.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 89,
      electrons: 89,
      neutrons: 138,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 6d¹ 7s²",
      abbreviatedConfiguration: "[Rn] 6d¹ 7s²",
      electronShells: [2, 8, 18, 32, 18, 9, 2],
      valenceElectrons: 3,
      commonOxidationStates: [3],
      allOxidationStates: [3],
    },
    physicalProperties: {
      atomicMass: {
        value: 227.0,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 195,
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
        value: 10.07,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو نقره‌ای که در تاریکی به دلیل یونیزه کردن هوای اطراف با نور آبی وهم‌انگیزی می‌درخشد",
      colorFa: "سفید-نقره‌ای (با درخشش آبی پلاسما)",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1323.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3471.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 12.0,
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
        value: 499.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 35.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "واکنش‌پذیری شیمیایی بالا با رطوبت و اکسیژن و پوشیده شدن سریع با لایه سفید اکسید Ac₂O₃.",
      chemicalBehaviorFa:
        "سرگروه ردیف اکتینیدها؛ پایدارترین حالت اکسایش +۳ با رفتاری کاملاً مشابه لانتان.",
    },
    history: {
      discovererFa: "آندره-لوئی دبیرن",
      discoveryYear: "1899",
      nameOriginFa: "واژه یونانی aktis به معنای پرتو نور یا اشعه",
      namingExplanationFa:
        "به دلیل پرتوزایی شدید هسته‌ای نام اشعه نور بر آن نهاده شد.",
    },
    applications: {
      industrial: ["چشمه‌های نوترونی آزمایشگاهی در ترکیب اکتینیم-بریلیم"],
      scientific: [
        "ژنراتور تولید رادیونوکلئیدهای آلفا برای تحقیقات بیوفیزیک هسته‌ای",
      ],
      medical: [
        "اکتینیم-۲۲۵ (Ac-225) انقلابی‌ترین رادیوایزوتوپ در درمان پیشرفته سرطان با پرتو درمانی هدفمند آلفا (TAT) برای نابودی کامل متاستازها",
      ],
      everyday: ["هیچ کاربرد روزمره‌ای ندارد"],
    },
    safety: {
      toxicityFa:
        "فوق‌العاده پرتوزا و سرطان‌زای استخوان (۱۵۰ برابر سمی‌تر از پلوتونیم از نظر رادیواکتیویته)",
      radioactivity: true,
      radiationType: "پرتوزای قوی آلفا و بتا",
      precautionsFa: "کنترل کامل در محفظه‌های ایزوله با شیلد سربی ضخیم.",
      hazardsFa: "تخریب سریع بافت و انباشت در مغز استخوان و کبد.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²²⁷Ac (نیمه‌عمر ۲۱.۷۷ سال)",
        "²²⁵Ac (نیمه‌عمر ۹.۹ روز در پزشکی)",
      ],
      mostStableIsotope: "²²⁷Ac",
      halfLife: "۲۱.۷۷ سال",
    },
    additionalContent: {
      summaryFa:
        "سرگروه اکتینیدها با درخشش آبی در تاریکی و معجزه اکتینیم-۲۲۵ در درمان و نابودی متاستازهای سرطانی.",
      funFactsFa: [
        "اکتینیم به قدری پرتو آلفا گسیل می‌کند که مولکول‌های هوای اطراف خود را یونیزه کرده و هاله آبی‌رنگ درخشانی دور خود ایجاد می‌کند!",
        "پرتودرمانی با اکتینیم-۲۲۵ تومورهای پروستات لاعلاج را در مواردی به طور باورنکردنی در عرض چند ماه به کلی محو کرده است.",
      ],
      naturalOccurrenceFa:
        "بسیار نادر در سنگ‌های اورانیم به عنوان محصول واپاشی اورانیم-۲۳۵ (یک دهم گرم در هر تن اورانیم).",
      keyCompoundsFa: ["اکسید اکتینیم (Ac₂O₃)", "کلرید اکتینیم (AcCl₃)"],
      educationalNotesFa:
        "اکتینیم-۲۲۵ در یک آبشار واپاشی هسته‌ای، ۴ ذره آلفای پرانرژی شلیک می‌کند که زنجیره دوتایی DNA سلول سرطانی را بدون امکان ترمیم خرد می‌کند.",
    },
  },
  // Element 90: Th (توریم)
  {
    identity: {
      atomicNumber: 90,
      symbol: "Th",
      nameFa: "توریم",
      nameEn: "Thorium",
      pronunciationFa: "توریُم",
      descriptionFa:
        "خدای تندر که سوخت پاک، ایمن و فراوان رآکتورهای نمک مذاب انرژی هسته‌ای آینده را تأمین می‌کند.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 90,
      electrons: 90,
      neutrons: 142,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 6d² 7s²",
      abbreviatedConfiguration: "[Rn] 6d² 7s²",
      electronShells: [2, 8, 18, 32, 18, 10, 2],
      valenceElectrons: 4,
      commonOxidationStates: [4],
      allOxidationStates: [4, 3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 232.04,
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
        value: 206,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 11.72,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای سنگین با رادیواکتیویته ملایم و نقطه ذوب بالا که سوخت پاک نیروگاه‌های اتمی نسل آینده است",
      colorFa: "خاکستری-نقره‌ای براق",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2023.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 5061.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.118,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 54.0,
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
        value: 587.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 112.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا به آرامی اکسید سیاه ThO₂ تولید می‌کند؛ در آب پایدار است و در اسید هیدروکلریک غلیظ حل می‌شود.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۴؛ دی‌اکسید توریم ThO₂ دارای بالاترین نقطه ذوب در میان تمام اکسیدهای جهان (۳۳۹۰ درجه) است.",
    },
    history: {
      discovererFa: "یونس یاکوب برزلیوس",
      discoveryYear: "1829",
      nameOriginFa: "ثور (Thor) خدای تندر و رعد در اساطیر اسکاندیناوی",
      namingExplanationFa:
        "نام‌گذاری توسط برزلیوس به افتخار ثور، خدای قدرتمند تندر در اساطیر نورس.",
    },
    applications: {
      industrial: [
        "سوخت رآکتورهای هسته‌ای چرخه توریم با تولید پسماند رادیواکتیو بسیار کمتر از اورانیم",
        "توری‌های روشنایی گازسوز روشنایی با اکسید توریم نسوز برای درخشش سفید خیره‌کننده",
        "الکترودهای جوشکاری آرگون تنگستن-توریم (TIG)",
      ],
      scientific: [
        "رآکتورهای نمک مذاب فلورایدی توریم (LFTR) به عنوان ایمن‌ترین و پاک‌ترین انرژی هسته‌ای آینده",
      ],
      medical: [
        "ماده حاجب تاریخی توروتراست (امروزه به دلیل سرطان‌زایی دهه‌هاست ممنوع است)",
      ],
      everyday: ["توری‌های قدیمی چراغ‌های زنبوری کمپینگ با درخشش سفید"],
    },
    safety: {
      toxicityFa:
        "پرتوزایی آلفای ملایم اما در صورت استنشاق غبار در استخوان رسوب کرده و سرطان‌زاست",
      radioactivity: true,
      radiationType: "پرتوزای آلفا با نیمه‌عمر فوق‌العاده طولانی",
      precautionsFa:
        "کنترل تهویه در کارگاه‌های جوشکاری با الکترودهای تنگستن توریم‌دار.",
      hazardsFa:
        "استنشاق طولانی‌مدت غبار اکسید توریم عامل سرطان ریه و استخوان.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²³²Th (۱۰۰٪ فراوانی با نیمه‌عمر ۱۴ میلیارد سال برابر سن جهان)",
      ],
      mostStableIsotope: "²³²Th",
      halfLife: "۱۴.۰۵ میلیارد سال",
    },
    additionalContent: {
      summaryFa:
        "خدای تندر که سوخت پاک، ایمن و فراوان رآکتورهای نمک مذاب انرژی هسته‌ای آینده را تأمین می‌کند.",
      funFactsFa: [
        "توریم در پوسته زمین بیش از سه برابر فراوان‌تر از اورانیم است و تقریباً تمام آن از ایزوتوپ قابل بارورسازی Th-232 تشکیل شده است!",
        "یک تن توریم می‌تواند به اندازه ۲۰۰ تن اورانیم یا ۳.۵ میلیون تن زغال‌سنگ انرژی پاک تولید کند بدون آنکه قابلیت تولید بمب پلوتونیومی داشته باشد.",
      ],
      naturalOccurrenceFa:
        "بسیار فراوان در ماسه‌های ساحلی سنگین به صورت کانی مونازیت و توریت.",
      keyCompoundsFa: [
        "دی‌اکسید توریم نسوز (ThO₂)",
        "نیترات توریم (Th(NO₃)₄)",
        "تترافلوئورید توریم (ThF₄)",
      ],
      educationalNotesFa:
        "توریم-۲۳۲ شکافت‌پذیر نیست اما «بارور» (Fertile) است؛ یعنی با جذب یک نوترون و دو واپاشی بتا به اورانیم-۲۳۳ تبدیل می‌شود که سوخت هسته‌ای عالی برای شکافت است.",
    },
  },
  // Element 91: Pa (پروتاکتینیم)
  {
    identity: {
      atomicNumber: 91,
      symbol: "Pa",
      nameFa: "پروتاکتینیم",
      nameEn: "Protactinium",
      pronunciationFa: "پروتاکتینیُم",
      descriptionFa:
        "پیش‌ساز باستانی اکتینیم که توسط لیزه مایتنر کشف شد و ساعت سنجش جریان‌های عمیق اقیانوس‌هاست.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 91,
      electrons: 91,
      neutrons: 140,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f² 6d¹ 7s²",
      abbreviatedConfiguration: "[Rn] 5f² 6d¹ 7s²",
      electronShells: [2, 8, 18, 32, 20, 9, 2],
      valenceElectrons: 5,
      commonOxidationStates: [5, 4],
      allOxidationStates: [5, 4, 3],
    },
    physicalProperties: {
      atomicMass: {
        value: 231.04,
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
        value: 200,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 15.37,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای درخشان، چکش‌خوار با ابررسانایی در دمای ۱.۴ کلوین و رادیواکتیویته بالا",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa: "چهارگوشه (تتراگونال)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1841.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4300.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 47.0,
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
        value: 568.0,
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
        "در هوا با اکسیژن، هیدروژن و بخار آب به راحتی واکنش داده و کدر می‌شود.",
      chemicalBehaviorFa:
        "پایدارترین حالت‌های اکسایش +۵ و +۴ با پیوندهای کووالانسی مشابه تانتال و نیوبیم.",
    },
    history: {
      discovererFa: "اتو هان و لیزه مایتنر",
      discoveryYear: "1917",
      nameOriginFa: "واژه یونانی protos به معنای نخستین و اکتینیم",
      namingExplanationFa:
        "به دلیل آنکه در زنجیره واپاشی اورانیم-۲۳۵، پیش‌ساز مستقیم عنصر اکتینیم است.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد به دلیل رادیواکتیویته و سمیت شدید"],
      scientific: [
        "سن‌سنجی رادیومتریک رسوبات کف اقیانوس‌ها با ایزوتوپ پروتاکتینیم-۲۳۱ برای درک جریان‌های آب اقیانوسی دیرینه",
      ],
      medical: ["هیچ کاربرد درمانی ندارد"],
      everyday: ["هیچ کاربردی در زندگی روزمره ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده سمی و پرتوزا؛ انباشت در اسکلت و کلیه",
      radioactivity: true,
      radiationType: "پرتوزای قوی آلفا و گاما",
      precautionsFa:
        "کار انحصاری در محفظه‌های دارای جریان هوای منفی و شیلد پرتویی.",
      hazardsFa: "سرطان استخوان و سمیت حاد رادیولوژیکی.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: ["²³¹Pa (نیمه‌عمر ۳۲٬۷۶۰ سال)"],
      mostStableIsotope: "²³¹Pa",
      halfLife: "۳۲٬۷۶۰ سال",
    },
    additionalContent: {
      summaryFa:
        "پیش‌ساز باستانی اکتینیم که توسط لیزه مایتنر کشف شد و ساعت سنجش جریان‌های عمیق اقیانوس‌هاست.",
      funFactsFa: [
        "پروتاکتینیم یکی از گران‌ترین و کمیاب‌ترین عناصر طبیعی است؛ در دهه ۱۹۶۰ بریتانیا ۱۲۵ گرم از آن را با فرآوری ۶۰ تن پسماند هسته‌ای استخراج کرد!",
        "لیزه مایتنر و اتو هان این عنصر را در دوران جنگ جهانی اول کشف کردند.",
      ],
      naturalOccurrenceFa:
        "بسیار ناچیز در سنگ معدن اورانیم (حدود ۱ قسمت در ۳ میلیون قسمت اورانینیت).",
      keyCompoundsFa: [
        "پنتاکسید پروتاکتینیم (Pa₂O₅)",
        "پنتاکلرید پروتاکتینیم (PaCl₅)",
      ],
      educationalNotesFa:
        "ایزوتوپ Pa-233 یک ایزوتوپ میانی بسیار مهم در چرخه سوخت هسته‌ای رآکتورهای توریم است که با نیمه‌عمر ۲۷ روز به سوخت اورانیم-۲۳۳ واپاشی می‌کند.",
    },
  },
  // Element 92: U (اورانیم)
  {
    identity: {
      atomicNumber: 92,
      symbol: "U",
      nameFa: "اورانیم",
      nameEn: "Uranium",
      pronunciationFa: "اورانیُم",
      descriptionFa:
        "سنگین‌ترین عنصر طبیعی آغازین کیهان، منبع تأمین ۱۰ درصد الکتریسیته کل جهان و کلید شکافت هسته‌ای.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 92,
      electrons: 92,
      neutrons: 146,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f³ 6d¹ 7s²",
      abbreviatedConfiguration: "[Rn] 5f³ 6d¹ 7s²",
      electronShells: [2, 8, 18, 32, 21, 9, 2],
      valenceElectrons: 6,
      commonOxidationStates: [6, 4],
      allOxidationStates: [6, 5, 4, 3],
    },
    physicalProperties: {
      atomicMass: {
        value: 238.03,
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
        value: 196,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 19.1,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای-سفید بسیار متراکم و سنگین با فرومغناطیس ضعیف و رادیواکتیویته پایه‌ای در زمین",
      colorFa: "سفید-نقره‌ای براق (تیره در مجاورت هوا)",
      crystalStructureFa: "ارتورومبیک (آلفا-اورانیم)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1405.3,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4404.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.116,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 27.5,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.38,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 597.6,
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
        "فلزی فعال که در هوای مرطوب اکسید سیاه رنگ می‌سازد؛ در دمای بالا با اشتعال می‌سوزد و در اسیدها حل می‌شود.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۶ با کاتیون خطی اورانیل [UO₂]²⁺ دارای فلوئورسانس سبز متمایز زیر نور UV.",
    },
    history: {
      discovererFa: "مارتین هاینریش کلاپروت",
      discoveryYear: "1789",
      nameOriginFa: "سیاره اورانوس (Uranus)",
      namingExplanationFa:
        "نام‌گذاری توسط کلاپروت به افتخار کشف سیاره اورانوس توسط ویلیام هرشل در سال ۱۷۸۱.",
    },
    applications: {
      industrial: [
        "سوخت نیروگاه‌های اتمی تولید الکتریسیته در رآکتورهای آب سبک و آب سنگین جهان",
        "اورانیم ضعیف‌شده (DU) در زره تانک‌های سنگین آبرامز و گلوله‌های نفوذکننده زره‌پوش به دلیل چگالی بسیار بالا",
        "وزنه‌های تعادل هواپیماهای مسافربری پهن‌پیکر",
      ],
      scientific: [
        "سن‌سنجی رادیومتریک اورانیم-سرب برای تخمین دقیق سن ۴.۵ میلیارد ساله کره زمین و شهاب‌سنگ‌ها",
      ],
      medical: [
        "تولید ایزوتوپ‌های پزشکی نظیر مولیبدن-۹۹ در رآکتورهای تحقیقاتی هسته‌ای",
      ],
      everyday: [
        "شیشه‌های عتیقه زردرنگ اورانیمی (Vaseline glass) با درخشش سبز فسفری زیر نور فرابنفش",
      ],
    },
    safety: {
      toxicityFa:
        "سمیت شیمیایی کلیوی آن به اندازه سمیت رادیواکتیویته‌اش خطرناک است",
      radioactivity: true,
      radiationType: "پرتوزای آلفا با نیمه‌عمرهای میلیارد ساله",
      precautionsFa:
        "کنترل استنشاق غبار در معادن و فرآوری کیک زرد با تهویه پیشرفته.",
      hazardsFa:
        "نارسایی حاد کلیه ناشی از سمیت فلز سنگین و سرطان در اثر استنشاق گردوغبار رادیواکتیو.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²³⁸U (۹۹.۲۷٪ نیمه‌عمر ۴.۴۷ میلیارد سال)",
        "²³⁵U (۰.۷۲٪ شکافت‌پذیر با نوترون حرارتی)",
        "²³⁴U (۰.۰۰۵٪)",
      ],
      mostStableIsotope: "²³⁸U",
      halfLife: "۴.۴۷ میلیارد سال",
    },
    additionalContent: {
      summaryFa:
        "سنگین‌ترین عنصر طبیعی آغازین کیهان، منبع تأمین ۱۰ درصد الکتریسیته کل جهان و کلید شکافت هسته‌ای.",
      funFactsFa: [
        "انرژی حاصل از شکافت کامل تنها یک کیلوگرم اورانیم-۲۳۵ معادل سوزاندن نزدیک به ۳ میلیون کیلوگرم زغال‌سنگ است!",
        "شیشه‌های زینتی اورانیمی قرن نوزدهم زیر نور ماوراءبنفش به رنگ سبز نئونی خیره‌کننده‌ای فلوئورسانس می‌دهند.",
      ],
      naturalOccurrenceFa:
        "بسیار متداول در پوسته زمین در کانی‌های اورانینیت (پیچ‌بلند)، کارنوتیت و کیک زرد (U₃O₈).",
      keyCompoundsFa: [
        "کیک زرد (U₃O₈)",
        "گاز هگزافلوئورید اورانیم برای غنی‌سازی (UF₆)",
        "دی‌اکسید اورانیم قرص سوخت (UO₂)",
      ],
      educationalNotesFa:
        "اورانیم-۲۳۵ تنها نوکلئید طبیعی شکافت‌پذیر در تمام جهان است که می‌تواند واکنش زنجیره‌ای هسته‌ای خودپایدار را با نوترون‌های حرارتی حفظ کند.",
    },
  },
  // Element 93: Np (نپتونیم)
  {
    identity: {
      atomicNumber: 93,
      symbol: "Np",
      nameFa: "نپتونیم",
      nameEn: "Neptunium",
      pronunciationFa: "نِپتونیُم",
      descriptionFa:
        "نخستین عنصر فرااورانیمی سنتز شده در تاریخ علم و پل تبدیل به سوخت اتمی کاوشگرهای فضایی ویجر.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 93,
      electrons: 93,
      neutrons: 144,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f⁴ 6d¹ 7s²",
      abbreviatedConfiguration: "[Rn] 5f⁴ 6d¹ 7s²",
      electronShells: [2, 8, 18, 32, 22, 9, 2],
      valenceElectrons: 7,
      commonOxidationStates: [5],
      allOxidationStates: [7, 6, 5, 4, 3],
    },
    physicalProperties: {
      atomicMass: {
        value: 237.0,
        origin: "estimated",
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
        value: 190,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 20.45,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو بسیار چگال و نقره‌ای، نخستین عنصر فرانیکولار کشف‌شده در تاریخ",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa: "ارتورومبیک",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 917.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4273.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 6.3,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.36,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 604.5,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 45.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa: "فلزی واکنش‌پذیر با هوا و اسیدها با اکسایش سریع در رطوبت.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۵ در محلول‌های آبی به صورت یون نپتونیل [NpO₂]⁺ با گستره اکسایش از +۳ تا +۷.",
    },
    history: {
      discovererFa: "ادوین مک‌میلان و فیلیپ آبلسون",
      discoveryYear: "1940",
      nameOriginFa: "سیاره نپتون (Neptune)",
      namingExplanationFa:
        "نام‌گذاری بر اساس سیاره نپتون در منظومه شمسی (پس از اورانوس).",
    },
    applications: {
      industrial: [
        "پیش‌ساز تولید پلوتونیم-۲۳۸ برای باتری‌های هسته‌ای RTG کاوشگرهای اعماق فضا",
      ],
      scientific: [
        "آشکارسازهای نوترون‌های پرانرژی و بررسی‌های پسماندهای هسته‌ای",
      ],
      medical: ["هیچ کاربرد دارویی ندارد"],
      everyday: ["هیچ کاربرد تجاری ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده رادیوتوکسیک و خطرناک، انباشته‌شونده در استخوان",
      radioactivity: true,
      radiationType: "پرتوزای آلفا با نیمه‌عمر میلیونی",
      precautionsFa:
        "کنترل در جعبه‌های دستکش‌دار با جریان هوای منفی و شیلد پرتویی.",
      hazardsFa: "پرتوزایی آلفای خطرناک و آسیب شدید استخوان و کبد.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: ["²³⁷Np (نیمه‌عمر ۲.۱۴ میلیون سال)"],
      mostStableIsotope: "²³⁷Np",
      halfLife: "۲.۱۴ میلیون سال",
    },
    additionalContent: {
      summaryFa:
        "نخستین عنصر فرااورانیمی سنتز شده در تاریخ علم و پل تبدیل به سوخت اتمی کاوشگرهای فضایی ویجر.",
      funFactsFa: [
        "نپتونیم نخستین عنصر مصنوعی فرااورانیم بود که مک‌میلان و آبلسون با شلیک نوترون به اورانیم در برکلی سنتز کردند.",
        "با تابش یک نوترون به نپتونیم-۲۳۷، پلوتونیم-۲۳۸ تولید می‌شود که فضاپیماهای ویجر را در فضای بین‌ستاره‌ای روشن نگه داشته است.",
      ],
      naturalOccurrenceFa:
        "مقادیر بسیار ناچیز در حد ردپا در سنگ‌های اورانیم ناشی از گیراندازی نوترون توسط U-238.",
      keyCompoundsFa: [
        "دی‌اکسید نپتونیم (NpO₂)",
        "تترافلوئورید نپتونیم (NpF₄)",
      ],
      educationalNotesFa:
        "نپتونیم-۲۳۷ زنجیره واپاشی گمشده ۴n+۱ (زنجیره نپتونیم) را آغاز می‌کند که به بیسموت-۲۰۹ منتهی می‌شود.",
    },
  },
  // Element 94: Pu (پلوتونیم)
  {
    identity: {
      atomicNumber: 94,
      symbol: "Pu",
      nameFa: "پلوتونیم",
      nameEn: "Plutonium",
      pronunciationFa: "پلوتونیُم",
      descriptionFa:
        "پیچیده‌ترین فلز متالورژی، سوخت اتمی مریخ‌نوردان ناسا در فضای میان‌ستاره‌ای و عنصر هراس‌انگیز سلاح‌های هسته‌ای.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 94,
      electrons: 94,
      neutrons: 150,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f⁶ 7s²",
      abbreviatedConfiguration: "[Rn] 5f⁶ 7s²",
      electronShells: [2, 8, 18, 32, 24, 8, 2],
      valenceElectrons: 8,
      commonOxidationStates: [4, 3, 6],
      allOxidationStates: [7, 6, 5, 4, 3],
    },
    physicalProperties: {
      atomicMass: {
        value: 244.0,
        origin: "estimated",
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
        value: 187,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 19.86,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای با ۶ دگرشکل بلوری شگفت‌انگیز که در اثر پرتوزایی با لمس کردن داغ حس می‌شود",
      colorFa: "خاکستری-نقره‌ای براق (سریعاً اکسید زرد می‌شود)",
      crystalStructureFa: "تک‌شیب (مونوکلینیک آلفا-پلوتونیم)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 912.5,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3505.0,
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
        value: 6.74,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.28,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 584.7,
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
        "فلزی بسیار فعال؛ در هوای مرطوب به سرعت اکسید شده و هیدرید پلوتونیم آتش‌گیر تولید می‌کند.",
      chemicalBehaviorFa:
        "پیچیده‌ترین عنصر در متالورژی با ۶ فاز دگرشکلی متفاوت و تغییر حجم تا ۲۵ درصد با تغییر دما؛ گستره اعداد اکسایش از +۳ تا +۷.",
    },
    history: {
      discovererFa: "گلن سیبورگ، مک‌میلان، کندی و وال",
      discoveryYear: "1940",
      nameOriginFa: "سیاره کوتوله پلوتو (Pluto)",
      namingExplanationFa:
        "نام‌گذاری بر اساس نام سیاره پلوتو پس از کشف اورانیم و نپتونیم.",
    },
    applications: {
      industrial: [
        "باتری‌های حرارتی رادیوایزوتوپی (RTG) کاوشگرهای مریخ‌نورد کنجکاوی و استقامت ناسا و ویجر ۱ و ۲ (ایزوتوپ Pu-238)",
        "سوخت MOX رآکتورهای اتمی مخلوط اکسید پلوتونیم-اورانیم",
        "هسته سلاح‌های هسته‌ای استراتژیک (ایزوتوپ Pu-239)",
      ],
      scientific: [
        "منبع تأمین برق ابزارهای علمی مستقر بر روی ماه و مریخ برای دهه‌ها کارکرد مداوم",
      ],
      medical: [
        "نخستین ضربان‌سازهای قلبی کاشتنی دهه ۱۹۷۰ بر پایه حرارت پلوتونیم-۲۳۸ با عمر بیش از ۳۰ سال",
      ],
      everyday: ["هیچ کاربرد روزمره‌ای ندارد"],
    },
    safety: {
      toxicityFa:
        "فوق‌العاده رادیوتوکسیک و خطرناک؛ بلع یا استنشاق چند میلی‌گرم آن کشنده است",
      radioactivity: true,
      radiationType: "پرتوزای قوی آلفا",
      precautionsFa:
        "نگهداری انحصاری در اتمسفر گاز بی‌اثر درون دستکش‌های ایزوله فوق‌پیشرفته به دور از هرگونه رطوبت.",
      hazardsFa:
        "جرم بحرانی کم (حدود ۱۰ کیلوگرم برای کره خالص) و خطر حادثه بحرانیت ناخواسته مرگبار.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²³۹Pu (شکافت‌پذیر، نیمه‌عمر ۲۴٬۱۱۰ سال)",
        "²³⁸Pu (تولیدکننده حرارت، نیمه‌عمر ۸۷.۷ سال)",
        "²⁴⁴Pu (طولانی‌ترین، نیمه‌عمر ۸۰ میلیون سال)",
      ],
      mostStableIsotope: "²⁴⁴Pu",
      halfLife: "۸۰ میلیون سال",
    },
    additionalContent: {
      summaryFa:
        "پیچیده‌ترین فلز متالورژی، سوخت اتمی مریخ‌نوردان ناسا در فضای میان‌ستاره‌ای و عنصر هراس‌انگیز سلاح‌های هسته‌ای.",
      funFactsFa: [
        "یک تکه پلوتونیم به دلیل واپاشی شدید آلفا در لمس کردن کاملاً گرم حس می‌شود و یک پوند آن می‌تواند آب را بجوشاند!",
        "پلوتونیم عجیب‌ترین رفتار فیزیکی را دارد: هنگام گرم شدن در برخی فازها منقبض می‌شود و در ۶ حالت بلوری مختلف با چگالی‌های کاملاً متفاوت تغییر شکل می‌دهد.",
      ],
      naturalOccurrenceFa:
        "بسیار نادر در حد ردپای اتمی در سنگ‌های اورانیم و به طور عمده در رآکتورهای هسته‌ای بازفرآوری می‌شود.",
      keyCompoundsFa: [
        "دی‌اکسید پلوتونیم (PuO₂)",
        "تترافلوئورید پلوتونیم (PuF₄)",
      ],
      educationalNotesFa:
        "پلوتونیم-۲۳۸ به دلیل واپاشی آلفای تمیز با نیمه‌عمر ۸۸ سال بدون تابش‌های کشنده گاما، استاندارد طلایی ژنراتورهای برق فضاپیماهای دوردست منظومه شمسی است.",
    },
  },
  // Element 95: Am (امریسیوم)
  {
    identity: {
      atomicNumber: 95,
      symbol: "Am",
      nameFa: "امریسیوم",
      nameEn: "Americium",
      pronunciationFa: "آمریسیُم",
      descriptionFa:
        "عنصر نجات‌بخش سنسورهای دود خانگی که هزاران نفر را از مرگ در آتش‌سوزی‌های شبانه نجات داده است.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 95,
      electrons: 95,
      neutrons: 148,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f⁷ 7s²",
      abbreviatedConfiguration: "[Rn] 5f⁷ 7s²",
      electronShells: [2, 8, 18, 32, 25, 8, 2],
      valenceElectrons: 9,
      commonOxidationStates: [3],
      allOxidationStates: [6, 5, 4, 3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 243.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 173,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 180,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 13.67,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای-سفید رادیواکتیو که در سنسورهای دود نجات‌بخش منازل مسکونی به کار می‌رود",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa: "شش‌گوشه فشرده مضاعف (dhcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1449.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2880.0,
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
        value: 10.0,
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
        value: 578.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 9.9,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا کدر شده و با اکسیژن و اسیدها به راحتی هیدروکسید و نمک‌های سه‌ظرفیتی می‌سازد.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ با رنگ صورتی؛ آرایش نیمه‌پر بسیار پایدار 5f⁷ در یون Am²⁺.",
    },
    history: {
      discovererFa: "گلن سیبورگ، رالف جیمز، لئون مورگان و آلبرت گیورسو",
      discoveryYear: "1944",
      nameOriginFa: "قاره آمریکا (Americas)",
      namingExplanationFa:
        "نام‌گذاری بر اساس قاره آمریکا به عنوان همتای عنصر اروپیم در سری لانتانیدها.",
    },
    applications: {
      industrial: [
        "آشکارسازهای دودی یونیزاسیون خانگی (ایزوتوپ Am-241 با تابش آلفا برای شناسایی ذرات دود آتش)",
        "ضخامت‌سنج‌های رادیومتری شیشه و پلاستیک",
      ],
      scientific: [
        "چشمه‌های نوترونی آزمایشگاهی در ترکیب امریسیوم-بریلیم برای نگاربرداری چاه‌های نفت",
      ],
      medical: ["تجهیزات رادیوگرافی تیروئید در گذشته"],
      everyday: [
        "سنسورهای اعلام حریق دودی نصب‌شده در سقف منازل و ادارات (حاوی حدود ۰.۳ میکروگرم دی‌اکسید امریسیوم)",
      ],
    },
    safety: {
      toxicityFa: "پرتوزای خطرناک در صورت بلع یا ورود به ریه",
      radioactivity: true,
      radiationType: "پرتوزای آلفا و گامای نرم ۶۰ کیلوالکترون‌ولت",
      precautionsFa: "عدم دستکاری یا باز کردن کپسول طلایی سنسور دود منازل.",
      hazardsFa:
        "رسوب در کبد و استخوان در صورت آسیب فیزیکی به کپسول در آتش‌سوزی شدید.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²⁴¹Am (نیمه‌عمر ۴۳۲.۲ سال)",
        "²⁴³Am (طولانی‌ترین، نیمه‌عمر ۷۳۷۰ سال)",
      ],
      mostStableIsotope: "²⁴³Am",
      halfLife: "۷۳۷۰ سال",
    },
    additionalContent: {
      summaryFa:
        "عنصر نجات‌بخش سنسورهای دود خانگی که هزاران نفر را از مرگ در آتش‌سوزی‌های شبانه نجات داده است.",
      funFactsFa: [
        "تنها عنصر مصنوعی ساخته دست بشر است که در خانه‌های مردم عادی یافت می‌شود (در سنسورهای دودی سقف منازل)!",
        "کشف امریسیوم در جنگ جهانی دوم به عنوان بخشی از پروژه منهتن فوق‌سری بود و نخستین بار در یک برنامه رادیویی کودکان فاش شد!",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی و از محصولات جانبی بمباران نوترونی پلوتونیم در رآکتورهای هسته‌ای.",
      keyCompoundsFa: [
        "دی‌اکسید امریسیوم (AmO₂)",
        "تترافلوئورید امریسیوم (AmF₄)",
      ],
      educationalNotesFa:
        "ایزوتوپ Am-241 هوای داخل محفظه سنسور دود را با ذرات آلفا یونیزه کرده و جریان الکتریکی ثابتی برقرار می‌کند؛ با ورود ذرات دود این جریان قطع شده و آژیر به صدا درمی‌آید.",
    },
  },
  // Element 96: Cm (کوریم)
  {
    identity: {
      atomicNumber: 96,
      symbol: "Cm",
      nameFa: "کوریم",
      nameEn: "Curium",
      pronunciationFa: "کوریُم",
      descriptionFa:
        "عنصر ماری و پیر کوری و چشم شیمیایی مریخ‌نوردان سوجورنر، روح و فرصت بر روی سیاره سرخ.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 96,
      electrons: 96,
      neutrons: 151,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f⁷ 6d¹ 7s²",
      abbreviatedConfiguration: "[Rn] 5f⁷ 6d¹ 7s²",
      electronShells: [2, 8, 18, 32, 25, 9, 2],
      valenceElectrons: 9,
      commonOxidationStates: [3],
      allOxidationStates: [4, 3],
    },
    physicalProperties: {
      atomicMass: {
        value: 247.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 169,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 169,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 13.51,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو نقره‌ای سخت و متراکم با درخشش ارغوانی در تاریکی در اثر حرارت پرتوزایی شدید",
      colorFa: "سفید-نقره‌ای با درخشش ارغوانی",
      crystalStructureFa: "شش‌گوشه فشرده مضاعف (dhcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1613.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3383.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
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
        value: 581.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 27.2,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلزی به شدت فعال با اکسیژن؛ اکسید سطحی پایدار Cm₂O₃ تولید می‌کند.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ با اوربیتال نیمه‌پر بسیار پایدار 5f⁷ با رفتاری شبیه گادولینیم.",
    },
    history: {
      discovererFa: "گلن سیبورگ، رالف جیمز و آلبرت گیورسو",
      discoveryYear: "1944",
      nameOriginFa: "ماری کوری و پیر کوری",
      namingExplanationFa:
        "به افتخار پیشگامان بزرگ رادیواکتیویته، ماری و پیر کوری نام‌گذاری شد.",
    },
    applications: {
      industrial: [
        "منبع چشمه پرتو آلفا در طیف‌سنج پرتو ایکس ذرات آلفا (APXS) در مریخ‌نوردان ناسا برای تعیین ترکیبات شیمیایی سنگ‌های مریخ",
      ],
      scientific: [
        "سنتز عناصر فراسنگین بالاتر نظیر کالیفورنیم و لیورموریوم در شتاب‌دهنده‌ها",
      ],
      medical: ["هیچ کاربرد بالینی ندارد"],
      everyday: ["هیچ کاربرد روزمره‌ای ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا و تخریب‌کننده مغز استخوان و کبد",
      radioactivity: true,
      radiationType: "پرتوزای آلفای فوق‌العاده قوی",
      precautionsFa:
        "کنترل انحصاری در سلول‌های داغ هسته‌ای با ربات‌های بازویی و دیوارهای ضخیم بتنی.",
      hazardsFa: "پرتوزایی گرمایی شدید و ایجاد ضایعات استخوانی مرگبار.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²⁴۷Cm (طولانی‌ترین نیمه‌عمر ۱۵.۶ میلیون سال)",
        "²⁴⁴Cm (نیمه‌عمر ۱۸.۱ سال)",
      ],
      mostStableIsotope: "²⁴⁷Cm",
      halfLife: "۱۵.۶ میلیون سال",
    },
    additionalContent: {
      summaryFa:
        "عنصر ماری و پیر کوری و چشم شیمیایی مریخ‌نوردان سوجورنر، روح و فرصت بر روی سیاره سرخ.",
      funFactsFa: [
        "طیف‌سنج APXS با چشمه کوریم-۲۴۴ بر روی بازوی روباتیک مریخ‌نوردان برای نخستین بار هویت شیمیایی سنگ‌های مریخ را افشا کرد!",
        "یک گرم کوریم-۲۴۴ نزدیک به ۳ وات انرژی گرمایی خالص از پرتوزایی آلفا آزاد می‌کند و در تاریکی می‌درخشد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی و از محصولات سوخت هسته‌ای بازفرآوری‌شده.",
      keyCompoundsFa: ["دی‌اکسید کوریم (CmO₂)", "تری‌کلرید کوریم (CmCl₃)"],
      educationalNotesFa:
        "کوریم همتای ردیف اکتینیدی عنصر گادولینیم است و دارای زیرلایه نیمه‌پر متقارن 5f⁷ است که به یون Cm³⁺ پایداری فوق‌العاده‌ای می‌بخشد.",
    },
  },
  // Element 97: Bk (برکلیم)
  {
    identity: {
      atomicNumber: 97,
      symbol: "Bk",
      nameFa: "برکلیم",
      nameEn: "Berkelium",
      pronunciationFa: "بِرکلیُم",
      descriptionFa:
        "عنصر آزمایشگاه برکلی کالیفرنیا و ماده تارگت حیاتی برای کشف و سنتز عنصر فوق‌سنگین تنسین.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 97,
      electrons: 97,
      neutrons: 150,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f⁹ 7s²",
      abbreviatedConfiguration: "[Rn] 5f⁹ 7s²",
      electronShells: [2, 8, 18, 32, 27, 8, 2],
      valenceElectrons: 9,
      commonOxidationStates: [3],
      allOxidationStates: [4, 3],
    },
    physicalProperties: {
      atomicMass: {
        value: 247.0,
        origin: "estimated",
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
        value: 168,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 14.78,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو نقره‌ای که در مقادیر میلی‌گرمی در رآکتورهای شار بالای نوترون تولید می‌شود",
      colorFa: "سفید-نقره‌ای متالیک",
      crystalStructureFa: "شش‌گوشه فشرده مضاعف (dhcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1259.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2900.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
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
        value: 601.0,
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
        "فلزی فعال که با اسیدها به راحتی حل شده و با گاز هیدروژن هیدرید می‌سازد.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ با محلول‌های سبز-زرد؛ حالت اکسایش +۴ در دی‌اکسید برکلیم BkO₂ پایدار است.",
    },
    history: {
      discovererFa: "استنلی تامپسون، آلبرت گیورسو و گلن سیبورگ",
      discoveryYear: "1949",
      nameOriginFa: "شهر برکلی (Berkeley) در کالیفرنیا",
      namingExplanationFa:
        "نام‌گذاری به افتخار شهر برکلی کالیفرنیا، مرکز آزمایشگاه ملی لارنس برکلی.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد به دلیل کمیابی شدید"],
      scientific: [
        "تارگت اصلی برای سنتز عنصر ۱۱۷ (تنسین) در شتاب‌دهنده‌های دووبنا روسیه با بمباران کلسیم-۴۸",
      ],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "به شدت پرتوزا و سمی",
      radioactivity: true,
      radiationType: "پرتوزای بتا و آلفا",
      precautionsFa: "کنترل در سلول‌های هسته‌ای ایزوله.",
      hazardsFa: "تخریب ژنتیکی و پرتوزایی شدید مغز استخوان.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²⁴۷Bk (طولانی‌ترین نیمه‌عمر ۱۳۸۰ سال)",
        "²⁴۹Bk (نیمه‌عمر ۳۳۰ روز)",
      ],
      mostStableIsotope: "²⁴۷Bk",
      halfLife: "۱۳۸۰ سال",
    },
    additionalContent: {
      summaryFa:
        "عنصر آزمایشگاه برکلی کالیفرنیا و ماده تارگت حیاتی برای کشف و سنتز عنصر فوق‌سنگین تنسین.",
      funFactsFa: [
        "برای کشف عنصر ۱۱۷ (تنسین)، دانشمندان ۲ سال تمام در رآکتور اوک‌ریج کار کردند تا تنها ۲۲ میلی‌گرم برکلیم خالص بسازند!",
        "نام برکلیم درست مانند تربیم در سری لانتانیدها به عنوان عنصر همتا از نام شهر کشف خود الگو گرفته است.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی و از محصولات رآکتورهای ایزوتوپی شار بالا (HFIR).",
      keyCompoundsFa: ["دی‌اکسید برکلیم (BkO₂)", "تری‌کلرید برکلیم (BkCl₃)"],
      educationalNotesFa:
        "برکلیم نخستین اکتینید سنگینی است که حالت اکسایش +۴ آن به دلیل انرژی جفت‌شدگی زیرلایه نیمه‌پر ۵f۷ پایداری ترمودینامیکی مطلوبی نشان می‌دهد.",
    },
  },
  // Element 98: Cf (کالیفورنیم)
  {
    identity: {
      atomicNumber: 98,
      symbol: "Cf",
      nameFa: "کالیفورنیم",
      nameEn: "Californium",
      pronunciationFa: "کالیفورنیُم",
      descriptionFa:
        "قدرتمندترین چشمه نوترونی قابل حمل بشر، گران‌قیمت‌ترین ماده جهان (۲۷ میلیون دلار در هر گرم) و ماده خام خلق اوگانسون.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 98,
      electrons: 98,
      neutrons: 153,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁰ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹⁰ 7s²",
      electronShells: [2, 8, 18, 32, 28, 8, 2],
      valenceElectrons: 10,
      commonOxidationStates: [3],
      allOxidationStates: [4, 3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 251.0,
        origin: "estimated",
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
        value: 168,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 15.1,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو نقره‌ای، قدرتمندترین چشمه نوترونی قابل حمل جهان با قیمتی نجومی",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa: "شش‌گوشه فشرده مضاعف (dhcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1173.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1743.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
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
        value: 608.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلزی فعال در اسیدها با خروج هیدروژن؛ در مجاورت هوا کدر می‌شود.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ با ترکیبات سبز کم‌رنگ؛ ایزوتوپ Cf-252 شکافت خودبه‌خودی با فوران نوترون دارد.",
    },
    history: {
      discovererFa: "استنلی تامپسون، کنت استریت، آلبرت گیورسو و گلن سیبورگ",
      discoveryYear: "1950",
      nameOriginFa: "ایالت و دانشگاه کالیفرنیا (California)",
      namingExplanationFa:
        "نام‌گذاری به افتخار ایالت کالیفرنیا و دانشگاه کالیفرنیا در برکلی.",
    },
    applications: {
      industrial: [
        "راه‌اندازی اولیه و استارت رآکتورهای اتمی با چشمه نوترون پرقدرت",
        "آنالیز فعال‌سازی نوترونی (NAA) در آنالیز سنگ‌های معدنی طلا و نقره و کاوش سیمان و زغال‌سنگ",
        "اسکنرهای امنیتی چمدان‌های فرودگاهی برای کشف مواد منفجره",
      ],
      scientific: [
        "سنتز عنصر اوگانسون (۱۱۸) با بمباران کالیفورنیم-۲۴۹ با باریکه کلسیم-۴۸ در شتاب‌دهنده",
      ],
      medical: [
        "نوترون‌درمانی تومورهای بدخیم و مقاوم مغز و دهانه رحم با چشمه‌های سوزنی کالیفورنیم-۲۵۲",
      ],
      everyday: [
        "اسکنرهای پیشرفته امنیتی بارهای هواپیمایی فرودگاه‌های بین‌المللی",
      ],
    },
    safety: {
      toxicityFa: "فوق‌العاده خطرناک و پرتوزای نوترونی کشنده",
      radioactivity: true,
      radiationType: "شکافت خودبه‌خودی با گسیل نوترون‌های پرسرعت و آلفا",
      precautionsFa:
        "شیلدینگ ترکیبی سرب و پارافین یا آب سنگین برای مهار نوترون‌ها.",
      hazardsFa: "پرتوگیری حاد نوترونی و تخریب کامل بافت‌های زیستی.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²⁵¹Cf (طولانی‌ترین نیمه‌عمر ۸۹۸ سال)",
        "²⁵²Cf (چشمه قوی نوترون، نیمه‌عمر ۲.۶۴ سال)",
      ],
      mostStableIsotope: "²⁵¹Cf",
      halfLife: "۸۹۸ سال",
    },
    additionalContent: {
      summaryFa:
        "قدرتمندترین چشمه نوترونی قابل حمل بشر، گران‌قیمت‌ترین ماده جهان (۲۷ میلیون دلار در هر گرم) و ماده خام خلق اوگانسون.",
      funFactsFa: [
        "یک میکروگرم کالیفورنیم-۲۵۲ در هر ثانیه بیش از ۲ میلیون نوترون به بیرون پرتاب می‌کند!",
        "قیمت هر گرم کالیفورنیم حدود ۲۷ میلیون دلار برآورد می‌شود که آن را جزو گران‌بهاترین مواد ساخته بشر قرار می‌دهد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی؛ تولید در مقادیر بسیار ناچیز در دو رآکتور فوق‌پیشرفته در آمریکا (اوک‌ریج) و روسیه (دیمیتروف‌گراد).",
      keyCompoundsFa: [
        "اکسید کالیفورنیم (Cf₂O₃)",
        "تری‌کلرید کالیفورنیم (CfCl₃)",
      ],
      educationalNotesFa:
        "کالیفورنیم سنگین‌ترین عنصری است که تا کنون در مقادیر قابل مشاهده با چشم غیرمسلح (میلی‌گرمی) تهیه و خواص فیزیکی آن مستقیماً اندازه‌گیری شده است.",
    },
  },
  // Element 99: Es (اینشتینیم)
  {
    identity: {
      atomicNumber: 99,
      symbol: "Es",
      nameFa: "اینشتینیم",
      nameEn: "Einsteinium",
      pronunciationFa: "اینشتینیُم",
      descriptionFa:
        "عنصر آلبرت اینشتین که از بقایای انفجار نخستین آزمایش بمب هیدروژنی تاریخ در اقیانوس آرام متولد شد.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 99,
      electrons: 99,
      neutrons: 153,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹¹ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹¹ 7s²",
      electronShells: [2, 8, 18, 32, 29, 8, 2],
      valenceElectrons: 11,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 252.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 165,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 165,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 8.84,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو نقره‌ای، با درخشش ملایم آبی در تاریکی که در آوارهای نخستین بمب هیدروژنی جهان کشف شد",
      colorFa: "سفید-نقره‌ای",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1133.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1269.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
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
        value: 619.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلزی فرار و واکنش‌پذیر با تخریب خودبه‌خودی ساختار بلوری به دلیل حرارت پرتوزایی شدید.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ با تمایل فزاینده به حالت اکسایش +۲ در محیط‌های احیایی.",
    },
    history: {
      discovererFa: "آلبرت گیورسو و تیم آزمایشگاه برکلی",
      discoveryYear: "1952",
      nameOriginFa: "آلبرت اینشتین (Albert Einstein)",
      namingExplanationFa:
        "به افتخار فیزیکدان افسانه‌ای آلبرت اینشتین، پدر نظریه نسبیت نام‌گذاری شد.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: [
        "سنتز عنصر مندلیفیم (۱۰۱) در سال ۱۹۵۵ با بمباران باریکه ذرات آلفا بر روی اتم‌های اینشتینیم",
      ],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا و خطرناک",
      radioactivity: true,
      radiationType: "پرتوزای آلفا با انرژی بالا",
      precautionsFa: "کنترل انحصاری در تأسیسات فوق‌ایزوله هسته‌ای.",
      hazardsFa: "تخریب سریع شبکه‌های بیولوژیکی در اثر تشعشعات آلفا.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²⁵²Es (طولانی‌ترین نیمه‌عمر ۴۷۱.۷ روز)",
        "²⁵۴Es (نیمه‌عمر ۲۷۵.۷ روز)",
        "²⁵۳Es (نیمه‌عمر ۲۰.۵ روز)",
      ],
      mostStableIsotope: "²⁵۲Es",
      halfLife: "۴۷۱.۷ روز",
    },
    additionalContent: {
      summaryFa:
        "عنصر آلبرت اینشتین که از بقایای انفجار نخستین آزمایش بمب هیدروژنی تاریخ در اقیانوس آرام متولد شد.",
      funFactsFa: [
        "اینشتینیم در غبار آوار نخستین آزمایش انفجار گرماهسته‌ای بمب هیدروژنی آمریکا (آزمایش ایوی مایک در سال ۱۹۵۲) کشف شد!",
        "به دلیل تابش آلفای بی‌امان، هر گرم اینشتینیم هزار وات گرما تولید می‌کند و شبکه بلوری خود را در عرض چند ساعت پودر می‌سازد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی؛ تولید در مقادیر میکروگرمی در رآکتور ایزوتوپی اوک‌ریج.",
      keyCompoundsFa: [
        "تری‌کلرید اینشتینیم (EsCl₃)",
        "اکسید اینشتینیم (Es₂O₃)",
      ],
      educationalNotesFa:
        "کشف اینشتینیم با جذب همزمان بیش از ۱۵ نوترون توسط هسته اورانیم-۲۳۸ در قلب انفجار گرماهسته‌ای بمب هیدروژنی، پنجره جدیدی به فیزیک هسته‌های فوق‌سنگین گشود.",
    },
  },
  // Element 100: Fm (فرمیم)
  {
    identity: {
      atomicNumber: 100,
      symbol: "Fm",
      nameFa: "فرمیم",
      nameEn: "Fermium",
      pronunciationFa: "فِرمیُم",
      descriptionFa:
        "عنصر صدم جدول تناوبی به افتخار انریکو فرمی و مرز نهایی سنتز عناصر در رآکتورهای هسته‌ای.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 100,
      electrons: 100,
      neutrons: 157,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹² 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹² 7s²",
      electronShells: [2, 8, 18, 32, 30, 8, 2],
      valenceElectrons: 12,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 257.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 165,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 167,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 9.7,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی که سنگین‌ترین عنصر قابل تولید با بمباران نوترونی در رآکتور است",
      colorFa: "سفید-نقره‌ای (پیش‌بینی)",
      crystalStructureFa: "مکعبی مرکزپر (پیش‌بینی شده fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1800.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2000.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
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
        value: 627.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa: "فلزی با واکنش‌پذیری بالا شبیه به سایر اکتینیدهای سنگین.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۳ و تمایل بالا به حالت اکسایش +۲ در حلال‌های آلی.",
    },
    history: {
      discovererFa: "آلبرت گیورسو و تیم برکلی",
      discoveryYear: "1952",
      nameOriginFa: "انریکو فرمی (Enrico Fermi)",
      namingExplanationFa:
        "به افتخار فیزیکدان بزرگ انریکو فرمی، طراح نخستین رآکتور هسته‌ای جهان نام‌گذاری شد.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: ["مطالعات مرز شکافت خودبه‌خودی و فیزیک هسته‌ای عناصر سنگین"],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا و شکافت خودبه‌خودی",
      precautionsFa: "کنترل شدید در آزمایشگاه‌های تحقیقاتی هسته‌ای.",
      hazardsFa: "خطرات مرگبار رادیولوژیکی.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: ["²⁵۷Fm (طولانی‌ترین نیمه‌عمر ۱۰۰.۵ روز)"],
      mostStableIsotope: "²⁵⁷Fm",
      halfLife: "۱۰۰.۵ روز",
    },
    additionalContent: {
      summaryFa:
        "عنصر صدم جدول تناوبی به افتخار انریکو فرمی و مرز نهایی سنتز عناصر در رآکتورهای هسته‌ای.",
      funFactsFa: [
        "فرمیم سنگین‌ترین عنصری است که می‌توان با جذب متوالی نوترون در یک رآکتور هسته‌ای ساخت؛ عناصر بالاتر از فرمیم فقط در شتاب‌دهنده‌های ذرات ساخته می‌شوند!",
        "مانند اینشتینیم، در بقایای انفجار نخستین آزمایش بمب هیدروژنی در جزیره بیکینی کشف شد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی؛ تولید در مقادیر کمتر از میکروگرم در رآکتور اوک‌ریج.",
      keyCompoundsFa: ["کلرید فرمیم (FmCl₃)"],
      educationalNotesFa:
        "پدیده «سد فرمیم» (Fermium barrier) ناشی از نیمه‌عمر فوق‌العاده کوتاه شکافت خودبه‌خودی ایزوتوپ Fm-258 (تنها ۳۷۰ میکروثانیه) است که مانع از ساخت عناصر سنگین‌تر با جذب نوترون می‌شود.",
    },
  },
  // Element 101: Md (مندلیفیم)
  {
    identity: {
      atomicNumber: 101,
      symbol: "Md",
      nameFa: "مندلیفیم",
      nameEn: "Mendelevium",
      pronunciationFa: "مَندِلیفیُم",
      descriptionFa:
        "عنصر دیمیتری مندلیف و نخستین عنصری در تاریخ علم که به صورت تک‌تک اتم‌ها کشف و شناسایی شد.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 101,
      electrons: 101,
      neutrons: 157,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹³ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹³ 7s²",
      electronShells: [2, 8, 18, 32, 31, 8, 2],
      valenceElectrons: 13,
      commonOxidationStates: [3, 2],
      allOxidationStates: [3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 258.0,
        origin: "estimated",
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
        value: 160,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 10.3,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو که اتم به اتم در شتاب‌دهنده ذرات تولید شد و پایداری حالت دوظرفیتی دارد",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده fcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1100.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1500.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
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
        value: 635.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa: "فلز فعال با خصلت‌های شیمیایی مشابه سایر اکتینیدهای سنگین.",
      chemicalBehaviorFa:
        "پایداری استثنایی حالت اکسایش +۲ در کنار حالت +۳؛ با احیاکننده‌های ملایم به Md²⁺ تبدیل می‌شود.",
    },
    history: {
      discovererFa: "آلبرت گیورسو، گلن سیبورگ، برنارد هاروی و گریگوری چاپین",
      discoveryYear: "1955",
      nameOriginFa: "دیمیتری مندلیف (Dmitri Mendeleev)",
      namingExplanationFa:
        "به افتخار دیمیتری مندلیف، پدر جدول تناوبی عناصر نام‌گذاری شد.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: [
        "نخستین عنصری که با موفقیت «اتم به اتم» شناسایی و بررسی شیمیایی شد",
      ],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا و شکافت خودبه‌خودی",
      precautionsFa: "کنترل انحصاری در تأسیسات شتاب‌دهنده.",
      hazardsFa: "خطرات شدید پرتوگیری یونیزان.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²⁵۸Md (طولانی‌ترین نیمه‌عمر ۵۱.۵ روز)",
        "²۵۶Md (نیمه‌عمر ۷۷ دقیقه)",
      ],
      mostStableIsotope: "²⁵⁸Md",
      halfLife: "۵۱.۵ روز",
    },
    additionalContent: {
      summaryFa:
        "عنصر دیمیتری مندلیف و نخستین عنصری در تاریخ علم که به صورت تک‌تک اتم‌ها کشف و شناسایی شد.",
      funFactsFa: [
        "کاشفان آمریکایی در اوج دوران جنگ سرد، به نشانه احترام عمیق علمی عنصر ۱۰۱ را به نام دانشمند روسی دیمیتری مندلیف نام نهادند!",
        "در آزمایش اولیه کشف تنها ۱۷ اتم از مندلیفیم ساخته شد و با دستگاه شمارنده صوتی هر بار که یک اتم کشف می‌شد زنگ به صدا درمی‌آمد!",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی و سنتز در شتاب‌دهنده سیکلوترون با بمباران ذرات آلفا روی اینشتینیم.",
      keyCompoundsFa: ["کلرید مندلیفیم (MdCl₂)"],
      educationalNotesFa:
        "مندلیفیم نخستین عنصری بود که در آن حالت اکسایش دوظرفیتی Md²⁺ در محلول آبی پایداری ترمودینامیکی بیشتری نسبت به حالت سه ظرفیتی استاندارد نشان داد.",
    },
  },
  // Element 102: No (نوبلیم)
  {
    identity: {
      atomicNumber: 102,
      symbol: "No",
      nameFa: "نوبلیم",
      nameEn: "Nobelium",
      pronunciationFa: "نوبِلیُم",
      descriptionFa:
        "عنصر آلفرد نوبل با زیرلایه پر شده 5f¹⁴ و رفتاری شبیه به فلزات قلیایی خاکی.",
    },
    classification: {
      group: null,
      period: 7,
      block: "f",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 102,
      electrons: 102,
      neutrons: 157,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 7s²",
      electronShells: [2, 8, 18, 32, 32, 8, 2],
      valenceElectrons: 2,
      commonOxidationStates: [2],
      allOxidationStates: [3, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 259.0,
        origin: "estimated",
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
        value: 160,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 9.9,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی با حالت پایدار دوظرفیتی به دلیل پر بودن کامل زیرلایه ۵f",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده fcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1100.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1500.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
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
        value: 642.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلز واکنش‌پذیر با رفتاری شبیه به فلزات قلیایی خاکی کلسیم و استرانسیم در محلول آبی.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۲ با اوربیتال کاملاً پر 5f¹⁴؛ حالت +۳ تنها با اکسیدکننده‌های قوی پدید می‌آید.",
    },
    history: {
      discovererFa: "تیم موسسه دووبنا روسیه و آزمایشگاه برکلی",
      discoveryYear: "1966",
      nameOriginFa: "آلفرد نوبل (Alfred Nobel)",
      namingExplanationFa:
        "به افتخار آلفرد نوبل، شیمیدان مخترع دینامیت و بنیان‌گذار جوایز نوبل نام‌گذاری شد.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: ["بررسی شیمی یون‌های دوظرفیتی ۵f و رفتار ستونی عناصر"],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا",
      precautionsFa: "کنترل در شتاب‌دهنده‌های هسته‌ای سنگین.",
      hazardsFa: "خطرات شدید پرتوزایی.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²⁵۹No (طولانی‌ترین نیمه‌عمر ۵۸ دقیقه)",
        "²۵۵No (نیمه‌عمر ۳.۱ دقیقه)",
      ],
      mostStableIsotope: "²⁵۹No",
      halfLife: "۵۸ دقیقه",
    },
    additionalContent: {
      summaryFa:
        "عنصر آلفرد نوبل با زیرلایه پر شده 5f¹⁴ و رفتاری شبیه به فلزات قلیایی خاکی.",
      funFactsFa: [
        "کشف نوبلیم صحنه یکی از جنجالی‌ترین مناقشات تاریخ شیمی میان دانشمندان سوئد، آمریکا و شوروی بر سر اولویت کشف بود!",
        "به دلیل بسته بودن کامل زیرلایه 5f¹⁴، نوبلیم در محلول‌های آبی تقریباً منحصراً به صورت یون No²⁺ وجود دارد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی با شلیک یون‌های کربن به تارگت‌های کوریم.",
      keyCompoundsFa: ["دی‌کلرید نوبلیم (NoCl₂)"],
      educationalNotesFa:
        "همتای لانتانیدی نوبلیم عنصر ایتربیم است؛ هر دو در حالت خنثی زیرلایه f کاملاً پر دارند اما گرایش نوبلیم به از دست دادن تنها دو الکترون بسیار قوی‌تر است.",
    },
  },
  // Element 103: Lr (لارنسیم)
  {
    identity: {
      atomicNumber: 103,
      symbol: "Lr",
      nameFa: "لارنسیم",
      nameEn: "Lawrencium",
      pronunciationFa: "لارِنسیُم",
      descriptionFa:
        "پایان خانواده اکتینیدها و ارمغان ارنست لارنس با شگفتی قرارگیری الکترون در اوربیتال 7p به دلیل نسبیت.",
    },
    classification: {
      group: null,
      period: 7,
      block: "d",
      category: "actinide",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 103,
      electrons: 103,
      neutrons: 163,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 7s² 7p¹",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 7s² 7p¹",
      electronShells: [2, 8, 18, 32, 32, 8, 3],
      valenceElectrons: 3,
      commonOxidationStates: [3],
      allOxidationStates: [3],
    },
    physicalProperties: {
      atomicMass: {
        value: 266.0,
        origin: "estimated",
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
        value: 160,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 14.4,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی که نقطه پایان خانواده اکتینیدها و آغاز اثرات نسبیتی پیشرفته است",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده hcp",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1900.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2500.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
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
        value: 470.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa: "فلز فعال که رفتار شیمیایی بسیار نزدیکی به لوتتیم دارد.",
      chemicalBehaviorFa:
        "پایان کامل ردیف اکتینیدها؛ پایدارترین حالت اکسایش +۳ با یون پایدار Lr³⁺؛ انرژی نخستین یونش بسیار پایین به علت اثر نسبیتی روی اوربیتال 7p.",
    },
    history: {
      discovererFa: "آلبرت گیورسو، سیکلند، لارش و لاتیمر",
      discoveryYear: "1961",
      nameOriginFa: "ارنست لارنس (Ernest Lawrence)",
      namingExplanationFa:
        "به افتخار ارنست لارنس، مخترع سیکلوترون و برنده نوبل فیزیک نام‌گذاری شد.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: ["آزمایش پدیده‌های کوانتومی نسبیتی در سنگین‌ترین اکتینید"],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا",
      precautionsFa: "کنترل در شتاب‌دهنده‌های ذرات سنگین.",
      hazardsFa: "خطرات شدید پرتوزایی هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²⁶۶Lr (طولانی‌ترین نیمه‌عمر ۱۱ ساعت)",
        "²۶۲Lr (نیمه‌عمر ۳.۶ ساعت)",
        "²۶۰Lr (نیمه‌عمر ۲.۷ دقیقه)",
      ],
      mostStableIsotope: "²⁶⁶Lr",
      halfLife: "۱۱ ساعت",
    },
    additionalContent: {
      summaryFa:
        "پایان خانواده اکتینیدها و ارمغان ارنست لارنس با شگفتی قرارگیری الکترون در اوربیتال 7p به دلیل نسبیت.",
      funFactsFa: [
        "لارنسیم به دلیل اثرات نسبیتی بر خلاف لوتتیم الکترون بیرونی خود را در اوربیتال 7p¹ قرار می‌دهد، نه 6d¹!",
        "انرژی یونش لارنسیم (۴.۹۶ الکترون ولت) حتی از بیشتر فلزات واسطه کمتر است.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی با شلیک یون‌های بور به تارگت‌های کالیفورنیم.",
      keyCompoundsFa: ["تری‌کلرید لارنسیم (LrCl₃)"],
      educationalNotesFa:
        "لارنسیم آخرین عنصر ردیف اکتینیدهاست که لایه ۵f آن با ۱۴ الکترون کاملاً مسدود شده است و رفتار شیمیایی آن به صورت یون Lr³⁺ خصلت همگروهی‌های گروه ۳ را تکرار می‌کند.",
    },
  },
  // Element 104: Rf (رادرفوردیم)
  {
    identity: {
      atomicNumber: 104,
      symbol: "Rf",
      nameFa: "رادرفوردیم",
      nameEn: "Rutherfordium",
      pronunciationFa: "رادِرفوردیُم",
      descriptionFa:
        "نخستین عنصر فرااکتینید و آغازگر قلمرو عناصر فوق‌سنگین به افتخار پدر فیزیک هسته‌ای ارنست رادرفورد.",
    },
    classification: {
      group: 4,
      period: 7,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 104,
      electrons: 104,
      neutrons: 163,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d² 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d² 7s²",
      electronShells: [2, 8, 18, 32, 32, 10, 2],
      valenceElectrons: 4,
      commonOxidationStates: [4],
      allOxidationStates: [4],
    },
    physicalProperties: {
      atomicMass: {
        value: 267.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 150,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 157,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 23.2,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو فوق‌سنگین، نخستین عنصر فرااکتینیدی که رفتار شیمیایی شبیه به هافنیم دارد",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده hcp",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2400.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 5800.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.3,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 580.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 45.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلز فوق‌سنگین بسیار رادیواکتیو با ترکیبات فرار گازی نظیر تتراکلرید رادرفوردیم RfCl₄.",
      chemicalBehaviorFa:
        "عضو گروه ۴؛ پایدارترین حالت اکسایش +۴؛ نخستین عنصر ردیف ترانزاکتینیدها (فرااکتینید).",
    },
    history: {
      discovererFa: "انستیتو مشترک تحقیقات هسته‌ای دووبنا و آزمایشگاه برکلی",
      discoveryYear: "1969",
      nameOriginFa: "ارنست رادرفورد (Ernest Rutherford)",
      namingExplanationFa:
        "به افتخار ارنست رادرفورد، پدر فیزیک هسته‌ای و کاشف هسته اتم نام‌گذاری شد.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: [
        "بررسی شیمی فاز گازی عناصر ترانزاکتینید در کروماتوگرافی گازی تک‌اتمی",
      ],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا و شکافت خودبه‌خودی",
      precautionsFa: "سنتز صرفاً در شتاب‌دهنده‌های سنگین تحت خلأ.",
      hazardsFa: "خطرات شدید رادیواکتیو.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۶۷Rf (طولانی‌ترین نیمه‌عمر ۱.۳ ساعت)",
        "²۶۳Rf (نیمه‌عمر ۱۱ دقیقه)",
      ],
      mostStableIsotope: "²⁶۷Rf",
      halfLife: "۱.۳ ساعت",
    },
    additionalContent: {
      summaryFa:
        "نخستین عنصر فرااکتینید و آغازگر قلمرو عناصر فوق‌سنگین به افتخار پدر فیزیک هسته‌ای ارنست رادرفورد.",
      funFactsFa: [
        "رادرفوردیم نخستین عنصر بلوک d بعد از سری اکتینیدهاست که اثبات کرد جدول تناوبی و قانون تناوب برای عناصر فوق‌سنگین نیز معتبر است!",
        "شوروی‌ها در ابتدا می‌خواستند نام آن را به افتخار ایگور کورچاتف، «کورچاتوفیم» بگذارند.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی؛ تولید تک‌اتمی با واکنش همجوشی هسته‌ای یون‌های نئون-۲۲ و پلوتونیم-۲۴۲.",
      keyCompoundsFa: ["تتراکلرید رادرفوردیم (RfCl₄)"],
      educationalNotesFa:
        "کروماتوگرافی گازی نشان داد که ترکیب RfCl₄ رفتاری بسیار شبیه به HfCl₄ دارد و بنابراین رادرفوردیم بدون تردید به گروه ۴ جدول تناوبی تعلق دارد.",
    },
  },
  // Element 105: Db (دوبنیم)
  {
    identity: {
      atomicNumber: 105,
      symbol: "Db",
      nameFa: "دوبنیم",
      nameEn: "Dubnium",
      pronunciationFa: "دوبنیُم",
      descriptionFa:
        "عنصر شهر دانشمندان اتمی دووبنا در روسیه با نیمه‌عمر بیش از یک شبانه‌روز برای ایزوتوپ ۲۶۸.",
    },
    classification: {
      group: 5,
      period: 7,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 105,
      electrons: 105,
      neutrons: 163,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d³ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d³ 7s²",
      electronShells: [2, 8, 18, 32, 32, 11, 2],
      valenceElectrons: 5,
      commonOxidationStates: [5],
      allOxidationStates: [5],
    },
    physicalProperties: {
      atomicMass: {
        value: 268.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 149,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 149,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 29.3,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو فوق‌سنگین با چگالی پیش‌بینی شده بسیار بالا و خواص مشابه تانتال",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده bcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2500.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 5500.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.3,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 665.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلز ترانزاکتینید فعال در فاز گازی با تشکیل هالیدهای فرار DbCl₅ و DbBr₅.",
      chemicalBehaviorFa:
        "عضو گروه ۵؛ پایدارترین حالت اکسایش +۵ با رفتاری بینابینی میان نیوبیم و تانتال.",
    },
    history: {
      discovererFa: "موسسه مشترک تحقیقات هسته‌ای دووبنا و دانشگاه برکلی",
      discoveryYear: "1970",
      nameOriginFa: "شهر دووبنا (Dubna) در روسیه",
      namingExplanationFa:
        "نام‌گذاری به افتخار شهر علمی دووبنا در نزدیکی مسکو، قطب نامدار فیزیک هسته‌ای جهان.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: ["مطالعات اثرات نسبیتی بر روی رفتار شیمیایی هالیدهای گروه ۵"],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده رادیوتوکسیک",
      radioactivity: true,
      radiationType: "شکافت خودبه‌خودی و آلفا",
      precautionsFa:
        "تولید صرفاً در شتاب‌دهنده‌ها با گیراندازی مغناطیسی اتم‌ها.",
      hazardsFa: "پرتوزایی فوق‌العاده شدید.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۶۸Db (طولانی‌ترین نیمه‌عمر ۲۸ ساعت)",
        "²۷۰Db (نیمه‌عمر حدود ۱ ساعت)",
      ],
      mostStableIsotope: "²⁶⁸Db",
      halfLife: "۲۸ ساعت",
    },
    additionalContent: {
      summaryFa:
        "عنصر شهر دانشمندان اتمی دووبنا در روسیه با نیمه‌عمر بیش از یک شبانه‌روز برای ایزوتوپ ۲۶۸.",
      funFactsFa: [
        "ایزوتوپ دوبنیم-۲۶۸ با نیمه‌عمر ۲۸ ساعت، یکی از طولانی‌ترین نیمه‌عمرها را در بین تمام عناصر فوق‌سنگین دارد!",
        "آمریکایی‌ها در ابتدا می‌خواستند نام آن را «هانیم» (به افتخار اتو هان) بگذارند اما در توافق بین‌المللی نام دووبنا تثبیت شد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی در واکنش بمباران کالیفورنیم با یون‌های نیتروژن.",
      keyCompoundsFa: ["پنتاکلرید دوبنیم (DbCl₅)"],
      educationalNotesFa:
        "مطالعات استخراج فاز مایع نشان داد که دوبنیم رفتاری شبیه به نیوبیم دارد و بر خلاف انتظار اثرات نسبیتی تفاوت‌های ظریفی میان آن و تانتال ایجاد کرده است.",
    },
  },
  // Element 106: Sg (سیبورگیم)
  {
    identity: {
      atomicNumber: 106,
      symbol: "Sg",
      nameFa: "سیبورگیم",
      nameEn: "Seaborgium",
      pronunciationFa: "سیبورگیُم",
      descriptionFa:
        "تنها عنصری که در زمان حیات یک دانشمند با نام او رسمیت یافت؛ نماد جاودانگی گلن سیبورگ.",
    },
    classification: {
      group: 6,
      period: 7,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 106,
      electrons: 106,
      neutrons: 163,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁴ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d⁴ 7s²",
      electronShells: [2, 8, 18, 32, 32, 12, 2],
      valenceElectrons: 6,
      commonOxidationStates: [6],
      allOxidationStates: [6],
    },
    physicalProperties: {
      atomicMass: {
        value: 269.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 143,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 143,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 35.0,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی فوق‌سنگین با چگالی پیش‌بینی شده عظیم و رفتار شیمیایی مشابه تنگستن",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده bcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2800.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 6000.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 757.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلزی رادیواکتیو با تشکیل ترکیبات اکسید و کربونیل پایدار در فاز گازی.",
      chemicalBehaviorFa:
        "عضو گروه ۶؛ پایدارترین حالت اکسایش +۶؛ سنتز ترکیب کمپلکس هگزاکربونیل سیبورگیم Sg(CO)₆.",
    },
    history: {
      discovererFa: "آزمایشگاه ملی لارنس برکلی و انستیتو دووبنا",
      discoveryYear: "1974",
      nameOriginFa: "گلن سیبورگ (Glenn T. Seaborg)",
      namingExplanationFa:
        "به افتخار شیمیدان نامدار گلن سیبورگ، کاشف ۱۰ عنصر فرااورانیم و طراح ردیف اکتینیدها.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: [
        "سنتز نخستین ترکیب آلی-فلزی یک عنصر فوق‌سنگین یعنی هگزاکربونیل سیبورگیم Sg(CO)₆",
      ],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا و شکافت خودبه‌خودی",
      precautionsFa: "کنترل در تأسیسات فوق‌ایزوله شتاب‌دهنده.",
      hazardsFa: "خطرات شدید رادیواکتیویته.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۶۹Sg (طولانی‌ترین نیمه‌عمر ۱۴ دقیقه)",
        "²۷۱Sg (نیمه‌عمر ۲.۴ دقیقه)",
      ],
      mostStableIsotope: "²۶۹Sg",
      halfLife: "۱۴ دقیقه",
    },
    additionalContent: {
      summaryFa:
        "تنها عنصری که در زمان حیات یک دانشمند با نام او رسمیت یافت؛ نماد جاودانگی گلن سیبورگ.",
      funFactsFa: [
        "سیبورگیم نخستین عنصری بود که در حالی که فرد مورد نظر هنوز زنده بود نام‌گذاری شد و در ابتدا آیوپاک مخالفت شدیدی با آن کرد!",
        "در سال ۲۰۱۴ شیمیدان‌ها موفق شدند مولکول Sg(CO)₆ را اتم به اتم بسازند و اثبات کنند رفتار آن عیناً شبیه هگزاکربونیل تنگستن W(CO)₆ است.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی از بمباران کالیفورنیم با یون‌های اکسیژن-۱۸.",
      keyCompoundsFa: [
        "هگزاکربونیل سیبورگیم (Sg(CO)₆)",
        "دی‌اکسید دی‌کلرید سیبورگیم (SgO₂Cl₂)",
      ],
      educationalNotesFa:
        "ساختار مولکول فرار Sg(CO)₆ بر اساس نظریه پیوند پس‌بخش (Back-bonding) اوربیتال d سیبورگ به اوربیتال‌های ضدپیوندی مولکول CO، یکی از درخشان‌ترین پیروزی‌های شیمی نظری در قلمرو عناصر سنگین است.",
    },
  },
  // Element 107: Bh (بوریم)
  {
    identity: {
      atomicNumber: 107,
      symbol: "Bh",
      nameFa: "بوریم",
      nameEn: "Bohrium",
      pronunciationFa: "بوهریُم",
      descriptionFa:
        "عنصر نیلز بور بزرگ، کاشف کوانتومی ترازهای اتمی در مرکز تحقیقات یون‌های سنگین GSI آلمان.",
    },
    classification: {
      group: 7,
      period: 7,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 107,
      electrons: 107,
      neutrons: 163,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁵ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d⁵ 7s²",
      electronShells: [2, 8, 18, 32, 32, 13, 2],
      valenceElectrons: 7,
      commonOxidationStates: [7],
      allOxidationStates: [7],
    },
    physicalProperties: {
      atomicMass: {
        value: 270.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 141,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 141,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 37.1,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی فوق‌سنگین با چگالی فرضی بسیار بالا و رفتاری شبیه به رنیم",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده hcp",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2600.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 5500.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 740.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلز رادیواکتیو فوق‌سنگین با تشکیل ترکیب فرار اکسی‌کلرید BhO₃Cl در فاز گازی.",
      chemicalBehaviorFa:
        "عضو گروه ۷؛ بالاترین حالت اکسایش پایدار +۷؛ شباهت شیمیایی کامل با رنیم و تکنسیم.",
    },
    history: {
      discovererFa:
        "پیتر آرمبروستر، گوتفرید مونزنبرگ در GSI آلمان و انستیتو دووبنا",
      discoveryYear: "1981",
      nameOriginFa: "نیلز بور (Niels Bohr)",
      namingExplanationFa:
        "به افتخار نیلز بور، فیزیکدان افسانه‌ای دانمارک و پیشگام مدل اتمی کوانتومی.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: [
        "مطالعه شیمی تک‌اتمی گازها با ترکیب اکسی‌کلرید بوریم BhO₃Cl",
      ],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا",
      precautionsFa: "کنترل در شتاب‌دهنده‌های سنگین تحت شیلد سربی.",
      hazardsFa: "پرتوزایی شدید هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۷۰Bh (طولانی‌ترین نیمه‌عمر ۶۱ ثانیه)",
        "²۷۴Bh (نیمه‌عمر حدود ۱ دقیقه)",
      ],
      mostStableIsotope: "²⁷۰Bh",
      halfLife: "۶۱ ثانیه",
    },
    additionalContent: {
      summaryFa:
        "عنصر نیلز بور بزرگ، کاشف کوانتومی ترازهای اتمی در مرکز تحقیقات یون‌های سنگین GSI آلمان.",
      funFactsFa: [
        "کاشفان آلمانی در GSI دارمشتات این عنصر را با شلیک باریکه یون‌های کروم-۵۴ روی بیسموت-۲۰۹ به روش «همجوشی سرد» کشف کردند!",
        "آزمایش‌های کروماتوگرافی نشان داد که اکسی‌کلرید بوریم دقیقاً همان رفتار تبخیر ترکیب همتای خود در رنیم (ReO₃Cl) را تقلید می‌کند.",
      ],
      naturalOccurrenceFa: "کاملاً مصنوعی؛ هیچ منبع طبیعی ندارد.",
      keyCompoundsFa: ["اکسی‌تری‌کلرید بوریم (BhO₃Cl)"],
      educationalNotesFa:
        "بوریم اثبات کرد که حتی در عنصر ۱۰۷ با هسته‌ای عظیم و ناپایدار، ظرفیت والانس گروه ۷ و تشکیل اکسایش +۷ با تقارن اوربیتال d به زیبایی برقرار می‌ماند.",
    },
  },
  // Element 108: Hs (هاسیم)
  {
    identity: {
      atomicNumber: 108,
      symbol: "Hs",
      nameFa: "هاسیم",
      nameEn: "Hassium",
      pronunciationFa: "هاسیُم",
      descriptionFa:
        "چگال‌ترین ماده تئوریک در علم با اکسید فرار HsO₄ و هسته جادویی تغییرشکل‌یافته هاسیم-۲۷۰.",
    },
    classification: {
      group: 8,
      period: 7,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 108,
      electrons: 108,
      neutrons: 169,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁶ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d⁶ 7s²",
      electronShells: [2, 8, 18, 32, 32, 14, 2],
      valenceElectrons: 8,
      commonOxidationStates: [8],
      allOxidationStates: [8],
    },
    physicalProperties: {
      atomicMass: {
        value: 277.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 134,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 134,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 40.7,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی فوق‌سنگین که پیش‌بینی می‌شود چگال‌ترین ماده تئوریک جهان باشد (حدود ۴۱ گرم بر سانتی‌متر مکعب)",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده hcp",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2800.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 6000.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 730.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلزی رادیواکتیو با قابلیت تشکیل تتراکسید بسیار فرار هاسیم HsO₄ در دمای اتاق.",
      chemicalBehaviorFa:
        "عضو گروه ۸؛ تشکیل حالت اکسایش +۸ در مولکول چهاروجهی HsO₄ کاملاً همسان با تتراکسید اسمیم OsO₄.",
    },
    history: {
      discovererFa: "پیتر آرمبروستر و گوتفرید مونزنبرگ در GSI آلمان",
      discoveryYear: "1984",
      nameOriginFa: "ایالت هسن (Hesse) در آلمان",
      namingExplanationFa:
        "نام‌گذاری بر اساس واژه لاتین هاسیا (Hassia) برای ایالت هسن آلمان که مرکز GSI در آنجا مستقر است.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: [
        "تحقیقات سنتز تتراکسید هاسیم و بررسی رفتار گازهای فوق‌سنگین چهاروجهی",
      ],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا و شکافت خودبه‌خودی",
      precautionsFa: "کنترل در آزمایشگاه‌های ذرات بنیادی.",
      hazardsFa: "پرتوزایی شدید هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۷۱Hs (طولانی‌ترین نیمه‌عمر حدود ۴۰ ثانیه)",
        "²۷۰Hs (نیمه‌عمر ۲۲ ثانیه ایزوتوپ جادویی تغییرشکل‌یافته)",
      ],
      mostStableIsotope: "²۷۱Hs",
      halfLife: "۴۰ ثانیه",
    },
    additionalContent: {
      summaryFa:
        "چگال‌ترین ماده تئوریک در علم با اکسید فرار HsO₄ و هسته جادویی تغییرشکل‌یافته هاسیم-۲۷۰.",
      funFactsFa: [
        "محاسبات نظری پیش‌بینی می‌کنند که اگر می‌توانستیم یک شمش از هاسیم بسازیم، چگالی آن حدود ۴۱ گرم بر سانتی‌متر مکعب (تقریباً دو برابر اسمیم!) می‌بود!",
        "ایزوتوپ هاسیم-۲۷۰ به عنوان یک «هسته دوبرابر جادویی دگرگون‌شده» دارای پایداری چشمگیری است.",
      ],
      naturalOccurrenceFa: "کاملاً مصنوعی از بمباران سرب-۲۰۸ با باریکه آهن-۵۸.",
      keyCompoundsFa: ["تتراکسید هاسیم (HsO₄)"],
      educationalNotesFa:
        "تتراکسید هاسیم (HsO₄) گازی با نقطه جوش پیش‌بینی‌شده کمی بالاتر از تتراکسید اسمیم است و رسوب آن روی سطوح خنک‌شده سیلیکونی نشان داد که تقارن تتراهدرال در گروه ۸ حتی در دوره هفتم نیز حفظ می‌شود.",
    },
  },
  // Element 109: Mt (مایتنریم)
  {
    identity: {
      atomicNumber: 109,
      symbol: "Mt",
      nameFa: "مایتنریم",
      nameEn: "Meitnerium",
      pronunciationFa: "مایتنِریُم",
      descriptionFa:
        "تنها عنصری که منحصراً به نام یک زن دانشمند نام‌گذاری شده است؛ یادبود لیزه مایتنر بزرگ.",
    },
    classification: {
      group: 9,
      period: 7,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 109,
      electrons: 109,
      neutrons: 169,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁷ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d⁷ 7s²",
      electronShells: [2, 8, 18, 32, 32, 15, 2],
      valenceElectrons: 9,
      commonOxidationStates: [3],
      allOxidationStates: [3, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 278.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 130,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 130,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 37.4,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی فوق‌سنگین به افتخار بانوی پیشگام کشف شکافت هسته‌ای",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده fcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2600.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 5000.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 800.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلز فوق‌سنگین رادیواکتیو با خصلت‌های گروه ۹ مشابه ایریدیم.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش پیش‌بینی شده +۳ و +۱؛ پیش‌بینی عدم پایداری حالت‌های اکسایش بالا به دلیل اثرات نسبیتی.",
    },
    history: {
      discovererFa: "پیتر آرمبروستر و گوتفرید مونزنبرگ در GSI آلمان",
      discoveryYear: "1982",
      nameOriginFa: "لیزه مایتنر (Lise Meitner)",
      namingExplanationFa:
        "به افتخار لیزه مایتنر، فیزیکدان اتریشی و کاشف واقعی پدیده شکافت هسته‌ای اورانیم.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: [
        "بررسی مرزهای پایداری هسته‌های به شدت برانگیخته در شتاب‌دهنده‌ها",
      ],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا و شکافت خودبه‌خودی",
      precautionsFa: "کنترل در تأسیسات ایزوله شتاب‌دهنده.",
      hazardsFa: "پرتوزایی شدید هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۷۸Mt (طولانی‌ترین نیمه‌عمر ۴.۵ ثانیه)",
        "²۷۶Mt (نیمه‌عمر ۰.۷ ثانیه)",
      ],
      mostStableIsotope: "²⁷۸Mt",
      halfLife: "۴.۵ ثانیه",
    },
    additionalContent: {
      summaryFa:
        "تنها عنصری که منحصراً به نام یک زن دانشمند نام‌گذاری شده است؛ یادبود لیزه مایتنر بزرگ.",
      funFactsFa: [
        "لیزه مایتنر تنها زنی در تاریخ است که یک عنصر شیمیایی منحصراً به نام او نام‌گذاری شده است (کوریوم به طور مشترک به نام ماری و پیر کوری است)!",
        "مایتنر با وجود آنکه شکافت هسته‌ای را از نظر تئوری کشف و محاسبه کرد، به ناحق از دریافت جایزه نوبل ۱۹۴۴ محروم شد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی با شلیک باریکه آهن-۵۸ روی تارگت بیسموت-۲۰۹.",
      keyCompoundsFa: [
        "ترکیبات ماکروسکوپی به دلیل طول عمر چند ثانیه‌ای سنتز نشده است",
      ],
      educationalNotesFa:
        "مایتنریم در گروه ۹ زیر ایریدیم قرار دارد اما به دلیل انقباض نسبیتی شدید اوربیتال‌های s و p، انتظار می‌رود میل کمتری به حالت اکسایش بالای +۴ نشان دهد.",
    },
  },
  // Element 110: Ds (دارمشتاتیوم)
  {
    identity: {
      atomicNumber: 110,
      symbol: "Ds",
      nameFa: "دارمشتاتیوم",
      nameEn: "Darmstadtium",
      pronunciationFa: "دارمشتاتیُم",
      descriptionFa:
        "عنصر شهر دارمشتات آلمان که به همراه پلاتین و پالادیم در ستون دهم جدول قرار می‌گیرد.",
    },
    classification: {
      group: 10,
      period: 7,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 110,
      electrons: 110,
      neutrons: 171,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁸ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d⁸ 7s²",
      electronShells: [2, 8, 18, 32, 32, 16, 2],
      valenceElectrons: 10,
      commonOxidationStates: [4, 2],
      allOxidationStates: [4, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 281.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 130,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 130,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 34.8,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی فوق‌سنگین از همگروهی‌های پلاتین با نیمه‌عمر کوتاه",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده bcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2500.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4500.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 820.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa: "فلز رادیواکتیو با خصلت‌های گروه ۱۰ شبیه به پلاتین.",
      chemicalBehaviorFa:
        "پایدارترین حالت‌های اکسایش پیش‌بینی شده +۴ و +۲ و صفر در فاز فلزی.",
    },
    history: {
      discovererFa: "زیگورد هوفمان و تیم GSI آلمان",
      discoveryYear: "1994",
      nameOriginFa: "شهر دارمشتات (Darmstadt) در آلمان",
      namingExplanationFa:
        "به افتخار شهر دارمشتات آلمان، زادگاه مرکز پیشرفته تحقیقات یون‌های سنگین GSI.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: ["بررسی پایداری ایزوتوپ‌های نزدیک به جزیره پایداری هسته‌ای"],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا و شکافت خودبه‌خودی",
      precautionsFa: "کنترل در شتاب‌دهنده ذرات یون‌های سنگین.",
      hazardsFa: "پرتوزایی شدید هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۸۱Ds (طولانی‌ترین نیمه‌عمر ۱۲.۷ ثانیه)",
        "²۷۹Ds (نیمه‌عمر ۰.۱۸ ثانیه)",
      ],
      mostStableIsotope: "²۸۱Ds",
      halfLife: "۱۲.۷ ثانیه",
    },
    additionalContent: {
      summaryFa:
        "عنصر شهر دارمشتات آلمان که به همراه پلاتین و پالادیم در ستون دهم جدول قرار می‌گیرد.",
      funFactsFa: [
        "مرکز GSI در دارمشتات آلمان رکورددار کشف ۶ عنصر پیاپی جدول تناوبی (از ۱۰۷ تا ۱۱۲) در دهه‌های ۱۹۸۰ و ۱۹۹۰ بود!",
        "ایزوتوپ دارمشتاتیوم-۲۸۱ با نیمه‌عمر نزدیک به ۱۳ ثانیه پنجره مناسبی برای مطالعه خواص هسته‌ای فراهم کرد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی از شلیک یون‌های نیکل-۶۲ به تارگت سرب-۲۰۸.",
      keyCompoundsFa: ["ترکیبات توده‌ای به دلیل نیمه‌عمر کوتاه ناشناخته است"],
      educationalNotesFa:
        "دارمشتاتیوم از نظر آرایش الکترونی به دلیل اثرات نسبیتی پیش‌بینی می‌شود آرایش 6d⁸ 7s² داشته باشد و بر خلاف پالادیم لایه بیرونی s آن بسته بماند.",
    },
  },
  // Element 111: Rg (رونتگنیم)
  {
    identity: {
      atomicNumber: 111,
      symbol: "Rg",
      nameFa: "رونتگنیم",
      nameEn: "Roentgenium",
      pronunciationFa: "رونتگِنیُم",
      descriptionFa:
        "عنصر ویلهلم رونتگن، کاشف پرتوهای ایکس، همگروه فوق‌سنگین طلا با اثرات نسبیتی کم‌نظیر.",
    },
    classification: {
      group: 11,
      period: 7,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 111,
      electrons: 111,
      neutrons: 171,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁹ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d⁹ 7s²",
      electronShells: [2, 8, 18, 32, 32, 17, 2],
      valenceElectrons: 11,
      commonOxidationStates: [3],
      allOxidationStates: [5, 3, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 282.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 125,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 125,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 28.7,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی فوق‌سنگین، همگروه طلا با اثرات نسبیتی فوق‌العاده قوی",
      colorFa: "فلزی متالیک مایل به طلایی (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده bcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2200.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4000.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 860.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "پیش‌بینی می‌شود یکی از اشرافی‌ترین و نجیب‌ترین فلزات در واکنش‌های شیمیایی باشد.",
      chemicalBehaviorFa:
        "عضو گروه ۱۱؛ پایدارترین حالت اکسایش پیش‌بینی شده +۳ به دلیل انقباض شدید اوربیتال 7s.",
    },
    history: {
      discovererFa: "زیگورد هوفمان و تیم GSI آلمان",
      discoveryYear: "1994",
      nameOriginFa: "ویلهلم کنراد رونتگن (Wilhelm Röntgen)",
      namingExplanationFa:
        "به افتخار ویلهلم رونتگن، کاشف پرتو ایکس و برنده نخستین جایزه نوبل فیزیک تاریخ در سال ۱۹۰۱.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: ["بررسی اثرات پیشرفته نسبیتی بر پیوندهای شیمیایی گروه ۱۱"],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا",
      precautionsFa: "کنترل در تأسیسات شتاب‌دهنده یون‌های سنگین.",
      hazardsFa: "خطرات شدید پرتوزایی.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۸۲Rg (طولانی‌ترین نیمه‌عمر ۱۰۰ ثانیه)",
        "²۸۱Rg (نیمه‌عمر ۱۷ ثانیه)",
      ],
      mostStableIsotope: "²۸۲Rg",
      halfLife: "۱۰۰ ثانیه",
    },
    additionalContent: {
      summaryFa:
        "عنصر ویلهلم رونتگن، کاشف پرتوهای ایکس، همگروه فوق‌سنگین طلا با اثرات نسبیتی کم‌نظیر.",
      funFactsFa: [
        "رونتگنیم همگروه سنگین طلاست و محاسبات نشان می‌دهند که اگر در مقیاس توده‌ای وجود می‌داشت، به دلیل اثرات نسبیتی رنگی زرد مایل به نقره‌ای می‌داشت!",
        "در کشف اولیه آن تنها ۳ اتم از رونتگنیم-۲۷۲ در بمباران بیسموت-۲۰۹ با یون‌های نیکل-۶۴ ثبت شد.",
      ],
      naturalOccurrenceFa: "کاملاً مصنوعی؛ هیچ منبع طبیعی ندارد.",
      keyCompoundsFa: ["ترکیبات توده‌ای به دلیل نیمه‌عمر کوتاه ناشناخته است"],
      educationalNotesFa:
        "رونتگنیم به دلیل انقباض نسبیتی شدید اوربیتال 7s، انتظار می‌رود الکترون‌خواهی بسیار بالایی حتی بیشتر از طلا داشته باشد و ترکیباتی با آنیون Rg⁻ تشکیل دهد.",
    },
  },
  // Element 112: Cn (کوپرنیسیم)
  {
    identity: {
      atomicNumber: 112,
      symbol: "Cn",
      nameFa: "کوپرنیسیم",
      nameEn: "Copernicium",
      pronunciationFa: "کوپِرنیسیُم",
      descriptionFa:
        "عنصر نیکلاس کوپرنیک با اثرات نسبیتی چنان شگرف که فلز را در دمای معمولی به مایع فرار شبیه گاز نجیب بدل می‌کند.",
    },
    classification: {
      group: 12,
      period: 7,
      block: "d",
      category: "transition-metal",
      standardState: "liquid",
    },
    atomicStructure: {
      protons: 112,
      electrons: 112,
      neutrons: 173,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s²",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
      electronShells: [2, 8, 18, 32, 32, 18, 2],
      valenceElectrons: 2,
      commonOxidationStates: [2, 0],
      allOxidationStates: [4, 2, 0],
    },
    physicalProperties: {
      atomicMass: {
        value: 285.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 130,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 130,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 14.0,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی که پیش‌بینی می‌شود به دلیل اثرات نسبیتی در دمای اتاق مایع یا حتی گاز بسیار فرار باشد",
      colorFa: "نقره‌ای براق (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده hcp یا مایع فرار",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 283.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 340.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1155.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلزی بسیار نجیب و فرار با شباهت شیمیایی به گازهای نجیب به دلیل بسته بودن کامل پوسته 7s².",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش پیش‌بینی شده +۲ و ۰؛ جذب ضعیف روی طلا در آزمایش‌های کروماتوگرافی به عنوان مایع یا گاز فرار.",
    },
    history: {
      discovererFa: "زیگورد هوفمان و تیم GSI آلمان",
      discoveryYear: "1996",
      nameOriginFa: "نیکلاس کوپرنیک (Nicolaus Copernicus)",
      namingExplanationFa:
        "به افتخار نیکلاس کوپرنیک، ستاره‌شناس بزرگ لهستانی و واضع نظریه خورشیدمرکزی منظومه شمسی.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: [
        "مطالعه شیمی اتم منفرد فرار در کروماتوگرافی سرد روی آینه‌های طلا",
      ],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا",
      precautionsFa: "کنترل در آشکارسازهای برودتی شتاب‌دهنده.",
      hazardsFa: "پرتوزایی شدید هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۸۵Cn (طولانی‌ترین نیمه‌عمر ۲۹ ثانیه)",
        "²۸۳Cn (نیمه‌عمر ۴ ثانیه)",
      ],
      mostStableIsotope: "²۸۵Cn",
      halfLife: "۲۹ ثانیه",
    },
    additionalContent: {
      summaryFa:
        "عنصر نیکلاس کوپرنیک با اثرات نسبیتی چنان شگرف که فلز را در دمای معمولی به مایع فرار شبیه گاز نجیب بدل می‌کند.",
      funFactsFa: [
        "کوپرنیسیم نقطه‌عطف شگفت‌انگیز شیمی است: محاسبات نشان می‌دهند که به دلیل اثرات نسبیتی، این عنصر ممکن است در دمای اتاق به صورت گاز فرار باشد و مانند گاز نجیب رفتار کند!",
        "نام آن توسط دانشمندان برای یادآوری انقلابی که کوپرنیک در ستاره‌شناسی ایجاد کرد برگزیده شد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی از برخورد یون‌های روی-۷۰ با تارگت سرب-۲۰۸.",
      keyCompoundsFa: ["ترکیبات توده‌ای به دلیل نیمه‌عمر کوتاه ناشناخته است"],
      educationalNotesFa:
        "انقباض شدید نسبیتی زیرلایه 7s² انرژی یونش کوپرنیسیم را به ۱۱۵۵ kJ/mol می‌رساند که حتی از زنون بیشتر است و آن را به فرارترین فلز جدول بدل می‌سازد.",
    },
  },
  // Element 113: Nh (نیهونیم)
  {
    identity: {
      atomicNumber: 113,
      symbol: "Nh",
      nameFa: "نیهونیم",
      nameEn: "Nihonium",
      pronunciationFa: "نیهونیُم",
      descriptionFa:
        "نخستین عنصر کشف‌شده توسط دانشمندان آسیا در انستیتو ریکن ژاپن به نام سرزمین طلوع خورشید.",
    },
    classification: {
      group: 13,
      period: 7,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 113,
      electrons: 113,
      neutrons: 173,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p¹",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
      electronShells: [2, 8, 18, 32, 32, 18, 3],
      valenceElectrons: 3,
      commonOxidationStates: [1],
      allOxidationStates: [3, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 286.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 140,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 140,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 16.0,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی فوق‌سنگین، نخستین عنصر کشف‌شده در تاریخ قاره آسیا توسط دانشمندان ژاپنی",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده hcp",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 700.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1400.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 705.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلز رادیواکتیو با خصلت‌های گروه ۱۳؛ واکنش‌پذیری متوسط با تمایل بالا به حالت اکسایش +۱.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۱ به دلیل اثر جفت بی‌اثر فوق‌العاده قوی نسبیتی بر روی اوربیتال 7s².",
    },
    history: {
      discovererFa: "کوسوکه موریتا و تیم موسسه ریکن (RIKEN) ژاپن",
      discoveryYear: "2004",
      nameOriginFa: "نام کشور ژاپن در زبان ژاپنی (Nihon)",
      namingExplanationFa:
        "نام‌گذاری به افتخار کشور ژاپن (نیهون به معنای خاستگاه خورشید) به عنوان نخستین عنصر کشف‌شده در آسیا.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: ["بررسی اثرات نسبیتی بر روی پیوندهای شیمیایی بلوک p"],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا",
      precautionsFa: "کنترل در شتاب‌دهنده خطی ریکن ژاپن.",
      hazardsFa: "پرتوزایی شدید هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۸۶Nh (طولانی‌ترین نیمه‌عمر ۸ ثانیه)",
        "²۸۴Nh (نیمه‌عمر ۱ ثانیه)",
      ],
      mostStableIsotope: "²۸۶Nh",
      halfLife: "۸ ثانیه",
    },
    additionalContent: {
      summaryFa:
        "نخستین عنصر کشف‌شده توسط دانشمندان آسیا در انستیتو ریکن ژاپن به نام سرزمین طلوع خورشید.",
      funFactsFa: [
        "دانشمندان ژاپنی در ریکن بیش از ۹ سال مداوم شتاب‌دهنده را روشن نگه داشتند تا سرانجام موفق به ثبت ۳ اتم از نیهونیم شدند!",
        "نیهونیم نخستین عنصری در تاریخ بود که حق نام‌گذاری رسمی آن به یک کشور آسیایی واگذار شد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی از بمباران تارگت بیسموت-۲۰۹ با یون‌های روی-۷۰.",
      keyCompoundsFa: ["ترکیبات توده‌ای به دلیل نیمه‌عمر کوتاه ناشناخته است"],
      educationalNotesFa:
        "شکافت اوربیتالی اسپین-مدار نسبیتی باعث پایداری شدید اوربیتال 7p_{1/2} در نیهونیم می‌شود و انرژی یونش را نسبت به تالیم افزایش می‌دهد.",
    },
  },
  // Element 114: Fl (فلروویم)
  {
    identity: {
      atomicNumber: 114,
      symbol: "Fl",
      nameFa: "فلروویم",
      nameEn: "Flerovium",
      pronunciationFa: "فلِروویُم",
      descriptionFa:
        "دروازه ورود به جزیره اسرارآمیز پایداری هسته‌ای به نام فیزیکدان بزرگ گئورگی فلروف.",
    },
    classification: {
      group: 14,
      period: 7,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 114,
      electrons: 114,
      neutrons: 175,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p²",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
      electronShells: [2, 8, 18, 32, 32, 18, 4],
      valenceElectrons: 4,
      commonOxidationStates: [2, 0],
      allOxidationStates: [2, 0],
    },
    physicalProperties: {
      atomicMass: {
        value: 289.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 140,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 140,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 14.0,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی فوق‌سنگین در قلب جزیره پایداری هسته‌ای با ویژگی‌های شبه‌گاز نجیب",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده fcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 340.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 420.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 823.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "به شدت خنثی؛ آزمایش‌ها نشان داده است که فرارترین فلز در گروه ۱۴ است.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش ۰ و +۲؛ به دلیل اثرات نسبیتی الکترون‌های 7p_{1/2} رفتاری بسیار شبیه به گازهای نجیب نشان می‌دهد.",
    },
    history: {
      discovererFa:
        "انستیتو مشترک تحقیقات هسته‌ای دووبنا و آزمایشگاه لیورمور آمریکا",
      discoveryYear: "1998",
      nameOriginFa: "گئورگی فلروف (Georgy Flyorov)",
      namingExplanationFa:
        "به افتخار فیزیکدان برجسته شوروی گئورگی فلروف، بنیان‌گذار آزمایشگاه واکنش‌های هسته‌ای دووبنا.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: [
        "دروازه ورود به فرضیه جزیره پایداری هسته‌ای (Island of Stability)",
      ],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا",
      precautionsFa: "کنترل در تأسیسات فوق‌ایزوله هسته‌ای.",
      hazardsFa: "پرتوزایی شدید هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۸۹Fl (طولانی‌ترین نیمه‌عمر ۱.۹ ثانیه)",
        "²۸۸Fl (نیمه‌عمر ۰.۸ ثانیه)",
      ],
      mostStableIsotope: "²۸۹Fl",
      halfLife: "۱.۹ ثانیه",
    },
    additionalContent: {
      summaryFa:
        "دروازه ورود به جزیره اسرارآمیز پایداری هسته‌ای به نام فیزیکدان بزرگ گئورگی فلروف.",
      funFactsFa: [
        "فلروویم در ستون کربن، سیلیکون و سرب قرار دارد اما به دلیل اثرات شگفت‌انگیز نسبیتی، رفتاری بیشتر شبیه گاز نجیب آرگون از خود نشان می‌دهد!",
        "کشف فلروویم در سال ۱۹۹۸ پس از دهه‌ها نظریه‌پردازی وجود «جزیره پایداری» در فیزیک هسته‌ای را تأیید کرد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی از بمباران پلوتونیم-۲۴۴ با باریکه پرانرژی کلسیم-۴۸.",
      keyCompoundsFa: ["ترکیبات توده‌ای به دلیل نیمه‌عمر کوتاه ناشناخته است"],
      educationalNotesFa:
        "اوربیتال‌های نسبیتی 7s و 7p_{1/2} در فلروویم چنان عمیقاً پایدار و متراکم می‌شوند که یک لایه الکترونی بسته مجازی شبه‌گاز نجیب به وجود می‌آورند و آن را به یک فلز گازی فوق‌فرار بدل می‌سازند.",
    },
  },
  // Element 115: Mc (مسکوویم)
  {
    identity: {
      atomicNumber: 115,
      symbol: "Mc",
      nameFa: "مسکوویم",
      nameEn: "Moscovium",
      pronunciationFa: "مُسکوویُم",
      descriptionFa:
        "عنصر پایتخت روسیه مسکو، همگروه سنگین بیسموت با واپاشی آلفای در کسری از ثانیه.",
    },
    classification: {
      group: 15,
      period: 7,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 115,
      electrons: 115,
      neutrons: 175,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p³",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
      electronShells: [2, 8, 18, 32, 32, 18, 5],
      valenceElectrons: 5,
      commonOxidationStates: [1, 3],
      allOxidationStates: [3, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 290.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 140,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 140,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 13.5,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی فوق‌سنگین همگروه بیسموت با نیمه‌عمرهای کسری از ثانیه",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده bcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 700.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1400.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 540.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فلزی رادیواکتیو با خصلت‌های گروه ۱۵ با تمایل شدید به یون پایدار یک‌ظرفیتی Mc⁺.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۱ با رفتاری شبه‌فلز قلیایی در محلول؛ حالت اکسایش +۳ نیز پیش‌بینی می‌شود.",
    },
    history: {
      discovererFa: "انستیتو مشترک دووبنا روسیه و آزمایشگاه لیورمور آمریکا",
      discoveryYear: "2003",
      nameOriginFa: "منطقه استان مسکو (Moscow Oblast)",
      namingExplanationFa:
        "به افتخار منطقه تاریخی مسکو، محل استقرار انستیتو دووبنا روسیه نام‌گذاری شد.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: ["بررسی زنجیره‌های واپاشی هسته‌ای به سمت نیهونیم"],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا",
      precautionsFa: "کنترل در تأسیسات شتاب‌دهنده هسته‌ای سنگین.",
      hazardsFa: "پرتوزایی شدید هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۹۰Mc (طولانی‌ترین نیمه‌عمر ۰.۶۵ ثانیه)",
        "²۸۹Mc (نیمه‌عمر ۰.۲۲ ثانیه)",
      ],
      mostStableIsotope: "²۹۰Mc",
      halfLife: "۰.۶۵ ثانیه",
    },
    additionalContent: {
      summaryFa:
        "عنصر پایتخت روسیه مسکو، همگروه سنگین بیسموت با واپاشی آلفای در کسری از ثانیه.",
      funFactsFa: [
        "در سال ۲۰۰۳ شیمیدان‌ها با شلیک یک میلیارد میلیارد یون کلسیم-۴۸ روی تارگت امریسیوم-۲۴۳ موفق به شکار ۴ اتم از مسکوویم شدند!",
        "در تئوری‌های توطئه بیگانگان فضایی دهه ۱۹۹۰ از عنصر ۱۱۵ به عنوان سوخت جاذبه منفی فضاپیماها یاد می‌شد، سال‌ها قبل از آنکه در آزمایشگاه سنتز شود!",
      ],
      naturalOccurrenceFa: "کاملاً مصنوعی؛ تولید در شتاب‌دهنده U-400 دووبنا.",
      keyCompoundsFa: ["ترکیبات توده‌ای به دلیل نیمه‌عمر کوتاه ناشناخته است"],
      educationalNotesFa:
        "مسکوویم به دلیل خروج یک الکترون منفرد از زیرلایه 7p_{3/2}، با انرژی یونش بسیار پایین خود در محلول‌ها رفتاری کاملاً کاتیونی مانند یون‌های فلزات قلیایی از خود نشان می‌دهد.",
    },
  },
  // Element 116: Lv (لیورموریوم)
  {
    identity: {
      atomicNumber: 116,
      symbol: "Lv",
      nameFa: "لیورموریوم",
      nameEn: "Livermorium",
      pronunciationFa: "لیوِرموریُم",
      descriptionFa:
        "عنصر آزمایشگاه نامدار لیورمور کالیفرنیا، همگروه سنگین گوگرد و پولونیم با طول عمر میلی‌ثانیه‌ای.",
    },
    classification: {
      group: 16,
      period: 7,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 116,
      electrons: 116,
      neutrons: 177,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
      electronShells: [2, 8, 18, 32, 32, 18, 6],
      valenceElectrons: 6,
      commonOxidationStates: [2],
      allOxidationStates: [4, 2],
    },
    physicalProperties: {
      atomicMass: {
        value: 293.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 140,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 140,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 12.9,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز رادیواکتیو مصنوعی فوق‌سنگین همگروه گوگرد و پولونیم در انتهای ردیف شانزدهم",
      colorFa: "فلزی متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده bcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 700.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1100.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 720.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa: "فلز رادیواکتیو فوق‌سنگین با پیش‌بینی خواص مشابه پولونیم.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۲ با رفتار فلزی کامل بر خلاف نافلزات بالایی گروه ۱۶.",
    },
    history: {
      discovererFa: "انستیتو دووبنا روسیه و آزمایشگاه ملی لارنس لیورمور آمریکا",
      discoveryYear: "2000",
      nameOriginFa: "شهر لیورمور (Livermore) و آزمایشگاه لارنس لیورمور",
      namingExplanationFa:
        "به افتخار آزمایشگاه ملی لارنس لیورمور در کالیفرنیا و همکاری تاریخی دانشمندان آمریکایی و روسی.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: ["بررسی ساختار هسته‌ای ایزوتوپ‌های غنی از نوترون"],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا",
      precautionsFa: "کنترل در تأسیسات شتاب‌دهنده‌های سنگین.",
      hazardsFa: "پرتوزایی شدید هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۹۳Lv (طولانی‌ترین نیمه‌عمر ۵۳ میلی‌ثانیه)",
        "²۹۱Lv (نیمه‌عمر ۱۸ میلی‌ثانیه)",
      ],
      mostStableIsotope: "²۹۳Lv",
      halfLife: "۵۳ میلی‌ثانیه",
    },
    additionalContent: {
      summaryFa:
        "عنصر آزمایشگاه نامدار لیورمور کالیفرنیا، همگروه سنگین گوگرد و پولونیم با طول عمر میلی‌ثانیه‌ای.",
      funFactsFa: [
        "لیورموریوم در سال ۲۰۰۰ با بمباران تارگت کوریم-۲۴۸ با یون‌های کلسیم-۴۸ متولد شد!",
        "نام‌گذاری این عنصر نمادی تاریخی از پایان رقابت‌های تسلیحاتی جنگ سرد و همکاری مشترک دانشمندان هسته‌ای روسیه و آمریکا بود.",
      ],
      naturalOccurrenceFa: "کاملاً مصنوعی؛ هیچ منبع طبیعی ندارد.",
      keyCompoundsFa: ["ترکیبات توده‌ای به دلیل نیمه‌عمر کوتاه ناشناخته است"],
      educationalNotesFa:
        "لیورموریوم نشان می‌دهد که چگونه با نزول در گروه ۱۶، خصلت نافلزی اکسیژن و گوگرد به کلی جای خود را به ویژگی‌های متالیک خالص در یک فلز فوق‌سنگین می‌دهد.",
    },
  },
  // Element 117: Ts (تنسین)
  {
    identity: {
      atomicNumber: 117,
      symbol: "Ts",
      nameFa: "تنسین",
      nameEn: "Tennessine",
      pronunciationFa: "تِنِسین",
      descriptionFa:
        "عنصر ایالت تنسی، سنگین‌ترین هالوژن جدول تناوبی و دومین عنصر تازه‌کشف‌شده جهان.",
    },
    classification: {
      group: 17,
      period: 7,
      block: "p",
      category: "halogen",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 117,
      electrons: 117,
      neutrons: 177,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
      electronShells: [2, 8, 18, 32, 32, 18, 7],
      valenceElectrons: 7,
      commonOxidationStates: [1, 3],
      allOxidationStates: [3, 1, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 294.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 140,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 140,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 7.2,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "شبه‌فلز/هالوژن رادیواکتیو مصنوعی که پیش‌بینی می‌شود بر خلاف هالوژن‌ها جامد و با خصلت متالیک باشد",
      colorFa: "تیره متالیک (پیش‌بینی)",
      crystalStructureFa: "پیش‌بینی شده fcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 700.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 880.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.4,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 740.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -50.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "پیش‌بینی می‌شود واکنش‌پذیری آن به دلیل اثرات نسبیتی با هالوژن‌های سبک‌تر کاملاً متفاوت باشد.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش پیش‌بینی شده +۱ و +۳ با رفتار شبه‌فلزی و ناتوانی در تشکیل آنیون Ts⁻ به دلیل شکافت نسبیتی.",
    },
    history: {
      discovererFa: "انستیتو مشترک دووبنا، آزمایشگاه ملی اوک‌ریج و لیورمور",
      discoveryYear: "2010",
      nameOriginFa: "ایالت تنسی (Tennessee) در آمریکا",
      namingExplanationFa:
        "به افتخار ایالت تنسی آمریکا، مرکز آزمایشگاه ملی اوک‌ریج و دانشگاه واندربیلت.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: ["بررسی اثرات نسبیتی اسپین-مدار در سنگین‌ترین هالوژن جهان"],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا",
      precautionsFa: "کنترل در شتاب‌دهنده‌های هسته‌ای فوق‌پیشرفته.",
      hazardsFa: "پرتوزایی شدید هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: [
        "²۹۴Ts (طولانی‌ترین نیمه‌عمر ۵۱ میلی‌ثانیه)",
        "²۹۳Ts (نیمه‌عمر ۲۲ میلی‌ثانیه)",
      ],
      mostStableIsotope: "²۹۴Ts",
      halfLife: "۵۱ میلی‌ثانیه",
    },
    additionalContent: {
      summaryFa:
        "عنصر ایالت تنسی، سنگین‌ترین هالوژن جدول تناوبی و دومین عنصر تازه‌کشف‌شده جهان.",
      funFactsFa: [
        "برای ساخت تنسین، آزمایشگاه اوک‌ریج در تنسی ۲۲ میلی‌گرم تارگت برکلیم-۲۴۹ کمیاب را با هواپیما به روسیه فرستاد تا در شتاب‌دهنده دووبنا بمباران شود!",
        "تنسین بر خلاف فلوئور و کلر، به دلیل اثرات نسبیتی به احتمال زیاد اصلاً رفتار هالوژنی ندارد و شبه‌فلز است.",
      ],
      naturalOccurrenceFa: "کاملاً مصنوعی؛ تولید در شتاب‌دهنده در سال ۲۰۱۰.",
      keyCompoundsFa: ["ترکیبات توده‌ای به دلیل نیمه‌عمر کوتاه ناشناخته است"],
      educationalNotesFa:
        "تنسین دارای پسوند شیمیایی -ine در انگلیسی است (Tennessine) تا هماهنگی نام‌گذاری هالوژن‌ها (فلوئورین، کلرین، برومین، آیودین) رعایت شود.",
    },
  },
  // Element 118: Og (اوگانسون)
  {
    identity: {
      atomicNumber: 118,
      symbol: "Og",
      nameFa: "اوگانسون",
      nameEn: "Oganesson",
      pronunciationFa: "اوگانِسون",
      descriptionFa:
        "نقطه پایان جدول تناوبی عناصر (عنصر ۱۱۸)، سنگین‌ترین اتم شناخته‌شده در کیهان و شاهکار یوری اوگانسیان.",
    },
    classification: {
      group: 18,
      period: 7,
      block: "p",
      category: "noble-gas",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 118,
      electrons: 118,
      neutrons: 176,
      electronConfiguration:
        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
      abbreviatedConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
      electronShells: [2, 8, 18, 32, 32, 18, 8],
      valenceElectrons: 8,
      commonOxidationStates: [4, 2, 0],
      allOxidationStates: [4, 2, 0],
    },
    physicalProperties: {
      atomicMass: {
        value: 294.0,
        origin: "estimated",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 150,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 150,
        origin: "predicted",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 5.0,
        origin: "predicted",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "سنگین‌ترین عنصر شناخته‌شده در کل جدول تناوبی با عدد اتمی ۱۱۸ که پیش‌بینی می‌شود جامد باشد",
      colorFa: "پیش‌بینی تیره با درخشش ملایم",
      crystalStructureFa: "پیش‌بینی شده fcc",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 325.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 350.0,
        origin: "predicted",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.12,
        origin: "predicted",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 10.0,
        origin: "predicted",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.5,
        origin: "predicted",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 860.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 5.0,
        origin: "predicted",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "بر خلاف گازهای نجیب، اثرات نسبیتی الکترون‌های لایه بیرونی آن را بسیار پخش و فعال کرده است.",
      chemicalBehaviorFa:
        "پایان ردیف هفتم و پایان جدول تناوبی فعلی؛ پیش‌بینی می‌شود یک جامد واکنش‌پذیر باشد با الکترون‌خواهی مثبت و اکسایش +۴ و +۲.",
    },
    history: {
      discovererFa:
        "یوری اوگانسیان و تیم انستیتو دووبنا روسیه و آزمایشگاه لیورمور",
      discoveryYear: "2002",
      nameOriginFa: "یوری اوگانسیان (Yuri Oganessian)",
      namingExplanationFa:
        "به افتخار دانشمند بزرگ روس یوری اوگانسیان، معمار اصلی کشف عناصر فوق‌سنگین جهان.",
    },
    applications: {
      industrial: ["کاربرد صنعتی ندارد"],
      scientific: [
        "بررسی اثر توماس-فرمی و پدیده «گاز الکترونی همگن» در ابر الکترونی فوق‌سنگین",
      ],
      medical: ["هیچ کاربردی ندارد"],
      everyday: ["هیچ کاربردی ندارد"],
    },
    safety: {
      toxicityFa: "فوق‌العاده پرتوزا",
      radioactivity: true,
      radiationType: "پرتوزای آلفا",
      precautionsFa: "کنترل در شتاب‌دهنده‌های سنگین تحت مراقبت تام.",
      hazardsFa: "پرتوزایی فوق‌العاده شدید هسته‌ای.",
    },
    isotopes: {
      stableCount: 0,
      commonIsotopes: ["²۹۴Og (طولانی‌ترین نیمه‌عمر ۰.۷ میلی‌ثانیه)"],
      mostStableIsotope: "²۹۴Og",
      halfLife: "۰.۷ میلی‌ثانیه",
    },
    additionalContent: {
      summaryFa:
        "نقطه پایان جدول تناوبی عناصر (عنصر ۱۱۸)، سنگین‌ترین اتم شناخته‌شده در کیهان و شاهکار یوری اوگانسیان.",
      funFactsFa: [
        "اوگانسون با ۱۱۸ پروتون، سنگین‌ترین عنصر جدول است و محاسبات نشان می‌دهند که بر خلاف نام گروهش گاز نجیب نیست، بلکه در دمای اتاق یک جامد نرم است!",
        "یوری اوگانسیان دومین دانشمندی در طول تاریخ است که در زمان حیاتش عنصری به نام او ثبت شد.",
      ],
      naturalOccurrenceFa:
        "کاملاً مصنوعی از بمباران اتم‌های کالیفورنیم-۲۴۹ با باریکه پرقدرت کلسیم-۴۸.",
      keyCompoundsFa: [
        "ترکیبات توده‌ای به دلیل نیمه‌عمر بسیار کوتاه (زیر یک میلی‌ثانیه) ناشناخته است",
      ],
      educationalNotesFa:
        "در اوگانسون به دلیل دافعه کولنی سهمگین میان ۱۱۸ الکترون و اثرات نسبیتی، مرز میان اوربیتال‌ها محو می‌شود و الکترون‌ها مانند یک گاز فرمی همگن یکنواخت (Electron gas) در فضا پخش می‌شوند.",
    },
  },
];
