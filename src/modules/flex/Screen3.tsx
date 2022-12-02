import React from "react";
import {StyleSheet, View} from "react-native";
import MessageDataItem from "../element/MesageDataItem";

const Messages = [
    {
        id: "0",
        image: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-512.png",
        text: "Test",
    },
    {
        id: "1",
        image: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-512.png",
        text: "Test",
    },
    {
        id: "2",
        image: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_woman_female_person-512.png",
        text: "Test",
    },
    {
        id: "3",
        image: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_woman_female_person-512.png",
        text: "Test",
    },
    {
        id: "4",
        image: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_woman_female_person-512.png",
        text: "Test",
    },
];

const Screen3 = () => {
    return (
        <View style={{ flex: 1 }}>
            {Messages.map((message) => (
                <MessageDataItem key={message.id} text={message.text} image={message.image} />
            ))}
        </View>
    );
};


export default Screen3;