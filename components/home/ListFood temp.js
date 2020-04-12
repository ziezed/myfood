import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from "axios";

const ListFood = () => {
    const [food, setFood] = useState(null);

    axios.get(`http://localhost:1337/foods`)
      .then(response => setFood(response.data));

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
