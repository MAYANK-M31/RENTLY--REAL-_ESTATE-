import React, { Component } from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity,StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from "react-native-gesture-handler";
import Category from "./Category";
import Banner from "./Offerbanners.js";



class Searchpage extends Component{

    


    render(){
        return(
           <View>
               <StatusBar backgroundColor="white" barStyle="dark-content"/>
                <View>
                    <View style={{backgroundColor:"white",padding:10,paddingRight:10}}>
                        <View style={{height:45,width:"100%",backgroundColor:"white",
                                     flexDirection:"row",alignItems:"center",
                                     justifyContent:"flex-start",padding:10,
                                     borderColor:"grey",borderWidth:0.5,
                                     borderRadius:5,elevation:2}}>
                            <Icon name="search" color="grey"  size={22}/>
                            <TextInput autoFocus={true}  placeholder="search" style={{backgroundColor:"white",width:300,height:40}}/>     
                        </View>
                    </View>
                </View>
  
                
           </View>
        )
    }
}

export default Searchpage; 