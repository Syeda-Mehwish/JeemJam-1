import React, { useContext,useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';




export default function Signup({ navigation }) {
    const [email, setemail] = React.useState()
    const [password, setpassword] = React.useState()
    const [phoneno, setphoneno] = React.useState()
    const [fullname, setfullname] = React.useState()

//     function createAccount(email,Password){
//         auth().createUserWithEmailAndPassword(email, Password)
//   .then(() => {
      
     
//     navigation.navigate('PostAd')
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
// }
        
    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  Sign Up</Text>
            </View>
            <View style={styles.View1}>
            <TextInput
                    style={styles.input}
                    onChangeText={setfullname}
                    value={fullname}
                   
                    placeholder="ENTER YOUR FULL NAME."
                />
            <TextInput
                    style={styles.input}
                    onChangeText={setphoneno}
                    value={phoneno}
                    keyboardType='numeric'
                    placeholder="ENTER YOUR PHONE NUMBER."
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setemail}
                    value={email}
                    placeholder="ENTER YOUR EMAIL"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setpassword}
                    value={password}
                    placeholder="ENTER PASSWORD"
                />
                <TouchableOpacity style={styles.login}
                 onPress={() =>  navigation.navigate('Signin')}>
                    <Text style={styles.logintxt}>Sign Up</Text>
                </TouchableOpacity>
            </View>
             </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAF9F6',
        flex: 1
    },
    View1: {
        padding: 20,
        marginTop: '20%',
        marginBottom: '10%'
    },
    input: {
        width: '90%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: '5%'
    },
    login: {
        backgroundColor: 'blue',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '50%',
        marginTop: '15%',
        borderRadius: 10
    },
    logintxt: {
        padding: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    signup: {
        fontSize: 15,
        color: 'black'
    },
    btntxt: {
        color: 'black',
        fontSize: 17
    },
    or: {
        fontSize: 18,
        color: 'black',
        margin: '2%'
    },
    View2: {
        alignItems: 'center',

    },
    google: {
        backgroundColor: '#eee',
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2%',
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row'
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
        height: 39,
        width: 40,
        marginLeft: '5%',
        borderRadius: 70
    },
    topimg: {
        height: 30,
        width: 50,
        marginLeft: '5%',
    },
    listtxt: {
        fontSize: 18,
        marginLeft: '5%',
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
        left: '87%',
        bottom: '50%'
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



