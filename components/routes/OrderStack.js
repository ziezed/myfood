import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../home/Home'
import Order from '../order/Order'
import OrderDetail from '../order/OrderDetail'


const Stack = createStackNavigator();

const OrderStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name="OrderDetail" component={OrderDetail} />
        </Stack.Navigator> 
    )
}

export default OrderStack





