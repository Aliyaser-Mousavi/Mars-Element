import { ChemicalElement } from "@/types/element";

/**
 * Period 3 Elements (Total: 8)
 * Mars Element - Chemical Database
 */
export const PERIOD_3_ELEMENTS: ChemicalElement[] = [
  // Element 11: Na (سدیم)
  {
    identity: {
      atomicNumber: 11,
      symbol: "Na",
      nameFa: "سدیم",
      nameEn: "Sodium",
      pronunciationFa: "سُدیُم",
      descriptionFa:
        "فلز قلیایی فعال با نقشی بنیادی در تبادل تکانه‌های عصبی و تعادل مایعات در فیزیولوژی موجودات زنده.",
    },
    classification: {
      group: 1,
      period: 3,
      block: "s",
      category: "alkali-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 11,
      electrons: 11,
      neutrons: 12,
      electronConfiguration: "1s² 2s² 2p⁶ 3s¹",
      abbreviatedConfiguration: "[Ne] 3s¹",
      electronShells: [2, 8, 1],
      valenceElectrons: 1,
      commonOxidationStates: [1],
      allOxidationStates: [1, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 22.99,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 186,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 166,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 0.968,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای نرم که با چاقو بریده می‌شود و سطح آن در هوا به سرعت تیره می‌گردد",
      colorFa: "نقره‌ای درخشان (تیره در مجاورت هوا)",
      crystalStructureFa: "مکعبی مرکزپر (bcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 370.87,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1156.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 1.228,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 142.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 0.93,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 495.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 52.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "واکنش بسیار گرمازا و شدید با آب با اشتعال هیدروژن و ایجاد شعله زردرنگ.",
      chemicalBehaviorFa:
        "از دست دادن آسان الکترون 3s¹ و تشکیل پیوندهای یونی با آنیون‌های هالوژن، اکسیژن و گوگرد.",
    },
    history: {
      discovererFa: "همفری دیوی",
      discoveryYear: "1807",
      nameOriginFa: "واژه ناترون (Natron) در مصر باستان و نمک سودا (Soda)",
      namingExplanationFa:
        "نماد Na از نام کانی باستانی ناترون که کربنات سدیم طبیعی است اقتباس شده است.",
    },
    applications: {
      industrial: [
        "تولید نمک طعام و سود سوزآور در صنایع کاغذ و شوینده",
        "خنک‌کننده فلزی مایع در رآکتورهای هسته‌ای سریع",
        "لامپ‌های بخار سدیم روشنایی معابر",
      ],
      scientific: [
        "عامل کاهنده بسیار قوی در شیمی سنتزی آلی و متالورژی تیتانیم",
      ],
      medical: ["سرم نمکی فیزیولوژیک (نرمال سالین ۰.۹٪) برای احیای مایعات بدن"],
      everyday: ["نمک خوراکی طعام (NaCl)", "جوش شیرین (NaHCO₃) در نانوایی"],
    },
    safety: {
      toxicityFa:
        "یون سدیم برای حیات ضروری است؛ مصرف بیش از حد آن با افزایش فشار خون مرتبط است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "نگهداری انحصاری زیر نفت سفید یا پارافین مایع و ممانعت از تماس با آب یا پوست مرطوب.",
      hazardsFa:
        "اشتعال فوری و انفجاری در تماس با آب، سوختگی‌های قلیایی بسیار شدید ناشی از سود.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["²³Na (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "²³Na",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز قلیایی فعال با نقشی بنیادی در تبادل تکانه‌های عصبی و تعادل مایعات در فیزیولوژی موجودات زنده.",
      funFactsFa: [
        "چگالی سدیم از آب کمتر است و هنگام پرتاب روی آب شناور مانده و با شعله‌ای زرد و چرخان مشتعل می‌شود.",
        "لامپ‌های خیابانی زرد قدیمی به دلیل خط دوتایی D ناشی از جهش الکترونی سدیم است.",
      ],
      naturalOccurrenceFa:
        "ششمین عنصر فراوان پوسته زمین که به وفور در هالیت (نمک طعام) و آب دریاها یافت می‌شود.",
      keyCompoundsFa: [
        "کلرید سدیم (NaCl)",
        "هیدروکسید سدیم (سود سوزآور، NaOH)",
        "کربنات سدیم (Na₂CO₃)",
        "سدیم بی‌کربنات (NaHCO₃)",
      ],
      educationalNotesFa:
        "پمپ سدیم-پتاسیم (Na⁺/K⁺-ATPase) در غشای سلول‌ها انرژی عمده متابولیسم بدن را مصرف می‌کند.",
    },
  },
  // Element 12: Mg (منیزیم)
  {
    identity: {
      atomicNumber: 12,
      symbol: "Mg",
      nameFa: "منیزیم",
      nameEn: "Magnesium",
      pronunciationFa: "مَنیزیُم",
      descriptionFa:
        "فلز سبک سازه‌ای با مقاومت عالی و اتم مرکزی حیاتی در مولکول کلروفیل برای عمل فتوسنتز گیاهان.",
    },
    classification: {
      group: 2,
      period: 3,
      block: "s",
      category: "alkaline-earth-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 12,
      electrons: 12,
      neutrons: 12,
      electronConfiguration: "1s² 2s² 2p⁶ 3s²",
      abbreviatedConfiguration: "[Ne] 3s²",
      electronShells: [2, 8, 2],
      valenceElectrons: 2,
      commonOxidationStates: [2],
      allOxidationStates: [2, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 24.305,
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
        value: 141,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 1.738,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای-سفید سبک با استحکام ساختاری مطلوب و درخشش فلزی",
      colorFa: "نقره‌ای براق",
      crystalStructureFa: "شش‌گوشه فشرده (hcp)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 923.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 1363.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 1.023,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 156.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.31,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 737.7,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: -40.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در هوا با شعله سفید بسیار خیره‌کننده می‌سوزد و با آب داغ هیدروژن آزاد می‌کند.",
      chemicalBehaviorFa:
        "از دست دادن دو الکترون لایه ظرفیت 3s² و تشکیل کاتیون دو بار مثبت پایدار Mg²⁺.",
    },
    history: {
      discovererFa: "همفری دیوی",
      discoveryYear: "1808",
      nameOriginFa: "منطقه باستانی مگنزیا (Magnesia) در تسالی یونان",
      namingExplanationFa:
        "برگرفته از نام کانی مگنزیت و سنگ‌های معدنی باستانی کشف شده در منطقه مگنزیا.",
    },
    applications: {
      industrial: [
        "آلیاژهای سبک و محکم بدنه هواپیما و خودرو",
        "آند فداشونده در حفاظت کاتدی خطوط لوله انتقال نفت و کشتی‌ها",
        "تولید آجر نسوز MgO در کوره‌ها",
      ],
      scientific: [
        "معرف‌های گرینیارد (R-Mg-X) در سنتز پیوندهای کربن-کربن شیمی آلی",
      ],
      medical: [
        "شیر منیزیم (Mg(OH)₂) به عنوان ضداسید معده و ملین ملایم",
        "سولفات منیزیم در درمان پره‌اکلامپسی زنان باردار",
      ],
      everyday: [
        "بدنه لپ‌تاپ‌های فوق‌سبک و دوربین‌های عکاسی حرفه‌ای",
        "پودر گچ ضدلغزش ژیمناست‌ها و صخره‌نوردان (کربنات منیزیم)",
      ],
    },
    safety: {
      toxicityFa: "عنصر ضروری رژیم غذایی؛ سمیت پایین در پستانداران سالم",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "آتش منیزیم هرگز با آب خاموش نمی‌شود، زیرا آب را تجزیه و شعله را تشدید می‌کند (تنها ماسه یا کپسول کلاس D).",
      hazardsFa:
        "پرتوهای فرابنفش شدید ناشی از سوختن منیزیم به شبکیه چشم آسیب می‌زند.",
    },
    isotopes: {
      stableCount: 3,
      commonIsotopes: ["²⁴Mg (۷۸.۹۹٪)", "²⁵Mg (۱۰.۰۰٪)", "²⁶Mg (۱۱.۰۱٪)"],
      mostStableIsotope: "²⁴Mg",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فلز سبک سازه‌ای با مقاومت عالی و اتم مرکزی حیاتی در مولکول کلروفیل برای عمل فتوسنتز گیاهان.",
      funFactsFa: [
        "اتم منیزیم در مرکز مولکول کلروفیل گیاهان همان نقشی را دارد که اتم آهن در هموگلوبین خون انسان ایفا می‌کند.",
        "مشعل فلاش دوربین‌های عکاسی قدیمی بر پایه سوختن پودر یا نوار منیزیم کار می‌کرد.",
      ],
      naturalOccurrenceFa:
        "هشتمین عنصر فراوان پوسته زمین و جزو فراوان‌ترین یون‌های محلول در آب اقیانوس‌ها.",
      keyCompoundsFa: [
        "اکسید منیزیم (MgO)",
        "سولفات منیزیم (نمک اپسوم، MgSO₄·7H₂O)",
        "هیدروکسید منیزیم (Mg(OH)₂)",
        "کلرید منیزیم (MgCl₂)",
      ],
      educationalNotesFa:
        "منیزیم در بدن به عنوان کوفاکتور در بیش از ۳۰۰ واکنش آنزیمی به ویژه مصرف ATP نقش ضروری دارد.",
    },
  },
  // Element 13: Al (آلومینیم)
  {
    identity: {
      atomicNumber: 13,
      symbol: "Al",
      nameFa: "آلومینیم",
      nameEn: "Aluminium",
      pronunciationFa: "آلومینیوم",
      descriptionFa:
        "فراوان‌ترین فلز در پوسته زمین که با وجود تمایل بالا به اکسیژن، به دلیل پدیده غیرفعال‌سازی (Passivation) مقاومت خوردگی بی‌نظیری دارد.",
    },
    classification: {
      group: 13,
      period: 3,
      block: "p",
      category: "post-transition-metal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 13,
      electrons: 13,
      neutrons: 14,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p¹",
      abbreviatedConfiguration: "[Ne] 3s² 3p¹",
      electronShells: [2, 8, 3],
      valenceElectrons: 3,
      commonOxidationStates: [3],
      allOxidationStates: [3, 1],
    },
    physicalProperties: {
      atomicMass: {
        value: 26.982,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 143,
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
        value: 2.7,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "فلز نقره‌ای سبک، چکش‌خوار، بسیار شکل‌پذیر با رسانایی حرارتی و الکتریکی عالی",
      colorFa: "نقره‌ای روشن",
      crystalStructureFa: "مکعبی مرکزپر (fcc)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 933.47,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 2792.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.897,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 237.0,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 1.61,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 577.5,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 42.5,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "سطح آن بلافاصله با اکسیژن هوا واکنش داده و لایه نازک و نامرئی اکسید آلومینیم محافظ Al₂O₃ تشکیل می‌دهد.",
      chemicalBehaviorFa:
        "خصلت آمفوتر دارد؛ هم در اسیدها و هم در بازهای قوی حل شده و گاز هیدروژن تولید می‌کند.",
    },
    history: {
      discovererFa: "هانس کریستین اورستد",
      discoveryYear: "1825",
      nameOriginFa: "واژه لاتین alumen به معنای زاج سفید",
      namingExplanationFa:
        "نام‌گذاری بر اساس زاج آلومینیوم (Alum) که از عهد کهن به عنوان تثبیت‌کننده رنگ کاربرد داشت.",
    },
    applications: {
      industrial: [
        "سازه بدنه هواپیماها و قطارهای سریع‌السیر",
        "کابل‌های فشار قوی انتقال برق سراسری",
        "قوطی‌های نوشیدنی و بسته‌بندی‌های فویل آلومینیوم",
      ],
      scientific: [
        "آینه‌های با کیفیت بالای تلسکوپ‌های اپتیکی با پوشش بازتابنده آلومینیم",
      ],
      medical: [
        "ترکیبات هیدروکسید آلومینیم به عنوان ادجوان در واکسن‌ها و داروهای ضداسید معده",
      ],
      everyday: [
        "فویل آشپزی",
        "فریم پنجره‌ها و درهای آلومینیومی",
        "ظروف پخت‌وپز سبک",
      ],
    },
    safety: {
      toxicityFa: "سمیت فیزیولوژیکی بسیار اندک در استفاده معمولی روزمره",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "غبار بسیار ریز آلومینیم خطر اشتعال و انفجار در هوای فشرده دارد.",
      hazardsFa:
        "استنشاق طولانی‌مدت غبار آسیاب آلومینیم سبب آسیب آلوئول‌های ریه می‌شود.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["²⁷Al (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "²⁷Al",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فراوان‌ترین فلز در پوسته زمین که با وجود تمایل بالا به اکسیژن، به دلیل پدیده غیرفعال‌سازی (Passivation) مقاومت خوردگی بی‌نظیری دارد.",
      funFactsFa: [
        "در قرن نوزدهم به دلیل دشواری استخراج، آلومینیم از طلا و نقره گران‌بها‌تر شمرده می‌شد!",
        "بازیافت قوطی‌های آلومینیومی تنها به ۵ درصد از انرژی مورد نیاز برای استخراج فلز اولیه از بوکسیت نیاز دارد.",
      ],
      naturalOccurrenceFa:
        "سومین عنصر فراوان پوسته زمین پس از اکسیژن و سیلیسیم، عمدتاً در سنگ معدن بوکسیت.",
      keyCompoundsFa: [
        "اکسید آلومینیم (آلومینا، Al₂O₃)",
        "کلرید آلومینیم (AlCl₃)",
        "هیدروکسید آلومینیم (Al(OH)₃)",
      ],
      educationalNotesFa:
        "روش الکترولیز هال-هرولت (Hall-Héroult) با حل کردن اکسید آلومینیم در کریولیت مذاب، انقلاب تولید صنعتی آن را رقم زد.",
    },
  },
  // Element 14: Si (سیلیسیم)
  {
    identity: {
      atomicNumber: 14,
      symbol: "Si",
      nameFa: "سیلیسیم",
      nameEn: "Silicon",
      pronunciationFa: "سیلیسیُم",
      descriptionFa:
        "دومین عنصر فراوان پوسته زمین و ستون فقرات عصر اطلاعات و انقلاب دیجیتال به عنوان قلب تمام مدارهای مجتمع.",
    },
    classification: {
      group: 14,
      period: 3,
      block: "p",
      category: "metalloid",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 14,
      electrons: 14,
      neutrons: 14,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p²",
      abbreviatedConfiguration: "[Ne] 3s² 3p²",
      electronShells: [2, 8, 4],
      valenceElectrons: 4,
      commonOxidationStates: [4],
      allOxidationStates: [4, 3, 2, 1, -1, -2, -3, -4],
    },
    physicalProperties: {
      atomicMass: {
        value: 28.085,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 111,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 111,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 2.329,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "شبه‌فلز سخت، شکننده با درخشش متالیک خاکستری-تیره و رسانایی الکتریکی نیمه‌رسانا",
      colorFa: "خاکستری تیره با بازتاب متالیک",
      crystalStructureFa: "مکعبی الماسی",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 1687.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 3538.0,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.705,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 149.0,
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
        value: 786.5,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 134.1,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "در دمای عادی غیرفعال است؛ در دماهای بالا با هالوژن‌ها ترکیب شده و با هیدروفلوئوریک اسید واکنش می‌دهد.",
      chemicalBehaviorFa:
        "تشکیل ساختارهای شبکه‌ای غول‌آسا از چهاروجهی‌های [SiO₄]⁴⁻ و پلیمرهای سیلیکونی انعطاف‌پذیر.",
    },
    history: {
      discovererFa: "یونس یاکوب برزلیوس",
      discoveryYear: "1824",
      nameOriginFa: "واژه لاتین silex یا silicis به معنای سنگ آتش‌زنه (چخماق)",
      namingExplanationFa:
        "برگرفته از نام کهن سنگ چخماق که برای افروختن آتش در باستان به کار می‌رفت.",
    },
    applications: {
      industrial: [
        "ویفرهای سیلیکونی در تراشه‌ها، پردازنده‌ها و ترانزیستورهای نیمه‌رسانا",
        "سلول‌های خورشیدی فتوولتائیک فوتونیک",
        "پلیمرهای سیلیکون در درزگیرها و قالب‌های حرارتی",
      ],
      scientific: [
        "بلورهای بسیار خالص تک‌کریستال برای بازتعریف کیلوگرم بر اساس ثابت پلانک",
      ],
      medical: ["ایمپلنت‌های زیست‌سازگار پزشکی و پروتزهای سیلیکونی"],
      everyday: [
        "شیشه پنجره‌ها (SiO₂)",
        "سرامیک و سفال",
        "پردازنده تمامی موبایل‌ها و کامپیوترها",
      ],
    },
    safety: {
      toxicityFa:
        "عنصر خالص غیرسمی است؛ استنشاق غبار کوارتز سیلیکا بیماری‌زاست",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کنترل تهویه در کارخانه‌های برش سنگ، شیشه‌سازی و ریخته‌گری برای مهار غبار بلورین.",
      hazardsFa:
        "بیماری سیلیکوزیس (فیبروز شدید ریوی) ناشی از استنشاق غبار آزاد سیلیس.",
    },
    isotopes: {
      stableCount: 3,
      commonIsotopes: [
        "²⁸Si (۹۲.۲۲٪)",
        "²⁹Si (۴.۶۹٪ دارای اسپین ۱/۲ در NMR)",
        "³⁰Si (۳.۰۹٪)",
      ],
      mostStableIsotope: "²⁸Si",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "دومین عنصر فراوان پوسته زمین و ستون فقرات عصر اطلاعات و انقلاب دیجیتال به عنوان قلب تمام مدارهای مجتمع.",
      funFactsFa: [
        "دره سیلیکون (Silicon Valley) در کالیفرنیا به نام این عنصر و صنعت تراشه‌های الکترونیکی نام‌گذاری شد.",
        "بیش از ۹۰ درصد پوسته زمین از کانی‌های سیلیکاتی و ترکیبات سیلیس تشکیل شده است.",
      ],
      naturalOccurrenceFa:
        "بسیار گسترده در کوارتز، ماسه، فلدسپات، گرانیت و رسوبات پوسته زمین.",
      keyCompoundsFa: [
        "دی‌اکسید سیلیسیم (کوارتز، ماسه، SiO₂)",
        "سیلیکون کاربید (SiC)",
        "تتراکلرید سیلیسیم (SiCl₄)",
        "پلی‌دی‌متیل‌سیلوکسان (سیلیکون)",
      ],
      educationalNotesFa:
        "شکاف انرژی نواری (Bandgap) سیلیکون در حدود ۱.۱ الکترون ولت است که آن را برای الکترونیک نیمه‌رسانا ایده‌آل می‌سازد.",
    },
  },
  // Element 15: P (فسفر)
  {
    identity: {
      atomicNumber: 15,
      symbol: "P",
      nameFa: "فسفر",
      nameEn: "Phosphorus",
      pronunciationFa: "فُسفُر",
      descriptionFa:
        "عنصر زیستی حیاتی که در زنجیره قند-فسفات مولکول‌های DNA و حامل اصلی انرژی سلولی (ATP) حضور دارد.",
    },
    classification: {
      group: 15,
      period: 3,
      block: "p",
      category: "nonmetal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 15,
      electrons: 15,
      neutrons: 16,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p³",
      abbreviatedConfiguration: "[Ne] 3s² 3p³",
      electronShells: [2, 8, 5],
      valenceElectrons: 5,
      commonOxidationStates: [5, 3, -3],
      allOxidationStates: [5, 4, 3, 2, 1, -1, -2, -3],
    },
    physicalProperties: {
      atomicMass: {
        value: 30.974,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 98,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 107,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 1.823,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "جامد با چند دگرشکل معروف: فسفر سفید مومی به شدت آتش‌گیر، فسفر قرمز پودری و فسفر سیاه نیمه‌رسانا",
      colorFa: "سفید مایل به زرد / سرخ / سیاه",
      crystalStructureFa: "مکعبی (فسفر سفید P₄) / بی‌شکل و پلیمری (فسفر قرمز)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 317.3,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 553.6,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.769,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.236,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.19,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1011.8,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 72.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "فسفر سفید در هوای آزاد خودبه‌خود با درخشش سبز-سفید مشتعل می‌شود؛ فسفر قرمز پایدارتر است.",
      chemicalBehaviorFa:
        "تشکیل پیوندهای سه‌گانه و پنج‌گانه به واسطه مشارکت اوربیتال‌های 3d خالی و گسترش لایه ظرفیت.",
    },
    history: {
      discovererFa: "هنیگ برند",
      discoveryYear: "1669",
      nameOriginFa: "واژه یونانی phosphoros به معنای آورنده نور یا مشعل‌دار",
      namingExplanationFa:
        "به دلیل پدیده کمولومینسانس و درخشش در تاریکی هنگام اکسایش آرام فسفر سفید.",
    },
    applications: {
      industrial: [
        "کودهای شیمیایی فسفاته برای تغذیه و رشد گیاهان",
        "کبریت‌سازی و باروت و مواد آتش‌بازی",
        "اسید فسفریک در نوشابه‌ها و تصفیه سطوح فلزی",
      ],
      scientific: [
        "سنتز اسیدهای نوکلئیک نشاندار با رادیوایزوتوپ فسفر-۳۲ در زیست‌شناسی مولکولی",
      ],
      medical: ["تأمین سلامت استخوان‌ها و دندان‌ها به صورت هیدروکسی‌آپاتیت"],
      everyday: [
        "نواره سمباده قوطی کبریت (فسفر قرمز)",
        "تثبیت‌کننده طعم ترش کولا (اسید فسفریک)",
      ],
    },
    safety: {
      toxicityFa:
        "فسفر سفید بسیار مهلک و سم قوی کبد است؛ فسفر قرمز نسبتاً بی‌خطر است",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "فسفر سفید حتماً باید زیر آب نگهداری شود تا با اکسیژن هوا تماس نیابد.",
      hazardsFa:
        "فسفر سفید سوختگی‌های فسفری عمیق و التیام‌ناپذیر تا استخوان ایجاد می‌کند.",
    },
    isotopes: {
      stableCount: 1,
      commonIsotopes: ["³¹P (۱۰۰٪ فراوانی طبیعی)"],
      mostStableIsotope: "³¹P",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر زیستی حیاتی که در زنجیره قند-فسفات مولکول‌های DNA و حامل اصلی انرژی سلولی (ATP) حضور دارد.",
      funFactsFa: [
        "هنیگ برند در تلاش برای تولید طلا از تقطیر ادرار انسان به طور تصادفی فسفر را کشف کرد!",
        "استخوان‌ها و مینای دندان‌های ما عمدتاً از کانی هیدروکسی‌آپاتیت که ترکیب فسفاته کلسیم است ساخته شده‌اند.",
      ],
      naturalOccurrenceFa:
        "تنها به صورت ترکیبات فسفاته در سنگ‌های فسفریت و آپاتیت استخراج می‌شود.",
      keyCompoundsFa: [
        "اسید فسفریک (H₃PO₄)",
        "هیدروکسی‌آپاتیت (Ca₅(PO₄)₃(OH))",
        "تترافسفر دکسااکسید (P₄O₁₀)",
        "آدنوزین تری‌فسفات (ATP)",
      ],
      educationalNotesFa:
        "تفاوت فاحش واکنش‌پذیری فسفر سفید و قرمز به دلیل تنش زاویه‌ای شدید ۶۰ درجه در مولکول چهاروجهی P₄ است.",
    },
  },
  // Element 16: S (گوگرد)
  {
    identity: {
      atomicNumber: 16,
      symbol: "S",
      nameFa: "گوگرد",
      nameEn: "Sulfur",
      pronunciationFa: "گوگِرد",
      descriptionFa:
        "عنصر زرد باستانی با تولید سالانه میلیون‌ها تن اسید سولفوریک که شاخص سنجش توان صنعتی کشورهاست.",
    },
    classification: {
      group: 16,
      period: 3,
      block: "p",
      category: "nonmetal",
      standardState: "solid",
    },
    atomicStructure: {
      protons: 16,
      electrons: 16,
      neutrons: 16,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁴",
      abbreviatedConfiguration: "[Ne] 3s² 3p⁴",
      electronShells: [2, 8, 6],
      valenceElectrons: 6,
      commonOxidationStates: [6, 4, -2],
      allOxidationStates: [6, 5, 4, 3, 2, 1, -1, -2],
    },
    physicalProperties: {
      atomicMass: {
        value: 32.06,
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
        value: 105,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 2.07,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "جامد بلوری زرد روشن، شکننده با بوی ضعیف که با شعله آبی می‌سوزد و گاز SO₂ با بوی تند متصاعد می‌کند",
      colorFa: "زرد لیمویی",
      crystalStructureFa: "لوزی‌سطحی (ارتورومبیک حلقه‌های S₈)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 388.36,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 717.8,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.705,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.205,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 2.58,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 999.6,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 200.4,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "با تمام فلزات به جز طلا و پلاتین در گرما ترکیب شده و سولفیدهای فلزی تولید می‌کند.",
      chemicalBehaviorFa:
        "تشکیل زنجیره‌ها و حلقه‌های هشت‌تایی S₈ با اعداد اکسایش متداول -۲، +۴ و +۶.",
    },
    history: {
      discovererFa: "نامعلوم (شناخته شده از عهد باستان)",
      discoveryYear: "باستان",
      nameOriginFa:
        "واژه سانسکریت sulvere و واژه لاتین sulphurium به معنای سنگ آتشین",
      namingExplanationFa:
        "اشاره به گوگرد آتشفشانی قابل اشتعال که در متون باستان و کیمیاگری شناخته شده بود.",
    },
    applications: {
      industrial: [
        "تولید اسید سولفوریک (سلطان مواد شیمیایی صنعتی)",
        "فرایند ولکانیزاسیون لاستیک تایرها برای افزایش استحکام",
        "تولید قارچ‌کش‌ها و آفت‌کش‌های کشاورزی",
      ],
      scientific: [
        "پل‌های دی‌سولفیدی (-S-S-) در حفظ ساختار سوم و فضایی پروتئین‌ها",
      ],
      medical: ["پمادهای پوستی ضدجوش، ضدقارچ و صابون‌های درمانی گوگردی"],
      everyday: [
        "کبریت و باروت سیاه",
        "نگهدارنده در میوه‌های خشک به صورت دی‌اکسید گوگرد",
      ],
    },
    safety: {
      toxicityFa:
        "گوگرد عنصری سمیت پایینی دارد؛ گازهای H₂S و SO₂ به شدت سمی و خطرناک هستند",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "کنترل انتشار گازهای خروجی گوگرددار و استفاده از تصفیه‌کننده هود اسکرابر.",
      hazardsFa:
        "سولفید هیدروژن (H₂S) در غلظت‌های بالا فلج‌کننده مرکز تنفس و کشنده فوری است.",
    },
    isotopes: {
      stableCount: 4,
      commonIsotopes: [
        "³²S (۹۴.۹۹٪)",
        "³⁴S (۴.۲۵٪)",
        "³³S (۰.۷۵٪)",
        "³⁶S (۰.۰۱٪)",
      ],
      mostStableIsotope: "³²S",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "عنصر زرد باستانی با تولید سالانه میلیون‌ها تن اسید سولفوریک که شاخص سنجش توان صنعتی کشورهاست.",
      funFactsFa: [
        "میزان مصرف اسید سولفوریک در یک کشور اغلب به عنوان شاخصی معتبر از توسعه‌یافتگی صنعتی آن کشور در نظر گرفته می‌شود.",
        "بوی تند پیاز خرد شده و سیر ناشی از ترکیبات آلی گوگرددار فرار است.",
      ],
      naturalOccurrenceFa:
        "به شکل آزاد در دهانه آتشفشان‌ها و به صورت کانی‌های پیریت (FeS₂)، گالن (PbS) و گچ (CaSO₄).",
      keyCompoundsFa: [
        "اسید سولفوریک (H₂SO₄)",
        "دی‌اکسید گوگرد (SO₂)",
        "سولفید هیدروژن (H₂S)",
        "سولفات کلسیم (گچ)",
      ],
      educationalNotesFa:
        "اسیدهای آمینه ضروری سیستئین و متیونین حاوی اتم گوگرد هستند که اتصالات دی‌سولفیدی پروتئین‌ها را می‌سازند.",
    },
  },
  // Element 17: Cl (کلر)
  {
    identity: {
      atomicNumber: 17,
      symbol: "Cl",
      nameFa: "کلر",
      nameEn: "Chlorine",
      pronunciationFa: "کلُر",
      descriptionFa:
        "هالوژن فراوان اقیانوس‌ها و کلید پاکیزگی آب شرب جهان که دارای بالاترین الکترون‌خواهی در میان تمام عناصر است.",
    },
    classification: {
      group: 17,
      period: 3,
      block: "p",
      category: "halogen",
      standardState: "gas",
    },
    atomicStructure: {
      protons: 17,
      electrons: 17,
      neutrons: 18,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁵",
      abbreviatedConfiguration: "[Ne] 3s² 3p⁵",
      electronShells: [2, 8, 7],
      valenceElectrons: 7,
      commonOxidationStates: [-1, 1, 3, 5, 7],
      allOxidationStates: [7, 6, 5, 4, 3, 2, 1, -1],
    },
    physicalProperties: {
      atomicMass: {
        value: 35.45,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 79,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 102,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 3.214,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "گاز زرد مایل به سبز، سنگین‌تر از هوا، با بوی بسیار تند، نافذ و سوزاننده",
      colorFa: "زرد-سبز کم‌رنگ",
      crystalStructureFa: "ارتورومبیک (در دمای زیر ۱۷۱ کلوین)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 171.6,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 239.11,
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
        value: 0.0089,
        origin: "experimental",
        unit: "W/(m·K)",
        unitFa: "وات بر متر کلوین",
      },
    },
    chemicalProperties: {
      electronegativityPauling: {
        value: 3.16,
        origin: "experimental",
        unit: "",
        unitFa: "",
      },
      firstIonizationEnergy: {
        value: 1251.2,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      electronAffinity: {
        value: 349.0,
        origin: "experimental",
        unit: "kJ/mol",
        unitFa: "کیلوژول بر مول",
      },
      reactivityFa:
        "اکسیدکننده قوی و بسیار واکنش‌پذیر؛ با تمام عناصر به استثنای گازهای نجیب سبک ترکیب می‌شود.",
      chemicalBehaviorFa:
        "بالاترین الکترون‌خواهی را در تمام جدول تناوبی دارد و با جذب ۱ الکترون آنیون پایدار Cl⁻ تشکیل می‌دهد.",
    },
    history: {
      discovererFa: "کارل ویلهلم شیله",
      discoveryYear: "1774",
      nameOriginFa: "واژه یونانی chloros به معنای زرد مایل به سبز کم‌رنگ",
      namingExplanationFa:
        "نام‌گذاری توسط سر همفری دیوی بر پایه رنگ ظاهری گاز در سال ۱۸۱۰.",
    },
    applications: {
      industrial: [
        "تصفیه و گندزدایی آب آشامیدنی شهری و استخرها",
        "تولید پلی‌وینیل کلراید (پلیمر پرکاربرد PVC)",
        "تولید سفیدکننده‌ها، حلال‌های صنعتی و کاغذ",
      ],
      scientific: ["سنتز هزاران ترکیب واسطه دارویی و ترکیبات آلی کلردار"],
      medical: ["ضدعفونی‌کننده‌های بیمارستانی هیپوکلریت سدیم و آنتی‌سپتیک‌ها"],
      everyday: [
        "مایع سفیدکننده خانگی (وایتکس)",
        "لوله‌های پلاستیکی پی‌وی‌سی ساختمان",
      ],
    },
    safety: {
      toxicityFa: "بسیار سمی و خفه‌کننده با آسیب شدید به بافت ریه",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa:
        "سیستم‌های اخطار نشت گاز کلر و تجهیزات تنفسی مستقل مداربسته در ایستگاه‌های تصفیه آب.",
      hazardsFa:
        "واکنش با رطوبت مجاری تنفسی و تولید اسید هیدروکلریک که ادم ریوی کشنده ایجاد می‌کند.",
    },
    isotopes: {
      stableCount: 2,
      commonIsotopes: [
        "³⁵Cl (۷۵.۷۶٪)",
        "³⁷Cl (۲۴.۲۴٪ نسبت ۳ به ۱ در طیف‌سنجی جرمی)",
      ],
      mostStableIsotope: "³⁵Cl",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "هالوژن فراوان اقیانوس‌ها و کلید پاکیزگی آب شرب جهان که دارای بالاترین الکترون‌خواهی در میان تمام عناصر است.",
      funFactsFa: [
        "کلر نخستین گاز سمی بود که در جنگ جهانی اول به عنوان سلاح شیمیایی در نبرد ایپر به کار رفت.",
        "کلرزنی آب آشامیدنی از اوایل قرن بیستم مرگ‌ومیر ناشی از بیماری‌های وبا و حصبه را در جهان ریشه‌کن کرد.",
      ],
      naturalOccurrenceFa:
        "به وفور به شکل یون کلرید محلول در آب اقیانوس‌ها و رسوبات نمک طعام سنگ نمک.",
      keyCompoundsFa: [
        "کلرید سدیم (نمک، NaCl)",
        "هیدروکلریک اسید (جوهر نمک، HCl)",
        "هیپوکلریت سدیم (NaClO)",
        "پلی‌وینیل کلراید (PVC)",
      ],
      educationalNotesFa:
        "الکترون‌خواهی کلر (۳۴۹ kJ/mol) حتی از فلوئور بیشتر است، زیرا چگالی بار در اوربیتال 3p کلر کمتر و دافعه الکترونی کمتر است.",
    },
  },
  // Element 18: Ar (آرگون)
  {
    identity: {
      atomicNumber: 18,
      symbol: "Ar",
      nameFa: "آرگون",
      nameEn: "Argon",
      pronunciationFa: "آرگُن",
      descriptionFa:
        "فراوان‌ترین گاز نجیب اتمسفر زمین که نزدیک به ۱ درصد حجم هوا را به خود اختصاص داده است.",
    },
    classification: {
      group: 18,
      period: 3,
      block: "p",
      category: "noble-gas",
      standardState: "gas",
    },
    atomicStructure: {
      protons: 18,
      electrons: 18,
      neutrons: 22,
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶",
      abbreviatedConfiguration: "[Ne] 3s² 3p⁶",
      electronShells: [2, 8, 8],
      valenceElectrons: 8,
      commonOxidationStates: [0],
      allOxidationStates: [0],
    },
    physicalProperties: {
      atomicMass: {
        value: 39.948,
        origin: "experimental",
        unit: "u",
        unitFa: "یکای جرم اتمی",
      },
      atomicRadius: {
        value: 71,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      covalentRadius: {
        value: 106,
        origin: "experimental",
        unit: "pm",
        unitFa: "پیکومتر",
      },
      density: {
        value: 1.784,
        origin: "experimental",
        unit: "g/cm³",
        unitFa: "گرم بر سانتی‌متر مکعب",
      },
      appearanceFa:
        "گاز نجیب بی‌رنگ، بی‌بو، بی‌مزه و خنثی با درخشش بنفش-آبی در تخلیه الکتریکی",
      colorFa: "بی‌رنگ (بنفش یاسی در پلاسما)",
      crystalStructureFa: "مکعبی مرکزپر (fcc در فاز جامد برودتی)",
    },
    thermalProperties: {
      meltingPointKelvin: {
        value: 83.8,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      boilingPointKelvin: {
        value: 87.3,
        origin: "experimental",
        unit: "K",
        unitFa: "کلوین",
      },
      specificHeat: {
        value: 0.52,
        origin: "experimental",
        unit: "J/(g·K)",
        unitFa: "ژول بر گرم کلوین",
      },
      thermalConductivity: {
        value: 0.01772,
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
        value: 1520.6,
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
        "بسیار بی‌اثر؛ در شرایط عادی در هیچ واکنش شیمیایی وارد نمی‌شود.",
      chemicalBehaviorFa:
        "دارای لایه ظرفیت پر 3s² 3p⁶؛ تنها یک ترکیب ناپایدار HArF در دمای زیر ۴۰ کلوین سنتز شده است.",
    },
    history: {
      discovererFa: "لرد ریلی و ویلیام رمزی",
      discoveryYear: "1894",
      nameOriginFa: "واژه یونانی argos به معنای تنبل یا بی‌اثر و غیرفعال",
      namingExplanationFa:
        "به دلیل ناتوانی کامل آن در برقراری واکنش با هرگونه ماده شیمیایی در آزمایشگاه.",
    },
    applications: {
      industrial: [
        "گاز محافظ جوشکاری قوس الکتریکی تنگستن (TIG) برای جلوگیری از اکسایش فلزات",
        "پر کردن فضای بین شیشه‌های دوجداره برای عایق‌بندی حرارتی",
        "فضای بی‌اثر برای رشد کریستال‌های فوق‌خالص سیلیکون",
      ],
      scientific: [
        "تاریخ‌گذاری رادیومتریک پتاسیم-آرگون (K-Ar) در تعیین سن سنگ‌های آتشفشانی کهن",
      ],
      medical: ["لیزرهای آرگون در جراحی‌های چشم برای انعقاد عروق خونی شبکیه"],
      everyday: ["پر کردن لامپ‌های رشته‌ای و شیشه‌های عایق حرارتی ساختمان‌ها"],
    },
    safety: {
      toxicityFa: "کاملاً بی‌ضرر از نظر فیزیولوژیکی و غیرسمی",
      radioactivity: false,
      radiationType: "ندارد",
      precautionsFa: "استفاده از تهویه مناسب هنگام جوشکاری در مخازن بسته.",
      hazardsFa:
        "سنگین‌تر از هواست و در چاه‌ها و فضاهای فرورفته تجمع یافته و موجب خفگی ناگهانی می‌شود.",
    },
    isotopes: {
      stableCount: 3,
      commonIsotopes: [
        "⁴⁰Ar (۹۹.۶٪ محصول واپاشی پتاسیم-۴۰)",
        "³⁶Ar (۰.۳۴٪)",
        "³⁸Ar (۰.۰۶٪)",
      ],
      mostStableIsotope: "⁴⁰Ar",
      halfLife: "پایدار",
    },
    additionalContent: {
      summaryFa:
        "فراوان‌ترین گاز نجیب اتمسفر زمین که نزدیک به ۱ درصد حجم هوا را به خود اختصاص داده است.",
      funFactsFa: [
        "آرگون موجود در جو زمین عمدتاً محصول واپاشی پرتوزای ایزوتوپ پتاسیم-۴۰ در پوسته زمین طی میلیاردها سال است.",
        "نسخه خطی اصل اعلامیه استقلال آمریکا و منشور کبیر بریتانیا در محفظه‌های پر از گاز آرگون نگهداری می‌شوند تا از پوسیدگی مصون بمانند.",
      ],
      naturalOccurrenceFa:
        "حدود ۰.۹۳ درصد از حجم اتمسفر زمین و از تقطیر هوای مایع جدا می‌شود.",
      keyCompoundsFa: ["آرگون فلوروهیدرید (HArF در دمای منفی ۲۳۳ درجه)"],
      educationalNotesFa:
        "با اینکه عدد اتمی آرگون (۱۸) از پتاسیم (۱۹) کمتر است، به دلیل غلبه ایزوتوپ سنگین آرگون-۴۰، جرم اتمی آن اندکی از پتاسیم بیشتر است!",
    },
  },
];
