
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Login';
import Homepage from './src/Homepage';
import History from './src/History';
import Transaction from './src/Transaction'
import Profile from './src/Profile';
const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Profile" component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};


export default App;
