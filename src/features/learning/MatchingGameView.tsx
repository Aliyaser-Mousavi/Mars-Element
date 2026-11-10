import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { elementRepository } from "../../services/elementService";
import { lightAppTheme } from "../../theme";
import { toPersianDigits } from "../../utils/rtl";

interface MatchingGameViewProps {
  onBack: () => void;
  onFinish: (score: number) => void;
}

interface MatchPairItem {
  id: string;
  atomicNumber: number;
  label: string;
  type: "name" | "symbol";
}

function shuffle<T>(arr: T[]): T[] {
  const c = [...arr];
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j], c[i]];
  }
  return c;
}

export const MatchingGameView: React.FC<MatchingGameViewProps> = ({
  onBack,
  onFinish,
}) => {
  const [items, setItems] = useState<MatchPairItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MatchPairItem | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<[string, string] | null>(null);
  const [movesCount, setMovesCount] = useState(0);

  // Initialize game with 6 random elements
  useEffect(() => {
    const all = elementRepository.getAllElements();
    const chosen = shuffle(
      all.filter((e) => e.identity.atomicNumber <= 36),
    ).slice(0, 6);

    const cards: MatchPairItem[] = [];
    chosen.forEach((el) => {
      cards.push({
        id: `name-${el.identity.atomicNumber}`,
        atomicNumber: el.identity.atomicNumber,
        label: el.identity.nameFa,
        type: "name",
      });
      cards.push({
        id: `sym-${el.identity.atomicNumber}`,
        atomicNumber: el.identity.atomicNumber,
        label: el.identity.symbol,
        type: "symbol",
      });
    });

    setItems(shuffle(cards));
  }, []);

  const handleCardPress = (item: MatchPairItem) => {
    if (matchedIds.includes(item.id) || wrongPair) return;
    if (selectedItem?.id === item.id) {
      setSelectedItem(null);
      return;
    }

    if (!selectedItem) {
      setSelectedItem(item);
      return;
    }

    // Two cards selected
    setMovesCount((prev) => prev + 1);

    if (
      selectedItem.atomicNumber === item.atomicNumber &&
      selectedItem.type !== item.type
    ) {
      // Match found!
      const newMatched = [...matchedIds, selectedItem.id, item.id];
      setMatchedIds(newMatched);
      setSelectedItem(null);

      if (newMatched.length === items.length && items.length > 0) {
        setTimeout(() => {
          onFinish(10);
        }, 600);
      }
    } else {
      // Wrong match
      setWrongPair([selectedItem.id, item.id]);
      setTimeout(() => {
        setWrongPair(null);
        setSelectedItem(null);
      }, 750);
    }
  };

  const isGameOver = matchedIds.length === items.length && items.length > 0;

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Ionicons
            name="arrow-forward-outline"
            size={18}
            color={lightAppTheme.colors.forestGreen}
          />
          <Text style={styles.backText}>بازگشت</Text>
        </TouchableOpacity>

        <Text style={styles.title}>بازی جفت‌سازی نام و نماد</Text>

        <View style={styles.movesBadge}>
          <Text style={styles.movesText}>
            حرکت: {toPersianDigits(movesCount)}
          </Text>
        </View>
      </View>

      <Text style={styles.instruction}>
        نام فارسی هر عنصر را با نماد لاتین متناظر آن جفت کنید:
      </Text>

      {/* Grid of Cards */}
      <View style={styles.grid}>
        {items.map((it) => {
          const isMatched = matchedIds.includes(it.id);
          const isSelected = selectedItem?.id === it.id;
          const isWrong =
            wrongPair && (wrongPair[0] === it.id || wrongPair[1] === it.id);

          let cardStyle = styles.card;
          let textStyle =
            it.type === "symbol" ? styles.symbolText : styles.nameText;

          if (isMatched) {
            cardStyle = { ...cardStyle, ...styles.cardMatched };
          } else if (isWrong) {
            cardStyle = { ...cardStyle, ...styles.cardWrong };
          } else if (isSelected) {
            cardStyle = { ...cardStyle, ...styles.cardSelected };
          }

          return (
            <TouchableOpacity
              key={it.id}
              style={cardStyle}
              activeOpacity={isMatched ? 1 : 0.7}
              disabled={isMatched}
              onPress={() => handleCardPress(it)}
            >
              <Text style={textStyle}>{it.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Game Over Message */}
      {isGameOver && (
        <View style={styles.winBox}>
          <Ionicons name="trophy" size={32} color="#D97706" />
          <Text style={styles.winTitle}>
            تبریک! تمام عناصر با موفقیت جفت شدند.
          </Text>
          <TouchableOpacity style={styles.restartBtn} onPress={onBack}>
            <Text style={styles.restartBtnText}>بازگشت به مرکز آموزش</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  backText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: lightAppTheme.colors.forestGreen,
  },
  title: {
    fontSize: 13.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
  },
  movesBadge: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  movesText: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.secondaryText,
  },
  instruction: {
    fontSize: 11.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "space-between",
  },
  card: {
    width: "31%",
    height: 72,
    backgroundColor: lightAppTheme.colors.surface,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  cardSelected: {
    borderColor: lightAppTheme.colors.scientificGreen,
    backgroundColor: "#E6F4F0",
  },
  cardMatched: {
    borderColor: "#059669",
    backgroundColor: "#D1FAE5",
    opacity: 0.75,
  },
  cardWrong: {
    borderColor: "#DC2626",
    backgroundColor: "#FEE2E2",
  },
  nameText: {
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: lightAppTheme.colors.primaryText,
    textAlign: "center",
  },
  symbolText: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "System",
    color: lightAppTheme.colors.forestGreen,
  },
  winBox: {
    marginTop: 20,
    backgroundColor: "#FEF3C7",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  winTitle: {
    fontSize: 13.5,
    fontFamily: lightAppTheme.fontFamily.persianBold,
    color: "#92400E",
    marginTop: 6,
    marginBottom: 10,
  },
  restartBtn: {
    backgroundColor: lightAppTheme.colors.forestGreen,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  restartBtnText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: lightAppTheme.fontFamily.persianBold,
  },
});
