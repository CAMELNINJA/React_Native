import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from './Pram';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>

            <View style={styles.btn}>
                <Button
                    title="User List"
                    onPress={() => { navigation.navigate('UserList') }} />
            </View>


            <View style={styles.btn}>
                <Button
                    title="About App"
                    onPress={() => { navigation.navigate('About') }} />
            </View>
        </View>
    )
}

export default HomeScreen;

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