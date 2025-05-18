import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,Button,SafeAreaView,TouchableHighlight,Image,Alert} from 'react-native';
import LoginMenu from './LoginMenu'
export default class SignIn extends Component {
    // constructor(props) {
    //     super(props);
    // }
    static navigationOptions = {
        headerTitle: 'Sign in'
    };
    state = {
        email: 'admin',
        password: 'admin'
    }
    onLoginButton = () => {
        console.log(">> on login button");
        if (this.state.email == this.state.password) {
            this.props.navigation.navigate('Home', { name: this.state.email });
            this.setState({
                email: '',
                password: ''
            });

        } else {
            alert('Username/Password should be admin/admin.');
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
            <LoginMenu/>
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
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
                <View style={styles.inputFooter}>
                    <Text style={styles.footerColor}>FORGOT PASSWORD</Text>
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
    },
    inputFooter:{
        height:45,
    },
    footerColor :{
        color:'#6200EE',
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
    }
});

