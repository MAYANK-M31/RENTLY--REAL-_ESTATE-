import React, { Component } from 'react';
import { View, Image, FlatList, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";


export default class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    async componentDidMount() {
        if (Platform.OS === 'android') {
            const result = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Permission Explanation',
                    message: 'ReactNativeForYou would like to access your photos!',
                },
            );
            if (result !== 'granted') {
                console.log('Access to pictures was denied');
                return;
            }
        }

        CameraRoll.getPhotos({
            first: 10000,
            groupTypes: "All",
            groupName: "Camera",
            assetType: 'Photos',
        })
            .then(res => {
                this.setState({ data: res.edges });
                console.log(res)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <View style={{ padding: 5 }} >

                <FlatList
                    data={this.state.data}
                    numColumns={3}
                    renderItem={({ item }) => <TouchableOpacity style={{
                        width: '33%',
                        backgroundColor: "white",
                        height: 110,
                        padding: 2
                    }} onPress={()=>{console.log( item.node.image)}} >
                        <Image
                            style={{
                                width: '100%',
                                height: 110
                            }}
                            source={{ uri: item.node.image.uri }}
                        />
                    </TouchableOpacity>}
                />

            </View>
        );
    }
}