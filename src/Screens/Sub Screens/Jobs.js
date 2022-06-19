import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { JobData } from '../Data/Jobs-Data';


export default function Jobs({ navigation }) {

    const [text, onChangetext] = React.useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  Jobs</Text>
                <View style={styles.miniview}>
                    <FontAwesome name='user-circle-o' size={25} color={'white'} style={styles.topicon} solid />
                </View>
            </View>
            <ScrollView style={styles.list}>
                <View style={styles.SectionStyle}>
                    <Image
                        source={require('../../../assets/Images/oop.png')}
                        style={styles.ImageStyle} />
                    <TextInput
                        style={{ flex: 1, fontSize: 18 }}
                        placeholder="Search"
                        onChangeText={onChangetext}
                        value={text}
                        underlineColorAndroid="transparent" />
                </View>

                <View style={styles.subview}>
                    {JobData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index}>
                                <View style={styles.listelem}>
                                    <Image style={styles.img} source={item.img} />
                                    <Text style={styles.listtxt}>{item.name}</Text>
                                </View>
                                <View style={styles.icon}>
                                    <Text>100  </Text>
                                    <MaterialIcons name='arrow-forward-ios' size={25} color={'black'} solid />
                                </View>           
                             </TouchableOpacity>
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
        backgroundColor: '#FAF9F6',
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
        backgroundColor: '#F0F0F0',
        width: '100%',
        height: 70,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1
    },
    img: {
        height: 40,
        width: 60,
        marginLeft: '2%',
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    topimg: {
        height: 30,
        width: 50,
        marginLeft: '5%',
    },
    listtxt: {
        fontSize: 18,
        marginLeft: '1%',
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
        // padding: 20

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



