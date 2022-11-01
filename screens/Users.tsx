import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from './Pram';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'UserList'>;

interface IUserData {
    id: string,
    userName: string,
}

const userDataModels: IUserData[] = [
    {
        id: '1',
        userName: 'test',
    },
    {
        id: '2',
        userName: 'test test',
    },
    {
        id: '3',
        userName: 'test test',
    },
    {
        id: '4',
        userName: 'test test',
    },
    {
        id: '5',
        userName: 'Timur Timur',
    },
    {
        id: '6',
        userName: 'test test',
    },
    {
        id: '7',
        userName: 'test test',
    },
    {
        id: '8',
        userName: 'test test',
    },
    {
        id: '9',
        userName: 'test test',
    },
    {
        id: '10',
        userName: 'test test',
    },
    {
        id: '11',
        userName: 'test test',
    },
];

function UserListItem({ data, navigation }: { data: IUserData, navigation: NavigationProp }) {
    return (
        <View style={styles.userItem}>
            <Text style={styles.userName}>{data.userName}</Text>
            <Button
                title="Profile"
                onPress={() => { navigation.navigate('UserProfile', { userName: data.userName }) }} />
        </View>
    )
}

function UserListScreen() {
    const navigation = useNavigation<NavigationProp>();

    const renderItem: ListRenderItem<IUserData> = ({ item }) => (
        <UserListItem data={item} navigation={navigation} />
    );

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.title}>User List</Text>

                <View style={styles.btn}>
                    <Button
                        title="Home"
                        onPress={() => { navigation.popToTop() }} />
                </View>

                <View style={styles.btn}>
                    <Button
                        title="About App"
                        onPress={() => { navigation.navigate('About') }} />
                </View>
            </View>

            <View style={{ flex: 2 }}>
                <FlatList
                    data={userDataModels}
                    renderItem={renderItem}
                    keyExtractor={(user: IUserData) => user.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} />
            </View>
        </View>
    )
}

export default UserListScreen;

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
    userItem: {
        width: 250,
        padding: 10,
        margin: 7,
        borderWidth: 1,
        borderRadius: 5,
    },
    userName: {
        fontSize: 15,
        marginBottom: 5,
    },
});