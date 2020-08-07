import React, { Component } from "react";
import { View, Text, Dimensions, TextInput, StyleSheet, StatusBar, Image, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from "react-native-vector-icons/Ionicons"
import { ScrollView, TouchableHighlight} from "react-native-gesture-handler";
import Category from "./Category";
import Banner from "./Offerbanners.js";
import AsyncStorage from "@react-native-community/async-storage";
import LinearGradient from "react-native-linear-gradient";
import jwt_decode from "jwt-decode";
import { SliderBox } from "react-native-image-slider-box";
import { IndicatorViewPager, PagerDotIndicator } from 'react-native-best-viewpager';
import GallerySwiper from "react-native-gallery-swiper";
import Camera from "./Gallery";
import Myadds from "./Myadds"
import Animated, { Extrapolate } from "react-native-reanimated"

const WIDTH = Dimensions.get("window").width


class Maincomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('./images/home.jpg'),
                require('./images/1805.jpg'),
                "https://image.freepik.com/free-vector/mobile-delivery-service-online-app-isometric_107791-728.jpg",


            ]
        };
        this.scrollY = new Animated.Value(0)
        this.diffclamp = Animated.diffClamp(this.scrollY, 0, 60)
        this.position = Animated.interpolate(this.diffclamp, {
            inputRange: [0,120,],
            outputRange: [0, -120],
            extrapolate: Extrapolate.CLAMP
        })

    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={2} />;
    }

    // componentDidMount= async () =>{
    //     const token = await AsyncStorage.getItem("usertoken")
    //     const value = jwt_decode(token)
    //     console.warn(value._id)
    //     // if(token){
    //     //   this.setState({isloggedin:true})

    //     // }else{
    //     //   this.setState({isloggedin:false})
    //     // }

    //   }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white"}} >
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Animated.View style={{ transform: [{ translateY: this.position }],elevation:4,zIndex:1 }} >
                    <View style={{
                        height: 60, width: "100%", backgroundColor: "white",
                        flexDirection: "row", alignItems: "center",
                        justifyContent: "space-between", padding: 10
                    }}>

                        <Text style={{
                            fontSize: 30, marginBottom: 2, left: 0, fontWeight: "normal",
                            color: "#2c385c"
                        }}>Rently
                        </Text>
                        <Icon name="dehaze" onPress={() => { this.props.navigation.openDrawer() }} size={30} />
                    </View>

                    <View style={{ backgroundColor: "white", padding: 10, paddingRight: 10 }}>
                        <TouchableOpacity  activeOpacity={1} onPress={() => { this.props.navigation.navigate('Searchpage') }}>
                            <View onPress={() => { navigation.navigate('Searchpage') }} style={{
                                height: 49, width: "100%", backgroundColor: "white",
                                flexDirection: "row", alignItems: "center",
                                justifyContent: "flex-start", padding: 10,
                                borderColor: "silver", borderWidth: 0.2,
                                borderRadius: 5, elevation: 0
                            }}>
                                <Icon name="search" color="black" size={25} />
                                <Text style={{ color: "silver", fontSize: 17 }}> Search for Locality or Landmark</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animated.View>

                <Animated.ScrollView style={{  marginTop: 0, height: "100%",position:"absolute" }} onScroll={(e) => { this.scrollY.setValue(e.nativeEvent.contentOffset.y) }} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                    <View style={{ height:120 }} >
                        
                    </View>
                    <View style={{ flex: 1, height: 190, width: "100%", backgroundColor: "white", padding: 15 }}>
                        <View style={{ flex: 1, height: "100%", width: "100%", backgroundColor: "white", borderRadius: 10 }} >
                            <LinearGradient style={{ height: "100%", borderRadius: 10 }} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#2E9EFF', '#16C886']}  >
                                <View style={{ height: 190, width: 360 }}>
                                    <IndicatorViewPager style={{ height: 140 }} indicator={this._renderDotIndicator()}>
                                        <View style={{ flex: 1, height: 60, width: "100%", paddingTop: 0, flexDirection: "row" }}>

                                            <View style={{ flex: 1, padding: 10, height: "100%", width: "25%", marginLeft: 3, alignItems: "center", justifyContent: "center" }}>
                                                <View style={{ flex: 0.4, alignItems: "center", justifyContent: "center", width: "100%" }} >
                                                    <Icon name="home" size={40} color="white" />
                                                </View>
                                                <View style={{ flex: 0.3, width: "100%", alignItems: "center", justifyContent: "center" }} >
                                                    <Text style={{ color: "white", fontWeight: "normal", fontSize: 14 }} >Pay Rent</Text>
                                                </View>
                                            </View>


                                            <View style={{ flex: 1, padding: 10, height: "100%", width: "25%", marginLeft: 3, alignItems: "center", justifyContent: "center" }}>
                                                <View style={{ flex: 0.4, alignItems: "center", justifyContent: "center", width: "100%" }} >
                                                    <Icon name="credit-card" size={40} color="white" />
                                                </View>
                                                <View style={{ flex: 0.3, width: "100%", alignItems: "center", justifyContent: "center" }} >
                                                    <Text style={{ color: "white", fontWeight: "normal", fontSize: 14 }} >Pay Bills</Text>
                                                </View>
                                            </View>


                                            <View style={{ flex: 1, padding: 10, height: "100%", width: "25%", marginLeft: 3, alignItems: "center", justifyContent: "center" }}>
                                                <View style={{ flex: 0.4, alignItems: "center", justifyContent: "center", width: "100%" }} >
                                                    <Icon name="local-shipping" size={40} color="white" />
                                                </View>
                                                <View style={{ flex: 0.3, width: "100%", alignItems: "center", justifyContent: "center" }} >
                                                    <Text style={{ color: "white", fontWeight: "normal", fontSize: 14 }} >Pack & move</Text>
                                                </View>
                                            </View>

                                        </View>

                                        <View style={{ flex: 1, height: "100%", width: "100%", flexDirection: "row" }}>

                                            <View style={{ flex: 1, padding: 10, height: "100%", width: "25%", marginLeft: 3, alignItems: "center", justifyContent: "center" }}>
                                                <View style={{ flex: 0.4, alignItems: "center", justifyContent: "center", width: "100%" }} >
                                                    <Ionicons name="ios-wallet" size={40} color="white" />
                                                </View>
                                                <View style={{ flex: 0.3, width: "100%", alignItems: "center", justifyContent: "center" }} >
                                                    <Text style={{ color: "white", fontWeight: "normal", fontSize: 14 }} >Wallet</Text>
                                                </View>
                                            </View>


                                            <View style={{ flex: 1, padding: 10, height: "100%", width: "25%", marginLeft: 3, alignItems: "center", justifyContent: "center" }}>
                                                <View style={{ flex: 0.4, alignItems: "center", justifyContent: "center", width: "100%" }} >
                                                    <Ionicons name="ios-pricetags" size={40} color="white" />
                                                </View>
                                                <View style={{ flex: 0.3, width: "100%", alignItems: "center", justifyContent: "center" }} >
                                                    <Text style={{ color: "white", fontWeight: "normal", fontSize: 14 }} >Offers</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 1, padding: 10, height: "100%", width: "25%", marginLeft: 3, alignItems: "center", justifyContent: "center" }}  >

                                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate("Addpropertyscreens")} style={{ flex: 0.4, alignItems: "center", justifyContent: "center", width: "100%" }} >
                                                    <Ionicons name="ios-add-circle" size={40} color="white" />
                                                </TouchableOpacity>

                                                <View style={{ flex: 0.3, width: "100%", alignItems: "center", justifyContent: "center" }} >

                                                    <Text style={{ color: "white", fontWeight: "normal", fontSize: 14 }} >Add Property</Text>
                                                </View>


                                            </View>

                                        </View>

                                    </IndicatorViewPager>

                                </View>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={{ flex: 1, height: 150, width: "100%" }}>
                        <View style={{ flex: 1, height: "100%", width: "100%", backgroundColor: "white", padding: 0 }}>
                            <SliderBox disableOnPress={true} imageLoadingColor="#00000000" ImageComponentStyle={{ borderRadius: 0, borderColor: "white", borderWidth: 0, height: "100%", width: "100%" }} dotStyle={{ height: 0, width: 0, borderRadius: 0 }} autoplay={true} circleLoop={true} images={this.state.images} />
                        </View>
                    </View>






                    <View style={{ flex: 1, backgroundColor: "white", marginBottom: 20 }}>

                        {/* <View style={{
                            flex: 1, height: 90, width: "100%",
                            paddingTop: 5, paddingLeft: 10,
                            paddingRight: 10, marginTop: 7,
                            flexDirection: "row", justifyContent: "space-between"
                        }}>

                            <View style={{ height: "100%", width: "15.5%" }}>
                                <View style={{
                                    flex: 2, width: 55, marginLeft: 3, alignItems: "center", justifyContent: "center",
                                    borderRadius: 50, backgroundColor: "pink"
                                }}><Icon name="home" size={40} color="black" /></View>
                                <View style={{ flex: 1, alignItems: "center", paddingTop: 5 }}><Text>Pay Rent</Text></View>
                            </View>

                            <View style={{ height: "100%", width: "15%" }}>
                                <View style={{
                                    flex: 2, width: 55, marginLeft: 3, alignItems: "center", justifyContent: "center",
                                    borderRadius: 50, backgroundColor: "#fcde9f"
                                }}><Icon name="credit-card" size={40} /></View>
                                <View style={{ flex: 1, alignItems: "center", paddingTop: 5 }}><Text>Pay Bills</Text></View>
                            </View>

                            <View style={{ height: "100%", width: "15%" }}>
                                <View style={{
                                    flex: 2, width: 55, marginLeft: 3, alignItems: "center", justifyContent: "center",
                                    borderRadius: 50, backgroundColor: "#C5E946"
                                }}><Icon name="local-shipping" size={40} /></View>
                                <View style={{ flex: 1, alignItems: "center", paddingTop: 5 }}><Text>Shipping</Text></View>
                            </View>

                            <View style={{ height: "100%", width: "15%" }}>
                                <View style={{
                                    flex: 2, width: 55, marginLeft: 3, alignItems: "center", justifyContent: "center",
                                    borderRadius: 50, backgroundColor: "#00FF99"
                                }}><Icon name="add" size={40} /></View>
                                <View style={{ flex: 1, alignItems: "center", paddingTop: 5 }}><Text>Join</Text></View>
                            </View>

                            <View style={{ height: "100%", width: "15%" }}>
                                <View style={{
                                    flex: 2, width: 55, marginLeft: 3, alignItems: "center", justifyContent: "center",
                                    borderRadius: 50, backgroundColor: "pink"
                                }}><Icon name="loyalty" size={40} /></View>
                                <View style={{ flex: 1, alignItems: "center", paddingTop: 5 }}><Text>Offers</Text></View>
                            </View>

                        </View> */}

                        <View style={{
                            height: "5%", width: "100%", paddingLeft: "4%",
                            justifyContent: "center", alignItems: 'flex-start', paddingTop: "2%"
                        }}>
                            <Text style={{ fontSize: 23, fontWeight: "bold", color: "#2a3659" }} >Promoted Property</Text>
                        </View>


                        <View style={{ flex: 1, height: 170, width: "100%", justifyContent: "center" }}>
                            <ScrollView snapToInterval={WIDTH - WIDTH / 3.4} contentContainerStyle={{ height: "100%", width: WIDTH * 2, paddingRight: 10 }} decelerationRate={0.8} horizontal={true} scrollEventThrottle={16} showsHorizontalScrollIndicator={false}>

                                <View style={{ height: "100%", width: "20%", paddingLeft: 10, paddingVertical: 10 }}>
                                    <Image source={require("./images/15.jpeg")} style={{ width: "100%", height: "100%", borderRadius: 15 }} />
                                </View>
                                <View style={{ height: "100%", width: "20%", paddingLeft: 10, paddingVertical: 10 }}>
                                    <Image source={require("./images/17.jpeg")} style={{ width: "100%", height: "100%", borderRadius: 15 }} />
                                </View>
                                <View style={{ height: "100%", width: "20%", paddingLeft: 10, paddingVertical: 10 }}>
                                    <Image source={require("./images/14.jpeg")} style={{ width: "100%", height: "100%", borderRadius: 15 }} />
                                </View>
                                <View style={{ height: "100%", width: "20%", paddingLeft: 10, paddingVertical: 10 }}>
                                    <Image source={require("./images/18.jpeg")} style={{ width: "100%", height: "100%", borderRadius: 15 }} />
                                </View>
                                <View style={{ height: "100%", width: "20%", paddingLeft: 10, paddingVertical: 10 }}>
                                    <Image source={require("./images/12.jpeg")} style={{ width: "100%", height: "100%", borderRadius: 15 }} />
                                </View>

                            </ScrollView>
                        </View>

                        <View style={{
                            height: "5%", width: "100%", paddingLeft: "4%",
                            justifyContent: "center", alignItems: 'flex-start', paddingTop: "2%"
                        }}>
                            <Text style={{ fontSize: 23, fontWeight: "bold", color: "#2a3659" }} >Trending Places</Text>
                        </View>

                        <View style={{ flex: 1, height: 170, width: "100%", justifyContent: "center" }}>
                            <ScrollView snapToInterval={WIDTH + 8} contentContainerStyle={{ height: "100%", width: WIDTH * 4.06 }} decelerationRate={0.8} horizontal={true} scrollEventThrottle={16} showsHorizontalScrollIndicator={false}>
                                <Banner image={require("./images/15.jpeg")} />
                                <Banner image={require("./images/17.jpeg")} />
                                <Banner image={require("./images/12.jpeg")} />
                                <Banner image={require("./images/19.jpeg")} />
                            </ScrollView>
                        </View>
                        <View style={{
                            height: "7%", width: "100%", paddingLeft: "4%",
                            justifyContent: "center", alignItems: 'flex-start', paddingTop: "0%"
                        }}>
                            <Text style={{ fontSize: 23, fontWeight: "bold", color: "#2a3659" }} >Daily Offers</Text>
                        </View>
                        <View style={{ height: "100%", width: "100%", paddingRight: "0%", backgroundColor: "white", marginBottom: "10%" }}>
                            <ScrollView snapToInterval={WIDTH - 45} snapToAlignment={"center"} decelerationRate={0.8} contentContainerStyle={{ height: "100%", width: "270%" }} horizontal={true} scrollEventThrottle={0}
                                showsHorizontalScrollIndicator={false}>
                                <Category imageuri={require("./images/1.jpeg")} name="HOUSE" />
                                <Category imageuri={require("./images/3.jpeg")} name="FLATS" />
                                <Category imageuri={require("./images/6.jpeg")} name="FLOORS" />
                            </ScrollView>
                        </View>
                    </View>

                    {/* <GallerySwiper style={{ height: 200, width: "100%" }}
                        images={[
                            { source: require("./images/4.jpeg"), dimensions: { width: 1500, height: 1920 } },
                            { source: require("./images/5.jpeg"), dimensions: { width: "100%", height: 1920 } },
                            { source: require("./images/6.jpeg"), dimensions: { width: "100%", height: 1920 } }

                        ]} /> */}
                    {/* <Myadds/>   */}


                </Animated.ScrollView>
                {/* <Camera/> */}
            </View>

        )
    }


}



export default Maincomponent; 