import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';
import { toPersianDigits } from '@/utils';
import { ScientificValue, ValueOrigin } from '@/types/element';

interface PropertyRowProps {
  label: string;
  value?: string | number | null;
  scientificValue?: ScientificValue<any>;
  unit?: string;
  isMono?: boolean;
}

export const PropertyRow: React.FC<PropertyRowProps> = ({
  label,
  value,
  scientificValue,
  unit,
  isMono = false,
}) => {
  const theme = useTheme();

  const ORIGIN_LABELS: Record<ValueOrigin, { text: string; bg: string; color: string }> = {
    experimental: {
      text: 'تجربی',
      bg: theme.isDark ? `${theme.colors.scientificGreen}25` : '#EBF5F0',
      color: theme.colors.scientificGreen,
    },
    estimated: {
      text: 'تخمینی',
      bg: theme.isDark ? `${theme.colors.goldenAccent}25` : '#FEF7E6',
      color: theme.colors.goldenAccent,
    },
    predicted: {
      text: 'پیش‌بینی',
      bg: theme.isDark ? `${theme.colors.coral}25` : '#FDF2F2',
      color: theme.colors.coral,
    },
    unknown: {
      text: 'نامشخص',
      bg: theme.isDark ? theme.colors.surfaceElevated : '#EDF2F7',
      color: theme.colors.secondaryText,
    },
  };

  let displayValue: string = 'نامشخص';
  let displayUnit: string = '';
  let originBadge: { text: string; bg: string; color: string } | null = null;

  if (scientificValue !== undefined) {
    if (scientificValue.value !== null && scientificValue.value !== undefined) {
      displayValue = typeof scientificValue.value === 'number'
        ? toPersianDigits(scientificValue.value)
        : toPersianDigits(String(scientificValue.value));
      displayUnit = scientificValue.unitFa || scientificValue.unit || '';
    } else {
      displayValue = 'نامشخص';
    }

    if (scientificValue.origin && scientificValue.origin !== 'experimental') {
      originBadge = ORIGIN_LABELS[scientificValue.origin] || null;
    }
  } else if (value !== undefined && value !== null) {
    displayValue = typeof value === 'number' ? toPersianDigits(value) : toPersianDigits(String(value));
    if (unit) {
      displayUnit = unit;
    }
  }

  const isUnavailable = displayValue === 'نامشخص';

  return (
    <View style={[styles.container, { borderBottomColor: theme.colors.separator }]}>
      <Text
        style={[
          styles.label,
          {
            color: theme.colors.secondaryText,
            fontFamily: theme.fontFamily.persianRegular,
          },
        ]}
      >
        {label}
      </Text>

      <View style={styles.valueContainer}>
        {originBadge && (
          <View style={[styles.originBadge, { backgroundColor: originBadge.bg }]}>
            <Text
              style={[
                styles.originBadgeText,
                {
                  color: originBadge.color,
                  fontFamily: theme.fontFamily.persianMedium,
                },
              ]}
            >
              {originBadge.text}
            </Text>
          </View>
        )}

        <Text
          style={[
            styles.value,
            {
              color: isUnavailable ? theme.colors.secondaryText : theme.colors.primaryText,
              fontFamily: isMono ? theme.fontFamily.latinScientific : theme.fontFamily.persianSemiBold,
              opacity: isUnavailable ? 0.6 : 1,
            },
            isMono && styles.monoText,
          ]}
        >
          {displayValue}
          {displayUnit ? ` ${displayUnit}` : ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    gap: 8,
  },
  label: {
    fontSize: 12.5,
    flex: 1,
    textAlign: 'right',
    lineHeight: 18,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
  },
  value: {
    fontSize: 13,
    textAlign: 'left',
    lineHeight: 18,
  },
  monoText: {
    direction: 'ltr',
    fontWeight: '600',
  },
  originBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  originBadgeText: {
    fontSize: 9.5,
  },
});
