import React, { Component } from "react";
import { View, Animated, Text, StatusBar, } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ActivityIndicator } from "react-native-paper";

class IntroLogo extends Component{
    
    render(){
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 2, y: 0 }} colors={['#273254', '#202946', '#192038']} style={{ flex: 1, backgroundColor: "#2c385c",justifyContent:"center" }} >
            <StatusBar backgroundColor="#273254" />

            <View style={{ flex: 0.3}}>
                <Animated.View   >
                    <Text
                   style={{ textAlign: "center", fontSize: 80, color: "white", fontWeight: "bold",color:"white" }}>
                        Rently
                    </Text>
                    <Text
                        style={{ textAlign: "center", fontSize: 14.5, color: "white", fontWeight: "normal", left:-19,top:-21 }}>
                      Finding Home Became Easy
                    </Text>
                </Animated.View>
            </View>

            <View style={{bottom:"-20%"}} >
                <ActivityIndicator size={50} color={"#11ece5"} />
            </View>

         
        </LinearGradient>
    )
        }
}

export default IntroLogo;