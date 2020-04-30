import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native'


const FoodDetail = ({navigation, route}) => {

    const [olbarang, setOlbarang] = useState([]);
    useEffect(() => {

        setOlbarang([
            {nama: 'Sabun kecantikan', harga: '1500', gambar: require('../images/olbarang/kosmetik1.jpg'), id: '1'},
            {nama: 'Pemutih cantik', harga: '1300', gambar: require('../images/olbarang/kosmetik2.jpg'), id: '2'},
            {nama: 'Lulur dody cream', harga: '1200', gambar: require('../images/olbarang/kosmetik3.jpg'), id: '3'},
            {nama: 'Gantungan kunci', harga: '1500', gambar: require('../images/olbarang/kerajinan1.jpg'), id: '4'},
            {nama: 'Pernak pernik', harga: '1000', gambar: require('../images/olbarang/kerajinan2.jpg'), id: '5'},
            {nama: 'Kursi Rotan', harga: '16000', gambar: require('../images/olbarang/rotan1.jpg'), id: '6'},
            {nama: 'Meja Rotan', harga: '10800', gambar: require('../images/olbarang/rotan2.jpg'), id: '7'},
            {nama: 'Gantungan Rotan', harga: '13000', gambar: require('../images/olbarang/rotan3.jpg'), id: '8'},
        ])     
    },[])

    return (
        <View  style={{ flex: 1 }}>
            <Text style={styles.textResto}>OL Shop : {route.params.nama}</Text>
            <Text style={styles.textAlamat}>Alamat : {route.params.alamat}</Text>
            <FlatList 
                contentContainerStyle={{ paddingBottom: 20}}
                numColumns={3}
                data={olbarang}
                keyExtractor={(item) => item.id.toString()}                                                  
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('OlshopOrder', item) } >
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
