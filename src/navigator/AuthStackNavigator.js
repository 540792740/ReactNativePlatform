import React from 'react';
import {LoginScreen} from '../screens/LoginScreen'
import {RegistrationScreen} from "../screens/RegistrationScreen";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen2 from "../screens/LoginScreen2";

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
  return (
          <AuthStack.Navigator screenOptions={{
              headerShown:false,
          }}>
              <AuthStack.Screen name={'Login'} component={LoginScreen2}/>
              <AuthStack.Screen name={'Registration'} component={RegistrationScreen}/>
          </AuthStack.Navigator>
      )
}

