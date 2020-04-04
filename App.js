/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {View, Text } from 'react-native';
// import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Header from './components/Header';
// import About from './components/about/About'
// import Food from './components/food/Food'
// import Store from './components/store/Store'
// import Order from './components/order/Order'
// import Home from './components/home/Home'
import Navigator from './components/routes/NavTab';
// import Navigator from './components/routes/OrderStack';



const App: () => React$Node = () => {
  return ( 
    <Navigator />
  );
};


export default App;


