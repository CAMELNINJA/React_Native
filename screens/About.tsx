import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from './Pram';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'About'>;

function AboutScreen() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>About App</Text>

            <View style={styles.btn}>
                <Button
                    title="Home"
                    onPress={() => { navigation.popToTop() }} />
            </View>
        </View>
    )
}

export default AboutScreen;

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
});