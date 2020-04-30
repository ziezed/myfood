import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { Card, Button} from 'react-native-elements'
import Header from '../Header'
import IconHome from './IconHome'
import ListHome from './ListHome'

const Home = ({ navigation }) => {
        
    return (
        <SafeAreaView>
            <ScrollView>
                <Header title="OneJek & mall" />

                <Card
                    // title='HELLO WORLD'
                    image={require('../images/makanan.jpg')}>
                    <Text style={{marginBottom: 10, fontSize: 16}}>
                        Kemudahan Yang Kami Berikan Tidak Setara Dengan Kepuasan Yang Kami Dapatkan.
                    </Text>
                    <Button
                        // icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Lebih Jauh dengan OneJek' onPress={() => navigation.navigate('About')} />
                </Card>

                <IconHome navigation={navigation} />                

                <View style={styles.pilihanView}>
                    <Text style={{fontSize: 20}}>Kebutuhan Rumah Tangga Anda</Text>
                    <Text style={{fontSize: 14}}>Untuk Daftar barang Lebih Lengkapnya Silahkan Klik Mart</Text>
                </View>

                <ListHome />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    
    pilihanView: {
        paddingTop: 30,
        marginHorizontal: 20
        // paddingLeft: 30,
        // paddingRight: 30,

    }
})
