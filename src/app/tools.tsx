import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScreenContainer } from '../components';
import { MolarMassCalculatorView } from '../features/tools/MolarMassCalculatorView';
import { PeriodicTrendsView } from '../features/tools/PeriodicTrendsView';
import { ThemePreference } from '../services/themeService';
import { useTheme } from '../theme';
import { useAppTheme } from '../theme/ThemeContext';

type ToolTab = 'calculator' | 'trends' | 'glossary' | 'settings';

interface TabItemDef {
  id: ToolTab;
  titleFa: string;
  icon: string;
}

const TOOL_TABS: TabItemDef[] = [
  { id: 'calculator', titleFa: 'جرم مولی', icon: 'calculator-outline' },
  { id: 'trends', titleFa: 'روندهای تناوبی', icon: 'trending-up-outline' },
  { id: 'glossary', titleFa: 'دانش‌نامه شیمی', icon: 'book-outline' },
  { id: 'settings', titleFa: 'تنظیمات پوسته', icon: 'color-palette-outline' },
];

const GLOSSARY_ITEMS = [
  {
    titleFa: 'عدد اتمی',
    titleEn: 'Atomic Number (Z)',
    bodyFa:
      'تعداد پروتون‌های موجود در هسته هر اتم. عدد اتمی هویت شیمیایی هر عنصر را معین می‌کند؛ برای نمونه تمام اتم‌های دارای ۶ پروتون در جهان، کربن نام دارند.',
    icon: 'nuclear-outline',
  },
  {
    titleFa: 'جرم اتمی استاندارد',
    titleEn: 'Standard Atomic Mass',
    bodyFa:
      'میانگین وزنی جرم اتم‌های یک عنصر بر پایه فراوانی طبیعی ایزوتوپ‌های پایدار آن در پوسته زمین و بر حسب یکای جرم اتمی (دالتون یا u).',
    icon: 'scale-outline',
  },
  {
    titleFa: 'آرایش الکترونی',
    titleEn: 'Electron Configuration',
    bodyFa:
      'نحوه توزیع الکترون‌ها در لایه‌ها و زیرلایه‌های اتم (s, p, d, f) بر اساس اصل آفبا (کمترین انرژی)، قاعده هوند و اصل طرد پاولی.',
    icon: 'layers-outline',
  },
  {
    titleFa: 'الکترونگاتیوی',
    titleEn: 'Electronegativity',
    bodyFa:
      'میزان تمایل نسبی یک اتم برای ربایش و کشیدن جفت‌الکترون‌های اشتراکی در یک پیوند کووالانسی به سمت خود در مقیاس لینوس پاولینگ.',
    icon: 'magnet-outline',
  },
  {
    titleFa: 'انرژی نخستین یونش',
    titleEn: 'First Ionization Energy',
    bodyFa:
      'حداقل مقدار انرژی لازم برای جدا کردن یک مول الکترون با کمترین پیوند از یک مول اتم گازی در حالت پایه و تبدیل آن به یون یک‌بار مثبت.',
    icon: 'flash-outline',
  },
  {
    titleFa: 'خانواده‌ها و گروه‌های شیمیایی',
    titleEn: 'Chemical Families & Groups',
    bodyFa:
      'عناصر هم‌گروه (ستون‌های عمودی جدول تناوبی) دارای تعداد الکترون‌های لایه ظرفیت یکسان بوده و به همین دلیل الگوهای واکنشی و خواص شیمیایی مشابهی بروز می‌دهند.',
    icon: 'shapes-outline',
  },
];

export default function ToolsScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { preference, setPreference } = useAppTheme();
  const [activeTab, setActiveTab] = useState<ToolTab>('calculator');

  return (
    <ScreenContainer scrollable>
      {/* Top Header Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[
            styles.backBtn,
            {
              backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.08)' : theme.colors.lightGreen,
              borderColor: theme.colors.border,
            },
          ]}
          onPress={() => router.replace('/')}
          activeOpacity={0.7}
        >
          <Ionicons
            name="arrow-forward-outline"
            size={16}
            color={theme.colors.forestGreen}
          />
          <Text style={[styles.backText, { color: theme.colors.forestGreen }]}>
            جدول تناوبی
          </Text>
        </TouchableOpacity>

        <View style={styles.titleWrap}>
          <Text style={[styles.screenTitle, { color: theme.colors.primaryText }]}>
            جعبه‌ابزار و دانش‌نامه شیمی
          </Text>
          <Text style={[styles.screenSubtitle, { color: theme.colors.secondaryText }]}>
            محاسبات، نمودارهای تحلیلی و تعاریف علمی
          </Text>
        </View>

        <View style={{ width: 40 }} />
      </View>

      {/* Responsive Horizontal Scrollable Tabs */}
      <View style={styles.tabsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScroll}
        >
          {TOOL_TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <TouchableOpacity
                key={tab.id}
                style={[
                  styles.tabChip,
                  active
                    ? [styles.tabChipActive, { backgroundColor: theme.colors.scientificGreen }]
                    : {
                        backgroundColor: theme.isDark
                          ? 'rgba(255, 255, 255, 0.06)'
                          : '#F1F5F9',
                        borderColor: theme.colors.border,
                      },
                ]}
                activeOpacity={0.75}
                onPress={() => setActiveTab(tab.id)}
              >
                <Ionicons
                  name={tab.icon as any}
                  size={16}
                  color={active ? '#FFFFFF' : theme.colors.forestGreen}
                />
                <Text
                  style={[
                    styles.tabChipText,
                    { color: active ? '#FFFFFF' : theme.colors.primaryText },
                  ]}
                >
                  {tab.titleFa}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Tab 1: Molar Mass Calculator */}
      {activeTab === 'calculator' && <MolarMassCalculatorView />}

      {/* Tab 2: Periodic Trends Explorer */}
      {activeTab === 'trends' && <PeriodicTrendsView />}

      {/* Tab 3: Chemistry Educational Glossary */}
      {activeTab === 'glossary' && (
        <View style={styles.glossaryList}>
          <View style={styles.glossaryIntro}>
            <Ionicons name="book" size={18} color={theme.colors.scientificGreen} />
            <Text style={[styles.glossaryIntroTitle, { color: theme.colors.primaryText }]}>
              مفاهیم و اصطلاحات کلیدی شیمی جدول تناوبی
            </Text>
          </View>

          {GLOSSARY_ITEMS.map((item, idx) => (
            <View
              key={idx}
              style={[
                styles.glossaryCard,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                },
              ]}
            >
              <View style={styles.glossaryCardHeader}>
                <View
                  style={[
                    styles.glossaryIconBox,
                    {
                      backgroundColor: theme.isDark
                        ? 'rgba(38, 125, 104, 0.2)'
                        : theme.colors.lightGreen,
                    },
                  ]}
                >
                  <Ionicons
                    name={item.icon as any}
                    size={18}
                    color={theme.colors.scientificGreen}
                  />
                </View>
                <View style={styles.glossaryTitleCol}>
                  <Text style={[styles.glossaryTitleFa, { color: theme.colors.primaryText }]}>
                    {item.titleFa}
                  </Text>
                  <Text style={[styles.glossaryTitleEn, { color: theme.colors.secondaryText }]}>
                    {item.titleEn}
                  </Text>
                </View>
              </View>

              <Text style={[styles.glossaryBody, { color: theme.colors.primaryText }]}>
                {item.bodyFa}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Tab 4: Theme Settings & About */}
      {activeTab === 'settings' && (
        <View style={styles.settingsContainer}>
          {/* Theme Preference Card */}
          <View
            style={[
              styles.settingsCard,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <View style={styles.settingsHeaderRow}>
              <Ionicons name="color-palette" size={18} color={theme.colors.forestGreen} />
              <Text style={[styles.settingsTitle, { color: theme.colors.primaryText }]}>
                پوسته ظاهری برنامه (Theme)
              </Text>
            </View>
            <Text style={[styles.settingsSubtitle, { color: theme.colors.secondaryText }]}>
              حالت تیره برای مطالعه آسان‌تر در نور کم و صرفه‌جویی باتری در نمایشگرهای AMOLED:
            </Text>

            <View style={styles.themeOptions}>
              {[
                {
                  id: 'light',
                  labelFa: 'روشن (روز)',
                  descFa: 'طراحی علمی با زمینه روشن و کنتراست شفاف',
                  icon: 'sunny-outline',
                },
                {
                  id: 'dark',
                  labelFa: 'تیره (شب)',
                  descFa: 'کاهش خستگی چشم و مصرف انرژی در تاریکی',
                  icon: 'moon-outline',
                },
                {
                  id: 'system',
                  labelFa: 'خودکار (پیروی از سامانه)',
                  descFa: 'همگام‌سازی پیوسته با وضعیت روشنایی سیستم عامل',
                  icon: 'phone-portrait-outline',
                },
              ].map((opt) => {
                const active = preference === opt.id;
                return (
                  <TouchableOpacity
                    key={opt.id}
                    style={[
                      styles.themeOptionRow,
                      active
                        ? [
                            styles.themeOptionRowActive,
                            {
                              borderColor: theme.colors.scientificGreen,
                              backgroundColor: theme.isDark
                                ? 'rgba(38, 125, 104, 0.18)'
                                : '#F0F9F5',
                            },
                          ]
                        : {
                            backgroundColor: theme.isDark
                              ? 'rgba(255, 255, 255, 0.04)'
                              : '#F8FAFC',
                            borderColor: theme.colors.border,
                          },
                    ]}
                    activeOpacity={0.75}
                    onPress={() => setPreference(opt.id as ThemePreference)}
                  >
                    <View
                      style={[
                        styles.themeIconBox,
                        {
                          backgroundColor: active
                            ? theme.colors.scientificGreen
                            : theme.isDark
                            ? 'rgba(255, 255, 255, 0.08)'
                            : '#E2E8F0',
                        },
                      ]}
                    >
                      <Ionicons
                        name={opt.icon as any}
                        size={20}
                        color={active ? '#FFFFFF' : theme.colors.secondaryText}
                      />
                    </View>

                    <View style={styles.themeInfoCol}>
                      <Text style={[styles.themeOptionText, { color: theme.colors.primaryText }]}>
                        {opt.labelFa}
                      </Text>
                      <Text style={[styles.themeOptionDesc, { color: theme.colors.secondaryText }]}>
                        {opt.descFa}
                      </Text>
                    </View>

                    <View style={styles.checkWrap}>
                      <Ionicons
                        name={active ? 'checkmark-circle' : 'ellipse-outline'}
                        size={20}
                        color={active ? theme.colors.scientificGreen : theme.colors.secondaryText}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Brand & Creator Card */}
          <View
            style={[
              styles.aboutCard,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Image
              source={require('../../assets/logo.png')}
              style={styles.brandLogo}
              resizeMode="contain"
            />
            <Text style={[styles.aboutSubtitle, { color: theme.colors.secondaryText }]}>
              سامانه مرجع و دانش‌نامه ۱۱۸ عنصر جدول تناوبی شیمی
            </Text>
            <View style={styles.badgeRow}>
              <View
                style={[
                  styles.versionBadge,
                  {
                    backgroundColor: theme.isDark
                      ? 'rgba(38, 125, 104, 0.2)'
                      : theme.colors.lightGreen,
                    borderColor: theme.colors.border,
                  },
                ]}
              >
                <Text style={[styles.versionText, { color: theme.colors.forestGreen }]}>
                  نسخه ۱.۰.۰ • کاملاً آفلاین
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.creatorLinkBtn, { backgroundColor: theme.colors.forestGreen }]}
              activeOpacity={0.8}
              onPress={() => router.push('/creator' as any)}
            >
              <Ionicons name="person-circle-outline" size={18} color="#FFFFFF" />
              <Text style={styles.creatorLinkText}>
                درباره سازنده برنامه (Aliyaser Mousavi)
              </Text>
              <Ionicons name="chevron-back" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      )}

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
    paddingBottom: 6,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  backText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  titleWrap: {
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 15,
    fontFamily: 'Vazirmatn-Bold',
  },
  screenSubtitle: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Regular',
    marginTop: 1,
  },
  tabsContainer: {
    marginBottom: 12,
  },
  tabsScroll: {
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 2,
  },
  tabChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    gap: 6,
  },
  tabChipActive: {
    borderColor: 'transparent',
  },
  tabChipText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  glossaryList: {
    gap: 10,
  },
  glossaryIntro: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  glossaryIntroTitle: {
    fontSize: 13,
    fontFamily: 'Vazirmatn-Bold',
  },
  glossaryCard: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  glossaryCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  glossaryIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glossaryTitleCol: {
    flex: 1,
  },
  glossaryTitleFa: {
    fontSize: 13.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  glossaryTitleEn: {
    fontSize: 11,
    fontFamily: 'System',
    marginTop: 1,
  },
  glossaryBody: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 20,
    textAlign: 'justify',
  },
  settingsContainer: {
    gap: 14,
  },
  settingsCard: {
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  settingsHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  settingsTitle: {
    fontSize: 14,
    fontFamily: 'Vazirmatn-Bold',
  },
  settingsSubtitle: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 18,
    marginBottom: 6,
  },
  themeOptions: {
    gap: 10,
  },
  themeOptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1.5,
    gap: 12,
  },
  themeOptionRowActive: {},
  themeIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeInfoCol: {
    flex: 1,
  },
  themeOptionText: {
    fontSize: 13,
    fontFamily: 'Vazirmatn-Bold',
  },
  themeOptionDesc: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Regular',
    marginTop: 2,
  },
  checkWrap: {
    marginLeft: 4,
  },
  aboutCard: {
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  brandLogo: {
    width: 220,
    height: 64,
    marginBottom: 8,
  },
  aboutSubtitle: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
    textAlign: 'center',
    marginBottom: 10,
  },
  badgeRow: {
    flexDirection: 'row',
  },
  versionBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  versionText: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Medium',
  },
  creatorLinkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 14,
  },
  creatorLinkText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
    color: '#FFFFFF',
  },
});
