import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableHighlight, Image, Alert } from 'react-native';
import { useEffect } from 'react';
import { useNavigation, useRoute,useFocusEffect } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome'
import { getBookById,getBooks } from '../services/BookService';
import { deleteCart, getCart } from '../services/CartData';
import { TouchableOpacity } from 'react-native-gesture-handler';
import OrderPlaced from '../components/OrderPlaced';

const Cart = () => {
    const route = useRoute();
   //  let books = getBooks();
   //  const loadBooks = async () => {
   //      const record = await getBookById(route.params.id);
   //     // setId(parseInt(route.params.id))
   //      onChangeBook(record);
   //  }
   //  useEffect(() => {
   //      loadBooks();
   //  }, [])
    //console.log("cart"+book.name)
    const [count, setCounter] = useState(1);
    let navigation = useNavigation();
    const alert = () => {
      return Alert.alert(
          'Are your sure?',
          'Are you sure you want to buy the book?',
          [
              {
                  text: 'Yes',
                  onPress: () => {
                      navigation.navigate('OrderPlaced');
                  },
              },
              {
                  text: 'No',
              },
          ],

      );

  };


  const [cart,setCart] = React.useState([]);
  const loadCart = async()=>{
    const temp = await getCart();
    console.log("Cart Data:::::::");
    console.log(temp);
    setCart(temp);
  }

  const doDelete = async (id) =>{
   await deleteCart({id});
   // setCount(count+1);
   loadCart();
 }
  
  useFocusEffect(
    React.useCallback(() => {
      loadCart();
      return () => {
      };
    }, [])
   );
   var result = cart.reduce(function(tot, arr) { 
      // return the sum with previous value
      return tot + arr.buy;
    
      // set initial value as 0
    },0);

    console.log(result);

    return( 
      <View style={{flex:1,flexDirection:"column"}}>
      <ScrollView >
         <View >
           {cart.map((book)=>(
         <View>
                <View style={{ flexDirection: "row" }}>
            <Image style={styles.bookstyle} source={{ uri: book.image }} />
            <View>
               <Text style={styles.text}>{book.title}</Text>
               <Text style={styles.color}>{book.author}</Text>
               <Text style={styles.cost}>$ {book.buy}</Text>
               <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={styles.button}
                     onPress={() => setCounter(count - 1)}
                     color="#841584" marginTop="20"
                  >
                     <Text style={styles.counter}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.count}>{count}</Text>
                  <TouchableOpacity style={styles.button}
                     onPress={() => setCounter(count + 1)}
                     color="#841584" marginTop="20"
                  >
                     <Text style={styles.counter}>+</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View> 
            </View>
            ))}
      </View>
      </ScrollView>
<View style={{ flexDirection: "row" ,backgroundColor:"white"}}>
<View>
   <Text style={styles.text}>TOTAL</Text>
   <Text style={styles.cost}>${result}</Text>
   <Text style={styles.ship}>Free Domestic Shipping</Text>
</View>
<TouchableHighlight style={styles.buttonContainer} onPress={() => { alert() }}>
   <View style={{flex:1,flexDirection:'row'}}>
   <View style={{flex:0.80,justifyContent:'space-around',alignItems:'center'}}>
      <Text style={styles.loginText}>PLACE ORDER</Text> 
   </View>
   <View style={{flex:0.20,justifyContent:'space-around',alignItems:'center'}}>
   <Text><Icon name="chevron-circle-right" style={styles.inputIcon} size={27.8} />
      {/* <RightCircleOutlined /> */}
   </Text>
   </View>
   </View>
</TouchableHighlight>
</View>
</View>
      )

}

export default Cart;
const styles = StyleSheet.create({
   name: {
      fontSize: 30,
      marginLeft: 20
   },
   loginText: {
      fontSize: 17.5,
      fontFamily:'Montserrat-Bold',
      color: 'white'
   },
   inputIcon: {
      marginLeft: 25,
      size:25,
      marginTop: 25,
      color: 'white'
   },
   buttonContainer: {
      width: 180,
      marginTop:30,
      marginLeft: 20,
      backgroundColor: '#6200EE',
      borderRadius: 30,
      height: 60
   },
   bookstyle: {
      width: 100,
      height: 150,
      marginLeft: 20,
      marginTop: 20,
   },
   text: {
      marginLeft: 20,
      marginTop: 20,
      fontSize: 18,
      color: 'grey'
   },
   color: {
      marginLeft: 20,
      marginTop: 15,
      fontSize: 18,
      color: 'grey'
   },
   cost: {
      marginLeft: 20,
      marginTop: 15,
      fontSize: 18,
      color: '#6200EE'
   },
   promo:{
      fontSize:24,
      fontFamily:"Montserrat-Regular",
      color:'#6200EE'
   },
   button: {
      marginTop: 9,
      width: 20,
      height: 20,
      borderRadius: 50,
      backgroundColor: '#C5C6D0',
      marginLeft: 10

   },
   count: {
      marginTop: 10,
      marginLeft: 10,
   },
   counter: {
      marginLeft: 5,
      fontSize: 18,
      color: '#3F3F4E',

   },
   line: {
      marginLeft: 130,
      marginTop: 20,
      color: '#C5C6D0',
   },
   bline: {
      marginLeft: 20,
      color: '#C5C6D0',
   },
   ship: {
      marginLeft: 20,
      marginTop: 10,
      fontSize: 15,
      color: 'grey',
      marginBottom:'20%'
   },
});
