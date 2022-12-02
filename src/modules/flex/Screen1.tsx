import React from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet} from "react-native";

const Screen1 = () => (
    <View style={style.container}>
        <Image
            style={{ borderWidth: 5, width: 100, height: 100, marginBottom: 10, marginTop: 50 }}
            source={{
                uri: "https://cdn1.iconfinder.com/data/icons/icons-for-a-site-1/64/advantage_like-512.png",
            }}
        />
        <Text style={{ fontSize: 20, marginTop: 10 }}>The order has been placed</Text>
        <Text style={{ marginHorizontal: 40, marginVertical: 15 }}>
            Your order has been successfully placed. In the near future, our
            manager.
        </Text>
        <TouchableOpacity style={{ backgroundColor: "blue", borderRadius: 20, paddingVertical: 10, paddingHorizontal: 55 }}>
            <Text style={{ fontSize: 15, color: "white", fontWeight: "bold", textTransform: "uppercase", }}>Continue</Text>
        </TouchableOpacity>
    </View>
);

const style =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    },

});
export default Screen1;