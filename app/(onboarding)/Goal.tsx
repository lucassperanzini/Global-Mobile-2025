import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { GoalOptionCard } from '@/Components/GoalComponent';
import { useUser } from '@/context/UserContex';
import { ProgressBarStep } from '@/Components/ProgressBar';
import { Footer } from '@/Components/Footer';
import { stylesGlobal } from './styles';
import { ContainerQuestion } from '@/Components/ContainerQuestion';

type GoalKey = 'migrate' | 'grow' | 'learn' | 'unsure';

export default function MainGoalScreen() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<GoalKey | null>(null);

  const {user, changeUserProperty} = useUser()

  const handleContinue = () => {
    if (!selected) return;
    
    changeUserProperty('goal', selected);

    navigation.navigate('AreasInterestScreen');
  };



  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.box}>

      <ProgressBarStep current={1} total={7} />

      <ContainerQuestion title='Qual seu objetivo principal?' subtitle='Isso nos ajuda a criar recomendações perfeitas para você.'/>

 
      <View style={styles.cardsContainer}>
        <GoalOptionCard
            label="Migrar para outra área"
            description="Quero fazer uma transição de carreira."
            icon={<Feather name="repeat" size={22} color="#2E7BB4" />}
            selected={selected === 'migrate'}
            onPress={() => setSelected('migrate')}
               />

        <GoalOptionCard
          label="Evoluir na minha profissão"
          description="Quero crescer onde já atuo hoje."
          icon={<Feather name="trending-up" size={22} color="#2E7BB4" />}
          selected={selected === 'grow'}
          onPress={() => setSelected('grow')}
        />

        <GoalOptionCard
          label="Aprender uma nova habilidade"
          description="Quero dominar algo novo e relevante."
          icon={<Feather name="zap" size={22} color="#2E7BB4" />}
          selected={selected === 'learn'}
          onPress={() => setSelected('learn')}
        />

        <GoalOptionCard
          label="Não tenho certeza (IA te ajuda)"
          description="Podemos explorar caminhos juntos."
          icon={<MaterialIcons name="help-outline" size={22} color="#2E7BB4" />}
          selected={selected === 'unsure'}
          onPress={() => setSelected('unsure')}
        />
      </View>

      <Footer handleContinue={handleContinue} handleBack={handleBack}/>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({

    cardsContainer: {
    
    gap: 16
  },

  backText: {
    fontSize: 14,
    color: '#6B7280',
  },

 

});
