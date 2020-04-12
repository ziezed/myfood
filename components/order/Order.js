import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import axios from "axios";

// function ambilData(){
//         const [food, setFood] = useState(null)

//         axios.get('http://localhost:1337/foods/1')
//             .then(response => {setFood (response.data)})

//         let fruit = [
//             {nama: "roni", umur: 28},
//             {nama: "joni", umur: 33},
//             {nama: "eni", umur : 30}            
//             ]
//     return(
//         // a = 55 + 3
//         // fruit
//         food
//     );
// }

const Order = ({ navigation }) => {

    const [food, setFood] = useState(null)

    axios.get('http://localhost:1337/foods')
            .then(response => {setFood (response.data)})
    return (
        <View>
            <Text>halaman order</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.push('OrderDetail')}
            />

            <Text>Adjust the color in a way that looks standard on each platform. 
            On iOS, the color prop controls the color of the text. On Android, 
            the color adjusts the background color of the button. </Text>

            <Button 
                title="Console"
                onPress={() => console.log(food)}
            />
        </View>
    )
}

export default Order

const styles = StyleSheet.create({})
