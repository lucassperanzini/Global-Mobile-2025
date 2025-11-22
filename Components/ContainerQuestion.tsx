import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


type FooterProps = {
  title: string,
  subtitle: string

};

export const ContainerQuestion: React.FC<FooterProps> = ({ title, subtitle}) => {

  return (
          <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>
                {subtitle}
                </Text>
          </View>
  );
};

const styles = StyleSheet.create({

      title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
  },
   header: {
    marginBottom: 24,
  },
    subtitle: {
    fontSize: 14,
    color: '#6B7280',
  },

});
