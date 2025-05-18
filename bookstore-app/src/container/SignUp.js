import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,Button,SafeAreaView,TouchableHighlight,Image,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginMenu from '../components/LoginMenu'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'Sign up'
    };
    state = {
        email: 'admin',
        password1: 'admin',
        password2: 'admin'
    }
    onLoginButton = () => {
        console.log(">> on login button");
        if (this.state.password1 == this.state.password2) {
            if (this.state.email =='admin'){
            this.props.navigation.navigate('Home');
            this.setState({
                email: '',
                password1: '',
                password2:''
            });
        }
        else{
            this.props.navigation.navigate('DrawScreenCustomer');
            this.setState({
                email: '',
                password1: '',
                password2:''
            });
        }
        } else {
            alert('Username/Password should be admin/admin.');
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <LoginMenu style={styles.loginButton}/>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password1}
                        onChangeText={(password1) => this.setState({ password1 })} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Re-enter Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password2}
                        onChangeText={(password2) => this.setState({ password2 })} />
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                    <Text style={styles.loginText}>Create Account</Text>
                </TouchableHighlight>
                <View style={styles.inputFooter}>
                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('SignIn')}>
                    <Text style={styles.footerColor}>Existing user? sign in</Text>
                </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputContainer: {
        borderBottomWidth: 1,
        width: 300,
        height: 50,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 10,
        color: '#6200EE',
        flex: 1,
        fontFamily:'Montserrat-Regular',
    },
    inputFooter:{
        height:45,
    },
    footerColor :{
        color:'#6200EE',
        fontFamily:'Montserrat-Regular',
    },
    buttonContainer: {
        height: 45,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        width: 300,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#6200EE",
    },
    loginText: {
        color: 'white',
        fontFamily:'Montserrat-Regular',
    }
});


