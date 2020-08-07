import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
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

class PropertyLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {

      search: "",
      warning: "",
      color: "#343860",
      data: [],
      loading: false,
      color:"#343860"


    }
  }

  select = (item) => {
    this.setState({ search: item })
   
  }

  handlesearch = async () => {
    if (this.state.search == "") {

      this.setState({ loading: true })
      await axios.get("https://agile-tor-28791.herokuapp.com/data/send/json/null")
        .then(res => {
          this.setState({ data: res.data })
          this.setState({ loading: false })


        })
    } else if (this.state.search.length > 2) {
      this.setState({ warning: "" })
      this.setState({ loading: true })
      await axios.get("https://agile-tor-28791.herokuapp.com/data/send/json/" + `${this.state.search}`)
        .then(res => {
          this.setState({ data: res.data })
          this.setState({ loading: false })
        

        })
    }


  }


  handlesubmit = () => {
    if (this.state.search === "") {
      this.setState({ warning: "Required *" })
    } else {
      this.props.navigation.navigate('PropertyImage', {
        location: this.state.search.toLowerCase(), type: this.props.route.params.type
      })
      // alert(this.state.search)
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
            <Text style={{ fontSize: 20 }} >ADD PROPERTY LOCATION</Text>
          </View>


        </View >


        <View duration={300} style={{ flex: 1, backgroundColor: "white" }}>
          <View style={{ flex: 1, paddingHorizontal: "5%" }}>
            <View style={{ flex: 1, paddingTop: "5%" }}>
              <View style={{ justifyContent: "center" }}>
                {/* <FloatingLabelInput
                  containerStyles={{ borderRadius: 5, height: 50, borderColor: this.state.color }}
                  inputStyles={{ fontSize: 16 }}
                  customLabelStyles={{ colorFocused: "#11ece5" }}
                  label="Location" // required
                  value={this.state.location} // required
                  onChange={(value) => { this.setState({ location: value }), this.setState({ color: "#11ece5" }) }} // required
                  autoCapitalize={"words"}
                  onChangeText={search => console.log(search)} autoCapitalize={"words"}
                /> */}


                <TextInput value={this.state.search}
                  style={{ borderRadius: 5, height: 50, borderColor: this.state.color, borderWidth: 2, paddingLeft: 20, width: "100%" }}
                  onChangeText={search => this.setState({ search }, this.handlesearch)} autoCapitalize={"words"}
                  onFocus={()=>this.setState({color:"#11ece5"})}
                  placeholder="Location" placeholderTextColor={this.state.color}
                 />


                <View style={{ paddingLeft: 5 }} >
                  <Text style={{ color: "red" }} >{this.state.warning}</Text>
                </View>

                {!this.state.loading ?

                  <ScrollView keyboardShouldPersistTaps={"handled"} style={{ backgroundColor: "white" }} >
                    {this.state.data.map(item =>

                      <View style={{ backgroundColor: "white" }}>
                        <TouchableOpacity activeOpacity={1}
                         style={{ width: "100%", flexDirection: "row" }} onPress={() => this.select(item)} >
                          <View style={{
                            height: 45, width: "100%", backgroundColor: "white",
                            flexDirection: "row", alignItems: "center",
                            padding: 10, justifyContent: "flex-start",
                            borderRadius: 1, elevation: 0
                          }}>




                            <View style={{ width: "9%", alignItems: "flex-start", height: "100%" }} >
                              <Icon name="place" size={25} color="#c93b3a" />
                            </View>

                            <View style={{ width: "95%" }} >
                              <Text style={{ color: "#303846", textTransform: "capitalize", fontSize: 17 }} >{item}</Text>
                            </View>


                          </View>
                        </TouchableOpacity>
                      </View>


                    )}
                  </ScrollView>
                  :
                  <ActivityIndicator size={30} color="#26c6b5" />
                }


              </View>

            </View>
          </View>
          <View style={{ flex: 0.4, height: 150, width: "100%", justifyContent: "flex-end" }} >
            <View style={{ height: 100, width: "100%", justifyContent: "center", alignItems: "center" }} >
              <Text style={{ color: "grey" }}>(2/5)</Text>
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
export default PropertyLocation;