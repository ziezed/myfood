import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'teal',
        alignItems: 'center',
    },
    text: {
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
})