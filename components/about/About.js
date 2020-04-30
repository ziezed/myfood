import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Card } from 'react-native-elements'
import Header from '../Header'

const About = ({ navigation }) => {
    return (
        <View>
            <Header title="Tentang Kami" />
                        
            <Card
                title='Unimaginable Service'
                image={require('../images/solid.jpg')}>
                <Text style={{marginBottom: 10, fontSize: 16}}>
                    Kami Hadir Untuk Memenuhi Kebuhutan Anda, Kapan pun dan Dimana pun Juga.
                </Text>
            </Card>

            <View style={styles.viewButton}>
                <Button title="Kembali"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    viewButton: {
        alignItems: 'center',        
        paddingTop: 50,
        // width: 120
    }
})
