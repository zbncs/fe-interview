import {View, StyleSheet, Text} from "react-native";

export default function TransformDemo() {
    return (
        <View style={styles.root}>
            <Text>1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: 100,
        height: 100,
        backgroundColor: '#3050ff',
        marginTop: 20,
        // 每一个对象中只能有一个属性
        transform: [
            {translateX: 200},
            {translateY: 200},
            {scale: 1.5},
            {rotate: '120deg'},
            {rotateY: '45deg'}
        ]
    }
})
