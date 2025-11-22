import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { InterestChip } from '../../Components/InterestChip';
import { useUser } from '@/context/UserContex';
import { ProgressBarStep } from '@/Components/ProgressBar';
import { Footer } from '@/Components/Footer';
import { stylesGlobal } from './styles';
import { ContainerQuestion } from '@/Components/ContainerQuestion';

type InterestKey ='technologia'| 'saude'| 'design'| 'educacao'| 'financas'| 'marketing'| 'administracao'| 'engenharia'| 'rh';

export default function AreasInterestScreen() {
    const {user, changeUserProperty} = useUser()
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<InterestKey[]>([]);

  const minSelected = 3;
  const maxSelected = 5;

  const interests = useMemo(
    () =>
      [
        {
          key: 'technologia' as InterestKey,
          label: 'Tech',
          icon: <MaterialIcons name="laptop-mac" size={18} color="#2E7BB4" />,
          colorVariant: 'blue' as const,
        },
        {
          key: 'saude' as InterestKey,
          label: 'Saúde',
          icon: <MaterialIcons name="favorite-border" size={18} color="#4CAF50" />,
          colorVariant: 'green' as const,
        },
        {
          key: 'design' as InterestKey,
          label: 'Design',
          icon: <Feather name="pen-tool" size={18} color="#6A5AE0" />,
          colorVariant: 'purple' as const,
        },
        {
          key: 'educacao' as InterestKey,
          label: 'Educação',
          icon: <Feather name="book-open" size={18} color="#2E7BB4" />,
          colorVariant: 'blue' as const,
        },
        {
          key: 'financas' as InterestKey,
          label: 'Finanças',
          icon: <Feather name="trending-up" size={18} color="#4CAF50" />,
          colorVariant: 'green' as const,
        },
        {
          key: 'marketing' as InterestKey,
          label: 'Marketing',
          icon: <MaterialIcons name="campaign" size={18} color="#F472B6" />,
          colorVariant: 'pink' as const,
        },
        {
          key: 'administracao' as InterestKey,
          label: 'Adm',
          icon: <MaterialIcons name="business-center" size={18} color="#6A5AE0" />,
          colorVariant: 'purple' as const,
        },
        {
          key: 'engenharia' as InterestKey,
          label: 'Engenharia',
          icon: <Feather name="settings" size={18} color="#2E7BB4" />,
          colorVariant: 'blue' as const,
        },
        {
          key: 'rh' as InterestKey,
          label: 'RH / Pessoas',
          icon: <Feather name="users" size={18} color="#FCD34D" />,
          colorVariant: 'yellow' as const,
        },
      ] as const,
    []
  );

  const toggleInterest = (key: InterestKey) => {
    setSelected((current) => {
      const isSelected = current.includes(key);
      if (isSelected) {
        return current.filter((item) => item !== key);
      }
      if (current.length >= maxSelected) return current;
      return [...current, key];
    });
  };

  const canContinue = selected.length >= minSelected;

  const handleContinue = () => {
    if (!canContinue) return;
    console.log('Áreas selecionadas:', selected);

    changeUserProperty('interests', selected);

    navigation.navigate('SkillsScreen');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView  contentContainerStyle={stylesGlobal.container}>
      <View style={stylesGlobal.box}>

       <ProgressBarStep current={2} total={7} />


      <ContainerQuestion 
      title='Quais áreas mais te interessam?' 
      subtitle='Escolha de 3 a 5 áreas para personalizar suas recomendações.'/>

     
      <View style={styles.chipsGrid}>
        {interests.map((item) => (
          <View style={styles.chipWrapper} key={item.key}>
            <InterestChip
              label={item.label}
              icon={item.icon}
              selected={selected.includes(item.key)}
              onPress={() => toggleInterest(item.key)}
              colorVariant={item.colorVariant}
            />
          </View>
        ))}
      </View>

      <Text style={styles.helperText}>
        {selected.length} selecionada{selected.length !== 1 ? 's' : ''} de {maxSelected} possíveis
      </Text>

     
      <Footer handleContinue={handleContinue} handleBack={handleBack}/>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  

  chipsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  chipWrapper: {
    width: '30%', 
    marginBottom: 8,
  },

  helperText: {
    marginTop: 12,
    fontSize: 13,
    color: '#6B7280',
  },


});

