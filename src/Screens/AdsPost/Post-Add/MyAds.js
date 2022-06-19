import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



export default function MyAds({ navigation }) {


    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  My Ads</Text>
                <View style={styles.miniview}>
                    <FontAwesome name='user-circle-o' size={25} color={'white'} style={styles.topicon} solid onPress={() => navigation.navigate('Profile')} />
                </View>
            </View>

            <ScrollView style={styles.list}>

                
                    <View style={styles.listelem}>
                        <ScrollView>
                            <Image source={require('../../../../assets/Images/fb.png')} style={styles.img} />
                            <Text style={styles.listtxt}>Title : </Text><Text style={styles.amount}></Text>
                            <Text style={styles.listtxt}>Author : </Text><Text style={styles.amount}></Text>
                            <Text style={styles.listtxt}>Country : </Text><Text style={styles.amount}></Text>
                            <Text style={styles.listtxt}>Phone# : </Text><Text style={styles.amount}></Text>
                            <Text style={styles.listtxt}>Content : </Text><Text style={styles.amount}></Text>
                        </ScrollView>
                    </View>
                

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAF9F6',
        flex: 1,

    },
    listelem: {
        backgroundColor: '#F0F0F0',
        width: '80%',
        height: 450,
        borderRadius: 8,
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        marginVertical: '10%',
        marginHorizontal: '10%',
        elevation: 15,
        padding: 20
    },
    amount: {
        fontSize: 18,
        marginLeft: '4%',
        color: 'green'
    },
    img: {
        width: 90,
        height: 90,
        marginHorizontal: '35%'
    },
    empty: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: '40%',
        color: 'black',

    },
    listtxt: {
        fontSize: 20,
        marginLeft: '4%',
        marginTop: '4%',
        color: 'black'
    },
    headview: {
        backgroundColor: '#0000a5',
        height: '8%',
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    miniview: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    icon: {
        position: 'relative',
        left: '85%',
        bottom: '50%'
    },
    topicon: {
        margin: '1%'
    },
    heading: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '5%'
    },
});