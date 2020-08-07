import React, { Component } from 'react';
import PropertyType from "./PropertyType";
import PropertyLocation from "./PropertyLocation";
import PropertyPrice from "./PropertyPrice";
import PropertyImage from "./PropertyImage";
import Ownerinfo from "./Ownerinfo";
import PropertySuccess from "./PropertySuccess";

import Detailpage from "./Detailpage";
import { CardStyleInterpolators,createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import axios from "axios"

const stack = createStackNavigator();
 

class Addpropertyscreens extends Component{
    constructor(props){
        super(props);
        this.state={
            isloggedin:null
        }
    }
     
    // componentDidMount = async ()=>{
    //     const token = await AsyncStorage.getItem("usertoken")
    //     if (token){
    //         this.setState({isloggedin:true})
    //     }else{
    //         this.setState({isloggedin:false})
    //     }
    // }

    // componentDidUpdate = async ()=>{
    //     const token = await AsyncStorage.getItem("usertoken")
    //     // const value = jwt_decode(token)
    //     // console.log(value._id)
    //     if (token){
    //         this.setState({isloggedin:true})
    //     }else{
    //         this.setState({isloggedin:false})
    //     }
    // }

    render(){
        return(
            <>
                <stack.Navigator initialRouteName="PropertyType" screenOptions={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} >
                   
                    
                          <stack.Screen name="PropertyType" component={PropertyType} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
                          <stack.Screen name="PropertyLocation"  component={PropertyLocation} screenOptions={{CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS}} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
                          <stack.Screen name="PropertyImage"  component={PropertyImage} screenOptions={{CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS}} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
                          <stack.Screen name="PropertyPrice"  component={PropertyPrice} screenOptions={{CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS}} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
                          <stack.Screen name="Ownerinfo"  component={Ownerinfo} screenOptions={{CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS}} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
                        <stack.Screen name="PropertySuccess"  component={PropertySuccess} screenOptions={{CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS}} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
                        <stack.Screen name="Detailpage"  component={Detailpage} screenOptions={{CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS}} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
                   
                        
                </stack.Navigator>
            
            </>
        )
    }   
}

export default Addpropertyscreens; 