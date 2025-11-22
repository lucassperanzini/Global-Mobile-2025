import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStack } from "../../navigation";
import CareerDetailsScreen from "./CareerDetailScreen";
import Index from "./Home";

const Stack = createNativeStackNavigator<RootStack>();

const StackNavigator = () => {
  return (
      <Stack.Navigator>
        
              <Stack.Screen name="Home" component={Index}></Stack.Screen>
              <Stack.Screen name="CareerDetailsScreen" component={CareerDetailsScreen}></Stack.Screen>
      </Stack.Navigator> 
  );
};

export default StackNavigator



