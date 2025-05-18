import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import {View, Text, Image,Button,FlatList,StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/Materiallcons';
// import Icon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function CustomerNavigation(props){
    const [selectedId, setSelectedId] = useState(null);
    const navigation = useNavigation();
    const listArray = [
        {icon:'home', title: 'Home',navigate:'Home'},
        {icon:'book', title: 'Book Details',navigate:'BookDetail'},
        {icon:'shopping-cart', title: 'Cart',navigate:'Cart'},
        {icon:'shopping-bag', title: 'Orders',navigate:'OrderScreen'},
        {icon:'', title:'      LOG OUT',navigate:'LOG OUT'}
    ];

    const Item =({title,icon,onPress,color,backgroundColor})=>(
        <TouchableOpacity
        onPress={onPress} 
        style={[styles.item,
            {backgroundColor: backgroundColor}]}>
                <Icon name= {icon} size={25} color="#6200EE" />
            <Text style={[styles.title,{color: color}]}>{title}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item })=>{
        const backgroundColor = item.title === selectedId ? 'white' : 'white';//note for sign in up
        const color = item.title === selectedId ? '#6200ee' : 'black';
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
        <View style={{flex: 1}}>
                <View style={{
                    flex:0.25, 
                    paddingTop: 50,
                    paddingHorizontal:20,
                    flexDirection:'row'}}>
                    <View style={{flex:0.1}}>
                        <Image
                            source={ require('../assests/images/profile.png')}
                            style={{height: 100,
                                width: 100, 
                                borderRadius: 50,
                                alignItems:'center'}}
                        />
                    </View>
                    <View style={{flex:0.9}}>
                        <Text>{'\n'}</Text>
                        <Text style={{fontfamily:"Montserrat-Bold",fontSize:24,marginTop:40, textAlign:'left',marginLeft:63}}>Jane Doe</Text>
                        <Text>{'\n'}</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
                        <View style={{flexDirection:"row"}}>
                        <Text style={styles.buttonText}>Edit Profile</Text>
                        <Text>{''}</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
            </View>
            <View style={{flex:0.70}}>
                <FlatList
                    data={listArray}
                    renderItem={renderItem}
                />
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
        fontSize:18,
        marginLeft:20
    },
    buttonText:{
        flexDirection:'row',
        textAlign:"left",
    }
});
