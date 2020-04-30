import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native'
import axios from "axios";

const Food = ({ navigation }) => {

    const [olshop, setOlshop] = useState([]);
 
    useEffect(() => {
        setOlshop([
            {nama: 'Kosmetik Ceria', alamat: 'jl. Riau Ujung', gambar: require('../images/olshop/kosmetik1.jpg'), id: '1'},
            {nama: 'Toko Obat Sehat', alamat: 'jl. Sumatra', gambar: require('../images/olshop/kosmetik2.jpg'), id: '2'},
            {nama: 'Kios Oleh2', alamat: 'jl. Kenari gg. lucu', gambar: require('../images/olshop/oleh21.jpg'), id: '3'},
            {nama: 'Rumah Pengrajin', alamat: 'jl. Semangka', gambar: require('../images/olshop/oleh22.jpg'), id: '4'},
            {nama: 'Toko Rotan', alamat: 'jl. Datuk Laksemana', gambar: require('../images/olshop/rotan1.jpg'), id: '5'},
            {nama: 'Rotan Indah', alamat: 'jl. Sudirman', gambar: require('../images/olshop/rotan2.jpg'), id: '6'},
        ])  
    },[])

    return (
        <View>
            <Text style={styles.textDaftar}>Daftar Cafe dan Restoran</Text>
            <FlatList
                contentContainerStyle={{ paddingBottom: 20}}    
                keyExtractor={(item) => item.id.toString()}                            
                data={olshop}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('OlshopDetail', item) } >
                        <View style={styles.card}>
                            <View style={styles.item}>
                                <Image style={styles.gambarItem} source={item.gambar} />                            
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.textNama}>{item.nama}</Text>
                                <Text style={styles.textAlamat}>{item.alamat}</Text>
                                <Text style={styles.textAlamat}>telp: 081234567</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}                             
            />
        </View>
    )
}

export default Food

const styles = StyleSheet.create({
    card: {
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',        
    },
    item: {      
        paddingTop: 10,
    },
    textDaftar: {
        fontSize: 24,
        marginHorizontal: 20,
        marginTop: 10,
    },
    textNama: {
        fontSize: 18, 
        marginHorizontal: 15,
        paddingTop: 5,       
    },
    textAlamat: {
        fontSize: 14,  
        marginHorizontal: 15,      
    },
    gambarItem: {
        width: 125,
        height: 100,
        borderRadius: 6,
    },
})

