import { StatusBar } from 'expo-status-bar';
import {useState} from "react";
import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SwipeRender from 'react-native-swipe-render';
import Screen1 from './src/modules/flex/Screen1';
import Screen2 from './src/modules/flex/Screen2';
import Screen3 from './src/modules/flex/Screen3';
import Screen4 from './src/modules/flex/Screen4';
import Screen5 from './src/modules/flex/Screen5';
import Screen6 from './src/modules/flex/Screen6';
import Screen7 from './src/modules/flex/Screen7';
import Screen8 from './src/modules/flex/Screen8';

const Stack = createNativeStackNavigator();
export default function App() {



    return (
        <SwipeRender
            data={[
                { page: Screen1() },
                { page: Screen2() },
                { page: Screen3() },
                { page: Screen4() },
                { page: Screen5() },
                { page: Screen6() },
                { page: Screen7() },
                { page: Screen8() },
            ]}
            renderItem={({ item, index }) => {
                return (
                    <View key={"SwipeRender-slide#" + index} style={{flex: 1, backgroundColor: "#FFF"}} children={item.page}>
                    </View>
                );
            }}

            // OPTIONAL PROP USAGE.
            index={0} // default 0
            loop={false} // default false
            loadMinimal={true} // default false
            loadMinimalSize={2}
            horizontal={true} // default true

            enableAndroidViewPager={false} // default ScrollView
            // TO ENABLE AndroidViewPager:
            // react-native >= 0.60 - install @react-native-community/viewpager separately
            // react-native < 0.60 - ready to go!
        />
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