import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';

class Noresult extends Component {
    render() {
        return (
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
                <View style={{ height: 60,width:"100%", justifyContent: "center", alignItems: "center" }} >
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Searchpage')} activeOpacity={0.85} style={{height:42,width:"34%",backgroundColor:"#2a65ea",borderRadius:5,alignItems:"center",justifyContent:"center"}} >
                        <Text style={{ fontSize: 15,fontWeight:"bold", color: "white" }} >Search Again</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Noresult;