import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const RoadmapItem = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      <Feather name="check-circle" size={20} color="#2E7BB4" />
      <Text style={styles.label}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  label: {
    marginLeft: 8,
    color: '#374151',
    fontSize: 15,
    flex: 1,
  },
});
