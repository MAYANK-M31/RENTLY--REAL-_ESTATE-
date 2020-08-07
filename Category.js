import React from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity,StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from "react-native-gesture-handler";                           


const Category = (props)=>{
    return(
        <View style={{height:320,width:"32%",marginLeft:10,borderWidth:0.5,
                      borderColor:"white",borderRadius:15,backgroundColor:"white"}}>
               <View style={{flex:1}}>
                   <Image source={props.imageuri}
                   style={{height:320,width:"100%",resizeMode:"cover",borderRadius:15,opacity:0.7,backgroundColor:"black"}} />
               </View>
               <View style={{flex:1.5,alignItems:"center"}}>
                   <Text style={{color:"white",fontSize:50,fontWeight:"bold"}}>{props.name}</Text>
               </View>
        </View> 
    )
}
        
export default Category;
                               
