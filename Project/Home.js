import * as React from 'react';
import {FlatList, Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Book from '../components/Book'

const bookimage = "https://training.pyther.com/yara/15-day/07-BookStore/books/9780746066928_cover_image.jpg"
let books=[
  {id:'1', name:"Billy", title:"Billy Mini Monster",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474978439_cover_image.jpg"},
  {id:'2', name:"Story Book", title:"Write Your Own Story",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781409523352_cover_image.jpg"},
  {id:'3', name:"100 Paper", title:"Dragons to fold & fly",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781409598596_cover_image.jpg"},
  {id:'4', name:"Biggest Fastest", title:"Biggest Fastest Tallest",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474950855_cover_image.jpg"},
  {id:'5', name:"First English", title:"First Illustrated English",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474941044_cover_image.jpg"},
  {id:'6', name:"Shark", title:"The Shark Caller",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474966849_cover_image.jpg"},
  {id:'7', name:"Poppy Lamb", title:"Poppy and Sam Lamp",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474981354_cover_image.jpg"},
  {id:'8', name:"Springtime", title:"First Colourig Springtimer",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474985420_cover_image.jpg"},
  {id:'9', name:"Spanish", title:"Spanish for Beginners",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781409509202_cover_image.jpg"},
  {id:'10', name:"Fat cat", title:"Fat cat on me",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781409509233_cover_image.jpg"},
  {id:'11', name:"Animals", title:"FingureSprint Animals",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474914338_cover_image.jpg"},
  {id:'12', name:"Maths", title:"Maths Scribble Book",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474959940_cover_image.jpg"},
  {id:'13', name:"Our Planet", title:"Looking After our Planet",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474968942_cover_image.jpg"},
  {id:'14', name:"Sleeping Princes", title:"The Sleeping Princes",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474969802_cover_image.jpg"},
  {id:'15', name:"Book Brain", title:"Book or the Brain",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474950589_cover_image.jpg"},
  {id:'16', name:"Unhurry", title:"The Unhurry Book",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474970495_cover_image.jpg"},
  {id:'17', name:"Infinity", title:"The Infinity Files",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474972208_cover_image.jpg"},
  {id:'18', name:"Stone Age", title:"24 Hours in stone Age",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474977111_cover_image.jpg"},
  {id:'19', name:"Bunny", title:"That's not my Bunny",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9780746066928_cover_image.jpg"},
  {id:'20', name:"Pig", title:"Dont tickle the Pig",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474981323_cover_image.jpg"},
  {id:'21', name:"Reading", title:"Ready for Reading",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474986694_cover_image.jpg"},
  {id:'22', name:"Virus", title:"What is Virus",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474991513_cover_image.jpg"}];

const Home = () => {
  return(

      <FlatList 
      numColumns={2}
      data={books}
      keyExtractor={(item,index)=>index.toString()}
       renderItem={ ( { item } ) =>(<Book book={item}/>)}></FlatList>

  );
}

export default Home;



// import * as React from 'react';
// import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const hideb = (flag)=>{
//     if(flag){
//         return(<Button style={styles.show}>Show</Button>)
//     }
// }
//  function Showhide(){
//     const[hide,setHide] = useState(false);
//     const show=()=>{
//         setHide(!hide);
//     }
//     return(
//         <View>
//             <Button onClick={show}>click</Button>
//             {hideb(hide)};
//         </View>
//     );
//  }
// function Home() {
//   return (
//     <ScrollView>
//       <View style={{flex:1, flexDirection:'column'}}>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity>
//         <View>
//         <Image style={styles.logo} source={require('../assests/images/Book1.jpg')} />
//         <Text style={styles.name} >Billy</Text>
//         <Text style={styles.fname}>Billy Mini Monster</Text>
//         </View>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <View>
//         <Image style={styles.logo} source={require('../assests/images/Book2.jpg')} />
//         <Text style={styles.name} >Story Book</Text>
//         <Text style={styles.fname}>Write Your Own Story</Text>
//         </View>
//         </TouchableOpacity>
//         </View>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book3.jpg')} />
//         <Text style={styles.name} >100 Paper</Text>
//         <Text style={styles.fname}>Dragons to fold & fly</Text>
//         </View></TouchableOpacity>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book4.jpg')} />
//         <Text style={styles.name} >Biggest Fastest</Text>
//         <Text style={styles.fname}>Biggest Fastest Tallest</Text>
//         </View></TouchableOpacity>
//         </View>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book5.jpg')} />
//         <Text style={styles.name} >First English</Text>
//         <Text style={styles.fname}>First Illustrated English</Text>
//         </View></TouchableOpacity>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book6.jpg')} />
//         <Text style={styles.name} >Shark</Text>
//         <Text style={styles.fname}>The Shark Caller</Text>
//         </View></TouchableOpacity>
//         </View>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book7.jpg')} />
//         <Text style={styles.name} >Poppy Lamb</Text>
//         <Text style={styles.fname}>Poppy and Sam Lamp</Text>
//         </View></TouchableOpacity>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book8.jpg')} />
//         <Text style={styles.name} >Springtime</Text>
//         <Text style={styles.fname}>First Colourig Springtime</Text>
//         </View></TouchableOpacity>
//         </View>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book9.jpg')} />
//         <Text style={styles.name} >Spanish</Text>
//         <Text style={styles.fname}>Spanish for Beginners</Text>
//         </View></TouchableOpacity>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book10.jpg')} />
//         <Text style={styles.name} >Fat cat</Text>
//         <Text style={styles.fname}>Fat cat on me</Text>
//         </View></TouchableOpacity>
//         </View>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book11.jpg')} />
//         <Text style={styles.name} >Animals</Text>
//         <Text style={styles.fname}>FingureSprint Animals</Text>
//         </View></TouchableOpacity>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book12.jpg')} />
//         <Text style={styles.name} >Maths</Text>
//         <Text style={styles.fname}>Maths Scribble Book</Text>
//         </View></TouchableOpacity>
//         </View>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book13.jpg')} />
//         <Text style={styles.name} >Our Planet</Text>
//         <Text style={styles.fname}>Looking After our Planet</Text>
//         </View></TouchableOpacity>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book14.jpg')} />
//         <Text style={styles.name} >Sleeping Princes</Text>
//         <Text style={styles.fname}>The Sleeping Princes</Text>
//         </View></TouchableOpacity>
//         </View>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book15.jpg')} />
//         <Text style={styles.name} >Book Brain</Text>
//         <Text style={styles.fname}>Book or the Brain</Text>
//         </View></TouchableOpacity>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book16.jpg')} />
//         <Text style={styles.name} >Unhurry</Text>
//         <Text style={styles.fname}>The Unhurry Book</Text>
//         </View></TouchableOpacity>
//         </View>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book17.jpg')} />
//         <Text style={styles.name} >Infinity</Text>
//         <Text style={styles.fname}>The Infinity Files</Text>
//         </View></TouchableOpacity>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book18.jpg')} />
//         <Text style={styles.name} >Stone Age</Text>
//         <Text style={styles.fname}>24 Hours in stone Age</Text>
//         </View></TouchableOpacity>
//         </View>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book19.jpg')} />
//         <Text style={styles.name} >Bunny</Text>
//         <Text style={styles.fname}>That's not my Bunny</Text>
//         </View></TouchableOpacity>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book20.jpg')} />
//         <Text style={styles.name} >Pig</Text>
//         <Text style={styles.fname}>Dont tickle the Pig</Text>
//         </View></TouchableOpacity>
//         </View>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book21.jpg')} />
//         <Text style={styles.name} >Reading</Text>
//         <Text style={styles.fname}>Ready for Reading</Text>
//         </View></TouchableOpacity>
//         <TouchableOpacity><View>
//         <Image style={styles.logo} source={require('../assests/images/Book22.jpg')} />
//         <Text style={styles.name} >Virus</Text>
//         <Text style={styles.fname}>What is Virus</Text>
//         </View></TouchableOpacity>
//         </View>
//       </View>
//       </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//     show:{
//     marginLeft:50,
//     marginTop:25,
//     backgroundColor:'#FF6969',
//     borderRadius:30,
//     width:70,
//     height:30
//     },
//   logo:{
//     width:130,
//     height:200,
//     marginLeft:25,
//     marginRight:30,
//     marginTop:20,
//     marginBottom:10
//   },
//   name:{
//     textAlign:'left',
//     fontSize:20,
//     marginLeft:25
//   },
//   fname:{
//     textAlign:'left',
//     fontSize:15,
//     marginLeft:25
//   },
//   check:{
//     width:10,
//     height:10,
//     borderRadius:20,
//     backfaceVisibility:"visible"
//   }
// })

// export default Home;