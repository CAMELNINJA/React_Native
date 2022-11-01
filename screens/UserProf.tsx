import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from './Pram';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'UserProfile'>;
type UserProfileRouteProp = RouteProp<RootStackParamList, 'UserProfile'>;

function UserProfileScreen() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<UserProfileRouteProp>();
    const userName = route.params.userName;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>
            <Text style={styles.userName}>Name: {userName}</Text>

            <View style={styles.btn}>
                <Button
                    title="Home"
                    onPress={() => { navigation.popToTop() }} />
            </View>

            <View style={styles.btn}>
                <Button
                    title="User List"
                    onPress={() => { navigation.goBack() }} />
            </View>

            <View style={styles.btn}>
                <Button
                    title="About App"
                    onPress={() => { navigation.navigate('About') }} />
            </View>
        </View>
    )
}

export default UserProfileScreen;

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
    userName: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
});