import React, {FC, useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import { useState, } from 'react';
import { observer } from "mobx-react-lite";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Todo} from '../../models/Todo';
import TodoStore from "../../stores/TodoStore";

interface Props {
    task: Todo
}
const ToDoLine: FC<Props>= observer(({task}) => {

    return (
        <View>
            <View style={styles.todoLine}>
                <TouchableOpacity style={styles.item} onPress={() => TodoStore.completeTask(task.id) }>
                    <Text style={{ fontSize: 20, textDecorationLine: task.isDone ? "line-through" : "none" }}>{task.text}</Text>
                </TouchableOpacity>
                <View style={{width: Dimensions.get('window').width * 0.1, flexDirection: 'row'}}>
                    <TouchableOpacity style={[styles.item, {padding: 4, borderRadius: 15 , backgroundColor: '#8582e8', height: 40,}]} onPress={()=>TodoStore.removeTask(task.id)}>

                        <View style={styles.button}>
                            <Text style={{}}>X</Text>
                        </View>

                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
});

export default ToDoLine;

const styles = StyleSheet.create({
    todoLine: {
        borderColor: "black",
        borderBottomWidth: 1,
        flexDirection: "row",
        height: 50,
        justifyContent: "space-between"
    },
    button:{
        justifyContent:"center",
        flexDirection:"row" ,
    },
    rmToDo:{
        margin: 10,
        width: 30,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
    },
    item:{
        justifyContent: "center",
        marginLeft: 10,
    },
});