import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  useNavigation } from '@react-navigation/native';
import mainStack from '../../App.js'
//import Login from './container/Login';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// const Home="Home";
// const Profile="Profile";
function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1, flexDirection:'column'}}>
      <View style={{flex:2,}}>
      <Image
          source={ require('../assests/images/Bookstore.jpg')}
          style={{ width:400,height:300}}
        />
      </View>
      <View style={{flex:2,}}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.titleText}>Welcome</Text>
        <Text style={styles.titleText}>to Book Store</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.baseText}>Let's get started</Text>
      </View>
      <View style={{flex:2,}}>
        <View style={{flex:2, flexDirection:'row' , }}>
          <View style={{flex:1}}></View>
          <View style={{flex:3, backgroundColor:'#9599b3'}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}>
            <Text>{'\n'}</Text>
            <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:3, flexDirection:'row',}}>
          <View style={{flex:1}}></View>
          <View style={{flex:3, backgroundColor:'#6200ee'}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
            <Text>{'\n'}</Text>
            <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex:0.5,}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText:{
    color:'white',
    textAlign:'center',
    fontSize:20
  },
  baseText:{
    color:'#6200ee',
    fontSize:15,
    textAlign:'center'
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color:'#6200ee',
    textAlign:'center'
  }
});

export default WelcomeScreen;