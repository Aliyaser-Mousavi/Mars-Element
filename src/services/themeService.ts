import AsyncStorage from "@react-native-async-storage/async-storage";

export type ThemePreference = "light" | "dark" | "system";

const THEME_PREF_KEY = "@mars_element_theme_preference";

export const themeStorage = {
  async getThemePreference(): Promise<ThemePreference> {
    try {
      const pref = await AsyncStorage.getItem(THEME_PREF_KEY);
      if (pref === "light" || pref === "dark" || pref === "system") {
        return pref;
      }
      return "system";
    } catch {
      return "system";
    }
  },

  async setThemePreference(pref: ThemePreference): Promise<void> {
    try {
      await AsyncStorage.setItem(THEME_PREF_KEY, pref);
    } catch {
      // ignore
    }
  },
};
