import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const SkillInput = ({ value, onChange }) => {
  return (
    <View style={styles.inputWrapper}>
      <Feather name="edit-3" size={20} color="#6B7280" style={{ marginRight: 8 }} />
      <TextInput
        placeholder="Ex.: comunicação, Excel, atendimento ao cliente, program..."
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChange}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = {
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827'
  }
};
