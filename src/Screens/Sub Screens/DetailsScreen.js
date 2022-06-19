import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { CarData } from '../Data/Car-Data';



export default function DetailsScreen({ navigation }) {

    const options = [
        { id: 1, name: 'Samsung S10', img: require('../../../assets/Images/mob.jpg',), nextlocation: 'Mobile' },
        { id: 2, name: 'Cars', img: require('../../../assets/Images/tyty.jpg'), nextlocation: 'Cars' },
        { id: 3, name: 'Jobs', img: require('../../../assets/Images/job.png'), nextlocation: 'Jobs' },
        { id: 4, name: 'Services', img: require('../../../assets/Images/service.png'), nextlocation: 'Services' },
        { id: 5, name: 'Miscellaneous', img: require('../../../assets/Images/notebook.jpg'), nextlocation: 'Miscellaneous' },]

        

    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  Details</Text>
                <View style={styles.miniview}>
                    <FontAwesome name='user-circle-o' size={25} color={'white'} style={styles.topicon} solid />
                </View>
            </View>
            <ScrollView style={styles.list}>


                <View style={styles.subview}>
                    {options.map((item, index) => {
                        return (
                            <View key={index} style={{padding: 15}}>
                                <View style={styles.listelem}>
                                    <Image style={styles.img} source={item.img} />
                                    <View style={styles.picview}>
                                    <Image style={styles.imgx} source={item.img} />
                                    <Image style={styles.imgx} source={item.img} />
                                    <Image style={styles.imgx} source={item.img} />
                                    <Image style={styles.imgx} source={item.img} />
                                    </View>
                                  
                                    <Text style={styles.listtxt}>{item.name}</Text>
                                   

                                    

                                </View>
                          </View>
                        );
                    })}
                </View>
                <View></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        height: 60,
        width: '100%',
    },
    ImageStyle: {
        padding: 10,
        margin: 20,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    listelem: {
        backgroundColor: 'white',
        width: '95%',
        height: 300,
        borderRadius: 8,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        padding: 10,
        elevation: 10
    },
    img: {
        height: 130,
        width: 150,
        marginLeft: '25%',
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    imgx: {
        height: 50,
        width: 70,
        marginLeft: '2%',
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    picview:{
        flexDirection: 'row',
        padding: 10
    },
    topimg: {
        height: 30,
        width: 50,
        marginLeft: '5%',
    },
    listtxt: {
        fontSize: 18,
        margin: '5%',
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
        left: 310,
        bottom: '12%',
        flexDirection: 'row'
    },
    topicon: {
        margin: '1%'
    },
    heading: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '3%'
    },

    subview: {
        marginTop: '10%',
    },
    pay: {
        backgroundColor: '#D4F1F4',
        width: '40%',
        height: 100,
        borderRadius: 20,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,

    },
    middleheader: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    middletxt: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
    pop: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: '13%'
    }


});



