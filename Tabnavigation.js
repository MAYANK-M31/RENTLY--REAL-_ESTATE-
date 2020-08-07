// import React from "react";
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { NavigationContainer } from "@react-navigation/native";
// import Login from "./Login";
// import Mainpage from "./Mainpage";
// import DrawerContent from "./DrawerContent";
// import Insideuserform from "./Insideuserform";
// import Myprofile from "./Myprofile";
// import Addproperty from "./Addproperty";
// import Addpropertyscreens from "./Addpropertyscreens";





// const tab = createBottomTabNavigator();

// const Tabhome = () => {
//     return (
//         <>
//             <NavigationContainer independent={true} >
//                 <tab.Navigator screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color, size }) => {
//                         let iconName;

//                         if (route.name === 'Home') {
//                             iconName = focused
//                                 ? 'ios-home'
//                                 : 'ios-home';
//                         } else if (route.name === 'Add Property') {
//                             iconName = focused ?  'ios-add-circle' : 'ios-add-circle';
//                         } else if (route.name === 'Profile') {
//                             iconName = focused ? 'ios-contact' : 'ios-contact';
//                         }

//                         // You can return any component that you like here!
//                         return <Ionicons name={iconName} size={28} color={color} />;
//                     },
//                 })}
//                     tabBarOptions={{
//                         activeTintColor: '#1dd38f',
//                         inactiveTintColor: '#303846',
//                         style:{height:65,paddingBottom:10,paddingTop:8,justifyContent:"center"}
//                     }} >
//                     <tab.Screen name="Home" component={Mainpage} />
//                     <tab.Screen name="Add Property" component={Addpropertyscreens} />
//                     <tab.Screen name="Profile" component={Myprofile} />
//                 </tab.Navigator>
//             </NavigationContainer>
//         </>
//     )

// }

// export default Tabhome; 