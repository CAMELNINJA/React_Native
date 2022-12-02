import React from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";

const Images = [
    {
        id: "0",
        image:
            "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-512.png",
    },
    {
        id: "1",
        image:
            "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-512.png",
    },
    {
        id: "2",
        image:
            "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-512.png",
    },
    {
        id: "3",
        image:
            "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-512.png",
    },
    {
        id: "4",
        image:
            "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-512.png",
    },
];

const Screen8 = () => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
                data={Images}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <View>
                        <Image
                            style={{ width: 196, backgroundColor:"yellow", height: 196, marginBottom: 5 }}
                            source={{
                                uri: item.image,
                            }}
                        />
                    </View>
                )}
            />
        </View>
    );
};
export default Screen8;