import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Order from '../order/Order'
import OrderDetail from '../order/OrderDetail'


const Stack = createStackNavigator();

const OrderStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Order" component={Order} />
                <Stack.Screen name="OrderDetail" component={OrderDetail} />
            </Stack.Navigator> 
        </NavigationContainer>
    )
}

export default OrderStack





