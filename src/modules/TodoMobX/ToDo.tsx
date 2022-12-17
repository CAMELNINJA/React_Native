import React, { FC, useState } from "react";
import uuid from "react-native-uuid";
import { KeyboardAvoidingView, ScrollView, StyleSheet, TextInput,Button,TouchableWithoutFeedback,Keyboard, View,Dimensions,Platform} from "react-native";
import { observer } from "mobx-react-lite";
import TodoStore from "../../stores/TodoStore";
import TodoItem from "./ToDoLine";
import { Todo } from "../../models/Todo";


const window = Dimensions.get('window');

const TodoScreen: FC = observer(() => {
    const [text, setText] = useState<string>('')

    const handleAdd = () => {
        TodoStore.addTask({id: `${uuid.v4()}`, text: text, isDone: false})
    }

    return <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
        <View style={styles.inner}>
            <ScrollView>
            {TodoStore.todos.map((item: Todo) => <TodoItem task={item} key={item.id} />)}

        </ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
            <View style={{flexDirection:"row"}}>
        <TextInput
            style={styles.input}
            onChangeText={newText => setText(newText)}
            value={text}>
        </TextInput>
        <Button
            title="Add"
            onPress={() => handleAdd()}></Button>
            </View>
        </View>
    </TouchableWithoutFeedback>
        </View>
</KeyboardAvoidingView>
})

export default TodoScreen;

export const IMAGE_HEIGHT = window.width / 2;
const styles =StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: "black",

        margin: 10
    },
    input: {
        flex:2,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgba(217,169,169,0.6)',
        padding: 12,
    },
    button: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#fff",
        flex: 1,
        margin: 10
    },
    btnContainer: {
        backgroundColor: "white",

    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
});