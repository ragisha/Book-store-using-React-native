import React, { useEffect, useState } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { deleteBooks, getBooks } from "../services/BookData";
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Item = ({ item, onPress, onDelete, onEdit,style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={{flex:1,flexDirection:"row"}}>
                <Image style={{width:120, height:175,margin:5}} source={{uri:item.image}}/>
                <View style={{flex:1,flexDirection:"column"}}>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:20,padding:10}}>{item.title}</Text>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:16,marginLeft:20,padding:2}}>By : {item.author}</Text>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:16,marginLeft:20,padding:2}}>Year : {item.year}</Text>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:16,marginLeft:20,padding:2}}>Buy : {item.buy}</Text>
                <Text></Text>
                <View style={{flex:1,flexDirection: "row",alignItems:'center' }}>
                <View style={{flex:0.50,justifyContent:'space-around',alignItems:'center'}}>
                  <TouchableOpacity onPress={()=>{onEdit(item.id)}}>
                    <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: 'https://training.pyther.com/icons/edit.png?9',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex:0.50,justifyContent:'space-around',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{onDelete(item.id)}}>
                  <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://training.pyther.com/icons/delete.png',
                  }}
                />
                </TouchableOpacity>
              </View>
                </View>
            </View>
    </View>
  </TouchableOpacity>
);

const BookApp = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [count, setCount] = useState(0);
  const [books,setBooks] = useState([]);
  const loadBooks = async() => {
    const temp = await getBooks();
    setBooks(temp);
  }
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      loadBooks();
    });
    return unsubscribe;
  },[navigation]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     loadBooks();
  //     // Do something when the screen is focused

  //     return () => {
  //       // Do something when the screen is unfocused
  //       // Useful for cleanup functions
  //     };
  //   }, [])
  // );

  const doDelete = async (id) =>{
    await deleteBooks({id});
    // setCount(count+1);
    loadBooks();
  }

  const doEdit = async (id) =>{
   console.log("Edit id",id);
    navigation.navigate("AddBook",{id});
  }

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        onDelete={(id) => doDelete(id)}
        onEdit={(id)=> doEdit(id)}
      />
    );
  };

  return (
  <View style={{flex:1}}>
    <View style={{flex:0.10}}></View>
    <View style={{flex:0.10,flexDirection:'row',backgroundColor:'#6200EE'}}>
      <View style={{flex:0.10,justifyContent:'space-around',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Icon name="left" size={25} color="white"> </Icon>
        </TouchableOpacity>
      </View>
      <View style={{flex:0.80,justifyContent:'space-around',alignItems:'center'}}>
        <Text style={{color:'white',fontFamily:'Montserrat-Bold',fontSize:17}}>Books</Text>
      </View>
    </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <View style={{justifyContent:'space-around',alignItems:'center',paddingTop:20}}>
        <TouchableOpacity style={styles.addButton} onPress={()=>
          navigation.navigate("AddBook")
        }>
          <Text style={styles.addText}>Add Book</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  email: {
    fontSize: 20,
  },
  phone: {
    fontSize: 18,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  addButton: {
    justifyContent:'center',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
    width:150,
    height:60,
    borderRadius:60,
    backgroundColor:'#6200EE'
  },
  addText:{
    fontWeight:'bold',
    fontSize:18,
    color:'white'
  }
});

export default BookApp;

