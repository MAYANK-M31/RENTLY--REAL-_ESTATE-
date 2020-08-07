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
import FloatingLabelInput from "react-native-floating-label-input";


class PropertyPrice extends Component {

  constructor(props) {
    super(props);
    this.state = {

      price: "",
      warning: "",
      color: "#343860"


    }
  }


  handlesubmit = () => {
    if (this.state.price === "") {
      this.setState({ warning: "Required *" })
    } else {
      this.props.navigation.navigate('Ownerinfo', {
        price: this.state.price,
        images: this.props.route.params.images,
        type: this.props.route.params.type,
        location: this.props.route.params.location
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
            <Text style={{ fontSize: 20 }} >SET A PRICE</Text>
          </View>


        </View >


        <View duration={300} style={{ flex: 1, backgroundColor: "white" }}>
          <View style={{ flex: 1, paddingHorizontal: "5%" }}>
            <View style={{ flex: 1, paddingTop: "5%" }}>
              <View style={{ justifyContent: "center" }}>
                <FloatingLabelInput
                  containerStyles={{ borderRadius: 5, height: 50, borderColor: this.state.color }}
                  inputStyles={{ fontSize: 16 }}
                  labelStyles={{ color: this.state.color,backgroundColor:"white"}}
                  keyboardType={"number-pad"}
                  label="Price" // required
                  value={this.state.price} // required
                  onChange={(value) => { this.setState({ price: value }), this.setState({ color: "#11ece5" }) }} // required
                />
                <View style={{ paddingLeft: 5 }} >
                  <Text style={{ color: "red" }} >{this.state.warning}</Text>
                </View>
              </View>

            </View>
          </View>
          <View style={{ flex: 0.4, height: 150, width: "100%", justifyContent: "flex-end" }} >
            <View style={{ height: 100, width: "100%", justifyContent: "center", alignItems: "center" }} >
              <Text style={{ color: "grey" }}>(4/5)</Text>
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
export default PropertyPrice;