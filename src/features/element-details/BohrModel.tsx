import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';
import Svg, { Circle, G, Text as SvgText } from 'react-native-svg';
import { useTheme } from '@/theme';
import { toPersianDigits } from '@/utils';

interface BohrModelProps {
  symbol: string;
  protons: number;
  neutrons: number;
  shells: number[]; // e.g. [2, 8, 14, 2]
  accentColor?: string;
  size?: number;
}

const SHELL_LETTERS = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];

export const BohrModel: React.FC<BohrModelProps> = ({
  symbol,
  protons,
  shells,
  accentColor,
  size,
}) => {
  const theme = useTheme();
  const { width: screenWidth } = useWindowDimensions();

  const color = accentColor || theme.colors.scientificGreen;

  // Responsive diagram dimension: adapts safely to mobile viewports without clipping
  const diagramSize = size || Math.min(Math.max(screenWidth - 60, 240), 290);
  const center = diagramSize / 2;
  const numShells = Math.max(shells.length, 1);

  // Dynamic radius distribution: 16px safety padding prevents electron glow clipping
  const nucleusRadius = Math.max(20, Math.min(27, diagramSize * 0.085));
  const availableRadius = center - nucleusRadius - 16;
  const shellStep = availableRadius / numShells;

  const totalElectrons = shells.reduce((acc, curr) => acc + curr, 0);

  return (
    <View style={styles.container}>
      {/* SVG Canvas */}
      <View style={[styles.svgWrapper, { width: diagramSize, height: diagramSize }]}>
        <Svg width={diagramSize} height={diagramSize} viewBox={`0 0 ${diagramSize} ${diagramSize}`}>
          {/* Concentric Shells (Orbits) */}
          {shells.map((_, index) => {
            const radius = nucleusRadius + (index + 1) * shellStep;
            return (
              <G key={`orbit-${index}`}>
                <Circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={theme.isDark ? '#274239' : '#D1DFD8'}
                  strokeWidth="1.2"
                  strokeDasharray="3 3.5"
                />
              </G>
            );
          })}

          {/* Electrons positioned along each orbit */}
          {shells.map((count, shellIdx) => {
            const radius = nucleusRadius + (shellIdx + 1) * shellStep;
            const electrons = [];
            // Offset initial angle per shell for natural planetary aesthetic
            const angleOffset = (shellIdx * Math.PI) / 6;

            for (let i = 0; i < count; i++) {
              const angle = angleOffset + (2 * Math.PI * i) / count;
              const cx = center + radius * Math.cos(angle);
              const cy = center + radius * Math.sin(angle);
              electrons.push(
                <G key={`electron-${shellIdx}-${i}`}>
                  {/* Outer glow/halo */}
                  <Circle cx={cx} cy={cy} r="4.2" fill={color} opacity="0.25" />
                  {/* Core electron dot */}
                  <Circle
                    cx={cx}
                    cy={cy}
                    r="2.8"
                    fill={color}
                    stroke={theme.colors.card}
                    strokeWidth="0.8"
                  />
                </G>
              );
            }
            return <G key={`shell-electrons-${shellIdx}`}>{electrons}</G>;
          })}

          {/* Atomic Nucleus */}
          <Circle
            cx={center}
            cy={center}
            r={nucleusRadius}
            fill={color}
            stroke={theme.colors.card}
            strokeWidth="2.5"
          />

          {/* Nucleus Chemical Symbol */}
          <SvgText
            x={center}
            y={center - 3}
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#FFFFFF"
            fontSize="13.5"
            fontWeight="bold"
            fontFamily="System"
          >
            {symbol}
          </SvgText>

          {/* Nucleus Protons Counter */}
          <SvgText
            x={center}
            y={center + 10}
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="rgba(255,255,255,0.9)"
            fontSize="9"
            fontWeight="600"
            fontFamily="System"
          >
            {toPersianDigits(protons)}p⁺
          </SvgText>
        </Svg>
      </View>

      {/* Shell Breakdown Badges (K, L, M, N...) */}
      <View style={styles.shellLegend}>
        {shells.map((count, idx) => (
          <View
            key={`badge-${idx}`}
            style={[
              styles.shellBadge,
              {
                backgroundColor: theme.isDark ? theme.colors.surfaceElevated : theme.colors.card,
                borderColor: theme.colors.cardBorder,
              },
            ]}
          >
            <Text style={[styles.shellLetter, { color }]}>
              {SHELL_LETTERS[idx] || `n${idx + 1}`}
            </Text>
            <Text
              style={[
                styles.shellCount,
                {
                  color: theme.colors.primaryText,
                  fontFamily: theme.fontFamily.persianMedium,
                },
              ]}
            >
              {toPersianDigits(count)}e⁻
            </Text>
          </View>
        ))}
      </View>

      {/* Total Electrons Summary */}
      <View
        style={[
          styles.summaryPill,
          {
            backgroundColor: theme.isDark ? `${color}20` : theme.colors.lightGreen,
          },
        ]}
      >
        <Text
          style={[
            styles.summaryText,
            {
              color: theme.isDark ? theme.colors.primaryText : theme.colors.forestGreen,
              fontFamily: theme.fontFamily.persianMedium,
            },
          ]}
        >
          مجموع {toPersianDigits(totalElectrons)} الکترون در {toPersianDigits(shells.length)} لایه اصلی
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  svgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shellLegend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
    marginTop: 10,
    paddingHorizontal: 12,
  },
  shellBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    gap: 4,
  },
  shellLetter: {
    fontSize: 10.5,
    fontWeight: '700',
  },
  shellCount: {
    fontSize: 10.5,
  },
  summaryPill: {
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  summaryText: {
    fontSize: 10.5,
  },
});
