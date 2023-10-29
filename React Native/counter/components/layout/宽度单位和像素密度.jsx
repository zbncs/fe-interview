import {Text, StyleSheet} from "react-native";

export default function WidthAndPxielRatio() {
    return (
        <Text style={styles.root}>
            {/*测试Text组件的宽度百分比*/}
        </Text>
    )
}

const styles = StyleSheet.create({
    root: {
        // width: '100%',
        backgroundColor: '#ff00ff'
    }
})
