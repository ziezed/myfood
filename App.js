/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text } from 'react-native';
// import { Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './components/Header';
import About from './components/about/About'
import Food from './components/food/Food'
import Home from './components/Home'


const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return ( 
    <NavigationContainer>
      {/* <Header title='Halaman Utama' /> */}

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused
                ? 'android'
                : 'android';
            } else if (route.name === 'Food') {
              iconName = focused ? 'apple' : 'apple';
            } else if (route.name === 'About') {
              iconName = focused ? 'backward' : 'backward';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >        
        <Tab.Screen name="Main" component={Home} />
        <Tab.Screen name="Food" component={Food} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
