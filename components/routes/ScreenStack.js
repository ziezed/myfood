import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../home/Home'
import Mart from '../mart/Mart'
import MartDetail from '../mart/MartDetail'
import Olshop from '../olshop/Olshop'
import OlshopDetail from '../olshop/OlshopDetail'
import OlshopOrder from '../olshop/OlshopOrder'
import Food from '../food/Food'
import FoodDetail from '../food/FoodDetail'
import FoodOrder from '../food/FoodOrder'
import Paket from '../paket/Paket'
import PaketDetail from '../paket/PaketDetail'
import About from '../about/About'


const Stack = createStackNavigator();

const ScreenStack = ({navigation, route}) => {
    if (route.state && route.state.index > 0) {
        navigation.setOptions({tabBarVisible: false})
    } else {
        navigation.setOptions({tabBarVisible: true})
    }
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Mart" component={Mart} />
            <Stack.Screen name="MartDetail" component={MartDetail} />
            <Stack.Screen name="Olshop" component={Olshop} />
            <Stack.Screen name="OlshopDetail" component={OlshopDetail} />
            <Stack.Screen name="OlshopOrder" component={OlshopOrder} />
            <Stack.Screen name="Food" component={Food} />
            <Stack.Screen name="FoodDetail" component={FoodDetail} />
            <Stack.Screen name="FoodOrder" component={FoodOrder} />
            <Stack.Screen name="Paket" component={Paket} />
            <Stack.Screen name="PaketDetail" component={PaketDetail} />
            <Stack.Screen name="About" component={About} options={{headerShown: false}} />
        </Stack.Navigator> 
    )
}

export default ScreenStack





