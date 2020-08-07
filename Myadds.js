import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";
import SingleLoader from "./SingleLoader";

class Myadds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            result: '',
            loading:true,
            myad:true
        }
    };

    componentDidMount = async () => {
        const token = await AsyncStorage.getItem("UserPropertyid");
        if (token ) {
            this.setState({ data: token,myad:true })
            await axios.get("https://tranquil-brushlands-49127.herokuapp.com/data/id/" + `${this.state.data.replace(/['"]+/g, '')}`)
                .then(res => {
                    // console.log(res.data)
                    this.setState({ result: res.data })
                    this.setState({loading:false})
                    //  console.warn(this.props.route.params.Data)

                })
                .catch(error => console.warn(error));
        } else {
            this.setState({loading:false,myad:false})
            alert("sorry not found")
        }



    }

    // componentDidUpdate = async () => {
    //     const token = await AsyncStorage.getItem("UserPropertyid");
    //     if (token ) {
    //         this.setState({ data: token,myad:true })
    //         await axios.get("https://tranquil-brushlands-49127.herokuapp.com/data/id/" + `${this.state.data.replace(/['"]+/g, '')}`)
    //             .then(res => {
    //                 // console.log(res.data)
    //                 this.setState({ result: res.data })
    //                 this.setState({loading:false})
    //                 //  console.warn(this.props.route.params.Data)

    //             })
    //             .catch(error => console.warn(error));
    //     } else {
    //         this.setState({loading:false,myad:false})
    //         alert("sorry not found")
    //     }



    // }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ position: "relative", height: 55, elevation: 2, flexDirection: "row", padding: 10, backgroundColor: "white" }} >

                    <View style={{ width: "29%", justifyContent: "center" }} >
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                            <Ionicons name="arrow-back" size={25} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: "68%", justifyContent: "center" }} >
                        <Text style={{ fontSize: 20 }} >My Listed Property</Text>
                    </View>

                </View >
                <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 10 }} >
                    {this.state.myad ? 
                    !this.state.loading ?
                     <View style={{ flex: 1, width: "100%", marginTop: 0, borderRadius: 4, padding: "4%", borderWidth: 1, borderColor: "lightgrey", backgroundColor: "white", marginBottom: 10 }}>
                     <View>
                         <View style={{ flexDirection: "row", height: 100, width: "100%" }}>
                             <View style={{ height: 100, width: "40%", backgroundColor: "red", borderRadius: 8 }}>
                                 <Image source={{ uri: this.state.result.images }} style={{ resizeMode: "cover", height: 100, width: "100%", borderRadius: 6 }} />
                             </View>
                             <View style={{ flex: 1, height: 100, width: "60%", padding: "1.5%", paddingLeft: "3%" }}>
                                 <View style={{ flex: 0, justifyContent: "space-between", flexDirection: "row", height: 30, width: "100%" }} >
                                     <View style={{ flexDirection: "row", height: 21 }}>
                                         <Text style={{ fontSize: 18, fontWeight: "bold" }}>&#8377; {this.state.result.price} </Text><Text style={{ color: "grey", fontSize: 14, textAlignVertical: "bottom" }}>/month</Text>
                                     </View>
                                     <View>
                                         <Icon name="heart" size={20} color="red" />
                                     </View>
                                 </View>
                                 <View style={{ height: 40, width: "100%" }} >
                                     <View style={{ flexDirection: "row", height: 40 }}>
                                         <Text style={{ fontSize: 15, color: "black" }}>{this.state.result.type} for Rent in in {this.state.result.locality}</Text>
                                     </View>

                                 </View>
                                 <View style={{ height: 25, width: "100%", marginTop: 3 }} >
                                     <View style={{ flexDirection: "row", height: 25 }}>
                                         <Text style={{ fontSize: 15, color: "grey" }}>Deposit:1 month rent</Text>
                                     </View>

                                 </View>
                             </View>
                         </View>

                         <View style={{ flexDirection: "row", width: "100%", height: 60 }}>
                             <View style={{ flexDirection: "row", height: "100%", width: "11%", paddingTop: "4%" }}>
                                 <View style={{
                                     width: 30, height: 30, marginLeft: 3, alignItems: "center", justifyContent: "center",
                                     borderRadius: 50, backgroundColor: "#00FF99"
                                 }}><Icon name="bed" size={20} />
                                 </View>
                                 <View style={{
                                     width: 30, height: 30, marginLeft: 3, alignItems: "center", justifyContent: "center",
                                     borderRadius: 50, backgroundColor: "#00FF99"
                                 }}><Icon name="tv" size={20} />
                                 </View>
                                 <View style={{
                                     width: 30, height: 30, marginLeft: 3, alignItems: "center", justifyContent: "center",
                                     borderRadius: 50, backgroundColor: "#00FF99"
                                 }}><Icon name="couch" size={20} />
                                 </View>
                                 <View style={{
                                     width: 30, height: 30, marginLeft: 3, alignItems: "center", justifyContent: "center",
                                     borderRadius: 50, backgroundColor: "#00FF99"
                                 }}><Icon name="wifi" size={20} />
                                 </View>
                             </View>
                         </View>

                     </View>
                     <View style={{ flexDirection: "row-reverse", justifyContent: "space-between" }}>
                         <View style={{ width: "58%" }} >
                             <TouchableOpacity onPress={() => this.props.navigation.navigate('PreviewDetailpage',{Data:this.state.data.replace(/['"]+/g, '')})} activeOpacity={0.8} style={{ height: 40, backgroundColor: "#1dd38f", width: "75%", alignItems: "center", justifyContent: "center", borderRadius: 4, marginLeft: "25%" }}>
                                 <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Preview</Text>
                             </TouchableOpacity>
                         </View>
                         <View style={{ paddingTop: "3%", width: "42%" }}>
                             <Text style={{ fontSize: 17, textTransform: "capitalize" }}>Pablo Escobar</Text>
                         </View>
                     </View>
                 </View> : 
                 <SingleLoader/>
                 : <Text>NO Ad Posted Yet</Text>
                 }
                   
                </ScrollView>
            </View>
        )
    }

}

export default Myadds;