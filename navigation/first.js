import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Screen1'
const Tab = createBottomTabNavigator();
  
export default function () {
    return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions= {{
            activeBackgroundColor: 'white',
            labelStyle: {
                fontSize: 10,
                marginBottom: 10
            },            
                }}>
                  
          <Tab.Screen name="Profile" component={Home} />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }