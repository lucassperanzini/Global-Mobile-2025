import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import MainGoalScreen from './Goal';
import AreasInterestScreen from './Interests';
import SkillsScreen from './Skills';
import ExperienceLevelScreen from './Experience';
import StudyTimeScreen from './StudyTime';


const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainGoalScreen" component={MainGoalScreen} />
      <Stack.Screen name="AreasInterestScreen" component={AreasInterestScreen} />
      <Stack.Screen name="SkillsScreen" component={SkillsScreen} />
      <Stack.Screen name="ExperienceLevelScreen" component={ExperienceLevelScreen} />
      <Stack.Screen name="StudyTimeScreen" component={StudyTimeScreen} />
    </Stack.Navigator>
  );
}
