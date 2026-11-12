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
import { ScreenContainer, Card } from '@/components';
import { useTheme } from '@/theme';
import { elementRepository } from '@/services/elementService';
import { CATEGORY_COLOR_MAP } from '@/constants/colors';
import { ELEMENT_CATEGORIES } from '@/constants/element-categories';
import { formatAtomicMass } from '@/utils/format';
import { toPersianDigits } from '@/utils/rtl';
import { favoritesStorage } from '@/services/favoritesService';
import { historyStorage } from '@/services/historyService';
import { BohrModel } from '@/features/element-details/BohrModel';
import { ExpandableSection } from '@/features/element-details/ExpandableSection';
import { PropertyRow } from '@/features/element-details/PropertyRow';

export default function ElementDetailScreen() {
  const router = useRouter();
  const theme = useTheme();
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
          <Ionicons name="alert-circle-outline" size={48} color={theme.colors.coral} />
          <Text
            style={[
              styles.errorTitle,
              { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianBold },
            ]}
          >
            عنصر مورد نظر یافت نشد
          </Text>
          <Text
            style={[
              styles.errorSubtitle,
              { color: theme.colors.secondaryText, fontFamily: theme.fontFamily.persianRegular },
            ]}
          >
            شماره اتمی {toPersianDigits(atomicNumber)} در جدول تناوبی تعریف نشده است.
          </Text>
          <TouchableOpacity
            style={[styles.backButton, { backgroundColor: theme.colors.scientificGreen }]}
            onPress={() => router.replace('/')}
          >
            <Text
              style={[
                styles.backButtonText,
                { fontFamily: theme.fontFamily.persianSemiBold },
              ]}
            >
              بازگشت به جدول تناوبی
            </Text>
          </TouchableOpacity>
        </Card>
      </ScreenContainer>
    );
  }

  const categoryColor =
    CATEGORY_COLOR_MAP[element.classification.category] || theme.colors.scientificGreen;
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
    <ScreenContainer scrollable contentContainerStyle={styles.containerPadding}>
      {/* Top Action Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[
            styles.navActionBtn,
            {
              backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.lightGreen,
              borderColor: theme.colors.cardBorder,
            },
          ]}
          onPress={() => router.replace('/')}
          activeOpacity={theme.interactive.activeOpacity}
          accessibilityRole="button"
          accessibilityLabel="بازگشت به جدول تناوبی"
        >
          <Ionicons name="grid-outline" size={17} color={theme.colors.forestGreen} />
          <Text
            style={[
              styles.navActionText,
              {
                color: theme.colors.forestGreen,
                fontFamily: theme.fontFamily.persianSemiBold,
              },
            ]}
          >
            جدول تناوبی
          </Text>
        </TouchableOpacity>

        <View style={styles.topRightActions}>
          <TouchableOpacity
            style={[
              styles.iconCircleBtn,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.cardBorder,
              },
            ]}
            onPress={handleCopySymbol}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel="کپی نماد شیمیایی"
          >
            <Ionicons name="copy-outline" size={17} color={theme.colors.primaryText} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.iconCircleBtn,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.cardBorder,
              },
            ]}
            onPress={handleShare}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel="اشتراک‌گذاری اطلاعات عنصر"
          >
            <Ionicons name="share-social-outline" size={17} color={theme.colors.primaryText} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.iconCircleBtn,
              {
                backgroundColor: isFav
                  ? theme.isDark ? `${theme.colors.coral}25` : '#FDF2F2'
                  : theme.colors.card,
                borderColor: isFav ? theme.colors.coral : theme.colors.cardBorder,
              },
            ]}
            onPress={handleToggleFavorite}
            activeOpacity={theme.interactive.activeOpacity}
            accessibilityRole="button"
            accessibilityLabel={isFav ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}
          >
            <Ionicons
              name={isFav ? 'heart' : 'heart-outline'}
              size={18}
              color={isFav ? theme.colors.coral : theme.colors.secondaryText}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Prev / Next Quick Switcher Bar */}
      <View
        style={[
          styles.paginationRow,
          {
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.cardBorder,
          },
        ]}
      >
        {/* Previous Element (Right in RTL) */}
        <TouchableOpacity
          style={[styles.pageButton, !hasPrev && styles.pageButtonDisabled]}
          disabled={!hasPrev}
          onPress={goToPrev}
          activeOpacity={theme.interactive.activeOpacity}
          accessibilityRole="button"
          accessibilityLabel="عنصر قبلی"
        >
          <Ionicons
            name="chevron-forward-outline"
            size={16}
            color={hasPrev ? theme.colors.forestGreen : theme.colors.secondaryText}
          />
          <Text
            style={[
              styles.pageButtonText,
              {
                color: hasPrev ? theme.colors.primaryText : theme.colors.secondaryText,
                fontFamily: theme.fontFamily.persianMedium,
              },
            ]}
          >
            {hasPrev ? `عنصر قبلی (${toPersianDigits(atomicNumber - 1)})` : 'شروع جدول'}
          </Text>
        </TouchableOpacity>

        {/* Center Progress Badge */}
        <View
          style={[
            styles.pageCenterBadge,
            {
              backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}20` : theme.colors.lightGreen,
            },
          ]}
        >
          <Text
            style={[
              styles.pageCenterText,
              {
                color: theme.colors.scientificGreen,
                fontFamily: theme.fontFamily.persianSemiBold,
              },
            ]}
          >
            {toPersianDigits(atomicNumber)} از {toPersianDigits(118)}
          </Text>
        </View>

        {/* Next Element (Left in RTL) */}
        <TouchableOpacity
          style={[styles.pageButton, !hasNext && styles.pageButtonDisabled]}
          disabled={!hasNext}
          onPress={goToNext}
          activeOpacity={theme.interactive.activeOpacity}
          accessibilityRole="button"
          accessibilityLabel="عنصر بعدی"
        >
          <Text
            style={[
              styles.pageButtonText,
              {
                color: hasNext ? theme.colors.primaryText : theme.colors.secondaryText,
                fontFamily: theme.fontFamily.persianMedium,
              },
            ]}
          >
            {hasNext ? `عنصر بعدی (${toPersianDigits(atomicNumber + 1)})` : 'پایان جدول'}
          </Text>
          <Ionicons
            name="chevron-back-outline"
            size={16}
            color={hasNext ? theme.colors.forestGreen : theme.colors.secondaryText}
          />
        </TouchableOpacity>
      </View>

      {/* Hero Identity Section */}
      <View
        style={[
          styles.heroCard,
          {
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.cardBorder,
            borderStartColor: categoryColor,
            borderStartWidth: 4,
            borderRadius: theme.borderRadius.md,
          },
        ]}
      >
        <View style={styles.heroHeader}>
          {/* Tile Preview Box */}
          <View
            style={[
              styles.heroTile,
              {
                borderColor: `${categoryColor}80`,
                backgroundColor: `${categoryColor}12`,
                borderRadius: theme.borderRadius.sm,
              },
            ]}
          >
            <View style={styles.tileNumberRow}>
              <Text
                style={[
                  styles.tileNumber,
                  {
                    color: theme.colors.secondaryText,
                    fontFamily: theme.fontFamily.latinScientific,
                  },
                ]}
              >
                {element.identity.atomicNumber}
              </Text>
              <View style={[styles.tileColorDot, { backgroundColor: categoryColor }]} />
            </View>
            <Text
              style={[
                styles.tileSymbol,
                {
                  color: theme.colors.primaryText,
                  fontFamily: theme.fontFamily.latinScientific,
                },
              ]}
            >
              {element.identity.symbol}
            </Text>
            <Text
              style={[
                styles.tileNameFa,
                {
                  color: theme.colors.primaryText,
                  fontFamily: theme.fontFamily.persianBold,
                },
              ]}
            >
              {element.identity.nameFa}
            </Text>
            <Text
              style={[
                styles.tileMass,
                {
                  color: theme.colors.secondaryText,
                  fontFamily: theme.fontFamily.latinScientific,
                },
              ]}
            >
              {formatAtomicMass(element.physicalProperties.atomicMass.value ?? 0, 2)}
            </Text>
          </View>

          {/* Identity Information Details */}
          <View style={styles.heroInfo}>
            <View
              style={[
                styles.categoryPill,
                {
                  backgroundColor: `${categoryColor}1A`,
                  borderColor: `${categoryColor}40`,
                },
              ]}
            >
              <View style={[styles.categoryDot, { backgroundColor: categoryColor }]} />
              <Text style={[styles.categoryPillText, { color: categoryColor }]}>
                {categoryMeta?.nameFa ?? element.classification.category}
              </Text>
            </View>

            <Text
              style={[
                styles.heroNameFa,
                {
                  color: theme.colors.primaryText,
                  fontFamily: theme.fontFamily.persianBold,
                },
              ]}
            >
              {element.identity.nameFa}
            </Text>
            <Text
              style={[
                styles.heroNameEn,
                {
                  color: theme.colors.secondaryText,
                  fontFamily: theme.fontFamily.latinScientific,
                },
              ]}
            >
              {element.identity.nameEn}
            </Text>
            <Text
              style={[
                styles.heroPronunciation,
                {
                  color: theme.colors.secondaryText,
                  fontFamily: theme.fontFamily.persianRegular,
                },
              ]}
            >
              تلفظ: {element.identity.pronunciationFa}
            </Text>

            {/* Coordinate Badges Row */}
            <View style={styles.coordBadges}>
              <View
                style={[
                  styles.coordBadge,
                  {
                    backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.surfaceMuted,
                  },
                ]}
              >
                <Text style={[styles.coordLabel, { color: theme.colors.secondaryText }]}>دوره:</Text>
                <Text style={[styles.coordValue, { color: theme.colors.primaryText }]}>
                  {toPersianDigits(element.classification.period)}
                </Text>
              </View>

              <View
                style={[
                  styles.coordBadge,
                  {
                    backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.surfaceMuted,
                  },
                ]}
              >
                <Text style={[styles.coordLabel, { color: theme.colors.secondaryText }]}>گروه:</Text>
                <Text style={[styles.coordValue, { color: theme.colors.primaryText }]}>
                  {element.classification.group !== null
                    ? toPersianDigits(element.classification.group)
                    : 'بلوک f'}
                </Text>
              </View>

              <View
                style={[
                  styles.coordBadge,
                  {
                    backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.surfaceMuted,
                  },
                ]}
              >
                <Text style={[styles.coordLabel, { color: theme.colors.secondaryText }]}>بلوک:</Text>
                <Text
                  style={[
                    styles.coordValue,
                    {
                      color: theme.colors.primaryText,
                      fontFamily: theme.fontFamily.latinScientific,
                    },
                  ]}
                >
                  {element.classification.block}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Short Summary Description */}
        <View style={[styles.heroDescriptionBox, { borderTopColor: theme.colors.separator }]}>
          <Text
            style={[
              styles.heroDescriptionText,
              {
                color: theme.colors.primaryText,
                fontFamily: theme.fontFamily.persianRegular,
              },
            ]}
          >
            {element.additionalContent.summaryFa || element.identity.descriptionFa}
          </Text>
        </View>
      </View>

      {/* Centerpiece: Dynamic Bohr Atomic Model */}
      <View
        style={[
          styles.bohrCard,
          {
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.cardBorder,
            borderRadius: theme.borderRadius.md,
          },
        ]}
      >
        <View style={styles.bohrHeader}>
          <Ionicons name="planet-outline" size={20} color={categoryColor} />
          <Text
            style={[
              styles.bohrTitle,
              {
                color: theme.colors.primaryText,
                fontFamily: theme.fontFamily.persianBold,
              },
            ]}
          >
            مدل اتمی بور (توزیع الکترونی لایه‌ها)
          </Text>
        </View>

        <BohrModel
          symbol={element.identity.symbol}
          protons={element.atomicStructure.protons}
          neutrons={element.atomicStructure.neutrons}
          shells={element.atomicStructure.electronShells}
          accentColor={categoryColor}
        />

        <View
          style={[
            styles.bohrFooter,
            {
              backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.surfaceMuted,
            },
          ]}
        >
          <Text
            style={[
              styles.bohrFormula,
              {
                color: theme.colors.secondaryText,
                fontFamily: theme.fontFamily.persianMedium,
              },
            ]}
          >
            توزیع لایه‌ای الکترون‌ها: {element.atomicStructure.electronShells.map(toPersianDigits).join(' ، ')}
          </Text>
        </View>
      </View>

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
          label="تعداد نوترون‌ها (n⁰)"
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
        <View style={[styles.compoundsBox, { borderTopColor: theme.colors.separator }]}>
          <Text
            style={[
              styles.subHeading,
              { color: theme.colors.forestGreen, fontFamily: theme.fontFamily.persianBold },
            ]}
          >
            ترکیبات مهم و مشهور:
          </Text>
          {element.additionalContent.keyCompoundsFa.map((compound, idx) => (
            <View key={idx} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: categoryColor }]} />
              <Text
                style={[
                  styles.bulletText,
                  { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianRegular },
                ]}
              >
                {compound}
              </Text>
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
        <View style={[styles.textBox, { borderTopColor: theme.colors.separator }]}>
          <Text
            style={[
              styles.subHeading,
              { color: theme.colors.forestGreen, fontFamily: theme.fontFamily.persianBold },
            ]}
          >
            توضیحات پیرامون وجه تسمیه:
          </Text>
          <Text
            style={[
              styles.textBody,
              { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianRegular },
            ]}
          >
            {element.history.namingExplanationFa}
          </Text>
        </View>
      </ExpandableSection>

      {/* SECTION 8: کاربردها */}
      <ExpandableSection title="۸. کاربردها" iconName="construct-outline">
        <View style={styles.appBlock}>
          <Text
            style={[
              styles.subHeading,
              { color: theme.colors.scientificGreen, fontFamily: theme.fontFamily.persianBold },
            ]}
          >
            کاربردهای صنعتی:
          </Text>
          {element.applications.industrial.map((item, idx) => (
            <View key={`ind-${idx}`} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: theme.colors.scientificGreen }]} />
              <Text
                style={[
                  styles.bulletText,
                  { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianRegular },
                ]}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.appBlock}>
          <Text
            style={[
              styles.subHeading,
              { color: theme.colors.oceanBlue, fontFamily: theme.fontFamily.persianBold },
            ]}
          >
            کاربردهای علمی و پژوهشی:
          </Text>
          {element.applications.scientific.map((item, idx) => (
            <View key={`sci-${idx}`} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: theme.colors.oceanBlue }]} />
              <Text
                style={[
                  styles.bulletText,
                  { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianRegular },
                ]}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>

        {element.applications.medical && element.applications.medical.length > 0 && (
          <View style={styles.appBlock}>
            <Text
              style={[
                styles.subHeading,
                { color: theme.colors.purple, fontFamily: theme.fontFamily.persianBold },
              ]}
            >
              کاربردهای پزشکی و بهداشتی:
            </Text>
            {element.applications.medical.map((item, idx) => (
              <View key={`med-${idx}`} style={styles.bulletRow}>
                <View style={[styles.bulletDot, { backgroundColor: theme.colors.purple }]} />
                <Text
                  style={[
                    styles.bulletText,
                    { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianRegular },
                  ]}
                >
                  {item}
                </Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.appBlock}>
          <Text
            style={[
              styles.subHeading,
              { color: theme.colors.goldenAccent, fontFamily: theme.fontFamily.persianBold },
            ]}
          >
            کاربردهای روزمره:
          </Text>
          {element.applications.everyday.map((item, idx) => (
            <View key={`every-${idx}`} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: theme.colors.goldenAccent }]} />
              <Text
                style={[
                  styles.bulletText,
                  { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianRegular },
                ]}
              >
                {item}
              </Text>
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
        <View style={[styles.textBox, { borderTopColor: theme.colors.separator }]}>
          <Text
            style={[
              styles.subHeading,
              { color: theme.colors.forestGreen, fontFamily: theme.fontFamily.persianBold },
            ]}
          >
            ایزوتوپ‌های مهم و شناخته‌شده:
          </Text>
          <View style={styles.isotopesChipsRow}>
            {element.isotopes.commonIsotopes.map((iso, idx) => (
              <View
                key={`iso-${idx}`}
                style={[
                  styles.isotopeChip,
                  {
                    backgroundColor: theme.isDark ? theme.colors.surfaceElevated : '#EEF2F6',
                    borderColor: theme.colors.cardBorder,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.isotopeChipText,
                    {
                      color: theme.colors.primaryText,
                      fontFamily: theme.fontFamily.latinScientific,
                    },
                  ]}
                >
                  {iso}
                </Text>
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
        <View style={[styles.textBox, { borderTopColor: theme.colors.separator }]}>
          <Text
            style={[
              styles.subHeading,
              { color: theme.colors.forestGreen, fontFamily: theme.fontFamily.persianBold },
            ]}
          >
            خطرات عمده:
          </Text>
          <Text
            style={[
              styles.textBody,
              { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianRegular },
            ]}
          >
            {element.safety.hazardsFa}
          </Text>
        </View>
        <View style={[styles.textBox, { borderTopColor: theme.colors.separator }]}>
          <Text
            style={[
              styles.subHeading,
              { color: theme.colors.forestGreen, fontFamily: theme.fontFamily.persianBold },
            ]}
          >
            نکات و تدابیر ایمنی:
          </Text>
          <Text
            style={[
              styles.textBody,
              { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianRegular },
            ]}
          >
            {element.safety.precautionsFa}
          </Text>
        </View>
      </ExpandableSection>

      {/* SECTION 11: حقایق جالب و یادداشت‌های آموزشی */}
      <ExpandableSection title="۱۱. حقایق جالب و نکات آموزشی" iconName="bulb-outline">
        <View style={[styles.textBox, { borderTopColor: 'transparent' }]}>
          <Text
            style={[
              styles.subHeading,
              { color: theme.colors.goldenAccent, fontFamily: theme.fontFamily.persianBold },
            ]}
          >
            حقایق جذاب علمی:
          </Text>
          {element.additionalContent.funFactsFa.map((fact, idx) => (
            <View key={`fact-${idx}`} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: theme.colors.goldenAccent }]} />
              <Text
                style={[
                  styles.bulletText,
                  { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianRegular },
                ]}
              >
                {fact}
              </Text>
            </View>
          ))}
        </View>

        {element.additionalContent.educationalNotesFa ? (
          <View
            style={[
              styles.noteBox,
              {
                backgroundColor: theme.isDark ? `${theme.colors.scientificGreen}15` : '#F3F9F6',
                borderStartColor: theme.colors.scientificGreen,
                borderStartWidth: 3,
              },
            ]}
          >
            <Text
              style={[
                styles.subHeading,
                { color: theme.colors.scientificGreen, fontFamily: theme.fontFamily.persianBold },
              ]}
            >
              نکته آموزشی کنکوری و مفهومی:
            </Text>
            <Text
              style={[
                styles.textBody,
                { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianRegular },
              ]}
            >
              {element.additionalContent.educationalNotesFa}
            </Text>
          </View>
        ) : null}
      </ExpandableSection>

      <View style={{ height: 32 }} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  containerPadding: {
    padding: 16,
    paddingBottom: 32,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  navActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
    borderWidth: 1,
    gap: 6,
  },
  navActionText: {
    fontSize: 12,
  },
  topRightActions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconCircleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
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
  },
  pageCenterBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  pageCenterText: {
    fontSize: 11,
  },
  heroCard: {
    marginBottom: 12,
    padding: 14,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  heroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  heroTile: {
    width: 88,
    height: 108,
    borderWidth: 1.5,
    padding: 6,
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
    fontSize: 11,
    fontWeight: '700',
  },
  tileColorDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  tileSymbol: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 32,
  },
  tileNameFa: {
    fontSize: 11.5,
  },
  tileMass: {
    fontSize: 9,
    fontWeight: '500',
  },
  heroInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 2,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    borderWidth: 0.8,
    gap: 4,
    marginBottom: 2,
  },
  categoryDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  categoryPillText: {
    fontSize: 10,
    fontWeight: '700',
  },
  heroNameFa: {
    fontSize: 20,
    lineHeight: 26,
  },
  heroNameEn: {
    fontSize: 12,
    lineHeight: 16,
  },
  heroPronunciation: {
    fontSize: 10.5,
    marginBottom: 4,
  },
  coordBadges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  coordBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    gap: 3,
  },
  coordLabel: {
    fontSize: 9.5,
  },
  coordValue: {
    fontSize: 10,
    fontWeight: '700',
  },
  heroDescriptionBox: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
  },
  heroDescriptionText: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'justify',
  },
  bohrCard: {
    marginBottom: 12,
    padding: 14,
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  bohrHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  bohrTitle: {
    fontSize: 13.5,
  },
  bohrFooter: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  bohrFormula: {
    fontSize: 11,
  },
  compoundsBox: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
  },
  subHeading: {
    fontSize: 12,
    marginBottom: 6,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    marginVertical: 3,
  },
  bulletDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginTop: 7,
  },
  bulletText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
  },
  textBox: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
  },
  textBody: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'justify',
  },
  appBlock: {
    marginVertical: 4,
  },
  isotopesChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  isotopeChip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  isotopeChipText: {
    fontSize: 11,
    fontWeight: '600',
  },
  noteBox: {
    marginTop: 8,
    padding: 10,
    borderRadius: 8,
  },
  errorCard: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 40,
  },
  errorTitle: {
    fontSize: 16,
    marginTop: 12,
  },
  errorSubtitle: {
    fontSize: 13,
    marginTop: 6,
    textAlign: 'center',
  },
  backButton: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
});
