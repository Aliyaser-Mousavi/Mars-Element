import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CATEGORY_COLOR_MAP } from '@/constants/colors';
import { useTheme } from '@/theme';
import { ElementBase, ElementCategory } from '@/types';
import { PeriodicCell } from './PeriodicCell';

export interface PeriodicMatrixProps {
  elements: ElementBase[];
  onSelectElement: (element: ElementBase) => void;
  selectedCategory: ElementCategory | null;
  selectedElementNumber?: number | null;
  cellSize?: number;
}

// 18 Groups header labels
const GROUP_NUMBERS = Array.from({ length: 18 }, (_, i) => i + 1);

export const PeriodicMatrix: React.FC<PeriodicMatrixProps> = ({
  elements,
  onSelectElement,
  selectedCategory,
  selectedElementNumber,
  cellSize = 62,
}) => {
  const theme = useTheme();
  const cellGap = 5;
  const cellHeight = cellSize * 1.15;

  // Build grid mapping: period (1..7) x group (1..18)
  // Lanthanides (57..71) and Actinides (89..103) are placed in separate bottom rows
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

  // Sort f-block by atomic number
  lanthanides.sort((a, b) => a.atomicNumber - b.atomicNumber);
  actinides.sort((a, b) => a.atomicNumber - b.atomicNumber);

  const isDimmed = (el: ElementBase) => {
    if (!selectedCategory) return false;
    return el.category !== selectedCategory;
  };

  const isSelected = (el: ElementBase) => {
    return selectedElementNumber === el.atomicNumber;
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.tableWrapper}>
        {/* Top Header: Group Numbers (1 to 18) */}
        <View style={[styles.row, { marginBottom: cellGap }]}>
          {/* Period column header spacer */}
          <View style={[styles.periodNumberCell, { width: 28 }]} />

          {GROUP_NUMBERS.map((grp) => (
            <View key={`grp-${grp}`} style={[styles.headerCell, { width: cellSize }]}>
              <Text style={[theme.typography.caption, styles.headerText, { color: theme.colors.secondaryText }]}>
                {grp}
              </Text>
            </View>
          ))}
        </View>

        {/* Periods 1 to 7 Rows */}
        {[1, 2, 3, 4, 5, 6, 7].map((period) => (
          <View key={`period-${period}`} style={[styles.row, { marginBottom: cellGap }]}>
            {/* Period Indicator */}
            <View style={[styles.periodNumberCell, { width: 28, height: cellHeight }]}>
              <Text
                style={[
                  theme.typography.caption,
                  styles.periodText,
                  { color: theme.colors.secondaryText, fontFamily: theme.fontFamily.persianBold },
                ]}
              >
                {period}
              </Text>
            </View>

            {/* Columns 1 to 18 */}
            {GROUP_NUMBERS.map((group) => {
              // Special placeholder for Lanthanides slot in Period 6, Group 3 (57-71)
              if (period === 6 && group === 3) {
                const isFBlockDimmed = selectedCategory !== null && selectedCategory !== 'lanthanide';
                return (
                  <View
                    key="slot-lanthanide"
                    style={[
                      styles.placeholderCell,
                      {
                        width: cellSize,
                        height: cellHeight,
                        borderColor: CATEGORY_COLOR_MAP['lanthanide'],
                        backgroundColor: theme.colors.surface,
                        borderRadius: theme.borderRadius.sm,
                        opacity: isFBlockDimmed ? 0.3 : 1,
                      },
                    ]}
                  >
                    <Text style={[theme.typography.caption, styles.slotRangeText, { color: theme.colors.secondaryText }]}>
                      57-71
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[
                        theme.typography.caption,
                        styles.slotNameText,
                        { color: CATEGORY_COLOR_MAP['lanthanide'], fontFamily: theme.fontFamily.persianBold },
                      ]}
                    >
                      لانتانیدها
                    </Text>
                  </View>
                );
              }

              // Special placeholder for Actinides slot in Period 7, Group 3 (89-103)
              if (period === 7 && group === 3) {
                const isFBlockDimmed = selectedCategory !== null && selectedCategory !== 'actinide';
                return (
                  <View
                    key="slot-actinide"
                    style={[
                      styles.placeholderCell,
                      {
                        width: cellSize,
                        height: cellHeight,
                        borderColor: CATEGORY_COLOR_MAP['actinide'],
                        backgroundColor: theme.colors.surface,
                        borderRadius: theme.borderRadius.sm,
                        opacity: isFBlockDimmed ? 0.3 : 1,
                      },
                    ]}
                  >
                    <Text style={[theme.typography.caption, styles.slotRangeText, { color: theme.colors.secondaryText }]}>
                      89-103
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[
                        theme.typography.caption,
                        styles.slotNameText,
                        { color: CATEGORY_COLOR_MAP['actinide'], fontFamily: theme.fontFamily.persianBold },
                      ]}
                    >
                      آکتینیدها
                    </Text>
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
          <View style={[styles.separatorLine, { backgroundColor: theme.colors.border }]} />
        </View>

        {/* Lanthanides Row (57-71) */}
        <View style={[styles.row, { marginBottom: cellGap }]}>
          {/* Label Spacer aligned with main table */}
          <View style={[styles.fBlockLabelCell, { width: 28 + cellSize * 2 + cellGap * 2, height: cellHeight }]}>
            <View style={[styles.colorBar, { backgroundColor: CATEGORY_COLOR_MAP['lanthanide'] }]} />
            <Text
              style={[
                theme.typography.caption,
                { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianBold },
              ]}
            >
              لانتانیدها
            </Text>
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
          {/* Label Spacer aligned with main table */}
          <View style={[styles.fBlockLabelCell, { width: 28 + cellSize * 2 + cellGap * 2, height: cellHeight }]}>
            <View style={[styles.colorBar, { backgroundColor: CATEGORY_COLOR_MAP['actinide'] }]} />
            <Text
              style={[
                theme.typography.caption,
                { color: theme.colors.primaryText, fontFamily: theme.fontFamily.persianBold },
              ]}
            >
              آکتینیدها
            </Text>
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
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  tableWrapper: {
    flexDirection: 'column',
    direction: 'ltr', // Chemistry matrix columns 1..18 strictly ordered from left to right
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  periodNumberCell: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  periodText: {
    fontSize: 13,
  },
  headerCell: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 2,
  },
  headerText: {
    fontSize: 11,
    fontWeight: '600',
  },
  placeholderCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.2,
    borderStyle: 'dashed',
    padding: 3,
  },
  slotRangeText: {
    fontSize: 9,
    fontWeight: '600',
  },
  slotNameText: {
    fontSize: 10,
    marginTop: 2,
    textAlign: 'center',
  },
  fBlockSeparator: {
    height: 18,
    justifyContent: 'center',
    paddingHorizontal: 32,
    marginVertical: 4,
  },
  separatorLine: {
    height: 1,
    width: '100%',
  },
  fBlockLabelCell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingEnd: 10,
    gap: 6,
  },
  colorBar: {
    width: 4,
    height: 24,
    borderRadius: 2,
  },
});

