import {View, Text, Keyboard, TextInput, StyleSheet, Button} from "react-native";
import {useEffect} from "react";

export default function KeyboardDemo() {
    const onKeyboardShow = (e) => {
        console.log('show', e)
    }
    const onKeyboardHide = (e) => {
        console.log('hide', e)
    }
    useEffect(() => {
        const show = Keyboard.addListener('keyboardDidShow', onKeyboardShow)
        const hidden = Keyboard.addListener('keyboardDidHide', onKeyboardHide)

        return () => {
            show.remove()
            hidden.remove()
        }
    }, []);

    return (
        <View>
            <Button title={'点我'} onPress={() => {
                Keyboard.dismiss()
            }} />
            <TextInput style={styles.txtInp} />
        </View>
    )
}

const styles = StyleSheet.create({
    txtInp: {
        borderStyle: "solid",
        borderWidth: 1,
        marginTop: 100
    }
})

