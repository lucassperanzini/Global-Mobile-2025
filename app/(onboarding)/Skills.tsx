import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SkillInput } from '../../Components/SkillInput'
import { SuggestionChips } from '../../Components/SugestionChip'
import { StyleSheet } from 'react-native';
import { ProgressBarStep } from '../../Components/ProgressBar';
import { SelectedSkillsChips } from '../../Components/SelectedSkillsChips'
import { useUser } from '@/context/UserContex';
import { Footer } from '@/Components/Footer';
import { ContainerQuestion } from '@/Components/ContainerQuestion';
import { stylesGlobal } from './styles';


export default function SkillsScreen() {
  const navigation = useNavigation<any>();
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>([]);

  const {user, changeUserProperty} = useUser()

  const popularSkills = [
    'Comunicação',
    'Organização',
    'Excel básico',
    'Trabalho em equipe',
  ];

  const addSkill = (raw: string) => {
    const skill = raw.trim();
    if (!skill) return;
    if (skills.includes(skill)) return;
    setSkills((prev) => [...prev, skill]);
  };

  const removeSkill = (skill: string) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleContinue = () => {
    if (skills.length === 0) return;
    console.log('Habilidades atuais:', skills);
    
    changeUserProperty('skills', skills);

    navigation.navigate('ExperienceLevelScreen');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={stylesGlobal.container}>
      <View style={stylesGlobal.box}>
       
        <ProgressBarStep current={3} total={7} />

        <ContainerQuestion title='Quais suas habilidades atuais?' 
        subtitle=' Escreva as habilidades que você já possui ou tem alguma familiaridade.'/>
 

        <View style={styles.inputCard}>
          <SkillInput value={skillInput} onChange={setSkillInput} />

          {skillInput.length > 2 && (
            <Pressable
              style={styles.addButton}
              onPress={() => {
                addSkill(skillInput);
                setSkillInput('');
              }}
            >
              <Text style={styles.addButtonText}>Adicionar</Text>
            </Pressable>
          )}

         
          {skills.length > 0 && (
            <View style={styles.selectedSkillsSection}>
              <Text style={styles.selectedSkillsTitle}>Suas habilidades</Text>
              <SelectedSkillsChips skills={skills} onRemove={removeSkill} />
            </View>
          )}
        </View>

       
        <Text style={styles.suggestionsTitle}>Sugestões</Text>

        <SuggestionChips
          options={popularSkills}
          onPress={addSkill}
        />
        <Footer handleContinue={handleContinue} handleBack={handleBack}/>
      </View>

    </ScrollView>
  );
}

 const styles = StyleSheet.create({


      inputCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 12,
  },
  addButton: {
    backgroundColor: '#2E7BB4',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center'
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '600'
  },
  suggestionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  

  continueText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18
  },
  backText: {
    color: '#6B7280',
    fontSize: 16
  },


  selectedSkillsSection: {
    marginTop: 12,
  },
  selectedSkillsTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 4,
  },
});

