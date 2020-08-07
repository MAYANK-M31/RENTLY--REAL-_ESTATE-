import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, StatusBar, Animated } from 'react-native';
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import LinearGradient from "react-native-linear-gradient"



class Home extends Component {
    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY({ x: -500, y: 0 })
        Animated.spring(this.position,{
            toValue:{x:0,y:0}
        }).start()

        this.position2 = new Animated.ValueXY({ x: 0, y: 500 })
        Animated.spring(this.position2,{
            toValue:{x:0,y:0}
        }).start()
    }

    render() {
        
        return (

            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 2, y: 0 }} colors={['#273254', '#202946', '#192038']} style={{ flex: 1, backgroundColor: "#2c385c" }} >
                <StatusBar backgroundColor="#273254" />
              
                <View style={{ flex: 2 }}>
                    <Animated.View style={this.position.getLayout()} >
                        <Text
                            animation="bounceIn" duration={1000} iterationCount={1} style={{ textAlign: "center", fontSize: 80, color: "white", fontWeight: "bold", marginTop: 110 }}>
                            Rently
                    </Text>
                    </Animated.View>
                </View>

                <Animated.View style={[{flex: 1, backgroundColor: "#e2e5de", borderTopRightRadius: 50, borderTopLeftRadius: 50, paddingVertical: 50, padding: 30 },this.position2.getLayout()] }>

                    <Text style={{ fontSize: 38, fontWeight: "bold", color: "#2c385c" }}>
                        Finding Home Now Became Easy!
                        </Text>
                    <View style={{
                        flex: 1, justifyContent: "flex-end",
                        alignItems: "flex-end"
                    }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 10, y: 0 }} colors={['#273254', '#202946', '#192038']} style={{

                            width: 190, height: 50, borderRadius: 50
                        }}>
                            <TouchableOpacity
                                activeOpacity={0.95}
                                onPress={() => this.props.navigation.navigate('Login')}
                                style={{

                                    width: 190, height: 50, borderRadius: 50
                                }}>
                                <Text style={{ fontSize: 25, textAlign: "center", marginTop: 7, color: "white" }}>Get Started</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                </Animated.View>
            </LinearGradient>


        );
    }


};

export default Home;
