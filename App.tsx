import { StatusBar } from 'expo-status-bar';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import {useState} from "react";

const icons = {
    image:require('./finder.png'),
    icon:require('./628293_avatar_female_headset_person_support_icon.png'),
    video:require('./6579051_and_camera_computers_hardware_video_icon.png'),
    call:require('./9055406_bxs_phone_icon.png'),
    sound:require('./2203528_lound_sound_speaker_volume_icon.png'),
    mute: require('./6351966_microphone_mute_record_song_sound_icon.png')
}
export default function App() {
    const [count, setCount] = useState(0);
    return (
    <View style={styles.container}>
        <View style={styles.Counter}>
        <TouchableOpacity
            style={styles.button}
                onPress={() => setCount(count>0?count - 1:count)}>
            <View style={styles.OptionView}>
                <Text style={styles.OptionText}>-</Text>
            </View>
        </TouchableOpacity>
            <View style={styles.OptionView}>
                <Text style={styles.OptionText}>{count}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setCount(count + 1)}>
                <View style={styles.OptionView}>
                    <Text style={styles.OptionText}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
  },
    button: {
        borderColor: "#000",
        width: 100,
        height: 100,
        borderRadius: 20,
        justifyContent: "center",
        borderWidth: 1,
        backgroundColor: "white",
    },
    OptionText: {
    fontSize: 40,
        color: "black"
},
    OptionView: {
        flexDirection: "row",
        justifyContent: "center"
    },
    Counter: {
        flexDirection: "row",
        alignItems:"baseline",
        justifyContent: "space-around"
    },

});
