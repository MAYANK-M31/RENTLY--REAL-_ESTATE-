import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  Image,
  StatusBar
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"


import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from 'rn-fetch-blob';
import Icon from "react-native-vector-icons/MaterialIcons";
import FloatingLabelInput from "react-native-floating-label-input"


class Ownerinfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      loading: null,
      result: true,
      warning: "",
      id:'',
      images:this.props.route.params.images,
      color:"#343860",
      color2:"#343860"
    }
  }
  
  componentDidMount=()=>{
    // console.log(this.props.route.params.images)
  }

  add = async () => {

    if (this.state.name === "") {
      this.setState({ warning: "Name Is Required *" })
    } else if (this.state.mobile === "") {
      this.setState({ warning: "Mobile Number Is  Required *" })
    } else {
      this.setState({ warning: "" })
      this.setState({ result: false })
      this.setState({ loading: true })

      RNFetchBlob.fetch('POST', 'https://agile-tor-28791.herokuapp.com/data/add', {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        'Content-Type': 'multipart/form-data',
      }, [
        // element with property `filename` will be transformed into `file` in form data
        { name: "images", filename: this.props.route.params.images.fileName, type: this.props.route.params.images.type, data: this.props.route.params.images.data },
        { name: 'price', data: this.props.route.params.price },
        { name: 'locality', data: this.props.route.params.location },
        { name: 'ownername', data: this.state.name },
        { name: 'type', data: this.props.route.params.type }
      ]).then( async (res) => {
        console.log(res.data)
        if (res.data !== null) {
          await AsyncStorage.setItem("UserPropertyid",res.data)
          this.setState({id:res.data ,result: true, loading: false })
          this.props.navigation.navigate('PropertySuccess', {
            name: this.state.name,
            mobile: this.state.mobile,
            images: this.state.images,
            type: this.props.route.params.type,
            location: this.props.route.params.location,
            price: this.props.route.params.price,
            id:this.state.id
          });
        

        } else if(res.data == 404) {
          this.setState({loading:false})
          this.setState({result:true})
          alert("sorry failed to upload try again")
        }
      }).catch((err) => {
        console.log(err)
      })
    }






  }







  render() {
    return (
      <>
        {this.state.result ?
          <View style={{ flex: 1, backgroundColor: "white", navbarHidden: true }}>
            <StatusBar barStyle="dark-content" />
            <View style={{ height: 55, elevation: 2, flexDirection: "row", padding: 10, backgroundColor: "white" }} >

              <View style={{ width: "15%", justifyContent: "center" }} >
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                  <Icon name="arrow-back" size={25} />
                </TouchableOpacity>
              </View>

              <View style={{ width: "68%", justifyContent: "center" }} >
                <Text style={{ fontSize: 20 }} >CONTACT DETAILS</Text>
              </View>


            </View >


            <View style={{ flex: 1, backgroundColor: "white" }}>
              <View style={{ flex: 1, paddingHorizontal: "5%" }}>
                <View style={{ flex: 1, paddingTop: "5%" }}>
                  <View style={{ justifyContent: "center" }}>

                    <FloatingLabelInput
                      containerStyles={{ borderRadius: 5, height: 50,borderColor:this.state.color }}
                      inputStyles={{ fontSize: 16 }}
                      labelStyles={{color:this.state.color}}
                      label="Name" // required
                      value={this.state.name} // required
                      onChange={(value) => {this.setState({ name: value }),this.setState({color:"#11ece5"})}} // required
                    />
                    <FloatingLabelInput
                      containerStyles={{ borderRadius: 5, height: 50, marginTop: "4%",borderColor:this.state.color2 }}
                      inputStyles={{ fontSize: 16 }}
                      labelStyles={{color:this.state.color2}}
                      keyboardType={"phone-pad"}
                      label="Mobile No" // required
                      value={this.state.mobile} // required
                      
                      onChange={(value) => {this.setState({ mobile: value }),this.setState({color2:"#11ece5"})}} // required
                    />
                    <View style={{ paddingLeft: 5 }} >
                      <Text style={{ color: "red" }} >{this.state.warning}</Text>
                    </View>

                  </View>

                </View>
              </View>
              <View style={{ flex: 0.4, height: 150, width: "100%", justifyContent: "flex-end" }} >
                <View style={{ height: 100, width: "100%", justifyContent: "center", alignItems: "center" }} >
                  <Text style={{ color: "grey" }}>(5/5)</Text>
                </View>
                <TouchableOpacity onPress={this.add} style={{ backgroundColor: '#2a65ea', width: "100%", height: 50, borderRadius: 10, elevation: 5, borderWidth: 0.1, borderColor: "black" }}>
                  <LinearGradient style={{ justifyContent: "center", height: "100%", paddingHorizontal: "5%" }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00ca95', '#00ca95']}  >
                    <Text style={{ fontSize: 20, fontWeight: "normal", textAlign: "center", color: "white" }}>LIST PROPERTY</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>


            </View>



          </View>
          :
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
            <ActivityIndicator size={50} color="#26c6b5" />
            <Text style={{ fontSize: 30, fontWeight: "bold" }} >   Please Wait...</Text>
          </View>
        }
      </>
    );
  }

}
export default Ownerinfo;