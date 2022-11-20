import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from './Pram';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ToDo'>;
type ToDoRouteProp = RouteProp<RootStackParamList, 'ToDo'>;



function ToDoScreen() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<ToDoRouteProp>();
    const Name = route.params.name;


    const onDelete = () => {
        navigation.goBack()
        route.params.onDelete()
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.title,{flex:1}]}>{Name}</Text>
            <View style={{flex:0.2}}>
                <View style={styles.btn}>
                    <Button
                        title="Home"
                        onPress={() => { navigation.popToTop() }} />
                </View>

                <View style={styles.btn}>
                    <Button
                        title="Remove"
                        onPress={onDelete}
                    />
                </View>
            </View>


        </View>
    )
}

export default ToDoScreen

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