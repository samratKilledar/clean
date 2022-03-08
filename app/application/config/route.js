import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { Component } from 'react';
import LanguageScreen from "../../presentation/screens/LanguageScreen";
import UserTypeScreen from "../../presentation/screens/UserTypeScreen";
import RegisterationScreen from "../../presentation/screens/RegisterationScreen";
import SetProfileScreen from "../../presentation/screens/SetProfileScreen";
import RegisterationEmailIdScreen from "../../presentation/screens/RegisterationEmailIdScreen";
import ValidateAccountScreen from "../../presentation/screens/ValidateAccountScreen";
import ValidateMobileNoScreen from "../../presentation/screens/ValidateMobileNoScreen";
const Stack = createStackNavigator();
const header= ({ backgroundColor: '#f4511e'},{headerTintColor: '#fff',headerTitleStyle: { fontWeight: 'bold',}});
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={LanguageScreen} options={{headerShown: false}}/> 
          <Stack.Screen name="ValidateMobileNo" component={ValidateMobileNoScreen} options={{headerShown: false}}/> 
          <Stack.Screen name="UserType" component={UserTypeScreen} options={{headerShown: false}}/> 
          <Stack.Screen name="NewUser" component={RegisterationScreen} options={{headerShown: false}}/> 
          <Stack.Screen name="setProfile" component={SetProfileScreen} options={{headerShown: false}}/> 
          <Stack.Screen name="setProfileEmail" component={RegisterationEmailIdScreen} options={{headerShown: false}}/> 
          <Stack.Screen name="ValidateAccount" component={ValidateAccountScreen} options={{headerShown: false}}/> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;