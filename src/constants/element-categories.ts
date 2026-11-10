import { ElementCategory } from '@/types';
import { CATEGORY_COLOR_MAP } from './colors';

export interface ElementCategoryMeta {
  id: ElementCategory;
  nameFa: string;
  nameEn: string;
  color: string;
}

export const ELEMENT_CATEGORIES: Record<ElementCategory, ElementCategoryMeta> = {
  'alkali-metal': {
    id: 'alkali-metal',
    nameFa: 'فلزهای قلیایی',
    nameEn: 'Alkali Metals',
    color: CATEGORY_COLOR_MAP['alkali-metal'],
  },
  'alkaline-earth-metal': {
    id: 'alkaline-earth-metal',
    nameFa: 'فلزهای قلیایی خاکی',
    nameEn: 'Alkaline Earth Metals',
    color: CATEGORY_COLOR_MAP['alkaline-earth-metal'],
  },
  'transition-metal': {
    id: 'transition-metal',
    nameFa: 'فلزهای واسطه',
    nameEn: 'Transition Metals',
    color: CATEGORY_COLOR_MAP['transition-metal'],
  },
  'post-transition-metal': {
    id: 'post-transition-metal',
    nameFa: 'فلزهای پس‌واسطه',
    nameEn: 'Post-transition Metals',
    color: CATEGORY_COLOR_MAP['post-transition-metal'],
  },
  metalloid: {
    id: 'metalloid',
    nameFa: 'شبه‌فلزها',
    nameEn: 'Metalloids',
    color: CATEGORY_COLOR_MAP.metalloid,
  },
  nonmetal: {
    id: 'nonmetal',
    nameFa: 'نافلزها',
    nameEn: 'Nonmetals',
    color: CATEGORY_COLOR_MAP.nonmetal,
  },
  halogen: {
    id: 'halogen',
    nameFa: 'هالوژن‌ها',
    nameEn: 'Halogens',
    color: CATEGORY_COLOR_MAP.halogen,
  },
  'noble-gas': {
    id: 'noble-gas',
    nameFa: 'گازهای نجیب',
    nameEn: 'Noble Gases',
    color: CATEGORY_COLOR_MAP['noble-gas'],
  },
  lanthanide: {
    id: 'lanthanide',
    nameFa: 'لانتانیدها',
    nameEn: 'Lanthanides',
    color: CATEGORY_COLOR_MAP.lanthanide,
  },
  actinide: {
    id: 'actinide',
    nameFa: 'آکتینیدها',
    nameEn: 'Actinides',
    color: CATEGORY_COLOR_MAP.actinide,
  },
  unknown: {
    id: 'unknown',
    nameFa: 'دسته‌بندی ناشناخته',
    nameEn: 'Unknown Classification',
    color: CATEGORY_COLOR_MAP.unknown,
  },
};

