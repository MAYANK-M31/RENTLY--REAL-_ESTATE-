import React, { Component } from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity,StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

                       
                        
                        
    const Resultcontent =(props)=>{
       
            return(             
                        <View  style={{flex:3,width:"100%",borderRadius:4,padding:"4%",borderWidth:1,borderColor:"lightgrey",backgroundColor:"white",marginBottom:10}}>    
                            <View>
                                <View style={{flexDirection:"row",height:100,width:"100%"}}>
                                    <View style={{height:100,width:"40%",backgroundColor:"white",borderRadius:8,borderColor:"silver",borderWidth:0.5}}>
                                        <Image    source={{uri:props.images}} style={{resizeMode:"cover",height:100,width:"100%",borderRadius:6}} />
                                    </View>
                                    <View style={{flex:1,height:100,width:"60%",padding:"1.5%",paddingLeft:"3%"}}>
                                        <View style={{flex:0,justifyContent:"space-between",flexDirection:"row",height:30,width:"100%"}} >
                                            <View style={{flexDirection:"row",height:22,justifyContent:"center"}}>
                                                <Text style={{fontSize:18,fontWeight:"bold",borderRadius:2,backgroundColor:"#00efb47C"}}>&#8377; {props.price} </Text><Text style={{color:"grey",fontSize:14,textAlignVertical:"bottom"}}>/month</Text>
                                            </View>
                                            <View>
                                                <Icon name="heart" size={20} color="red" />
                                            </View>
                                        </View>
                                        <View style={{height:40,width:"100%"}} >
                                            <View style={{flexDirection:"row",height:40}}>
                                                <Text style={{fontSize:15,color:"black"}}>{props.type} for rent in {props.locality}</Text>
                                            </View>
                                           
                                        </View>
                                        <View style={{height:25,width:"100%",marginTop:3}} >
                                            <View style={{flexDirection:"row",height:25}}>
                                                <Text style={{fontSize:15,color:"grey"}}>Deposit:1 month rent</Text>
                                            </View>
                                           
                                        </View>
                                    </View>
                                </View>

                                <View style={{flexDirection:"row",width:"100%",height:60}}>
                                    <View style={{flexDirection:"row",height:"100%",width:"11%",paddingTop:"4%"}}>
                                        <View style={{width:30,height:30,marginLeft:3,alignItems:"center",justifyContent:"center",
                                              borderRadius:50,backgroundColor:"#00FF99"}}><Icon name="bed" size={20}   />
                                         </View>
                                         <View style={{width:30,height:30,marginLeft:3,alignItems:"center",justifyContent:"center",
                                              borderRadius:50,backgroundColor:"#00FF99"}}><Icon name="tv" size={20}  />
                                         </View>
                                         <View style={{width:30,height:30,marginLeft:3,alignItems:"center",justifyContent:"center",
                                              borderRadius:50,backgroundColor:"#00FF99"}}><Icon name="couch" size={20}  />
                                         </View>
                                         <View style={{width:30,height:30,marginLeft:3,alignItems:"center",justifyContent:"center",
                                              borderRadius:50,backgroundColor:"#00FF99"}}><Icon name="wifi" size={20}  />
                                         </View>
                                    </View>
                               </View>

                            </View>
                            <View style={{flexDirection:"row-reverse",justifyContent:"space-between"}}>
                                <View style={{width:"58%"}} >
                                    <TouchableOpacity activeOpacity={0.8} style={{height:40,backgroundColor:"#1dd38f",width:"75%",alignItems:"center",justifyContent:"center",borderRadius:4,marginLeft:"25%"}}>
                                        <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>Contact</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{paddingTop:"3%",width:"42%"}}>
                                    <Text style={{fontSize:17,textTransform:"capitalize"}}>{props.ownername}</Text>
                                </View>
                            </View>
                        </View>
            )
    }

export default Resultcontent;