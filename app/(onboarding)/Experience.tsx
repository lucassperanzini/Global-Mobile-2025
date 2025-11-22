import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { ProgressBarStep } from '../../Components/ProgressBar';
import { ExperienceLevelCard } from '../../Components/ExperienceLevelCard'
import { useUser } from '@/context/UserContex';
import { Footer } from '@/Components/Footer';
import {stylesGlobal} from './styles'
import { ContainerQuestion } from '@/Components/ContainerQuestion';

type LevelKey = 'junior' | 'pleno' | 'senior' | 'lead' | 'estagio';

export default function ExperienceLevelScreen() {
  const navigation = useNavigation<any>();
  const [selectedLevel, setSelectedLevel] = useState<LevelKey | null>(null);

  const {user, changeUserProperty} = useUser()

  const handleContinue = () => {
    if (!selectedLevel) return;

    console.log('Nível selecionado:', selectedLevel);

    changeUserProperty('experience', selectedLevel);

    navigation.navigate('StudyTimeScreen');
 
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.box}>

        
        <ProgressBarStep current={4} total={7} />
      

        <ContainerQuestion title='Qual seu nível de experiência profissional?' subtitle=' Isso nos ajuda a entender seu ponto de partida.'/>
  

        <View style={styles.optionsContainer}>
          <ExperienceLevelCard
            label="Estágio / Início"
            icon={<Feather name="arrow-right" size={20} color="#2563EB" />}
            selected={selectedLevel === 'estagio'}

            onPress={() => setSelectedLevel('estagio')}
          />

          <ExperienceLevelCard
            label="Júnior"

            icon={<Feather name="trending-up" size={20} color="#2563EB" />}
            selected={selectedLevel === 'junior'}
            onPress={() => setSelectedLevel('junior')}
          />

          <ExperienceLevelCard
            label="Pleno"
            icon={<MaterialIcons name="bar-chart" size={20} color="#2563EB" />}

            selected={selectedLevel === 'pleno'}
            onPress={() => setSelectedLevel('pleno')}
          />

          <ExperienceLevelCard
            label="Sênior"
            icon={<MaterialIcons name="military-tech" size={20} color="#2563EB" />}
            selected={selectedLevel === 'senior'}
            onPress={() => setSelectedLevel('senior')}


          />

          <ExperienceLevelCard

            label="Gestor / Liderança"
            icon={<Feather name="users" size={20} color="#2563EB" />}
            selected={selectedLevel === 'lead'}
            onPress={() => setSelectedLevel('lead')}
          />
        </View>

      
      <Footer handleContinue={handleContinue} handleBack={handleBack}/>
      
      </View>
    </View>
  );
}



const styles= StyleSheet.create({

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },


  optionsContainer: {
    marginTop:22,
    marginBottom: 24,
  },

});
