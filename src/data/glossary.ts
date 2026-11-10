/**
 * Persian Chemistry Terminology Dictionary
 * دانشنامه واژگان و اصطلاحات تخصصی شیمی
 */

export interface TermDefinition {
  termFa: string;
  termEn: string;
  definitionFa: string;
}

export const CHEMISTRY_GLOSSARY: Record<string, TermDefinition> = {
  atomicNumber: {
    termFa: 'عدد اتمی',
    termEn: 'Atomic Number (Z)',
    definitionFa: 'تعداد پروتون‌های موجود در هسته یک اتم که معرف هویت شیمیایی آن عنصر است.',
  },
  atomicMass: {
    termFa: 'جرم اتمی',
    termEn: 'Atomic Mass',
    definitionFa: 'میانگین جرم اتم‌های یک عنصر بر حسب یکای جرم اتمی با توجه به فراوانی ایزوتوپ‌ها.',
  },
  electronegativity: {
    termFa: 'الکترونگاتیوی',
    termEn: 'Electronegativity',
    definitionFa: 'میزان تمایل نسبی یک اتم برای جذب جفت‌الکترون‌های اشتراکی در یک پیوند شیمیایی (مقیاس پاولینگ).',
  },
  ionizationEnergy: {
    termFa: 'انرژی نخستین یونش',
    termEn: 'First Ionization Energy',
    definitionFa: 'حداقل انرژی مورد نیاز برای جداسازی سست‌ترین الکترون از یک اتم گازی خنثی در حالت پایه.',
  },
  electronAffinity: {
    termFa: 'الکترون‌خواهی',
    termEn: 'Electron Affinity',
    definitionFa: 'مقدار انرژی مبادله‌شده هنگام افزودن یک الکترون به یک اتم گازی خنثی جهت تشکیل یون منفی.',
  },
  oxidationState: {
    termFa: 'عدد اکسایش',
    termEn: 'Oxidation State',
    definitionFa: 'بار فرضی که یک اتم در صورت یونی بودن تمام پیوندهایش با اتم‌های دیگر به دست می‌آورد.',
  },
  electronConfiguration: {
    termFa: 'آرایش الکترونی',
    termEn: 'Electron Configuration',
    definitionFa: 'نحوه توزیع و چینش الکترون‌ها در لایه‌ها و زیرلایه‌های اتمی بر اساس اصل آفبا، قاعده هوند و اصل پائولی.',
  },
  electronShells: {
    termFa: 'لایه‌های الکترونی',
    termEn: 'Electron Shells',
    definitionFa: 'ترازهای اصلی انرژی پیرامون هسته که با نمادهای K, L, M, N, O, P, Q یا اعداد کوانتومی اصلی n=1..7 نشان داده می‌شوند.',
  },
  valenceElectrons: {
    termFa: 'الکترون‌های ظرفیت',
    termEn: 'Valence Electrons',
    definitionFa: 'الکترون‌های بیرونی‌ترین لایه یا زیرلایه‌های فعال که در تشکیل پیوندهای شیمیایی شرکت می‌کنند.',
  },
  standardState: {
    termFa: 'حالت استاندارد',
    termEn: 'Standard State',
    definitionFa: 'پایدارترین حالت فیزیکی ماده در دمای ۲۹۸.۱۵ کلوین (۲۵ درجه سلسیوس) و فشار ۱ اتمسفر (۱۰۱.۳۲۵ کیلوپاسکال).',
  },
  radioactivity: {
    termFa: 'پرتوزایی',
    termEn: 'Radioactivity',
    definitionFa: 'فرایند واپاشی خودبه‌خودی هسته‌های ناپایدار همراه با گسیل ذرات باردار یا امواج الکترومغناطیسی پرانرژی.',
  },
  halfLife: {
    termFa: 'نیمه‌عمر',
    termEn: 'Half-Life',
    definitionFa: 'مدت زمانی که طول می‌کشد تا نیمی از هسته‌های رادیواکتیو یک نمونه معین دچار واپاشی شوند.',
  },
};

