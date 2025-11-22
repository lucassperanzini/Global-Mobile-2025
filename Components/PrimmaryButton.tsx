import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export const PrimaryButton = ({ label, onPress, disabled = false }: any) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    style={[styles.button, disabled && styles.disabled]}
  >
    <Text style={styles.label}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: '#2E7BB4',
    borderRadius: 14,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.4,
  },
});
