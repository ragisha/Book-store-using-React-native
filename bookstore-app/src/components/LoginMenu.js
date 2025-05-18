import React,{useState,useEffect} from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Text, Alert, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Separator = () => (
  <View style={styles.separator} />
);
var updateCount = 0;
const Menu = ({}) => {
    let navigation = useNavigation();
    const [value, onChangeText] = React.useState('9');
    const [count, setCount] = React.useState(0);
    const [init, setInit] = React.useState(0);
    return(
      <SafeAreaView>
        <View style={[styles.menu]}>
            <TouchableOpacity style={[styles.roundButton1]} onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.getStartedText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.roundButton1]} onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.getStartedText}> Sign up</Text>
            </TouchableOpacity>
        </View></SafeAreaView>
    );
    }

const styles = StyleSheet.create({
menu:{
    marginTop:60,
    marginRight:35,
    flexDirection:"row",
    fontFamily:'Montserrat-Regular',
},
getStartedText:{
  marginLeft:2,
  fontSize:16,
  marginTop:5,
  color:'#6200EE',
  fontFamily:'Montserrat-Regular'
},
roundButton1:{
  marginLeft:40,
  marginTop:25,
  backgroundColor:'white',
  borderRadius:30,
  width:70,
  height:30
},
});

export default Menu;