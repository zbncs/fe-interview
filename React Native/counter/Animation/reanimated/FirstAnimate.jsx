import Animated, {useSharedValue, withSpring} from 'react-native-reanimated'
import {Button, View, StyleSheet} from "react-native";
export default function FirstAnimate() {
    const width = useSharedValue(100)
    const handlePress = () => {
        width.value = withSpring(width.value + 50)
    }
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, {width}]}>
            </Animated.View>
            <Button title={'Click me'} onPress={handlePress} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    box: {
        height: 100,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        marginVertical: 64,
    }
})
