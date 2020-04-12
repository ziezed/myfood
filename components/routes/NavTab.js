import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import About from '../about/About'
import Food from '../food/Food'
import Store from '../store/Store'
import OrderStackscreen from './OrderStack'


const Tab = createBottomTabNavigator();

const NavTab = () => {
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
                <Tab.Screen name="Home" component={OrderStackscreen} />
                <Tab.Screen name="Food" component={Food} />
                <Tab.Screen name="Store" component={Store} />
                <Tab.Screen name="About" component={About} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default NavTab
