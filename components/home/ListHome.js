import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native'
import axios from 'axios';

const ListHome = () => {
    const [barang, setBarang] = useState([]);

    useEffect(() => {

        setBarang([
            {nama: 'Aqua dari gunung', harga: '1500', gambar: require('../images/barang/aqua.jpg'), id: '1'},
            {nama: 'Beras', harga: '1300', gambar: require('../images/barang/beras.png'), id: '2'},
            {nama: 'Garam', harga: '1200', gambar: require('../images/barang/garam.jpg'), id: '3'},
            {nama: 'Gula', harga: '1500', gambar: require('../images/barang/gula.jpg'), id: '4'},
            {nama: 'Indomie telor pedas', harga: '1000', gambar: require('../images/barang/indomie.jpg'), id: '5'},
            {nama: 'minyak goreng asli', harga: '16000', gambar: require('../images/barang/minyak.jpg'), id: '6'},
        ])
        // axios.get(`http://192.168.108.244:1337/foods`)
        //     .then(res => {
        //         const makanan = res.data;
        //         // console.log(foods);
        //         setFood( makanan );
        //     })
        //     .catch(error => console.log(error));
    },[])

    

    return (
        <View style={styles.container}>
            {barang.map((item) => {
                return(                    
                    <View key={item.id}>
                        <View style={styles.card}>
                            <View style={styles.item}>
                                <Image style={styles.gambarItem} source={item.gambar} />
                                <Text style={styles.textHarga}>Rp. {item.harga}</Text>
                                <Text style={styles.textNama}>{item.nama}</Text>
                            </View>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

export default ListHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginHorizontal: 20,
    },
    card: {
        height: 200,
        width: 140,
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
        // marginLeft: 13,
        
    },
    item: {
        padding: 10,
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
        width: 90,
        height: 100,
    },
})
