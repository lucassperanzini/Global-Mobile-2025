import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

type InterestChipProps = {
  label: string;
  icon: React.ReactNode;
  selected: boolean;
  colorVariant?: 'blue' | 'green' | 'purple' | 'pink' | 'yellow';
  onPress: () => void;
};

export const InterestChip: React.FC<InterestChipProps> = ({
  label,
  icon,
  selected,
  colorVariant = 'blue',
  onPress,
}) => {
  const bgColors: Record<string, string> = {
    blue: '#E0F2FF',
    green: '#E3F9E5',
    purple: '#E6E4FF',
    pink: '#FCE7F3',
    yellow: '#FEF3C7',
  };

  const borderColors: Record<string, string> = {
    blue: '#2E7BB4',
    green: '#4CAF50',
    purple: '#6A5AE0',
    pink: '#F472B6',
    yellow: '#FCD34D',
  };

  const backgroundColor = selected ? bgColors[colorVariant] : '#FFFFFF';
  const borderColor = selected ? borderColors[colorVariant] : '#E5E7EB';

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        { backgroundColor, borderColor },
        selected && styles.chipSelected,
      ]}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={[styles.label, selected && styles.labelSelected]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 24, 
    borderWidth: 1,
    marginBottom: 12,
  },
  chipSelected: {
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  iconContainer: {
    marginRight: 6,
  },
  label: {
    fontSize: 13,
    color: '#374151',
    fontWeight: '500',
  },
  labelSelected: {
    fontWeight: '700',
  },
});
