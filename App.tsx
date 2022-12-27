import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/modules/base/Auth';
import TodoScreen from './src/modules/TodoMobX/ToDo'
import Timer from './src/modules/Timer/Timer'
import Home from './src/modules/Home';
import WeatherMain from './src/modules/Weather/WeatherMain'
import Weather from './src/modules/Weather/Weather'
import Product from "./src/modules/eShop/Product";

const Stack = createNativeStackNavigator();

export default function App() {

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="TodoScreen" component={TodoScreen} />
                <Stack.Screen name="Auth" component={AuthScreen} />
                <Stack.Screen name="Timer" component={Timer} />
                <Stack.Screen name="WeatherMain" component={WeatherMain} />
                <Stack.Screen name="Weather" component={Weather} />
                <Stack.Screen name="ProductScreen" component={Product}/>
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