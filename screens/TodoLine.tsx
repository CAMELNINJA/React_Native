import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from './Pram';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ToDoLine'>;
type ToDoLineRouteProp = RouteProp<RootStackParamList, 'ToDoLine'>;



function ToDoLineScreen({navigation, route}) {
    const Name = route.params.name;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{Name}</Text>
            <Text style={styles.name}>todo</Text>
            <View>
                <Button
                    title="Remove"
                    onPress={()=>{}}
                />
            </View>
            <View style={styles.btn}>
                <Button
                    title="Home"
                    onPress={() => { navigation.popToTop() }} />
            </View>
        </View>
    )
}

export default ToDoLineScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 10,
    },
    btn: {
        margin: 5,
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
});