import {Text, View, StyleSheet} from "react-native";

export default function TextDemo() {
    const handlePress = (e) => {
        console.log(11111, e.nativeEvent)
    }
    return (
        <View style={styles.root}>
            <Text
                style={styles.txt}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                selectable={true}
                selectionColor={'red'}
                onPress={handlePress}
            >
                文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'skyblue'
    },
    txt: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: ''
    }
})
