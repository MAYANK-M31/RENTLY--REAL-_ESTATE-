import 'react-native-gesture-handler';
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, TextInput, Button, StyleSheet,YellowBox } from 'react-native';
import Login from "./Login";
import Intro from "./Intro";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Searchpage from "./Searchpage";
import Register from "./Register";
import IntroLogo from './IntroLogo';

const stack = createStackNavigator();
const tab = createBottomTabNavigator();
const drawer = createDrawerNavigator();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: null,
      notloggedin: null
    }
    YellowBox.ignoreWarnings([
      'Require cycle:',
      'InvalidTokenError:',
      'Animated:',
    ]);
  }




  componentDidMount = async () => {
    setTimeout(async () => {
      const token = await AsyncStorage.getItem("usertoken")
      const opentoken = await AsyncStorage.getItem("Opened")
      // alert(opentoken)
      if (opentoken === "200") {
        //islogged in can also be isopened if user has open the app for the first time .
        this.setState({ isloggedin: true })

      } else {
        this.setState({ isloggedin: false })
      }
    }, 500);


  }

  render() {

    return (
      <NavigationContainer>
        <stack.Navigator >
          {this.state.isloggedin == null ? (
            <>

              <stack.Screen name="IntroLogo" key="mayankji" component={IntroLogo} options={{ headerShown: false, animationTypeForReplace: "pop" }} />
              {/* <stack.Screen name="Login" component={Login} options={{headerShown:false,animationEnabled:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
            <stack.Screen name="Register" component={Register} options={{headerShown:false,animationEnabled:false,headerStyle:{backgroundColor:'white',elevation:0},headerTitleAlign:"center"}} />
             <stack.Screen name="Home" component={Home} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0},headerTitleAlign:"center"}} />   */}
            </>
          ) : !this.state.isloggedin ? (
            <>

              <stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
              <stack.Screen name="Login" component={Login} options={{ headerShown: false, headerStyle: { backgroundColor: 'white', elevation: 0, headerShown: false } }} />
              <stack.Screen name="Register" component={Register} options={{ headerShown: false, headerStyle: { backgroundColor: 'white', elevation: 0 }, headerTitleAlign: "center" }} />
              <stack.Screen name="Home" component={Home} options={{ headerShown: false, headerStyle: { backgroundColor: 'white', elevation: 0 }, headerTitleAlign: "center" }} />
            </>
          ) : (
                <stack.Screen name="Home" component={Home} options={{ headerShown: false, headerStyle: { backgroundColor: 'white', elevation: 0 }, headerTitleAlign: "center" }} />
              )

          }
        </stack.Navigator>
      </NavigationContainer>
    );
  }
};



export default App;