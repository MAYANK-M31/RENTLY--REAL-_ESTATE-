import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ActivityIndicator,
    Image,
    StatusBar,
    Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from "react-native-image-picker";

import Icon from "react-native-vector-icons/FontAwesome5";
import Detailpage from "./Detailpage"

class PropertySuccess extends Component {

    constructor(props) {
        super(props);
        this.state={
            data:this.props.route.params.id
        }
    }

    componentDidMount=async()=>{
    //     console.log(this.props.route.params.type)
    //     console.log(this.props.route.params.price)
    //     console.log(this.props.route.params.location)
    //     console.log(this.props.route.params.name)
    //     console.log(this.props.route.params.mobile)
        this.setState({data:this.props.route.params.id})
       
        
        
       }
    

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: "white", navbarHidden: true }}>
                <StatusBar barStyle="dark-content" />
                <View style={{ height: 55, elevation: 2, flexDirection: "row", padding: 10 }} >
                    <View style={{ width: "12%", justifyContent: "center", paddingLeft: "1%" }} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
                            <Icon name="times" size={25} />
                        </TouchableOpacity>
                    </View>
                  
                </View >


                <View duration={300} style={{ flex: 1, backgroundColor: "white" }}>
                    <View style={{ flex: 1, paddingHorizontal: "5%" }}>
                        <View style={{ flex: 1, paddingTop: "5%" }}>
                            <View style={{ flex: 0.3, width: "100%", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 27, color: "grey" }} >YOUR PROPERTY HAS BEEN LISTED SUCCESFULLY !</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detailpage',{Data:this.state.data.replace(/['"]+/g, '')})} style={{ backgroundColor: '#2a65ea', width: "100%", height: 50, borderRadius: 10, elevation: 5, borderWidth: 0.1, borderColor: "black" }}>
                            <LinearGradient style={{ justifyContent: "center", height: "100%", paddingHorizontal: "5%",borderRadius:10 }} start={{ x: 0, y: -5 }} end={{ x: 2, y: 2 }} colors={['#00efb4','blue']}  >
                                <Text style={{ fontSize: 20, fontWeight: "normal", textAlign: "center", color: "white" }}>Preview Your Property</Text>
                            </LinearGradient>
                        </TouchableOpacity>


                    </View>
                    <View style={{ flex: 0.4, height: 150, width: "100%", justifyContent: "flex-end" }} >

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ backgroundColor: '#2a65ea', width: "100%", height: 50, borderRadius: 10, elevation: 5, borderWidth: 0.1, borderColor: "black" }}>
                            <LinearGradient style={{ justifyContent: "center", height: "100%", paddingHorizontal: "5%" }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2a65ea', '#2a65ea']}  >
                                <Text style={{ fontSize: 20, fontWeight: "normal", textAlign: "center", color: "white" }}>DONE</Text>
                            </LinearGradient>
                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        );
    }

}
export default PropertySuccess;