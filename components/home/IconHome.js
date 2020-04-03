import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const IconHome = () => {
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
                    />
                    <Text style={styles.iconText}>Food</Text>
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
                    />
                    <Text style={styles.iconText}>Store</Text>
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
                    />
                    <Text style={styles.iconText}>Order</Text>
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
                    />
                    <Text style={styles.iconText}>About</Text>
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
        paddingTop: 30
    },
     iconText: {
        paddingLeft: 23
    }
})
