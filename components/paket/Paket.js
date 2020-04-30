import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import axios from "axios";

const Paket = ({ navigation }) => {

    const [data, setData] = useState([]);

    // const klik =() => {
    //     setData([
    //             {id: '6', nama: 'wahyu1'},
    //             {id: '7', nama: 'wahyu2'},
    //             {id: '8', nama: 'wahyu3'},
    //     ])  
    // }

    useEffect(() => {
        axios.get(`http://192.168.108.244:1337/foods`)
            .then(res => {
                const foods = res.data;
                // console.log(foods);
                setData( foods );
            })
            .catch(error => console.log(error));
    },[])

    return (
        <View>
            <Text>halaman Paket</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('PaketDetail')}
            />

            <FlatList    
                keyExtractor={(item) => item.id.toString()}                            
                data={data}
                renderItem={({ item }) => (<Text>{item.nama}</Text>)}                                
            />
        </View>
    )
}

export default Paket
