import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

type ExperienceLevelCardProps = {
  label: string;
  icon: React.ReactNode;
  selected: boolean;
  onPress: () => void;
};

export const ExperienceLevelCard: React.FC<ExperienceLevelCardProps> = ({
  label,
  icon,
  selected,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        selected && styles.cardSelected,
      ]}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardSelected: {
    borderColor: '#2E7BB4',
    backgroundColor: '#E0F0FF',
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  iconContainer: {
    marginRight: 12,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
});
