import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Order = ({ navigation }) => {
    return (
        <View>
            <Text>halaman order</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.push('OrderDetail')}
            />
        </View>
    )
}

export default Order

const styles = StyleSheet.create({})
