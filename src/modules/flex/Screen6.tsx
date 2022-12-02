import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Screen6 = () => {
    return (
        <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
            <Image
                style={{ width: 250, height: 250, marginTop: "5%" }}
                source={{
                    uri: "https://i5.walmartimages.com/asr/9c8cab4e-5757-4429-ad9a-4ca28cf59c3d.bf7d5819a4125ddef1ed1a4bf280311e.jpeg",
                }}
            />
            <Text style={{ fontSize: 30, marginTop: "5%" }}>Super Soft T-Shirt</Text>
            <Text style={{ fontSize: 20, color: "green", fontWeight: "bold", marginTop: 10 }}>$ 12.22</Text>
            <View style={{ marginTop: 10, marginHorizontal: 30 }}>
                <Text style={{ fontSize: 17, color: "gray" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity style={{ marginHorizontal: 2 }}>
                    <Icon name="star-o" size={45} color="#f7c900" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 2 }}>
                    <Icon name="star-o" size={45} color="#f7c900" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 2 }}>
                    <Icon name="star-o" size={45} color="#f7c900" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 2 }}>
                    <Icon name="star-o" size={45} color="#f7c900" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 2 }}>
                    <Icon name="star-o" size={45} color="#f7c900" />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity style={[style.base,{ backgroundColor: "#e7b753"}] } />
                <TouchableOpacity style={[style.base,{ backgroundColor: "red"}] } />
                <TouchableOpacity style={[style.base,{ backgroundColor: "green"}]}/>
                <TouchableOpacity style={[style.base,{ backgroundColor: "blue"}] } />
                <TouchableOpacity style={[style.base,{ backgroundColor: "yellow"}] }/>
                <TouchableOpacity style={[style.base,{ backgroundColor: "black"}]}/>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity style={[style.base, style.baseJest]}>
                    <Text style={{ fontWeight: "bold" }}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.base, style.baseJest]}>
                    <Text style={{ fontWeight: "bold" }}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.base, style.baseJest]}>
                    <Text style={{ fontWeight: "bold" }}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.base, style.baseJest]}>
                    <Text style={{ fontWeight: "bold" }}>XL</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15, borderWidth: 0.5, width: "80%", borderColor: "gray" }} />
            <View style={{ height: 50, width: "80%", marginTop: 15, borderRadius: 50, backgroundColor: "#72f4ff", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>Add To Card</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    base:{
        height: 40,
        width: 40,
        borderRadius: 50,
        marginHorizontal: 3,
    },
    baseJest:{
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})
export default Screen6;