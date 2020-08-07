import 'react-native-gesture-handler';
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import PreviewDetailpage from "./PreviewDetailpage";
import Intro from "./Intro";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Myadds from "./Myadds";
import Register from "./Register";

const stack = createStackNavigator();
const tab = createBottomTabNavigator();
const drawer = createDrawerNavigator();


class ListingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isloggedin: null,
            notloggedin: null
        }
    }

    //   componentDidMount= async () =>{
    //     const token = await AsyncStorage.getItem("usertoken")
    //     // alert(token)
    //     if(token){
    //       this.setState({isloggedin:true})

    //     }else{
    //       this.setState({isloggedin:false})
    //     }

    //   }

    render() {
        return (

            <stack.Navigator initialRouteName="Myadds">
                <stack.Screen name="Myadds" component={Myadds} options={{ headerShown: false }} />
                <stack.Screen name="PreviewDetailpage" component={PreviewDetailpage} options={{ headerShown: false, headerStyle: { backgroundColor: 'white', elevation: 0, headerShown: false } }} />
            </stack.Navigator>

        );
    }
};



export default ListingScreen;