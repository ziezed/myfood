import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native'


const FoodDetail = ({navigation, route}) => {

    const [food, setFood] = useState([]);
    useEffect(() => {

        setFood([
            {nama: 'Sate Madura', harga: '1500', gambar: require('../images/food/sate1.jpg'), id: '1'},
            {nama: 'Sate Padang', harga: '1300', gambar: require('../images/food/sate2.jpg'), id: '2'},
            {nama: 'Nasi rames Enak', harga: '1200', gambar: require('../images/food/nasi1.jpg'), id: '3'},
            {nama: 'Nasi Rames Campur', harga: '1500', gambar: require('../images/food/nasi2.jpg'), id: '4'},
            {nama: 'Roti Bakar', harga: '1000', gambar: require('../images/food/roti1.jpg'), id: '5'},
            {nama: 'Roti Bakar asli', harga: '16000', gambar: require('../images/food/roti2.jpg'), id: '6'},
            {nama: 'Jus Alpukat', harga: '10800', gambar: require('../images/food/jus1.jpg'), id: '7'},
            {nama: 'Jus Naga', harga: '13000', gambar: require('../images/food/jus2.jpg'), id: '8'},
        ])     
    },[])

    return (
        <View  style={{ flex: 1 }}>
            <Text style={styles.textResto}>Cafe & restoran : {route.params.nama}</Text>
            <Text style={styles.textAlamat}>Alamat : {route.params.alamat}</Text>
            <FlatList 
                contentContainerStyle={{ paddingBottom: 20}}
                numColumns={3}
                data={food}
                keyExtractor={(item) => item.id.toString()}                                                  
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FoodOrder', item) } >
                        <View style={styles.card}>
                            <View style={styles.item}>
                                <Image style={styles.gambarItem} source={item.gambar} />
                                <Text style={styles.textHarga}>Rp. {item.harga}</Text>
                                <Text style={styles.textNama}>{item.nama}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ) }                 
            />
            <Button 
                title="Back To home"
                onPress={() => navigation.navigate('Home')}            
            />
        </View>
    )
}

export default FoodDetail

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
        marginTop: 20,
        marginLeft: 13,
        
    },
    item: {    
        padding: 10,
    },
    textNama: {
        fontSize: 16,        
    },
    textResto: {
        fontSize: 20, 
        marginTop: 20,
        marginLeft: 13,       
    },
    textAlamat: {
        fontSize: 16,
        marginLeft: 13,        
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
