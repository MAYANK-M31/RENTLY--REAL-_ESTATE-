import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from "react-native-gesture-handler";
import Category from "./Category";
import Banner from "./Offerbanners.js";
import Resultcontent from "./Resultcontent";
import axios from "axios";
import Loader from "./Loader"
import Noresult from "./Noresult"
import Animated from "react-native-reanimated";




class Resultshownpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],
            loading: true,
            nodata: null

        }

        this.scrollY = new Animated.Value(0)
        this.diffclamp = Animated.diffClamp(this.scrollY, 0, 65)
        this.translateY = Animated.interpolate(this.diffclamp, {
            inputRange: [0, 49],
            outputRange: [0, -49]
        })



    }

    refresh = () => {
        // setTimeout(() => { this.setState({ loading: true }) }, 0.1)
        axios.get("https://agile-tor-28791.herokuapp.com/data/" + `${this.props.route.params.data.toLowerCase()}`)
            .then(res => {
                // console.warn(res.data)

                this.setState({ result: res.data, loading: false })
                if (res.data == "") {
                    this.setState({ nodata: true })
                }
                //    alert("refreshed")
            })

            .catch(error => console.warn(error))
    }

    componentDidMount = async () => {
        // console.warn(this.state.search)
        // console.log(this.props.route.params.data.toLowerCase())
        await axios.get("https://agile-tor-28791.herokuapp.com/data/" + `${this.props.route.params.data.toLowerCase()}`)
            .then(res => {
                // console.warn(res.data)
                this.setState({ result: res.data, loading: false })
                if (res.data == "") {
                    this.setState({ nodata: true })
                }

            })

            .catch(error => console.warn(error));
        //https://tranquil-brushlands-49127.herokuapp.com/data/
    }




    render() {

        return (
            <View>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Animated.View style={{ backgroundColor: "white", top: 0, left: 0, right: 0, elevation: 0.1 }} >

                    {/* <View style={{
                        height: 60, width: "100%", backgroundColor: "white",
                        flexDirection: "row", alignItems: "center",
                        justifyContent: "flex-start", padding: 10
                    }}>

                        <Text style={{
                            fontSize: 33, marginLeft: 3, marginBottom: 2,
                            color: "magenta"
                        }}>Logo
                    </Text>
                    </View> */}


                    <Animated.View style={{ backgroundColor: "white", padding: 10, paddingRight: 10 }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                            <View style={{
                                height: 49, width: "100%", backgroundColor: "white",
                                flexDirection: "row", alignItems: "center",
                                justifyContent: "flex-start", padding: 10,
                                borderColor: "silver", borderWidth: 0.2,
                                borderRadius: 5, elevation: 0
                            }}>
                                <TouchableOpacity style={{ width: "6%", justifyContent: "center", height: "100%" }} onPress={() => this.props.navigation.navigate("Maincomponent")} >
                                    <Icon name="arrow-back" color="#2c385c" size={25} />
                                </TouchableOpacity>
                                <View style={{ height: "100%", width: "100%", justifyContent: "center", left: "5%" }} >
                                    <Text style={{ color: "dark", fontSize: 17, textTransform: "uppercase" }} >  {this.props.route.params.data}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>

                </Animated.View>
                <View style={{ minHeight: 1500 }}>
                    <Animated.ScrollView refreshControl={
                        <RefreshControl onRefresh={() => this.refresh()}
                            refreshing={this.state.loading} colors={["#00FF99", "red"]} />
                    }
                        onScroll={(e) => { this.scrollY.setValue(e.nativeEvent.contentOffset.y) }}
                        style={{ backgroundColor: "white", paddingTop: 0 }} contentContainerStyle={{ paddingBottom: 1000 }} scrollEventThrottle={1000} showsVerticalScrollIndicator={false} >
                        {!this.state.loading ?
                            this.state.nodata ?

                                <View style={{ flex: 1, height: 580, padding: "10%", justifyContent: "center" }} >
                                    <View style={{ height: 310, justifyContent: "center", alignItems: "center" }} >
                                        <Image style={{ height: "100%", width: "100%" }} source={{ uri: "https://cdni.iconscout.com/illustration/premium/thumb/no-result-found-2161436-1815078.png" }} />
                                    </View>
                                    <View style={{ height: 35, justifyContent: "center", alignItems: "center" }} >
                                        <Text style={{ fontSize: 20, color: "gray" }} >No Result Found</Text>
                                    </View>
                                    <View style={{ height: 20, justifyContent: "center", alignItems: "center" }} >
                                        <Text style={{ fontSize: 15, color: "gray" }} >Search Using More Specific Keyword</Text>
                                    </View>
                                    <View style={{ height: 60, width: "100%", justifyContent: "center", alignItems: "center" }} >
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Searchpage')} activeOpacity={0.85} style={{ height: 42, width: "34%", backgroundColor: "#2a65ea", borderRadius: 5, alignItems: "center", justifyContent: "center" }} >
                                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }} >Search Again</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                :
                                <View style={{ flex: 1, padding: "2.5%" }}>
                                    <FlatList
                                        data={this.state.result}
                                        keyExtractor={item => item._id}
                                        renderItem={({ item }) => {
                                            return (
                                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Detailpage', { Data: item._id })} >
                                                    <Resultcontent price={item.price} locality={item.locality} ownername={item.ownername} type={item.type} images={item.images} />
                                                </TouchableOpacity>
                                            )
                                        }}
                                    />
                                    {/* {
                                        this.state.result.map((results) =>
                                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Detailpage', { Data: results._id })} >
                                                <Resultcontent price={results.price} locality={results.locality} ownername={results.ownername} type={results.type} images={results.images} />
                                            </TouchableOpacity>)
                                    } */}
                                </View>
                            :
                            <Loader />
                            // <ActivityIndicator  size={50} color="#1dd38f"  style={{marginTop:200}}/>
                        }
                    </Animated.ScrollView>
                </View>

            </View>
        )
    }
}

export default Resultshownpage; 