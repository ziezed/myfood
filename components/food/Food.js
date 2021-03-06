import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native'
import axios from "axios";

const Food = ({ navigation }) => {

    const [resto, setResto] = useState([]);
 
    useEffect(() => {
        setResto([
            {nama: 'Sate Madura', alamat: 'jl. Riau Ujung', gambar: require('../images/resto/sate.jpg'), id: '1'},
            {nama: 'Rumah asam Pedas', alamat: 'jl. Sumatra', gambar: require('../images/resto/asampedas.jpg'), id: '2'},
            {nama: 'R M Padang', alamat: 'jl. Kenari gg. lucu', gambar: require('../images/resto/rmpadang.jpg'), id: '3'},
            {nama: 'Cafe Gaulll', alamat: 'jl. Semangka', gambar: require('../images/resto/cafegaul.jpg'), id: '4'},
            {nama: 'Roti Bakar Enak', alamat: 'jl. Datuk Laksemana', gambar: require('../images/resto/rotibakar.jpg'), id: '5'},
            {nama: 'Cafe Jus Dumai', alamat: 'jl. Sudirman', gambar: require('../images/resto/cafejus.jpg'), id: '6'},
            {nama: 'Warkop capuchino', alamat: 'jl. Sutan Syarif Qasim', gambar: require('../images/resto/warkop.jpg'), id: '7'},
            {nama: 'Rumah Makan Lezat', alamat: 'jl. Purnama', gambar: require('../images/resto/rmlezat.jpg'), id: '8'},
        ])  
    },[])

    return (
        <View>
            <Text style={styles.textDaftar}>Daftar Cafe dan Restoran</Text>
            <FlatList
                contentContainerStyle={{ paddingBottom: 20}}    
                keyExtractor={(item) => item.id.toString()}                            
                data={resto}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FoodDetail', item) } >
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

