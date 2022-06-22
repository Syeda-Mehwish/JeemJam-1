import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Picker } from '@react-native-picker/picker';
import ImagePicker from 'react-native-image-crop-picker';
import { CarData } from "../../Data/Car-Data";
import { JobData } from '../../Data/Jobs-Data';
import { MiscellaneousData } from '../../Data/Miscellaneous-Data'
import { Mobiles } from '../../Data/Mobile-Data';
import { ServicesData } from '../../Data/Services-Data';


export default function Ad({ navigation }) {

    const [title, settitle] = React.useState('');
    const [author, setauthor] = React.useState('');
    const [country, setcountry] = React.useState('');
    const [category, setcategory] = React.useState('');
    const [subcategory, setsubcategory] = React.useState('');
    const [Mobilesubcategory, setMobilesubcategory] = React.useState('');
    const [Carsubcategory, setCarsubcategory] = React.useState('');
    const [Jobsubcategory, setJobsubcategory] = React.useState('');
    const [Servicesubcategory, setServicesubcategory] = React.useState('');
    const [Miscellaneousubcategory, setMiscellaneousubcategory] = React.useState('');
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
                        <Picker.Item label="Choose Category" value=" " style={styles.dropdowntxt} />
                        <Picker.Item label="Mobiles" value="Mobiles" style={styles.dropdowntxt} />
                        <Picker.Item label="Cars" value="Cars" />
                        <Picker.Item label="Miscelleneous" value="Miscelleneous" />
                        <Picker.Item label="Jobs" value="Jobs" />
                        <Picker.Item label="Services" value="Services" />
                    </Picker>
                  
                    {category ==" "?  
                    <Picker
                        selectedValue={Mobilesubcategory}
                        dropdownIconColor='black'
                        style={styles.dropdown}
                        onValueChange={(itemValue,index) =>
                            setMobilesubcategory(itemValue)
                        }>
                            
                         
                        
                        <Picker.Item label="Choose A Sub Category" value=" " style={styles.dropdowntxt} />
                        
                        
                    </Picker>:
                  null}
                    
                    {category =="Mobiles"?  
                    <Picker
                        selectedValue={Mobilesubcategory}
                        dropdownIconColor='black'
                        style={styles.dropdown}
                        onValueChange={(itemValue,index) =>
                            setMobilesubcategory(itemValue)
                        }>
                            
                         
                        
                        <Picker.Item label="Choose A Sub Category" value=" " style={styles.dropdowntxt} />
                        <Picker.Item label={"Nokia"} value={"Nokia"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Huawei"} value={"Huawei"} style={styles.dropdowntxt} />
                        <Picker.Item label={"iPhone"} value={"iPhone"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Samsung"} value={"Samsung"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Oppo"} value={"Oppo"} style={styles.dropdowntxt} />
                        
                        
                    </Picker>:
                   null}

                    {category =="Cars"?  
                    <Picker
                        selectedValue={Carsubcategory}
                        dropdownIconColor='black'
                        style={styles.dropdown}
                        onValueChange={(itemValue,index) =>
                            setCarsubcategory(itemValue)
                        }>
                           
                            <Picker.Item label="Choose A Sub Category" value=" " style={styles.dropdowntxt} />
                        <Picker.Item label={"BMW"} value={"BMW"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Kia"} value={"Kia"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Infiniti"} value={"Infiniti"} style={styles.dropdowntxt} />
                        <Picker.Item label={"JAC"} value={"JAC"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Jeep"} value={"Jeep"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Land Rover"} value={"Land Rover"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Lincoln"} value={"Lincoln"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Maserati"} value={"Maserati"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Mazda"} value={"Mazda"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Mercury"} value={"Mercury"} style={styles.dropdowntxt} />
                        <Picker.Item label={"MG"} value={"MG"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Mini Cooper"} value={"Mini Cooper"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Opel"} value={"Opel"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Peugeot"} value={"Peugeot"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Porsche"} value={"Porsche"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Renault"} value={"Renault"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Rover"} value={"Rover"} style={styles.dropdowntxt} />
                        <Picker.Item label={"SsangYong"} value={"SsangYong"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Suzuki"} value={"Suzuki"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Tata"} value={"Tata"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Volkswagen"} value={"Volkswagen"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Volvo"} value={"Volvo"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Misc. cars"} value={"Misc. cars"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Hyunday"} value={"Hyunday"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Lexus"} value={"Lexus"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Mercedes"} value={"Mercedes"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Mitsubishi"} value={"Mitsubishi"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Chevrolet"} value={"Chevrolet"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Ford"} value={"Ford"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Audi"} value={"Audi"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Cadillac"} value={"Cadillac"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Chery"} value={"Chery"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Chrysler"} value={"Chrysler"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Daewoo"} value={"Daewoo"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Dodge"} value={"Dodge"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Ferrari"} value={"Ferrari"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Fiat"} value={"Fiat"} style={styles.dropdowntxt} />
                        <Picker.Item label={"GMC"} value={"GMC"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Honda"} value={"Honda"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Import cars"} value={"Import cars"} style={styles.dropdowntxt} />
                        
                        
                    </Picker>:
                     null}

                    {category =="Miscelleneous"?  
                    <Picker
                        selectedValue={Miscellaneousubcategory}
                        dropdownIconColor='black'
                        style={styles.dropdown}
                        onValueChange={(itemValue,index) =>
                            setMiscellaneousubcategory(itemValue)
                        }>
                         
                         <Picker.Item label="Choose A Sub Category" value=" " style={styles.dropdowntxt} />
                        <Picker.Item label={"NoWholesale Dealskia"} value={"Wholesale Deals"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Furniture"} value={"Furniture"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Home Appliences"} value={"Home Appliences"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Clothes"} value={"Clothes"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Equipments"} value={"Equipments"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Accessories"} value={"Accessories"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Agriculture Equipment"} value={"Agriculture Equipment"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Animals and Pets"} value={"Animals and Pets"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Antiques and Collectibles"} value={"Antiques and Collectibles"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Billboards"} value={"Billboards"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Books and Magazines"} value={"Books and Magazines"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Building Materials"} value={"Building Materials"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Bus"} value={"Bus"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Cameras"} value={"Cameras"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Car Numbers"} value={"Car Numbers"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Computers"} value={"Computers"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Cosmetics"} value={"Cosmetics"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Electricity Generators"} value={"Electricity Generators"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Electronics"} value={"Electronics"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Equipments"} value={"Equipments"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Events"} value={"Events"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Fishing"} value={"Fishing"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Food and Nutrition"} value={"Food and Nutrition"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Games"} value={"Games"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Health care"} value={"Health care"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Heavy Duty Vehicle"} value={"Heavy Duty Vehicle"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Industrial Equipments"} value={"Industrial Equipments"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Items"} value={"Items"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Licenses"} value={"Licenses"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Medical Equipments"} value={"Medical Equipments"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Motorcyles"} value={"Motorcyles"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Motorhomes"} value={"Motorhomes"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Musical Instruments"} value={"Musical Instruments"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Nautical Equipment"} value={"Nautical Equipment"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Numbers"} value={"Numbers"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Perfumes and Fragrances"} value={"Perfumes and Fragrances"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Pick Ups"} value={"Pick Ups"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Security Systems"} value={"Security Systems"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Smart phones"} value={"Smart phones"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Software Solutions"} value={"Software Solutions"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Spare Parts"} value={"Spare Parts"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Sports Equipment"} value={"Sports Equipment"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Watches"} value={"Watches"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Unclassified"} value={"Unclassified"} style={styles.dropdowntxt} />
                        
                        
                        
                    </Picker>:
                    null}

                    {category =="Jobs"?  
                    <Picker
                        selectedValue={Jobsubcategory}
                        dropdownIconColor='black'
                        style={styles.dropdown}
                        onValueChange={(itemValue,index) =>
                            setJobsubcategory(itemValue)
                        }>
                            
                         
                            
                        
                       <Picker.Item label="Choose A Sub Category" value=" " style={styles.dropdowntxt} />
                        <Picker.Item label={"Tourist"} value={"Tourist"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Driver"} value={"Driver"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Engineer"} value={"Engineer"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Acountant"} value={"Acountant"} style={styles.dropdowntxt} />
                        <Picker.Item label={"labour"} value={"labour"} style={styles.dropdowntxt} />
                        <Picker.Item label={"AC Technicians"} value={"AC Technicians"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Administration"} value={"Administration"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Audio Visual"} value={"Audio Visual"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Beauty care"} value={"Beauty care"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Child Care"} value={"Child Care"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Cleaning Workers"} value={"Cleaning Workers"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Construction"} value={"Construction"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Craftsmen"} value={"Craftsmen"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Customer service"} value={"Customer service"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Data Entry"} value={"Data Entry"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Delivery"} value={"Delivery"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Designer"} value={"Designer"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Editors"} value={"Editors"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Education and Teaching"} value={"Education and Teaching"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Employees"} value={"Employees"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Fashion"} value={"Fashion"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Fine arts"} value={"Fine arts"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Fitness"} value={"Fitness"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Garden and Landscaping"} value={"Garden and Landscaping"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Guard & Security"} value={"Guard & Security"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Housemaids"} value={"Housemaids"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Human Resources"} value={"Human Resources"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Information Technology"} value={"Information Technology"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Law"} value={"Law"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Medicine and Nursing"} value={"Medicine and Nursing"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Partnership"} value={"Partnership"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Programming"} value={"Programming"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Public Relations"} value={"Public Relations"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Sales and Marketing"} value={"Sales and Marketing"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Secretarial"} value={"Secretarial"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Tailors"} value={"Tailors"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Technicians"} value={"Technicians"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Ticketing & Tourism"} value={"Ticketing & Tourism"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Translators"} value={"Translators"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Web Designers"} value={"Web Designers"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Misc. jobs"} value={"Misc. jobs"} style={styles.dropdowntxt} />
                        
                        
                        
                        
                    </Picker>:
                    null}

                

                    {category =="Services"?  
                    <Picker
                        selectedValue={Servicesubcategory}
                        dropdownIconColor='black'
                        style={styles.dropdown}
                        onValueChange={(itemValue,index) =>
                            setServicesubcategory(itemValue)
                        }>
                            
                         
                            
                        
                            <Picker.Item label="Choose A Sub Category" value=" " style={styles.dropdowntxt} />
                        <Picker.Item label={"Private Lessons"} value={"Private Lessons"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Taxi"} value={"Taxi"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Labor recruitment"} value={"Labor recruitment"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Contracting"} value={"Contracting"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Removal service"} value={"Removal service"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Building Home"} value={"Building Home"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Business"} value={"Business"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Formalities"} value={"Formalities"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Maintanence"} value={"Maintanence"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Cleaning"} value={"Cleaning"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Computers"} value={"Computers"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Entertainment"} value={"Entertainment"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Events Planning"} value={"Events Planning"} style={styles.dropdowntxt} />
                        <Picker.Item label={"General Services"} value={"General Services"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Guard & Security"} value={"Guard & Security"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Health & Beauty"} value={"Health & Beauty"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Homemade Cooking"} value={"Homemade Cooking"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Human Resources"} value={"Human Resources"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Internet"} value={"Internet"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Loan"} value={"Loan"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Lost and Found"} value={"Lost and Found"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Pest Control"} value={"Pest Control"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Professional Services"} value={"Professional Services"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Properties"} value={"Properties"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Real estate services"} value={"Real estate services"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Rent a Car"} value={"Rent a Car"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Shipping"} value={"Shipping"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Tax and Money"} value={"Tax and Money"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Telecoms"} value={"Telecoms"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Training & Tuition"} value={"Training & Tuition"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Translation"} value={"Translation"} style={styles.dropdowntxt} />
                        <Picker.Item label={"Travel"} value={"Travel"} style={styles.dropdowntxt} />
                        
                        
                        
                        
                        
                    </Picker>:
                    null}
                   

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
                        multiline={true}
                        underlineColorAndroid='transparent'
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

