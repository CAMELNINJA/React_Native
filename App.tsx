import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
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
  const [name, setName] = useState("200");
  var stat= 'https://http.cat/'+name
   var numbers = ['ToDo', "Doing", 'Done', 'asfdas','afdsfad'];
   var viewList=numbers.map(function (num, i){return (
       <View>

       </View>)
   })
    return (
    <View style={styles.container}>
        <View style={{margin:10}}>
        <View style={styles.buttonStart}>
            <Image style={styles.imgVideo} source={icons.video}></Image>
            <Text style={styles.text}>WHATSAPP CALL</Text>
        </View>
        <View ><Text style={styles.textBig} >Marc Johnson</Text></View>
        <View ><Text style={styles.text}>CALLING</Text></View>
        </View>
        <View style={{alignItems:"baseline"}}><Image style={styles.imgBig}  source={icons.icon}></Image></View>
        <View style={styles.center}>
        <View style={styles.buttons}>
            <Image style={styles.imgSmal} source={icons.sound}></Image>
            <Image style={styles.imgSmal} source={icons.call}></Image>
            <Image style={styles.imgSmal} source={icons.mute}></Image>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#276056',
  },
    text:{
        fontSize:10,
      color:`#FFF`
    },
    textBig:{
        fontSize:30,
        color:`#FFF`
    },
    buttons:{
      flexDirection:"row",
        justifyContent: "space-around",

    },
    center:{
      flex:1,
        justifyContent:"center",
       alignContent:"center",

    },
    buttonStart:{
        flexDirection:"row",
        justifyContent: "flex-start",
        marginBottom:5,
    },
    imgSmal:{
      height:25,
        width:25,
    },
    imgVideo:{
        height:25,
        width:25,
        marginRight:45,
    },
    imgBig:{
     height:300,
      width:"100%",
    },
});
