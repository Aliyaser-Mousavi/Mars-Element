import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Circle, G, Text as SvgText } from 'react-native-svg';
import { lightAppTheme } from '../../theme';
import { toPersianDigits } from '../../utils';

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
  accentColor = lightAppTheme.colors.scientificGreen,
  size = 320,
}) => {
  const center = size / 2;
  const numShells = shells.length;

  // Dynamic radius distribution
  const nucleusRadius = Math.max(22, Math.min(30, size * 0.08));
  const availableRadius = center - nucleusRadius - 20; // 20px padding
  const shellStep = availableRadius / Math.max(numShells, 1);

  return (
    <View style={styles.container}>
      <View style={[styles.svgWrapper, { width: size, height: size }]}>
        <Svg width={size} height={size}>
          {/* Concentric Shells (Orbits) */}
          {shells.map((count, index) => {
            const radius = nucleusRadius + (index + 1) * shellStep;
            return (
              <G key={`orbit-${index}`}>
                <Circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={lightAppTheme.colors.border}
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />
              </G>
            );
          })}

          {/* Electrons positioned along each orbit */}
          {shells.map((count, shellIdx) => {
            const radius = nucleusRadius + (shellIdx + 1) * shellStep;
            const electrons = [];
            // Offset initial angle slightly per shell for natural planetary aesthetic
            const angleOffset = (shellIdx * Math.PI) / 6;

            for (let i = 0; i < count; i++) {
              const angle = angleOffset + (2 * Math.PI * i) / count;
              const cx = center + radius * Math.cos(angle);
              const cy = center + radius * Math.sin(angle);
              electrons.push(
                <G key={`electron-${shellIdx}-${i}`}>
                  {/* Glow/halo */}
                  <Circle cx={cx} cy={cy} r="4.5" fill={accentColor} opacity="0.25" />
                  {/* Core dot */}
                  <Circle cx={cx} cy={cy} r="3" fill={accentColor} />
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
            fill={accentColor}
            stroke={lightAppTheme.colors.surface}
            strokeWidth="2.5"
          />

          {/* Nucleus Chemical Symbol */}
          <SvgText
            x={center}
            y={center - 3}
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#FFFFFF"
            fontSize="14"
            fontWeight="bold"
            fontFamily="System"
          >
            {symbol}
          </SvgText>

          {/* Nucleus Protons Counter */}
          <SvgText
            x={center}
            y={center + 11}
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="rgba(255,255,255,0.85)"
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
          <View key={`badge-${idx}`} style={styles.shellBadge}>
            <Text style={styles.shellLetter}>{SHELL_LETTERS[idx] || `n${idx + 1}`}</Text>
            <Text style={styles.shellCount}>{toPersianDigits(count)}e⁻</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  svgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shellLegend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 12,
    paddingHorizontal: 16,
  },
  shellBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightAppTheme.colors.lightGreen,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: lightAppTheme.colors.border,
  },
  shellLetter: {
    fontSize: 11,
    fontWeight: 'bold',
    color: lightAppTheme.colors.forestGreen,
    marginRight: 4,
  },
  shellCount: {
    fontSize: 11,
    fontFamily: lightAppTheme.fontFamily.persianMedium,
    color: lightAppTheme.colors.primaryText,
  },
});
