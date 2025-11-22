import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import SignInScreen from './SignInScreen';
import SignUpScreen from "./SignUpScreen";


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}
