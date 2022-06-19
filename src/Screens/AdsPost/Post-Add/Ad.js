import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Picker } from '@react-native-picker/picker';
import ImagePicker from 'react-native-image-crop-picker';


export default function Ad({ navigation }) {

    const [title, settitle] = React.useState('');
    const [author, setauthor] = React.useState('');
    const [country, setcountry] = React.useState('');
    const [category, setcategory] = React.useState('');
    const [phone, setphone] = React.useState('');
    const [whatsapp, setwhatsapp] = React.useState('');
    const [content, setcontent] = React.useState('');

    const [img1, setimg1] = React.useState('https://outbackcleaningproducts.com.au/wp-content/uploads/2021/11/1200px-Picture_icon_BLACK.svg_.png');
    const [img2, setimg2] = React.useState('https://outbackcleaningproducts.com.au/wp-content/uploads/2021/11/1200px-Picture_icon_BLACK.svg_.png');
    const [img3, setimg3] = React.useState('https://outbackcleaningproducts.com.au/wp-content/uploads/2021/11/1200px-Picture_icon_BLACK.svg_.png');
    const [img4, setimg4] = React.useState('https://outbackcleaningproducts.com.au/wp-content/uploads/2021/11/1200px-Picture_icon_BLACK.svg_.png');
    const [img5, setimg5] = React.useState('https://outbackcleaningproducts.com.au/wp-content/uploads/2021/11/1200px-Picture_icon_BLACK.svg_.png');



    const selectFile = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setimg1(image.path);
        });
    }
    const selectFile2 = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setimg2(image.path);
        });
    }
    const selectFile3 = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setimg3(image.path);
        });
    }
    const selectFile4 = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setimg4(image.path);
        });
    }
    const selectFile5 = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setimg5(image.path);
        });
    }


    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  Post your ad</Text>
                <View style={styles.miniview}>
                    <FontAwesome name='user-circle-o' size={25} color={'white'} style={styles.topicon} solid onPress={() => navigation.navigate('Profile')} />
                </View>
            </View>

            <ScrollView style={styles.list}>

                <View style={styles.View1}>
                    <TextInput
                        style={styles.input}
                        onChangeText={settitle}
                        value={title}
                        placeholder="ENTER TITLE"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setauthor}
                        value={author}
                        placeholder="ENTER AUTHOR"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setcountry}
                        value={country}
                        placeholder="ENTER COUNTRY"
                    />
                    <Picker
                        selectedValue={category}
                        dropdownIconColor='black'
                        style={styles.dropdown}
                        onValueChange={(item) =>
                            setcategory(item)
                        }>
                        <Picker.Item label="Select Category" value=" " style={styles.dropdowntxt} />
                        <Picker.Item label="Mobiles" value="Mobiles" style={styles.dropdowntxt} />
                        <Picker.Item label="Cars" value="Cars" />
                        <Picker.Item label="Miscelleneous" value="Miscelleneous" />
                        <Picker.Item label="Jobs" value="Jobs" />
                        <Picker.Item label="Services" value="Services" />
                    </Picker>

                    <View style={styles.imgview}>
                        <Text style={styles.imgtxt}>Choose Main Image for ad</Text>
                        <TouchableOpacity onPress={selectFile}>
                            <Image source={{ uri: img1 }} style={styles.img} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imgview}>
                        <Text style={styles.imgtxt}>Choose Image 2</Text>
                        <TouchableOpacity onPress={selectFile2}>
                            <Image source={{ uri: img2 }} style={styles.img} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imgview}>
                        <Text style={styles.imgtxt}>Choose Image 3</Text>
                        <TouchableOpacity onPress={selectFile3}>
                            <Image source={{ uri: img3 }} style={styles.img} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imgview}>
                        <Text style={styles.imgtxt}>Choose Image 4</Text>
                        <TouchableOpacity onPress={selectFile4}>
                            <Image source={{ uri: img4 }} style={styles.img} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imgview}>
                        <Text style={styles.imgtxt}>Choose Image 5</Text>
                        <TouchableOpacity onPress={selectFile5}>
                            <Image source={{ uri: img5 }} style={styles.img} />
                        </TouchableOpacity>
                    </View>


                    <TextInput
                        style={styles.input}
                        onChangeText={setphone}
                        value={phone}
                        placeholder="ENTER PHONE #"
                        keyboardType='numeric'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setwhatsapp}
                        value={whatsapp}
                        placeholder="ENTER WHATSAPP"
                        keyboardType='numeric'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setcontent}
                        value={content}
                        placeholder="ENTER CONTENT"
                    />
                    <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Alert')}>
                        <Text style={styles.logintxt}>SUBMIT</Text>
                    </TouchableOpacity>
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
    imgview: {
        marginHorizontal: '8%',
        margin: '3%'
    },
    imgtxt: {
        fontSize: 18,
        color: 'black',
    },
    img: {
        width: 110,
        height: 80,
        margin: '5%',
    },
    dropdown: {
        margin: '5%',
        fontSize: 18
    },
    listelem: {
        backgroundColor: '#F0F0F0',
        width: '60%',
        height: 130,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        marginVertical: '10%',
        marginHorizontal: '20%',
        elevation: 15,
    },
    amount: {
        fontSize: 18,
        marginLeft: '4%',
        color: 'green'
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
    View1: {
        padding: 20,
        marginTop: '5%',
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
});

