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

      <Tab.Navigator>        
        <Tab.Screen name="Main" component={Home} />
        <Tab.Screen name="Food" component={Food} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
