import React from 'react';
import Maincomponent from "./Maincomponent";
import Searchpage from "./Searchpage";
import Detailpage from "./Detailpage";
import DetailGallery from "./DetailGallery";


import { CardStyleInterpolators,createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import Resultshownpage from './Resultshownpage';

const stack = createStackNavigator();


const Mainpage = ()=>{
    return(
        <>
        
            <stack.Navigator  screenOptions={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} >
               <stack.Screen name="Maincomponent" component={Maincomponent} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
               <stack.Screen name="Searchpage"  component={Searchpage} screenOptions={{CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS}} options={{headerShown:false,animationEnabled:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
               <stack.Screen name="Resultshownpage" component={Resultshownpage} options={{headerShown:false,animationEnabled:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}} />
               <stack.Screen name="Detailpage" component={Detailpage} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}}  />
               <stack.Screen name="DetailGallery" component={Detailpage} options={{headerShown:false,headerStyle:{backgroundColor:'white',elevation:0,headerShown:false}}}  />
            </stack.Navigator>
        
        </>
    )
    
}

export default Mainpage; 