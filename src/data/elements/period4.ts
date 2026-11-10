import { ChemicalElement } from "@/types/element";

/**
 * Period 4 Elements (Total: 18)
 * Marslement - Chemical Database
 */
export const PERIOD_4_ELEMENTS: ChemicalElement[] = [
  // Element 19: K (پتاسیم)
  {
    identity: {
      atomicNumber: 19,
      symbol: "K",
      nameFa: "پتاسیم",
      nameEn: "Potassium",
      pronunciationFa: "پُتاسیُم",
      descriptionFa:
        "عنصر کلیدی کشاورزی جهان و کاتیون اصلی درون‌سلولی بدن انسان برای هدایت پیام‌های عصبی و انقباض قلب.",
    },
    classification: {
      group: 1,
      period: 4,
      block: "s",
      category: "alkali-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 19,
      electrons: 19,
      neutrons: 20,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
      abbreviatedConfiguration: "[Ar] 4s¹",
      electronShells: [2, 8, 8, 1],
      valenceElectrons: 1,
      commonOxidationStates: [1],
      allOxidationStates: [1, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 39.098,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 227,
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
        value: 0.862,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای بسیار نرم با چگالی کمتر از آب که با شعله بنفش می‌سوزد",
      colorFa: "نقره‌ای مات",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 336.53,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1032.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.757,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 102.5,
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
        value: 418.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 48.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "واکنش بسیار خشن و انفجاری با آب، اشتعال هیدروژن با شعله بنفش یاسی.",
      chemicalBehaviorFa:
        "از دست دادن آسان الکترون 4s¹ و تشکیل یون یک‌بار مثبت K⁺ با شعاع هیدراته کوچک‌تر از سدیم.",
    },
    history: {
      discovererFa: "همفری دیوی",
      discoveryYear: "1807",
      nameOriginFa: "واژه آلمانی Potasche (خاکستر گلدان) و عربی القلی (Alkali)",
      namingExplanationFa:
        "نماد K از واژه عربی القلی (کالیوم) که به خاکستر گیاهی اشاره دارد گرفته شده است.",
    },
    applications: {
      industrial: [
        "کودهای کشاورزی پتاس (NPK) برای تغذیه و استحکام ریشه گیاهان",
        "تولید صابون‌های مایع نرم با هیدروکسید پتاسیم",
        "شیشه‌های مقاوم ویژه تلویزیون و اپتیک",
      ],
      scientific: [
        "زمان‌سنجی پتاسیم-آرگون در ژئولوژی دیرینه",
        "آلیاژ سدیم-پتاسیم (NaK) به عنوان خنک‌کننده مایع در دمای اتاق",
      ],
      medical: [
        "تثبیت ریتم قلب و پتانسیل استراحت غشای سلول‌ها با تزریق وریدی کلرید پتاسیم کنترل‌شده",
      ],
      everyday: ["موز و مرکبات غنی از پتاسیم", "نمک کم‌سدیم رژیمی (KCl)"],
    },
    safety: {
      toxicityFa:
        "حیاتی برای فیزیولوژی؛ افزایش حاد یون K⁺ در خون موجب ایست قلبی می‌شود",
      radioactivity: false,
      radiationType: "پرتوزایی طبیعی ناچیز (ایزوتوپ ⁴⁰K)",
      precautionsFa:
        "نگهداری انحصاری غوطه‌ور در روغن معدنی خشک دور از هوا و رطوبت.",
      hazardsFa:
        "واکنش انفجاری با آب و تولید گاز هیدروژن مشتعل و محلول قلیایی بسیار سوزاننده.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: [
        "³⁹K (۹۳.۲۶٪)",
        "⁴¹K (۶.۷۳٪)",
        "⁴⁰K (۰.۰۱۲٪ رادیواکتیو با نیمه‌عمر ۱.۲۵ میلیارد سال)",
      ],
      mostStableIsotope: "³⁹K",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر کلیدی کشاورزی جهان و کاتیون اصلی درون‌سلولی بدن انسان برای هدایت پیام‌های عصبی و انقباض قلب.",
      funFactsFa: [
        "بدن یک انسان بالغ حدود ۱۴۰ گرم پتاسیم دارد و به دلیل ایزوتوپ پتاسیم-۴۰ ثانیه‌ای چند هزار واپاشی رادیواکتیو طبیعی در بدن رخ می‌دهد!",
        "شعله آن در تست شعله بنفش یاسی ملایم است.",
      ],
      naturalOccurrenceFa:
        "هفتمین عنصر فراوان در پوسته زمین در کانی‌های سیلویت و کارنالیت.",
      keyCompoundsFa: [
        "کلرید پتاسیم (KCl)",
        "هیدروکسید پتاسیم (KOH)",
        "نیترات پتاسیم (شوره، KNO₃)",
        "کربنات پتاسیم (K₂CO₃)",
      ],
      educationalNotesFa:
        "تراکم پتاسیم درون سلول‌ها حدود ۳۰ برابر بیشتر از مایع بین‌سلولی است که توسط پمپ سدیم-پتاسیم تثبیت می‌شود.",
    },
  },
  // Element 20: Ca (کلسیم)
  {
    identity: {
      atomicNumber: 20,
      symbol: "Ca",
      nameFa: "کلسیم",
      nameEn: "Calcium",
      pronunciationFa: "کَلسیُم",
      descriptionFa:
        "فراوان‌ترین فلز در بدن انسان، بلوک ساختمانی استخوان‌ها و دندان‌ها و پیام‌رسان دوم حیاتی در انقباض عضلات.",
    },
    classification: {
      group: 2,
      period: 4,
      block: "s",
      category: "alkaline-earth-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 20,
      electrons: 20,
      neutrons: 20,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
      abbreviatedConfiguration: "[Ar] 4s²",
      electronShells: [2, 8, 8, 2],
      valenceElectrons: 2,
      commonOxidationStates: [2],
      allOxidationStates: [2],
    },
    physicalProperties: {
      atomicMass: {
        value: 40.078,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 197,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 174,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 1.54,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای نرم با جلای زرد کم‌رنگ که در مجاورت هوا کدر می‌شود",
      colorFa: "نقره‌ای مایل به خاکستری",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1115.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1757.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.647,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 201.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.0,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 589.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 2.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "با آب واکنش داده و گاز هیدروژن و محلول شیری‌رنگ هیدروکسید کلسیم تولید می‌کند.",
      chemicalBehaviorFa:
        "از دست دادن آسان دو الکترون 4s² و ایجاد کاتیون Ca²⁺ که پیوندهای یونی قوی در ساختارهای اسکلتی پدید می‌آورد.",
    },
    history: {
      discovererFa: "همفری دیوی",
      discoveryYear: "1808",
      nameOriginFa: "واژه لاتین calx به معنای آهک",
      namingExplanationFa:
        "نام‌گذاری بر پایه آهک باستانی (اکسید کلسیم) که هزاران سال در ملات‌های ساختمانی کاربرد داشته است.",
    },
    applications: {
      industrial: [
        "تولید سیمان پرتلند، بتن و ملات‌های ساختمانی",
        "آهک‌زنی در صنایع فولاد برای حذف ناخالصی‌های گوگرد و فسفر",
        "عامل احیاکننده در استخراج فلزات سنگین مانند اورانیم",
      ],
      scientific: [
        "تثبیت پیوند در بیوشیمی پروتئین‌ها و انتقال پیام‌های درون‌سلولی کلسیمی",
      ],
      medical: [
        "قرص‌های مکمل کلسیم-د۳ برای پیشگیری و درمان پوکی استخوان",
        "تثبیت غشای میوکارد در سمیت پتاسیم",
      ],
      everyday: [
        "گچ دیوار و آتله‌های پزشکی (سولفات کلسیم)",
        "شیر و پنیر و محصولات لبنی",
      ],
    },
    safety: {
      toxicityFa:
        "ماده مغذی غیرسمی و ضروری؛ غلظت بالای آن در خون سنگ کلیه ایجاد می‌کند",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "آهک زنده (CaO) به دلیل واکنش گرمازای شدید با آب نباید بدون دستکش و عینک لمس شود.",
      hazardsFa: "سوختگی شیمیایی شدید چشم و پوست ناشی از تماس با گرد آهک زنده.",
    },
    isotopes: {
      stableCount: 6,
      commonIsotopes: [
        "⁴⁰Ca (۹۶.۹۴٪ ایزوتوپ دوبرابر جادویی)",
        "⁴⁴Ca (۲.۰۹٪)",
        "⁴²Ca (۰.۶۵٪)",
      ],
      mostStableIsotope: "⁴⁰Ca",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فراوان‌ترین فلز در بدن انسان، بلوک ساختمانی استخوان‌ها و دندان‌ها و پیام‌رسان دوم حیاتی در انقباض عضلات.",
      funFactsFa: [
        "بیش از ۹۹ درصد کلسیم بدن انسان در استخوان‌ها و دندان‌ها قرار دارد که اسکلت پایدار را می‌سازند.",
        "سنگ‌های آهکی و غارهای کارستی با انحلال و رسوب کربنات کلسیم طی میلیون‌ها سال شکل گرفته‌اند.",
      ],
      naturalOccurrenceFa:
        "پنجمین عنصر فراوان پوسته زمین و فراوان‌ترین فلز در سنگ‌های رسوبی و آهکی مانند کلسیت و دولومیت.",
      keyCompoundsFa: [
        "کربنات کلسیم (CaCO₃)",
        "اکسید کلسیم (آهک زنده، CaO)",
        "هیدروکسید کلسیم (آهک مرده، Ca(OH)₂)",
        "سولفات کلسیم (گچ، CaSO₄·2H₂O)",
      ],
      educationalNotesFa:
        "هسته کلسیم-۴۰ دارای ۲۰ پروتون و ۲۰ نوترون است؛ هر دو لایه هسته‌ای پر بوده و اصطلاحاً هسته «دوبرابر جادویی» پایداری خارق‌العاده دارد.",
    },
  },
  // Element 21: Sc (اسکاندیم)
  {
    identity: {
      atomicNumber: 21,
      symbol: "Sc",
      nameFa: "اسکاندیم",
      nameEn: "Scandium",
      pronunciationFa: "اسکاندیُم",
      descriptionFa:
        "نخستین فلز واسطه جدول تناوبی که مندلیف وجود آن را با نام «اکا-بور» با دقتی شگفت‌انگیز پیش‌بینی کرده بود.",
    },
    classification: {
      group: 3,
      period: 4,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 21,
      electrons: 21,
      neutrons: 24,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²",
      abbreviatedConfiguration: "[Ar] 3d¹ 4s²",
      electronShells: [2, 8, 9, 2],
      valenceElectrons: 3,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 44.956,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 162,
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
        value: 2.985,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نرم، نقره‌ای-سفید با خصلت شبه‌لانتانیدی و وزن مخصوص کم",
      colorFa: "نقره‌ای مایل به زرد",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1814.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3109.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.568,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 15.8,
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
        value: 633.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 18.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در مجاورت هوا کدر شده و با آب به آرامی واکنش داده و با اسیدها به سرعت حل می‌شود.",
      chemicalBehaviorFa:
        "تنها حالت اکسایش پایدار آن +۳ است و آرایش گاز نجیب آرگون را با از دست دادن 3d¹ 4s² به دست می‌آورد.",
    },
    history: {
      discovererFa: "لارس فردریک نیلسون",
      discoveryYear: "1879",
      nameOriginFa: "منطقه اسکاندیناوی (Scandinavia)",
      namingExplanationFa:
        "توسط نیلسون به افتخار زادگاهش شبه‌جزیره اسکاندیناوی که سنگ‌های معدنی آن را در آنجا یافت نام‌گذاری شد.",
    },
    applications: {
      industrial: [
        "آلیاژهای سبک هوافضا با آلومینیم برای جنگنده‌های نظامی",
        "لامپ‌های متال هالید با نور بسیار شبیه به نور خورشید در استودیوها",
        "پیل‌های سوختی اکسید جامد (SOFC)",
      ],
      scientific: [
        "ردیاب ایزوتوپی اسکاندیم-۴۶ در پالایشگاه‌های نفت برای ردیابی جریان در لوله‌ها",
      ],
      medical: ["بررسی داربست‌های استخوانی نوین با پوشش‌های اکسید اسکاندیم"],
      everyday: [
        "فریم چوب‌های بیسبال و فریم دوچرخه‌های مسابقه‌ای با آلیاژ اسکاندیم-آلومینیم",
      ],
    },
    safety: {
      toxicityFa: "سمیت در دوزهای کم گزارش نشده؛ مشکوک به سمیت در مقادیر بالا",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "کنترل تهویه محیط در برابر استنشاق غبار اکسید اسکاندیم.",
      hazardsFa: "تحریک غشاهای تنفسی و چشم.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["⁴⁵Sc (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "⁴⁵Sc",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "نخستین فلز واسطه جدول تناوبی که مندلیف وجود آن را با نام «اکا-بور» با دقتی شگفت‌انگیز پیش‌بینی کرده بود.",
      funFactsFa: [
        "افزودن تنها ۰.۵ درصد اسکاندیم به آلومینیم، مقاومت کششی آن را به طور چشمگیری افزایش داده و قابلیت جوش‌پذیری عالی به آن می‌بخشد.",
        "یکی از عناصر پیش‌بینی شده توسط دیمیتری مندلیف پیش از کشف تجربی بود.",
      ],
      naturalOccurrenceFa:
        "بسیار پراکنده در زمین و فاقد کانسارهای غنی متمرکز؛ عمدتاً در تورتویتیت استخراج می‌شود.",
      keyCompoundsFa: [
        "اکسید اسکاندیم (Sc₂O₃)",
        "کلرید اسکاندیم (ScCl₃)",
        "نیترات اسکاندیم (Sc(NO₃)₃)",
      ],
      educationalNotesFa:
        "اسکاندیم با وجود قرارگیری در بلوک d، به دلیل داشتن تنها یون بی‌رنگ Sc³⁺ با اوربیتال d کاملاً خالی، رفتاری شبیه آلومینیم و لانتانیدها نشان می‌دهد.",
    },
  },
  // Element 22: Ti (تیتانیم)
  {
    identity: {
      atomicNumber: 22,
      symbol: "Ti",
      nameFa: "تیتانیم",
      nameEn: "Titanium",
      pronunciationFa: "تیتانیُم",
      descriptionFa:
        "فلز شگفت‌انگیز عصر مدرن با نسبت استحکام به وزن همپای فولاد اما ۴۵ درصد سبک‌تر و زیست‌سازگاری استثنایی با بدن.",
    },
    classification: {
      group: 4,
      period: 4,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 22,
      electrons: 22,
      neutrons: 26,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²",
      abbreviatedConfiguration: "[Ar] 3d² 4s²",
      electronShells: [2, 8, 10, 2],
      valenceElectrons: 4,
      commonOxidationStates: [4],
      allOxidationStates: [4, 3, 2, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 47.867,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 147,
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
        value: 4.506,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز براق، نقره‌ای، سبک با استحکام ویژه فوق‌العاده بالا و مقاومت بی‌همتا در برابر خوردگی",
      colorFa: "نقره‌ای متالیک",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1941.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3560.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.523,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 21.9,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.54,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 658.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 7.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "غیرفعال در برابر خوردگی آب دریا و اسیدها به دلیل تشکیل فوری لایه سطحی فوق‌العاده چسبنده TiO₂.",
      chemicalBehaviorFa:
        "حالت اکسایش پایدار +۴ در TiO₂ و تشکیل هالیدهای کووالانسی نظیر TiCl₄ مایع.",
    },
    history: {
      discovererFa: "ویلیام گرگور و مارتین هاینریش کلاپروت",
      discoveryYear: "1791",
      nameOriginFa: "تایتان‌ها (Titans) غول‌های اساطیر یونان باستان",
      namingExplanationFa:
        "کلاپروت به دلیل قدرت کششی شگفت‌انگیز و پیوند محکم آن با اکسیژن نام غول‌های اساطیری را بر آن نهاد.",
    },
    applications: {
      industrial: [
        "موتورهای جت و بدنه فضاپیماها و زیردریایی‌های نظامی",
        "پیگمنت رنگدانه‌های سفید دی‌اکسید تیتانیم در رنگ، کاغذ و پلاستیک",
        "تأسیسات آب‌شیرین‌کن ساحلی مقاوم به آب شور",
      ],
      scientific: [
        "کاتالیزورهای زیگلر-ناتا برای پلیمریزاسیون و تولید انبوه پلی‌اتیلن و پلی‌پروپیلن",
      ],
      medical: [
        "ایمپلنت‌های دندانی و مفاصل مصنوعی ارتوپدی به دلیل زیست‌سازگاری کامل با استخوان انسان",
      ],
      everyday: [
        "کرم‌های ضدآفتاب حاوی نانوذرات TiO₂ برای سد پرتوهای فرابنفش",
        "قاب ساعت‌ها و عینک‌های گران‌قیمت تیتانیومی",
      ],
    },
    safety: {
      toxicityFa: "کاملاً خنثی از نظر زیستی و بدون سمیت",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "تراشه‌ها و براده‌های تیتانیم در مجاورت جرقه به راحتی مشتعل می‌شوند.",
      hazardsFa: "خطر آتش‌سوزی براده‌های فلزی تیتانیم با دمای بسیار بالا.",
    },
    isotopes: {
      stableCount: 5,
      commonIsotopes: [
        "⁴⁸Ti (۷۳.۷۲٪)",
        "⁴⁶Ti (۸.۲۵٪)",
        "⁴⁷Ti (۷.۴۴٪)",
        "⁴⁹Ti (۵.۴۱٪)",
        "⁵⁰Ti (۵.۱۸٪)",
      ],
      mostStableIsotope: "⁴⁸Ti",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز شگفت‌انگیز عصر مدرن با نسبت استحکام به وزن همپای فولاد اما ۴۵ درصد سبک‌تر و زیست‌سازگاری استثنایی با بدن.",
      funFactsFa: [
        "استخوان‌های بدن انسان می‌توانند مستقیماً روی سطح تیتانیم رشد کرده و با آن پیوند بخورند (پدیده یکپارچگی استخوانی).",
        "دی‌اکسید تیتانیم (TiO₂) درخشان‌ترین و سفیدترین رنگدانه شناخته‌شده در جهان است.",
      ],
      naturalOccurrenceFa:
        "نهمین عنصر فراوان پوسته زمین که در کانی‌های روتیل و ایلمنیت استخراج می‌شود.",
      keyCompoundsFa: [
        "دی‌اکسید تیتانیم (TiO₂)",
        "تتراکلرید تیتانیم (TiCl₄)",
        "نیترید تیتانیم طلایی‌رنگ (TiN)",
      ],
      educationalNotesFa:
        "روش کرول (Kroll process) با احیای تتراکلرید تیتانیم توسط منیزیم مذاب در محیط آرگون، روش اصلی صنعتی تولید تیتانیم اسفنجی است.",
    },
  },
  // Element 23: V (وانادیم)
  {
    identity: {
      atomicNumber: 23,
      symbol: "V",
      nameFa: "وانادیم",
      nameEn: "Vanadium",
      pronunciationFa: "وانادیُم",
      descriptionFa:
        "فلز تقویت‌کننده فولادهای مهندسی با رنگین‌کمانی از رنگ‌های شیمیایی و قلب باتری‌های جریان ردوکس نوین.",
    },
    classification: {
      group: 5,
      period: 4,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 23,
      electrons: 23,
      neutrons: 28,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²",
      abbreviatedConfiguration: "[Ar] 3d³ 4s²",
      electronShells: [2, 8, 11, 2],
      valenceElectrons: 5,
      commonOxidationStates: [5, 4],
      allOxidationStates: [5, 4, 3, 2, 0, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 50.942,
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
        value: 6.11,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز سخت، شکل‌پذیر، خاکستری فولادی با درخشش زیبا و رنگ‌های متنوع در محلول‌های آبی",
      colorFa: "خاکستری مایل به آبی",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2183.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3680.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.489,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 30.7,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.63,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 650.9,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 50.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر اسید هیدروکلریک و سولفوریک مقاوم است؛ در دمای بالا با اکسیژن و نیتروژن ترکیب می‌شود.",
      chemicalBehaviorFa:
        "دارای چهار حالت اکسایش متوالی پایدار (+۲ بنفش، +۳ سبز، +۴ آبی، +۵ زرد) با رنگ‌های چشم‌نواز در آب.",
    },
    history: {
      discovererFa: "آندرس مانوئل دل ریو و نیلس گابریل سفستروم",
      discoveryYear: "1801",
      nameOriginFa: "وانادیس (Vanadis) الهه زیبایی در اساطیر اسکاندیناوی",
      namingExplanationFa:
        "به دلیل رنگ‌های گوناگون و بسیار درخشان ترکیبات شیمیایی آن در درجات مختلف اکسایش.",
    },
    applications: {
      industrial: [
        "آلیاژ فررووانادیم برای تولید فولادهای فنری فوق‌سخت ابزارسازی و پل‌سازی",
        "کاتالیزور پنتاکسید وانادیم (V₂O₅) در تولید اسید سولفوریک",
        "باتری‌های اکسایش-کاهش وانادیمی (VRFB) برای ذخیره انرژی نیروگاه‌های خورشیدی و بادی",
      ],
      scientific: [
        "ترکیبات ابررسانای وانادیم-گالیم با میدان‌های مغناطیسی بسیار قدرتمند",
      ],
      medical: [
        "بررسی ترکیبات وانادات به عنوان شبیه‌ساز اثر انسولین در بیماران دیابتی",
      ],
      everyday: [
        "آچارهای فولاد کروم-وانادیم (Cr-V)",
        "فنر خودروها و محور چرخ‌دنده‌ها",
      ],
    },
    safety: {
      toxicityFa: "سمیت متوسط تا بالا در ترکیبات والانس +۵ (V₂O₅)",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کنترل استنشاق غبار پنتاکسید وانادیم در خطوط تولید کاتالیزور.",
      hazardsFa: "تحریک شدید ریه و زبان سبز مایل به سیاه در مسمومیت شغلی.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["⁵¹V (۹۹.۷۵٪)", "⁵⁰V (۰.۲۵٪ با نیمه‌عمر بسیار طولانی)"],
      mostStableIsotope: "⁵¹V",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز تقویت‌کننده فولادهای مهندسی با رنگین‌کمانی از رنگ‌های شیمیایی و قلب باتری‌های جریان ردوکس نوین.",
      funFactsFa: [
        "هنری فورد برای نخستین بار در شاسی خودروی افسانه‌ای فورد مدل T از فولاد وانادیمی استفاده کرد که وزن را به نصف کاهش داد.",
        "محلول‌های وانادیم در آزمایشگاه با تغییر عدد اکسایش از زرد (+۵) به آبی (+۴) و سبز (+۳) و بنفش (+۲) تبدیل می‌شوند.",
      ],
      naturalOccurrenceFa:
        "در بیش از ۶۵ کانی مختلف نظیر وانادینیت و کارنوتیت و همراه با نفت خام سنگین وجود دارد.",
      keyCompoundsFa: [
        "پنتاکسید وانادیم (V₂O₅)",
        "تتراکلرید وانادیم (VCl₄)",
        "وانادیل سولفات (VOSO₄)",
      ],
      educationalNotesFa:
        "باتری جریان اکسایش-کاهش وانادیم از خاصیت تغییر عدد اکسایش این عنصر در هر دو الکترود مثبت و منفی بدون آلودگی متقابل بهره می‌برد.",
    },
  },
  // Element 24: Cr (کروم)
  {
    identity: {
      atomicNumber: 24,
      symbol: "Cr",
      nameFa: "کروم",
      nameEn: "Chromium",
      pronunciationFa: "کُروم",
      descriptionFa:
        "عنصر جادویی تولید فولاد ضدزنگ و خالق رنگ سرخ آتشین در یاقوت و رنگ سبز در زمرد.",
    },
    classification: {
      group: 6,
      period: 4,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 24,
      electrons: 24,
      neutrons: 28,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹",
      abbreviatedConfiguration: "[Ar] 3d⁵ 4s¹",
      electronShells: [2, 8, 13, 1],
      valenceElectrons: 6,
      commonOxidationStates: [3, 6],
      allOxidationStates: [6, 5, 4, 3, 2, 1, 0, -1, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 51.996,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 128,
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
        value: 7.15,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز سخت، خاکستری براق با جلاپذیری آینه‌ای کم‌نظیر و مقاومت بی‌رقیب در برابر زنگ‌زدگی",
      colorFa: "خاکستری براق کرومیک",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 2180.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2944.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.449,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 93.9,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.66,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 652.9,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 64.3,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "غیرفعال در برابر اکسایش به واسطه لایه سطحی اکسید کروم (Cr₂O₃) که از نفوذ هوا ممانعت می‌کند.",
      chemicalBehaviorFa:
        "آرایش غیرعادی نیمه‌پر [Ar] 3d⁵ 4s¹؛ حالت‌های پایدار +۳ (سبز) و +۶ (نارنجی دی‌کرومات و زرد کرومات).",
    },
    history: {
      discovererFa: "لوئی نیکلا ووکلن",
      discoveryYear: "1797",
      nameOriginFa: "واژه یونانی chroma به معنای رنگ",
      namingExplanationFa:
        "به دلیل رنگ‌های درخشان و بسیار گوناگون ترکیباتش (قرمز کروم، زرد کرومات و سبز اکسید کروم).",
    },
    applications: {
      industrial: [
        "تولید فولاد ضدزنگ (استنلس استیل با حداقل ۱۱٪ کروم)",
        "آبکاری کروم براق تزئینی بر روی شیرآلات و بدنه خودروها",
        "دباغی پوست و چرم با نمک‌های سولفات کروم",
      ],
      scientific: [
        "کریستال‌های یاقوت سرخ (Al₂O₃ دوپ شده با یون Cr³⁺) به عنوان محیط فعال نخستین لیزر تاریخ",
      ],
      medical: [
        "کروم سه ظرفیتی (Cr³⁺) به عنوان ریزمغذی ضروری برای تنظیم قند خون و حساسیت به انسولین",
      ],
      everyday: [
        "شیرآلات براق آشپزخانه و حمام",
        "چاقو و قاشق چنگال‌های استیل استنلس",
      ],
    },
    safety: {
      toxicityFa:
        "کروم (III) مغذی و بی‌خطر است؛ کروم شش‌ظرفیتی (Cr VI) به شدت سمی، جهش‌زا و سرطان‌زا است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کنترل پسماندهای کارگاه‌های آبکاری کروم شش‌ظرفیتی با احیا به کروم سه ظرفیتی.",
      hazardsFa: "سرطان ریه و زخم‌های عمیق پوستی ناشی از بخارات اسید کرومیک.",
    },
    isotopes: {
      stableCount: 4,
      commonIsotopes: [
        "⁵²Cr (۸۳.۷۹٪)",
        "⁵³Cr (۹.۵۰٪)",
        "⁵⁰Cr (۴.۳۵٪)",
        "⁵⁴Cr (۲.۳۶٪)",
      ],
      mostStableIsotope: "⁵²Cr",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر جادویی تولید فولاد ضدزنگ و خالق رنگ سرخ آتشین در یاقوت و رنگ سبز در زمرد.",
      funFactsFa: [
        "کروم آرایش الکترونی استثنایی 3d⁵ 4s¹ دارد، زیرا تقارن اوربیتال d نیمه‌پر ثبات انرژی بالاتری می‌آفریند.",
        "رنگ سبز زمرد و رنگ قرمز یاقوت هر دو از ناخالصی یون کروم Cr³⁺ در شبکه بلورهای مختلف حاصل می‌شوند!",
      ],
      naturalOccurrenceFa:
        "عمدتاً از کانی کرومیت (FeCr₂O₄) در معادن سنگین استخراج می‌شود.",
      keyCompoundsFa: [
        "اکسید کروم (III) سبز (Cr₂O₃)",
        "دی‌کرومات پتاسیم نارنجی (K₂Cr₂O₇)",
        "کرومات سدیم زرد (Na₂CrO₄)",
        "تری‌اکسید کروم (CrO₃)",
      ],
      educationalNotesFa:
        "حضور کروم در فولاد موجب تشکیل لایه‌ای میکروسکوپی از اکسید کروم چسبنده و خودترمیم شونده می‌شود که از زنگ زدن آهن زیرین جلوگیری می‌کند.",
    },
  },
  // Element 25: Mn (منگنز)
  {
    identity: {
      atomicNumber: 25,
      symbol: "Mn",
      nameFa: "منگنز",
      nameEn: "Manganese",
      pronunciationFa: "مَنگَنِز",
      descriptionFa:
        "عنصر جدایی‌ناپذیر صنایع متالورژی آهن و فولاد و موتور محرکه فتوسنتز برای آزاد کردن گاز اکسیژن از مولکول آب.",
    },
    classification: {
      group: 7,
      period: 4,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 25,
      electrons: 25,
      neutrons: 30,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²",
      abbreviatedConfiguration: "[Ar] 3d⁵ 4s²",
      electronShells: [2, 8, 13, 2],
      valenceElectrons: 7,
      commonOxidationStates: [2, 4, 7],
      allOxidationStates: [7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3],
    },
    physicalProperties: {
      atomicMass: {
        value: 54.938,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 127,
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
        value: 7.47,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز سخت، بسیار شکننده، نقره‌ای-خاکستری با اکسایش سریع در حضور هوا",
      colorFa: "خاکستری تیره",
      crystalStructureFa: "مکعبی پیچیده (آلفا-منگنز)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1519.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2334.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.479,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 7.81,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.55,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 717.3,
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
        "به راحتی در اسیدها حل شده و در هوای مرطوب زنگ می‌زند و لایه اکسید قهوه‌ای ایجاد می‌کند.",
      chemicalBehaviorFa:
        "دارای بالاترین تنوع اعداد اکسایش از +۲ تا +۷؛ یون پرمنگنات MnO₄⁻ اکسیدکننده‌ای بنفش و بسیار قدرتمند است.",
    },
    history: {
      discovererFa: "کارل ویلهلم شیله و یوهان گوتلیب گان",
      discoveryYear: "1774",
      nameOriginFa: "منطقه ماگنزیا (Magnesia) در یونان از واژه لاتین magnes",
      namingExplanationFa:
        "نام‌گذاری از کانی پیرولوزیت سیاه (دی‌اکسید منگنز) که در گذشته با کانی‌های مغناطیسی آهن اشتباه گرفته می‌شد.",
    },
    applications: {
      industrial: [
        "گوگردزدایی و اکسیژن‌زدایی از فولاد در تمام خطوط فولادسازی جهان",
        "تولید کاتد باتری‌های خشک روی-کربن و باتری‌های قلیایی (MnO₂)",
        "آلیاژهای آلومینیم برای قوطی‌های نوشابه جهت افزایش مقاومت به خوردگی",
      ],
      scientific: [
        "کمپلکس‌های فعال اکسیژن‌زا (OEC) در فتوسیستم II گیاهان جهت تجزیه فوتوشیمیایی آب",
      ],
      medical: [
        "پرمنگنات پتاسیم به عنوان ضدعفونی‌کننده و قابض سطحی در شستشوی ضایعات قارچی",
      ],
      everyday: [
        "باتری‌های قلمی و نیم‌قلمی قلیایی",
        "رنگ ارغوانی شیشه‌های زینتی",
      ],
    },
    safety: {
      toxicityFa:
        "ریزمغذی ضروری بدن؛ غلظت بالای مزمن غبار آن موجب آسیب‌های مغزی منگانیسم می‌شود",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "کنترل استنشاق غبار در معادن و کارگاه‌های ذوب فررومنگنز.",
      hazardsFa:
        "بیماری منگانیسم با علائمی مشابه پارکینسون در اثر استنشاق طولانی‌مدت غبار.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["⁵⁵Mn (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "⁵⁵Mn",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر جدایی‌ناپذیر صنایع متالورژی آهن و فولاد و موتور محرکه فتوسنتز برای آزاد کردن گاز اکسیژن از مولکول آب.",
      funFactsFa: [
        "هیچ فولادی در جهان بدون افزودن مقداری منگنز قابل تولید نیست زیرا گوگرد مضر را به سولفید منگنز تبدیل می‌کند.",
        "در بستر اقیانوس‌ها میلیون‌ها تن کلوخه منگنز (Manganese nodules) به صورت کروی انباشته شده است.",
      ],
      naturalOccurrenceFa:
        "بسیار فراوان در پوسته زمین در کانی سیاه پیرولوزیت (MnO₂) و رودوکروزیت.",
      keyCompoundsFa: [
        "دی‌اکسید منگنز (پیرولوزیت، MnO₂)",
        "پرمنگنات پتاسیم (KMnO₄)",
        "سولفات منگنز (MnSO₄)",
      ],
      educationalNotesFa:
        "رنگ بنفش درخشان پرمنگنات پتاسیم به دلیل انتقال بار لیگان به فلز (LMCT) است و نه گذار معمول d-d، چرا که منگنز در این ترکیب اوربیتال d خالی دارد.",
    },
  },
  // Element 26: Fe (آهن)
  {
    identity: {
      atomicNumber: 26,
      symbol: "Fe",
      nameFa: "آهن",
      nameEn: "Iron",
      pronunciationFa: "آهَن",
      descriptionFa:
        "ستون فقرات تمدن و صنعت مدرن بشر و هسته حامل اکسیژن در گلبول‌های قرمز خون انسان.",
    },
    classification: {
      group: 8,
      period: 4,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 26,
      electrons: 26,
      neutrons: 30,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²",
      abbreviatedConfiguration: "[Ar] 3d⁶ 4s²",
      electronShells: [2, 8, 14, 2],
      valenceElectrons: 8,
      commonOxidationStates: [2, 3],
      allOxidationStates: [6, 5, 4, 3, 2, 1, 0, -1, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 55.845,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 126,
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
        value: 7.874,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای-خاکستری، شکل‌پذیر، با فرومغناطیس قوی و قابلیت آلیاژسازی استثنایی با کربن",
      colorFa: "خاکستری فلزی",
      crystalStructureFa: "مکعبی مرکزپر (bcc در دمای اتاق)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1811.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3134.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.449,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 80.4,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.83,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 762.5,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 15.7,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در حضور اکسیژن و رطوبت دچار خوردگی و زنگ‌زدگی (Fe₂O₃·nH₂O) می‌شود؛ در اسیدها با خروج گاز H₂ حل می‌گردد.",
      chemicalBehaviorFa:
        "حالت‌های اکسایش اصلی +۲ (آهن ۲ یا فرو، سبز کم‌رنگ) و +۳ (آهن ۳ یا فری، قهوه‌ای-زرد) با فرومغناطیس قوی.",
    },
    history: {
      discovererFa: "نامعلوم (شناخته شده از هزاره‌های باستان)",
      discoveryYear: "باستان",
      nameOriginFa: "واژه لاتین ferrum به معنای آهن یا شمشیر",
      namingExplanationFa:
        "نماد Fe مخفف کلمه باستانی فروم (Ferrum) در امپراتوری روم باستان است.",
    },
    applications: {
      industrial: [
        "تولید سالانه بیش از ۱.۸ میلیارد تن فولاد برای پل‌ها، آسمان‌خراش‌ها، راه‌آهن و کشتی‌ها",
        "تولید چدن برای بدنه موتور خودروها و لوله‌های انتقال فاضلاب",
        "آهنرباهای دائمی و هسته ترانسفورماتورهای برق",
      ],
      scientific: [
        "کاتالیزور آهن فعال در سنتز صنعتی گاز آمونیاک هابر-بوش",
        "پژوهش‌های اثر موسباور در فیزیک حالت جامد",
      ],
      medical: [
        "مکمل‌های آهن (فروس سولفات) برای درمان کم‌خونی ناشی از فقر آهن در بیماران",
      ],
      everyday: [
        "میلگرد و اسکلت ساختمان‌ها",
        "خودروها، درها و پنجره‌ها",
        "ابزارآلات کارگاهی",
      ],
    },
    safety: {
      toxicityFa:
        "عنصر حیاتی بدون سمیت در مقادیر رژیمی؛ تجمع بیش از حد در هماکروماتوز آسیب‌زننده است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "رنگ‌آمیزی و گالوانیزه کردن سازه‌ها برای محافظت در برابر خسارت‌های عظیم زنگ‌زدگی.",
      hazardsFa:
        "بلعیدن تصادفی مقادیر زیاد قرص‌های آهن توسط کودکان موجب مسمومیت کشنده کبد می‌شود.",
    },
    isotopes: {
      stableCount: 4,
      commonIsotopes: [
        "⁵⁶Fe (۹۱.۷۵٪ پایدارترین هسته کیهان)",
        "⁵⁴Fe (۵.۸۵٪)",
        "⁵⁷Fe (۲.۱۱٪ دارای اسپین ۱/۲)",
        "⁵⁸Fe (۰.۲۸٪)",
      ],
      mostStableIsotope: "⁵⁶Fe",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "ستون فقرات تمدن و صنعت مدرن بشر و هسته حامل اکسیژن در گلبول‌های قرمز خون انسان.",
      funFactsFa: [
        "هسته اتم آهن-۵۶ دارای بالاترین انرژی بستگی نوکلئونی به ازای هر نوکلئون در بین تمامی عناصر است و نقطه پایان همجوشی ستاره‌ای است.",
        "هسته مذاب زمین عمدتاً از آلیاژ آهن-نیکل تشکیل شده که میدان مغناطیسی محافظ سیاره ما را ایجاد می‌کند.",
      ],
      naturalOccurrenceFa:
        "چهارمین عنصر فراوان در پوسته زمین و فراوان‌ترین عنصر در کل کره زمین (با احتساب هسته)، در کانی‌های هماتیت و مگنتیت.",
      keyCompoundsFa: [
        "اکسید آهن (III) (زنگ آهن، هماتیت، Fe₂O₃)",
        "اکسید آهن مگنتیت (Fe₃O₄)",
        "کلرید آهن (III) (FeCl₃)",
        "سولفات آهن (II) (FeSO₄)",
      ],
      educationalNotesFa:
        "هموگلوبین در هر مولکول خود چهار گروه هم (Heme) دارای یون Fe²⁺ دارد که هر یک قادر به حمل معکوس یک مولکول اکسیژن در گردش خون هستند.",
    },
  },
  // Element 27: Co (کبالت)
  {
    identity: {
      atomicNumber: 27,
      symbol: "Co",
      nameFa: "کبالت",
      nameEn: "Cobalt",
      pronunciationFa: "کُبالت",
      descriptionFa:
        "عنصر کلیدی باتری‌های دنیای دیجیتال، سازنده پره‌های توربین‌های فوق‌پیشرفته و اتم مرکزی ویتامین B12.",
    },
    classification: {
      group: 9,
      period: 4,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 27,
      electrons: 27,
      neutrons: 32,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²",
      abbreviatedConfiguration: "[Ar] 3d⁷ 4s²",
      electronShells: [2, 8, 15, 2],
      valenceElectrons: 9,
      commonOxidationStates: [2, 3],
      allOxidationStates: [5, 4, 3, 2, 1, 0, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 58.933,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 125,
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
        value: 8.9,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز سخت، شکننده، خاکستری-نقره‌ای با فرومغناطیس قوی و رنگ‌های آبی عمیق در شیشه",
      colorFa: "خاکستری مایل به نقره‌ای",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1768.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3200.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.421,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 100.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.88,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 760.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 63.7,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر اکسایش هوا مقاوم است اما در اسیدها با سرعت متوسط حل می‌شود.",
      chemicalBehaviorFa:
        "تشکیل کمپلکس‌های هشت‌وجهی بسیار پایدار در حالت‌های اکسایش +۲ (صورتی) و +۳ (زرد-قهوه‌ای).",
    },
    history: {
      discovererFa: "گئورگ برانت",
      discoveryYear: "1735",
      nameOriginFa: "واژه آلمانی kobold به معنای جن یا روح خبیث زیرزمینی",
      namingExplanationFa:
        "معدنچیان آلمانی قرون وسطی کانسارهای آن را مسموم می‌دانستند زیرا سنگ‌های آن حاوی آرسنیک بود و استخراج مس را مختل می‌کرد.",
    },
    applications: {
      industrial: [
        "کاتد باتری‌های یون لیتیم (LiCoO₂) در تجهیزات الکترونیکی و خودروهای برقی",
        "سوپرآلیاژهای مقاوم به گرمای پره‌های توربین جت",
        "آهنرباهای دائمی آلنیکو (Al-Ni-Co) و کبالت-ساماریم",
      ],
      scientific: [
        "رادیوایزوتوپ کبالت-۶۰ به عنوان چشمه پرقدرت پرتو گاما در رادیوگرافی صنعتی و استریلیزاسیون",
      ],
      medical: [
        "پرتودرمانی تومورهای سرطانی با چاقوی گاما (Gamma Knife) و جزء سازنده ویتامین B12 (کوبالامین)",
      ],
      everyday: [
        "رنگ آبی کبالت در سرامیک‌ها و ظروف لعابی میناکاری اصیل ایرانی",
      ],
    },
    safety: {
      toxicityFa:
        "ریزمغذی ضروری در قالب ویتامین B12؛ استنشاق غبار فلز آزاد سمیت ریوی و قلبی دارد",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "استفاده از ماسک مخصوص در آسیاب سوپرآلیاژهای کبالت و بازیافت باطری‌ها.",
      hazardsFa:
        "آسم شغلی و نارسایی قلبی کبالتی (کاردیومیوپاتی) در اثر تماس طولانی.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: [
        "⁵⁹Co (۱۰۰٪ فراوانی طبیعی)",
        "⁶⁰Co (رادیوایزوتوپ سنتزی با نیمه‌عمر ۵.۲۷ سال)",
      ],
      mostStableIsotope: "⁵⁹Co",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر کلیدی باتری‌های دنیای دیجیتال، سازنده پره‌های توربین‌های فوق‌پیشرفته و اتم مرکزی ویتامین B12.",
      funFactsFa: [
        "کبالت تنها عنصری است که اتم مرکزی یک ویتامین بیولوژیکی (کوبالامین یا ویتامین B12) را تشکیل می‌دهد.",
        "رنگدانه آبی کبالت از دوران ایران باستان و مصر برای خلق زیباترین کاشی‌های مساجد و سفالینه‌ها استفاده شده است.",
      ],
      naturalOccurrenceFa:
        "همراه با کانسارهای مس و نیکل در کنگو، استرالیا و روسیه استخراج می‌شود.",
      keyCompoundsFa: [
        "اکسید کبالت-لیتیم (LiCoO₂)",
        "کلرید کبالت (II) نم‌بین صورتی/آبی (CoCl₂)",
        "اکسید کبالت (II, III) (Co₃O₄)",
      ],
      educationalNotesFa:
        "کاغذ کلرید کبالت به عنوان شناساگر رطوبت کاربرد دارد؛ در حالت بی‌آب آبی پررنگ و در تماس با رطوبت به صورتی کم‌رنگ تبدیل می‌شود.",
    },
  },
  // Element 28: Ni (نیکل)
  {
    identity: {
      atomicNumber: 28,
      symbol: "Ni",
      nameFa: "نیکل",
      nameEn: "Nickel",
      pronunciationFa: "نیکِل",
      descriptionFa:
        "فلز مقاوم و فرومغناطیس که ستون مقاومت شیمیایی استیل ضدزنگ و المنت‌های حرارتی و سکه‌های جهان است.",
    },
    classification: {
      group: 10,
      period: 4,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 28,
      electrons: 28,
      neutrons: 30,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²",
      abbreviatedConfiguration: "[Ar] 3d⁸ 4s²",
      electronShells: [2, 8, 16, 2],
      valenceElectrons: 10,
      commonOxidationStates: [2],
      allOxidationStates: [4, 3, 2, 1, 0, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 58.693,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 124,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 121,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 8.908,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز سخت، شکل‌پذیر، سفید-نقره‌ای با بازتاب طلایی ملایم، ضدزنگ و دارای فرومغناطیس",
      colorFa: "سفید-نقره‌ای براق",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1728.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3003.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.444,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 90.9,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.91,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 737.1,
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
        "مقاومت استثنایی در برابر اکسایش و اثر قلیاها و اسیدها؛ در اسید نیتریک غلیظ غیرفعال می‌شود.",
      chemicalBehaviorFa:
        "پایدارترین حالت اکسایش +۲ با محلول‌های سبز زمردی یون هیدراته [Ni(H₂O)₆]²⁺.",
    },
    history: {
      discovererFa: "اکسل فردریک کرونستد",
      discoveryYear: "1751",
      nameOriginFa: "واژه آلمانی Kupfernickel به معنای مس فریبکار (شیطان مس)",
      namingExplanationFa:
        "معدنچیان گمان می‌کردند این سنگ معدن مس است ولی چون مسی از آن خارج نمی‌شد آن را به مس جن‌زده تشبیه کردند.",
    },
    applications: {
      industrial: [
        "جزء حیاتی فولاد ضدزنگ زنگ‌ناپذیر آستنیتی سری ۳۰۰ (مانند استیل ۳۰۴ و ۳۱۶)",
        "آبکاری نیکل ضدخوردگی و افزایش مقاومت سایشی",
        "باتری‌های هیبریدی نیکل-هیدرید فلز (NiMH) و باتری‌های کاتد NMC خودروهای برقی",
      ],
      scientific: [
        "کاتالیزور نیکل رانی (Raney Nickel) در هیدروژناسیون پیوندهای دوگانه در صنایع شیمیایی",
      ],
      medical: [
        "آلیاژهای حافظه‌دار نیتینول (نیکل-تیتانیم) برای استنت‌های عروقی قلب و سیم‌های ارتودنسی",
      ],
      everyday: [
        "سکه‌های رایج پولی اکثر کشورهای جهان",
        "سیم‌های گرمکن المنت اجاق برقی و اتو (آلیاژ نیکروم)",
      ],
    },
    safety: {
      toxicityFa:
        "تماس پوستی طولانی سبب درماتیت و آلرژی تماسی در افراد حساس می‌شود",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "پرهیز از استفاده از زیورآلات بی‌کیفیت حاوی نیکل آزادشونده در پوست‌های حساس.",
      hazardsFa:
        "گاز کربونیل نیکل (Ni(CO)₄) یکی از فرارترین و کشنده‌ترین سموم شناخته‌شده در متالورژی است.",
    },
    isotopes: {
      stableCount: 5,
      commonIsotopes: [
        "⁵⁸Ni (۶۸.۰۸٪)",
        "⁶⁰Ni (۲۶.۲۲٪)",
        "⁶²Ni (۳.۶۳٪ بالاترین انرژی بستگی هسته‌ای)",
        "⁶¹Ni (۱.۱۴٪)",
        "⁶⁴Ni (۰.۹۳٪)",
      ],
      mostStableIsotope: "⁵⁸Ni",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز مقاوم و فرومغناطیس که ستون مقاومت شیمیایی استیل ضدزنگ و المنت‌های حرارتی و سکه‌های جهان است.",
      funFactsFa: [
        "ایزوتوپ نیکل-۶۲ بالاترین انرژی بستگی هسته‌ای به ازای هر نوکلئون را دارد و از این نظر از آهن-۵۶ پایدارتر است!",
        "شهاب‌سنگ‌های فلزی عمدتاً آلیاژی از ۹۰٪ آهن و ۱۰٪ نیکل هستند که شاهدی بر هسته سیارات خرد شده می‌باشند.",
      ],
      naturalOccurrenceFa:
        "در کانی‌های پنتلاندیت و لاتریت‌های نیکلی در کانادا، اندونزی و روسیه یافت می‌شود.",
      keyCompoundsFa: [
        "سولفات نیکل (II) سبز (NiSO₄)",
        "کلرید نیکل (II) (NiCl₂)",
        "هیدروکسید نیکل (II) (Ni(OH)₂)",
        "نیکل تتراکربونیل (Ni(CO)₄)",
      ],
      educationalNotesFa:
        "فرآیند موند (Mond process) برای خالص‌سازی نیکل با تولید گاز بسیار فرار نیکل تتراکربونیل در ۵۰ درجه و تجزیه آن در ۲۳۰ درجه کار می‌کند.",
    },
  },
  // Element 29: Cu (مس)
  {
    identity: {
      atomicNumber: 29,
      symbol: "Cu",
      nameFa: "مس",
      nameEn: "Copper",
      pronunciationFa: "مِس",
      descriptionFa:
        "نخستین فلز مهندسی دست‌یافته بشر که عصر مس و برنز را پایه‌ریزی کرد و شاهرگ انتقال الکتریسیته در تمدن معاصر است.",
    },
    classification: {
      group: 11,
      period: 4,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 29,
      electrons: 29,
      neutrons: 34,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹",
      abbreviatedConfiguration: "[Ar] 3d¹⁰ 4s¹",
      electronShells: [2, 8, 18, 1],
      valenceElectrons: 11,
      commonOxidationStates: [2, 1],
      allOxidationStates: [4, 3, 2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 63.546,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 128,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 132,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 8.96,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز سرخ‌رنگ متمایز، چکش‌خوار با رسانایی الکتریکی و گرمایی فوق‌العاده بالا",
      colorFa: "سرخ متمایز مسی",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1357.77,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2835.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.385,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 401.0,
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
        value: 745.5,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 118.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوای مرطوب به آرامی لایه پتینه سبز کربنات مس بازی تشکیل می‌دهد؛ در اسیدهای غیراکسیدکننده بدون حل شدن باقی می‌ماند.",
      chemicalBehaviorFa:
        "آرایش غیرعادی اوربیتال d پر [Ar] 3d¹⁰ 4s¹؛ دارای دو حالت اکسایش اصلی مس یک (مسوز Cu⁺) و مس دو (کوپریک Cu²⁺ با محلول‌های آبی زیبا).",
    },
    history: {
      discovererFa: "نامعلوم (نخستین فلز استخراج‌شده در عصر باستان)",
      discoveryYear: "باستان",
      nameOriginFa: "نام جزیره قبرس (Cyprus) در دریای مدیترانه (Aes Cyprium)",
      namingExplanationFa:
        "رومیان باستان مس را از معادن غنی جزیره قبرس استخراج می‌کردند و آن را فلز قبرسی می‌نامیدند.",
    },
    applications: {
      industrial: [
        "تمام سیم‌کشی‌ها و کابل‌های برق و سیم‌پیچ موتورهای الکتریکی و ترانسفورماتورها",
        "لوله‌کشی آب و رادیاتورهای خنک‌کننده خودروها",
        "آلیاژهای برنج (مس-روی) و مفرغ/برنز (مس-قلع)",
      ],
      scientific: [
        "کاتالیزور در واکنش‌های کلیک شیمی پیوندی برنده جایزه نوبل و رسانای حرارتی هیت‌سینک‌ها",
      ],
      medical: [
        "خاصیت ضدمیکروبی و ضدباکتری طبیعی سطوح مسی در بیمارستان‌ها و حامل اکسیژن هموسیانین در نرم‌تنان",
      ],
      everyday: [
        "ظروف پخت‌وپز مسی سنتی",
        "سیم شارژر و کابل لوازم برقی خانه",
        "سکه‌های کم‌ارزش",
      ],
    },
    safety: {
      toxicityFa:
        "ریزمغذی ضروری انسان؛ در مقادیر بسیار زیاد در بیماری ویلسون آسیب کبدی و چشمی دارد",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "قلع‌اندود کردن مداوم ظروف پخت‌وپز مسی برای جلوگیری از حل شدن مقادیر سمی مس در غذای اسیدی.",
      hazardsFa: "سولفات مس برای آبزیان و ماهی‌ها به شدت سمی و کشنده است.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: ["⁶³Cu (۶۹.۱۵٪)", "⁶⁵Cu (۳۰.۸۵٪)"],
      mostStableIsotope: "⁶³Cu",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "نخستین فلز مهندسی دست‌یافته بشر که عصر مس و برنز را پایه‌ریزی کرد و شاهرگ انتقال الکتریسیته در تمدن معاصر است.",
      funFactsFa: [
        "مس و طلا تنها دو فلز جدول تناوبی هستند که رنگ طبیعی آنها خاکستری یا نقره‌ای نیست!",
        "مجسمه آزادی نیویورک با بیش از ۸۰ تن ورقه مسی ساخته شده که رنگ سبز کنونی آن لایه زنگار محافظتی پتینه است.",
      ],
      naturalOccurrenceFa:
        "گاهی به شکل فلز مس آزاد در طبیعت و به طور عمده در کانی‌های کالکوپیریت (CuFeS₂) و مالاکیت سبز.",
      keyCompoundsFa: [
        "سولفات مس (II) (کات‌کبود، CuSO₄·5H₂O)",
        "اکسید مس (I) سرخ (Cu₂O)",
        "اکسید مس (II) سیاه (CuO)",
        "کربنات بازی مس (مالاکیت)",
      ],
      educationalNotesFa:
        "مس به دلیل داشتن رسانایی الکتریکی استاندارد بین‌المللی مس آنیل‌شده (IACS = 100%) مبنای اندازه‌گیری رسانایی سایر فلزات است.",
    },
  },
  // Element 30: Zn (روی)
  {
    identity: {
      atomicNumber: 30,
      symbol: "Zn",
      nameFa: "روی",
      nameEn: "Zinc",
      pronunciationFa: "روی",
      descriptionFa:
        "نگهبان نامرئی فولاد جهان در برابر زنگ‌زدگی و یون ساختاری بنیادی در صدها آنزیم پروتئینی بدن انسان.",
    },
    classification: {
      group: 12,
      period: 4,
      block: "d",
      category: "transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 30,
      electrons: 30,
      neutrons: 35,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²",
      abbreviatedConfiguration: "[Ar] 3d¹⁰ 4s²",
      electronShells: [2, 8, 18, 2],
      valenceElectrons: 2,
      commonOxidationStates: [2],
      allOxidationStates: [2, 1, 0],
    },
    physicalProperties: {
      atomicMass: {
        value: 65.38,
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
        value: 122,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 7.14,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز مایل به آبی-سفید، براق، در دمای اتاق نسبتاً شکننده و در ۱۰۰ تا ۱۵۰ درجه شکل‌پذیر",
      colorFa: "خاکستری مایل به آبی",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 692.68,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1180.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.388,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 116.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.65,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 906.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -58.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "با اکسیژن و CO₂ هوا واکنش داده و لایه محافظ کربنات روی ایجاد می‌کند؛ در اسیدها به سرعت حل شده و H₂ آزاد می‌کند.",
      chemicalBehaviorFa:
        "تنها حالت اکسایش پایدار +۲ با اوربیتال d کاملاً پر [Ar] 3d¹⁰؛ خصلت دیامغناطیس و محلول‌های کاملاً بی‌رنگ.",
    },
    history: {
      discovererFa: "آندریاس زیگیسموند مارگراف",
      discoveryYear: "1746",
      nameOriginFa: "واژه آلمانی Zinke به معنای خار یا دندانه تیز",
      namingExplanationFa:
        "نام‌گذاری پاراسلسوس بر اساس شکل تیغه‌ای و بلورهای دندانه‌ای نوک‌تیز حاصل از انجماد روی مذاب.",
    },
    applications: {
      industrial: [
        "گالوانیزه کردن آهن و فولاد برای جلوگیری از زنگ‌زدگی",
        "تولید آلیاژهای دایکاست ریخته‌گری دقیق و برنج",
        "آند در باتری‌های قلیایی و باتری‌های روی-هوا",
      ],
      scientific: [
        "لایه‌های نازک فسفرسانس روی سولفید (ZnS) در آشکارسازهای پرتو و صفحات اسیلوسکوپ",
      ],
      medical: [
        "پماد اکسید روی (زینک اکساید) برای التیام سوختگی و عرق‌سوز",
        "مکمل‌های خوراکی زینک برای تقویت سیستم ایمنی",
      ],
      everyday: [
        "ورقه‌های سقف گالوانیزه",
        "پمادهای پوستی و لوسیون‌های محافظتی ضدآفتاب",
      ],
    },
    safety: {
      toxicityFa:
        "عنصر ضروری سیستم ایمنی؛ استنشاق غبار داغ اکسید روی تب دود فلز ایجاد می‌کند",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "تهویه مناسب هنگام جوشکاری و برشکاری قطعات گالوانیزه.",
      hazardsFa: "تب بخار فلز (Metal fume fever) ناشی از استنشاق گازهای ZnO.",
    },
    isotopes: {
      stableCount: 5,
      commonIsotopes: [
        "⁶⁴Zn (۴۹.۱۷٪)",
        "⁶⁶Zn (۲۷.۷۳٪)",
        "⁶۸Zn (۱۸.۴۵٪)",
        "⁶⁷Zn (۴.۰۴٪)",
        "⁷⁰Zn (۰.۶۱٪)",
      ],
      mostStableIsotope: "⁶⁴Zn",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "نگهبان نامرئی فولاد جهان در برابر زنگ‌زدگی و یون ساختاری بنیادی در صدها آنزیم پروتئینی بدن انسان.",
      funFactsFa: [
        "بیش از نیمی از کل روی تولیدی جهان صرف گالوانیزاسیون و حفاظت فداشونده از فولاد می‌شود.",
        "روی پس از آهن دومین عنصر واسطه فراوان در بدن انسان است و در عملکرد انسولین و ترمیم زخم نقش حیاتی دارد.",
      ],
      naturalOccurrenceFa:
        "عمدتاً از سنگ معدن اسفالریت یا بلاند روی (ZnS) در سراسر جهان استخراج می‌شود.",
      keyCompoundsFa: [
        "اکسید روی (ZnO)",
        "سولفید روی (ZnS)",
        "سولفات روی (ZnSO₄)",
        "کلرید روی (ZnCl₂)",
      ],
      educationalNotesFa:
        "روی به دلیل داشتن اوربیتال d کاملاً پر در هر دو حالت عنصری و یون Zn²⁺، طبق برخی تعاریف دقیق آیوپاک فلز واسطه کلاسیک محسوب نمی‌شود.",
    },
  },
  // Element 31: Ga (گالیم)
  {
    identity: {
      atomicNumber: 31,
      symbol: "Ga",
      nameFa: "گالیم",
      nameEn: "Gallium",
      pronunciationFa: "گالیُم",
      descriptionFa:
        "فلز معجزه‌آسا با گستره مایع فوق‌العاده بالا که در دست ذوب می‌شود و پایه روشنایی مدرن LED و اینترنت پرسرعت است.",
    },
    classification: {
      group: 13,
      period: 4,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 31,
      electrons: 31,
      neutrons: 39,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p¹",
      abbreviatedConfiguration: "[Ar] 3d¹⁰ 4s² 4p¹",
      electronShells: [2, 8, 18, 3],
      valenceElectrons: 3,
      commonOxidationStates: [3],
      allOxidationStates: [3, 2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 69.723,
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
        value: 122,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 5.91,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نرم، نقره‌ای-آبی با نقطه ذوب شگفت‌انگیز ۲۹.۷۶ درجه که در کف دست انسان ذوب می‌شود",
      colorFa: "نقره‌ای با بازتاب آبی",
      crystalStructureFa: "ارتورومبیک",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 302.91,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2673.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.371,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 40.6,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.81,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 578.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 41.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در برابر هوا مقاوم است اما در اسیدها و بازهای قوی به دلیل خصلت آمفوتر حل می‌شود.",
      chemicalBehaviorFa:
        "تشکیل ترکیبات نیمه‌رسانای پیوندی III-V نظیر GaAs و GaN با باندگپ مستقیم برای اپتوالکترونیک.",
    },
    history: {
      discovererFa: "پل امیل لکوک دو بوابودران",
      discoveryYear: "1875",
      nameOriginFa: "واژه لاتین Gallia به معنای باستانی فرانسه",
      namingExplanationFa:
        "نام‌گذاری به افتخار کشور فرانسه (Gallia) توسط کاشف فرانسوی آن.",
    },
    applications: {
      industrial: [
        "نیمه‌رسانای گالیم آرسنید (GaAs) در چیپست‌های مدار فرکانس بالای تلفن‌های همراه",
        "نیترید گالیم (GaN) در شارژرهای فوق‌سریع و دیودهای نورافشان LED آبی و سفید",
        "دماسنج‌های اندازه‌گیری دماهای فوق‌بالا",
      ],
      scientific: [
        "آلیاژ گالینستان (Ga-In-Sn) مایع در دمای منفی ۱۹ درجه برای کلیدهای جیوه جایگزین بدون سمیت",
      ],
      medical: [
        "اسکن گالیم-۶۷ برای ردیابی التهاب‌ها و لنفوم‌های فعال در پزشکی هسته‌ای",
      ],
      everyday: [
        "شارژرهای جمع‌وجور GaN گوشی و لپ‌تاپ",
        "لامپ‌های ال‌ای‌دی روشنایی منازل",
      ],
    },
    safety: {
      toxicityFa:
        "سمیت پایین؛ نباید بلعیده شود اما دست زدن به آن آسیبی نمی‌زند",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "نباید در ظروف شیشه‌ای یا آلومینیومی نگهداری شود، چون هنگام انجماد منبسط شده و ظرف را می‌شکند.",
      hazardsFa:
        "گالیم مایع به ساختار آلومینیم نفوذ کرده و آن را فوراً شکننده و پودر می‌کند (تردی فلز مایع).",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: ["⁶⁹Ga (۶۰.۱۱٪)", "⁷¹Ga (۳۹.۸۹٪)"],
      mostStableIsotope: "⁶⁹Ga",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز معجزه‌آسا با گستره مایع فوق‌العاده بالا که در دست ذوب می‌شود و پایه روشنایی مدرن LED و اینترنت پرسرعت است.",
      funFactsFa: [
        "گالیم همان «اکا-آلومینیم» معروفی است که مندلیف ۴ سال قبل از کشف آن با پیش‌بینی تمام خواص و چگالی آن جهان را شگفت‌زده کرد.",
        "مانند آب، گالیم هنگام انجماد ۳.۱ درصد افزایش حجم پیدا می‌کند.",
      ],
      naturalOccurrenceFa:
        "به عنوان ناخالصی در سنگ معدن بوکسیت آلومینیم و اسفالریت روی استخراج می‌شود.",
      keyCompoundsFa: [
        "گالیم آرسنید (GaAs)",
        "نیترید گالیم (GaN)",
        "اکسید گالیم (Ga₂O₃)",
        "تری‌کلرید گالیم (GaCl₃)",
      ],
      educationalNotesFa:
        "دیودهای نیترید گالیم (GaN) که انتشار نور آبی را ممکن ساختند، جایزه نوبل فیزیک ۲۰۱۴ را برای سازندگان ژاپنی به ارمغان آوردند.",
    },
  },
  // Element 32: Ge (ژرمانیم)
  {
    identity: {
      atomicNumber: 32,
      symbol: "Ge",
      nameFa: "ژرمانیم",
      nameEn: "Germanium",
      pronunciationFa: "ژِرمانیُم",
      descriptionFa:
        "عنصر آغازگر انقلاب الکترونیک در نخستین ترانزیستور جهان و پنجره شفاف عبور امواج فروسرخ دید در شب.",
    },
    classification: {
      group: 14,
      period: 4,
      block: "p",
      category: "metalloid",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 32,
      electrons: 32,
      neutrons: 41,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²",
      abbreviatedConfiguration: "[Ar] 3d¹⁰ 4s² 4p²",
      electronShells: [2, 8, 18, 4],
      valenceElectrons: 4,
      commonOxidationStates: [4],
      allOxidationStates: [4, 3, 2, 1, 0, -1, -2, -3, -4],
    },
    physicalProperties: {
      atomicMass: {
        value: 72.63,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 122,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 122,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 5.323,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "شبه‌فلز سخت، شکننده، سفید-خاکستری با درخشش متالیک براق و شفاف در برابر پرتو فروسرخ",
      colorFa: "سفید-خاکستری براق",
      crystalStructureFa: "مکعبی الماسی",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1211.4,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3106.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.32,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 60.2,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.01,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 762.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 119.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در دمای اتاق پایدار است؛ در دمای بالا اکسید GeO₂ تولید می‌کند و با اسید نیتریک اکسید می‌شود.",
      chemicalBehaviorFa:
        "خواص بینابینی با دو حالت اکسایش +۴ و +۲؛ ضریب شکست بسیار بالا در ناحیه طیف فروسرخ.",
    },
    history: {
      discovererFa: "کلمنس وینکلر",
      discoveryYear: "1886",
      nameOriginFa: "واژه لاتین Germania به معنای آلمان",
      namingExplanationFa:
        "نام‌گذاری توسط وینکلر به افتخار میهنش آلمان پس از استخراج آن از کانی آرژیرودیت.",
    },
    applications: {
      industrial: [
        "کابل‌های فیبر نوری با هسته دوپ شده با GeO₂ برای هدایت نور با کمترین اتلاف",
        "عدسی‌ها و اپتیک‌های دید در شب دوربین‌های حرارتی فروسرخ نظامی",
        "کاتالیزور پلیمریزاسیون تولید بطری‌های شفاف پلاستیکی PET",
      ],
      scientific: [
        "آشکارسازهای ژرمانیم با خلوص فوق‌العاده بالا (HPGe) برای طیف‌سنجی دقیق پرتو گاما",
      ],
      medical: ["تجهیزات تصویربرداری تشخیصی پزشکی فروسرخ و بررسی‌های انکولوژی"],
      everyday: [
        "فیبر نوری اینترنت منازل",
        "سلول‌های خورشیدی پربازده کاوشگرهای فضایی",
      ],
    },
    safety: {
      toxicityFa:
        "سمیت پایین عنصر؛ ترکیبات گازی هیدرید ژرمانیم (ژرمان) سمی هستند",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "کنترل مواجهه شغلی با ترکیبات هالیدی و تتراکلرید ژرمانیم.",
      hazardsFa: "گاز ژرمان (GeH₄) بسیار اشتعال‌پذیر و مسموم‌کننده خون است.",
    },
    isotopes: {
      stableCount: 4,
      commonIsotopes: [
        "⁷⁴Ge (۳۶.۷٪)",
        "⁷²Ge (۲۷.۴٪)",
        "⁷⁰Ge (۲۰.۵٪)",
        "⁷³Ge (۷.۸٪)",
        "⁷⁶Ge (۷.۶٪ پرتوزای بسیار کند)",
      ],
      mostStableIsotope: "⁷⁴Ge",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر آغازگر انقلاب الکترونیک در نخستین ترانزیستور جهان و پنجره شفاف عبور امواج فروسرخ دید در شب.",
      funFactsFa: [
        "نخستین ترانزیستور جهان در سال ۱۹۴۷ در آزمایشگاه‌های بل با استفاده از یک تکه ژرمانیم ساخته شد، نه سیلیکون!",
        "مندلیف این عنصر را تحت عنوان «اکا-سیلیسیم» پیش‌بینی کرده بود و تطابق بی‌نقص خواص آن پیروزی بزرگی برای جدول تناوبی بود.",
      ],
      naturalOccurrenceFa:
        "کمیاب و پراکنده به عنوان محصول جانبی در پالایش فلزات اسفالریت روی و خاکستر زغال‌سنگ.",
      keyCompoundsFa: [
        "دی‌اکسید ژرمانیم (GeO₂)",
        "تتراکلرید ژرمانیم (GeCl₄)",
        "ژرمان (GeH₄)",
      ],
      educationalNotesFa:
        "ژرمانیم برای پرتوهای فروسرخ کاملاً شفاف است و به همین جهت تمام پنجره‌ها و عدسی‌های دوربین‌های حرارتی دید در شب از ژرمانیم فلزی صیقلی تراشیده می‌شوند.",
    },
  },
  // Element 33: As (آرسنیک)
  {
    identity: {
      atomicNumber: 33,
      symbol: "As",
      nameFa: "آرسنیک",
      nameEn: "Arsenic",
      pronunciationFa: "آرسِنیک",
      descriptionFa:
        "سم کلاسیک و مشهور تاریخ که در کیمیاگری با نام زرنیخ شناخته می‌شد و امروزه داروی ارزشمند درمان سرطان خون است.",
    },
    classification: {
      group: 15,
      period: 4,
      block: "p",
      category: "metalloid",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 33,
      electrons: 33,
      neutrons: 42,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³",
      abbreviatedConfiguration: "[Ar] 3d¹⁰ 4s² 4p³",
      electronShells: [2, 8, 18, 5],
      valenceElectrons: 5,
      commonOxidationStates: [3, 5, -3],
      allOxidationStates: [5, 3, 2, 1, -3],
    },
    physicalProperties: {
      atomicMass: {
        value: 74.922,
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
        value: 119,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 5.727,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "شبه‌فلز ترد، فلزی خاکستری براق که با تصعید مستقیم در حرارت به بخار زرد با بوی سیر تبدیل می‌شود",
      colorFa: "خاکستری متالیک",
      crystalStructureFa: "لوزی‌سطحی (رومبوهدرال)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1090.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 887.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.329,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 50.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.18,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 947.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 78.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در گرمای هوا با شعله آبی می‌سوزد و ابر سفید بسیار سمی از تری‌اکسید آرسنیک متصاعد می‌کند.",
      chemicalBehaviorFa:
        "شبه‌فلز با پیوندهای کووالانسی پایدار و اعداد اکسایش متداول -۳، +۳ و +۵ با تمایل بالا به پیوند با گوگرد.",
    },
    history: {
      discovererFa: "آلبرتوس مگنوس (آلبرت بزرگ)",
      discoveryYear: "1250",
      nameOriginFa: "واژه یونانی arsenikon و پارسی کهن زرنیخ (Zarnikh)",
      namingExplanationFa:
        "برگرفته از نام کانی زرد رنگ زرنیخ (Orpiment) که در کیمیاگری ایران باستان شهرت فراوان داشت.",
    },
    applications: {
      industrial: [
        "دوپانت نوع n در ساخت ادوات نیمه‌رسانای سیلیکونی",
        "تولید نیمه‌رسانای گالیم آرسنید (GaAs)",
        "سخت‌کننده سرب در گلوله‌های ساچمه‌ای و باتری‌های خودرو",
      ],
      scientific: [
        "مطالعات اثرات سم‌شناسی و پیوندهای بیوشیمیایی مهارکننده تنفس سلولی",
      ],
      medical: [
        "تری‌اکسید آرسنیک داروی خط اول درمان نوع خاصی از سرطان خون (لوسمی پرومیلوئوسیتیک حاد)",
      ],
      everyday: [
        "در گذشته به عنوان سم موش‌کش و قارچ‌کش چوب‌های تیر برق (امروزه بسیار محدود است)",
      ],
    },
    safety: {
      toxicityFa:
        "فوق‌العاده سمی، مرگ‌آور و سرطان‌زای رده ۱ که با اخلال در آنزیم‌های تنفسی عمل می‌کند",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کنترل سخت‌گیرانه آب چاه‌های کشاورزی و روستایی برای عدم آلودگی به آرسنیک محلول.",
      hazardsFa:
        "مسمومیت مزمن آرسنیکوزیس با زخم‌های پوستی، تخریب اعصاب محیطی و سرطان اندام‌های داخلی.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["⁷⁵As (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "⁷⁵As",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "سم کلاسیک و مشهور تاریخ که در کیمیاگری با نام زرنیخ شناخته می‌شد و امروزه داروی ارزشمند درمان سرطان خون است.",
      funFactsFa: [
        "در تاریخ به عنوان «پودر جانشینی» یا «سلطان سم‌ها» شناخته می‌شد زیرا بی‌بو و بی‌مزه بود و در شراب حل می‌شد!",
        "آرسنیک در فشار هوای معمول نقطه ذوب ندارد و پیش از ذوب شدن مستقیماً در ۶۱۵ درجه سلسیوس تصعید می‌شود.",
      ],
      naturalOccurrenceFa:
        "در کانی‌های گوگردی زرنیخ زرد (اورپیمنت As₂S₃)، زرنیخ سرخ (رئالگار As₄S₄) و آرسنوپیریت.",
      keyCompoundsFa: [
        "تری‌اکسید آرسنیک (مرگ موش، As₂O₃)",
        "گالیم آرسنید (GaAs)",
        "آرسین (AsH₃)",
      ],
      educationalNotesFa:
        "آرسنیک به دلیل شباهت به فسفر در فرآیندهای سلولی با فسفات رقابت کرده و از سنتز مولکول پرانرژی ATP جلوگیری می‌کند.",
    },
  },
  // Element 34: Se (سلنیم)
  {
    identity: {
      atomicNumber: 34,
      symbol: "Se",
      nameFa: "سلنیم",
      nameEn: "Selenium",
      pronunciationFa: "سِلِنیُم",
      descriptionFa:
        "عنصر حساس به نور که فناوری دستگاه‌های کپی مدرن را ممکن کرد و هسته آنتی‌اکسیدانی اصلی دفاع سلولی بدن است.",
    },
    classification: {
      group: 16,
      period: 4,
      block: "p",
      category: "nonmetal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 34,
      electrons: 34,
      neutrons: 45,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴",
      abbreviatedConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁴",
      electronShells: [2, 8, 18, 6],
      valenceElectrons: 6,
      commonOxidationStates: [4, 6, -2],
      allOxidationStates: [6, 4, 2, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 78.971,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 117,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 120,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 4.819,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "جامد با دگرشکل‌های قرمز آمورف و خاکستری متالیک با خاصیت فوتورسانایی فوق‌العاده",
      colorFa: "خاکستری فلزی / سرخ",
      crystalStructureFa: "شش‌گوشه (دگرشکل خاکستری)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 494.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 958.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.321,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.519,
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
        value: 941.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 195.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "با اکسیژن می‌سوزد و دی‌اکسید سلنیم تولید می‌کند؛ خواص شیمیایی آن شباهت نزدیکی به گوگرد دارد.",
      chemicalBehaviorFa:
        "رسانایی الکتریکی آن در برابر تابش نور تا هزار برابر افزایش می‌یابد (پدیده فوتورسانایی).",
    },
    history: {
      discovererFa: "یونس یاکوب برزلیوس",
      discoveryYear: "1817",
      nameOriginFa: "واژه یونانی selene به معنای ماه",
      namingExplanationFa:
        "به دلیل شباهت خواص آن با عنصر تلوریم (به معنای زمین)، نام الهه ماه سلنه را بر آن نهادند.",
    },
    applications: {
      industrial: [
        "شیدهای فتوکپی در دستگاه‌های زیراکس قدیمی بر پایه فوتورسانایی",
        "بی‌رنگ کردن شیشه‌های حاوی ناخالصی آهن و تولید شیشه‌های قرمز یاقوتی",
        "سلول‌های خورشیدی فتوولتائیک CIGS",
      ],
      scientific: [
        "حفاظت بیولوژیکی در برابر استرس اکسیداتیو از طریق آنزیم گلوتاتیون پراکسیداز",
      ],
      medical: [
        "سلنیم سولفید در شامپوهای ضدشوره و درمان درماتیت سبورئیک پوست سر",
      ],
      everyday: [
        "شامپوهای ضدشوره دارویی (Selenium sulfide)",
        "مکمل‌های آنتی‌اکسیدان ورزشی و مولتی‌ویتامین‌ها",
      ],
    },
    safety: {
      toxicityFa:
        "ریزمغذی لازم برای سلامت تیروئید؛ در مقادیر بالا سمی است و بوی تند سیر در تنفس ایجاد می‌کند",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "تهویه مناسب در حین ذوب ترکیبات سلنیم به دلیل سمیت دی‌اکسید سلنیم فرار.",
      hazardsFa:
        "بیماری سلنوزیس شامل ریزش مو، شکنندگی ناخن‌ها و اختلالات عصبی ناشی از مسمومیت سلنیم.",
    },
    isotopes: {
      stableCount: 5,
      commonIsotopes: [
        "⁸⁰Se (۴۹.۶۱٪)",
        "۷۸Se (۲۳.۷۷٪)",
        "۷۶Se (۹.۳۷٪)",
        "۸۲Se (۸.۷۳٪)",
        "۷۷Se (۷.۶۳٪)",
      ],
      mostStableIsotope: "⁸⁰Se",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر حساس به نور که فناوری دستگاه‌های کپی مدرن را ممکن کرد و هسته آنتی‌اکسیدانی اصلی دفاع سلولی بدن است.",
      funFactsFa: [
        "سلنیم در تاریکی رسانای بسیار ضعیفی است اما با تابیدن نور روی آن، رسانایی الکتریکی آن فوراً تا هزار برابر افزایش می‌یابد!",
        "اسید آمینه بیست و یکم حیات یعنی «سلنوسیستئین» دارای اتم سلنیم به جای گوگرد است.",
      ],
      naturalOccurrenceFa:
        "بسیار نادر به صورت آزاد؛ به عنوان محصول فرعی تصفیه الکترولیتی لجن آندی مس استخراج می‌شود.",
      keyCompoundsFa: [
        "دی‌اکسید سلنیم (SeO₂)",
        "سلنیت سدیم (Na₂SeO₃)",
        "سلنید کادمیوم (CdSe)",
        "سلنوسیستئین",
      ],
      educationalNotesFa:
        "سلنیم برای تبدیل هورمون تیروئیدی غیرفعال T4 به فرم فعال بیولوژیکی T3 توسط آنزیم‌های یدوتیرونین دی‌یدیناز حیاتی است.",
    },
  },
  // Element 35: Br (برم)
  {
    identity: {
      atomicNumber: 35,
      symbol: "Br",
      nameFa: "برم",
      nameEn: "Bromine",
      pronunciationFa: "بُرُم",
      descriptionFa:
        "تنها نافلز مایع جدول تناوبی با بخاری سنگین و سرخ‌رنگ که از آب دریاها و دریاچه‌های فوق‌شور استخراج می‌شود.",
    },
    classification: {
      group: 17,
      period: 4,
      block: "p",
      category: "halogen",
      standardState: "liquid",
    },
    atomicStructure: {
      protons: 35,
      electrons: 35,
      neutrons: 45,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵",
      abbreviatedConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁵",
      electronShells: [2, 8, 18, 7],
      valenceElectrons: 7,
      commonOxidationStates: [-1, 1, 3, 5],
      allOxidationStates: [7, 5, 4, 3, 1, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 79.904,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 114,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 120,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 3.1028,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "تنها نافلز مایع در دمای اتاق؛ مایع غلیظ قهوه‌ای-قرمز تیره با بخارات خفه‌کننده و سوزاننده",
      colorFa: "سرخ مایل به قهوه‌ای تیره",
      crystalStructureFa: "ارتورومبیک (در فاز جامد زیر منفی ۷ درجه)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 265.8,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 332.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.474,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.122,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.96,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1139.9,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 324.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "اکسیدکننده قوی با واکنش‌پذیری بالا، به شدت با آلومینیم، فسفر و ترکیبات آلی واکنش می‌دهد.",
      chemicalBehaviorFa:
        "تمایل زیاد به جذب ۱ الکترون و تشکیل آنیون برمید Br⁻؛ اکسایش آسان ترکیبات آلی و افزودن به پیوندهای دوگانه.",
    },
    history: {
      discovererFa: "آنتوان ژروم بالار",
      discoveryYear: "1826",
      nameOriginFa: "واژه یونانی bromos به معنای بوی بسیار بد یا تعفن",
      namingExplanationFa:
        "به دلیل بوی به شدت زننده، تند و خفه‌کننده بخارات قرمز رنگ آن نام‌گذاری شد.",
    },
    applications: {
      industrial: [
        "مواد ضدحریق و بازدارنده شعله برومینه (BFR) در پلاستیک قطعات الکترونیکی",
        "برمید نقره (AgBr) در فیلم‌های عکاسی سنتی حساس به نور",
        "تصفیه آب چاه‌های نفت عمیق با گل‌های حفاری برمیدی سنگین",
      ],
      scientific: [
        "آزمون آب برم (Bromine water test) برای شناسایی پیوندهای دوگانه و غیراشباع در شیمی آلی",
      ],
      medical: [
        "آرام‌بخش‌های کهن برومیدی (پتاسیم برمید) و داروهای مدرن برونکودیلاتور درمان آسم نظیر ایپراتروپیوم برمید",
      ],
      everyday: [
        "مواد کندکننده اشتعال در قاب تلویزیون‌ها و سیم‌های برق",
        "فیلم‌های عکاسی قدیمی و فیلم‌های رادیولوژی",
      ],
    },
    safety: {
      toxicityFa:
        "فوق‌العاده خورنده و تخریب‌کننده پوست و چشم؛ بخارات آن ریه را می‌سوزاند",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کار منحصراً در زیر هودهای قوی آزمایشگاهی با دستپوش‌های ضخیم نیتریل و عینک ایمنی محکم.",
      hazardsFa:
        "سوختگی‌های بسیار عمیق، شدید و دیرالتیام پوست و ادم ریوی کشنده با استنشاق بخارات برم.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: [
        "⁷⁹Br (۵۰.۶۹٪)",
        "⁸¹Br (۴۹.۳۱٪ نسبت تقریبی ۱ به ۱ در طیف جرمی)",
      ],
      mostStableIsotope: "⁷۹Br",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "تنها نافلز مایع جدول تناوبی با بخاری سنگین و سرخ‌رنگ که از آب دریاها و دریاچه‌های فوق‌شور استخراج می‌شود.",
      funFactsFa: [
        "در تمام جدول تناوبی تنها دو عنصر در شرایط اتاق مایع هستند: فلز جیوه و نافلز برم!",
        "رنگ شاهانه ارغوانی صورتی باستانی (Tyrian purple) از حلزون‌های دریایی گرفته می‌شد که ساختار مولکولی آن دی‌بروموایندیگو بود.",
      ],
      naturalOccurrenceFa:
        "به صورت یون برمید در آب دریاها و به ویژه در آب شور فوق‌العاده غلیظ دریاچه بحرالمیت (بیش از ۵ گرم در لیتر).",
      keyCompoundsFa: [
        "برمید سدیم (NaBr)",
        "برمید نقره (AgBr)",
        "هیدروژن برمید (اسید هیدروبورمیک، HBr)",
        "تترابروموبیسفنول A",
      ],
      educationalNotesFa:
        "شناسایی ترکیبات برمدار در طیف‌سنجی جرمی به دلیل فراوانی تقریباً مساوی دو ایزوتوپ ۷۹ و ۸۱ و تشکیل پیک‌های دوقلو با اختلاف ۲ واحد جرمی بسیار آسان است.",
    },
  },
  // Element 36: Kr (کریپتون)
  {
    identity: {
      atomicNumber: 36,
      symbol: "Kr",
      nameFa: "کریپتون",
      nameEn: "Krypton",
      pronunciationFa: "کریپتُن",
      descriptionFa:
        "گاز نجیب پنهان جو که روزگاری مبنای دقیق تعریف یکای متر در جهان بود و بهترین عایق حرارتی شیشه‌های ساختمانی است.",
    },
    classification: {
      group: 18,
      period: 4,
      block: "p",
      category: "noble-gas",
      standardState: "gas",
    },
    atomicStructure: {
      protons: 36,
      electrons: 36,
      neutrons: 48,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶",
      abbreviatedConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁶",
      electronShells: [2, 8, 18, 8],
      valenceElectrons: 8,
      commonOxidationStates: [0],
      allOxidationStates: [2, 0],
    },
    physicalProperties: {
      atomicMass: {
        value: 83.798,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 88,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 116,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 3.749,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "گاز نجیب بی‌رنگ، سنگین با درخشش سفید-مایل به سبز در تخلیه الکتریکی",
      colorFa: "بی‌رنگ (سفید مایل به سبز در پلاسما)",
      crystalStructureFa: "مکعبی مرکزپر (fcc در فاز جامد برودتی)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 115.79,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 119.93,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.248,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.00943,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 3.0,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1350.8,
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
        "بسیار خنثی؛ تنها با واکنش با فلوئور در شرایط سخت دی‌فلوئورید کریپتون (KrF₂) می‌سازد.",
      chemicalBehaviorFa:
        "دارای لایه ظرفیت بسته 4s² 4p⁶؛ دی‌فلوئورید آن یک اکسیدکننده فوق‌العاده ناپایدار و شدید است.",
    },
    history: {
      discovererFa: "ویلیام رمزی و موریس تراورز",
      discoveryYear: "1898",
      nameOriginFa: "واژه یونانی kryptos به معنای پنهان یا مخفی",
      namingExplanationFa:
        "به دلیل آنکه در باقیمانده تقطیر هوای مایع مخفی مانده بود و به سختی کشف شد.",
    },
    applications: {
      industrial: [
        "پر کردن شیشه‌های دوجداره با عایق‌بندی حرارتی فوق‌العاده بالا به دلیل رسانایی گرمایی بسیار کم",
        "فلاش‌های عکاسی پرسرعت در کسری از میلی‌ثانیه",
        "لامپ‌های پروژکتورهای سینما و فرودگاه‌ها",
      ],
      scientific: [
        "تعریف رسمی استاندارد بین‌المللی یک متر از سال ۱۹۶۰ تا ۱۹۸۳ بر پایه طول‌موج پرتو نارنجی کریپتون-۸۶",
        "لیزرهای اکسایمر کریپتون فلوراید (KrF) در فیزیک هسته‌ای",
      ],
      medical: [
        "تصویربرداری توموگرافی ریوی با گاز کریپتون-۸۱m با نیمه‌عمر ۱۳ ثانیه در پزشکی هسته‌ای",
      ],
      everyday: [
        "شیشه‌های عایق پنجره‌های لوکس کم‌مصرف",
        "لامپ‌های فلاش دوربین",
      ],
    },
    safety: {
      toxicityFa: "کاملاً بی‌اثر و غیرسمی",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "تهویه مناسب در محیط‌های بسته به دلیل چگالی بالا و خطر جابجایی اکسیژن.",
      hazardsFa: "خفگی ناشی از افت غلظت اکسیژن هوا.",
    },
    isotopes: {
      stableCount: 5,
      commonIsotopes: [
        "⁸⁴Kr (۵۶.۹۹٪)",
        "⁸⁶Kr (۱۷.۳۰٪ مبنای سابق متر)",
        "⁸۲Kr (۱۱.۵۸٪)",
        "۸۳Kr (۱۱.۵۰٪)",
        "۸۰Kr (۲.۲۸٪)",
      ],
      mostStableIsotope: "⁸⁴Kr",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "گاز نجیب پنهان جو که روزگاری مبنای دقیق تعریف یکای متر در جهان بود و بهترین عایق حرارتی شیشه‌های ساختمانی است.",
      funFactsFa: [
        "بین سال‌های ۱۹۶۰ تا ۱۹۸۳ میلادی، یک متر استاندارد بین‌المللی دقیقاً برابر با ۱٬۶۵۰٬۷۶۳.۷۳ برابر طول‌موج پرتو نارنجی اتم کریپتون-۸۶ تعریف شده بود!",
        "در کمیک‌های سوپرمن نام سیاره زادگاه او کریپتون نام دارد، اما ارتباطی با این گاز شیمیایی ندارد.",
      ],
      naturalOccurrenceFa:
        "تنها حدود یک قسمت در میلیون در اتمسفر زمین وجود دارد و از تقطیر هوای مایع استخراج می‌شود.",
      keyCompoundsFa: ["کریپتون دی‌فلوئورید (KrF₂)"],
      educationalNotesFa:
        "کریپتون دی‌فلوئورید تنها در دمای زیر منفی ۳۰ درجه پایدار است و یکی از قوی‌ترین اکسیدکننده‌های ساخت بشر است که حتی طلا را به بالاترین عدد اکسایش می‌رساند.",
    },
  },
];
