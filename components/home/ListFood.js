import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import axios from 'axios';

const ListFood = () => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        axios.get(`http://192.168.108.244:1337/foods`)
            .then(res => {
                const makanan = res.data;
                // console.log(foods);
                setFood( makanan );
            })
            .catch(error => console.log(error));
    },[])

    

    return (
        <View style={styles.container}>
            {/* tidak bisa gunakan flatlist karena tidak bisa flatlist didalam scrollview */}
            {/* <FlatList    
                nestedScrollEnabled={true}
                keyExtractor={(item) => item.id.toString()}                            
                data={food}
                renderItem={({ item }) => (<Text style={styles.item}>{item.nama}</Text>)}                           
            /> */}

            {food.map((item) => {
                return(
                    <View key={item.id}>
                        <Text style={styles.item}>{item.nama}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default ListFood

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    item: {
        marginTop: 10,
        padding: 30,
        backgroundColor: 'pink',
        borderRadius: 10,
        fontSize: 24
    }
})
