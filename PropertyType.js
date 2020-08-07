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
  BackHandler,
  Picker
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from "react-native-image-picker"
import Icon from "react-native-vector-icons/MaterialIcons";
import FloatingLabelInput from 'react-native-floating-label-input';

class PropertyType extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "",
      warning: "",
    }
  }


  handlesubmit = () => {
    if (this.state.type === "") {
      this.setState({ warning: "Required *" })
    } else {
      this.props.navigation.navigate('PropertyLocation', { type: this.state.type })
      // alert(this.state.type)
      this.setState({ warning: "" })
    }

  }

  back = () => {
    this.setState({ type: "" })
    this.props.navigation.goBack()
  }

  pick = (value) => {
    this.setState({ type: value })


  }



  render() {
    return (

      <View style={{ flex: 1, backgroundColor: "white", navbarHidden: true }}>
        <StatusBar barStyle="dark-content" />
        <View style={{ height: 55, elevation: 2, flexDirection: "row", padding: 10, backgroundColor: "white" }} >

          <View style={{ width: "15%", justifyContent: "center", paddingLeft: "1%" }} >
            <TouchableOpacity onPress={this.back} >
              <Icon name="close" size={25} />
            </TouchableOpacity>
          </View>

          <View style={{ width: "75%", justifyContent: "center", alignItems: "flex-start" }} >
            <Text style={{ fontSize: 20 }} >ADD PROPERTY TYPE</Text>
          </View>


        </View >


        <View duration={300} style={{ flex: 1, backgroundColor: "white" }}>
          <View style={{ flex: 1, paddingHorizontal: "5%" }}>
            <View style={{ flex: 1, paddingTop: "5%" }}>
              <View style={{ justifyContent: "center" }} >

                {/* <FloatingLabelInput
                  containerStyles={{ borderRadius: 5, height: 50 }}
                  inputStyles={{ fontSize: 16 }}
                  keyboardType={"visible-password"}
                  label="Type" // required
                  value={this.state.type} // required
                  onChange={(value) => this.setState({ type: value })} // required
                /> */}
                <View style={{ borderColor: "#11ece5", borderWidth: 1.9, borderRadius: 5 }} >
                  <Picker selectedValue={this.state.type} onValueChange={(value) => this.pick(value)} style={{ marginLeft: 15 }} >
                    <Picker.Item color={"gray"} value="" label="Type" />
                    <Picker.Item label="APARTMENT" value="APARTMENT" />
                    <Picker.Item label="FLAT" value="FLAT" />
                    <Picker.Item label="INDIVIDUAL HOUSE" value="INDIVIDUAL HOUSE" />
                    <Picker.Item label="ROOM" value="ROOM" />
                    <Picker.Item label="OFFICE" value="OFFICE" />
                    <Picker.Item label="SHOP" value="SHOP" />
                    <Picker.Item label="BUNGLOW" value="BUNGLOW" />
                    <Picker.Item label="BUILDING" value="BUILDING" />
                  </Picker>
                </View>
                <View style={{ paddingLeft: 5 }} >
                  <Text style={{ color: "red" }} >{this.state.warning}</Text>
                </View>
              </View>



            </View>
          </View>

          <View style={{ flex: 0.4, height: 150, width: "100%", justifyContent: "flex-end" }} >
            <View style={{ height: 100, width: "100%", justifyContent: "center", alignItems: "center" }} >
              <Text style={{ color: "grey" }} >(1/5)</Text>
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
export default PropertyType;