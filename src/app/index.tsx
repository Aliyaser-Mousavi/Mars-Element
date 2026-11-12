import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer, SearchField } from '@/components';
import {
  PeriodicHeader,
  PeriodicLegend,
  PeriodicMatrix,
} from '@/features/periodic-table';
import { ElementOfTheDayCard } from '@/components/ElementOfTheDayCard';
import { elementRepository } from '@/services/elementService';
import { useTheme } from '@/theme';
import { ElementBase, ElementCategory } from '@/types';

export default function PeriodicTableScreen() {
  const theme = useTheme();
  const router = useRouter();

  // Load all 118 elements from local offline repository
  const allElements = useMemo(() => elementRepository.getAllBaseElements(), []);

  // Family filtering state
  const [selectedCategory, setSelectedCategory] = useState<ElementCategory | null>(null);

  // Search input state
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const el of allElements) {
      counts[el.category] = (counts[el.category] ?? 0) + 1;
    }
    return counts;
  }, [allElements]);

  // Handle element selection & navigation
  const handleSelectElement = (element: ElementBase) => {
    router.push(`/element/${element.atomicNumber}` as any);
  };

  // Filtered elements for search feedback or highlighting
  const filteredElements = useMemo(() => {
    let result = allElements;
    if (selectedCategory) {
      result = result.filter((el) => el.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (el) =>
          el.nameFa.includes(q) ||
          el.symbol.toLowerCase().includes(q) ||
          el.atomicNumber.toString() === q
      );
    }
    return result;
  }, [allElements, selectedCategory, searchQuery]);

  return (
    <ScreenContainer scrollable={true} contentContainerStyle={styles.containerPadding}>
      {/* Header with Title, Element Counter & Structured Navigation */}
      <PeriodicHeader
        totalElementsCount={allElements.length}
        filteredCount={filteredElements.length}
        onSearchPress={() => router.push('/search' as any)}
        onLearningPress={() => router.push('/learning' as any)}
        onPersonalPress={() => router.push('/personal' as any)}
        onToolsPress={() => router.push('/tools' as any)}
        onCreatorPress={() => router.push('/creator' as any)}
      />

      {/* Featured Element of the Day (Compact & Premium) */}
      <ElementOfTheDayCard />

      {/* Optional Search Bar Overlay/Expansion */}
      {showSearch ? (
        <View style={styles.searchContainer}>
          <SearchField
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="جستجوی سریع در جدول (نام، نماد یا عدد اتمی)..."
            autoFocus
          />
        </View>
      ) : null}

      {/* Centralized Category Filter Bar */}
      <View style={styles.legendContainer}>
        <PeriodicLegend
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          elementCountsByCategory={categoryCounts}
        />
      </View>

      {/* Full 18-Group, 7-Period + Separate Lanthanides & Actinides Scrollable Matrix */}
      <View style={styles.matrixContainer}>
        <PeriodicMatrix
          elements={allElements}
          onSelectElement={handleSelectElement}
          selectedCategory={selectedCategory}
          selectedElementNumber={
            searchQuery.trim() && filteredElements.length === 1
              ? filteredElements[0].atomicNumber
              : null
          }
          cellSize={58}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  containerPadding: {
    padding: 0,
    paddingBottom: 32,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  legendContainer: {
    marginTop: 2,
  },
  matrixContainer: {
    marginTop: 4,
  },
});
