import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


const OrderDetail = () => {
    return (
        <View>
            <Text>Oreder Detail</Text>
            <Button 
                title="Console"
                onPress={() => console.log("testing clear")}            
            />
        </View>
    )
}

export default OrderDetail

const styles = StyleSheet.create({})
