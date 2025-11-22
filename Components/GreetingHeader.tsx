import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type GreetingHeaderProps = {
  name: string;
};

export const GreetingHeader: React.FC<GreetingHeaderProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Boa tarde, {name} 👋</Text>
      <Text style={styles.subtitle}>Pronto para avançar hoje?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
  },
});
