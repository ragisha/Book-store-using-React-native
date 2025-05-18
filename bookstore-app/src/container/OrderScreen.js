import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getBookById } from '../services/BookService';
import DrawScreen from '../components/DrawScreen'
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
const Orders = () => {
    const id=1;
    const route = useRoute();
    //let id = route.params.id;
    console.log(id)
    //console.log('id received is :' + route.params.id);
    let item = getBookById(id);
    const navigation=useNavigation();

    return (
        <View><DrawScreen/>
        <View style={styles.container}>
            
            <View>
                <Image source={{ uri: item.image }} style={styles.BookCover}></Image>

                <View style={{flexDirection: "column", alignContent:'center',alignItems:'center' }}>
                    <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 25, padding:15}}>{item.title}</Text>
                    <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 20, padding: 5 }}>By : {item.author}</Text>
                    <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 20, padding: 5 }}>Year : {item.year}</Text>
                    <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 20, padding: 5 }}>Buy : {item.buy}</Text>
                    <Text></Text>
                </View>
                </View>
            </View>
        </View>
    );
}
export default Orders;
const styles = StyleSheet.create({
    loginText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center'
    },
    loginButton: {
        backgroundColor: "#6200ee",
        width: 150,
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
    // container: {
    //     width: '100%',
    //     height: 'auto',
    //     backgroundColor: '#ffffff',
    //     alignSelf: 'center',
    //     fontFamily: 'Montserrat-Regular',
    // },
    topBarIcon: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        justifyContent: 'flex-start',
    },

});
