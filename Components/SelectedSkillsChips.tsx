import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

type Props = {
  skills: string[];
  onRemove: (skill: string) => void;
};

export const SelectedSkillsChips: React.FC<Props> = ({ skills, onRemove }) => {
  if (!skills.length) return null;

  return (
    <View style={styles.container}>
      {skills.map((skill) => (
        <Pressable
          key={skill}
          onPress={() => onRemove(skill)}
          style={styles.chip}
        >
          <Text style={styles.chipText}>{skill}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#E5F0FF',
  },
  chipText: {
    fontSize: 13,
    color: '#1F2933',
    fontWeight: '500',
  },
});
