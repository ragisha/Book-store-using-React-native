import React from 'react';
import {View,Text,Image} from 'react-native'
class Book extends React.Component{
    render(){
        const{name,title,cover}= this.props.book;
        return(
            <View style={{width:"48%",borderWidth:0.50,alignItems:"center",borderColor:"white" , margin:'1%', padding:15}}>
                <Image style={{width:160, height:200,alignItems:"center"}} source={{uri:cover}}/>
                <Text style={{marginTop:5,textAlign:"center",fontSize:18,fontFamily:"Montserrat-Medium"}}>{name}</Text>
                <Text style={{textAlign:"center",fontFamily:"Montserrat-Regular"}}>{title}</Text>
                
            </View>
        )
    }
}
export default Book;