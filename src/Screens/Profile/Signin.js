import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




export default function Signin({ navigation }) {
    const [email, setemail] = React.useState()
    const [password, setpassword] = React.useState()

    const Signin=()=>{
        alert('Signed in successfully!')
        navigation.navigate('PostAd')
    }

    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  Sign In</Text>
            </View>
            <View style={styles.View1}>
                <TextInput
                    style={styles.input}
                    onChangeText={setemail}
                    value={email}
                    placeholder="ENTER YOUR PHONE NO."
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setpassword}
                    value={password}
                    placeholder="ENTER PASSWORD"
                />
                <TouchableOpacity style={styles.login} onPress={Signin}>
                    <Text style={styles.logintxt}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.View2}>
                <Text style={styles.signup} onPress={()=> navigation.navigate('Signup')}>Dont have an account ? Signup here</Text>
                <Text style={styles.or}>O R</Text>
                <TouchableOpacity style={styles.google}>
                    <Text style={styles.btntxt}>continue with</Text>
                    <Image source={require('../../../assets/Images/google.png')} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.google}>
                    <Text style={styles.btntxt}>continue with</Text>
                    <Image source={require('../../../assets/Images/fb.png')} style={styles.img} />
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
        marginTop: '15%',
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
        marginTop: '8%',
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



