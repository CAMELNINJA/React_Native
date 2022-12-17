import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View, Button, FlatList, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


import { RootStackParamList } from './../models/Param'


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();
    const onNavigateToDo= useCallback(() => navigation.navigate("TodoScreen"),[])
    const onNavigateAuth= useCallback(() => navigation.navigate("Auth"),[])
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.item, {padding: 4, borderRadius: 15 , backgroundColor: '#8582e8', height: 40, alignSelf: 'center', margin:10,}]} onPress={onNavigateToDo }>
                <Text style={{ fontSize: 20 , padding: 5,  }}>TodoMobX</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item, {padding: 4, borderRadius: 15 , backgroundColor: '#8582e8', height: 40, alignSelf: 'center', margin:10,}]} onPress={onNavigateAuth }>
                <Text style={{ fontSize: 20, padding: 5, }}>Auth</Text>
            </TouchableOpacity>
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
    },
    item:{
        justifyContent: "center",
        marginLeft: 10,
    },
});