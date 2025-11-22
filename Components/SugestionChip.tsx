import React from 'react';
import { Pressable, Text, View } from 'react-native';

export const SuggestionChips = ({ options, onPress }) => (
  <View style={styles.container}>
    {options.map((item, index) => (
      <Pressable
        key={index}
        onPress={() => onPress(item)}
        style={styles.chip}
      >
        <Text style={styles.chipText}>{item}</Text>
      </Pressable>
    ))}
  </View>
);

const styles = {
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12
  },
  chip: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20
  },
  chipText: {
    fontSize: 15,
    color: '#374151'
  }
};
