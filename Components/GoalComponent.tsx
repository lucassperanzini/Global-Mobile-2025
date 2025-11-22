import React from 'react';
import { Pressable, View, Text, StyleSheet, ViewStyle } from 'react-native';

type GoalOptionCardProps = {
  label: string;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  onPress: () => void;
  variant?: 'primary' | 'default';

};

export const GoalOptionCard: React.FC<GoalOptionCardProps> = ({
  label,
  description,
  icon,
  selected,
  onPress,
  variant = 'default',
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        variant === 'primary' && styles.cardPrimary,
        selected && styles.cardSelected,
      ]}
    >
      <View style={styles.cardIcon}>{icon}</View>

      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{label}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </Pressable>
  );
};


const styles = StyleSheet.create({


  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardPrimary: {
    backgroundColor: '#E5F3FB',
    borderColor: '#BFDEF3',
  },
  cardSelected: {
    borderColor: '#2E7BB4',
    backgroundColor: '#E0F0FA',
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  cardIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#6B7280',
  },

   }) 
