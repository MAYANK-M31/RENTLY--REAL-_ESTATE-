import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient"


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneno: "",
      password: "",
      loading: false,
      status: ""
    }
  }




  register = async () => {
    Keyboard.dismiss();
    const registerdetail = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phoneno,
      password: this.state.password
    }
    if (this.state.name == "" && this.state.email == "" && this.state.phoneno == "" && this.state.password == "") {
      this.setState({ status: "Please Fill The Details" })
    } else {
      console.log(this.state.phoneno)
      this.setState({ loading: true })
      axios.post("https://cryptic-taiga-83080.herokuapp.com/data/register", registerdetail)
        .then(res => {
          this.setState({ status: res.data, loading: false })
          if (this.state.status === 200) {
            this.setState({ status: "Signed Up Successfully" })
            this.props.navigation.navigate("Login")
            alert("Signed Up Successfully")
          } else {
            this.setState({ status: this.state.status })
          }
        })
    }
  }



  render() {
    return (


      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 2, y: 0 }} colors={['#273254', '#202946', '#192038']} style={{ flex: 1, backgroundColor: "magenta", navbarHidden: true }} >
        <View style={{ flex: 0.5 }}>

        </View>

        <Animatable.View animation="fadeInUpBig" duration={300} style={{ flex: 4, backgroundColor: "white", borderTopRightRadius: 50, borderTopLeftRadius: 50, paddingVertical: 50, padding: 30 }}>

          <Text style={{ fontSize: 35, fontWeight: "bold" }}>Sign Up</Text>

          <TextInput onFocus={() => { this.setState({ status: "" }) }} placeholder="Full Name" autoCorrect={false} autoCapitalize="none" returnKeyType="next" onChangeText={name => { this.setState({ name }) }} value={this.state.name} style={{ backgroundColor: 'white', width: "100%", paddingLeft: 25, fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, marginTop: 20, padding: 15, elevation: 3 }} />
          <TextInput onFocus={() => { this.setState({ status: "" }) }} placeholder="Email" autoCorrect={false} autoCapitalize="none" returnKeyType="next" blurOnSubmit={true} autoFocus={this.state.focuses} onChangeText={email => { this.setState({ email }) }} value={this.state.email} style={{ backgroundColor: 'white', width: "100%", paddingLeft: 25, fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, marginTop: 10, padding: 15, elevation: 3 }} />
          <TextInput onFocus={() => { this.setState({ status: "" }) }} placeholder="MOBILE NO." autoCorrect={false} autoCapitalize="none" returnKeyType="next" keyboardType="phone-pad" onChangeText={phoneno => { this.setState({ phoneno }) }} value={this.state.phoneno} style={{ backgroundColor: 'white', width: "100%", paddingLeft: 25, fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, marginTop: 10, padding: 15, elevation: 3 }} />
          <TextInput onFocus={() => { this.setState({ status: "" }) }} placeholder="PASSWORD" secureTextEntry={true} autoCorrect={false} autoCapitalize="none" returnKeyType="next" blurOnSubmit={true} autoFocus={this.state.focuses} onSubmitEditing={this.login} onChangeText={password => { this.setState({ password }) }} value={this.state.password} style={{ backgroundColor: 'white', width: "100%", paddingLeft: 25, fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, marginTop: 10, padding: 15, elevation: 3 }} />
          {this.state.loading ?

            <View style={{ marginTop: "3%" }} >
              <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#1dd38f', width: "100%", height: 50, borderRadius: 10, justifyContent: "center", elevation: 5, borderWidth: 0.1, borderColor: "black" }}>
                <ActivityIndicator size={45} color="white" />
              </TouchableOpacity>
            </View>
            :
            <View style={{ flex: 1, height: 600 }} >
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={this.register} style={{ backgroundColor: '#1dd38f', width: "100%", height: 50, borderRadius: 10, marginTop: 10, elevation: 5, borderWidth: 0.1, borderColor: "black" }}>
                  <Text style={{ fontSize: 24, fontWeight: "normal", textAlign: "center", marginTop: 7, color: "white" }}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontSize: 18, color: "#ff8080", textTransform: "capitalize" }}>{this.state.status}</Text>
              </View>
            </View>
          }

        </Animatable.View>
      </LinearGradient>
    );
  };
}
export default Register;