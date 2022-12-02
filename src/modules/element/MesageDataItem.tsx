import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const MessageDataItem = ({ text  , image  }) => {
    return (
        <View style={style.uri}>
            <Image
                style={{ width: 50, height: 50, margin: 10 }}
                source={{ uri: image, }} />
            <Text style={style.text}>{text}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    text:{
        fontSize: 17,
        flex: 1,
        marginRight: 10,
        color: "blue"
    },
    uri:{
        margin: 6,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    })
export default MessageDataItem;