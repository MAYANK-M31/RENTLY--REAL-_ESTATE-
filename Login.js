import React, { Component } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  Animated
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient"



class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phoneno: "",
      password: "",
      loading: false,
      status: '',
      Token: ''
    }
    this.position = new Animated.ValueXY({ x: 0, y: 1000 })
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 }

    }).start()

    this.position2 = new Animated.ValueXY({ x: -200, y: 0 })
    Animated.spring(this.position2, {
      toValue: { x: 0, y: 0 }
    }).start()

    this.position3 = new Animated.ValueXY({ x: -600, y: 0 })
    Animated.spring(this.position3, {
      toValue: { x: 0, y: 0 }, delay: 200
    }).start()

    this.position4 = new Animated.ValueXY({ x: -600, y: 0 })
    Animated.spring(this.position4, {
      toValue: { x: 0, y: 0 }, delay: 300
    }).start()

    this.position5 = new Animated.ValueXY({ x: -600, y: 0 })
    Animated.spring(this.position5, {
      toValue: { x: 0, y: 0 }, delay: 400
    }).start()
  }




  login = async () => {
    Keyboard.dismiss();
    const logindetail = {
      phone: this.state.phoneno,
      password: this.state.password
    }
    if (this.state.phoneno == "" && this.state.password == "") {
      this.setState({ status: "Please Fill the Details" })
    } else {
      // console.log(this.state.phoneno)
      this.setState({ loading: true })
      axios.post("https://cryptic-taiga-83080.herokuapp.com/data/login", logindetail)
        .then(async (res) => {
          if (res.data.token) {
            this.setState({ Token: res.data.token, loading: false })
            await AsyncStorage.setItem("usertoken", this.state.Token)
            await AsyncStorage.setItem("Opened", "200")
          } else {
            this.setState({ status: res.data, loading: false })
          }


          if (this.state.Token) {
            this.setState({ status: "Logged In" })
            this.props.navigation.navigate('Home')
            alert("Logged In")
          } else {
            // alert(this.state.status)
          }
        })
    }
  }



  render() {
    return (


      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 2, y: 0 }} colors={['#273254', '#202946', '#192038']} style={{ flex: 1, backgroundColor: "magenta", navbarHidden: true }} >
        <View style={{ flex: 1 }}>
          <Animated.Text
            animation="bounceIn" iterationCount={1} style={[{ textAlign: "justify", fontSize: 45, color: "white", fontWeight: "bold", marginTop: 50, marginLeft: 20 }, this.position2.getLayout()]}>
            Welcome
                </Animated.Text>
        </View>

        <Animated.View style={[{ flex: 4, backgroundColor: "#e2e5de", borderTopRightRadius: 50, borderTopLeftRadius: 50, paddingVertical: 50, padding: 30 }, this.position.getLayout()]}>

          <Text style={{ fontSize: 35, fontWeight: "bold", color: "#2c385c" }}>Login Here To Find Your Home!!</Text>
          <Animated.View style={this.position3.getLayout()} >
            <TextInput onFocus={() => { this.setState({ status: "" }) }} placeholder="MOBILE NO." autoCorrect={false} autoCapitalize="none" returnKeyType="next" keyboardType="phone-pad" onChangeText={phoneno => { this.setState({ phoneno }) }} value={this.state.phoneno} style={{ backgroundColor: 'white', width: "100%", paddingLeft: 25, fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, marginTop: 20, padding: 15, elevation: 3 }} />
          </Animated.View>
          <Animated.View style={this.position4.getLayout()} >
            <TextInput onFocus={() => { this.setState({ status: "" }) }} placeholder="PASSWORD" secureTextEntry={true} autoCorrect={false} autoCapitalize="none" returnKeyType="next" blurOnSubmit={true} autoFocus={this.state.focuses} onSubmitEditing={this.login} onChangeText={password => { this.setState({ password }) }} value={this.state.password} style={{ backgroundColor: 'white', width: "100%", paddingLeft: 25, fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, marginTop: 10, padding: 15, elevation: 3 }} />
          </Animated.View>


          {this.state.loading ?

            <View style={{ flex: 1, marginTop: "3%" }} >
              <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#1dd38f', width: "100%", height: 50, borderRadius: 10, justifyContent: "center", elevation: 5, borderWidth: 0.1, borderColor: "black" }}>
                <ActivityIndicator size={45} color="white" />
              </TouchableOpacity>
            </View>
            :
            <View style={{ flex: 1, height: 600 }} >
              <View style={{ flex: 1 }}>
                <Animated.View style={this.position5.getLayout()}>
                  <TouchableOpacity onPress={this.login} style={{ backgroundColor: '#1dd38f', width: "100%", height: 50, borderRadius: 10, marginTop: 10, elevation: 5, borderWidth: 0.1, borderColor: "black" }}>
                    <Text style={{ fontSize: 24, fontWeight: "normal", textAlign: "center", marginTop: 7, color: "white" }}>Login</Text>
                  </TouchableOpacity>
                </Animated.View>

                <TouchableOpacity style={{ marginTop: 5, padding: 5 }} activeOpacity={1} onPress={() => this.props.navigation.navigate('Register')} >
                  <Text style={{ color: "#2c385c", fontSize: 16 }}>Dont Have An Account?<Text style={{ color: "#0080ff" }}> Create account here</Text> </Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontSize: 18, color: "#ff8080", textTransform: "capitalize" }}>{this.state.status}</Text>
              </View>

            </View>
          }


          <View style={{ flex: 0.1, justifyContent: "flex-end", alignItems: "flex-end", width: "20%", marginLeft: "84%", marginBottom: "-10%" }}>
            <TouchableOpacity activeOpacity={0.99} onPress={async () => {
              this.props.navigation.navigate('Home'),
              await AsyncStorage.setItem("Opened", "200")
            }} >
              <Text style={{ color: "#0080ff", fontSize: 25 }}>Skip <Icon name="angle-right" size={25} style={{}} /> </Text>
            </TouchableOpacity>
          </View>

        </Animated.View>
      </LinearGradient>

    );
  };
}
export default Login;