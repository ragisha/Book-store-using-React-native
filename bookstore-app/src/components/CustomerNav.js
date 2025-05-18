import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import {View, Text, Image,Button,FlatList,StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default function CustomerNav(props){
    const [selectedId, setSelectedId] = useState(null);
    const navigation = useNavigation();
    const listArray = [
        {icon:'home', title: 'Home',navigate:'Home'},
        {icon:'book', title: 'Book Details',navigate:'BookDetail'},
        {icon:'shopping-cart', title: 'Cart',navigate:'Cart'},
        {icon:'shopping-bag', title: 'Orders',navigate:'Orders'},
        {icon:'log-out', title: 'LOG OUT',navigate:'LOG OUT'}
    ];

    const Item =({title,icon,onPress,color,backgroundColor})=>{
        return(
            <TouchableOpacity
            onPress={onPress} 
            style={[styles.item,
                {backgroundColor: backgroundColor}]}
            >
                <Icon name={icon} size={25} color="#9599b3" />
            <Text style={[styles.title,{color: color}]}>{title}</Text>
            </TouchableOpacity>
    )
};

    const renderItem = ({ item })=>{
        const backgroundColor = item.title === selectedId ? 'white' : 'white';
        const color = item.title === selectedId ? '#6200ee' : '#9599b3';
        return(
        <Item
        onPress={() => {
            setSelectedId(item.title)
            props.navigation.navigate(item.navigate);
        }} 
        icon={item.icon} 
        title={item.title}
        backgroundColor={backgroundColor}
        color={color}
        />
        );
    };


    return (
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#6200ee'}}>
            </View>
            <View style={{flex:13}}>
                <View style={{flex:1}}>

                    <View style={{flex:0.10,flexDirection:'row'}}>
                        <View style={{flex:0.30,flexDirection:'row',paddingTop:10,paddingLeft:5}}>
                            <Image 
                                source={require('../assests/images/profile.png')}
                                style={{height: 70,
                                    width: 70, 
                                    borderRadius: 50,
                                    alignItems:'center'}}
                            />
                        </View>
                        <View style={{flex:0.70}}>
                            <Text style={{fontSize:30,marginTop:18,fontFamily:"Montserrat-Bold"}}>Jane Doe</Text>
                        </View>
                    </View>

                    <View style={{flex:0.10,flexDirection:'row',paddingTop:20,paddingLeft:10}}>
                        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Profile')}}>
                                <Text style={styles.buttonText}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:0.80}}>
                        <FlatList
                            data={listArray}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginVertical:8,
        marginHorizontal: 16,
        flexDirection:'row',
    },
    title:{
        fontFamily:"Montserrat",
        fontSize:18,
        marginLeft:20
    },
    button: {
        borderWidth:1,
        justifyContent:'center',
        paddingLeft:9,
        width:105,
        height:30,
        borderRadius: 30,
        borderColor:'gray'
    },
    buttonText: {
        fontFamily:"Montserrat",
        fontSize:16,
        color: "black"
    }
});
