import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowOpacity: 0,
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'Cadastre-se' }}
      />
    </Stack.Navigator>
  );
}
