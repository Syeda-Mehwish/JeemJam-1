import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';




export default function Home({ navigation,route }) {
     const [SelectedCountry , setSelectedCountry] =React.useState(null)
    React.useEffect(()=>{
        let {SelectedCountry} = route.params 
        setSelectedCountry(SelectedCountry)
    },[])

    const [text, onChangetext] = React.useState(null);
    const CountryImg=SelectedCountry;

    const options = [
        { id: 1, name: 'Mobiles', img: require('../../assets/Images/mob.jpg',), nextlocation: 'Mobile' },
        { id: 2, name: 'Cars', img: require('../../assets/Images/tyty.jpg'), nextlocation: 'Cars' },
        { id: 3, name: 'Jobs', img: require('../../assets/Images/job.png'), nextlocation: 'Jobs' },
        { id: 4, name: 'Services', img: require('../../assets/Images/service.png'), nextlocation: 'Services' },
        { id: 5, name: 'Miscellaneous', img: require('../../assets/Images/notebook.jpg'), nextlocation: 'Miscellaneous' },]

        


    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}>Jeem Jam</Text>
                <View style={styles.miniview}>
                    <FontAwesome name='user-circle-o' size={25} color={'white'} style={styles.topicon} solid onPress={() => navigation.navigate('Profile')} />
                    <TouchableOpacity onPress={() => navigation.navigate('Countries')}>
                        <Image   source={CountryImg?.img} style={styles.topimg} />
                    </TouchableOpacity></View>
            </View>
            <ScrollView style={styles.list}>

                <View style={styles.SectionStyle}>
                    <Image
                        source={require('../../assets/Images/oop.png')}
                        style={styles.ImageStyle}
                    />
                    <TextInput
                        style={{ flex: 1, fontSize: 18 }}
                        placeholder="Search"
                        onChangeText={onChangetext}
                        value={text}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.middleheader}>
                    <View style={styles.pay}>
                        <TouchableOpacity 
                        onPress={() =>  
                           { 
                            firebase.auth().onAuthStateChanged(function(user) {
                                if (user) {
                                    navigation.navigate('Ad')
                                  // User is signed in.
                                } else {
                                    navigation.navigate('Ad')
                                  // No user is signed in.
                                }
                              });}
                        }>
                            <Image source={require('../../assets/Images/ad.png')} style={styles.img} />
                        </TouchableOpacity>
                        <Text style={styles.middletxt}>
                            Place your ad for free</Text>
                    </View >
                    <View style={styles.pay}>
                        <TouchableOpacity onPress={() => navigation.navigate('AccountBalance')}>
                            <Image source={require('../../assets/Images/wwqs.png')} style={styles.img} />
                        </TouchableOpacity>
                        <Text style={styles.middletxt}>
                            Account balance</Text>
                    </View>
                </View>

                <View style={styles.subview}>
                    {options.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => navigation.navigate(item.nextlocation)}>
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
        margin: 10,
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
        height: 55,
        width: 58,
        marginLeft: '2%',
        borderRadius: 70,
        resizeMode: 'stretch',
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
        marginLeft: '5%'
    },

    subview: {
        marginTop: '10%',
    },
    pay: {
        backgroundColor: '#D4F1F4',
        width: '40%',
        height: 110,
        borderRadius: 20,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        padding: 20

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
    },
    logo: {
        width: 130,
        height: 30,
        padding: 5
    },
    logoview: {
        backgroundColor: 'white',
        height: 40,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center'

    }



});



