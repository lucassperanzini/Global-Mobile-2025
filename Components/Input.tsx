import React from 'react';
import { TextInput, View, StyleSheet, TextInputProps } from 'react-native';

export const Input = (props: TextInputProps) => (
  <View style={styles.container}>
    <TextInput
      placeholderTextColor="#9CA3AF"
      style={styles.input}
      {...props}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { width: '100%' },
  input: {
    borderWidth: 1,
    margin:6,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
