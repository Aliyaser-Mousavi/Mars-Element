import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Vazirmatn_400Regular,
  Vazirmatn_500Medium,
  Vazirmatn_600SemiBold,
  Vazirmatn_700Bold,
} from '@expo-google-fonts/vazirmatn';
import { ensureRTL } from '@/utils/rtl';
import { ThemeProvider, useAppTheme } from '@/theme/ThemeContext';

// Ensure splash screen remains visible until resources are loaded
SplashScreen.preventAutoHideAsync().catch(() => {
  /* Ignore splash errors in development/web */
});

// Configure Persian RTL layout
ensureRTL();

function AppNavigator() {
  const { theme, isDark } = useAppTheme();

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
          animation: 'fade',
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'جدول تناوبی مارس المنت',
          }}
        />
        <Stack.Screen
          name="element/[id]"
          options={{
            title: 'شناسنامه علمی عنصر',
            headerBackTitle: 'جدول',
          }}
        />
        <Stack.Screen
          name="search"
          options={{
            title: 'جستجوی هوشمند',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="filter"
          options={{
            title: 'فیلترهای پیشرفته',
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="learning"
          options={{
            title: 'مرکز آموزش شیمی',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="personal"
          options={{
            title: 'علاقه‌مندی‌ها و مقایسه',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tools"
          options={{
            title: 'ابزارها و دانش‌نامه',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="creator"
          options={{
            title: 'درباره سازنده',
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Vazirmatn_400Regular,
    Vazirmatn_500Medium,
    Vazirmatn_600SemiBold,
    Vazirmatn_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {
        /* Ignore splash errors */
      });
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
