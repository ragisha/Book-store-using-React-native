import * as React from 'react';
import { Button, View,StyleSheet,Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Welcome from '../container/Welcome';
import BookDetail from '../container/BookDetail'
import Orders from '../container/OrderScreen'
import Cart from '../container/Cart'
import Home from '../container/Home';
import CustomerNavigation from './CustomerNavigation';
import { useNavigation } from '@react-navigation/native';
import HomeCustomer from '../container/HomeCustomer';
const Drawer = createDrawerNavigator();

function DrawScreen() {
  const navigation=useNavigation();
  return (
    <Drawer.Navigator style={styles.topView}
    screenOptions={{
      headerStyle:{
        backgroundColor:'#6200ee',
      },
      headerTintColor:'white',
      headerRight: () => (
          <View style={{flex:1,flexDirection:'row',paddingLeft:10}}>
            <TouchableOpacity style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
            <View style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
              <Icon name='notifications' size={26} color='white'></Icon>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
            <View style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
              <Icon name='ios-share-social' size={26} color='white'></Icon>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
            <View >
              <Icon name='search' size={26} color='white'></Icon>
            </View>
            </TouchableOpacity>
          </View>
      ),
    }}
      drawerContent={props=><CustomerNavigation {...props}/>}
        initialRouteName="HomeCustomer">

        <Drawer.Screen  name="HomeCustomer" component={HomeCustomer} />
        <Drawer.Screen name="BookDetail" component={BookDetail} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Orders" component={Orders} />
        <Drawer.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
      </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  topView: {
    marginTop:20,
    backgroundColor: 'white',
},
  draws:{
    flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
    backgroundColor:"#6200EE",
   // color:"#6200EE"
  }
})

export default DrawScreen;
