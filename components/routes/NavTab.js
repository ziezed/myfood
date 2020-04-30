import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import About from '../about/About'
import ListOrder from '../listOrder/ListOrder'
import History from '../history/History'
import Profile from '../profile/Profile'
import ScreenStack from './ScreenStack'


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
                    } else if (route.name === 'ListOrder') {
                    iconName = focused ? 'apple' : 'apple';
                    } else if (route.name === 'History') {
                    iconName = focused ? 'shopping-cart' : 'shopping-cart';
                    } else if (route.name === 'Profile') {
                    iconName = focused ? 'heart' : 'heart';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
                })}
            >        
                <Tab.Screen name="Home" component={ScreenStack} />
                <Tab.Screen name="ListOrder" component={ListOrder} />
                <Tab.Screen name="History" component={History} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default NavTab
