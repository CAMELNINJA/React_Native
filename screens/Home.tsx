import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, FlatList, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from './Pram';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('test');
    const addTodo = () => {
        if (text!=""){
            let newTodos = [...todos];
            newTodos.push(text);
            setTodos(newTodos);
            setText('add text');
        }
    };
    const rmToDO = (index) => {
        let newTodos = [...todos];
        if (index !== -1) {
            newTodos.splice(index, 1);
        }
        setTodos(newTodos);
        setText('');
    };
    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <View style={styles.container}>
            <View style={{ flex:1 ,marginTop:15}}>
                <Text>NEW:</Text>
                <FlatList
                    data={todos}
                    keyExtractor={(item, index) => keyExtractor(index)}
                    renderItem={({ item, index }) =>
                        <View style={styles.todoLine}>
                            <TouchableOpacity style={styles.todoLineTouch} onPress={() => { navigation.navigate('ToDoLine',{name:item}) }}>
                                <Text style={{ flex: 3 }}>{item}</Text>
                            </TouchableOpacity >
                        </View>}
                />
            </View>
            <View style={styles.footer}>
                <View style={{ flex:6 }}>
                    <TextInput style={styles.textInput} onChangeText={newText => setText(newText)} value={text}></TextInput >
                </View>
                <View style={{ flex:4 }}>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => addTodo()}>
                        <View style={{ flex:1, justifyContent:"center" }}>
                            <View style={{ justifyContent:"center", flexDirection:"row" }}>
                                <Text style={{ fontSize:20 }}>Add</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    todoLine: {

    },
    todoLineTouch: {

    },
    textInput: {
        borderWidth: 1,
        borderColor: "black",
        flex: 1,
        margin: 10
    },
    footer: {
        height:50,
        flexDirection: "row"
    },
    button: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "pink",
        flex: 1,
        margin: 10
    }
});