

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react-lite'
import {makeAutoObservable} from "mobx";

class Counter {
    count = 0

    private FONT_SIZE_INITIAL = 10

    constructor() {
        makeAutoObservable(this)
    }

    onPress(isAddition: Boolean) {
        let beAdded = isAddition ? 1 : -1
        this.count += beAdded
    }

    fontSize() {
        return Math.floor(Math.abs(this.count) / 5) + this.FONT_SIZE_INITIAL
    }
}

const counter = new Counter()

const App = observer(() => (
    <View style={styles.container}>
        <View style={styles.countContainer}>
            <Text style={{fontSize: counter.fontSize()}}>Count: {counter.count}</Text>
        </View>
        <View style={styles.countersContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    counter.onPress(true)
                }}
            >
                <Text>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    counter.onPress(false)
                }}
            >
                <Text>-</Text>
            </TouchableOpacity>
        </View>
    </View>
))

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 16
    },
    countContainer: {
        alignItems: "center",
        padding: 16,
    },
    countersContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 16
    }
});