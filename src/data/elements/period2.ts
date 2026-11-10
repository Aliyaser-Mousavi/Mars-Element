import { ChemicalElement } from "@/types/element";

/**
 * Period 2 Elements (Total: 8)
 * Mars Element - Chemical Database
 */
export const PERIOD_2_ELEMENTS: ChemicalElement[] = [
  // Element 3: Li (لیتیم)
  {
    identity: {
      atomicNumber: 3,
      symbol: "Li",
      nameFa: "لیتیم",
      nameEn: "Lithium",
      pronunciationFa: "لیتیوم",
      descriptionFa:
        "سبک‌ترین فلز با بالاترین پتانسیل الکتروشیمیایی که پایه صنعت مدرن باتری و ذخیره انرژی است.",
    },
    classification: {
      group: 1,
      period: 2,
      block: "s",
      category: "alkali-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 3,
      electrons: 3,
      neutrons: 4,
      electronConfiguration: "1s² 2s¹",
      abbreviatedConfiguration: "[He] 2s¹",
      electronShells: [2, 1],
      valenceElectrons: 1,
      commonOxidationStates: [1],
      allOxidationStates: [1],
    },
    physicalProperties: {
      atomicMass: {
        value: 6.94,
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
        value: 128,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 0.534,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa: "فلز نرم، نقره‌ای-سفید با کمترین چگالی در میان جامدات",
      colorFa: "نقره‌ای-سفید",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 453.69,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1603.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 3.582,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 85.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 0.98,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 520.2,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 59.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "واکنش شدید با آب همراه با آزادسازی هیدروژن و تولید محلول قلیایی هیدروکسید لیتیم.",
      chemicalBehaviorFa:
        "از دست دادن آسان الکترون 2s و تشکیل کاتیون Li⁺ با بار سطحی بالا.",
    },
    history: {
      discovererFa: "یوهان آگوست آرفودسون",
      discoveryYear: "1817",
      nameOriginFa: "واژه یونانی lithos به معنای سنگ",
      namingExplanationFa:
        "بر خلاف سدیم و پتاسیم که از بقایای گیاهی جدا شدند، نخستین بار در کانی‌های سنگی کشف شد.",
    },
    applications: {
      industrial: [
        "باتری‌های قابل شارژ یون لیتیم برای خودروهای برقی و گوشی‌ها",
        "گریس‌های روان‌ساز دما بالا",
        "تولید سرامیک‌ها و شیشه‌های نسوز",
      ],
      scientific: [
        "تولید تریتیوم در رآکتورهای همجوشی با ایزوتوپ لیتیم-۶",
        "آلیاژهای بسیار سبک هوافضا با آلومینیم",
      ],
      medical: [
        "کربنات لیتیم به عنوان داروی پایدارکننده خلق در درمان اختلال دوقطبی",
      ],
      everyday: [
        "باتری‌های وسایل الکترونیکی روزمره",
        "باتری‌های سکه‌ای ساعت و سمعک",
      ],
    },
    safety: {
      toxicityFa:
        "سمیت در دوزهای بالا، اثرگذار بر تعادل الکترولیت‌های سلولی و کلیه",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "نگهداری غوطه‌ور زیر روغن معدنی یا در محیط گاز بی‌اثر آرگون.",
      hazardsFa:
        "واکنش شدید با رطوبت پوست و چشم، خطر اشتعال در معرض رطوبت هوا.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: ["⁷Li (۹۲.۴۱٪)", "⁶Li (۷.۵۹٪)"],
      mostStableIsotope: "⁷Li",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "سبک‌ترین فلز با بالاترین پتانسیل الکتروشیمیایی که پایه صنعت مدرن باتری و ذخیره انرژی است.",
      funFactsFa: [
        "چگالی آن تقریباً نصف آب است و حتی روی نفت سفید نیز شناور می‌ماند.",
        "شعله آن در آزمایش شعله به رنگ سرخ لاکی (زرشکی) درخشانی می‌سوزد.",
      ],
      naturalOccurrenceFa:
        "در شورابه‌های نمکی کویری و کانی‌های اسپودومن و لپیدولیت استخراج می‌شود.",
      keyCompoundsFa: [
        "کربنات لیتیم (Li₂CO₃)",
        "هیدروکسید لیتیم (LiOH)",
        "هیدرید لیتیم (LiH)",
        "کلرید لیتیم (LiCl)",
      ],
      educationalNotesFa:
        "به دلیل شعاع یونی بسیار کوچک، ویژگی‌های آن تا حدودی با منیزیم شباهت قطری دارد.",
    },
  },
  // Element 4: Be (بریلیم)
  {
    identity: {
      atomicNumber: 4,
      symbol: "Be",
      nameFa: "بریلیم",
      nameEn: "Beryllium",
      pronunciationFa: "بریلیوم",
      descriptionFa:
        "فلزی سبک با سختی و مدول کشسانی فوق‌العاده و شفافیت کم‌نظیر در برابر پرتوهای ایکس.",
    },
    classification: {
      group: 2,
      period: 2,
      block: "s",
      category: "alkaline-earth-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 4,
      electrons: 4,
      neutrons: 5,
      electronConfiguration: "1s² 2s²",
      abbreviatedConfiguration: "[He] 2s²",
      electronShells: [2, 2],
      valenceElectrons: 2,
      commonOxidationStates: [2],
      allOxidationStates: [2],
    },
    physicalProperties: {
      atomicMass: {
        value: 9.0122,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 112,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 96,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 1.85,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa: "فلز سخت، شکننده، خاکستری-فولادی با مدول الاستیسیته بالا",
      colorFa: "خاکستری تیره",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1560.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2742.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 1.825,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 200.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.57,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 899.5,
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
        "مقاوم در برابر اکسایش سطحی در هوا به دلیل تشکیل لایه محافظ اکسید BeO.",
      chemicalBehaviorFa:
        "پیوندهای آن به دلیل چگالی بار بالای کاتیون عمدتاً خصلت کووالانسی دارند و رفتاری آمفوتر نشان می‌دهد.",
    },
    history: {
      discovererFa: "لوئی نیکلا ووکلن",
      discoveryYear: "1798",
      nameOriginFa: "واژه یونانی beryllos (زمرد سبز یا بریل)",
      namingExplanationFa:
        "به دلیل جداسازی اولیه از سنگ‌های قیمتی بریل و زمرد.",
    },
    applications: {
      industrial: [
        "پنجره لوله‌های پرتو ایکس",
        "آلیاژ مس-بریلیم در ابزارهای ضدجرقه",
        "آینه‌های سازه‌ای تلسکوپ‌های فضایی نظیر جیمز وب",
      ],
      scientific: ["کندکننده و بازتاب‌دهنده نوترون در تأسیسات هسته‌ای"],
      medical: [
        "تجهیزات تخصصی تصویربرداری رادیولوژی به عنوان پنجره شفاف پرتو ایکس",
      ],
      everyday: ["فنرها و اتصالات الکترونیکی دقیق با استحکام خستگی بسیار بالا"],
    },
    safety: {
      toxicityFa: "فوق‌العاده سمی و سرطان‌زا در رده ۱ طبقه IARC",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کار با غبار آن مطلقاً باید درون هودهای ایزوله با فیلتر هپا صورت پذیرد.",
      hazardsFa:
        "بیماری مزمن بریلیوزیس، فیبروز ریوی غیرقابل درمان در اثر استنشاق حتی مقادیر ناچیز غبار.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["⁹Be (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "⁹Be",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلزی سبک با سختی و مدول کشسانی فوق‌العاده و شفافیت کم‌نظیر در برابر پرتوهای ایکس.",
      funFactsFa: [
        "سرعت انتشار صوت در بریلیم حدود ۱۲۸۹۰ متر بر ثانیه است که دو و نیم برابر فولاد است.",
        "در گذشته به دلیل طعم شیرین نمک‌هایش آن را گلوسینیم می‌نامیدند، اما این نمک‌ها کشنده هستند!",
      ],
      naturalOccurrenceFa:
        "در کانی‌های پگماتیتی گران‌قیمت بریل، فناکیت و برتراندیت یافت می‌شود.",
      keyCompoundsFa: [
        "اکسید بریلیم (BeO)",
        "کلرید بریلیم (BeCl₂)",
        "سولفات بریلیم (BeSO₄)",
      ],
      educationalNotesFa:
        "بریلیم با آلومینیم شباهت قطری دارد؛ هر دو اکسید آمفوتر تشکیل می‌دهند.",
    },
  },
  // Element 5: B (بور)
  {
    identity: {
      atomicNumber: 5,
      symbol: "B",
      nameFa: "بور",
      nameEn: "Boron",
      pronunciationFa: "بور",
      descriptionFa:
        "شبه‌فلز سخت و نسوز با توانایی منحصر‌به‌فرد در ساختارهای خوشه‌ای مولکولی و جذب نوترون.",
    },
    classification: {
      group: 13,
      period: 2,
      block: "p",
      category: "metalloid",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 5,
      electrons: 5,
      neutrons: 6,
      electronConfiguration: "1s² 2s² 2p¹",
      abbreviatedConfiguration: "[He] 2s² 2p¹",
      electronShells: [2, 3],
      valenceElectrons: 3,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 10.81,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 87,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 84,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 2.34,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "شبه‌فلز قهوه‌ای یا سیاه متبلور، بسیار سخت و عایق ضعیف الکتریسیته",
      colorFa: "سیاه مایل به قهوه‌ای",
      crystalStructureFa: "لوزی‌سطحی (رومبوهدرال)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2349.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 4200.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 1.026,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 27.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.04,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 800.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 26.7,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در دمای اتاق واکنش‌پذیری پایینی دارد؛ در دماهای بالا با اکسیژن و هالوژن‌ها ترکیب می‌شود.",
      chemicalBehaviorFa:
        "کمبود الکترون در پیوندها منجر به تشکیل خوشه‌های چنداتمی و پیوندهای سه‌مرکزی دوتایی (3c-2e) می‌شود.",
    },
    history: {
      discovererFa: "ژوزف لویی گیلوساک و لویی ژاک تنار",
      discoveryYear: "1808",
      nameOriginFa: "واژه عربی بورق (بوراکس)",
      namingExplanationFa:
        "برگرفته از نام کانی باستانی بوراکس که قرن‌ها در کیمیاگری و سفالگری استفاده می‌شد.",
    },
    applications: {
      industrial: [
        "تولید شیشه‌های بوروسیلیکاتی پیرکس مقاوم به شوک حرارتی",
        "فایبرگلاس عایق",
        "سرامیک‌های ضدگلوله کاربید بور",
      ],
      scientific: [
        "میله‌های کنترل جذب‌کننده نوترون در رآکتورهای هسته‌ای",
        "دوپانت نوع p در صنعت نیمه‌رساناها",
      ],
      medical: [
        "روش پرتودرمانی متمرکز گیراندازی نوترون با بور (BNCT) برای تومورهای مغزی",
      ],
      everyday: [
        "شوینده‌های خانگی بر پایه پربورات سدیم",
        "قطره‌های ضدعفونی‌کننده چشم اسید بوریک",
      ],
    },
    safety: {
      toxicityFa:
        "سمیت نسبتاً پایین در پستانداران؛ سمی برای گیاهان و حشرات در دوز بالا",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "جلوگیری از انتشار غبار و استفاده از عینک ایمنی در محیط صنعتی.",
      hazardsFa: "سوزش چشم و مخاط تنفسی در مواجهه با غبار غلیظ.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: [
        "¹¹B (۸۰.۱٪)",
        "¹⁰B (۱۹.۹٪ با سطح مقطع جذب نوترون بسیار بالا)",
      ],
      mostStableIsotope: "¹¹B",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "شبه‌فلز سخت و نسوز با توانایی منحصر‌به‌فرد در ساختارهای خوشه‌ای مولکولی و جذب نوترون.",
      funFactsFa: [
        "کاربید بور (B₄C) یکی از سخت‌ترین مواد ساخت بشر است و در جلیقه‌های زرهی ارتش به کار می‌رود.",
        "شعله ترکیبات بور هنگام سوختن به رنگ سبز زمردی بسیار شفافی تبدیل می‌شود.",
      ],
      naturalOccurrenceFa:
        "در رسوبات تبخیری نمکی و دریاچه‌های خشکیده به فرم بوراکس و کرنیت متمرکز است.",
      keyCompoundsFa: [
        "اسید بوریک (H₃BO₃)",
        "بوراکس (Na₂B₄O₇·10H₂O)",
        "نیترید بور (BN)",
        "دی‌بوران (B₂H₆)",
      ],
      educationalNotesFa:
        "مولکول BF₃ نمونه بارز مولکول‌های دارای کمبود الکترون و اسید لوئیس کلاسیک در شیمی است.",
    },
  },
  // Element 6: C (کربن)
  {
    identity: {
      atomicNumber: 6,
      symbol: "C",
      nameFa: "کربن",
      nameEn: "Carbon",
      pronunciationFa: "کَربُن",
      descriptionFa:
        "عنصر کلیدی شکل‌دهنده حیات ارگانیک و ستون فقرات شاخه شیمی آلی با تنوع میلیون‌ها ترکیب.",
    },
    classification: {
      group: 14,
      period: 2,
      block: "p",
      category: "nonmetal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 6,
      electrons: 6,
      neutrons: 6,
      electronConfiguration: "1s² 2s² 2p²",
      abbreviatedConfiguration: "[He] 2s² 2p²",
      electronShells: [2, 4],
      valenceElectrons: 4,
      commonOxidationStates: [4, -4, 2],
      allOxidationStates: [4, 3, 2, 1, 0, -1, -2, -3, -4],
    },
    physicalProperties: {
      atomicMass: {
        value: 12.011,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 67,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 76,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 2.267,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "جامد با دگرشکل‌های متنوع: گرافیت سیاه مات لغزنده و الماس بی‌رنگ شفاف فوق‌العاده سخت",
      colorFa: "سیاه (گرافیت) / شفاف بی‌رنگ (الماس)",
      crystalStructureFa: "شش‌گوشه لایه‌ای (گرافیت) / مکعبی الماسی (الماس)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 3800.0,
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
        value: 0.709,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 140.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.55,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1086.5,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 121.9,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در دمای اتاق غیرفعال است اما در حضور اکسیژن می‌سوزد و تولید CO و CO₂ می‌کند.",
      chemicalBehaviorFa:
        "ظرفیت ۴ با قابلیت تشکیل زنجیره‌ها و حلقه‌های پایدار کربن-کربن (پیوند یگانه، دوگانه و سه‌گانه).",
    },
    history: {
      discovererFa: "نامعلوم (شناخته شده از دوران باستان)",
      discoveryYear: "باستان",
      nameOriginFa: "واژه لاتین carbo به معنای زغال‌سنگ یا زغال چوب",
      namingExplanationFa:
        "برگرفته از نام کهن زغال در زبان لاتین و مصارف کهن آن در متالورژی.",
    },
    applications: {
      industrial: [
        "فولادسازی به عنوان عنصر اصلی آلیاژی",
        "الیاف کربن در هوافضا و اتومبیل‌رانی",
        "تایرسازی با استفاده از دوده کربن سیاه",
      ],
      scientific: [
        "نانولوله‌ها و ورقه‌های دوبعدی گرافن در الکترونیک نوین",
        "تاریخ‌گذاری رادیوکربن با کربن-۱۴",
      ],
      medical: ["کربن فعال برای درمان مسمومیت‌های حاد دارویی و گوارشی"],
      everyday: [
        "مغز مداد گرافیت",
        "سوخت‌های فسیلی (گاز، بنزین)",
        "پلاستیک‌ها، منسوجات و چرم مصنوعی",
      ],
    },
    safety: {
      toxicityFa:
        "کربن عنصری کاملاً غیرسمی و بی‌آزار است؛ مونوکسید کربن (CO) کشنده و سمی است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کنترل تهویه در کارگاه‌های دارای غبار کربن و احتراق ناکامل.",
      hazardsFa:
        "استنشاق طولانی‌مدت غبار زغال‌سنگ عامل بیماری سیاه شش (پنوموکونیوز).",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: [
        "¹²C (۹۸.۹۳٪ استاندارد جرم اتمی)",
        "¹³C (۱.۰۷٪ دارای اسپین هسته‌ای در NMR)",
        "¹⁴C (پرتوزا با نیمه‌عمر ۵۷۳۰ سال)",
      ],
      mostStableIsotope: "¹²C",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر کلیدی شکل‌دهنده حیات ارگانیک و ستون فقرات شاخه شیمی آلی با تنوع میلیون‌ها ترکیب.",
      funFactsFa: [
        "الماس سخت‌ترین ماده طبیعی جهان و گرافیت یکی از نرم‌ترین جامدات است و هر دو از کربن خالص تشکیل شده‌اند!",
        "گرافن که یک لایه منفرد از اتم‌های کربن است، ۲۰۰ برابر محکم‌تر از فولاد است.",
      ],
      naturalOccurrenceFa:
        "در تمام جانداران زنده، سنگ‌های کربناتی، جو زمین و ذخایر سوخت‌های فسیلی.",
      keyCompoundsFa: [
        "دی‌اکسید کربن (CO₂)",
        "متان (CH₄)",
        "کربنات کلسیم (CaCO₃)",
        "گلوکز (C₆H₁₂O₆)",
      ],
      educationalNotesFa:
        "جرم اتمی کربن-۱۲ طبق تعریف کنوانسیون بین‌المللی دقیقاً برابر با ۱۲ دالتون معین شده است.",
    },
  },
  // Element 7: N (نیتروژن)
  {
    identity: {
      atomicNumber: 7,
      symbol: "N",
      nameFa: "نیتروژن",
      nameEn: "Nitrogen",
      pronunciationFa: "نیتروژِن",
      descriptionFa:
        "عنصر فراوان اتمسفر زمین با پیوند سه‌گانه فوق‌العاده مستحکم و نقشی حیاتی در ساختار پروتئین‌ها و DNA.",
    },
    classification: {
      group: 15,
      period: 2,
      block: "p",
      category: "nonmetal",
      standardState: "gas",
    },
    atomicStructure: {
      protons: 7,
      electrons: 7,
      neutrons: 7,
      electronConfiguration: "1s² 2s² 2p³",
      abbreviatedConfiguration: "[He] 2s² 2p³",
      electronShells: [2, 5],
      valenceElectrons: 5,
      commonOxidationStates: [3, 5, -3],
      allOxidationStates: [5, 4, 3, 2, 1, -1, -2, -3],
    },
    physicalProperties: {
      atomicMass: {
        value: 14.007,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 56,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 71,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 1.2506,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "گاز دواتمی بی‌رنگ، بی‌بو، بی‌طعم و نسبتاً بی‌اثر در شرایط محیطی",
      colorFa: "بی‌رنگ",
      crystalStructureFa: "شش‌گوشه فشرده (در دمای زیر ۶۳ کلوین)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 63.15,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 77.36,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 1.04,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.02583,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 3.04,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1402.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -7.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در شرایط عادی به علت پیوند سه‌گانه N≡N بسیار ناپذیر است؛ در دما و فشار بالا با هیدروژن ترکیب می‌شود.",
      chemicalBehaviorFa:
        "گستره وسیع اکسایش از -۳ (در آمونیاک) تا +۵ (در اسید نیتریک) با پیوندهای کووالانسی چندگانه.",
    },
    history: {
      discovererFa: "دانیل رادرفورد",
      discoveryYear: "1772",
      nameOriginFa: "واژه یونانی nitron و genes به معنای شوره ساز",
      namingExplanationFa:
        "به دلیل وجود در نیترات پتاسیم (شوره باروت) و نقش در سنتز اسید نیتریک.",
    },
    applications: {
      industrial: [
        "تولید کودهای شیمیایی آمونیومی با سنتز هابر-بوش",
        "گاز محافظ بی‌اثر در بسته‌بندی مواد غذایی",
        "نیتروژن مایع در صنایع انجماد سریع",
      ],
      scientific: [
        "کرایوژنیک و نگهداری نمونه‌های زیستی و ژنتیکی در دمای ۷۷ کلوین",
      ],
      medical: [
        "کرایوتراپی برای از بین بردن زگیل‌ها و ضایعات پوستی با نیتروژن مایع",
      ],
      everyday: [
        "باد لاستیک هواپیماها و خودروها برای حفظ فشار پایدار",
        "بسته‌بندی چیپس و خوراکی‌ها",
      ],
    },
    safety: {
      toxicityFa: "بی‌ضرر در شرایط تنفسی معمول، گاز خالص خفه‌کننده است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "استفاده از دستکش عایق و محافظ صورت هنگام جابجایی نیتروژن مایع.",
      hazardsFa:
        "سوختگی بسیار شدید کرایوژنیک (انجماد بافتی) و خطر آسفیکسی در فضاهای بدون تهویه.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: ["¹⁴N (۹۹.۶۳۶٪)", "¹⁵N (۰.۳۶۴٪ به عنوان ردیاب ایزوتوپی)"],
      mostStableIsotope: "¹⁴N",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر فراوان اتمسفر زمین با پیوند سه‌گانه فوق‌العاده مستحکم و نقشی حیاتی در ساختار پروتئین‌ها و DNA.",
      funFactsFa: [
        "حدود ۷۸ درصد از حجم هوایی که تنفس می‌کنیم گاز نیتروژن است.",
        "فرآیند سنتز هابر برای تولید آمونیاک از نیتروژن هوا، غذای نزدیک به نیمی از جمعیت کنونی کره زمین را تأمین می‌کند.",
      ],
      naturalOccurrenceFa:
        "بخش اعظم اتمسفر زمین و موجود در خاک به شکل ترکیبات نیترات و نیتریت.",
      keyCompoundsFa: [
        "آمونیاک (NH₃)",
        "اسید نیتریک (HNO₃)",
        "دی‌نیتروژن مونوکسید (N₂O)",
        "نیتروگلیسیرین",
      ],
      educationalNotesFa:
        "انرژی پیوند N≡N حدود ۹۴۵ کیلوژول بر مول است که شکستن آن را بسیار انرژی‌بر می‌سازد.",
    },
  },
  // Element 8: O (اکسیژن)
  {
    identity: {
      atomicNumber: 8,
      symbol: "O",
      nameFa: "اکسیژن",
      nameEn: "Oxygen",
      pronunciationFa: "اکسیژِن",
      descriptionFa:
        "فراوان‌ترین عنصر در پوسته زمین و آب اقیانوس‌ها، پشتیبان فرآیند احتراق و شاهرگ تنفس حیات هوازی.",
    },
    classification: {
      group: 16,
      period: 2,
      block: "p",
      category: "nonmetal",
      standardState: "gas",
    },
    atomicStructure: {
      protons: 8,
      electrons: 8,
      neutrons: 8,
      electronConfiguration: "1s² 2s² 2p⁴",
      abbreviatedConfiguration: "[He] 2s² 2p⁴",
      electronShells: [2, 6],
      valenceElectrons: 6,
      commonOxidationStates: [-2],
      allOxidationStates: [2, 1, -1, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 15.999,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 48,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 66,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 1.429,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "گاز دواتمی بی‌رنگ، در حالت مایع به رنگ آبی کم‌رنگ و دارای خاصیت پارامغناطیس",
      colorFa: "بی‌رنگ (گاز) / آبی کم‌رنگ (مایع)",
      crystalStructureFa: "تک‌شیب (مونوکلینیک در دمای بسیار پایین)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 54.36,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 90.2,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.918,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.02658,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 3.44,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1313.9,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 141.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "بسیار واکنش‌پذیر و اکسیدکننده قوی که تقریباً با تمام عناصر دیگر ترکیب اکسید می‌دهد.",
      chemicalBehaviorFa:
        "تمایل شدید به جذب ۲ الکترون و تشکیل یون اکسید O²⁻ یا به اشتراک‌گذاری دو جفت الکترون.",
    },
    history: {
      discovererFa: "جوزف پریستلی و کارل ویلهلم شیله",
      discoveryYear: "1774",
      nameOriginFa: "واژه یونانی oxys و genes به معنای اسید ساز",
      namingExplanationFa:
        "آنتوان لاوازیه به اشتباه معتقد بود که وجود اکسیژن در تمامی اسیدها ضروری است.",
    },
    applications: {
      industrial: [
        "اکسیژن‌رسانی در کوره‌های متالورژی آهن و فولاد",
        "سنتز مواد شیمیایی اکسید اتیلن",
        "جوشکاری و برشکاری با مشعل اکسی-استیلن",
      ],
      scientific: [
        "اکسیدکننده سوخت پیشران موشک‌های فضاپیما (LOX)",
        "بررسی فرآیندهای تنفس سلولی",
      ],
      medical: ["اکسیژن‌درمانی تنفسی در اورژانس و مراقبت‌های ویژه بیمارستانی"],
      everyday: ["حیاتی برای تنفس انسان، جانوران و بقای اکوسیستم‌ها"],
    },
    safety: {
      toxicityFa:
        "حیاتی برای تنفس؛ استنشاق اکسیژن خالص با فشار جزئی بالا سمی است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "ممانعت مطلق از تماس اکسیژن فشرده با روغن، گریس و مواد هیدروکربنی به علت اشتعال خودبه‌خودی.",
      hazardsFa:
        "تسریع‌کننده وحشتناک اشتعال و انفجار در محیط‌های غنی از اکسیژن.",
    },
    isotopes: {
      stableCount: 3,
      commonIsotopes: [
        "¹⁶O (۹۹.۷۶٪)",
        "¹⁸O (۰.۲۰٪ برای سنجش دیرینه‌اقلیم‌شناسی)",
        "¹⁷O (۰.۰۴٪)",
      ],
      mostStableIsotope: "¹⁶O",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فراوان‌ترین عنصر در پوسته زمین و آب اقیانوس‌ها، پشتیبان فرآیند احتراق و شاهرگ تنفس حیات هوازی.",
      funFactsFa: [
        "اکسیژن مایع به دلیل داشتن الکترون‌های جفت‌نشده خاصیت پارامغناطیس دارد و جذب آهنربا می‌شود.",
        "دگرشکل اوزون (O₃) در لایه استراتوسفر پرتوهای زیان‌بار فرابنفش خورشید را جذب می‌کند.",
      ],
      naturalOccurrenceFa:
        "تشکیل‌دهنده ۲۱ درصد حجم جو، ۸۹ درصد جرم اقیانوس‌ها و ۴۶ درصد پوسته زمین.",
      keyCompoundsFa: [
        "آب (H₂O)",
        "دی‌اکسید کربن (CO₂)",
        "سیلیسیم دی‌اکسید (SiO₂)",
        "اکسید آهن (Fe₂O₃)",
      ],
      educationalNotesFa:
        "نظریه اوربیتال مولکولی (MOT) پارامغناطیس بودن مولکول O₂ را بر خلاف ساختار لوئیس به درستی توجیه می‌کند.",
    },
  },
  // Element 9: F (فلوئور)
  {
    identity: {
      atomicNumber: 9,
      symbol: "F",
      nameFa: "فلوئور",
      nameEn: "Fluorine",
      pronunciationFa: "فلوئور",
      descriptionFa:
        "الکترونگاتیوترین و اکسیدکننده‌ترین عنصر طبیعت که حتی قادر به واکنش با آب، شیشه و فلزات مقاوم است.",
    },
    classification: {
      group: 17,
      period: 2,
      block: "p",
      category: "halogen",
      standardState: "gas",
    },
    atomicStructure: {
      protons: 9,
      electrons: 9,
      neutrons: 10,
      electronConfiguration: "1s² 2s² 2p⁵",
      abbreviatedConfiguration: "[He] 2s² 2p⁵",
      electronShells: [2, 7],
      valenceElectrons: 7,
      commonOxidationStates: [-1],
      allOxidationStates: [-1],
    },
    physicalProperties: {
      atomicMass: {
        value: 18.9984,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 42,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 57,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 1.696,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "گاز دواتمی زرد کم‌رنگ مایل به سبز با بوی تند، بسیار خورنده و خفه‌کننده",
      colorFa: "زرد کم‌رنگ",
      crystalStructureFa: "تک‌شیب (مونوکلینیک در دمای بسیار پایین)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 53.53,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 85.03,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.824,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.0277,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 3.98,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1681.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 328.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "واکنش‌پذیرترین و مهاجم‌ترین عنصر جدول تناوبی؛ تقریباً با کلیه مواد آلی و معدنی مشتعل می‌شود.",
      chemicalBehaviorFa:
        "بالاترین الکترونگاتیوی را دارد و در کلیه ترکیبات خود منحصراً عدد اکسایش منفی یک اتخاذ می‌کند.",
    },
    history: {
      discovererFa: "آنری مواسان",
      discoveryYear: "1886",
      nameOriginFa: "واژه لاتین fluere به معنای جریان یافتن و گداختن",
      namingExplanationFa:
        "برگرفته از نام کانی فلوئوریت که به عنوان کمک‌ذوب روان‌کننده در کوره‌ها استفاده می‌شد.",
    },
    applications: {
      industrial: [
        "تولید پلیمر نسوز تفلون (PTFE)",
        "تولید گاز عایق ترانسفورماتورها SF₆",
        "غنی‌سازی اورانیم از طریق سنتز گاز UF₆",
      ],
      scientific: [
        "حکاکی شیمیایی سیلیکون در خطوط تولید میکروچیپ‌ها با پلاسمای فلوئور",
      ],
      medical: [
        "داروسازی و بیهوشی (گازهای فلوئوردار مانند ایزوفلوران) و رادیوداروی FDG در پت اسکن",
      ],
      everyday: ["خمیردندان‌های حاوی فلوئورید سدیم برای استحکام مینای دندان"],
    },
    safety: {
      toxicityFa: "فوق‌العاده سمی و مرگ‌آور، مخرب شدید ریه و غشاهای مخاطی",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "نگهداری صرفاً در تجهیزات غیرقابل نفوذ از جنس مونل، نیکل یا تفلون با آموزش‌های پیشرفته.",
      hazardsFa:
        "ایجاد سوختگی‌های بسیار عمیق و دردناک بافتی و تخریب کلسیم استخوان توسط یون فلوئورید.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["¹⁹F (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "¹⁹F",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "الکترونگاتیوترین و اکسیدکننده‌ترین عنصر طبیعت که حتی قادر به واکنش با آب، شیشه و فلزات مقاوم است.",
      funFactsFa: [
        "آنری مواسان برای جداسازی فلوئور پس از دهه‌ها شکست شیمی‌دان‌های قبلی جایزه نوبل شیمی ۱۹۰۶ را گرفت.",
        "پیوند کربن-فلوئور یکی از مستحکم‌ترین پیوندهای شیمی آلی است که تفلون را در برابر اسیدها مصون می‌سازد.",
      ],
      naturalOccurrenceFa:
        "به دلیل واکنش‌پذیری بالا هرگز آزاد نیست؛ در کانی‌های فلوئوریت، فلوروآپاتیت و کریولیت یافت می‌شود.",
      keyCompoundsFa: [
        "هیدروژن فلوئورید (HF)",
        "تترافلوئورواتیلن (تفلون)",
        "هگزافلوئورید گوگرد (SF₆)",
        "فلوئورید سدیم (NaF)",
      ],
      educationalNotesFa:
        "فلوئور به دلیل ابعاد کوچک اتم و دافعه زیاد میان جفت‌الکترون‌های ناپیوندی، انرژی پیوند F-F کمتری نسبت به Cl-Cl دارد.",
    },
  },
  // Element 10: Ne (نئون)
  {
    identity: {
      atomicNumber: 10,
      symbol: "Ne",
      nameFa: "نئون",
      nameEn: "Neon",
      pronunciationFa: "نِئون",
      descriptionFa:
        "دومین گاز نجیب سبک با هشت‌تایی پایدار و نوری گیرا و سرخ‌رنگ در ولتاژ الکتریکی.",
    },
    classification: {
      group: 18,
      period: 2,
      block: "p",
      category: "noble-gas",
      standardState: "gas",
    },
    atomicStructure: {
      protons: 10,
      electrons: 10,
      neutrons: 10,
      electronConfiguration: "1s² 2s² 2p⁶",
      abbreviatedConfiguration: "[He] 2s² 2p⁶",
      electronShells: [2, 8],
      valenceElectrons: 8,
      commonOxidationStates: [0],
      allOxidationStates: [0],
    },
    physicalProperties: {
      atomicMass: {
        value: 20.18,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 38,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 58,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 0.9002,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "گاز نجیب بی‌رنگ، بی‌بو با درخشش نارنجی-قرمز شاخص در تخلیه الکتریکی",
      colorFa: "بی‌رنگ (نارنجی-قرمز در تخلیه پلاسما)",
      crystalStructureFa: "مکعبی مرکزپر (fcc در فاز جامد برودتی)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 24.56,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 27.07,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 1.03,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.0491,
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
        value: 2080.7,
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
        "کاملاً بی‌اثر از نظر شیمیایی؛ دارای هشت‌تایی پایدار کامل در لایه ظرفیت دوم.",
      chemicalBehaviorFa:
        "هیچ ترکیب شیمیایی خنثی با پیوند کووالانسی واقعی تشکیل نمی‌دهد.",
    },
    history: {
      discovererFa: "ویلیام رمزی و موریس تراورز",
      discoveryYear: "1898",
      nameOriginFa: "واژه یونانی neos به معنای نو یا تازه",
      namingExplanationFa:
        "به عنوان گازی جدید در باقیمانده تبخیر هوای مایع شناسایی و نام‌گذاری گردید.",
    },
    applications: {
      industrial: [
        "تابلوهای تبلیغاتی و لامپ‌های نئون پرنور",
        "لیزرهای هلیم-نئون (He-Ne) در بارکدخوان‌ها و ابزارهای ترازسنجی",
        "مایع خنک‌کننده برودتی کارآمد",
      ],
      scientific: [
        "شاخص‌های ولتاژ بالا و لوله‌های تخلیه گاز در آزمایشگاه‌های فیزیک",
      ],
      medical: ["لیزرهای هلیم-نئون در چشم‌پزشکی برای جراحی‌های ظریف شبکیه"],
      everyday: ["چراغ‌های شب‌نما و تزئینات نوری معابر و فروشگاه‌ها"],
    },
    safety: {
      toxicityFa: "کاملاً غیرسمی و بدون خطر فیزیولوژیکی مستقیم",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "تهویه کافی در مخازن ذخیره برای جلوگیری از افت اکسیژن.",
      hazardsFa:
        "جابجایی سریع هوا و خطر خفگی در صورت انتشار گسترده در فضای بسته.",
    },
    isotopes: {
      stableCount: 3,
      commonIsotopes: ["²⁰Ne (۹۰.۴۸٪)", "²²Ne (۹.۲۵٪)", "²¹Ne (۰.۲۷٪)"],
      mostStableIsotope: "²⁰Ne",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "دومین گاز نجیب سبک با هشت‌تایی پایدار و نوری گیرا و سرخ‌رنگ در ولتاژ الکتریکی.",
      funFactsFa: [
        "ظرفیت مبرد نئون مایع در هر واحد حجم، سه برابر بیشتر از هیدروژن مایع و بیش از ۴۰ برابر هلیم مایع است.",
        "با اینکه در زمین کمیاب است، پنجمین عنصر فراوان در کیهان پس از هیدروژن، هلیم، اکسیژن و کربن است.",
      ],
      naturalOccurrenceFa:
        "تنها حدود ۱۸ قسمت در میلیون در جو زمین وجود دارد و از تقطیر جزءبه‌جزء هوا استخراج می‌شود.",
      keyCompoundsFa: ["هیچ ترکیب شیمیایی خنثی و پایداری در شرایط معمول ندارد"],
      educationalNotesFa:
        "آرایش 2s² 2p⁶ نئون تعریف پایه‌ای هشت‌تایی پایدار و الگو برای سایر اتم‌ها در قاعده اکتت است.",
    },
  },
];
