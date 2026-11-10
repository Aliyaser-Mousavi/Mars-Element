/**
 * Standard Scientific Units Dictionary
 * Marslement - Chemical Database
 */

export interface UnitDefinition {
  symbol: string;
  nameEn: string;
  nameFa: string;
  descriptionFa: string;
}

export const SCIENTIFIC_UNITS: Record<string, UnitDefinition> = {
  atomicMass: {
    symbol: "u",
    nameEn: "unified atomic mass unit (Dalton)",
    nameFa: "یکای جرم اتمی (دالتون)",
    descriptionFa: "معادل یک دوازدهم جرم یک اتم کربن-۱۲ در حالت پایه.",
  },
  picometer: {
    symbol: "pm",
    nameEn: "picometer",
    nameFa: "پیکومتر",
    descriptionFa: "۱۰ به توان منفی ۱۲ متر، برای ابعاد شعاع اتمی و پیوندی.",
  },
  densitySolidLiquid: {
    symbol: "g/cm³",
    nameEn: "grams per cubic centimeter",
    nameFa: "گرم بر سانتی‌متر مکعب",
    descriptionFa: "چگالی حالت‌های جامد و مایع در شرایط استاندارد (STP).",
  },
  densityGas: {
    symbol: "g/L",
    nameEn: "grams per liter",
    nameFa: "گرم بر لیتر",
    descriptionFa: "چگالی گازها در شرایط استاندارد دما و فشار.",
  },
  temperatureKelvin: {
    symbol: "K",
    nameEn: "Kelvin",
    nameFa: "کلوین",
    descriptionFa: "یکای اصلی دما در سیستم بین‌المللی یکاها (SI).",
  },
  temperatureCelsius: {
    symbol: "°C",
    nameEn: "degrees Celsius",
    nameFa: "درجه سلسیوس",
    descriptionFa: "دمای متداول بر پایه نقطه انجماد و جوش آب.",
  },
  energyKiloJoulePerMole: {
    symbol: "kJ/mol",
    nameEn: "kilojoules per mole",
    nameFa: "کیلوژول بر مول",
    descriptionFa: "یکای انرژی یونش و الکترون‌خواهی به ازای هر مول اتم.",
  },
  specificHeatCapacity: {
    symbol: "J/(g·K)",
    nameEn: "joules per gram kelvin",
    nameFa: "ژول بر گرم کلوین",
    descriptionFa:
      "مقدار گرمای لازم برای افزایش دمای یک گرم ماده به اندازه یک کلوین.",
  },
  thermalConductivity: {
    symbol: "W/(m·K)",
    nameEn: "watts per meter kelvin",
    nameFa: "وات بر متر کلوین",
    descriptionFa: "نرخ انتقال حرارت رسانشی در ماده.",
  },
};
