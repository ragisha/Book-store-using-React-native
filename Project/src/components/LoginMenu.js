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
        
        <View style={[styles.fixToText]}>
            <Button style={[styles.buttonContainer,styles.loginButton]} onPress={() => navigation.navigate('SignIn')} title="Sign in"></Button>
            <Button onPress={() => navigation.navigate('SignUp')} title="Sign up"></Button>
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  buttonContainer: {
    height: 45,
    margin: 20,
    marginBottom: 50,
    width: 300,
    borderRadius: 30,
},
loginButton: {
    backgroundColor: "#6200EE",
},
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  opacity: {
    alignItems: "center",
    backgroundColor: "#737373",
    padding: 10
  },
  title: {
    textAlign: 'space-evenly',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  roundButton: {
    backgroundColor:'#6200EE',
    width: 200,
    height: 60,
    marginLeft: 220,
    marginTop:12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
    borderRadius: 100,
  },
});

export default Menu;
