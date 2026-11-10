import React, { useState } from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/theme';

export interface SearchFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
  onSubmit?: () => void;
  style?: StyleProp<ViewStyle>;
  autoFocus?: boolean;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  value,
  onChangeText,
  placeholder = 'جستجوی عنصر، نماد یا عدد اتمی...',
  onClear,
  onSubmit,
  style,
  autoFocus = false,
}) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChangeText('');
    onClear?.();
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
          borderColor: isFocused
            ? theme.colors.scientificGreen
            : theme.colors.border,
          borderRadius: theme.borderRadius.md,
          paddingHorizontal: theme.spacing.md,
        },
        style,
      ]}
    >
      <Ionicons
        name="search-outline"
        size={20}
        color={isFocused ? theme.colors.scientificGreen : theme.colors.secondaryText}
        style={styles.searchIcon}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.secondaryText}
        autoFocus={autoFocus}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.input,
          theme.typography.bodyMedium,
          {
            color: theme.colors.primaryText,
            fontFamily: theme.fontFamily.persianRegular,
          },
        ]}
      />

      {value.length > 0 ? (
        <Pressable
          onPress={handleClear}
          hitSlop={8}
          style={styles.clearButton}
          accessibilityLabel="پاک کردن متن جستجو"
        >
          <Ionicons
            name="close-circle"
            size={18}
            color={theme.colors.secondaryText}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1.5,
  },
  searchIcon: {
    marginEnd: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    textAlign: 'right',
    paddingVertical: 0,
  },
  clearButton: {
    padding: 4,
    marginStart: 4,
  },
});

