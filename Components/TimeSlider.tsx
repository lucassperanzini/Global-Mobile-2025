import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SliderBubble } from './SliderBubble';

const PRESET_VALUES = [1, 2, 5, 10, 15];

export const TimeSlider = ({ value, onChange }: any) => {
  const [selected, setSelected] = useState(value);

  const handleSelect = (val: number) => {
    setSelected(val);
    onChange(val);
  };

  return (
    <View style={styles.container}>
      <SliderBubble value={selected} />

      <View style={styles.sliderBar}>
        {PRESET_VALUES.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => handleSelect(item)}
            style={[
              styles.point,
              selected === item && styles.activePoint
            ]}
          />
        ))}
      </View>

      <View style={styles.labels}>
        {PRESET_VALUES.map((item, index) => (
          <Text key={index} style={styles.label}>{item}h</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center' },
  sliderBar: {
    width: '90%',
    height: 8,
    backgroundColor: '#DDE3EA',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    paddingHorizontal: 10,
  },
  point: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#C7CDD4',
  },
  activePoint: {
    backgroundColor: '#2E7BB4',
    width: 20,
    height: 20,
  },
  labels: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
  },
});
