import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler'
import SignUp from './src/components/SignUp';
import SignIn from './src/components/SignIn';
// import {TabNavi} from './src/container/Login';
import WelcomeScreen from './src/container/Welcome';
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";


// const Navigator = createAppContainer(TabNavigator);
const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name=" " component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;