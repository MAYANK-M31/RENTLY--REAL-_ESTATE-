import React, { Component } from 'react';
import { View, Image, FlatList, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";


export default class DetailGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    
    render() {
        return (
            <View style={{ padding: 5 }} >

                 <GallerySwiper style={{ height: 200, width: "100%" }}
                        images={[
                            { source: require("./images/4.jpeg"), dimensions: { width: 1500, height: 1920 } },
                            { source: require("./images/5.jpeg"), dimensions: { width: "100%", height: 1920 } },
                            { source: require("./images/6.jpeg"), dimensions: { width: "100%", height: 1920 } }

                        ]} />

            </View>
        );
    }
}