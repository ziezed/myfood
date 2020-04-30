import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


const PaketDetail = () => {
    return (
        <View>
            <Text>Paket Detail</Text>
            <Button 
                title="Console"
                onPress={() => console.log("testing clear")}            
            />
        </View>
    )
}

export default PaketDetail

const styles = StyleSheet.create({})
