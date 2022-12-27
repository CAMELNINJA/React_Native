import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {RootStackParamList} from '../../models/Param';
import weatherStore from '../../stores/Weather';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'WeatherMain'>;

const WeatherMain = observer(() => {
    const navigation = useNavigation<NavigationProp>();

    const choseCity = () => {
        navigation.navigate('Weather');
    }

    React.useEffect(() => {
        weatherStore.loadCurrentTemperature();
    }, []);

    return (
        <View style={styles.container}>
            <ExpoStatusBar style='auto' />

            <SafeAreaView style={styles.topSafeArea} />

            <SafeAreaView style={styles.bottomSafeArea}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={choseCity}>
                    <Text style={styles.buttonText}>{weatherStore.selectedCity.name}</Text>
                </TouchableOpacity>

                <View style={styles.button}>
                    <Text style={styles.temperatureText}>{weatherStore.currentTemperature} °C</Text>
                </View>
            </SafeAreaView>
        </View >
    );
});

export default WeatherMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight,
            },
        }),
    },
    topSafeArea: {
        flex: 0,
    },
    bottomSafeArea: {
        flexDirection:"row",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temperatureText: {
        fontSize: 30,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',

        height: 110,
        borderWidth: 1,
        margin:10,
        borderRadius: 55,
        padding: 10,
        backgroundColor: '#8582e8',
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 30,
        textTransform: 'uppercase',
    },
});