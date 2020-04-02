/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text } from 'react-native';
import { Header, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const App: () => React$Node = () => {
  return ( 
    <View>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY FOOD', style: { color: '#fff' } }}
      />

      <Text> Ini adlah halaman Utama</Text>

      <SocialIcon
        light
        type='medium'
      />
    </View>
  );
};


export default App;
