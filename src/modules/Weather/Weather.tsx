import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {RootStackParamList} from '../../models/Param';
import ICityData from '../../models/City';
import weatherStore from '../../stores/Weather';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Weather'>;

const CityListScreen = observer(() => {
    const navigation = useNavigation<NavigationProp>();

    const choseCity = (city: ICityData) => {
        weatherStore.setSelectedCity(city);
        navigation.goBack();
    }

    const renderItem: ListRenderItem<ICityData> = ({ item }) => (
        <TouchableOpacity
            style={styles.cityLine}
            onPress={() => choseCity(item)}>
            <Text style={styles.cityName}>{item.name}</Text>
        </TouchableOpacity>
    );

    const data = weatherStore.cityDataList.slice().sort((x, y) => x.name.localeCompare(y.name));

    return (
        <View style={styles.container}>
            <ExpoStatusBar style='auto' />

            <SafeAreaView style={styles.topSafeArea} />

            <SafeAreaView style={styles.bottomSafeArea}>
                <FlatList
                    style={styles.cityList}
                    data={data}
                    contentContainerStyle={{ padding: 10 }}
                    keyExtractor={(city) => city.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} />
            </SafeAreaView>
        </View >
    );
});

export default CityListScreen;

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
        flex: 1,
    },
    cityList: {
        flex: 1,
    },
    cityLine: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        borderWidth: 1,
        borderRadius: 55,
        margin: 10,
        padding: 10,
    },
    cityName: {
        fontSize: 30,
        textTransform: 'uppercase',
    },
});