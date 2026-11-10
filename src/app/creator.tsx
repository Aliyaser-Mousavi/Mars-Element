import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Modal,
  Alert,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { ScreenContainer } from '../components';
import { lightAppTheme } from '../theme';

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
    color: '#1F2937',
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
          style={styles.backBtn}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-forward-outline" size={18} color={lightAppTheme.colors.forestGreen} />
          <Text style={styles.backText}>بازگشت</Text>
        </TouchableOpacity>

        <Text style={styles.screenTitle}>درباره سازنده برنامه</Text>
      </View>

      {/* 1. Hero Profile Card */}
      <View style={styles.profileCard}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handlePhotoPress}
          style={styles.avatarWrapper}
        >
          <Image
            source={require('../../assets/ceator.jpg')}
            style={styles.avatarImage}
            resizeMode="cover"
          />
          <View style={styles.zoomHintBadge}>
            <Ionicons name="scan-outline" size={13} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        <Text style={styles.creatorNameEn}>Aliyaser Mousavi</Text>
        <Text style={styles.creatorTitleEn}>App Designer & Developer</Text>

        <View style={styles.roleBadge}>
          <Ionicons name="code-slash" size={14} color={lightAppTheme.colors.forestGreen} />
          <Text style={styles.roleBadgeText}>طراح و توسعه‌دهنده نرم‌افزار</Text>
        </View>

        <Text style={styles.bioText}>
          توسعه‌دهنده متعهد نرم‌افزارهای مدرن آموزشی و علمی. برنامه Mars Element با هدف ارائه تجربه‌ای
          بومی، کاملاً آفلاین، سریع و استاندارد برای دانش‌آموزان و پژوهشگران شیمی طراحی و پیاده‌سازی شده است.
        </Text>
      </View>

      {/* 2. School Chemistry Project Attribution */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Ionicons name="school-outline" size={18} color={lightAppTheme.colors.forestGreen} />
          <Text style={styles.sectionTitle}>شناسنامه پروژه درسی و آموزشی</Text>
        </View>

        <Text style={styles.projectIntro}>
          پروژه علمی و نرم‌افزاری Mars Element به عنوان یک پروژه آموزشی و کاربردی در درس کیمیا طراحی و اجرا شده است:
        </Text>

        <View style={styles.metaGrid}>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>مکتب (مدرسه):</Text>
            <Text style={styles.metaValue}>سیدمحمدقناد</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>مضمون درسی:</Text>
            <Text style={styles.metaValue}>کیمیا</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>استاد راهنما:</Text>
            <Text style={styles.metaValue}>مهدوی</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>نام پروژه:</Text>
            <Text style={[styles.metaValue, styles.monoText]}>Mars Element</Text>
          </View>
        </View>
      </View>

      {/* 3. Official Supporter: Mars Coders */}
      <View style={styles.supporterCard}>
        <View style={styles.supporterHeader}>
          <View style={styles.supporterBadge}>
            <Ionicons name="shield-checkmark" size={14} color="#D97706" />
            <Text style={styles.supporterBadgeText}>حامی رسمی پروژه</Text>
          </View>
          <Text style={styles.supporterOrgName}>Mars Coders</Text>
        </View>

        <Text style={styles.supporterDesc}>
          مجموعه Mars Coders به عنوان حامی رسمی و فنی این پروژه، در مسیر توسعه استاندارد و نشر دانش نرم‌افزاری همراه ما بوده است.
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
            style={styles.supporterBtnSecondary}
            activeOpacity={0.8}
            onPress={() => handleOpenLink('mailto:info@marscoders.tech', 'ایمیل Mars Coders')}
          >
            <Ionicons name="mail-outline" size={16} color={lightAppTheme.colors.forestGreen} />
            <Text style={styles.supporterBtnTextSecondary}>info@marscoders.tech</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 4. Creator Direct Contact Cards */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Ionicons name="chatbubbles-outline" size={18} color={lightAppTheme.colors.forestGreen} />
          <Text style={styles.sectionTitle}>راه‌های ارتباطی با سازنده</Text>
        </View>

        <View style={styles.contactList}>
          {CREATOR_CONTACTS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.contactCard}
              activeOpacity={0.7}
              onPress={() => handleOpenLink(item.url, item.titleFa)}
            >
              <View style={[styles.contactIconBox, { backgroundColor: `${item.color}15` }]}>
                <Ionicons name={item.icon} size={20} color={item.color} />
              </View>

              <View style={styles.contactInfo}>
                <Text style={styles.contactTitle}>{item.titleFa}</Text>
                <Text style={styles.contactValue} numberOfLines={1}>
                  {item.value}
                </Text>
              </View>

              <Ionicons name="open-outline" size={16} color="#94A3B8" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 5. Technology Stack Badges */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Ionicons name="hardware-chip-outline" size={18} color={lightAppTheme.colors.forestGreen} />
          <Text style={styles.sectionTitle}>فناوری‌ها و استانداردهای توسعه</Text>
        </View>

        <View style={styles.badgesWrap}>
          {TECH_BADGES.map((badge, idx) => (
            <View key={idx} style={styles.techBadge}>
              <Text style={styles.techBadgeText}>{badge}</Text>
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
        <Text style={styles.footerBrand}>Mars Element</Text>
        <Text style={styles.footerCopy}>
          طراحی و توسعه توسط Aliyaser Mousavi • حامی رسمی Mars Coders
        </Text>
        <Text style={styles.footerVersion}>نسخه ۱.۰.۰ • کاملاً آفلاین و ایمن</Text>
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
  profileCard: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    marginBottom: 12,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  avatarImage: {
    width: 105,
    height: 105,
    borderRadius: 52.5,
    borderWidth: 3,
    borderColor: lightAppTheme.colors.scientificGreen,
  },
  zoomHintBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: lightAppTheme.colors.forestGreen,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  creatorNameEn: {
    fontSize: 19,
    fontFamily: 'System',
    fontWeight: 'bold',
    color: lightAppTheme.colors.primaryText,
  },
  creatorTitleEn: {
    fontSize: 12.5,
    fontFamily: 'System',
    color: lightAppTheme.colors.secondaryText,
    marginTop: 2,
    marginBottom: 8,
  },
  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    marginBottom: 12,
  },
  roleBadgeText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.forestGreen,
  },
  bioText: {
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.primaryText,
    lineHeight: 20,
    textAlign: 'center',
  },
  sectionCard: {
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 6,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.forestGreen,
  },
  projectIntro: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
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
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  metaLabel: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
  },
  metaValue: {
    fontSize: 12.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  monoText: {
    fontFamily: 'System',
  },
  supporterCard: {
    backgroundColor: '#FFFDF5',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#FDE68A',
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
    paddingVertical: 2,
    borderRadius: 6,
  },
  supporterBadgeText: {
    fontSize: 10.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: '#92400E',
  },
  supporterOrgName: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: 'bold',
    color: '#92400E',
  },
  supporterDesc: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: '#78350F',
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
    paddingVertical: 10,
    borderRadius: 8,
  },
  supporterBtnTextPrimary: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
  supporterBtnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingVertical: 9,
    borderRadius: 8,
  },
  supporterBtnTextSecondary: {
    color: lightAppTheme.colors.forestGreen,
    fontSize: 11.5,
    fontFamily: 'System',
    fontWeight: '600',
  },
  contactList: {
    gap: 8,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 10,
  },
  contactIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  contactValue: {
    fontSize: 11,
    fontFamily: 'System',
    color: lightAppTheme.colors.secondaryText,
    marginTop: 1,
    textAlign: 'left',
  },
  badgesWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  techBadge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  techBadgeText: {
    fontSize: 10.5,
    fontFamily: 'System',
    color: lightAppTheme.colors.primaryText,
    fontWeight: '500',
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
    color: lightAppTheme.colors.forestGreen,
  },
  footerCopy: {
    fontSize: 10.5,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.secondaryText,
    marginTop: 4,
    textAlign: 'center',
  },
  footerVersion: {
    fontSize: 10,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: '#94A3B8',
    marginTop: 2,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalCloseBtn: {
    position: 'absolute',
    top: 40,
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

