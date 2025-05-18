import React, {Component} from 'react';
import {StyleSheet,Text,View,ScrollView,TextInput,Button,TouchableHighlight,TouchableOpacity,Image,Alert,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
moreButton = () => {
this.props.navigation.navigate('Home');

}

  render() {
    return (
      <ScrollView>
      <View>
       <TouchableOpacity onPress={()=>{this.onLoginButton()}}>
        <Image style={styles.searchBarIcons} source={require('../assests/images/Close.jpg')} />
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Image source={require('../assests/images/profile.png')} style={[styles.image]}/>
          <View style={styles.views}>
            <Text style={styles.bookingText}>Jane Doe</Text>
            <Text style={styles.email}>janedoe123@email.com</Text>
          </View>
        </View>

        <TouchableHighlight>
          <View style={{flexDirection: 'column'}}>
            <View style={[styles.orders]}>
              <View style={[styles.icons]}>
                <Icon name="list-ul" size={28} color="#A8AAAA" /></View>
              <View style={{flex: 0.5, marginTop: 10}}>
                <Text style={{fontFamily: 'Montserrat-Regular', marginTop: 10}}>My Orders  </Text></View>
              <View
                style={[styles.icon]}>
                <Icon
                  style={{marginLeft: 20,paddingTop:7,paddingRight:4}}
                  name="chevron-circle-right"
                  size={25}
                  color="#A8AAAA"
                  onPress={()=>{this.moreButton()}}
                />
              </View>
            </View>
            <View
              style={[styles.viewrow]}>
              <View
                style={[styles.viewicon]}>
                <Icon1 name="airballoon" size={28} color="#A8AAAA" />
              </View>
              <View style={{flex: 0.5, marginTop: 10}}>
                <Text style={{fontFamily: 'Montserrat-Regular', marginTop: 10}}>
                  Pending Orders
                </Text>
              </View>
              <View
                style={[styles.flexend]}>
                <Icon
                  style={{marginLeft: 20,paddingTop:7,paddingRight:4}}
                  name="chevron-circle-right"
                  size={25}
                  color="#A8AAAA"
                />
              </View>
            </View>
            <View
              style={[styles.viewrow]}>
              <View
                style={[styles.viewicon]}>
                <Icon2 name="payment" size={28} color="#A8AAAA" />
              </View>
              <View style={{flex: 0.5, marginTop: 10}}>
                <Text style={{fontFamily: 'Montserrat-Regular', marginTop: 10}}>
                  Pending Payments
                </Text>
              </View>
              <View
                style={[styles.flexend]}>
                <Icon
                  style={{marginLeft: 20,paddingTop:7,paddingRight:4}}
                  name="chevron-circle-right"
                  size={25}
                  color="#A8AAAA"
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '93.5%',
                marginLeft: '3%',
                borderWidth: 0.1,
                borderColor: '#636363',
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
              }}>
              <View
                style={[styles.viewicon]}>
                <Icon2 name="stars" size={28} color="#A8AAAA" />
              </View>
              <View style={{flex: 0.5, marginTop: 10}}>
                <Text style={{fontFamily: 'Montserrat-Regular', marginTop: 10}}>
                  Feedback
                </Text>
              </View>
              <View
                style={[styles.flexend]}>
                <Icon
                  style={{marginLeft: 20,paddingTop:7,paddingRight:4}}
                  name="chevron-circle-right"
                  size={25}
                  color="#A8AAAA"
                />
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  icon:{
    flex: 0.2,
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 5,
  },
  flexend:{
    flex: 0.2,
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 5,
  },
  viewicon:{
    flex: 0.43,
    alignItems: 'flex-start',
    paddingBottom: 15,
    paddingTop: 15,
    marginLeft: 15,
  },
  image:{
    width: 100,
    height: 100,
    marginLeft: 25,
    marginTop: 40,
    borderRadius: 100,
  },
  viewrow:{
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '93.5%',
    marginLeft: '3%',
    borderBottomWidth: 0.3,
    borderColor: 'grey',
  },
  orders:{
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '93.5%',
    marginLeft: '3%',
    borderWidth: 0.1,
    borderBottomWidth: 0.3,
    borderColor: '#636363',
    marginTop: 90,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  icons:{
    flex: 0.43,
    alignItems: 'flex-start',
    paddingBottom: 15,
    paddingTop: 15,
    marginLeft: 15,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 80,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  views: {
    marginTop: 15,
  },
  email: {
    color: '#636363',
    fontFamily: 'Montserrat-Medium',
    marginLeft: 40,
    marginTop: 18,
  },
  searchBarIcons: {
    height: 25,
    width: 25,
    marginTop: 70,
    marginLeft: 10,
  },
  bookingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#636363',
    marginLeft: 40,
    marginTop: 38,
  },
});
