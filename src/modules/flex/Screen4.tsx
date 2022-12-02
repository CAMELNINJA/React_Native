import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Screen4 = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center", flexDirection: "column" }}>
            <View style={{ height: "15%", width: "100%", backgroundColor: "blue", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 25, color: "white" }}>Lorem ipsum</Text>
            </View>
            <View style={{ width: "90%", marginTop: 15 }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    Lorem ipsum dolor sit amet, adjectives elite.
                </Text>
                <Text style={{ marginTop: 10 }}>
                    Lorem ipsum dolor sit amet, adjectives addict, but do
                    i feel like i've been through labor and pain for some reason. Out of one ad
                    at least i wanted to do the nostradamus work out
                    she came from a comfortable outsider. Let the pain go in
                    i swear by that gorgeous wrapper i did not hide anything
                    parity. The exempt person is unwelcome, i am in
                    the person who is responsible deserves a dental appointment is a job.
                </Text>
                <TouchableOpacity style={{ marginVertical: 10 }}>
                    <Text style={{ color: "blue" }}>Lorem ipsum, the pain</Text>
                </TouchableOpacity>

                <Text style={{ color: "gray" }}>2017-11-27 13:03:01</Text>
            </View>
            <View style={{ flexDirection: "row", width: "90%", height: "auto", marginHorizontal: 25, alignItems: "center", marginTop: 15 }}>
                <View style={{ width: 110, height: 110, backgroundColor: "blue", alignItems: "center", justifyContent: "center", borderRadius: 50 }}>
                    <Image
                        style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: "green" }}
                        source={{
                            uri: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-512.png",
                        }}
                    />
                </View>

                <Text style={{ marginLeft: 15, fontSize: 25, color: "blue", fontWeight: "bold" }}>Johan Doe</Text>
            </View>
            <TouchableOpacity style={{ marginTop: 20, width: "90%" }}>
                <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "blue", borderRadius: 20, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Like</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Screen4;