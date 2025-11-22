import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ProgressBarStep } from '../../Components/ProgressBar'
import { PrimaryButton } from '../../Components/PrimmaryButton'
import { SecondaryButton } from '../../Components/SecondaryButton'
import { TimeSlider } from '../../Components/TimeSlider'
import { useNavigation } from '@react-navigation/native';
import { useUser } from '@/context/UserContex';
import { router, useRouter } from 'expo-router';
import { stylesGlobal } from './styles';
import { ContainerQuestion } from '@/Components/ContainerQuestion';

export default function StudyTimeScreen() {
  const navigation = useNavigation<any>();
  const [studyHours, setStudyHours] = useState(5);


  const {user,changeUserProperty} = useUser()

  const handleContinue = () => {
   
       changeUserProperty('studyTime', studyHours);
       router.replace('/(tabs)/Home');
  };

  return (
    <ScrollView contentContainerStyle={stylesGlobal.container}>
      <View style={stylesGlobal.box}>


  
      <ProgressBarStep current={5} total={7} />

      <ContainerQuestion title={`Quanto tempo você pode estudar por semana?`} subtitle='Vamos adaptar seu plano de estudos ao seu ritmo.'/>
        

      <View style={styles.card}>
        <TimeSlider value={studyHours} onChange={setStudyHours} />

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            A IA irá adaptar suas trilhas ao seu ritmo de estudo.
          </Text>
        </View>
      </View>

      <PrimaryButton
        label="Continuar"
        onPress={handleContinue}
      />

      <SecondaryButton label="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 22,
    marginBottom: 28,
  },
  infoBox: {
    backgroundColor: '#F1F4F9',
    padding: 16,
    borderRadius: 16,
    marginTop: 16,
  },
  infoText: {
    color: '#4B5563',
    textAlign: 'center',
    fontSize: 15,
  },
});
