import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import {getBooks,searchBook} from '../services/BookData'
import Icon from 'react-native-vector-icons/FontAwesome';
import Searchbar from '../components/Searchbar';
const Search = ()=>{
  const [books,setBooks]= React.useState([]);
  const [value, setValue] = React.useState();

  const updateSearch=async(value)=>{
    //do your search logic or anything
    console.log(value);
    const temp = await searchBook(value);
    console.log(temp);
    setBooks(temp);
    // const temp = await searchBook(value);
    // setBooks(temp);
  }

  function renderItem({ item }) {
   // const id=item.id
    return (
      <View style={{width:"48%",borderWidth:0.50,alignItems:"center",borderColor:"white" , margin:'1%', padding:15}}>
            {/* <TouchableHighlight onPress={()=>Details(item.id)}> */}
            <Image style={{width:160, height:200,alignItems:"center"}} source={{uri:item.image}}/>
                <Text style={{marginTop:5,textAlign:"center",fontSize:18,fontFamily:"Montserrat-Medium"}}>{item.name}</Text>
                <Text style={{textAlign:"center",fontFamily:"Montserrat-Regular"}}>{item.title}</Text>
              {/* </TouchableHighlight>     */}
       </View>
    );
  }
  return (
    <View style={{flex:1}}>
      <View style={{flex:0.08,paddingTop:20}}>
        <Searchbar
        value={value}
        updateSearch={updateSearch}/>
      </View>
      <View style={{flex:0.90}}>
            <FlatList
          numColumns={2}
          data={books}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id}
        />
      </View>
    </View>
      );

}

export default Search;

const styles = StyleSheet.create({
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
    width: 80,
    height: 30,
    flex: 1,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  roundButton1: {
    width: 130,
    height: 30,
    flex: 1.5,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  getStartedButton: {
    backgroundColor: "#B2002D",
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

