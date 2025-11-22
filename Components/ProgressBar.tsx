import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  current: number;   // passo atual
  total: number;     // total de passos
  showLabel?: boolean;
};

export const ProgressBarStep: React.FC<Props> = ({
  current,
  total,
  showLabel = false,
}) => {
  const progress = Math.max(0, Math.min(current / total, 1));

  return (
    <View style={styles.container}>
      {showLabel && (
        <Text style={styles.label}>
          Passo {current} de {total}
        </Text>
      )}
      <View style={styles.track}>
        <View style={[styles.fill, { flex: progress }]} />
        <View style={{ flex: 1 - progress }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  track: {
    width: '100%',
    height: 4,
    borderRadius: 999,
    backgroundColor: '#E5E7EB',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: '#2E7BB4',
    borderRadius: 999,
  },
});
