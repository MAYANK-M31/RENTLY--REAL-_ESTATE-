import React, { Component } from "react";
import { View, Image, Text, StatusBar, TouchableOpacity, TextInput, Modal, ActivityIndicator,  ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons"
import Material from "react-native-vector-icons/MaterialIcons"
import * as Animatable from 'react-native-animatable';
import { IndicatorViewPager, PagerDotIndicator } from 'react-native-best-viewpager';
import Swiper from 'react-native-swiper';
import GallerySwiper from "react-native-gallery-swiper"
import Animated from "react-native-reanimated"


const {Value,Extrapolate} = Animated;



class Detailpagecontent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            phoneno: "",
            name: "",
            successmodal: false,
            gallerymodal: false
        }
        this.scrollY = new Value(0)
        this.translateY = this.scrollY.interpolate({
            inputRange: [180, 185],
            outputRange: [0, 0],
            extrapolate: Extrapolate.CLAMP
        })

        this.opacity = this.scrollY.interpolate({
            inputRange: [190, 190],
            outputRange: [0, 1],
            extrapolate: Extrapolate.CLAMP
        })

        this.backgroundColor = this.scrollY.interpolate({
            inputRange: [170, 210],
            outputRange: [Animated.color(0,0,0, 0),Animated.color(255, 255, 255)],
            extrapolate: Extrapolate.CLAMP
        })
       
        this.opacity1 = this.scrollY.interpolate({
            inputRange: [0, 180],
            outputRange: [0, 1],
            extrapolate: Extrapolate.CLAMP
        })

        this.translate1Y = this.scrollY.interpolate({
            inputRange: [0, 380],
            outputRange: [0,-250],
            extrapolate: Extrapolate.CLAMP,
        })
    }



    openmodal = () => {
        this.setState({ modal: true })
    }

    closemodal = () => {
        this.setState({ modal: false })
    }


    closesuccessmodal = () => {
        this.setState({ successmodal: false })
    }

    firetext = () => {
        fetch(`https://lit-anchorage-49774.herokuapp.com/sendtext?recipient=${this.state.phoneno}&ownername=${this.props.ownername}&locality=${this.props.locality}&price=${this.props.price}&name=${this.state.name}`)
        // .catch(err => console.error(err))
        // console.log(this.state.recipient)
        this.setState({ modal: false })
        this.setState({ successmodal: true })




    }

    _renderDotIndicator() {
        return <PagerDotIndicator color="red" pageCount={2} />;
    }


    render() {
        

        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" hidden={true} />


                <Modal transparent={true} visible={this.state.modal} >
                    <Animatable.View animation="fadeInUpBig" duration={150} style={{ flex: 1 }} >
                        <View style={{ flex: 1 }}>
                        </View>

                        <View style={{ flex: 3, backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 15, elevation: 10, borderWidth: 0.4, borderColor: "grey" }} >
                            <View style={{ flex: 0.4, alignItems: "flex-start", flexDirection: "row" }} >
                                <View style={{ width: "86%", alignItems: "center" }} >
                                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "#1dd38f", marginLeft: "20%" }} >Contact</Text>
                                </View>
                                <TouchableOpacity style={{ width: "10%", height: 50, alignItems: "flex-end", marginLeft: "4%" }} onPress={this.closemodal}>
                                    <Material name="close" size={28} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 5, alignItems: "center" }} >

                                <View style={{ backgroundColor: "white", width: "100%", alignItems: "center", marginBottom: "2%" }} >
                                    <Text style={{ color: "grey" }} >SMS will be sent with exact Direction to the house.</Text>
                                </View>

                                <View style={{ backgroundColor: "white", width: "100%", alignItems: "center", marginTop: "3%" }} >
                                    <TextInput keyboardType="default" placeholder=" Full Name" onChangeText={name => this.setState({ name })}
                                        style={{ borderRadius: 8, borderWidth: 0.5, width: "95%", borderColor: "#1dd38f", fontSize: 18 }} autoFocus={true} />
                                </View>
                                <View style={{ backgroundColor: "white", width: "100%", alignItems: "center", marginTop: "3%" }} >
                                    <TextInput maxLength={10} keyboardType="phone-pad" placeholder=" Phone Number" onChangeText={phoneno => this.setState({ phoneno })}
                                        style={{ borderRadius: 8, borderWidth: 0.5, width: "95%", borderColor: "#1dd38f", fontSize: 18 }} />
                                </View>
                                <View style={{ backgroundColor: "white", width: "100%", alignItems: "center", marginTop: "3%" }} >
                                    <TouchableOpacity onPress={this.firetext} style={{ borderRadius: 8, borderWidth: 0.1, width: "95%", height: 40, backgroundColor: "#1dd38f", alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ color: "white" }} >Submit</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ backgroundColor: "white", width: "100%", alignItems: "center", marginTop: "3%" }} >
                                    <View style={{ width: "94%", borderWidth: 0.5, padding: 5, backgroundColor: "#ffccef" }} >

                                        <Text><Icon name="lock" size={13} /> We are very concerned about user data and our team makes delebrate efforts to ensure that your data remain secure.</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </Animatable.View>
                </Modal>



                <Modal transparent={true} visible={this.state.successmodal} >
                    <Animatable.View animation="fadeInUpBig" duration={700} style={{ flex: 1 }} >
                        <View style={{ flex: 0.2 }}>
                        </View>

                        <View style={{ flex: 3, backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 15, elevation: 10, borderWidth: 0.4, borderColor: "grey" }} >
                            <View style={{ flex: 0.4, alignItems: "flex-end" }} >
                                <TouchableOpacity style={{ width: "10%", height: 50, alignItems: "flex-end", marginLeft: "4%" }} onPress={this.closesuccessmodal}>
                                    <Material name="close" size={28} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 5, alignItems: "center" }} >

                                <Animatable.View animation="bounceIn" iterationCount={10} style={{ backgroundColor: "white", width: 120, height: 120, alignItems: "center", marginBottom: "2%" }} >
                                    <Image source={require("./images/yes.png")} style={{ width: "100%", height: "100%" }} />
                                </Animatable.View>

                                <View style={{ backgroundColor: "white", width: "100%", height: 50, alignItems: "center", marginBottom: "2%" }} >
                                    <Text style={{ fontSize: 30, color: "#0EA504", fontWeight: "bold" }} >Yayy!!</Text>
                                </View>
                                <View style={{ backgroundColor: "white", width: "100%", height: 30, alignItems: "center", padding: 10 }} >
                                    <Text style={{ fontSize: 25, color: "#0EA504", fontWeight: "bold" }} >SMS has been succesfully</Text>
                                </View>
                                <View style={{ width: "100%", height: 30, alignItems: "center", padding: 10 }} >
                                    <Text style={{ fontSize: 25, color: "#0EA504", fontWeight: "bold" }} >sended to your Number</Text>
                                </View>
                                <View style={{ width: "100%", height: 30, alignItems: "center", marginBottom: "2%", padding: 10 }} >
                                    <Text style={{ fontSize: 25, color: "#0EA504", fontWeight: "bold" }} >+91{this.state.phoneno}</Text>
                                </View>


                            </View>
                        </View>
                    </Animatable.View>
                </Modal>

                <Modal transparent={true} visible={this.state.gallerymodal} >

                    <View style={{ flex: 1, backgroundColor: "white" }} >
                        <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ gallerymodal: false })} style={{ width: "100%", alignItems: "flex-end", padding: 10 }} >
                            <Material name={"close"} size={40} color={"black"} />
                        </TouchableOpacity>
                        <Animatable.View animation={"slideInDown"} duration={500} style={{ width: "100%", height: "90%" }} >
                            <GallerySwiper style={{ width: "100%", height: "100%" }}
                                images={[
                                    { source: { uri: this.props.images }, dimensions: { width: "100%", height: 1920 } },
                                    { source: require("./images/5.jpeg"), dimensions: { width: "100%", height: 1920 } },
                                    { source: require("./images/6.jpeg"), dimensions: { width: "100%", height: 1920 } }

                                ]} />
                        </Animatable.View>
                    </View>

                </Modal>

                <Animated.View style={{
                    height: 60, width: "100%", backgroundColor: this.backgroundColor,
                    zIndex:1,elevation:0.1, position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row",
                    transform: [{ translateY: this.translateY }]
                }}>
                    <Animated.View style={{ width: "100%", flex: 0.1, justifyContent: "center", alignItems: "flex-start", paddingLeft: 12,opacity:this.opacity }}>
                        <TouchableOpacity activeOpacity={1}     >
                            <Ionicons name="ios-arrow-back" color={"black"} size={40}  />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={{ width: "100%", flex: 1, justifyContent: "center", alignItems: "center", right: "40%",opacity:this.opacity }}>
                        <Text style={{ fontSize: 20, fontWeight: "normal", textTransform: "uppercase", color: "black" }} >{this.props.type}</Text>
                    </Animated.View>
                </Animated.View>

                <View style={{ flex: 5 }}>
                    <Animated.View style={{ height: 250,transform:[{translateY:this.translate1Y}], width: "100%", position: "absolute" }}>
                        <View style={{ height: "100%", width: "100%" }}>
                            {/* <Image style={{ resizeMode: "cover", height: "100%", width: "100%" }} source={{ uri: this.props.images }} />            */}
                            <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ gallerymodal: true }) }} >
                                <ImageBackground style={{ resizeMode: "cover", height: "110%", width: "100%" }} source={{ uri: this.props.images }}>
                                    <View style={{ width: "100%", flex: 0.25, justifyContent: "center", alignItems: "flex-start", paddingLeft: 12 }}>
                                        <TouchableOpacity activeOpacity={1}   >
                                            <Ionicons name="ios-arrow-back" color={"white"} size={40} />
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>

                        </View>
                    </Animated.View>
                    <Animated.ScrollView showsVerticalScrollIndicator={false} onScroll={(e) => { this.scrollY.setValue(e.nativeEvent.contentOffset.y) }} >
                        <TouchableOpacity style={{zIndex:1}} activeOpacity={0} onPress={() => { this.setState({ gallerymodal: true }) }} >
                            <Animated.View style={{ height: 250, width: "100%",opacity:this.opacity1,backgroundColor:"white" }}>

                            </Animated.View>
                        </TouchableOpacity>


                        <View style={{ flex: 1, minHeight: 105, width: "100%",elevation:10 }} >
                            <View style={{ flexDirection: "row", height: "100%", width: "100%", backgroundColor: "white", borderColor: "lightgrey", padding: 10 }}>
                                <View style={{ height: "100%", width: "100%" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ width: "90%" }} >
                                            <Text style={{ fontSize: 22, fontWeight: "bold", textTransform: "capitalize" }} >{this.props.type} in {this.props.locality}</Text>
                                            <Text style={{ fontSize: 18, color: "grey" }} >Near outer ring rood</Text>
                                            <Text style={{ fontSize: 19, color: "grey" }} >Deposit:1 month rent</Text>
                                        </View>
                                        <View style={{ height: "100%", width: "10%", paddingTop: "2%", alignItems: "center" }}>
                                            <Icon name="map-marker" size={30} color="#f57083" />
                                            <Text style={{ color: "#f57083" }}>Map</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </View>

                        <View style={{ flex: 1, minHeight: 60, width: "100%", marginBottom: "0%" }} >
                            <View style={{ flexDirection: "row", height: "100%", width: "100%", backgroundColor: "white", borderWidth: 0.5, borderColor: "lightgrey", padding: 10 }}>
                                <View style={{ height: "100%", width: "100%", flexDirection: "row" }}>
                                    <View style={{ width: "70%", paddingTop: "1%" }} >
                                        <Text style={{ fontSize: 20, color: "black" }} >{this.props.ownername}</Text>
                                    </View>
                                    <View style={{ width: "30%", height: "100%" }} >
                                        <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', height: "100%", backgroundColor: "#1dd38f", width: "100%", alignItems: "center", justifyContent: "center", padding: "2.5%", borderRadius: 8 }}>
                                            <Icon name="comment" size={20} color="white" />
                                            <Text style={{ fontSize: 18, fontWeight: "normal", color: "white" }}> Chat</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, minHeight: 180, width: "100%" }} >
                            <View style={{ flexDirection: "row", height: "100%", width: "100%", backgroundColor: "white", padding: 10 }}>
                                <View style={{ height: "100%", width: "100%" }}>
                                    <Text style={{ fontSize: 22 }} >House Features</Text>
                                    <View style={{ flexDirection: "row", marginBottom: "1%" }}>
                                        <View style={{ height: "100%", width: "50%", paddingTop: "2%", alignItems: "center" }} >
                                            <Icon name="bed" size={30} color="black" />
                                            <Text style={{ color: "black" }}>Bed</Text>
                                        </View>
                                        <View style={{ height: "100%", width: "50%", paddingTop: "2%", alignItems: "center" }}>
                                            <Icon name="bath" size={30} color="black" />
                                            <Text style={{ color: "black" }}>1 Bathroom</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ height: "100%", width: "50%", paddingTop: "2%", alignItems: "center" }} >
                                            <Icon name="wifi" size={30} color="black" />
                                            <Text style={{ color: "black" }}>Wi-Fi</Text>
                                        </View>
                                        <View style={{ height: "100%", width: "50%", paddingTop: "2%", alignItems: "center" }}>
                                            <Icon name="spoon" size={30} color="black" />
                                            <Text style={{ color: "black" }}>Food</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </View>


                        <View style={{ flex: 1, minHeight: 360, width: "100%", marginBottom: "0%", borderWidth: 0.5, borderColor: "lightgrey" }} >
                            <View style={{ flex: 1, flexDirection: "row", height: "100%", width: "100%", backgroundColor: "white", padding: 10, paddingLeft: 15 }}>
                                <View style={{ height: "100%", width: "100%" }}>
                                    <Text style={{ fontSize: 22 }} >Rent Details</Text>
                                    <View style={{ flexDirection: "row", height: 60 }}>
                                        <View style={{ flex: 1, height: "100%", width: "80%", alignItems: "flex-start", justifyContent: "center" }} >
                                            <Text style={{ color: "black", fontSize: 17 }}>Monthly Rent</Text>
                                        </View>
                                        <View style={{ height: "100%", width: "20%", alignItems: "center", justifyContent: "center" }}>
                                            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>&#8377;{this.props.price}/-</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", height: 80 }}>
                                        <View style={{ flex: 1, height: "100%", width: "40%", alignItems: "flex-start", justifyContent: "center" }} >
                                            <Text style={{ color: "black", fontSize: 17 }}>Security Deposit</Text>
                                            <Text style={{ color: "#1dd38f", fontSize: 13 }}>100% Refundable if house is left at same comdtion at the time of leaving the house </Text>
                                        </View>
                                        <View style={{ height: "100%", width: "50%", alignItems: "flex-end", marginTop: 8, padding: 10 }}>
                                            <Text style={{ color: "black", fontSize: 15 }}>Only 2 month rent
                                          </Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", height: 80 }}>
                                        <View style={{ flex: 1, height: "100%", width: "50%", alignItems: "flex-start", justifyContent: "center" }} >
                                            <Text style={{ color: "black", fontSize: 17 }}>Brokage</Text>
                                            <Text style={{ color: "#1dd38f", fontSize: 13 }}>100% Free No Broker</Text>
                                        </View>
                                        <View style={{ height: "100%", width: "50%", alignItems: "flex-end", marginTop: 8, padding: 10 }}>
                                            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold", paddingRight: 0 }}>&#8377;0/-
                                          </Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", height: 55 }}>
                                        <View style={{ flex: 1, height: "100%", width: "70%", alignItems: "flex-start", justifyContent: "center" }} >
                                            <Text style={{ color: "black", fontSize: 17 }}>Monthly Maintaince Charges</Text>
                                            <Text style={{ color: "#1dd38f", fontSize: 13 }}></Text>
                                        </View>
                                        <View style={{ height: "100%", width: "30%", alignItems: "flex-end", padding: 10 }}>
                                            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>&#8377;199/-
                                          </Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", height: 30 }}>
                                        <View style={{ flex: 1, height: "100%", width: "70%", alignItems: "flex-start", justifyContent: "center" }} >
                                            <Text style={{ color: "red", fontSize: 15 }}>Rent Excludes:<Text style={{ color: "red", fontSize: 13 }}>Food,Utilities&Bills</Text></Text>

                                        </View>
                                    </View>

                                </View>

                            </View>
                        </View>

                        <View style={{ flex: 1, minHeight: 80, width: "100%", marginBottom: "0%" }} >
                            <View style={{ flexDirection: "row", height: "100%", width: "100%", backgroundColor: "white", borderWidth: 0.5, borderColor: "lightgrey", padding: 10 }}>
                                <View style={{ height: "100%", width: "100%", flexDirection: "row" }}>
                                    <View style={{ width: "60%", paddingTop: "1%", flexDirection: "row" }} >
                                        <View>
                                            <Text style={{ fontSize: 18 }} >Shippment<Text style={{ color: "red" }}>*</Text></Text>
                                            <Text style={{ fontSize: 13, color: "#1dd38f" }} >We Offer Good Shippment Services too.</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: "40%", height: "100%", alignItems: "flex-end", justifyContent: "center" }} >
                                        <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: "row", height: "70%", backgroundColor: "#1dd38f", width: "80%", alignItems: "center", justifyContent: "center", padding: "2.5%", borderRadius: 8 }}>
                                            <Icon name="truck" color="white" size={25} />
                                            <Text style={{ fontSize: 18, fontWeight: "normal", color: "white" }}> Move</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, minheight: 80, width: "100%", marginBottom: "0%" }} >
                            <View style={{ height: "100%", width: "100%", backgroundColor: "white", borderWidth: 0.5, borderColor: "lightgrey", padding: 10 }}>
                                <View style={{ height: "100%", width: "100%" }}>
                                    <View style={{ width: "70%", paddingTop: "1%", height: 40 }} >
                                        <Text style={{ fontSize: 20 }} >Terms Of Living</Text>
                                    </View>
                                    <View style={{ width: "90%", paddingTop: "1%" }} >
                                        <Text style={{ fontSize: 15 }} >1. Animals Are not Allowed inside the House</Text>
                                        <Text style={{ fontSize: 15 }} >2. Fine will Be charged For Damaging Property</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </Animated.ScrollView>
                </View>

                <View style={{ flex: 0.4, backgroundColor: "white", padding: 20, borderWidth: 0.5, borderColor: "lightgrey" }}>
                    <View style={{ flexDirection: "row-reverse" }}>
                        <View style={{ width: "65%" }} >
                            <TouchableOpacity onPress={this.openmodal} activeOpacity={0.8} style={{ height: 60, backgroundColor: "#1dd38f", width: "100%", alignItems: "center", padding: "2.5%", borderRadius: 4 }}>
                                <Text style={{ fontSize: 18, fontWeight: "normal", color: "white" }}>Contact</Text>
                                <Text style={{ fontSize: 14, color: "#f2f2f2" }}>& Visit The House</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingTop: "1%", paddingLeft: "2%", width: "35%" }}>
                            <Text style={{ fontSize: 20, textTransform: "capitalize", fontWeight: "bold" }}>&#8377;{this.props.price}</Text>
                            <Text style={{ fontSize: 14, textTransform: "capitalize", color: "grey" }}>per month</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

export default Detailpagecontent;