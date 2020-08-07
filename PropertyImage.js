import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ActivityIndicator,
    Image,
    StatusBar,
    Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontIcon from "react-native-vector-icons/FontAwesome5"
import FloatingLabelInput from 'react-native-floating-label-input';

class PropertyImage extends Component {

    constructor(props) {
        super(props);
        this.state = {

            images: "",
            preview: "null",
            warning:""

        }
    }


    selectFile = () => {
        this.setState({ warning: "" })
        const option = {
            quality: 0.5

        };
        ImagePicker.showImagePicker(option, response => {
             console.log("response",response.fileSize);
            this.setState({ preview: response.uri })

            this.setState({ images: response })
            if (response.didCancel == true ) {
                this.setState({ preview: "" })
                this.setState({ images: ""})
                this.setState({ preview: 'please add image' })
            }
        })

    }


    handlesubmit = () => {
        if (this.state.images == "") {
            this.setState({ warning: "Image Is Required" })
        } else {
            this.props.navigation.navigate('PropertyPrice', {
                images: this.state.images,
                location: this.props.route.params.location,
                type: this.props.route.params.type
            })
            this.setState({ warning: "" })
        }
    }





    render() {
        return (

            <View style={{ flex: 1, backgroundColor: "white", navbarHidden: true }}>
                <StatusBar barStyle="dark-content" />
                <View style={{ height: 55, elevation: 2, flexDirection: "row", padding: 10, backgroundColor: "white" }} >

                    <View style={{ width: "15%", justifyContent: "center" }} >
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                            <Icon name="arrow-back" size={25} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: "68%", justifyContent: "center" }} >
                        <Text style={{ fontSize: 20 }} >ADD PROPERTY IMAGE</Text>
                    </View>


                </View >


                <View duration={300} style={{ flex: 1, backgroundColor: "white" }}>
                    <View style={{ flex: 1, paddingHorizontal: "5%" }}>
                        <View style={{ flex: 1, paddingTop: "5%" }}>
                            <View style={{ flex: 0.2, justifyContent: "center" }}>
                                <TouchableOpacity onPress={this.selectFile} activeOpacity={0.8} style={{ flexDirection:"row",backgroundColor: "#26c6b5", height: 60, borderRadius: 5, justifyContent: "center", alignItems: "center" }} >
                                    <FontIcon name={"camera"} size={30} style={{left:-10}} color={"white"} /> 
                                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }} >ADD IMAGE</Text>
                                </TouchableOpacity>
                                <View style={{ justifyContent:"center",alignItems:"center" }} >
                                    <Text style={{ color: "red",fontSize:15 }} >{this.state.warning}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Image source={{ uri: this.state.preview }} style={{ borderWidth: 1, borderRadius: 10, borderColor: "silver", width: "90%", height: "80%" }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.4, height: 150, width: "100%", justifyContent: "flex-end" }} >
                        <View style={{ height: 100, width: "100%", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ color: "grey" }}>(3/5)</Text>
                        </View>
                        <TouchableOpacity onPress={this.handlesubmit} style={{ backgroundColor: '#2a65ea', width: "100%", height: 50, borderRadius: 10, elevation: 5, borderWidth: 0.1, borderColor: "black" }}>
                            <LinearGradient style={{ justifyContent: "center", height: "100%", paddingHorizontal: "5%" }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00ca95', '#00ca95']}  >
                                <Text style={{ fontSize: 20, fontWeight: "normal", textAlign: "center", color: "white" }}>NEXT</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>


                </View>



            </View>
        );
    }

}
export default PropertyImage;