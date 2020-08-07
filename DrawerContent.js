import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons"
import LinearGradient from "react-native-linear-gradient";
import { ScrollView, TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import jwt_decode from "jwt-decode";
import axios from "axios";



class DrawerContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isloggedin: false,
            tokenid: null,
            result: ''

        }
    }


    componentDidMount = async () => {
        const token = await AsyncStorage.getItem("usertoken")
        const value = jwt_decode(token)
        if (token) {
            this.setState({ tokenid: value._id })
            // console.warn(this.state.tokenid)
            await axios.get("https://cryptic-taiga-83080.herokuapp.com/data/" + `${this.state.tokenid}`)
                .then(res => {
                    // console.warn(res.data)
                    this.setState({ result: res.data })
                })

        } else {
            this.setState({result:null })
        }
    }

    logoutkey = async () => {
        await AsyncStorage.removeItem("usertoken", () => { alert("You are Logged Out") })
        this.setState({result:""})
        this.props.navigation.closeDrawer();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Insideuserform')} activeOpacity={0.8} >
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FF00BC', '#FF0000']}  >
                        <View style={{ height: 90, alignItems: "center", justifyContent: "space-between", flexDirection: "row", paddingHorizontal: "6%" }}>

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Avatar size={50} rounded source={{
                                    uri:
                                        'https://randomuser.me/api/portraits/men/41.jpg',
                                }}
                                />
                                <View style={{ width: "80%" }} >
                                    <Text style={{ fontSize: 21, color: "white", marginLeft: "10%" }} >Hi {this.state.result.name}</Text>
                                </View>
                            </View>

                            <Icon size={40} color="white" name="angle-right" />
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Addpropertyscreens")} >
                <View style={{ height: 80, alignItems: "center", borderWidth: 0.8, borderColor: "white", borderBottomColor: "lightgrey", justifyContent: "space-between", flexDirection: "row", paddingHorizontal: "6%" }}>

                    <View style={{ flexDirection: "row", alignItems: "center", flexDirection: "row" }}>
                        <View style={{ borderRadius: 50, backgroundColor: "black", width: 50, height: 50, alignItems: "center", justifyContent: "center" }} >
                            <Icon name="home" color="gold" size={32} />
                        </View>
                        <Text style={{ fontSize: 18, color: "black", marginLeft: "10%" }} >List Your Propery </Text>
                    </View>

                    <Icon size={40} color="white" name="angle-right" />
                </View>
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={100} >
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("ListingScreen") }} >
                            <View style={{ height: 60, alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>

                                <View style={{ flexDirection: "row", alignItems: "center", flexDirection: "row" }}>
                                    <View style={{ borderRadius: 50, backgroundColor: "white", width: 50, height: 50, alignItems: "center", justifyContent: "center" }} >
                                        <Icon name="user-circle" color="silver" size={27} />
                                    </View>
                                    <Text style={{ fontSize: 18, color: "black", marginLeft: "6%" }} >My Listings </Text>
                                </View>

                            </View>
                        </TouchableOpacity>

                        <View style={{ height: 40, alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>

                            <View style={{ flexDirection: "row", alignItems: "center", flexDirection: "row" }}>
                                <View style={{ borderRadius: 50, backgroundColor: "white", width: 50, height: 50, alignItems: "center", justifyContent: "center" }} >
                                    <Icon name="heart" color="silver" size={25} />
                                </View>
                                <Text style={{ fontSize: 18, color: "black", marginLeft: "5%" }} >Saved Property </Text>
                            </View>

                        </View>

                        <View style={{ height: 60, alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>

                            <View style={{ flexDirection: "row", alignItems: "center", flexDirection: "row" }}>
                                <View style={{ borderRadius: 50, backgroundColor: "white", width: 50, height: 50, alignItems: "center", justifyContent: "center" }} >
                                    <Icon name="phone" color="silver" size={28} />
                                </View>
                                <Text style={{ fontSize: 18, color: "black", marginLeft: "5%" }} >Owner's Contact </Text>
                            </View>

                        </View>

                        <View style={{ height: 50, alignItems: "flex-start", justifyContent: "space-between", flexDirection: "row" }}>

                            <View style={{ flexDirection: "row", alignItems: "center", flexDirection: "row" }}>
                                <View style={{ borderRadius: 50, backgroundColor: "white", width: 50, height: 30, alignItems: "center", justifyContent: "center" }} >
                                    <Icon name="whatsapp" color="silver" size={30} />
                                </View>
                                <Text style={{ fontSize: 18, color: "black", marginLeft: "7%" }} >My Chats</Text>
                            </View>

                        </View>

                        <View style={{ height: 50, alignItems: "flex-start", justifyContent: "space-between", flexDirection: "row", borderWidth: 0.8, borderColor: "white", borderBottomColor: "lightgrey" }}>

                            <View style={{ flexDirection: "row", alignItems: "center", flexDirection: "row" }}>
                                <View style={{ borderRadius: 50, backgroundColor: "white", width: 50, height: 30, alignItems: "center", justifyContent: "center" }} >
                                    <Icon name="credit-card" color="silver" size={25} />
                                </View>
                                <Text style={{ fontSize: 18, color: "black", marginLeft: "7%" }} >Wallet</Text>
                            </View>

                        </View>

                        <View style={{ height: 100, alignItems: "flex-start", borderWidth: 0.8, borderColor: "white", borderBottomColor: "lightgrey" }}>
                            <View style={{ height: 30 }} >
                                <Text style={{ fontSize: 15, color: "grey", marginLeft: "3%", marginVertical: "2%" }} >Services</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", flexDirection: "row" }}>
                                <View style={{ width: 50, height: 40, alignItems: "center", justifyContent: "flex-start" }} >
                                    <Icon name="truck" color="silver" size={28} />
                                </View>
                                <View style={{ flex: 1, height: 50 }} >
                                    <Text style={{ fontSize: 18, color: "black", marginLeft: "7%" }} >Move and Packers</Text>
                                    <Text style={{ fontSize: 12, color: "grey", marginLeft: "7%" }} >Shifting Home Made Easy</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ height: 100, alignItems: "flex-start", borderWidth: 0.8, borderColor: "white", borderBottomColor: "lightgrey" }}>
                            <View style={{ height: 30 }} >
                                <Text style={{ fontSize: 15, color: "grey", marginLeft: "3%", marginVertical: "2%" }} >Invite and Earn Rewards</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", flexDirection: "row" }}>
                                <View style={{ width: 50, height: 40, alignItems: "center", justifyContent: "flex-start" }} >
                                    <Ionicons name="ios-person-add" color="silver" size={30} />
                                </View>
                                <View style={{ flex: 1, height: 50 }} >
                                    <Text style={{ fontSize: 18, color: "black", marginLeft: "7%" }} >Refer to People</Text>
                                    <Text style={{ fontSize: 12, color: "grey", marginLeft: "7%" }} >Earn Rently rupee</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ height: 140, alignItems: "flex-start", borderWidth: 0.8, borderColor: "white", borderBottomColor: "lightgrey" }}>
                            <View style={{ height: 30 }} >
                                <Text style={{ fontSize: 15, color: "grey", marginLeft: "3%", marginVertical: "2%" }} >Support </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", flexDirection: "row" }}>
                                <View style={{ width: 50, height: 40, alignItems: "center", justifyContent: "flex-start" }} >
                                    <Ionicons name="md-headset" color="silver" size={28} />
                                </View>
                                <View style={{ flex: 1, height: 50 }} >
                                    <Text style={{ fontSize: 18, color: "black", marginLeft: "7%" }} >Customer Care</Text>
                                    <Text style={{ fontSize: 12, color: "grey", marginLeft: "7%" }} >24 hour Support</Text>
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", flexDirection: "row" }}>
                                <View style={{ width: 50, height: 40, alignItems: "center", justifyContent: "flex-start" }} >
                                    <Icon name="pencil" color="silver" size={28} />
                                </View>
                                <View style={{ flex: 1, height: 50 }} >
                                    <Text style={{ fontSize: 18, color: "black", marginLeft: "7%" }} >Feedback</Text>
                                    <Text style={{ fontSize: 12, color: "grey", marginLeft: "7%" }} >Help Us To Improve Our Service</Text>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity onPress={this.logoutkey} activeOpacity={0.5} >
                            <View style={{ height: 60, alignItems: "flex-start", borderWidth: 0.8, borderColor: "white", borderBottomColor: "lightgrey" }}>
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", flexDirection: "row" }}>

                                    <View style={{ width: 50, height: 55, alignItems: "center", justifyContent: "center" }} >
                                        <Ionicons name="ios-exit" color="black" size={30} />
                                    </View>
                                    <View style={{ height: 50, justifyContent: "center" }} >
                                        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }} >Logout</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default DrawerContent;