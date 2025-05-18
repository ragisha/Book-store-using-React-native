import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute,useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { getBookById, getBooks } from '../services/BookService';
import { getBookById } from '../services/BookData';
import TouchableOpacity from 'react-native-gesture-handler';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
} from 'react-native';
import { addCart } from '../services/CartData';
const Details = () => {
    // const books=getBooks();
    const route = useRoute();
    let id = route.params.id;
    const [item,setItem] = React.useState({
        name:'',title:'',author:'',publisher:'',isbn:'',year:'',buy:'',image:'',id:0
    })
    // console.log(id)
    // console.log('id received is :' + route.params.id);
    // let item = getBookById(id);
    const navigation=useNavigation();
    const loadBooks = async()=>{
        console.log(route.params.id);
        const record=await getBookById(route.params.id);
        console.log(record);
        setItem(record)
    };
    console.log("item:",item);

    React.useEffect(()=>{
        if(route.params && route.params.id){
            console.log("Route id:",route.params.id);
            loadBooks();
        }

    },[]);
    // const books = getBooks();
    // const route = useRoute();
    // let id = route.params.id;
    // console.log(id)
    // console.log('id received is :' + route.params.id);
    // let item = getBookById(id);
    // const navigation = useNavigation();
    const alert = () => {
        return Alert.alert(
            'Are your sure?',
            'Are you sure you want to buy the book?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        navigation.navigate('Cart', { id });
                    },
                },
                {
                    text: 'No',
                },
            ],

        );

    };
    const onPress = async(item) => {
        console.log(" details", item);
        let temp = {};
        temp.title = item.name;
        temp.author = item.author;
        temp.buy = parseInt(item.buy);
        temp.image = item.image;
        console.log(temp);
        await addCart(temp);// cart table
        alert();
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image source={{ uri: item.image }} style={styles.BookCover}></Image>

                    <View style={{ flexDirection: "column", alignContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 25, padding: 15 }}>{item.title}</Text>
                        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 20, padding: 5 }}>By : {item.author}</Text>
                        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 20, padding: 5 }}>Year : {item.year}</Text>
                        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 20, padding: 5 }}>Buy : {item.buy}</Text>
                        <Text></Text>
                    </View>

                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => onPress(item)}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:0.75,justifyContent:'space-around',alignItems:'center'}}>
                        <Text style={styles.loginText}> ADD CART</Text>
                    </View>
                    <View style={{flex:0.25,justifyContent:'space-around',alignItems:'center'}}>
                        <Text><Icon color="white" name="chevron-circle-right" size={33} />
                    </Text>
                    </View>
                </View>
                </TouchableHighlight>
            </View>

        </ScrollView>
    );
}
export default Details;
const styles = StyleSheet.create({
    loginText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center'
    },
    loginButton: {
        backgroundColor: "#6200ee",
        width: 170,
        marginTop: 50,
        marginLeft: 190
    },
    buttonContainer: {
        height: 45,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    topBar: {
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Montserrat-Regular'

    },
    BookCover: {
        height: 300,
        width: 200,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 25,
    },
    container: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        fontFamily: 'Montserrat-Regular',
    },
    topBarIcon: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        justifyContent: 'flex-start',
    },

});
