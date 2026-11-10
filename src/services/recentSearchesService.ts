import AsyncStorage from "@react-native-async-storage/async-storage";

const RECENT_SEARCHES_KEY = "@mars_element_recent_searches";
const MAX_RECENT_SEARCHES = 8;

export const recentSearchesStorage = {
  async getRecentSearches(): Promise<string[]> {
    try {
      const data = await AsyncStorage.getItem(RECENT_SEARCHES_KEY);
      if (!data) return [];
      return JSON.parse(data) as string[];
    } catch {
      return [];
    }
  },

  async addSearch(query: string): Promise<string[]> {
    const trimmed = query.trim();
    if (!trimmed) return [];
    try {
      const current = await this.getRecentSearches();
      const filtered = current.filter(
        (item) => item.toLowerCase() !== trimmed.toLowerCase(),
      );
      const updated = [trimmed, ...filtered].slice(0, MAX_RECENT_SEARCHES);
      await AsyncStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      return updated;
    } catch {
      return [];
    }
  },

  async removeSearch(query: string): Promise<string[]> {
    try {
      const current = await this.getRecentSearches();
      const updated = current.filter(
        (item) => item.toLowerCase() !== query.toLowerCase(),
      );
      await AsyncStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      return updated;
    } catch {
      return [];
    }
  },

  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch {
      // ignore
    }
  },
};
