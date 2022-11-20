import React, {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import { useState, } from 'react';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from './Pram';

type ToDoLineRouteProp = RouteProp<RootStackParamList, 'ToDoLine'>;
interface Props {
    name: string
    onDelete : ()=>void
    onNavigateToDo:()=>void
}
const ToDoLine: FC<Props> =(props)=> {
    const item = props.name;
    const [isComplete, setComplete] = useState(false);


    return (
        <View>
            <View style={styles.todoLine}>
                <TouchableOpacity style={styles.item} onPress={() => setComplete(!isComplete) }>
                    <Text style={{ fontSize: 20, textDecorationLine: isComplete ? "line-through" : "none" }}>{item}</Text>
                </TouchableOpacity>
                <View style={{width: Dimensions.get('window').width * 0.35, flexDirection: 'row'}}>

                <TouchableOpacity style={[styles.item, {padding: 4, borderRadius: 15 , backgroundColor: '#8582e8', height: 40, alignSelf: 'center'}]} onPress={props.onNavigateToDo }>
                    <Text style={{ fontSize: 20, textDecorationLine: isComplete ? "line-through" : "none", padding: 5, }}>OPEN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.item, {padding: 4, borderRadius: 15 , backgroundColor: '#8582e8', height: 40, alignSelf: 'center'}]} onPress={()=>props.onDelete()}>

                        <View style={styles.button}>
                            <Text style={{}}>X</Text>
                        </View>

                </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

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