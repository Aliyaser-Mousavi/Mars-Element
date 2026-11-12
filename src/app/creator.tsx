import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Linking,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScreenContainer } from '../components';
import { useTheme } from '../theme';

interface ContactItem {
  id: string;
  titleFa: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
  url: string;
  color: string;
}

const CREATOR_CONTACTS: ContactItem[] = [
  {
    id: 'email',
    titleFa: 'رایانامه (ایمیل شخصی)',
    value: 'aliyasermousavi@gmail.com',
    icon: 'mail-outline',
    url: 'mailto:aliyasermousavi@gmail.com',
    color: '#D97706',
  },
  {
    id: 'phone',
    titleFa: 'شماره تماس مستقیم',
    value: '+93 782 899 827',
    icon: 'call-outline',
    url: 'tel:+93782899827',
    color: '#059669',
  },
  {
    id: 'whatsapp',
    titleFa: 'پیام‌رسان واتس‌اپ',
    value: 'WhatsApp Chat',
    icon: 'logo-whatsapp',
    url: 'https://wa.me/93782899827',
    color: '#25D366',
  },
  {
    id: 'telegram',
    titleFa: 'کانال و ارتباط تلگرام',
    value: 'Telegram Contact',
    icon: 'paper-plane-outline',
    url: 'https://t.me/+93782899827',
    color: '#0088cc',
  },
  {
    id: 'portfolio',
    titleFa: 'وب‌سایت و پورتفولیو شخصی',
    value: 'aliyaser-mousavi-portfolio.onrender.com',
    icon: 'globe-outline',
    url: 'https://aliyaser-mousavi-portfolio.onrender.com/',
    color: '#4689B8',
  },
  {
    id: 'github',
    titleFa: 'گیت‌هاب (کدهای منبع)',
    value: 'github.com/Aliyaser-Mousavi',
    icon: 'logo-github',
    url: 'https://github.com/Aliyaser-Mousavi',
    color: '#374151',
  },
];

const TECH_BADGES = [
  'React Native',
  'Expo 58',
  'TypeScript',
  'Expo Router',
  'Offline Engine',
  'SVG Bohr Model',
  'Persian RTL',
];

export default function CreatorScreen() {
  const router = useRouter();
  const theme = useTheme();
  const [photoModalVisible, setPhotoModalVisible] = useState(false);

  const handleOpenLink = async (url: string, label: string) => {
    try {
      if (Platform.OS !== 'web') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
      } else {
        Alert.alert('عدم امکان بازگشایی', `دستگاه قادر به باز کردن پیوند «${label}» نیست.`);
      }
    } catch {
      Alert.alert('خطا در باز کردن لینک', 'متأسفانه پیوند مورد نظر باز نشد.');
    }
  };

  const handlePhotoPress = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    setPhotoModalVisible(true);
  };

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
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons
            name="arrow-forward-outline"
            size={16}
            color={theme.colors.forestGreen}
          />
          <Text style={[styles.backText, { color: theme.colors.forestGreen }]}>
            بازگشت
          </Text>
        </TouchableOpacity>

        <Text style={[styles.screenTitle, { color: theme.colors.primaryText }]}>
          شناسنامه سازنده و پروژه
        </Text>

        <View style={{ width: 40 }} />
      </View>

      {/* 1. Hero Profile Card */}
      <View
        style={[
          styles.profileCard,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
      >
        {/* Avatar with Zoom Hint Badge */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handlePhotoPress}
          style={styles.avatarWrapper}
          accessibilityLabel="مشاهده تصویر سازنده در اندازه بزرگ"
        >
          <Image
            source={require('../../assets/ceator.jpg')}
            style={[styles.avatarImage, { borderColor: theme.colors.scientificGreen }]}
            resizeMode="cover"
          />
          <View
            style={[
              styles.zoomHintBadge,
              { backgroundColor: theme.colors.forestGreen },
            ]}
          >
            <Ionicons name="scan-outline" size={13} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        <Text style={[styles.creatorNameEn, { color: theme.colors.primaryText }]}>
          Aliyaser Mousavi
        </Text>
        <Text style={[styles.creatorTitleEn, { color: theme.colors.secondaryText }]}>
          App Designer & Developer
        </Text>

        {/* Persian Role Pill */}
        <View
          style={[
            styles.roleBadge,
            {
              backgroundColor: theme.isDark
                ? 'rgba(38, 125, 104, 0.2)'
                : theme.colors.lightGreen,
            },
          ]}
        >
          <Ionicons name="code-slash" size={14} color={theme.colors.forestGreen} />
          <Text style={[styles.roleBadgeText, { color: theme.colors.forestGreen }]}>
            طراح و توسعه‌دهنده نرم‌افزار
          </Text>
        </View>

        <Text style={[styles.bioText, { color: theme.colors.primaryText }]}>
          توسعه‌دهنده متعهد نرم‌افزارهای مدرن آموزشی و علمی. برنامه Mars Element با هدف ارائه تجربه‌ای
          بومی، کاملاً آفلاین، سریع و استاندارد برای دانش‌آموزان و پژوهشگران شیمی طراحی و پیاده‌سازی شده است.
        </Text>
      </View>

      {/* 2. School Chemistry Project Attribution */}
      <View
        style={[
          styles.sectionCard,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={[styles.sectionHeader, { borderBottomColor: theme.colors.border }]}>
          <Ionicons name="school-outline" size={18} color={theme.colors.forestGreen} />
          <Text style={[styles.sectionTitle, { color: theme.colors.primaryText }]}>
            شناسنامه پروژه درسی و آموزشی
          </Text>
        </View>

        <Text style={[styles.projectIntro, { color: theme.colors.secondaryText }]}>
          پروژه علمی و نرم‌افزاری Mars Element به عنوان یک پروژه آموزشی و کاربردی در درس کیمیا طراحی و اجرا شده است:
        </Text>

        <View style={styles.metaGrid}>
          <View
            style={[
              styles.metaRow,
              {
                backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.04)' : '#F8FAFC',
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.metaLabel, { color: theme.colors.secondaryText }]}>
              مکتب (مدرسه):
            </Text>
            <Text style={[styles.metaValue, { color: theme.colors.primaryText }]}>
              سیدمحمدقناد
            </Text>
          </View>

          <View
            style={[
              styles.metaRow,
              {
                backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.04)' : '#F8FAFC',
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.metaLabel, { color: theme.colors.secondaryText }]}>
              مضمون درسی:
            </Text>
            <Text style={[styles.metaValue, { color: theme.colors.primaryText }]}>
              کیمیا
            </Text>
          </View>

          <View
            style={[
              styles.metaRow,
              {
                backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.04)' : '#F8FAFC',
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.metaLabel, { color: theme.colors.secondaryText }]}>
              استاد راهنما:
            </Text>
            <Text style={[styles.metaValue, { color: theme.colors.primaryText }]}>
              مهدوی
            </Text>
          </View>

          <View
            style={[
              styles.metaRow,
              {
                backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.04)' : '#F8FAFC',
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.metaLabel, { color: theme.colors.secondaryText }]}>
              نام نرم‌افزار:
            </Text>
            <Text style={[styles.metaValue, styles.monoText, { color: theme.colors.scientificGreen }]}>
              Mars Element
            </Text>
          </View>
        </View>
      </View>

      {/* 3. Official Supporter: Mars Coders (Clearly Distinguished) */}
      <View
        style={[
          styles.supporterCard,
          {
            backgroundColor: theme.isDark ? 'rgba(217, 119, 6, 0.12)' : '#FFFDF5',
            borderColor: theme.isDark ? 'rgba(217, 119, 6, 0.35)' : '#FDE68A',
          },
        ]}
      >
        <View style={styles.supporterHeader}>
          <View style={styles.supporterBadge}>
            <Ionicons name="shield-checkmark" size={14} color="#D97706" />
            <Text style={styles.supporterBadgeText}>حامی رسمی و فنی پروژه</Text>
          </View>
          <Text style={[styles.supporterOrgName, { color: theme.isDark ? '#FDE68A' : '#92400E' }]}>
            Mars Coders
          </Text>
        </View>

        <Text style={[styles.supporterDesc, { color: theme.isDark ? '#FEF3C7' : '#78350F' }]}>
          مجموعه Mars Coders به عنوان حامی رسمی و فنی این پروژه، در مسیر استانداردسازی معماری نرم‌افزار و نشر دانش فنی همراه ما بوده است.
        </Text>

        <View style={styles.supporterActions}>
          <TouchableOpacity
            style={styles.supporterBtnPrimary}
            activeOpacity={0.8}
            onPress={() => handleOpenLink('https://www.marscoders.tech/', 'وب‌سایت Mars Coders')}
          >
            <Ionicons name="globe-outline" size={16} color="#FFFFFF" />
            <Text style={styles.supporterBtnTextPrimary}>مشاهده وب‌سایت Mars Coders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.supporterBtnSecondary,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(38, 125, 104, 0.2)'
                  : theme.colors.lightGreen,
              },
            ]}
            activeOpacity={0.8}
            onPress={() => handleOpenLink('mailto:info@marscoders.tech', 'ایمیل Mars Coders')}
          >
            <Ionicons name="mail-outline" size={16} color={theme.colors.forestGreen} />
            <Text style={[styles.supporterBtnTextSecondary, { color: theme.colors.forestGreen }]}>
              info@marscoders.tech
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 4. Creator Direct Contact Cards */}
      <View
        style={[
          styles.sectionCard,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={[styles.sectionHeader, { borderBottomColor: theme.colors.border }]}>
          <Ionicons name="chatbubbles-outline" size={18} color={theme.colors.forestGreen} />
          <Text style={[styles.sectionTitle, { color: theme.colors.primaryText }]}>
            راه‌های ارتباطی مستقیم با سازنده
          </Text>
        </View>

        <View style={styles.contactList}>
          {CREATOR_CONTACTS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.contactCard,
                {
                  backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.04)' : '#F8FAFC',
                  borderColor: theme.colors.border,
                },
              ]}
              activeOpacity={0.7}
              onPress={() => handleOpenLink(item.url, item.titleFa)}
            >
              <View style={[styles.contactIconBox, { backgroundColor: `${item.color}15` }]}>
                <Ionicons name={item.icon} size={20} color={item.color} />
              </View>

              <View style={styles.contactInfo}>
                <Text style={[styles.contactTitle, { color: theme.colors.primaryText }]}>
                  {item.titleFa}
                </Text>
                <Text
                  style={[styles.contactValue, { color: theme.colors.secondaryText }]}
                  numberOfLines={1}
                >
                  {item.value}
                </Text>
              </View>

              <Ionicons name="open-outline" size={16} color={theme.colors.secondaryText} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 5. Technology Stack Badges */}
      <View
        style={[
          styles.sectionCard,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={[styles.sectionHeader, { borderBottomColor: theme.colors.border }]}>
          <Ionicons name="hardware-chip-outline" size={18} color={theme.colors.forestGreen} />
          <Text style={[styles.sectionTitle, { color: theme.colors.primaryText }]}>
            فناوری‌ها و استانداردهای توسعه
          </Text>
        </View>

        <View style={styles.badgesWrap}>
          {TECH_BADGES.map((badge, idx) => (
            <View
              key={idx}
              style={[
                styles.techBadge,
                {
                  backgroundColor: theme.isDark
                    ? 'rgba(255, 255, 255, 0.06)'
                    : '#F1F5F9',
                  borderColor: theme.colors.border,
                },
              ]}
            >
              <Text style={[styles.techBadgeText, { color: theme.colors.primaryText }]}>
                {badge}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* 6. Footer Branding */}
      <View style={styles.footerBox}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.footerLogo}
          resizeMode="contain"
        />
        <Text style={[styles.footerBrand, { color: theme.colors.forestGreen }]}>
          Mars Element
        </Text>
        <Text style={[styles.footerCopy, { color: theme.colors.secondaryText }]}>
          طراحی و توسعه توسط Aliyaser Mousavi • حامی رسمی Mars Coders
        </Text>
        <Text style={[styles.footerVersion, { color: theme.colors.secondaryText }]}>
          نسخه ۱.۰.۰ • کاملاً آفلاین و ایمن
        </Text>
      </View>

      <View style={{ height: 40 }} />

      {/* Fullscreen Photo Modal */}
      <Modal
        visible={photoModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setPhotoModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <TouchableOpacity
            style={styles.modalCloseBtn}
            onPress={() => setPhotoModalVisible(false)}
            accessibilityLabel="بستن تصویر"
          >
            <Ionicons name="close" size={26} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.modalImageContainer}>
            <Image
              source={require('../../assets/ceator.jpg')}
              style={styles.fullscreenImage}
              resizeMode="contain"
            />
            <Text style={styles.modalCaption}>Aliyaser Mousavi — App Designer & Developer</Text>
          </View>
        </View>
      </Modal>
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
  screenTitle: {
    fontSize: 14.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  profileCard: {
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 2,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  avatarImage: {
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 3,
  },
  zoomHintBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  creatorNameEn: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  creatorTitleEn: {
    fontSize: 13,
    fontFamily: 'System',
    marginTop: 2,
    marginBottom: 8,
  },
  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 12,
  },
  roleBadgeText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  bioText: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 21,
    textAlign: 'center',
  },
  sectionCard: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: 'Vazirmatn-Bold',
  },
  projectIntro: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 18,
    marginBottom: 10,
  },
  metaGrid: {
    gap: 8,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 8,
    borderWidth: 1,
  },
  metaLabel: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
  },
  metaValue: {
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  monoText: {
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  supporterCard: {
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
    marginBottom: 12,
  },
  supporterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  supporterBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  supporterBadgeText: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Bold',
    color: '#92400E',
  },
  supporterOrgName: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  supporterDesc: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
    lineHeight: 19,
    marginBottom: 12,
  },
  supporterActions: {
    gap: 8,
  },
  supporterBtnPrimary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#D97706',
    paddingVertical: 11,
    borderRadius: 8,
  },
  supporterBtnTextPrimary: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Vazirmatn-Bold',
  },
  supporterBtnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: 8,
  },
  supporterBtnTextSecondary: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  contactList: {
    gap: 8,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    gap: 10,
  },
  contactIconBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  contactValue: {
    fontSize: 11,
    fontFamily: 'System',
    marginTop: 1,
    textAlign: 'left',
  },
  badgesWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  techBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
  },
  techBadgeText: {
    fontSize: 10.5,
    fontFamily: 'System',
    fontWeight: '600',
  },
  footerBox: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  footerLogo: {
    width: 140,
    height: 44,
    marginBottom: 4,
  },
  footerBrand: {
    fontSize: 13,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  footerCopy: {
    fontSize: 10.5,
    fontFamily: 'Vazirmatn-Medium',
    marginTop: 4,
    textAlign: 'center',
  },
  footerVersion: {
    fontSize: 10,
    fontFamily: 'Vazirmatn-Regular',
    marginTop: 2,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.94)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalCloseBtn: {
    position: 'absolute',
    top: 44,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  modalImageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '90%',
    height: 380,
    borderRadius: 16,
  },
  modalCaption: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'System',
    marginTop: 16,
    textAlign: 'center',
  },
});
