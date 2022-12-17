import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View, Button, FlatList, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TodoLine from "./ToDoLine";
import { RootStackParamList } from './Pram';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();
    const [todos, setTodos] = useState<string[]>([]);
    const [text, setText] = useState<string>('test');
    const addTodo = () => {
        if (!!text){
            setTodos([...todos, text]);
        }
    };
    const rmToDo = (index:number) => {
        let newTodos = todos.filter((_,i)=> i !== index);
        setTodos([...newTodos]);
        setText('');
    };


    const onNavigateToDo= useCallback((index:number)=>
         navigation.navigate("ToDo", {name:todos[index], onDelete: () => rmToDo(index)})
    ,[todos, rmToDo])

    return (
        <View style={styles.container}>
            <View style={{ flex:1 ,marginTop:15}}>
                <Text>NEW:</Text>
                <ScrollView>
                <FlatList
                    data={todos}
                    keyExtractor={(_, index) => String(index)}
                    renderItem={({ item , index }) => <TodoLine  name={item} onDelete={()=>rmToDo(index)} onNavigateToDo={()=>onNavigateToDo(index)}/>}
                />
                </ScrollView>
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
        backgroundColor: "#fff",
        flex: 1,
        margin: 10
    }
});