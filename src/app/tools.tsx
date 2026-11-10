import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContainer } from '../components';
import { lightAppTheme } from '../theme';
import { useAppTheme } from '../theme/ThemeContext';
import { ThemePreference } from '../services/themeService';
import { MolarMassCalculatorView } from '../features/tools/MolarMassCalculatorView';
import { PeriodicTrendsView } from '../features/tools/PeriodicTrendsView';

type ToolTab = 'calculator' | 'trends' | 'glossary' | 'settings';

const GLOSSARY_ITEMS = [
  {
    titleFa: 'عدد اتمی (Atomic Number - Z)',
    bodyFa:
      'تعداد پروتون‌های موجود در هسته هر اتم. عدد اتمی هویت شیمیایی هر عنصر را معین می‌کند؛ برای نمونه تمام اتم‌های دارای ۶ پروتون، کربن هستند.',
  },
  {
    titleFa: 'جرم اتمی استاندارد (Standard Atomic Mass)',
    bodyFa:
      'میانگین جرم اتم‌های یک عنصر بر پایه فراوانی طبیعی ایزوتوپ‌های پایدار آن در پوسته زمین و بر حسب یکای جرم اتمی (دالتون یا u).',
  },
  {
    titleFa: 'آرایش الکترونی (Electron Configuration)',
    bodyFa:
      'نحوه توزیع الکترون‌ها در لایه‌ها و زیرلایه‌های اتم (s, p, d, f) بر اساس اصل آفبا، قاعده هوند و اصل طرد پاولی.',
  },
  {
    titleFa: 'الکترونگاتیوی (Electronegativity)',
    bodyFa:
      'میزان تمایل نسبی یک اتم برای ربایش و کشیدن جفت‌الکترون‌های اشتراکی در یک پیوند کووالانسی به سمت خود.',
  },
  {
    titleFa: 'انرژی نخستین یونش (First Ionization Energy)',
    bodyFa:
      'مقدار انرژی لازم برای جدا کردن یک مول الکترون از یک مول اتم گازی در حالت پایه و تبدیل آن به یون یک‌بار مثبت.',
  },
  {
    titleFa: 'خانواده‌ها و گروه‌های شیمیایی',
    bodyFa:
      'عناصر هم‌گروه (ستون‌های عمودی جدول) دارای تعداد الکترون‌های ظرفیت یکسان بوده و به همین دلیل خواص شیمیایی و رفتار واکنشی مشابهی دارند.',
  },
];

export default function ToolsScreen() {
  const router = useRouter();
  const { preference, setPreference } = useAppTheme();
  const [activeTab, setActiveTab] = useState<ToolTab>('calculator');

  return (
    <ScreenContainer scrollable>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.replace('/')}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-forward-outline" size={18} color={lightAppTheme.colors.forestGreen} />
          <Text style={styles.backText}>جدول تناوبی</Text>
        </TouchableOpacity>

        <Text style={styles.screenTitle}>ابزارها و دانش‌نامه شیمی</Text>
      </View>

      {/* Segment Tab Controls */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'calculator' && styles.tabBtnActive]}
          onPress={() => setActiveTab('calculator')}
        >
          <Ionicons
            name="calculator-outline"
            size={16}
            color={activeTab === 'calculator' ? '#FFFFFF' : lightAppTheme.colors.forestGreen}
          />
          <Text style={[styles.tabBtnText, activeTab === 'calculator' && styles.tabBtnTextActive]}>
            جرم مولی
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'trends' && styles.tabBtnActive]}
          onPress={() => setActiveTab('trends')}
        >
          <Ionicons
            name="trending-up-outline"
            size={16}
            color={activeTab === 'trends' ? '#FFFFFF' : lightAppTheme.colors.forestGreen}
          />
          <Text style={[styles.tabBtnText, activeTab === 'trends' && styles.tabBtnTextActive]}>
            روندهای تناوبی
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'glossary' && styles.tabBtnActive]}
          onPress={() => setActiveTab('glossary')}
        >
          <Ionicons
            name="book-outline"
            size={16}
            color={activeTab === 'glossary' ? '#FFFFFF' : lightAppTheme.colors.forestGreen}
          />
          <Text style={[styles.tabBtnText, activeTab === 'glossary' && styles.tabBtnTextActive]}>
            دانش‌نامه
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'settings' && styles.tabBtnActive]}
          onPress={() => setActiveTab('settings')}
        >
          <Ionicons
            name="color-palette-outline"
            size={16}
            color={activeTab === 'settings' ? '#FFFFFF' : lightAppTheme.colors.forestGreen}
          />
          <Text style={[styles.tabBtnText, activeTab === 'settings' && styles.tabBtnTextActive]}>
            پوسته
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab 1: Molar Mass Calculator */}
      {activeTab === 'calculator' && <MolarMassCalculatorView />}

      {/* Tab 2: Periodic Trends Explorer */}
      {activeTab === 'trends' && <PeriodicTrendsView />}

      {/* Tab 3: Chemistry Educational Glossary */}
      {activeTab === 'glossary' && (
        <View style={styles.glossaryList}>
          {GLOSSARY_ITEMS.map((item, idx) => (
            <View key={idx} style={styles.glossaryCard}>
              <View style={styles.glossaryHeader}>
                <Ionicons name="sparkles" size={16} color={lightAppTheme.colors.scientificGreen} />
                <Text style={styles.glossaryTitle}>{item.titleFa}</Text>
              </View>
              <Text style={styles.glossaryBody}>{item.bodyFa}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Tab 4: Theme Settings & About */}
      {activeTab === 'settings' && (
        <View style={{ gap: 14 }}>
          {/* Brand Card with Logo */}
          <View style={styles.aboutCard}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.brandLogo}
              resizeMode="contain"
            />
            <Text style={styles.aboutSubtitle}>
              سامانه دانش‌نامه و مرجع ۱۱۸ عنصر جدول تناوبی شیمی
            </Text>
            <View style={styles.badgeRow}>
              <View style={styles.versionBadge}>
                <Text style={styles.versionText}>نسخه ۱.۰.۰ • کاملاً آفلاین</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.creatorLinkBtn}
              activeOpacity={0.8}
              onPress={() => router.push('/creator' as any)}
            >
              <Ionicons name="person-circle-outline" size={18} color="#FFFFFF" />
              <Text style={styles.creatorLinkText}>درباره سازنده برنامه (Aliyaser Mousavi)</Text>
              <Ionicons name="chevron-back" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.settingsCard}>
            <Text style={styles.settingsTitle}>انتخاب پوسته ظاهری برنامه</Text>
            <Text style={styles.settingsSubtitle}>
              حالت تیره برای مطالعه آسان‌تر در نور کم و صرفه‌جویی باتری در نمایشگرهای AMOLED:
            </Text>

            <View style={styles.themeOptions}>
              {[
                { id: 'light', label: 'روشن (روز)', icon: 'sunny-outline' },
                { id: 'dark', label: 'تیره (شب)', icon: 'moon-outline' },
                { id: 'system', label: 'پیروی از سامانه گوشی', icon: 'phone-portrait-outline' },
              ].map((opt) => {
                const active = preference === opt.id;
                return (
                  <TouchableOpacity
                    key={opt.id}
                    style={[styles.themeOptionRow, active && styles.themeOptionRowActive]}
                    onPress={() => setPreference(opt.id as ThemePreference)}
                  >
                    <Ionicons
                      name={opt.icon as any}
                      size={20}
                      color={active ? lightAppTheme.colors.scientificGreen : lightAppTheme.colors.secondaryText}
                    />
                    <Text style={[styles.themeOptionText, active && styles.themeOptionTextActive]}>
                      {opt.label}
                    </Text>
                    {active && (
                      <Ionicons
                        name="checkmark-circle"
                        size={18}
                        color={lightAppTheme.colors.scientificGreen}
                        style={{ marginRight: 'auto' }}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
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
    marginBottom: 10,
    paddingBottom: 6,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  backText: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: lightAppTheme.colors.forestGreen,
  },
  screenTitle: {
    fontSize: 14.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  tabsRow: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: lightAppTheme.borderRadius.sm,
    padding: 3,
    marginBottom: 12,
    gap: 4,
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    borderRadius: 6,
    gap: 4,
  },
  tabBtnActive: {
    backgroundColor: lightAppTheme.colors.scientificGreen,
  },
  tabBtnText: {
    fontSize: 10.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.forestGreen,
  },
  tabBtnTextActive: {
    color: '#FFFFFF',
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  glossaryList: {
    gap: 10,
  },
  glossaryCard: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 12,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
  },
  glossaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  glossaryTitle: {
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
  },
  glossaryBody: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.primaryText,
    lineHeight: 20,
    textAlign: 'justify',
  },
  settingsCard: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 14,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
  },
  aboutCard: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: lightAppTheme.borderRadius.md,
    padding: 18,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    alignItems: 'center',
  },
  brandLogo: {
    width: 220,
    height: 70,
    marginBottom: 8,
  },
  aboutSubtitle: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    textAlign: 'center',
    marginBottom: 10,
  },
  badgeRow: {
    flexDirection: 'row',
  },
  versionBadge: {
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
  },
  versionText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.forestGreen,
  },
  creatorLinkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: lightAppTheme.colors.forestGreen,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 8,
    marginTop: 12,
  },
  creatorLinkText: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: '#FFFFFF',
  },
  settingsTitle: {
    fontSize: 14,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
  },
  settingsSubtitle: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    marginTop: 4,
    marginBottom: 12,
  },
  themeOptions: {
    gap: 8,
  },
  themeOptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 10,
  },
  themeOptionRowActive: {
    borderColor: lightAppTheme.colors.scientificGreen,
    backgroundColor: '#F0F9F5',
  },
  themeOptionText: {
    fontSize: 12.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
  },
  themeOptionTextActive: {
    color: lightAppTheme.colors.scientificGreen,
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
});

