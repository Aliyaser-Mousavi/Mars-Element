import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "@mars_element_favorites";

export const favoritesStorage = {
  async getFavorites(): Promise<number[]> {
    try {
      const data = await AsyncStorage.getItem(FAVORITES_KEY);
      if (!data) return [];
      return JSON.parse(data) as number[];
    } catch {
      return [];
    }
  },

  async isFavorite(atomicNumber: number): Promise<boolean> {
    try {
      const favs = await this.getFavorites();
      return favs.includes(atomicNumber);
    } catch {
      return false;
    }
  },

  async toggleFavorite(atomicNumber: number): Promise<boolean> {
    try {
      const favs = await this.getFavorites();
      const index = favs.indexOf(atomicNumber);
      let updated: number[];
      let isNowFav: boolean;

      if (index >= 0) {
        updated = favs.filter((num) => num !== atomicNumber);
        isNowFav = false;
      } else {
        updated = [...favs, atomicNumber];
        isNowFav = true;
      }

      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      return isNowFav;
    } catch {
      return false;
    }
  },
};
