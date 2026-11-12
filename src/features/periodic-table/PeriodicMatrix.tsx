import React, { useCallback, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CATEGORY_COLOR_MAP } from '@/constants/colors';
import { useTheme } from '@/theme';
import { ElementBase, ElementCategory } from '@/types';
import { toPersianDigits } from '@/utils/rtl';
import { PeriodicCell } from './PeriodicCell';

export interface PeriodicMatrixProps {
  elements: ElementBase[];
  onSelectElement: (element: ElementBase) => void;
  selectedCategory: ElementCategory | null;
  selectedElementNumber?: number | null;
  cellSize?: number;
}

// 18 IUPAC Standard Groups
const GROUP_NUMBERS = Array.from({ length: 18 }, (_, i) => i + 1);

export const PeriodicMatrix: React.FC<PeriodicMatrixProps> = ({
  elements,
  onSelectElement,
  selectedCategory,
  selectedElementNumber,
  cellSize = 58,
}) => {
  const theme = useTheme();
  const scrollRef = useRef<React.ElementRef<typeof ScrollView>>(null);
  const initialScrollDone = useRef(false);

  const cellGap = 4;
  const cellHeight = Math.round(cellSize * 1.18); // ~68px
  const periodColWidth = 26;

  // Build grid mapping: period (1..7) x group (1..18)
  const gridMap: Record<string, ElementBase> = {};
  const lanthanides: ElementBase[] = [];
  const actinides: ElementBase[] = [];

  for (const el of elements) {
    const z = el.atomicNumber;
    if (z >= 57 && z <= 71) {
      lanthanides.push(el);
    } else if (z >= 89 && z <= 103) {
      actinides.push(el);
    } else if (el.group !== null) {
      gridMap[`${el.period}-${el.group}`] = el;
    }
  }

  // Sort f-block by atomic number strictly
  lanthanides.sort((a, b) => a.atomicNumber - b.atomicNumber);
  actinides.sort((a, b) => a.atomicNumber - b.atomicNumber);

  const isDimmed = (el: ElementBase) => {
    if (!selectedCategory) return false;
    return el.category !== selectedCategory;
  };

  const isSelected = (el: ElementBase) => {
    return selectedElementNumber === el.atomicNumber;
  };

  // Crucial: Enforce Hydrogen (Group 1, left side) as initial horizontal scroll position on both Android & iOS
  const scrollToHydrogen = useCallback(() => {
    scrollRef.current?.scrollTo({ x: 0, y: 0, animated: false });
  }, []);

  useEffect(() => {
    scrollToHydrogen();
    const t1 = setTimeout(scrollToHydrogen, 60);
    const t2 = setTimeout(scrollToHydrogen, 180);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [scrollToHydrogen]);

  const handleContentSizeChange = useCallback(() => {
    if (!initialScrollDone.current) {
      initialScrollDone.current = true;
      scrollToHydrogen();
    }
  }, [scrollToHydrogen]);

  return (
    <View style={styles.matrixContainer}>
      <ScrollView
        ref={scrollRef}
        horizontal
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={true}
        contentOffset={{ x: 0, y: 0 }}
        style={[styles.scrollHorizontal, { direction: 'ltr' }]}
        contentContainerStyle={[styles.scrollContent, { direction: 'ltr' }]}
        onContentSizeChange={handleContentSizeChange}
      >
        <View style={styles.tableWrapper}>
          {/* Top Header: Group Numbers (1 to 18) strictly LTR */}
          <View style={[styles.row, { marginBottom: cellGap }]}>
            {/* Period column header spacer */}
            <View style={[styles.periodNumberCell, { width: periodColWidth }]}>
              <Text style={[styles.periodHeaderLabel, { color: theme.colors.secondaryText }]}>
                دوره
              </Text>
            </View>

            {GROUP_NUMBERS.map((grp) => (
              <View
                key={`grp-${grp}`}
                style={[styles.headerCell, { width: cellSize }]}
              >
                <Text
                  style={[
                    styles.headerText,
                    {
                      color: theme.colors.secondaryText,
                      fontFamily: theme.fontFamily.latinScientific,
                    },
                  ]}
                >
                  {grp}
                </Text>
              </View>
            ))}
          </View>

          {/* Periods 1 to 7 Rows */}
          {[1, 2, 3, 4, 5, 6, 7].map((period) => (
            <View
              key={`period-${period}`}
              style={[styles.row, { marginBottom: cellGap }]}
            >
              {/* Period Indicator on the left */}
              <View
                style={[
                  styles.periodNumberCell,
                  {
                    width: periodColWidth,
                    height: cellHeight,
                    backgroundColor: theme.isDark ? theme.colors.surfaceElevated : `${theme.colors.lightGreen}60`,
                    borderRadius: 4,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.periodText,
                    {
                      color: theme.isDark ? theme.colors.primaryText : theme.colors.forestGreen,
                      fontFamily: theme.fontFamily.persianBold,
                    },
                  ]}
                >
                  {toPersianDigits(period)}
                </Text>
              </View>

              {/* Columns 1 to 18 */}
              {GROUP_NUMBERS.map((group) => {
                // Special placeholder for Lanthanides slot in Period 6, Group 3 (57-71)
                if (period === 6 && group === 3) {
                  const isFBlockDimmed =
                    selectedCategory !== null && selectedCategory !== 'lanthanide';
                  const lanColor = CATEGORY_COLOR_MAP['lanthanide'];

                  return (
                    <View
                      key="slot-lanthanide"
                      style={[
                        styles.placeholderCell,
                        {
                          width: cellSize,
                          height: cellHeight,
                          borderColor: lanColor,
                          backgroundColor: `${lanColor}12`,
                          opacity: isFBlockDimmed ? 0.3 : 1,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.slotRangeText,
                          {
                            color: lanColor,
                            fontFamily: theme.fontFamily.latinScientific,
                          },
                        ]}
                      >
                        57-71
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.slotNameText,
                          {
                            color: theme.colors.primaryText,
                            fontFamily: theme.fontFamily.persianBold,
                          },
                        ]}
                      >
                        لانتانیدها
                      </Text>
                      <Text style={[styles.arrowDownText, { color: lanColor }]}>↓</Text>
                    </View>
                  );
                }

                // Special placeholder for Actinides slot in Period 7, Group 3 (89-103)
                if (period === 7 && group === 3) {
                  const isFBlockDimmed =
                    selectedCategory !== null && selectedCategory !== 'actinide';
                  const actColor = CATEGORY_COLOR_MAP['actinide'];

                  return (
                    <View
                      key="slot-actinide"
                      style={[
                        styles.placeholderCell,
                        {
                          width: cellSize,
                          height: cellHeight,
                          borderColor: actColor,
                          backgroundColor: `${actColor}12`,
                          opacity: isFBlockDimmed ? 0.3 : 1,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.slotRangeText,
                          {
                            color: actColor,
                            fontFamily: theme.fontFamily.latinScientific,
                          },
                        ]}
                      >
                        89-103
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.slotNameText,
                          {
                            color: theme.colors.primaryText,
                            fontFamily: theme.fontFamily.persianBold,
                          },
                        ]}
                      >
                        آکتینیدها
                      </Text>
                      <Text style={[styles.arrowDownText, { color: actColor }]}>↓</Text>
                    </View>
                  );
                }

                const el = gridMap[`${period}-${group}`];
                if (!el) {
                  return (
                    <View
                      key={`empty-${period}-${group}`}
                      style={{ width: cellSize, height: cellHeight }}
                    />
                  );
                }

                return (
                  <PeriodicCell
                    key={`cell-${el.atomicNumber}`}
                    element={el}
                    onPress={onSelectElement}
                    isDimmed={isDimmed(el)}
                    isSelected={isSelected(el)}
                    size={cellSize}
                  />
                );
              })}
            </View>
          ))}

          {/* Separator Gap between main table and f-block */}
          <View style={styles.fBlockSeparator}>
            <View
              style={[
                styles.separatorLine,
                { backgroundColor: theme.colors.border },
              ]}
            />
            <View
              style={[
                styles.fBlockBadge,
                {
                  backgroundColor: theme.colors.card,
                  borderColor: theme.colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.fBlockBadgeText,
                  {
                    color: theme.colors.secondaryText,
                    fontFamily: theme.fontFamily.persianMedium,
                  },
                ]}
              >
                عناصر دسته f (لانتانیدها و آکتینیدها)
              </Text>
            </View>
            <View
              style={[
                styles.separatorLine,
                { backgroundColor: theme.colors.border },
              ]}
            />
          </View>

          {/* Lanthanides Row (57-71) */}
          <View style={[styles.row, { marginBottom: cellGap }]}>
            {/* Label Spacer aligned with columns 1 and 2 */}
            <View
              style={[
                styles.fBlockLabelCell,
                {
                  width: periodColWidth + cellSize * 2 + cellGap * 2,
                  height: cellHeight,
                  backgroundColor: `${CATEGORY_COLOR_MAP['lanthanide']}14`,
                  borderColor: `${CATEGORY_COLOR_MAP['lanthanide']}40`,
                },
              ]}
            >
              <View
                style={[
                  styles.colorBar,
                  { backgroundColor: CATEGORY_COLOR_MAP['lanthanide'] },
                ]}
              />
              <View style={styles.fBlockLabelTextCol}>
                <Text
                  style={[
                    styles.fBlockLabelTitle,
                    {
                      color: theme.colors.primaryText,
                      fontFamily: theme.fontFamily.persianBold,
                    },
                  ]}
                >
                  لانتانیدها
                </Text>
                <Text
                  style={[
                    styles.fBlockLabelRange,
                    {
                      color: CATEGORY_COLOR_MAP['lanthanide'],
                      fontFamily: theme.fontFamily.latinScientific,
                    },
                  ]}
                >
                  57 - 71
                </Text>
              </View>
            </View>

            {lanthanides.map((el) => (
              <PeriodicCell
                key={`cell-lan-${el.atomicNumber}`}
                element={el}
                onPress={onSelectElement}
                isDimmed={isDimmed(el)}
                isSelected={isSelected(el)}
                size={cellSize}
              />
            ))}
          </View>

          {/* Actinides Row (89-103) */}
          <View style={[styles.row, { marginBottom: cellGap }]}>
            {/* Label Spacer aligned with columns 1 and 2 */}
            <View
              style={[
                styles.fBlockLabelCell,
                {
                  width: periodColWidth + cellSize * 2 + cellGap * 2,
                  height: cellHeight,
                  backgroundColor: `${CATEGORY_COLOR_MAP['actinide']}14`,
                  borderColor: `${CATEGORY_COLOR_MAP['actinide']}40`,
                },
              ]}
            >
              <View
                style={[
                  styles.colorBar,
                  { backgroundColor: CATEGORY_COLOR_MAP['actinide'] },
                ]}
              />
              <View style={styles.fBlockLabelTextCol}>
                <Text
                  style={[
                    styles.fBlockLabelTitle,
                    {
                      color: theme.colors.primaryText,
                      fontFamily: theme.fontFamily.persianBold,
                    },
                  ]}
                >
                  آکتینیدها
                </Text>
                <Text
                  style={[
                    styles.fBlockLabelRange,
                    {
                      color: CATEGORY_COLOR_MAP['actinide'],
                      fontFamily: theme.fontFamily.latinScientific,
                    },
                  ]}
                >
                  89 - 103
                </Text>
              </View>
            </View>

            {actinides.map((el) => (
              <PeriodicCell
                key={`cell-act-${el.atomicNumber}`}
                element={el}
                onPress={onSelectElement}
                isDimmed={isDimmed(el)}
                isSelected={isSelected(el)}
                size={cellSize}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  matrixContainer: {
    width: '100%',
    direction: 'ltr',
  },
  scrollHorizontal: {
    width: '100%',
    direction: 'ltr',
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 24,
    direction: 'ltr',
  },
  tableWrapper: {
    flexDirection: 'column',
    direction: 'ltr', // Chemistry matrix columns 1..18 strictly ordered from left to right
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    direction: 'ltr',
  },
  periodNumberCell: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  periodHeaderLabel: {
    fontSize: 9,
    fontFamily: 'Vazirmatn_400Regular',
  },
  periodText: {
    fontSize: 11,
  },
  headerCell: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 2,
  },
  headerText: {
    fontSize: 10,
    fontWeight: '700',
  },
  placeholderCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 7,
    padding: 2,
  },
  slotRangeText: {
    fontSize: 9.5,
    fontWeight: '700',
  },
  slotNameText: {
    fontSize: 9,
    marginTop: 1,
    textAlign: 'center',
  },
  arrowDownText: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: -2,
  },
  fBlockSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    gap: 8,
    paddingHorizontal: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
  },
  fBlockBadge: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    borderWidth: 1,
  },
  fBlockBadgeText: {
    fontSize: 9.5,
  },
  fBlockLabelCell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    gap: 8,
    borderRadius: 7,
    borderWidth: 1,
  },
  colorBar: {
    width: 3.5,
    height: 24,
    borderRadius: 2,
  },
  fBlockLabelTextCol: {
    alignItems: 'center',
  },
  fBlockLabelTitle: {
    fontSize: 10.5,
  },
  fBlockLabelRange: {
    fontSize: 9,
    fontWeight: '600',
  },
});
