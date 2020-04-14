import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Screen1'

const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

export default function () {
    return (
        <StackNavigator screenOptions={()=>({
            headerTitleAlign: ()=>'center',
        })}>
            <StackScreen name="Profile" component={Profile}/>
            </StackNavigator>
    
    );
  }