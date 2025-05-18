import * as React from 'react';
import { Text, View,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableOpacity from 'react-native-gesture-handler';
import {getBooks,getBookById} from '../services/BookData';
import { addCart } from '../services/CartData';
const BookDetail = ()=>{
  const navigation = useNavigation();
  // let books = getBooks();
  const [books,setBooks] = React.useState([]);
  const loadBooks = async()=>{
    const temp = await getBooks();
    setBooks(temp);
  }
  
  useFocusEffect(
    React.useCallback(() => {
      loadBooks();
      return () => {
      };
    }, [])
  );

  const onPress = async(item) => {
    console.log(" details", item);
    let temp = {};
    temp.title = item.name;
    temp.author = item.author;
    temp.buy = parseInt(item.buy);
    temp.image = item.image;
    console.log(temp);
    await addCart(temp);// cart table
    alert();
}

  function renderItem({ item }) {
    const id=item.id;
    return (
      <View style={{flex:1,flexDirection:"row"}}>
                <Image style={{width:120, height:175,margin:5}} source={{uri:item.image}}/>
                <View style={{flex:1,flexDirection:"column"}}>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:20,padding:10}}>{item.title}</Text>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:16,marginLeft:20,padding:2}}>By : {item.author}</Text>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:16,marginLeft:20,padding:2}}>Year : {item.year}</Text>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:16,marginLeft:20,padding:2}}>Buy : $ {item.buy}</Text>
                <Text></Text>
                <View style={{ flexDirection: "row",alignItems:'center' }}>
                <TouchableHighlight onPress={()=>{navigation.navigate('Details',{id})}} style={[styles.roundButton, styles.getStartedButton]}>
                      <Text style={{color:"white"}}>More</Text>
                    </TouchableHighlight><Text> </Text>
                    <TouchableHighlight onPress={()=>onPress(item)} style={[styles.roundButton1, styles.getStartedButton]}>
                      <Text style={{color:"white"}}>ADD CART</Text>
                    </TouchableHighlight><Text> </Text></View>
                </View>
            </View>
    );
  }
const alert=()=>{
    return Alert.alert(
        "Are your sure?",
        "Are you sure you want to purchase the book?",
        [
          // The "Yes" button
          {
            text: "Yes",
            onPress: () => {
                navigation.navigate('Cart');
            },
          },
          {
            text: "No",
          },
        ]
      );
    };
  
  const HomeScreen = () => (
      <FlatList
          data={books}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id}
        />
  );
  return (
        HomeScreen()
      );

}

export default BookDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: "#B2002D",
    fontFamily: 'Montserrat-SemiBold',
    paddingBottom: 12,
    marginTop: 50,
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    flex: 3,
    paddingLeft:5,
  },
  textColor: {
    fontFamily: 'Montserrat-Medium',
    color: "#B2002D",
    paddingLeft:5
  },
  inputIcon: {
    paddingTop: 27,
    width: 30,
    height: 20,
  },
  roundButton: {
    width: 25,
    height: 30,
    flex: 1,
    marginTop: 12,
    marginLeft:10,
    marginRight:25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  roundButton1: {
    width: 80,
    height: 30,
    flex: 1.5,
    marginTop: 12,
    marginLeft:20,
    marginRight:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  getStartedButton: {
    backgroundColor: "#6200EE",
    alignItems:'center'
  },
  getStartedText: {
    alignSelf:'center',
    justifyContent:'center',
    color: 'white',
    fontFamily: 'Montserrat-Bold'
  },
  booking: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 140
  },
  bookingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#636363",
    fontFamily: 'Montserrat-Medium',
  }
});


