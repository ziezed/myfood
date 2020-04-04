/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text } from 'react-native';
// import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './components/Header';
import About from './components/about/About'
import Food from './components/food/Food'
import Store from './components/store/Store'
import Order from './components/order/Order'
import Home from './components/home/Home'


const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return ( 
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'android' : 'android';
            } else if (route.name === 'Food') {
              iconName = focused ? 'apple' : 'apple';
            } else if (route.name === 'Store') {
              iconName = focused ? 'shopping-cart' : 'shopping-cart';
            } else if (route.name === 'About') {
              iconName = focused ? 'heart' : 'heart';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >        
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Food" component={Food} />
        <Tab.Screen name="Store" component={Store} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
