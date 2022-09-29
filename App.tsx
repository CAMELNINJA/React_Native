import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

const image = require('./finder.png');

export default function App() {
  const [name, setName] = useState("200");
  var stat= 'https://http.cat/'+name
   var numbers = ['ToDo', "Doing", 'Done', 'asfdas','afdsfad'];
   var viewList=numbers.map(function (num, i){return (
       <View><Image source={image} style={styles.imgHor}/><Text style={styles.textHor}>{num}</Text></View>)
   })
    return (
    <View style={styles.container}>
      <View style={{marginTop:100}}><Text style={styles.text}>hi its first app CAMELNINGA</Text>
      <Image
          style={styles.tinyLogo}
          source={ {uri: stat,}}
          ></Image>
      </View>
      <View style={styles.container}>
        <Text > Status Code</Text>
        <TextInput style={styles.input} placeholder="200" maxLength={3}  onChangeText={(value) => setName(value)}/>
      </View>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <View style={styles.big} >
          {viewList}
          </View>


        </ScrollView>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{fontSize:16}}>Раз <Text style={{fontWeight: 'bold'}}>два три </Text> четыре пять </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:16,
    fontWeight: 'bold'
  },
  tinyLogo: {
    width: 300,
    height: 300,
    margin:10,
  },
  big:{
    width: 60,
    marginLeft: 60,
    flexDirection:"row"
  },
  scrollView:{
    width: 500,
    height:100
  },
  textHor:{
    marginRight: 10,
    marginLeft:4,
  },
  imgHor:{
    marginLeft:10,
    marginRight:4,
    width: 20,
    height: 20
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
