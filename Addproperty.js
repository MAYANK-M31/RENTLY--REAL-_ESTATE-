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
import RNFetchBlob from 'rn-fetch-blob';
import Icon from "react-native-vector-icons/MaterialIcons";


class Addproperty extends Component {

  constructor(props) {
    super(props);
    this.state = {
      price: "",
      locality: "",
      ownername: "",
      type: "",
      images: "",
      preview: 'https://cdn1.iconfinder.com/data/icons/symbol-color-common-5/32/gallery-add-512.png'

    }
  }

  selectFile = () => {
    const option = {
      quality: 1
    };
    ImagePicker.showImagePicker(option, response => {
      //  console.warn("response",response);
      this.setState({ preview: response.uri })
      this.setState({ images: response })
      // console.log(this.state.images)
      if (response.didCancel == true) {
        this.setState({ preview: 'https://cdn1.iconfinder.com/data/icons/symbol-color-common-5/32/gallery-add-512.png' })
      }
    })

  }





  add = async () => {

    RNFetchBlob.fetch('POST', 'http://192.168.43.65:5000/data/add', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
      // element with property `filename` will be transformed into `file` in form data
      { name: "images", filename: this.state.images.fileName, type: this.state.images.type, data: this.state.images.data },
      { name: 'price', data: this.state.price },
      { name: 'locality', data: this.state.locality },
      { name: 'ownername', data: this.state.ownername },
      { name: 'type', data: this.state.type }
    ]).then((res) => {
      console.log(res.data)
      if (res.data == 200) {
        alert("Property listed successfuly")
      } else {
        alert("sorry failed to upload try again")
      }
    }).catch((err) => {
      console.log(err)
    })
  }



  render() {
    return (

      <View style={{ flex: 1, backgroundColor: "white", navbarHidden: true }}>
        <StatusBar barStyle="dark-content" />
        <View style={{ height: "7%", elevation: 2, flexDirection: "row", padding: 10, backgroundColor: "white" }} >

          <View style={{ width: "32%", justifyContent: "center" }} >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
              <Icon name="arrow-back" size={25} />
            </TouchableOpacity>
          </View>

          <View style={{ width: "68%", justifyContent: "center" }} >
            <Text style={{ fontSize: 20 }} >ADD PROPERTY</Text>
          </View>


        </View >


        <View duration={300} style={{ flex: 1, backgroundColor: "white" }}>
          <View style={{ flex: 1, paddingHorizontal: "5%" }}>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TextInput placeholder="Price" keyboardType="phone-pad" onChangeText={price => { this.setState({ price }) }} value={this.state.price} style={{ backgroundColor: 'white', width: "100%", fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, padding: 15, elevation: 1, marginTop: 5 }} />
                <TextInput placeholder="locality" onChangeText={locality => { this.setState({ locality }) }} value={this.state.locality} style={{ backgroundColor: 'white', width: "100%", paddingLeft: 25, fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, marginTop: 10, padding: 15, elevation: 1 }} />
                <TextInput placeholder="ownername" onChangeText={ownername => { this.setState({ ownername }) }} value={this.state.ownername} style={{ backgroundColor: 'white', width: "100%", paddingLeft: 25, fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, marginTop: 10, padding: 15, elevation: 1 }} />
                <TextInput placeholder="type" onChangeText={type => { this.setState({ type }) }} value={this.state.type} style={{ backgroundColor: 'white', width: "100%", paddingLeft: 25, fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, marginTop: 10, padding: 15, elevation: 1 }} />
                {/* <TouchableOpacity style={{ width: "80%", height: 50, borderRadius: 10, marginTop: 10, backgroundColor: "red", alignItems: "center", justifyContent: "center" }} >
                  <Text style={{ color: "white", fontSize: 20 }} >ADD PICTURE</Text>
                </TouchableOpacity> */}
              </View>
              <View style={{ flex: 0.3, width: "100%", height: 100 }} >
                <TouchableOpacity onPress={this.selectFile}>
                  <Image source={{ uri: this.state.preview }} style={{ borderWidth: 1, borderRadius: 10, borderColor: "silver", width: 110, height: "90%" }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.4, height: 150, width: "100%", justifyContent: "flex-end" }} >

            <TouchableOpacity onPress={this.add} style={{ backgroundColor: '#2a65ea', width: "100%", height: 50, borderRadius: 10, elevation: 5, borderWidth: 0.1, borderColor: "black" }}>
              <LinearGradient style={{ justifyContent: "center", height: "100%", paddingHorizontal: "5%" }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2a65ea', '#2a65ea']}  >
                <Text style={{ fontSize: 20, fontWeight: "normal", textAlign: "center", color: "white" }}>LIST PROPERTY</Text>
              </LinearGradient>
            </TouchableOpacity>

          </View>


        </View>



      </View>
    );
  }

}
export default Addproperty;