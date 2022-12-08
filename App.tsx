import { StatusBar } from 'expo-status-bar';
import {useState} from "react";
import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/modules/base/Auth';

const Stack = createNativeStackNavigator();

export default function App() {

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth">
                <Stack.Screen name="Auth" component={AuthScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d7d7d7',
        alignItems: 'center',
        justifyContent: 'center',
    },
});