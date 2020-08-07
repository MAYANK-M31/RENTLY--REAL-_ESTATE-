import React, { Component } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  BackHandler,
  StatusBar,
  Animated
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { Value } from "react-native-reanimated";




class Insidelogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phoneno: "",
      password: "",
      loading: false,
      status: '',
      Token: '',
      removeview: false
    }
    this.position1 = new Animated.Value(0)
    Animated.spring(this.position1, {
      toValue: 1,
      useNativeDriver: true
    }).start()

    this.position2 = new Animated.Value(0)
    Animated.spring(this.position2, {
      toValue: 1,
      useNativeDriver: true
    }).start()

    this.transy = new Animated.Value(0)

    this.translateY = this.transy.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -220]
    })

    this.translate1Y = this.position1.interpolate({
      inputRange: [0, 1],
      outputRange: [-1000, 0]
    })

    this.translate2Y = this.position2.interpolate({
      inputRange: [0, 1],
      outputRange: [1000, 0]
    })

  }




  // componentDidMount() {
  //   BackHandler.addEventListener("hardwareBackPress", this.backAction);
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  // }


  // backAction = () => {
  //   this.transy = new Animated.Value(1)
  //   this.translateY = this.transy.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [0, 0]
  //   })
  // }




  login = async () => {
    Keyboard.dismiss();
    const logindetail = {
      phone: this.state.phoneno,
      password: this.state.password
    }
    if (this.state.phoneno == "" && this.state.password == "") {
      this.setState({ status: "Please Fill the Details" }, () => { setTimeout(() => this.setState({ status: "" }), 2000) })
    } else {
      // console.log(this.state.phoneno)
      this.setState({ loading: true })
      axios.post("https://cryptic-taiga-83080.herokuapp.com/data/login", logindetail)
        .then(async (res) => {
          if (res.data.token) {
            this.setState({ Token: res.data.token, loading: false })
            await AsyncStorage.setItem("usertoken", this.state.Token)

          } else {
            this.setState({ status: res.data, loading: false }, () => { setTimeout(() => this.setState({ status: "" }), 1000) })
          }


          if (this.state.Token) {
            this.setState({ status: "Logged In" }, () => { setTimeout(() => this.setState({ status: "" }), 1000) })
            this.props.navigation.navigate('Home')
            alert("Logged In")
          } else {
            // alert(this.state.status)
          }
        })
    }
  }

  loginviewup = () => {
    Animated.timing(this.transy, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }


  render() {


    return (
      <View keyboardShouldPersistTaps={"handled"} style={{ flex: 1, navbarHidden: true, height: 500, backgroundColor: "white" }}>
        <View style={{ height: 50, backgroundColor: "white", zIndex: 1, justifyContent: "center", alignItems: "center", elevation: 1 }} >
          <Text style={{ fontSize: 28, color: "black", fontWeight: "bold" }} >Login</Text>
        </View>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Animated.View style={[{ height: "150%", paddingHorizontal: "5%", backgroundColor: "white", transform: [{ translateY: this.translateY }] }]} >



          <Animated.View style={[{ height: 350, width: "100%", alignItems: "center", justifyContent: "center", transform: [{ translateY: this.translate1Y }, { translateY: this.translateY }] }]} >
            <Image style={{ height: "100%", width: "100%" }} source={require("./images/vector1.png")} />
          </Animated.View>


          <Animated.View keyboardShouldPersistTaps='handled' style={{ transform: [{ translateY: this.translate2Y }] }} >
            <TextInput onFocus={this.loginviewup} placeholder="MOBILE NO." autoCorrect={false} autoCapitalize="none" returnKeyType="next" keyboardType="phone-pad" onChangeText={phoneno => { this.setState({ phoneno }) }} value={this.state.phoneno} style={{ backgroundColor: 'white', width: "100%", paddingLeft: 25, fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, marginTop: 20, padding: 15, elevation: 3 }} />
            <TextInput onFocus={this.loginviewup} placeholder="PASSWORD" secureTextEntry={true} autoCorrect={false} autoCapitalize="none" returnKeyType="next" blurOnSubmit={true} autoFocus={this.state.focuses} onSubmitEditing={this.login} onChangeText={password => { this.setState({ password }) }} value={this.state.password} style={{ backgroundColor: 'white', width: "100%", paddingLeft: 25, fontSize: 18, borderRadius: 10, borderColor: "lightgrey", borderWidth: 0.5, marginTop: 10, padding: 15, elevation: 3 }} />

            {this.state.loading ? (
              <View style={{ marginTop: "3%" }} >
                <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#1dd38f', width: "100%", height: 50, borderRadius: 10, justifyContent: "center", elevation: 5, borderWidth: 0.1, borderColor: "black" }}>
                  <LinearGradient style={{ height: "100%", paddingHorizontal: "5%", borderRadius: 10 }} start={{ x: -2, y: 0 }} end={{ x: 1, y: 0 }} colors={['#16C886', '#11ece5']}   >
                    <ActivityIndicator size={45} color="white" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            ) : (
                <View>
                  <TouchableOpacity onPress={this.login} style={{ backgroundColor: '#1dd38f', width: "100%", height: 50, borderRadius: 10, marginTop: 10, borderWidth: 0.1, borderColor: "white" }}>
                    <LinearGradient style={{ height: "100%", paddingHorizontal: "5%", borderRadius: 10 }} start={{ x: -2, y: 0 }} end={{ x: 1, y: 0 }} colors={['#16C886', '#11ece5']}  >
                      <Text style={{ fontSize: 24, fontWeight: "normal", textAlign: "center", marginTop: 7, color: "white" }}>Login</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginTop: 5, padding: 5 }} activeOpacity={1} onPress={() => this.props.navigation.navigate('Insideregister')} >
                    <Text style={{ color: "#202946", fontSize: 16 }}>Dont Have An Account?<Text style={{ color: "#007bff" }}> Create account</Text> </Text>
                  </TouchableOpacity>
                </View>
              )}

          </Animated.View>

          <View style={{ justifyContent: "center", alignItems: "center", height: "10%" }}>
            <View  >
              <Text style={{ fontSize: 18, color: "red", textTransform: "capitalize" }}>{this.state.status}</Text>
            </View>

          </View>

        </Animated.View >
      </View>


    );
  };
}
export default Insidelogin;