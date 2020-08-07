import React from "react";
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const Banner = (props) => {
    return (

        <View style={{ height: "105%", width: "25.1%" }}>
            <View style={{ height:"100%", width: "100%",padding:10 }}>
                <Image source={props.image} style={{ width: "98%", height: "95%", borderRadius:15 }} />
            </View>
        </View>


    )
}

export default Banner;

