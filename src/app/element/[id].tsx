import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { ScreenContainer, Card } from '../../components';
import { lightAppTheme } from '../../theme';
import { elementRepository } from '../../services/elementService';
import { CATEGORY_COLOR_MAP } from '../../constants/colors';
import { ELEMENT_CATEGORIES } from '../../constants/element-categories';
import { formatAtomicMass } from '../../utils/format';
import { toPersianDigits } from '../../utils/rtl';
import { favoritesStorage } from '../../services/favoritesService';
import { historyStorage } from '../../services/historyService';
import { BohrModel } from '../../features/element-details/BohrModel';
import { ExpandableSection } from '../../features/element-details/ExpandableSection';
import { PropertyRow } from '../../features/element-details/PropertyRow';

export default function ElementDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const atomicNumber = params.id ? parseInt(params.id, 10) : 1;

  const [isFav, setIsFav] = useState(false);

  // Dynamically retrieve the element from repository
  const element = elementRepository.getByAtomicNumber(atomicNumber);

  useEffect(() => {
    if (element) {
      favoritesStorage.isFavorite(element.identity.atomicNumber).then(setIsFav);
      historyStorage.recordView(element.identity.atomicNumber);
    }
  }, [atomicNumber, element]);

  if (!element) {
    return (
      <ScreenContainer scrollable>
        <Card style={styles.errorCard}>
          <Ionicons name="alert-circle-outline" size={48} color={lightAppTheme.colors.coral} />
          <Text style={styles.errorTitle}>عنصر مورد نظر یافت نشد</Text>
          <Text style={styles.errorSubtitle}>
            شماره اتمی {toPersianDigits(atomicNumber)} در جدول تناوبی تعریف نشده است.
          </Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.replace('/')}
          >
            <Text style={styles.backButtonText}>بازگشت به جدول تناوبی</Text>
          </TouchableOpacity>
        </Card>
      </ScreenContainer>
    );
  }

  const categoryColor = CATEGORY_COLOR_MAP[element.classification.category] || lightAppTheme.colors.scientificGreen;
  const categoryMeta = ELEMENT_CATEGORIES[element.classification.category];

  // Previous & Next element handlers
  const hasPrev = atomicNumber > 1;
  const hasNext = atomicNumber < 118;

  const goToPrev = () => {
    if (hasPrev) {
      router.setParams({ id: String(atomicNumber - 1) });
    }
  };

  const goToNext = () => {
    if (hasNext) {
      router.setParams({ id: String(atomicNumber + 1) });
    }
  };

  // Toggle favorite
  const handleToggleFavorite = async () => {
    const updated = await favoritesStorage.toggleFavorite(element.identity.atomicNumber);
    setIsFav(updated);
    const msg = updated ? 'به علاقه‌مندی‌ها اضافه شد' : 'از علاقه‌مندی‌ها حذف شد';
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    }
  };

  // Copy symbol to clipboard
  const handleCopySymbol = async () => {
    await Clipboard.setStringAsync(element.identity.symbol);
    const msg = `نماد شیمیایی ${element.identity.symbol} کپی شد`;
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      Alert.alert('کپی شد', msg);
    }
  };

  // Native share element profile
  const handleShare = async () => {
    try {
      const shareMessage = `🔬 عنصر ${element.identity.nameFa} (${element.identity.symbol})
شماره اتمی: ${element.identity.atomicNumber}
جرم اتمی: ${element.physicalProperties.atomicMass.value ?? '-'}
دسته: ${categoryMeta?.nameFa ?? element.classification.category}
آرایش الکترونی: ${element.atomicStructure.electronConfiguration}

اپلیکیشن مارس المنت (Mars Element - دانشنامه آفلاین شیمی)`;

      await Share.share({
        message: shareMessage,
        title: `شناسنامه شیمیایی ${element.identity.nameFa}`,
      });
    } catch {
      // User dismissed share dialog
    }
  };

  // State in Persian
  const stateFaMap: Record<string, string> = {
    solid: 'جامد',
    liquid: 'مایع',
    gas: 'گاز',
    unknown: 'نامشخص',
  };

  return (
    <ScreenContainer scrollable>
      {/* Top Action Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.navActionBtn}
          onPress={() => router.replace('/')}
          activeOpacity={0.7}
        >
          <Ionicons name="grid-outline" size={20} color={lightAppTheme.colors.forestGreen} />
          <Text style={styles.navActionText}>جدول تناوبی</Text>
        </TouchableOpacity>

        <View style={styles.topRightActions}>
          <TouchableOpacity
            style={styles.iconCircleBtn}
            onPress={handleCopySymbol}
            activeOpacity={0.7}
          >
            <Ionicons name="copy-outline" size={18} color={lightAppTheme.colors.forestGreen} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconCircleBtn}
            onPress={handleShare}
            activeOpacity={0.7}
          >
            <Ionicons name="share-social-outline" size={18} color={lightAppTheme.colors.forestGreen} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconCircleBtn}
            onPress={handleToggleFavorite}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isFav ? 'heart' : 'heart-outline'}
              size={20}
              color={isFav ? lightAppTheme.colors.coral : lightAppTheme.colors.forestGreen}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Prev / Next Quick Switcher Bar */}
      <View style={styles.paginationRow}>
        <TouchableOpacity
          style={[styles.pageButton, !hasPrev && styles.pageButtonDisabled]}
          disabled={!hasPrev}
          onPress={goToPrev}
          activeOpacity={0.7}
        >
          <Ionicons
            name="chevron-forward-outline"
            size={18}
            color={hasPrev ? lightAppTheme.colors.forestGreen : '#B0BEC5'}
          />
          <Text style={[styles.pageButtonText, !hasPrev && styles.pageButtonTextDisabled]}>
            {hasPrev ? `عنصر قبلی (${toPersianDigits(atomicNumber - 1)})` : 'شروع جدول'}
          </Text>
        </TouchableOpacity>

        <View style={styles.pageCenterBadge}>
          <Text style={styles.pageCenterText}>
            {toPersianDigits(atomicNumber)} از {toPersianDigits(118)}
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.pageButton, !hasNext && styles.pageButtonDisabled]}
          disabled={!hasNext}
          onPress={goToNext}
          activeOpacity={0.7}
        >
          <Text style={[styles.pageButtonText, !hasNext && styles.pageButtonTextDisabled]}>
            {hasNext ? `عنصر بعدی (${toPersianDigits(atomicNumber + 1)})` : 'پایان جدول'}
          </Text>
          <Ionicons
            name="chevron-back-outline"
            size={18}
            color={hasNext ? lightAppTheme.colors.forestGreen : '#B0BEC5'}
          />
        </TouchableOpacity>
      </View>

      {/* Hero Card */}
      <Card variant="elevated" style={[styles.heroCard, { borderTopColor: categoryColor }]}>
        <View style={styles.heroHeader}>
          {/* Tile Preview */}
          <View style={[styles.heroTile, { borderColor: categoryColor, backgroundColor: `${categoryColor}12` }]}>
            <View style={styles.tileNumberRow}>
              <Text style={styles.tileNumber}>{toPersianDigits(element.identity.atomicNumber)}</Text>
              <View style={[styles.tileColorDot, { backgroundColor: categoryColor }]} />
            </View>
            <Text style={styles.tileSymbol}>{element.identity.symbol}</Text>
            <Text style={styles.tileNameFa}>{element.identity.nameFa}</Text>
            <Text style={styles.tileMass}>
              {formatAtomicMass(element.physicalProperties.atomicMass.value ?? 0, 2)}
            </Text>
          </View>

          {/* Identity Information */}
          <View style={styles.heroInfo}>
            <View style={[styles.categoryPill, { backgroundColor: `${categoryColor}20`, borderColor: categoryColor }]}>
              <Text style={[styles.categoryPillText, { color: categoryColor }]}>
                {categoryMeta?.nameFa ?? element.classification.category}
              </Text>
            </View>

            <Text style={styles.heroNameFa}>{element.identity.nameFa}</Text>
            <Text style={styles.heroNameEn}>{element.identity.nameEn}</Text>
            <Text style={styles.heroPronunciation}>تلفظ: {element.identity.pronunciationFa}</Text>

            <View style={styles.coordBadges}>
              <View style={styles.coordBadge}>
                <Text style={styles.coordLabel}>دوره:</Text>
                <Text style={styles.coordValue}>{toPersianDigits(element.classification.period)}</Text>
              </View>
              <View style={styles.coordBadge}>
                <Text style={styles.coordLabel}>گروه:</Text>
                <Text style={styles.coordValue}>
                  {element.classification.group !== null
                    ? toPersianDigits(element.classification.group)
                    : 'بلوک f'}
                </Text>
              </View>
              <View style={styles.coordBadge}>
                <Text style={styles.coordLabel}>بلوک:</Text>
                <Text style={[styles.coordValue, styles.monoText]}>{element.classification.block}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Short Summary Description */}
        <View style={styles.heroDescriptionBox}>
          <Text style={styles.heroDescriptionText}>
            {element.additionalContent.summaryFa || element.identity.descriptionFa}
          </Text>
        </View>
      </Card>

      {/* Dynamic Bohr Atomic Model */}
      <Card variant="outlined" style={styles.bohrCard}>
        <View style={styles.bohrHeader}>
          <Ionicons name="planet-outline" size={20} color={categoryColor} />
          <Text style={styles.bohrTitle}>مدل اتمی بور (توزیع الکترونی لایه‌ها)</Text>
        </View>

        <BohrModel
          symbol={element.identity.symbol}
          protons={element.atomicStructure.protons}
          neutrons={element.atomicStructure.neutrons}
          shells={element.atomicStructure.electronShells}
          accentColor={categoryColor}
          size={290}
        />

        <View style={styles.bohrFooter}>
          <Text style={styles.bohrFormula}>
            توزیع لایه‌ای: {element.atomicStructure.electronShells.map(toPersianDigits).join(' ، ')}
          </Text>
        </View>
      </Card>

      {/* SECTION 1: شناسنامه عنصر */}
      <ExpandableSection title="۱. شناسنامه عنصر" iconName="finger-print-outline" defaultExpanded>
        <PropertyRow label="نام فارسی" value={element.identity.nameFa} />
        <PropertyRow label="نام استاندارد انگلیسی" value={element.identity.nameEn} isMono />
        <PropertyRow label="نماد شیمیایی" value={element.identity.symbol} isMono />
        <PropertyRow label="شماره اتمی (Z)" value={element.identity.atomicNumber} />
        <PropertyRow
          label="جرم اتمی استاندارد"
          scientificValue={element.physicalProperties.atomicMass}
          unit="دالتون (u)"
        />
        <PropertyRow label="خانواده و دسته" value={categoryMeta?.nameFa ?? element.classification.category} />
        <PropertyRow label="دوره جدول تناوبی" value={element.classification.period} />
        <PropertyRow
          label="گروه جدول تناوبی"
          value={element.classification.group !== null ? element.classification.group : 'فاقد گروه (بلوک f)'}
        />
        <PropertyRow label="بلوک الکترونی" value={element.classification.block} isMono />
        <PropertyRow label="حالت در شرایط استاندارد" value={stateFaMap[element.classification.standardState]} />
      </ExpandableSection>

      {/* SECTION 2: ساختار اتمی */}
      <ExpandableSection title="۲. ساختار اتمی" iconName="nuclear-outline" defaultExpanded>
        <PropertyRow label="تعداد پروتون‌ها (p⁺)" value={element.atomicStructure.protons} />
        <PropertyRow label="تعداد الکترون‌ها (e⁻)" value={element.atomicStructure.electrons} />
        <PropertyRow
          label={`تعداد نوترون‌ها (n⁰)`}
          value={element.atomicStructure.neutrons}
          unit={`(ایزوتوپ مرجع: ${element.isotopes.mostStableIsotope || element.isotopes.commonIsotopes[0] || 'اصلی'})`}
        />
        <PropertyRow
          label="الکترون‌های ظرفیت"
          value={element.atomicStructure.valenceElectrons !== null ? element.atomicStructure.valenceElectrons : 'نامشخص'}
        />
        <PropertyRow
          label="شعاع اتمی تجربی"
          scientificValue={element.physicalProperties.atomicRadius}
          unit="پیکومتر (pm)"
        />
        <PropertyRow
          label="شعاع کووالانسی"
          scientificValue={element.physicalProperties.covalentRadius}
          unit="پیکومتر (pm)"
        />
      </ExpandableSection>

      {/* SECTION 3: آرایش الکترونی */}
      <ExpandableSection title="۳. آرایش الکترونی" iconName="layers-outline">
        <PropertyRow
          label="آرایش الکترونی کامل"
          value={element.atomicStructure.electronConfiguration}
          isMono
        />
        <PropertyRow
          label="آرایش الکترونی مختصر (گاز نجیب)"
          value={element.atomicStructure.abbreviatedConfiguration}
          isMono
        />
        <PropertyRow
          label="لایه‌های الکترونی (K تا Q)"
          value={element.atomicStructure.electronShells.map(toPersianDigits).join(' - ')}
        />
        <PropertyRow
          label="حالت‌های اکسایش رایج"
          value={
            element.atomicStructure.commonOxidationStates.length > 0
              ? element.atomicStructure.commonOxidationStates.map((s) => (s > 0 ? `+${s}` : `${s}`)).join(' ، ')
              : 'صفر'
          }
        />
        <PropertyRow
          label="همه حالت‌های اکسایش ممکن"
          value={
            element.atomicStructure.allOxidationStates.length > 0
              ? element.atomicStructure.allOxidationStates.map((s) => (s > 0 ? `+${s}` : `${s}`)).join(' ، ')
              : 'نامشخص'
          }
        />
      </ExpandableSection>

      {/* SECTION 4: خواص فیزیکی */}
      <ExpandableSection title="۴. خواص فیزیکی" iconName="speedometer-outline">
        <PropertyRow
          label="چگالی در شرایط استاندارد"
          scientificValue={element.physicalProperties.density}
        />
        <PropertyRow label="ظاهر فیزیکی" value={element.physicalProperties.appearanceFa} />
        <PropertyRow label="رنگ ظاهری" value={element.physicalProperties.colorFa} />
        <PropertyRow
          label="ساختار شبکه بلوری"
          value={element.physicalProperties.crystalStructureFa || 'فاقد بلور یا نامشخص'}
        />
        <PropertyRow label="منشأ در طبیعت" value={element.additionalContent.naturalOccurrenceFa} />
      </ExpandableSection>

      {/* SECTION 5: خواص شیمیایی */}
      <ExpandableSection title="۵. خواص شیمیایی" iconName="flask-outline">
        <PropertyRow
          label="الکترونگاتیوی (مقیاس پاولینگ)"
          scientificValue={element.chemicalProperties.electronegativityPauling}
        />
        <PropertyRow
          label="انرژی نخستین یونش"
          scientificValue={element.chemicalProperties.firstIonizationEnergy}
        />
        <PropertyRow
          label="الکترون‌خواهی"
          scientificValue={element.chemicalProperties.electronAffinity}
        />
        <PropertyRow label="میزان واکنش‌پذیری" value={element.chemicalProperties.reactivityFa} />
        <PropertyRow label="رفتار شیمیایی" value={element.chemicalProperties.chemicalBehaviorFa} />
        <View style={styles.compoundsBox}>
          <Text style={styles.subHeading}>ترکیبات مهم و مشهور:</Text>
          {element.additionalContent.keyCompoundsFa.map((compound, idx) => (
            <View key={idx} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: categoryColor }]} />
              <Text style={styles.bulletText}>{compound}</Text>
            </View>
          ))}
        </View>
      </ExpandableSection>

      {/* SECTION 6: خواص حرارتی */}
      <ExpandableSection title="۶. خواص حرارتی" iconName="flame-outline">
        <PropertyRow
          label="نقطه ذوب (کلوین)"
          scientificValue={element.thermalProperties.meltingPointKelvin}
        />
        <PropertyRow
          label="نقطه جوش (کلوین)"
          scientificValue={element.thermalProperties.boilingPointKelvin}
        />
        <PropertyRow
          label="ظرفیت گرمایی ویژه"
          scientificValue={element.thermalProperties.specificHeat}
        />
        <PropertyRow
          label="رسانندگی گرمایی"
          scientificValue={element.thermalProperties.thermalConductivity}
        />
      </ExpandableSection>

      {/* SECTION 7: تاریخچه کشف */}
      <ExpandableSection title="۷. تاریخچه کشف" iconName="time-outline">
        <PropertyRow label="کاشف" value={element.history.discovererFa} />
        <PropertyRow
          label="سال کشف"
          value={
            typeof element.history.discoveryYear === 'number'
              ? `${toPersianDigits(element.history.discoveryYear)} میلادی`
              : element.history.discoveryYear
          }
        />
        <PropertyRow label="ریشه نام‌گذاری" value={element.history.nameOriginFa} />
        <View style={styles.textBox}>
          <Text style={styles.subHeading}>توضیحات پیرامون وجه تسمیه:</Text>
          <Text style={styles.textBody}>{element.history.namingExplanationFa}</Text>
        </View>
      </ExpandableSection>

      {/* SECTION 8: کاربردها */}
      <ExpandableSection title="۸. کاربردها" iconName="construct-outline">
        <View style={styles.appBlock}>
          <Text style={styles.subHeading}>کاربردهای صنعتی:</Text>
          {element.applications.industrial.map((item, idx) => (
            <View key={`ind-${idx}`} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: lightAppTheme.colors.scientificGreen }]} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.appBlock}>
          <Text style={styles.subHeading}>کاربردهای علمی و پژوهشی:</Text>
          {element.applications.scientific.map((item, idx) => (
            <View key={`sci-${idx}`} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: lightAppTheme.colors.oceanBlue }]} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        {element.applications.medical && element.applications.medical.length > 0 && (
          <View style={styles.appBlock}>
            <Text style={styles.subHeading}>کاربردهای پزشکی و بهداشتی:</Text>
            {element.applications.medical.map((item, idx) => (
              <View key={`med-${idx}`} style={styles.bulletRow}>
                <View style={[styles.bulletDot, { backgroundColor: lightAppTheme.colors.purple }]} />
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.appBlock}>
          <Text style={styles.subHeading}>کاربردهای روزمره:</Text>
          {element.applications.everyday.map((item, idx) => (
            <View key={`every-${idx}`} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: lightAppTheme.colors.goldenAccent }]} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>
      </ExpandableSection>

      {/* SECTION 9: ایزوتوپ‌ها */}
      <ExpandableSection title="۹. ایزوتوپ‌ها" iconName="git-network-outline">
        <PropertyRow
          label="تعداد ایزوتوپ‌های پایدار"
          value={
            element.isotopes.stableCount > 0
              ? `${toPersianDigits(element.isotopes.stableCount)} ایزوتوپ پایدار`
              : 'فاقد ایزوتوپ پایدار (پرتوزا)'
          }
        />
        <PropertyRow
          label="پایدارترین ایزوتوپ"
          value={element.isotopes.mostStableIsotope || 'نامشخص'}
          isMono
        />
        <PropertyRow
          label="نیمه‌عمر پایدارترین ایزوتوپ"
          value={element.isotopes.halfLife || 'پایدار'}
        />
        <View style={styles.textBox}>
          <Text style={styles.subHeading}>ایزوتوپ‌های مهم و شناخته‌شده:</Text>
          <View style={styles.isotopesChipsRow}>
            {element.isotopes.commonIsotopes.map((iso, idx) => (
              <View key={`iso-${idx}`} style={styles.isotopeChip}>
                <Text style={styles.isotopeChipText}>{iso}</Text>
              </View>
            ))}
          </View>
        </View>
      </ExpandableSection>

      {/* SECTION 10: ایمنی و خطرات */}
      <ExpandableSection title="۱۰. ایمنی و خطرات" iconName="shield-checkmark-outline">
        <PropertyRow
          label="وضعیت پرتوزایی (رادیواکتیو)"
          value={element.safety.radioactivity ? 'بله ⚠️ (پرتوزا)' : 'خیر (غیرپرتوزا)'}
        />
        {element.safety.radiationType && (
          <PropertyRow label="نوع تابش ساطع‌شده" value={element.safety.radiationType} />
        )}
        <PropertyRow label="میزان سمیت" value={element.safety.toxicityFa} />
        <View style={styles.textBox}>
          <Text style={styles.subHeading}>خطرات عمده:</Text>
          <Text style={styles.textBody}>{element.safety.hazardsFa}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.subHeading}>نکات و تدابیر ایمنی:</Text>
          <Text style={styles.textBody}>{element.safety.precautionsFa}</Text>
        </View>
      </ExpandableSection>

      {/* SECTION 11: حقایق جالب و یادداشت‌های آموزشی */}
      <ExpandableSection title="۱۱. حقایق جالب و نکات آموزشی" iconName="bulb-outline">
        <View style={styles.textBox}>
          <Text style={styles.subHeading}>حقایق جذاب علمی:</Text>
          {element.additionalContent.funFactsFa.map((fact, idx) => (
            <View key={`fact-${idx}`} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: lightAppTheme.colors.goldenAccent }]} />
              <Text style={styles.bulletText}>{fact}</Text>
            </View>
          ))}
        </View>

        {element.additionalContent.educationalNotesFa ? (
          <View style={[styles.textBox, styles.noteBox]}>
            <Text style={styles.subHeading}>نکته آموزشی کنکوری و مفهومی:</Text>
            <Text style={styles.textBody}>{element.additionalContent.educationalNotesFa}</Text>
          </View>
        ) : null}
      </ExpandableSection>

      <View style={{ height: 40 }} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  navActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: lightAppTheme.borderRadius.md,
    gap: 6,
  },
  navActionText: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: lightAppTheme.colors.forestGreen,
  },
  topRightActions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconCircleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: lightAppTheme.colors.surface,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
  },
  pageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
  },
  pageButtonDisabled: {
    opacity: 0.35,
  },
  pageButtonText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.forestGreen,
  },
  pageButtonTextDisabled: {
    color: '#90A4AE',
  },
  pageCenterBadge: {
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  pageCenterText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: lightAppTheme.colors.forestGreen,
  },
  heroCard: {
    marginBottom: 14,
    borderTopWidth: 4,
  },
  heroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  heroTile: {
    width: 95,
    height: 115,
    borderWidth: 2,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tileNumberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  tileNumber: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  tileColorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  tileSymbol: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'System',
    color: lightAppTheme.colors.primaryText,
  },
  tileNameFa: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  tileMass: {
    fontSize: 9.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.secondaryText,
  },
  heroInfo: {
    flex: 1,
    alignItems: 'flex-start',
  },
  categoryPill: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 6,
  },
  categoryPillText: {
    fontSize: 10.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  heroNameFa: {
    fontSize: 22,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  heroNameEn: {
    fontSize: 13,
    fontFamily: 'System',
    color: lightAppTheme.colors.secondaryText,
    marginBottom: 2,
  },
  heroPronunciation: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    marginBottom: 8,
  },
  coordBadges: {
    flexDirection: 'row',
    gap: 6,
  },
  coordBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F4F2',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
    gap: 3,
  },
  coordLabel: {
    fontSize: 10,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
  },
  coordValue: {
    fontSize: 10.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  monoText: {
    fontFamily: 'System',
  },
  heroDescriptionBox: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEF3F0',
  },
  heroDescriptionText: {
    fontSize: 12.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.primaryText,
    lineHeight: 22,
    textAlign: 'justify',
  },
  bohrCard: {
    marginBottom: 14,
    padding: 16,
    alignItems: 'center',
  },
  bohrHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  bohrTitle: {
    fontSize: 14,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  bohrFooter: {
    marginTop: 8,
  },
  bohrFormula: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.secondaryText,
  },
  compoundsBox: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F0F4F2',
  },
  subHeading: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
    marginBottom: 6,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginVertical: 4,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 6,
  },
  bulletText: {
    flex: 1,
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.primaryText,
    lineHeight: 19,
  },
  textBox: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F0F4F2',
  },
  textBody: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.primaryText,
    lineHeight: 20,
    textAlign: 'justify',
  },
  appBlock: {
    marginVertical: 6,
  },
  isotopesChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 6,
  },
  isotopeChip: {
    backgroundColor: '#EDF2F7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  isotopeChipText: {
    fontSize: 11,
    fontFamily: 'System',
    color: lightAppTheme.colors.primaryText,
  },
  noteBox: {
    backgroundColor: '#F7FAFC',
    padding: 10,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: lightAppTheme.colors.scientificGreen,
  },
  errorCard: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 40,
  },
  errorTitle: {
    fontSize: 16,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
    marginTop: 12,
  },
  errorSubtitle: {
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    marginTop: 6,
    textAlign: 'center',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: lightAppTheme.colors.scientificGreen,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: lightAppTheme.borderRadius.md,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
  },
});
