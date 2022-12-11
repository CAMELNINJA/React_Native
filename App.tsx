import {StyleSheet, Text, TouchableOpacity, View,Button} from 'react-native';
import {observer} from 'mobx-react-lite'
import {makeAutoObservable} from "mobx";

class Clicker {
    clicks = 0

    constructor() {
        makeAutoObservable(this)
    }

    addClick() {
        this.clicks += 1
    }
}

const clicker = new Clicker()

const App = observer(() => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{clicker.clicks}</Text>
        <Button onPress={() => clicker.addClick()} title="click" />
    </View>
))

export default App;