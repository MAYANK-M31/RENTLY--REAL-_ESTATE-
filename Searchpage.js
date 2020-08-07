import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, ActivityIndicator, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from "react-native-gesture-handler";
import Category from "./Category";
import Banner from "./Offerbanners.js";
import Resultcontent from "./Resultcontent";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage"






class Searchpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            showcross: false,
            data: [],
            loading: false,
            recent_search: [],
            recent: false
        }
        this.position = new Animated.Value(0);
        Animated.spring(this.position, {
            toValue: 1,
            useNativeDriver:true,
            duration:150,
            bounciness:100
        }).start()

        this.position1 = new Animated.Value(0);
        Animated.spring(this.position1, {
            toValue:1,
            useNativeDriver:true,
            duration:300
        }).start()

        this.position3 = new Animated.Value(0)
        Animated.spring(this.position3, {
            toValue: 1,
            useNativeDriver:true,
            duration:300
        }).start()
    }



    componentDidMount = async () => {
        const recent_search = await AsyncStorage.getItem("recent-search")
        if (recent_search !== null) {
            this.setState({ recent: true })
            this.setState({ recent_search: recent_search })
        }

        // console.log(recent_search)
    }



    select = async (item) => {
        this.setState({ search: item })
        await AsyncStorage.setItem("recent-search", item)
        this.props.navigation.navigate('Resultshownpage', { data: item })
    }

    handlesearch = async () => {
        if (this.state.search == "") {
            await AsyncStorage.setItem("recent-search", this.state.search)
            this.setState({ loading: true })
            await axios.get("https://agile-tor-28791.herokuapp.com/data/send/json/null")
                .then(res => {
                    this.setState({ showcross: false, recent: false })
                    this.setState({ data: res.data })
                    this.setState({ loading: false })


                })
        } else if (this.state.search.length > 1) {
            await AsyncStorage.setItem("recent-search", this.state.search)
            this.setState({ loading: true })
            this.setState({ showcross: true })
            await axios.get("https://agile-tor-28791.herokuapp.com/data/send/json/" + `${this.state.search}`)
                .then(res => {
                    this.setState({ data: res.data, recent: false })
                    this.setState({ loading: false })

                })
        }


    }




    render() {
        const translateX = this.position1.interpolate({
            inputRange:[0,1],
            outputRange:[500,0]
        })

        const translate1X = this.position.interpolate({
            inputRange:[0,1],
            outputRange:[500,0]
        })
        
        const translateY = this.position3.interpolate({
            inputRange:[0,1],
            outputRange:[300,0]
        })

        return (
            <View style={{ flex: 1, backgroundColor: "white" }} >
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View >


                    <View style={{
                        height: 70, width: "100%",
                        alignItems: "center", backgroundColor: "white",
                        padding: 10,
                        borderColor: "magenta"

                    }}>
                        <Animated.View style={{transform:[{translateX:translateX}]}} >
                            <View style={{
                                height: 49, width: "100%", backgroundColor: "white",
                                flexDirection: "row", alignItems: "center",
                                padding: 0,
                                borderColor: "silver", borderWidth: 0.2,
                                borderRadius: 5, elevation: 0
                            }}>


                                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ width: "10%", alignItems: "flex-start", justifyContent: "center", height: "100%", backgroundColor: "" }} >
                                    <Animated.View  style={{transform:[{translateX:translate1X}]}} >
                                        <Icon style={{ left: "25%" }} name="arrow-back" color="#2c385c" size={25} />
                                    </Animated.View>
                                </TouchableOpacity>


                                <View style={{ width: "80%" }} >
                                    <TextInput autoFocus={true} value={this.state.search}
                                        onChangeText={search => this.setState({ search, showcross: true }, this.handlesearch)} autoCapitalize={"words"}
                                        placeholder=" Search for Locality or Landmark" placeholderTextColor="silver" style={{ backgroundColor: "white", fontSize: 17, width: 300, height: 46, color: "#303846" }}
                                        onSubmitEditing={() => this.props.navigation.navigate('Resultshownpage', { data: this.state.search })} />
                                </View>
                                <View style={{ width: "11%", alignItems: "center", justifyContent: "center", height: "100%", backgroundColor: "" }} >
                                    {!this.state.loading ?
                                        this.state.showcross ?
                                            <TouchableOpacity activeOpacity={1} style={{ width: "100%", alignItems: "center", justifyContent: "center", height: "100%", backgroundColor: "" }}
                                                onPress={() => this.setState({ search: "", data: [], showcross: false })} >
                                                <Icon name="close" color="grey" size={20} />
                                            </TouchableOpacity>
                                            :
                                            null
                                        : <ActivityIndicator size={20} color="#26c6b5" />

                                    }

                                </View>

                            </View>
                        </Animated.View>
                    </View>

                    {this.state.recent ?
                        <Animated.View  style={{transform:[{translateY:translateY}]}}  >
                            < View animation="slideInUp" duration={200} >
                                < View style={{ width: "100%", height: 30, justifyContent: "center", alignItems: "center" }} >

                                    <TouchableOpacity style={{ width: "30%", alignItems: "center" }} >
                                        <Text style={{ color: "gray" }} >Recent Search</Text>
                                    </TouchableOpacity>

                                </View>
                                <TouchableOpacity activeOpacity={1} style={{ width: "100%", flexDirection: "row" }} onPress={() => this.props.navigation.navigate('Resultshownpage', { data: this.state.recent_search })} >
                                    <View style={{
                                        height: 45, width: "100%", backgroundColor: "white",
                                        flexDirection: "row", alignItems: "center",
                                        padding: 10, justifyContent: "flex-start",
                                        borderRadius: 1, elevation: 0, borderBottomColor: "white", borderColor: "white", borderWidth: 0.3, marginBottom: 1
                                    }}>

                                        <View style={{ width: "9%", alignItems: "flex-start", height: "100%" }} >
                                            <Icon name="call-made" size={25} color="#c93b3a" />
                                        </View>

                                        <View style={{ width: "80%" }} >
                                            <Text style={{ color: "grey", textTransform: "capitalize", fontSize: 17 }} >{this.state.recent_search}</Text>
                                        </View>

                                        <View style={{ width: "10%" }} >
                                            <TouchableOpacity style={{ width: '100%' }} onPress={async () => { await AsyncStorage.removeItem("recent-search"), this.setState({ recent_search: null, recent: false }) }} >
                                                <Icon name="close" size={25} color="silver" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ View>
                        </Animated.View>

                        :
                        !this.state.loading ?

                            <ScrollView keyboardShouldPersistTaps={"handled"} style={{ backgroundColor: "white" }} >

                                {this.state.data.map(item =>

                                    <View style={{ backgroundColor: "white", paddingHorizontal: 10 }}>

                                        <TouchableOpacity activeOpacity={1} style={{ width: "100%", flexDirection: "row" }} onPress={() => this.select(item)} >
                                            <View style={{
                                                height: 40, width: "100%", backgroundColor: "white",
                                                flexDirection: "row", alignItems: "center",
                                                padding: 10, justifyContent: "flex-start",
                                                borderRadius: 1, elevation: 0, borderBottomColor: "white", borderColor: "white", borderWidth: 0.3, marginBottom: 1
                                            }}>




                                                <View style={{ width: "9%", alignItems: "flex-start", height: "100%" }} >
                                                    <Icon name="call-made" size={25} color="#c93b3a" />
                                                </View>

                                                <View style={{ width: "95%" }} >
                                                    <Text style={{ color: "#303846", textTransform: "capitalize", fontSize: 17 }} >{item}</Text>
                                                </View>


                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                )}
                            </ScrollView>
                            : null
                        // <ActivityIndicator size={30} color="#26c6b5" />

                    }


                </View>

            </View >
        )
    }
}

export default Searchpage; 