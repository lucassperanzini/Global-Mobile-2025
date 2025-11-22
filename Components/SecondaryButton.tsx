import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export const SecondaryButton = ({ label, onPress }: any) => (
  <Pressable onPress={onPress} style={styles.container}>
    <Text style={styles.label}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  label: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
});
