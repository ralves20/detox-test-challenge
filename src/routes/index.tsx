// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignIn';
import WelcomeScreen from '../screens/Welcome';
import {useAuth} from '../contexts/AuthContext';

export type RootStackParamList = {
  SignIn: undefined;
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  const auth = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={auth.user ? 'Welcome' : 'SignIn'}
        screenOptions={{
          headerShown: false,
        }}>
        {auth.user ? (
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        ) : (
          <Stack.Screen name="SignIn" component={SignInScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
