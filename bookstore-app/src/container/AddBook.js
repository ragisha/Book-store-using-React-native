import React, { Component, useEffect,useState } from 'react';
import {useNavigation, useRoute, useFocusEffect} from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import {addBook, getBookById, updateBook,getBooks} from '../services/BookData';
import Icon from 'react-native-vector-icons/AntDesign';


const AddBook = (props) => {
    //console.log(route.params);
    const route = useRoute();
    const navigation = useNavigation();
    const [book, onChangeBook] = React.useState({
        name:'',title:'',author:'',publisher:'',isbn:'',year:'',buy:'',image:'',id:0
    });
    const [bLabel, setBLabel ] = React.useState('Add');
    //console.log(itemId);
    //const customerId = route.params.id;
    const loadBooks =async()=>{
        const record = await getBookById(route.params.id);
            console.log(record);
            onChangeBook(record);
            setBLabel('Update');
    }

    useEffect(()=>{
        if(route.params && route.params.id){
            console.log("Route id:",route.params.id);
            loadBooks();
        }

    },[]);


    // useFocusEffect(
    //     React.useCallback(() => {
    //         if(route.params && route.params.id){
    //                     loadBooks();
    //         }
    //     //   loadCustomers();
    //       // Do something when the screen is focused
    
    //       return () => {
    //         // Do something when the screen is unfocused
    //         // Useful for cleanup functions
    //       };
    //     }, [])
    //   );
    var addUpdateBook = async() => {
        if(book.id==0){
            console.log(book);
            book.id= Date.now()+"S";
            await addBook(book);
        }else{
            await updateBook(book);
        }
        props.navigation.navigate('Books');
    }
    



        return (
            <View style={{flex:1}}>
            <View style={{flex:0.10}}></View>
            <View style={{flex:0.10,flexDirection:'row',backgroundColor:'#6200EE'}}>
            <View style={{flex:0.10,justifyContent:'space-around',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Books")}>
                <Icon name="left" size={25} color="white"> </Icon>
                </TouchableOpacity>
            </View>
            <View style={{flex:0.80,justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{color:'white',fontFamily:'Montserrat-Bold',fontSize:17}}>Books</Text>
            </View>
            </View>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Name"
                        underlineColorAndroid='transparent'
                        value={book.name}
                        onChangeText={(name)=>{onChangeBook({...book,name})}} />                
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Title"
                        underlineColorAndroid='transparent'
                        value={book.title}
                        onChangeText={(title)=>{onChangeBook({...book,title})}} />                
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Author"
                        underlineColorAndroid='transparent'
                        value={book.author}
                        onChangeText={(author)=>{onChangeBook({...book,author})}} />              
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Publisher"
                        underlineColorAndroid='transparent'
                        value={book.publisher}
                        onChangeText={(publisher)=>{onChangeBook({...book,publisher})}} />                
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="ISBN"
                        underlineColorAndroid='transparent'
                        value={book.isbn}
                        onChangeText={(isbn)=>{onChangeBook({...book,isbn})}} />                
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Year"
                        underlineColorAndroid='transparent'
                        value={book.year}
                        onChangeText={(year)=>{onChangeBook({...book,year})}} />                
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Price"
                        underlineColorAndroid='transparent'
                        value={book.buy.toString()}
                        onChangeText={(buy)=>{onChangeBook({...book,buy})}} />                
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Image"
                        underlineColorAndroid='transparent'
                        value={book.image}
                        onChangeText={(image)=>{onChangeBook({...book,image})}} />                
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
                onPress={() => addUpdateBook()}>
                    <Text style={styles.loginText}>{bLabel}</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
                onPress={() => navigation.navigate('Books')}>
                    <Text style={styles.loginText}>Cancel</Text>
                </TouchableHighlight>
            </View>
        </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        paddingTop:40
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#6200EE",
    },
    loginText: {
        color: 'white',
    }
});

export default AddBook;