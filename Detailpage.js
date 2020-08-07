import React, { Component } from "react";
import { View, Image, Text, StatusBar, TouchableOpacity, SafeAreaView, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Detailpagecontent from "./Detailpagecontent";
import Loader from "./Loader";
import axios from "axios";
import { BlurView } from '@react-native-community/blur';


class Detailpage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         result: "",
         loading: true

      }
   }

   componentDidMount = async () => {
      // console.warn(this.state.search)

      await axios.get("https://agile-tor-28791.herokuapp.com/data/id/" + `${this.props.route.params.Data}`)
         .then(res => {
            //  console.warn(res.data)
            //  console.warn(this.props.route.params.Data)
            this.setState({ result: res.data, loading: false })
         })
         .catch(error => console.warn(error));

   }


   render() {
      return (
         <>

            {this.state.result ?
               <View style={{ flex: 1 }}>

                  <Detailpagecontent price={this.state.result.price} locality={this.state.result.locality} ownername={this.state.result.ownername} type={this.state.result.type} images={this.state.result.images} />

               </View>
               :
               <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
                  <View  style={{ width: 55, height: 55, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: "white",elevation:3 }} >
                     <ActivityIndicator size={35} color="#2c385c" />
                  </View>
               </View>
            }
         </>
      )
   }
}

export default Detailpage;

