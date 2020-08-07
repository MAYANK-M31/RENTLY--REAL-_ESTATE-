import React, { Component } from 'react';
import Insidelogin from "./Insidelogin";
import Insideregister from "./Insideregister";
import Myprofile from "./Myprofile";
import { CardStyleInterpolators,createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import axios from "axios"

const stack = createStackNavigator();
 

class Insideuserform extends Component{
    constructor(props){
        super(props);
        this.state={
            isloggedin:false
        }
    }
     
    componentDidMount = async ()=>{
        const token = await AsyncStorage.getItem("usertoken")
        if (token){
            this.setState({isloggedin:true})
        }else{
            this.setState({isloggedin:false})
        }
    }

    componentDidUpdate = async ()=>{
        const token = await AsyncStorage.getItem("usertoken")
        // const value = jwt_decode(token)
        // console.log(value._id)
        if (token){
            this.setState({isloggedin:true})
        }else{
            this.setState({isloggedin:false})
        }
    }

    render(){
        return(
            <>
                <stack.Navigator screenOptions={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} >
                    { !this.state.isloggedin ? (
                        <>
                          <stack.Screen name="Insidelogin" component={Insidelogin} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
                          <stack.Screen name="Insideregister"  component={Insideregister} screenOptions={{CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS}} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
                        </>
                    ) : (
                        <stack.Screen name="Myprofile"  component={Myprofile} screenOptions={{CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS}} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
                    ) }
                   
                   
                </stack.Navigator>
            
            </>
        )
    }   
}

export default Insideuserform; 