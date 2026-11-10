import AsyncStorage from "@react-native-async-storage/async-storage";

const HISTORY_KEY = "@mars_element_view_history";
const MAX_HISTORY = 30;

export const historyStorage = {
  async getHistory(): Promise<number[]> {
    try {
      const data = await AsyncStorage.getItem(HISTORY_KEY);
      if (!data) return [];
      return JSON.parse(data) as number[];
    } catch {
      return [];
    }
  },

  async recordView(atomicNumber: number): Promise<number[]> {
    try {
      const current = await this.getHistory();
      // Remove previous occurrence to avoid duplicates and bring to front
      const filtered = current.filter((num) => num !== atomicNumber);
      const updated = [atomicNumber, ...filtered].slice(0, MAX_HISTORY);
      await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
      return updated;
    } catch {
      return [];
    }
  },

  async clearHistory(): Promise<void> {
    try {
      await AsyncStorage.removeItem(HISTORY_KEY);
    } catch {
      // ignore
    }
  },
};
