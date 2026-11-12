import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { elementRepository } from '../../services/elementService';
import { useTheme } from '../../theme';
import { toPersianDigits } from '../../utils/rtl';

interface MatchingGameViewProps {
  onBack: () => void;
  onFinish: (score: number) => void;
}

interface MatchPairItem {
  id: string;
  atomicNumber: number;
  label: string;
  type: 'name' | 'symbol';
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
  const theme = useTheme();
  const [items, setItems] = useState<MatchPairItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MatchPairItem | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<[string, string] | null>(null);
  const [movesCount, setMovesCount] = useState(0);

  // Initialize game with 6 random elements (Z <= 36)
  useEffect(() => {
    const all = elementRepository.getAllElements();
    const chosen = shuffle(all.filter((e) => e.identity.atomicNumber <= 36)).slice(0, 6);

    const cards: MatchPairItem[] = [];
    chosen.forEach((el) => {
      cards.push({
        id: `name-${el.identity.atomicNumber}`,
        atomicNumber: el.identity.atomicNumber,
        label: el.identity.nameFa,
        type: 'name',
      });
      cards.push({
        id: `sym-${el.identity.atomicNumber}`,
        atomicNumber: el.identity.atomicNumber,
        label: el.identity.symbol,
        type: 'symbol',
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
        }, 650);
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
  const matchedPairsCount = Math.floor(matchedIds.length / 2);

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onBack}
          style={[
            styles.backBtn,
            {
              backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.08)' : theme.colors.lightGreen,
              borderColor: theme.colors.border,
            },
          ]}
          activeOpacity={0.7}
        >
          <Ionicons
            name="arrow-forward-outline"
            size={16}
            color={theme.colors.forestGreen}
          />
          <Text style={[styles.backText, { color: theme.colors.forestGreen }]}>
            انصراف
          </Text>
        </TouchableOpacity>

        <Text style={[styles.title, { color: theme.colors.primaryText }]}>
          جفت‌سازی نام و نماد
        </Text>

        <View
          style={[
            styles.movesBadge,
            {
              backgroundColor: theme.isDark ? 'rgba(255, 255, 255, 0.06)' : '#F1F5F9',
              borderColor: theme.colors.border,
            },
          ]}
        >
          <Ionicons name="finger-print-outline" size={14} color={theme.colors.secondaryText} />
          <Text style={[styles.movesText, { color: theme.colors.primaryText }]}>
            {toPersianDigits(movesCount)} حرکت
          </Text>
        </View>
      </View>

      {/* Progress & Instruction Row */}
      <View style={styles.instructionRow}>
        <Text style={[styles.instruction, { color: theme.colors.secondaryText }]}>
          نام فارسی هر عنصر را با نماد لاتین آن جفت کنید:
        </Text>
        <Text style={[styles.matchCounter, { color: theme.colors.scientificGreen }]}>
          {toPersianDigits(matchedPairsCount)} از ۶ جفت
        </Text>
      </View>

      {/* Grid of 12 Cards */}
      <View style={styles.grid}>
        {items.map((it) => {
          const isMatched = matchedIds.includes(it.id);
          const isSelected = selectedItem?.id === it.id;
          const isWrong =
            wrongPair && (wrongPair[0] === it.id || wrongPair[1] === it.id);

          let cardBg = theme.colors.surface;
          let cardBorder = theme.colors.border;
          let textColor = theme.colors.primaryText;

          if (isMatched) {
            cardBg = theme.isDark ? 'rgba(5, 150, 105, 0.2)' : '#D1FAE5';
            cardBorder = '#059669';
            textColor = theme.isDark ? '#6EE7B7' : '#047857';
          } else if (isWrong) {
            cardBg = theme.isDark ? 'rgba(220, 38, 38, 0.2)' : '#FEE2E2';
            cardBorder = '#DC2626';
            textColor = theme.isDark ? '#FCA5A5' : '#DC2626';
          } else if (isSelected) {
            cardBg = theme.isDark ? 'rgba(38, 125, 104, 0.22)' : '#E6F4F0';
            cardBorder = theme.colors.scientificGreen;
            textColor = theme.colors.scientificGreen;
          }

          return (
            <TouchableOpacity
              key={it.id}
              style={[
                styles.card,
                {
                  backgroundColor: cardBg,
                  borderColor: cardBorder,
                },
                isMatched && styles.cardMatched,
              ]}
              activeOpacity={isMatched ? 1 : 0.7}
              disabled={isMatched}
              onPress={() => handleCardPress(it)}
            >
              {isMatched && (
                <View style={styles.matchedCheckWrap}>
                  <Ionicons name="checkmark-circle" size={14} color="#059669" />
                </View>
              )}
              <Text
                style={[
                  it.type === 'symbol' ? styles.symbolText : styles.nameText,
                  { color: textColor },
                ]}
                numberOfLines={1}
              >
                {it.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Game Over Message / Celebration Modal Card */}
      {isGameOver && (
        <View
          style={[
            styles.winBox,
            {
              backgroundColor: theme.isDark ? 'rgba(217, 119, 6, 0.15)' : '#FEF3C7',
              borderColor: '#D97706',
            },
          ]}
        >
          <Ionicons name="trophy" size={36} color="#D97706" />
          <Text style={[styles.winTitle, { color: theme.isDark ? '#FDE68A' : '#92400E' }]}>
            تبریک! تمام عناصر با موفقیت جفت شدند
          </Text>
          <Text style={[styles.winSubtitle, { color: theme.isDark ? '#FCD34D' : '#B45309' }]}>
            در مجموع {toPersianDigits(movesCount)} حرکت انجام شد
          </Text>
          <TouchableOpacity
            style={[styles.restartBtn, { backgroundColor: theme.colors.forestGreen }]}
            activeOpacity={0.8}
            onPress={onBack}
          >
            <Text style={styles.restartBtnText}>بازگشت به مرکز آموزش</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
  },
  backText: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Vazirmatn-Bold',
  },
  movesBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  movesText: {
    fontSize: 11,
    fontFamily: 'Vazirmatn-Bold',
  },
  instructionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
    marginBottom: 4,
  },
  instruction: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Regular',
    flex: 1,
  },
  matchCounter: {
    fontSize: 11.5,
    fontFamily: 'Vazirmatn-Bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
  },
  card: {
    width: '31.5%',
    height: 78,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  cardMatched: {
    opacity: 0.85,
  },
  matchedCheckWrap: {
    position: 'absolute',
    top: 4,
    left: 4,
  },
  nameText: {
    fontSize: 13,
    fontFamily: 'Vazirmatn-Bold',
    textAlign: 'center',
  },
  symbolText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'System',
    textAlign: 'center',
  },
  winBox: {
    marginTop: 16,
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    gap: 6,
  },
  winTitle: {
    fontSize: 14.5,
    fontFamily: 'Vazirmatn-Bold',
    textAlign: 'center',
  },
  winSubtitle: {
    fontSize: 12,
    fontFamily: 'Vazirmatn-Medium',
    marginBottom: 8,
  },
  restartBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  restartBtnText: {
    color: '#FFFFFF',
    fontSize: 12.5,
    fontFamily: 'Vazirmatn-Bold',
  },
});
