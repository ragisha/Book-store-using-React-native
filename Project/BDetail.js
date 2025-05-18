import React from 'react';
import {View,Text,Image,StyleSheet,TouchableHighlight} from 'react-native'
class BDetail extends React.Component{
    render(){
        const{title,author,year,buy,cover}= this.props.book;
        return(
            <View style={{flex:1,flexDirection:"row"}}>
                <Image style={{width:120, height:175,margin:5}} source={{uri:cover}}/>
                <View style={{flex:1,flexDirection:"column"}}>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:20,padding:10}}>{title}</Text>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:16,marginLeft:20,padding:2}}>By : {author}</Text>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:16,marginLeft:20,padding:2}}>Year : {year}</Text>
                <Text style={{fontFamily:"Montserrat-Regular",fontSize:16,marginLeft:20,padding:2}}>Buy : {buy}</Text>
                <Text></Text>
                <View style={{ flexDirection: "row",alignItems:'center' }}>
                {/* onPress={() => this.onWelcomeButton() */}
                <TouchableHighlight style={[styles.roundButton, styles.getStartedButton]}>
                      <Text style={{color:"white"}}>More</Text>
                    </TouchableHighlight><Text> </Text>
                    <TouchableHighlight style={[styles.roundButton1, styles.getStartedButton]}>
                      <Text style={{color:"white"}}>ADD CART</Text>
                    </TouchableHighlight><Text> </Text></View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    roundButton: {
        width: 25,
        height: 30,
        flex: 1,
        marginTop: 12,
        marginLeft:10,
        marginRight:25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      roundButton1: {
        width: 80,
        height: 30,
        flex: 1.5,
        marginTop: 12,
        marginLeft:20,
        marginRight:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      getStartedButton: {
        backgroundColor: "#6200EE",
        alignItems:'center'
      },
  });  
export default BDetail;