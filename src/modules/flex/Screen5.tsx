import React from "react";
import { View, StatusBar, Image, Text, StyleSheet } from "react-native";

const Screen5 = () => {
    return (
        <>
            <View style={{ flex: 1,  flexDirection: "column", backgroundColor: "blue", alignItems: "center", justifyContent: "center" }}>
                <Image
                    style={{ backgroundColor: "pink", borderWidth: 5, width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
                    source={{
                        uri: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-512.png",
                    }}
                />
                <Text style={{ color: "white", fontSize: 20 }}>John Doe</Text>
            </View>
            <View style={{ flex: 2, backgroundColor: "#fff", alignItems: "center" }}></View>
        </>
    );
};
export default Screen5;