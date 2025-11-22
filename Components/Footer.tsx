import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from './PrimmaryButton';
import { SecondaryButton } from './SecondaryButton';

type FooterProps = {
  handleContinue: () => void
  handleBack: () => void

};

export const Footer: React.FC<FooterProps> = ({ handleContinue, handleBack }) => {

  return (
    <View style={styles.footer}>
            <PrimaryButton label="Continuar" onPress={handleContinue}/>
             <SecondaryButton label="Voltar" onPress={handleBack} />
    </View>
  );
};

const styles = StyleSheet.create({

    footer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },

});
