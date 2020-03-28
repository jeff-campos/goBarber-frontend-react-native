import React from 'react';
import routes from './routes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Routes({ signed }) {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const TypeNavigation = signed ? Tab : Stack;

  return (
    <TypeNavigation.Navigator
      screenOptions={({ route }) => ({
        headerTintColor: '#fff',
        headerStyle: {
          shadowOpacity: 0,
          backgroundColor: '#7159c1',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'event';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'New') {
            iconName = 'add-circle-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: '#8d41a8',
        },
      }}>
      {routes.map(
        route =>
          route.isPrivate === signed && (
            <TypeNavigation.Screen key={route.name} {...route} />
          ),
      )}
    </TypeNavigation.Navigator>
  );
}
