import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListFood = () => {
    const [food, setFood] = useState([
        {nama: 'RM Padang', key: '1'},
        {nama: 'Toko Roti', key: '2'},
        {nama: 'Kebab Enak', key: '3'},
        {nama: 'Pizza Hut', key: '4'},
        {nama: 'Buah Segar', key: '5'},
        {nama: 'Sate Madura', key: '6'},
        {nama: 'Asam Pedas', key: '7'},
    ]);

    return (
        <View style={styles.container}>
            {food.map((item) => {
                return(
                    <View key={item.key}>
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
