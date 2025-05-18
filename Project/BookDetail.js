import * as React from 'react';
import {FlatList, Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,Button } from 'react-native';
import BDetail from '../components/BDetail'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

let books=[
  {id:'1', name:"Billy", title:"Billy Mini Monster", author: "Zanna Davidson" ,  publisher:"Indus House", isbn:"746fs4222", year:1983, buy:"$10" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474978439_cover_image.jpg"},
  {id:'2', name:"Story Book", title:"Write Your Own Story", author: "R.K. Narayan" ,  publisher:"Mara House", isbn:"746fs4223", year:1978, buy:"$12" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781409523352_cover_image.jpg"},
  {id:'3', name:"100 Paper", title:"Dragons to fold & fly", author: "Vikram Seth" ,  publisher:"Indus Bookse", isbn:"746fs4224", year:1999, buy:"$15" ,cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781409598596_cover_image.jpg"},
  {id:'4', name:"Biggest Fastest", title:"Biggest Fastest Tallest", author: "Anita Desa" ,  publisher:"Holiday House", isbn:"746fs4225", year:2010, buy:"$20" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474950855_cover_image.jpg"},
  {id:'5', name:"First English", title:"First Illustrated English", author: "Zanna Davidson" ,  publisher:"Indus Books", isbn:"746fs4226", year:1988, buy:"$23",cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474941044_cover_image.jpg"},
  {id:'6', name:"Shark", title:"The Shark Caller", author: "Anita Desa" ,  publisher:"Mara House", isbn:"746fs4227", year:1976, buy:"$18" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474966849_cover_image.jpg"},
  {id:'7', name:"Poppy Lamb", title:"Poppy and Sam Lamp", author: "R.K. Narayan" ,  publisher:"Holiday House", isbn:"746fs4228", year:1985, buy:"$16" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474981354_cover_image.jpg"},
  {id:'8', name:"Springtime", title:"First Colourig Springtimer", author: "Zanna Davidson" ,  publisher:"Indus House", isbn:"746fs4229", year:1990, buy:"$13" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474985420_cover_image.jpg"},
  {id:'9', name:"Spanish", title:"Spanish for Beginners", author: "Vikram Seth" ,  publisher:"Mara House", isbn:"746fs4230", year:2000, buy:"$19" ,cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781409509202_cover_image.jpg"},
  {id:'10', name:"Fat cat", title:"Fat cat on me", author:"Anita Desa", publisher:"Indus Books", isbn:"746fs4231", year:2013, buy:"$5" ,  cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781409509233_cover_image.jpg"},
  {id:'11', name:"Animals", title:"FingureSprint Animals", author:"Zanna Davidson", publisher:"Holiday House", isbn:"746fs4232", year:1983, buy:"$17" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474914338_cover_image.jpg"},
  {id:'12', name:"Maths", title:"Maths Scribble Book", author:"R.K. Narayan", publisher:"Mara House", isbn:"746fs4233", year:1985, buy:"$20" ,  cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474959940_cover_image.jpg"},
  {id:'13', name:"Our Planet", title:"Looking After our Planet", author:"Anita Desan", publisher:"Indus House", isbn:"746fs4234", year:1991, buy:"$4" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474968942_cover_image.jpg"},
  {id:'14', name:"Sleeping Princes", title:"The Sleeping Princes", author:"Zanna Davidson", publisher:"Holiday House", isbn:"746fs4235", year:1980, buy:"$10" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474969802_cover_image.jpg"},
  {id:'15', name:"Book Brain", title:"Book or the Brain", author:"Vikram Seth", publisher:"Indus Books", isbn:"746fs4236", year:1981, buy:"$15" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474950589_cover_image.jpg"},
  {id:'16', name:"Unhurry", title:"The Unhurry Book", author:"Anita Desa", publisher:"Indus House", isbn:"746fs4237", year:1999, buy:"$12" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474970495_cover_image.jpg"},
  {id:'17', name:"Infinity", title:"The Infinity Files", author:"R.K. Narayan", publisher:"Mara Housee", isbn:"746fs4238", year:2005, buy:"$18" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474972208_cover_image.jpg"},
  {id:'18', name:"Stone Age", title:"24 Hours in stone Age", author:"Zanna Davidson", publisher:"Indus House", isbn:"746fs4239", year:1990, buy:"$20" ,cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474977111_cover_image.jpg"},
  {id:'19', name:"Bunny", title:"That's not my Bunnyr", author:"Anita Desa", publisher:"Holiday House", isbn:"746fs4240", year:1985, buy:"$16" ,cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9780746066928_cover_image.jpg"},
  {id:'20', name:"Pig", title:"Dont tickle the Pig", author:"Vikram Seth", publisher:"Indus House", isbn:"746fs4241", year:1989, buy:"$11" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474981323_cover_image.jpg"},
  {id:'21', name:"Reading", title:"Ready for Reading", author:"Zanna Davidson", publisher:"Mara House", isbn:"746fs4242", year:1995, buy:"$14" ,cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474986694_cover_image.jpg"},
  {id:'22', name:"Virus", title:"What is Virus", author:"R.K. Narayan", publisher:"Holiday House", isbn:"746fs4243", year:1980, buy:"$16" , cover:"https://training.pyther.com/yara/15-day/07-BookStore/books/9781474991513_cover_image.jpg"}]

function BookDetail(){
  return(
      <FlatList 
      data={books}
      keyExtractor={(item,index)=>index.toString()}
       renderItem={ ( { item } ) =>(<BDetail book={item}/>)}></FlatList>

  );
}

export default BookDetail;