import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'


const FoodOrder = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, marginLeft: 30, paddingBottom: 30}}>form order</Text>
            <Text style={{fontSize: 16}}>{route.params.nama}</Text>
            <Text style={{fontSize: 16, paddingBottom: 100}}>{route.params.harga}</Text>

            <Button               
                title="Back To Home"
                onPress={() => navigation.navigate('Home')}            
            />
        </View>
    )
}

export default FoodOrder

const styles = StyleSheet.create({
    container: {
       marginHorizontal: 20,
       paddingTop: 20,
    },
})