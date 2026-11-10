/**
 * Scientific Data Provenance & Authorities
 * Mars Element
 */

export interface SourceReference {
  id: string;
  authority: string;
  title: string;
  dataset: string;
  year: number;
  url: string;
  descriptionFa: string;
}

export const SCIENTIFIC_REFERENCES: SourceReference[] = [
  {
    id: 'iupac',
    authority: 'IUPAC',
    title: 'Compendium of Chemical Terminology & Atomic Weights',
    dataset: 'Standard Atomic Weights of the Elements',
    year: 2021,
    url: 'https://iupac.org',
    descriptionFa: 'اتحادیه بین‌المللی شیمی محض و کاربردی، مرجع اصلی نام‌گذاری و وزن اتمی استاندارد.',
  },
  {
    id: 'ciaaw',
    authority: 'CIAAW',
    title: 'Commission on Isotopic Abundances and Atomic Weights',
    dataset: 'Isotopic Compositions of the Elements',
    year: 2023,
    url: 'https://ciaaw.org',
    descriptionFa: 'کمیسیون فراوانی ایزوتوپی و وزن‌های اتمی، تعیین‌کننده جرم‌های مرجع ایزوتوپ‌ها.',
  },
  {
    id: 'nist',
    authority: 'NIST',
    title: 'National Institute of Standards and Technology',
    dataset: 'NIST Atomic Spectra Database & Physical Reference Data',
    year: 2023,
    url: 'https://physics.nist.gov/asd',
    descriptionFa: 'پایگاه داده ترازهای انرژی، انرژی‌های یونش و آرایش الکترونی استاندارد.',
  },
  {
    id: 'pubchem',
    authority: 'PubChem (NIH)',
    title: 'Periodic Table of Elements',
    dataset: 'PubChem Element Data Repository',
    year: 2024,
    url: 'https://pubchem.ncbi.nlm.nih.gov/periodic-table/',
    descriptionFa: 'مجموعه داده‌های ترموشیمی، نقاط ذوب، جوش، چگالی و خصوصیات فیزیکی.',
  },
  {
    id: 'webelements',
    authority: 'WebElements & CRC',
    title: 'CRC Handbook of Chemistry and Physics',
    dataset: '104th Edition Physical Constants of Inorganic Compounds',
    year: 2024,
    url: 'https://hbcponline.com',
    descriptionFa: 'مرجع معتبر داده‌های ساختار کریستالی، ظرفیت گرمایی و رسانندگی حرارتی.',
  },
];

