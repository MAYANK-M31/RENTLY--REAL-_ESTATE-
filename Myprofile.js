import React, { Component } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    BackHandler,
    StatusBar
  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon  from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import jwt_decode from "jwt-decode";



class Insidelogin extends Component{
  
  constructor(props){
    super(props);
    this.state={
          isloggedin:false,
          tokenid:null,
          result:''
      
    }
  }

    
  logoutkey= async ()=>{
       
    await AsyncStorage.removeItem("usertoken",()=>{alert("You are Logged Out")})
       this.props.navigation.closeDrawer();
   }
    

  componentDidMount = async ()=>{
    const token = await AsyncStorage.getItem("usertoken")
    const value = jwt_decode(token)
    if (token){
        this.setState({tokenid:value._id})
        // console.warn(this.state.tokenid)
       await axios.get("https://cryptic-taiga-83080.herokuapp.com/data/"+`${this.state.tokenid}`)
        .then(res=>{
            // console.warn(res.data)
            this.setState({result:res.data})
        })
        
    }else{
        
    }
}

  
    
  



  render(){
    return (
        
       
        <View  style={{flex:1,navbarHidden:true,height:500}}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View style={{height:"7%",elevation:2,flexDirection:"row",padding:10,backgroundColor:"white"}} >
    
                    <View style={{width:"40%",justifyContent:"center"}} >
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                            <Icon name="arrow-back" size={25}/>
                        </TouchableOpacity>
                    </View>
                   
                    <View style={{width:"50%",justifyContent:"center"}} >
                        <Text style={{fontSize:20}} >Profile</Text>
                    </View>

                    <View style={{width:"60%",justifyContent:"center"}} >
                        <Text style={{fontSize:20}} >Edit</Text>
                    </View>

                </View >
                 
                <View style={{height:"100%",padding:20,backgroundColor:"white"}} >
                    <TouchableOpacity style={{width:"100%",height:50,borderRadius:10,borderBottomWidth:0.5,borderBottomColor:"silver",backgroundColor:"white",flexDirection:"row",paddingHorizontal:10}} >
                           <View style={{flex:0.4,justifyContent:"center"}}>
                               <Icon name="mail"  size={27}/>
                           </View>
                           <View  style={{flex:2,justifyContent:"center",marginBottom:"1%"}} >
                              <Text style={{fontSize:20,color:"silver"}} >{this.state.result.email}</Text>
                           </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:"100%",height:50,borderRadius:10,borderBottomWidth:0.5,borderBottomColor:"silver",backgroundColor:"white",flexDirection:"row",paddingHorizontal:10,marginTop:10}} >
                           <View style={{flex:0.4,justifyContent:"center"}}>
                               <Icon name="phone"  size={27}/>
                           </View>
                           <View  style={{flex:2,justifyContent:"center",marginBottom:"1%"}} >
                                <Text style={{fontSize:20,color:"silver"}} >{this.state.result.phone}</Text>
                           </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:"100%",height:50,borderRadius:10,borderBottomWidth:0.5,borderBottomColor:"silver",backgroundColor:"white",flexDirection:"row",paddingHorizontal:10,marginTop:10}} >
                           <View style={{flex:0.4,justifyContent:"center"}}>
                               <Icon name="person"  size={27}/>
                           </View>
                           <View  style={{flex:2,justifyContent:"center",marginBottom:"1%"}} >
                                <Text style={{fontSize:20,color:"silver",textTransform:"capitalize"}} >{this.state.result.name}</Text>
                           </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:"100%",height:50,borderRadius:10,borderBottomWidth:0.5,borderBottomColor:"silver",backgroundColor:"white",flexDirection:"row",paddingHorizontal:10,marginTop:10}} >
                           <View style={{flex:0.4,justifyContent:"center"}}>
                               <Icon name="domain"  size={27}/>
                           </View>
                           <View  style={{flex:2,justifyContent:"center",marginBottom:"1%"}} >
                                <Text style={{fontSize:20,color:"silver"}} >Tilak nagar,New Delhi</Text>
                           </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:"100%",height:50,borderRadius:10,borderBottomWidth:0.5,borderBottomColor:"silver",backgroundColor:"white",flexDirection:"row",paddingHorizontal:10,marginTop:10}} >
                           <View style={{flex:0.4,justifyContent:"center"}}>
                               <Icon name="lock"  size={27}/>
                           </View>
                           <View  style={{flex:2,justifyContent:"center",marginBottom:"1%"}} >
                                <Text style={{fontSize:20,color:"silver"}} >ooooooo</Text>
                           </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.logoutkey} style={{width:"100%",height:50,borderRadius:10,borderWidth:0.5,borderColor:"silver",backgroundColor:"red",paddingHorizontal:10,marginTop:"80%"}} >
                          
                           <View  style={{flex:2,justifyContent:"center", alignItems:"center",marginBottom:"1%"}} >
                                <Text style={{fontSize:20,color:"white"}} >LOGOUT</Text>
                           </View>
                    </TouchableOpacity>
                    
                </View >

        </View> 
        
     
    );
  };
}
export default Insidelogin;