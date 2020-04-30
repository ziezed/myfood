import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const IconHome = ({ navigation }) => {
    return (
        <View style={styles.iconContainer}>
            <View>
                <TouchableOpacity>
                    <Icon
                        reverse
                        raised
                        name='restaurant'
                        color='#be0a3b'
                        size= {30}
                        onPress={() => navigation.navigate('Mart')}
                    />
                    <Text style={styles.iconText}>Mart</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Icon
                        reverse
                        raised
                        name='store'
                        color='#be0a3b'
                        size= {30}
                        onPress={() => navigation.navigate('Food')}
                    />
                    <Text style={styles.iconText}>Food</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Icon
                        reverse
                        raised
                        name='camera'
                        color='#be0a3b'
                        size= {30}
                        onPress={() => navigation.navigate('Olshop')}
                    />
                    <Text style={{paddingLeft: 15}}>OLshop</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Icon
                        reverse
                        raised
                        name='pets'
                        color='#be0a3b'
                        size= {30}
                        onPress={() => navigation.navigate('Paket')}
                    />
                    <Text style={styles.iconText}>Paket</Text>
                </TouchableOpacity>
            </View>            
        </View>
    )
}

export default IconHome

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row", 
        justifyContent: 'space-around',
        paddingTop: 30,
    },
     iconText: {
        paddingLeft: 23
    }
})