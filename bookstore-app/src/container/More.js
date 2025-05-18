import * as React from 'react';
import {StyleSheet,Text,View,TouchableHighlight,Image,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {getBooks} from '../services/BookService'
const BookDetail = ()=>{
  const navigation = useNavigation();
  let books = getBooks();

  function selectBook(id) {
    console.log('transferring to booking page ' + id);
    navigation.navigate('Selected Book');
  }

  const Details = (id) =>{
    console.log('details of book: '+ id)
    navigation.navigate('Details',{id});
  }

  return (
    <View>
    <TouchableHighlight style={{ marginTop: 30 }}>
        <View style={{ flexDirection: 'column' }}>
            <View style={[styles.top]}>
                <View style={[styles.line1]}>
                    <Icon name="flag-o" size={20} color="#A8AAAA" />
                </View>
                <View style={[styles.line2]}>
                    <Text style={{ fontFamily: 'Montserrat-Regular', marginTop: 10 }}>Booking Address</Text>
                </View>
                <View style={[styles.bottom]}>
                    <Icon style={{ marginLeft: 20 }} name="chevron-circle-right" size={30} color="#A8AAAA" />
                </View>
            </View>
            <View style={[styles.mid]}>
                <View style={[styles.line1]}><Icon2 name="credit-card-check-outline" size={20} color="#A8AAAA" /></View>
                <View style={[styles.line2]}><Text style={{ fontFamily: 'Montserrat-Regular', marginTop: 10 }}>Payment Method</Text></View>
                <View style={[styles.bottom]}><Icon style={{ marginLeft: 20 }} name="chevron-circle-right" size={30} color="#A8AAAA" /></View>
            </View>
            <View style={[styles.mid]}>
                <View style={[styles.line1]}><Icon2 name="wallet" size={20} color="#A8AAAA" /></View>
                <View style={[styles.line2]}><Text style={{ fontFamily: 'Montserrat-Regular', marginTop: 10 }}>Currency USD</Text></View>
                <View style={[styles.bottom]}><Icon style={{ marginLeft: 20 }} name="chevron-circle-right" size={30} color="#A8AAAA" /></View>
            </View>
            <View style={[styles.end]}>
                <View style={[styles.line1]}><Icon name="language" size={20} color="#A8AAAA" /></View>
                <View style={[styles.line2]}><Text style={{ fontFamily: 'Montserrat-Regular', marginTop: 10 }}>Language English</Text></View>
                <View style={[styles.bottom]}><Icon style={{ marginLeft: 20 }} name="chevron-circle-right" size={30} color="#A8AAAA" /></View>
            </View>
        </View>
    </TouchableHighlight>
</View>
      );

}

export default BookDetail;

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 370,
        marginLeft: 10,
        borderWidth: 0.1,
        borderColor: '#636363',
        marginTop: 90
    },
    line1: {
        flex: 0.43,
        alignItems: 'flex-start',
        paddingBottom: 20,
        paddingTop: 20,
        marginLeft: 15
    },
    line2: {
        flex: 0.5,
        marginTop: 10,
    },
    bottom: {
        flex: 0.2,
        alignItems: 'flex-end',
        marginTop: 10,
        marginRight: 5
    },
    end: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 370,
        marginLeft: 10,
        borderWidth: 0.1,
        borderColor: '#636363'
    },
    inputIcon: {
        paddingTop: 27,
        width: 30,
        height: 20,
        marginLeft: 320,
        marginTop: 40
    },
    mid: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 370,
        marginLeft: 10,
        borderWidth: 0.2,
        borderColor: 'grey'
    },
});









// import React, { Component } from 'react';
// import {StyleSheet,Text,View,TouchableHighlight,Image,} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
// export default class MorePage extends Component {
//     render() {
//         return (
            // <View>
            //     <TouchableHighlight style={{ marginTop: 30 }}>
            //         <View style={{ flexDirection: 'column' }}>
            //             <View style={[styles.top]}>
            //                 <View style={[styles.line1]}>
            //                     <Icon name="flag-o" size={20} color="#A8AAAA" />
            //                 </View>
            //                 <View style={[styles.line2]}>
            //                     <Text style={{ fontFamily: 'Montserrat-Regular', marginTop: 10 }}>Booking Address</Text>
            //                 </View>
            //                 <View style={[styles.bottom]}>
            //                     <Icon style={{ marginLeft: 20 }} name="chevron-circle-right" size={30} color="#A8AAAA" />
            //                 </View>
            //             </View>
            //             <View style={[styles.mid]}>
            //                 <View style={[styles.line1]}><Icon2 name="credit-card-check-outline" size={20} color="#A8AAAA" /></View>
            //                 <View style={[styles.line2]}><Text style={{ fontFamily: 'Montserrat-Regular', marginTop: 10 }}>Payment Method</Text></View>
            //                 <View style={[styles.bottom]}><Icon style={{ marginLeft: 20 }} name="chevron-circle-right" size={30} color="#A8AAAA" /></View>
            //             </View>
            //             <View style={[styles.mid]}>
            //                 <View style={[styles.line1]}><Icon2 name="wallet" size={20} color="#A8AAAA" /></View>
            //                 <View style={[styles.line2]}><Text style={{ fontFamily: 'Montserrat-Regular', marginTop: 10 }}>Currency USD</Text></View>
            //                 <View style={[styles.bottom]}><Icon style={{ marginLeft: 20 }} name="chevron-circle-right" size={30} color="#A8AAAA" /></View>
            //             </View>
            //             <View style={[styles.end]}>
            //                 <View style={[styles.line1]}><Icon name="language" size={20} color="#A8AAAA" /></View>
            //                 <View style={[styles.line2]}><Text style={{ fontFamily: 'Montserrat-Regular', marginTop: 10 }}>Language English</Text></View>
            //                 <View style={[styles.bottom]}><Icon style={{ marginLeft: 20 }} name="chevron-circle-right" size={30} color="#A8AAAA" /></View>
            //             </View>
            //         </View>
            //     </TouchableHighlight>
            // </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     top: {
//         flexDirection: 'row',
//         backgroundColor: 'white',
//         width: 370,
//         marginLeft: 10,
//         borderWidth: 0.1,
//         borderColor: '#636363',
//         marginTop: 90
//     },
//     line1: {
//         flex: 0.43,
//         alignItems: 'flex-start',
//         paddingBottom: 20,
//         paddingTop: 20,
//         marginLeft: 15
//     },
//     line2: {
//         flex: 0.5,
//         marginTop: 10,
//     },
//     bottom: {
//         flex: 0.2,
//         alignItems: 'flex-end',
//         marginTop: 10,
//         marginRight: 5
//     },
//     end: {
//         flexDirection: 'row',
//         backgroundColor: 'white',
//         width: 370,
//         marginLeft: 10,
//         borderWidth: 0.1,
//         borderColor: '#636363'
//     },
//     inputIcon: {
//         paddingTop: 27,
//         width: 30,
//         height: 20,
//         marginLeft: 320,
//         marginTop: 40
//     },
//     mid: {
//         flexDirection: 'row',
//         backgroundColor: 'white',
//         width: 370,
//         marginLeft: 10,
//         borderWidth: 0.2,
//         borderColor: 'grey'
//     },
// });
