import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

import {useNavigation} from "@react-navigation/native";

import { RootStackParamList } from '../../models/Param';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;
function TextInputsScreen() {

    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <View style={styles.container}>
            {
                !isAuthenticated ? (
                    <>
                        <TextInput
                            value={userName}
                            style={
                               [
                                   styles.box,
                                   {borderColor: userName.length > 0 ? '#CBC3C366' : "red"}
                               ]
                            }
                            onChange={(prevText) => setUserName(prevText.nativeEvent.text)}
                        />
                        <TextInput
                            value={userPassword}
                            style={[
                                styles.box,
                                {
                                borderColor: userPassword.length >= 8 ? 'rgba(203,195,195,0.4)' : "red"
                            }]}
                            onChange={val => setUserPassword(val.nativeEvent.text)}
                            secureTextEntry={true}
                        />
                        <Pressable
                            onPress={() => {
                                if (userPassword.length >= 8 && userName.length > 0) setIsAuthenticated(true)
                            }}
                            style={[
                                styles.button,
                            {
                                backgroundColor: userPassword.length >= 8 && userName.length > 0 ? "black" : "gray",}
                        ]}>

                            <Text style={styles.text}>Login</Text>
                        </Pressable>
                    </>
                ) : <Text style={{fontSize: 20}}>{`Hi ${userName}!`} </Text>
            }
        </View>
    )
}

export default TextInputsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    text: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },
    box:{
        fontSize: 16,
        padding: 8,
        marginTop: 16,
        width: "80%",
        backgroundColor: '#CBC3C366',
        borderWidth: 2,
    },
    button:{
        flexDirection: "column",
        marginTop: 16,
        height: 60,
        width: 120,
        borderRadius: 16,
        justifyContent: "center",
    }
});