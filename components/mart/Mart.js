import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native'
import axios from "axios";

const Mart = ({ navigation }) => {

    const [barang, setBarang] = useState([]);

    useEffect(() => {

        setBarang([
            {nama: 'Aqua dari gunung', harga: '1500', gambar: require('../images/barang/aqua.jpg'), id: '1'},
            {nama: 'Beras', harga: '1300', gambar: require('../images/barang/beras.png'), id: '2'},
            {nama: 'Garam', harga: '1200', gambar: require('../images/barang/garam.jpg'), id: '3'},
            {nama: 'Gula', harga: '1500', gambar: require('../images/barang/gula.jpg'), id: '4'},
            {nama: 'Indomie telor pedas', harga: '1000', gambar: require('../images/barang/indomie.jpg'), id: '5'},
            {nama: 'minyak goreng asli', harga: '16000', gambar: require('../images/barang/minyak.jpg'), id: '6'},
            {nama: 'Teh', harga: '10800', gambar: require('../images/barang/teh.jpg'), id: '7'},
            {nama: 'Telor', harga: '13000', gambar: require('../images/barang/telor.jpg'), id: '8'},
        ])  
    
    //     axios.get(`http://192.168.108.244:1337/foods`)
    //         .then(res => {
    //             const foods = res.data;
    //             // console.log(foods);
    //             setData( foods );
    //         })
    //         .catch(error => console.log(error));

    },[])

    // const pressHandler =() => {
    //     console.log(id);
    //     navigation.navigate('MartDetail', Item)
    // }

    // function Item({ nama, harga, gambar, id}) {        
    //     return (
    //         <TouchableOpacity onPress={() => navigation.navigate('MartDetail') } >
    //             <View style={styles.card}>
    //                 <View style={styles.item}>
    //                     <Image style={styles.gambarItem} source={gambar} />
    //                     <Text style={styles.textHarga}>Rp. {harga}</Text>
    //                     <Text style={styles.textNama}>{nama}</Text>
    //                 </View>
    //             </View>
    //         </TouchableOpacity>
    //     );
    // }

    return (
        <View>
            <FlatList 
                contentContainerStyle={{ paddingBottom: 20}}
                numColumns={3}
                data={barang}
                keyExtractor={(item) => item.id.toString()}                            
                // renderItem={({ item }) => <Item nama={item.nama} harga={item.harga} gambar={item.gambar} id={item.id} />}                       
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('MartDetail', item) } >                    
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
        </View>
    )
}

export default Mart

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // marginHorizontal: 10,
        // marginVertical: 5,
        // marginLeft: 13,
        // flexDirection: 'column',
        // justifyContent: 'space-between',
    },
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
        
        // marginVertical: 9,
        marginTop: 20,
        marginLeft: 13,
        // justifyContent: 'space-betwen',
        
    },
    item: {
        // marginTop: 25,
        // marginLeft: 13,        
        padding: 10,
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
        marginHorizontal: 20,
    },
    gambarItem: {
        width: 100,
        height: 100,
    },
})
