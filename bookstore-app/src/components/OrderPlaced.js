import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { FlatList, SafeAreaView, StatusBar,StyleSheet, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Orders = ()=>{
  const navigation = useNavigation()
  return(
  <View style={styles.booking}>
    <View><TouchableHighlight  onPress={() =>navigation.navigate('DrawScreen')}><Image style={styles.inputIcon}
    source={require('../assests/images/Close.jpg')}/></TouchableHighlight></View>
    
    <Image source={require('../assests/images/Order.png')} style={{
        marginTop:70,
        height: 100,
        width: 100, 
        borderRadius: 48,
        alignItems:'center'}}/>
    <Text></Text>
    <Text></Text>
    <Text style={styles.bookingText}>Order Placed</Text>
    <Text></Text>
    <Text style={{ color: "#636363", fontFamily: 'Montserrat-Medium' }}>Your order got placed successfully.</Text>
    <Text></Text>
    <Text></Text>
    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() =>navigation.navigate('DrawScreen')}>
                <Text style={styles.loginText}> MY ORDERS {'\t'}<Text>  
                     </Text> <Icon name="chevron-circle-right" size={30} />
                </Text>
            </TouchableHighlight>
  
  </View>
  );
}

export default Orders;


const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#6200ee",
    width: 150,
    marginTop: 50,
    marginLeft: 190
},
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
    marginTop:-50,
    marginLeft:280,
    backgroundColor:'white',
    width: 50,
    height: 50,
  },
  buttonContainer: {
    height: 45,
    alignSelf: 'center',
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    width: 200,
    borderRadius: 30,
},
loginButton: {
    backgroundColor: "#6200EE",
},
loginText: {
  color: 'white',
  fontSize: 22,
  fontFamily: 'Montserrat-Bold',
  textAlign: 'center'
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

