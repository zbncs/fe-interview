import {View, StyleSheet, Button, Animated} from "react-native";
import {useRef} from "react";

export default function Anim1() {
    const marginLeft = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.root}>
            <Animated.View
                style={[
                    styles.view,
                    {marginLeft: marginLeft}
                ]}
            />
            <Button title={'点我'} onPress={() => {
                Animated.timing(marginLeft, {
                    toValue: 200,
                    duration: 1000,
                    useNativeDriver: false
                }).start()
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%'
    },
    view: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue',
        marginBottom: 100
    }
})
