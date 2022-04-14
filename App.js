import React from 'react'
import { StyleSheet } from 'react-native'
import LoginScreen from "./Screens/Login"
import UserScreen from "./Screens/User"
import AdminScreen from "./Screens/Admin"
import RegisterScreen from "./Screens/Register"
import AddVisitScreen from './Screens/AddVisit'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Users" component={UserScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AddVisit" component={AddVisitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
