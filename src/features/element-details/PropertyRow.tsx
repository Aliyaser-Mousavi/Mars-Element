import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { lightAppTheme } from '../../theme';
import { toPersianDigits } from '../../utils';
import { ScientificValue, ValueOrigin } from '../../types/element';

interface PropertyRowProps {
  label: string;
  value?: string | number | null;
  scientificValue?: ScientificValue<any>;
  unit?: string;
  isMono?: boolean;
}

const ORIGIN_LABELS: Record<ValueOrigin, { text: string; bg: string; color: string }> = {
  experimental: { text: 'تجربی', bg: '#EBF5F0', color: '#267D68' },
  estimated: { text: 'تخمینی', bg: '#FEF7E6', color: '#B7791F' },
  predicted: { text: 'پیش‌بینی', bg: '#FDF2F2', color: '#C53030' },
  unknown: { text: 'نامشخص', bg: '#EDF2F7', color: '#718096' },
};

export const PropertyRow: React.FC<PropertyRowProps> = ({
  label,
  value,
  scientificValue,
  unit,
  isMono = false,
}) => {
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
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      
      <View style={styles.valueContainer}>
        {originBadge && (
          <View style={[styles.originBadge, { backgroundColor: originBadge.bg }]}>
            <Text style={[styles.originBadgeText, { color: originBadge.color }]}>
              {originBadge.text}
            </Text>
          </View>
        )}

        <Text
          style={[
            styles.value,
            isUnavailable && styles.unavailable,
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
    borderBottomColor: '#F0F4F2',
  },
  label: {
    fontSize: 12.5,
    fontFamily: lightAppTheme.fontFamily.persianRegular,
    color: lightAppTheme.colors.secondaryText,
    flex: 1,
    textAlign: 'left',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
  },
  value: {
    fontSize: 13,
    fontFamily: lightAppTheme.fontFamily.persianSemiBold,
    color: lightAppTheme.colors.primaryText,
    textAlign: 'right',
  },
  unavailable: {
    color: '#A0AEC0',
    fontFamily: lightAppTheme.fontFamily.persianRegular,
  },
  monoText: {
    fontFamily: 'System',
    direction: 'ltr',
  },
  originBadge: {
    paddingHorizontal: 5,
    paddingVertical: 1.5,
    borderRadius: 4,
  },
  originBadgeText: {
    fontSize: 9,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
  },
});
