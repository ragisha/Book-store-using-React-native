import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {getBooks} from '../services/BookService'
import {Dimensions} from 'react-native';

function useOrientation(){
  const [orient, setOrientation] = useState("PORTRAIT");

  useEffect(() => {
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
      if (width<height) {
        setOrientation("PORTRAIT")
      } else {
        setOrientation("LANDSCAPE")
    
      }
    })

  }, []);
  return orientation;
}

const HomeCustomer = ()=>{
  const navigation = useNavigation();
  let books = getBooks();

  const Details = (id) =>{
    navigation.navigate('Details',{id});
  }
  
  function renderItem({ item }) {
   const id=item.id

    return (
      <TouchableOpacity style={{width:"48%",borderWidth:0.50,alignItems:"center",borderColor:"white" , margin:'1%', padding:15}} onPress={()=>Details(id)}> 
      <View >
            <Image style={{width:160, height:200,alignItems:"center"}} source={{uri:item.image}}/>
                <Text style={{marginTop:5,textAlign:"center",fontSize:18,fontFamily:"Montserrat-Medium"}}>{item.name}</Text>
                <Text style={{textAlign:"center",fontFamily:"Montserrat-Regular"}}>{item.title}</Text>
       </View> 
       </TouchableOpacity>
    );
    }
 
  
  const HomeScreen = () => (
    
    <FlatList
    numColumns={2}
    data={books}
    renderItem={renderItem}
    // keyExtractor={(item) => item.id}
  />
  );
  return (
    HomeScreen()
      );

}

export default HomeCustomer;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Medium',
    flex: 3,
    paddingLeft:5,
  },
  textColor: {
    fontFamily: 'Montserrat-Medium',
    color: "#B2002D",
    paddingLeft:5
  },
  inputIcon: {
    paddingTop: 27,
    width: 30,
    height: 20,
  },
  roundButton: {
    width: 80,
    height: 30,
    flex: 1,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  roundButton1: {
    width: 130,
    height: 30,
    flex: 1.5,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  getStartedButton: {
    backgroundColor: "#B2002D",
    alignItems:'center'
  },
  getStartedText: {
    alignSelf:'center',
    justifyContent:'center',
    color: 'white',
    fontFamily: 'Montserrat-Bold'
  },
  booking: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 140
  },
  bookingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#636363",
    fontFamily: 'Montserrat-Medium',
  }
});


