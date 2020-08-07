import React from "react";
import {View,Text,TextInput,Button,StyleSheet,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {NavigationContainer} from "@react-navigation/native";
import Login from "./Login";
import Mainpage from "./Mainpage";
import DrawerContent from "./DrawerContent";
import Insideuserform from "./Insideuserform";
import ListingScreen from "./ListingScreen";
import Addproperty from "./Addproperty";
import Addpropertyscreens from "./Addpropertyscreens";




const drawer = createDrawerNavigator();
const tab = createBottomTabNavigator();

const Home = ()=>{
    return(
        <>
        <NavigationContainer independent={true} >
            <drawer.Navigator drawerPosition="right" drawerStyle={{width:"83%"}} edgeWidth={0} drawerContent={props => <DrawerContent {...props} />} >
               <drawer.Screen    name="Home" component={Mainpage}  />
               <drawer.Screen name="Insideuserform" component={Insideuserform}  />
               <drawer.Screen name="Addpropertyscreens" component={Addpropertyscreens}  />
               <drawer.Screen name="ListingScreen" component={ListingScreen}  />
            </drawer.Navigator>
            
        </NavigationContainer>
        </>
    )
    
}

export default Home; 