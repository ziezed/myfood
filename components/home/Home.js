import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Card, Button, Icon} from 'react-native-elements'
import Header from '../Header'
// import Order from '../order/Order'
import OrderStack from '../routes/OrderStack';

const Home = ({ navigation }) => {

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
        <SafeAreaView>
            <ScrollView>
                <Header title="MY Send Mart" />

                <Card
                    // title='HELLO WORLD'
                    image={require('../images/makanan.jpg')}>
                    <Text style={{marginBottom: 10, fontSize: 16}}>
                        Kemudahan Yang Kami Berikan Tidak Setara Dengan Kepuasan Yang Kami Dapatkan.
                    </Text>
                    <Button
                        // icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Lebih Jauh dengan MYJEK' onPress={() => navigation.navigate('About')} />
                </Card>

                <View style={styles.iconContainer}>
                    <View>
                        <TouchableOpacity>
                            <Icon
                                reverse
                                raised
                                name='restaurant'
                                color='#be0a3b'
                                size= {30}
                                onPress={() => navigation.navigate('Food')}
                            />
                            <Text style={styles.iconText}>Food</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Icon
                                reverse
                                raised
                                name='store'
                                color='#be0a3b'
                                size= {30}
                                onPress={() => navigation.navigate('Store')}
                            />
                            <Text style={styles.iconText}>Store</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Icon
                                reverse
                                raised
                                name='camera'
                                color='#be0a3b'
                                size= {30}
                                onPress={() => navigation.navigate('Order')}
                            />
                            <Text style={styles.iconText}>Order</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Icon
                                reverse
                                raised
                                name='pets'
                                color='#be0a3b'
                                size= {30}
                                onPress={() => navigation.navigate('About')}
                            />
                            <Text style={styles.iconText}>About</Text>
                        </TouchableOpacity>
                    </View>            
                </View>                

                <View style={styles.pilihanView}>
                    <Text style={{fontSize: 22}}>Rumah Makan Pilihan</Text>
                    <Text style={{fontSize: 16}}>Diisni anda akan mendapatkan bonus setiap kali order</Text>
                </View>

                <View style={styles.foodContainer}>
                    {food.map((item) => {
                        return(
                            <View key={item.key}>
                                <Text style={styles.item}>{item.nama}</Text>
                            </View>
                        )
                    })}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row", 
        justifyContent: 'space-around',
        paddingTop: 30
    },
     iconText: {
        paddingLeft: 23
    },    
    pilihanView: {
        paddingTop: 30,
        paddingLeft: 30,
    },
    foodContainer: {
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
