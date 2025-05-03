import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '@constants';
import { StatusBar } from 'react-native';
import { Login, SplashScreen } from '@screens';
StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor(Colors.light.background);
const Stack = createStackNavigator();
export default function App() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}