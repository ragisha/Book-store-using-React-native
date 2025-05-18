import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler'
import SignUp from './src/container/SignUp';
import SignIn from './src/container/SignIn';
import Welcome from './src/container/Welcome';
import Home from './src/components/DrawScreen';
import DrawScreen from './src/components/DrawScreenCustomer';
import CustomerNavigation from './src/components/CustomerNavigation';
import BookDetail from './src/container/BookDetail';
import OrderPlaced from './src/components/OrderPlaced'
import More from'./src/container/More'
import Profile from './src/container/Profile';
import Details from './src/container/Details';
import Search from './src/components/DrawScreen';
import HomeCustomer from './src/container/HomeCustomer';
import DrawerCust from './src/components/DrawerCust';
import CustomerNav from './src/components/CustomerNav';
import BookApp from './src/container/Books';
import AddBook from './src/container/AddBook';
import OrderScreen from './src/container/OrderScreen';
const Stack = createStackNavigator();


function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
       <Stack.Screen name="SignIn" component={SignIn} />
       <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="BookDetail" component={BookDetail} />
       <Stack.Screen name="More" component={More} />
       <Stack.Screen name="Details" component={Details} />
       <Stack.Screen name="DrawScreen" options={{headerShown: false}} component={DrawScreen} />
       <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
       <Stack.Screen name="DrawerCust" options={{headerShown: false}} component={DrawScreen} />
       <Stack.Screen name="HomeCustomer" options={{headerShown: false}} component={HomeCustomer} />
       <Stack.Screen name="Profile" options={{headerShown: false}} component={Profile} />
       <Stack.Screen name="Books" options={{headerShown: false}} component={BookApp} />
       <Stack.Screen name="AddBook" options={{headerShown: false}} component={AddBook}/>
       <Stack.Screen name="CustomerNavigation" component={CustomerNavigation} />
       <Stack.Screen name="CustomerNav" component={CustomerNav} />
       <Stack.Screen name="OrderPlaced" options={{headerShown: false}} component={OrderPlaced} />
       </Stack.Navigator>
     </NavigationContainer>
  );
}
export default App;