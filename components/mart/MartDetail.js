import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'


const MartDetail = ({navigation, route}) => {
    const  itemId  = route.params.gambar;
    return (
        <View style={styles.container}>
            <Text style={{margin: 10, fontSize: 20}}>form order</Text>
            <Text>{route.params.id}</Text>
            <Text>{route.params.nama}</Text>
            <Text>{route.params.harga}</Text>
            <Text>{itemId}</Text>
            {/* <Image style={styles.gambarItem} source={{uri: route.params.gambar}} /> */}

            <Button 
                title="Back To Home"
                // onPress={() => console.log(navigation.route.params.nama)}            
                // onPress={() => console.log(gambar)}            
                onPress={() => navigation.navigate('Home')}            
            />
        </View>
    )
}

export default MartDetail

const styles = StyleSheet.create({
    card: {
        height: 200,
        width: 120,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        // marginHorizontal: 5,
        // marginVertical: 9,
        marginTop: 20,
        marginLeft: 13,
        
    },
    container: {
        // marginTop: 25,
        // marginLeft: 13,        
        marginHorizontal: 20,
        // backgroundColor: 'pink',
        // height: 200,
        // width: 120,
        // borderRadius: 5,
    },
    textNama: {
        fontSize: 16,        
    },
    textHarga: {
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 5,
    },
    gambarItem: {
        width: 100,
        height: 100,
    },
})