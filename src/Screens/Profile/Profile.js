import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import ImagePicker from 'react-native-image-crop-picker';



export default function Profile({ navigation }) {

    const [profileimage, setprofileimage] = React.useState('https://icon-library.com/images/user-image-icon/user-image-icon-18.jpg');
    const selectProfileImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setprofileimage(image.path);
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  Profile</Text>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={selectProfileImage}>
                <Image source={{ uri: profileimage }} style={styles.img} />
                </TouchableOpacity>
                <View style={styles.view1}>
                    <Text style={styles.name}>M. Souhaib</Text>
                </View>
                <View style={styles.subview}>
                    <Text style={styles.subheading}>
                        <MaterialIcons name='account-circle' size={20} color={'blue'} style={styles.topicon} solid />  My Account</Text>
                   <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
                   <Text style={styles.txt} >Connect with JeemJam </Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.subview}>
                    <Text style={styles.subheading}>
                        <Entypo name='colours' size={20} color={'blue'} style={styles.topicon} solid />  General</Text>
                    <Text style={styles.txt}>Language</Text>
                    <Text style={styles.txt}>Theme Colors</Text>
                    <Text style={styles.txt}>Notifications</Text>
                </View>
                <View style={styles.subview}>
                    <Text style={styles.subheading}>
                        <MaterialIcons name='app-settings-alt' size={20} color={'blue'} style={styles.topicon} solid />  JeemJam App</Text>
                    <Text style={styles.txt}>Share with friends</Text>
                    <Text style={styles.txt}>Contact Us</Text>
                    <Text style={styles.txt} onPress={()=> navigation.navigate('PrivacyPolicy')}>Privacy Policy</Text>
                    <Text style={styles.txt}>Version 1.0.0</Text>
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
    view1:
    {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    subheading: {
        color: 'blue',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: '5%'
    },
    txt: {
        fontSize: 18,
        margin: '5%',
        color: 'black'
    },
    img: {
        height: 158,
        width: '40%',
        marginHorizontal: '30%',
        marginVertical: '5%',
        borderRadius: 90
    },
    headview: {
        backgroundColor: '#0000a5',
        height: '8%',
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '5%'
    },
    subview: {
        marginHorizontal: '8%',
        marginVertical: '5%',
        padding: 10,
        borderTopColor: 'grey',
        borderTopWidth: 1
    },



});



