import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ActivityIndicator,
    Image,
    StatusBar
  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon  from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";


class Insideregister extends Component{
  
    constructor(props){
      super(props);
      this.state={
        name:"",
        email:"",
        phoneno:"",
        password:"",
        loading:false,
        status:"",
        removeview:false
      }
    }
  
   
    position=()=>{
        this.setState({removeview:true})
        this.setState({status:""})
       }
  
    register= async ()=>{
        Keyboard.dismiss();
        const registerdetail = {
        name:this.state.name,
        email:this.state.email,
        phone:this.state.phoneno,
        password:this.state.password
      }
        if(this.state.name == "" && this.state.email == "" && this.state.phoneno == "" && this.state.password == ""){
            this.setState({status:"Please Fill The Details"})
        }else{
            console.log(this.state.phoneno)
            this.setState({loading:true})
             axios.post("https://cryptic-taiga-83080.herokuapp.com/data/register",registerdetail)
            .then(res=>{
              this.setState({status:res.data,loading:false})
              if(this.state.status === 200){
                  this.setState({status:"Signed Up Successfully"})
                  this.props.navigation.navigate("Home")
                  alert("Signed Up Successfully")
              }else{
                  this.setState({status:this.state.status})
              }
            })
        }
    }
  
  
  
    render(){
      return (
        
          <View  style={{flex:1,backgroundColor:"white",navbarHidden:true}}>
              <StatusBar   barStyle="dark-content" />
             { this.state.removeview == false ? (
                <>
                    <Animatable.View animation="bounceIn" duration={500} iterationCount={1} style={{flex:1.5,width:"100%",alignItems:"center",justifyContent:"center"}} >
                        <Image style={{height:"100%",width:"100%"}} source={require("./images/vector2.png")} />
                    </Animatable.View>
              
  
            <Animatable.View animation="fadeInUpBig" duration={300} style={{flex:2,backgroundColor:"white",borderTopRightRadius:30,borderTopLeftRadius:30,paddingHorizontal:"5%"}}>
                  <View style={{alignItems:"center"}}>
                     <TextInput onFocus={this.position} placeholder="Full Name"  autoCorrect={false} autoCapitalize="none"  returnKeyType="next"   onChangeText={name=>{this.setState({name})}}  value={this.state.name}          style={{backgroundColor:'white',width:"100%",fontSize:18,borderRadius:10,borderColor: "lightgrey", borderWidth:0.5,padding:15,elevation:1,marginTop:5}} />
                     <TextInput onFocus={this.position} placeholder="Email"      autoCorrect={false} autoCapitalize="none" returnKeyType="next" blurOnSubmit={true}  autoFocus ={this.state.focuses}  onChangeText={email=>{this.setState({email})}} value={this.state.email}      style={{backgroundColor:'white',width:"100%",paddingLeft:25,fontSize:18,borderRadius:10,borderColor: "lightgrey", borderWidth:0.5,marginTop:10,padding:15,elevation:1}}/>
                     <TextInput onFocus={this.position} placeholder="MOBILE NO."  autoCorrect={false} autoCapitalize="none"  returnKeyType="next" keyboardType="phone-pad"  onChangeText={phoneno=>{this.setState({phoneno})}}  value={this.state.phoneno}          style={{backgroundColor:'white',width:"100%",paddingLeft:25,fontSize:18,borderRadius:10,borderColor: "lightgrey", borderWidth:0.5,marginTop:10,padding:15,elevation:1}} />
                     <TextInput onFocus={this.position} placeholder="PASSWORD" secureTextEntry={true}   autoCorrect={false} autoCapitalize="none" returnKeyType="next" blurOnSubmit={true}  autoFocus ={this.state.focuses}  onSubmitEditing={this.login}   onChangeText={password=>{this.setState({password})}} value={this.state.password} style={{backgroundColor:'white',width:"100%",paddingLeft:25,fontSize:18,borderRadius:10,borderColor: "lightgrey", borderWidth:0.5,marginTop:10,padding:15,elevation:1}}/>
                  </View>
               { this.state.loading ?
        
                <View style={{flex:1,marginTop:"3%",width:"100%"}} >
                    <TouchableOpacity activeOpacity={1}  style={{backgroundColor:'#1dd38f',width:"100%",height:50,borderRadius:10,justifyContent:"center",elevation:5,borderWidth:0.1,borderColor:"black"}}>
                        <LinearGradient style={{height:"100%",paddingHorizontal:"5%",borderRadius:10}} start={{x: -2, y: 0}}  end={{x: 1, y: 0}}   colors={['#16C886', '#11ece5']}   >
                            <ActivityIndicator  size={45} color="white"/>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                 :
                 <View style={{flex:1,height:600}} >
                  <View style={{flex:1}}>
                    <TouchableOpacity  onPress={this.register}  style={{backgroundColor:'#1dd38f',width:"100%",height:50,borderRadius:10,marginTop:10,elevation:5,borderWidth:0.1,borderColor:"black"}}>
                        <LinearGradient style={{height:"100%",paddingHorizontal:"5%",borderRadius:10}} start={{x: -2, y: 0}}  end={{x: 1, y: 0}}   colors={['#16C886', '#11ece5']}   >
                            <Text style={{fontSize:24,fontWeight:"normal",textAlign:"center",marginTop:7,color:"white"}}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex:1,justifyContent:"flex-start",alignItems:"center"}}>
                       <Text style={{fontSize:18,color:"#ff8080",textTransform:"capitalize"}}>{this.state.status}</Text>
                  </View>
                </View>
              }  
            
            </Animatable.View>
                </>
             ):(
            
                <Animatable.View animation="fadeInUpBig" duration={300} style={{flex:1,backgroundColor:"white",borderTopRightRadius:30,borderTopLeftRadius:30,paddingHorizontal:"5%"}}>
         
                    <View style={{alignItems:"center",justifyContent:"center",height:"92%"}}>
                         <View style={{height:50,width:"100%",alignItems:"center",justifyContent:"center"}} >
                            <Text style={{fontSize:30,fontWeight:"bold"}} >SIGNUP</Text>
                         </View>
                  
                         <TextInput onFocus={this.position} autoFocus={true} placeholder="Full Name"  autoCorrect={false} autoCapitalize="none"  returnKeyType="next"   onChangeText={name=>{this.setState({name})}}  value={this.state.name}          style={{backgroundColor:'white',width:"100%",fontSize:18,borderRadius:10,borderColor: "lightgrey", borderWidth:0.5,padding:15,elevation:1,marginTop:5}} />
                         <TextInput onFocus={this.position}  placeholder="Email"      autoCorrect={false} autoCapitalize="none" returnKeyType="next" blurOnSubmit={true}  autoFocus ={this.state.focuses}  onChangeText={email=>{this.setState({email})}} value={this.state.email}      style={{backgroundColor:'white',width:"100%",paddingLeft:25,fontSize:18,borderRadius:10,borderColor: "lightgrey", borderWidth:0.5,marginTop:10,padding:15,elevation:1}}/>
                         <TextInput onFocus={this.position}  placeholder="MOBILE NO."  autoCorrect={false} autoCapitalize="none"  returnKeyType="next" keyboardType="phone-pad"  onChangeText={phoneno=>{this.setState({phoneno})}}  value={this.state.phoneno}          style={{backgroundColor:'white',width:"100%",paddingLeft:25,fontSize:18,borderRadius:10,borderColor: "lightgrey", borderWidth:0.5,marginTop:10,padding:15,elevation:1}} />
                         <TextInput onFocus={this.position}  placeholder="PASSWORD" secureTextEntry={true}   autoCorrect={false} autoCapitalize="none" returnKeyType="next" blurOnSubmit={true}  autoFocus ={this.state.focuses}  onSubmitEditing={this.login}   onChangeText={password=>{this.setState({password})}} value={this.state.password} style={{backgroundColor:'white',width:"100%",paddingLeft:25,fontSize:18,borderRadius:10,borderColor: "lightgrey", borderWidth:0.5,marginTop:10,padding:15,elevation:1}}/>
                              
                           { this.state.loading ?
            
                             <View style={{flex:1,marginTop:"3%",width:"100%"}} >
                                <TouchableOpacity activeOpacity={1}  style={{backgroundColor:'#1dd38f',width:"100%",height:50,borderRadius:10,justifyContent:"center",elevation:5,borderWidth:0.1,borderColor:"black"}}>
                                    <LinearGradient style={{height:"100%",paddingHorizontal:"5%",borderRadius:10}} start={{x: 0, y: 0}}  end={{x: 1, y: 0}}   colors={['#16C886', '#2E9EFF']}  >
                                      <ActivityIndicator  size={45} color="white"/>
                                    </LinearGradient>
                                </TouchableOpacity>
                             </View>
                             :
                             <View style={{height:150,width:"100%"}} >
                              <View>
                                <TouchableOpacity  onPress={this.register}  style={{backgroundColor:'#1dd38f',width:"100%",height:50,borderRadius:10,marginTop:10,elevation:5,borderWidth:0.1,borderColor:"black"}}>
                                <LinearGradient style={{height:"100%",paddingHorizontal:"5%",borderRadius:10}} start={{x: 0, y: 0}}  end={{x: 1, y: 0}}   colors={['#16C886', '#2E9EFF']}  >
                                     <Text style={{fontSize:24,fontWeight:"normal",textAlign:"center",marginTop:7,color:"white"}}>Sign Up</Text>
                                </LinearGradient>
                                </TouchableOpacity>
                              </View>
                              <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
                                   <Text style={{fontSize:18,color:"#ff8080",textTransform:"capitalize"}}>{this.state.status}</Text>
                              </View>
                            </View>
                          }  
                    </View>
            </Animatable.View>
    
             ) 
             } 
                 
          </View>
      );
    };
  }
    export default Insideregister;