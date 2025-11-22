import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SliderBubble = ({ value }: { value: number }) => {
  return (
    <View style={styles.bubble}>
      <Text style={styles.text}>{value}h</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#2E7BB4',
    borderRadius: 20,
    marginBottom: 8,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
